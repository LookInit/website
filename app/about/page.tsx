import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Lookinit, our mission, and the team behind the AI-powered search engine.",
  alternates: { canonical: "https://lookinit.com/about" },
  openGraph: {
    title: "About — Lookinit",
    description: "Learn about Lookinit, our mission, and the team behind the AI-powered search engine.",
    url: "https://lookinit.com/about",
    siteName: "Lookinit",
    images: [{ url: "https://lookinit.com/logo-white.png", width: 1920, height: 1080, alt: "Lookinit" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Lookinit",
    description: "Learn about Lookinit, our mission, and the team behind the AI-powered search engine.",
    images: ["https://lookinit.com/logo-white.png"],
  },
};

export default function AboutPage() {
  return (
    <div style={{ paddingTop: "96px", paddingBottom: "96px", maxWidth: "760px", margin: "0 auto", padding: "96px 24px" }}>
      <h1
        style={{
          fontSize: "clamp(32px, 5vw, 52px)",
          fontWeight: 700,
          background: "linear-gradient(135deg, #fff 0%, #a5b4fc 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "16px",
          lineHeight: 1.15,
        }}
      >
        About Lookinit
      </h1>
      <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "18px", lineHeight: 1.7, marginBottom: "48px" }}>
        We&apos;re building the search engine we always wanted — one that actually understands your question and gives you a real answer.
      </p>

      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ color: "#fff", fontSize: "22px", fontWeight: 600, marginBottom: "12px" }}>Our Mission</h2>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "16px", lineHeight: 1.8 }}>
          Search hasn&apos;t fundamentally changed in decades. You type a query, get a wall of blue links, and spend the next ten minutes clicking around hoping to piece together an answer. Lookinit changes that. We combine the latest large language models with real-time web retrieval so you get a concise, cited answer in seconds — no link-hopping required.
        </p>
      </section>

      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ color: "#fff", fontSize: "22px", fontWeight: 600, marginBottom: "12px" }}>What We Build</h2>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "16px", lineHeight: 1.8 }}>
          Lookinit is an AI-powered search engine that delivers direct answers with sources, follow-up suggestions, images, and video results — all in one place. Whether you&apos;re researching a topic, fact-checking a claim, or just curious, Lookinit gives you the full picture without the noise.
        </p>
      </section>

      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ color: "#fff", fontSize: "22px", fontWeight: 600, marginBottom: "12px" }}>Our Values</h2>
        <ul style={{ color: "rgba(255,255,255,0.55)", fontSize: "16px", lineHeight: 2, paddingLeft: "20px" }}>
          <li><strong style={{ color: "rgba(255,255,255,0.8)" }}>Transparency</strong> — every answer cites its sources so you can verify what you read.</li>
          <li><strong style={{ color: "rgba(255,255,255,0.8)" }}>Privacy</strong> — we don&apos;t sell your data or build advertising profiles. Your searches are yours.</li>
          <li><strong style={{ color: "rgba(255,255,255,0.8)" }}>Accuracy</strong> — we ground AI responses in real web results to minimise hallucination.</li>
          <li><strong style={{ color: "rgba(255,255,255,0.8)" }}>Accessibility</strong> — a generous free tier means anyone can use Lookinit, not just paying subscribers.</li>
        </ul>
      </section>

      <section>
        <h2 style={{ color: "#fff", fontSize: "22px", fontWeight: 600, marginBottom: "12px" }}>Get in Touch</h2>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "16px", lineHeight: 1.8 }}>
          Have a question, partnership proposal, or just want to say hello? Reach us through our{" "}
          <a href="/enterprise#contact" style={{ color: "#a5b4fc", textDecoration: "none" }}>Enterprise contact form</a>{" "}
          or email us at{" "}
          <a href="mailto:hello@lookinit.com" style={{ color: "#a5b4fc", textDecoration: "none" }}>hello@lookinit.com</a>.
        </p>
      </section>
    </div>
  );
}
