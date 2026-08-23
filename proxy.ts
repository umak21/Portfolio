import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  const scriptSrc =
    process.env.NODE_ENV === "development"
      ? `'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval' https://challenges.cloudflare.com`
      : `'self' 'nonce-${nonce}' 'strict-dynamic' https://challenges.cloudflare.com`;

  const csp = `default-src 'self'; script-src ${scriptSrc}; style-src 'self'; font-src 'self'; img-src 'self' data: https://cdn.simpleicons.org; connect-src 'self' https://challenges.cloudflare.com; frame-src https://challenges.cloudflare.com;`;

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  response.headers.set("Content-Security-Policy", csp);

  return response;
}

export const config = {
  matcher: [
    {
      source: "/((?!_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
