import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
  description: "The latest news from the world of AI, search, and the open web — updated hourly.",
  alternates: { canonical: "https://lookinit.com/news" },
  openGraph: {
    title: "AI News — Lookinit",
    description: "The latest from the world of AI, search, and the open web.",
    url: "https://lookinit.com/news",
    siteName: "Lookinit",
    images: [{ url: "https://lookinit.com/logo-white.png", width: 1920, height: 1080, alt: "Lookinit" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI News — Lookinit",
    description: "The latest from the world of AI, search, and the open web.",
    images: ["https://lookinit.com/logo-white.png"],
  },
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
