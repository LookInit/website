import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, honest pricing. Start free, upgrade when you need more. Lookinit plans from €0 to €9.99/month — no hidden fees.",
  alternates: { canonical: "https://lookinit.com/pricing" },
  openGraph: {
    title: "Pricing — Lookinit",
    description: "Start free. Unlimited searches from €5.99/month. No hidden fees.",
    url: "https://lookinit.com/pricing",
    siteName: "Lookinit",
    images: [{ url: "https://lookinit.com/logo-white.png", width: 1920, height: 1080, alt: "Lookinit" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing — Lookinit",
    description: "Start free. Unlimited searches from €5.99/month.",
    images: ["https://lookinit.com/logo-white.png"],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Can I cancel anytime?", acceptedAnswer: { "@type": "Answer", text: "Yes. You can cancel your subscription at any time from your account settings. You'll keep access until the end of your billing period." } },
    { "@type": "Question", name: "What happens when I hit the free search limit?", acceptedAnswer: { "@type": "Answer", text: "The counter resets every 24 hours. If you need more, upgrading to Basic or Pro gives you unlimited searches immediately." } },
    { "@type": "Question", name: "Which AI models are available?", acceptedAnswer: { "@type": "Answer", text: "Free and Basic plans include Groq-powered models (Llama, Mistral). Pro adds Claude, DeepSeek, Cohere, and image generation." } },
    { "@type": "Question", name: "Is there a free trial for paid plans?", acceptedAnswer: { "@type": "Answer", text: "We offer a free tier with no time limit. Paid plans start immediately upon checkout — no trial period, but you can cancel anytime." } },
    { "@type": "Question", name: "Do you offer student or non-profit discounts?", acceptedAnswer: { "@type": "Answer", text: "Yes. Reach out via the Enterprise form and we'll sort something out." } },
  ],
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  );
}
