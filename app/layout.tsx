import type { Metadata } from "next";
import { Bebas_Neue, Poppins } from "next/font/google";
import { headers } from "next/headers";
import Script from "next/script";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = "https://salifukamara.com";
const title = "Umar Kamara | Full-Stack Developer and AI Integration Engineer";
const description =
  "Umar Kamara is a full-stack developer and AI integration engineer based in Sierra Leone. Builds web applications with React and Node.js and integrates AI using the Anthropic SDK. Open for remote work.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Umar Kamara",
    "full-stack developer",
    "AI integration engineer",
    "Anthropic SDK",
    "Claude API",
    "Hedera blockchain",
    "Sierra Leone",
    "React",
    "Node.js",
    "remote developer",
  ],
  authors: [{ name: "Umar Kamara" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  verification: { google: "GUldVF9Oyxs5h5a63i8PhhKKOhItdkYyZsOfC-R9_uM" },
  icons: {
    icon: "/static/Skia.jpeg",
    apple: "/static/Skia.jpeg",
  },
  openGraph: {
    type: "website",
    siteName: "Umar Kamara",
    title,
    description:
      "Full-stack developer and AI integration engineer based in Sierra Leone. Builds with React, Node.js, and the Anthropic SDK. Open for remote work.",
    url: siteUrl,
    images: [{ url: "/static/profile.jpg", width: 1200, height: 630 }],
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    site: "@umar21_k",
    creator: "@umar21_k",
    title: "Umar Kamara | Full-Stack Developer and AI Integration Engineer",
    description:
      "Full-stack developer and AI integration engineer based in Sierra Leone. Builds with React, Node.js, and the Anthropic SDK. Open for remote work.",
    images: ["/static/profile.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Umar Kamara",
  url: siteUrl,
  image: `${siteUrl}/static/profile.jpg`,
  jobTitle: "Full-Stack Developer and AI Integration Engineer",
  description:
    "Full-stack developer and AI integration engineer based in Sierra Leone. Builds web applications with React and Node.js and integrates AI using the Anthropic SDK.",
  sameAs: [
    "https://github.com/umak21",
    "https://www.linkedin.com/in/umar-kamara-3aa528384",
    "https://x.com/umar21_k",
  ],
  knowsAbout: ["JavaScript", "React", "Node.js", "MongoDB", "Express", "AI Engineering", "Blockchain", "Hedera"],
  address: { "@type": "PostalAddress", addressCountry: "SL" },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <html lang="en" className={`${bebasNeue.variable} ${poppins.variable}`}>
      <body>
        <link rel="stylesheet" href="/fontawesome/css/all.min.css" />
        <Script
          id="json-ld"
          type="application/ld+json"
          nonce={nonce}
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="afterInteractive"
          nonce={nonce}
          async
          defer
        />
        {children}
      </body>
    </html>
  );
}
