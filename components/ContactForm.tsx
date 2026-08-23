"use client";

import { useRef, useState } from "react";

declare global {
  interface Window {
    turnstile?: { reset: () => void };
  }
}

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "0x4AAAAAADWw_560ADglPIgm";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    setSubmitting(true);
    setError("");

    try {
      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());

      const res = await fetch(form.action, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data?.error || "Something went wrong. Please try again.");
        setSubmitting(false);
        window.turnstile?.reset();
      }
    } catch {
      setError("Network error. Please check your connection.");
      setSubmitting(false);
      window.turnstile?.reset();
    }
  }

  return (
    <>
      <div className="fs-success" data-fs-success style={{ display: submitted ? "block" : "none" }}>
        <i className="fas fa-circle-check" aria-hidden="true" />
        <h3>Message Sent!</h3>
        <p>Thank you for reaching out. I&apos;ll respond within 24 hours.</p>
      </div>
      <div className="fs-error" data-fs-error role="alert">
        {error}
      </div>

      <form
        id="contact-form"
        ref={formRef}
        action="/api/contact"
        method="POST"
        noValidate
        aria-label="Contact form"
        onSubmit={handleSubmit}
        style={{ display: submitted ? "none" : undefined }}
      >
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">
              Name <span className="req" aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
              required
              autoComplete="name"
              data-fs-field
            />
            <span className="form-error" data-fs-error="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email <span className="req" aria-hidden="true">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              required
              autoComplete="email"
              data-fs-field
            />
            <span className="form-error" data-fs-error="email" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Project enquiry, collaboration, consultation…"
            data-fs-field
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Message <span className="req" aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell me about your project: scope, goals, and timeline"
            required
            rows={6}
            data-fs-field
          />
          <span className="form-error" data-fs-error="message" />
        </div>
        <div className="cf-turnstile" data-sitekey={TURNSTILE_SITE_KEY} data-theme="dark" />
        <button type="submit" className="btn btn-primary btn-submit" data-fs-submit-btn disabled={submitting}>
          <i className="fas fa-paper-plane" aria-hidden="true" /> Send Message
        </button>
      </form>
    </>
  );
}
