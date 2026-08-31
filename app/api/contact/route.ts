import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

let resend: Resend | null = null;
function getResend() {
  if (!resend) resend = new Resend(process.env.RESEND_API_KEY);
  return resend;
}

const rateMap = new Map<string, { count: number; ts: number }>();
const RATE_WINDOW = 10 * 60 * 1000;
const RATE_MAX = 5;

function isRateLimited(ip: string) {
  const now = Date.now();
  const entry = rateMap.get(ip);

  if (!entry || now - entry.ts > RATE_WINDOW) {
    rateMap.set(ip, { count: 1, ts: now });
    return false;
  }
  if (entry.count >= RATE_MAX) return true;
  entry.count++;
  return false;
}

function esc(str: string) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in 10 minutes." },
      { status: 429, headers: { "Retry-After": "600" } }
    );
  }

  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, subject, message, "cf-turnstile-response": turnstileToken } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email and message are required." }, { status: 400 });
  }

  if (name.length > 100 || email.length > 254 || (subject && subject.length > 200) || message.length > 5000) {
    return NextResponse.json({ error: "One or more fields exceed the maximum allowed length." }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (!turnstileToken) {
    return NextResponse.json({ error: "Please complete the CAPTCHA." }, { status: 400 });
  }

  const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      secret: process.env.TURNSTILE_SECRET_KEY,
      response: turnstileToken,
      remoteip: ip,
    }),
  });
  const verifyData = await verifyRes.json();
  if (!verifyData.success) {
    return NextResponse.json({ error: "CAPTCHA verification failed. Please try again." }, { status: 400 });
  }

  try {
    await getResend().emails.send({
      from: "Umar Kamara Portfolio <hello@umarkamara.com>",
      to: ["umar21kamara@gmail.com"],
      replyTo: email,
      subject: subject
        ? `[Portfolio] ${subject.replace(/[\r\n]/g, " ")}`
        : `[Portfolio] New enquiry from ${name.replace(/[\r\n]/g, " ")}`,
      html: `
                <div style="font-family:sans-serif;max-width:600px;color:#1e293b">
                    <h2 style="color:#e63946;margin-bottom:4px">New Portfolio Enquiry</h2>
                    <hr style="border:none;border-top:1px solid #e2e8f0;margin-bottom:20px">
                    <p><strong>Name:</strong> ${esc(name)}</p>
                    <p><strong>Email:</strong> <a href="mailto:${esc(email)}" style="color:#e63946">${esc(email)}</a></p>
                    <p><strong>Subject:</strong> ${subject ? esc(subject) : "N/A"}</p>
                    <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0">
                    <p><strong>Message:</strong></p>
                    <p style="white-space:pre-wrap;line-height:1.7">${esc(message)}</p>
                    <hr style="border:none;border-top:1px solid #e2e8f0;margin-top:32px">
                    <p style="font-size:12px;color:#94a3b8">Sent from matadi.dev</p>
                </div>
            `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
