import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lookinit.com"),
  title: {
    default: "Lookinit — AI-Powered Search",
    template: "%s — Lookinit",
  },
  description:
    "Lookinit is an AI search engine that delivers real answers with sources, images, and follow-up questions — powered by the latest LLMs.",
  keywords: ["AI search", "AI search engine", "smart search", "LLM search", "Lookinit"],
  authors: [{ name: "Lookinit", url: "https://lookinit.com" }],
  creator: "Lookinit",
  publisher: "Lookinit",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Lookinit — AI-Powered Search",
    description: "Ask anything. Get real answers.",
    url: "https://lookinit.com",
    siteName: "Lookinit",
    images: [{ url: "https://lookinit.com/logo-white.png", width: 1920, height: 1080, alt: "Lookinit" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@lookinit",
    creator: "@lookinit",
    title: "Lookinit — AI-Powered Search",
    description: "Ask anything. Get real answers.",
    images: ["https://lookinit.com/logo-white.png"],
  },
  alternates: { canonical: "https://lookinit.com" },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lookinit",
  url: "https://lookinit.com",
  logo: "https://lookinit.com/logo-white.png",
  sameAs: ["https://twitter.com/lookinit"],
  contactPoint: { "@type": "ContactPoint", email: "hello@lookinit.com", contactType: "customer support" },
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Lookinit",
  applicationCategory: "SearchApplication",
  operatingSystem: "Web",
  url: "https://app.lookinit.com",
  description: "AI-powered search engine that delivers real answers with sources, images, and follow-up questions.",
  offers: [
    { "@type": "Offer", price: "0", priceCurrency: "EUR", name: "Free" },
    { "@type": "Offer", price: "5.99", priceCurrency: "EUR", name: "Basic" },
    { "@type": "Offer", price: "9.99", priceCurrency: "EUR", name: "Pro" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="theme-color" content="#080808" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }} />
      </head>
      <body style={{ margin: 0, background: "#080808", color: "#f0f0f0" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
