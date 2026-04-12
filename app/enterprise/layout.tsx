import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise",
  description: "Lookinit for teams and organisations. Dedicated infrastructure, custom AI models, SSO, and SLA-backed support.",
  alternates: { canonical: "https://lookinit.com/enterprise" },
  openGraph: {
    title: "Enterprise — Lookinit",
    description: "AI-powered search for teams. Custom infrastructure, SSO, and priority support.",
    url: "https://lookinit.com/enterprise",
    siteName: "Lookinit",
    images: [{ url: "https://lookinit.com/logo-white.png", width: 1920, height: 1080, alt: "Lookinit" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise — Lookinit",
    description: "AI-powered search for teams. Custom infrastructure, SSO, and priority support.",
    images: ["https://lookinit.com/logo-white.png"],
  },
};

export default function EnterpriseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
