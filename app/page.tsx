import type { Metadata } from "next";
import Link from "next/link";
import { Search, Zap, Globe, Brain, Shield, ArrowRight, Sparkles, MessageSquare, Image } from "lucide-react";

export const metadata: Metadata = {
  title: "Lookinit — AI-Powered Search Engine",
  description: "Lookinit gives you real AI-generated answers from live web sources — with citations, images, and follow-up questions. Start free, no sign-up required.",
  alternates: { canonical: "https://lookinit.com" },
  openGraph: {
    title: "Lookinit — AI-Powered Search Engine",
    description: "Real answers, not just links. Lookinit combines live web search with powerful AI to give you direct, cited answers instantly.",
    url: "https://lookinit.com",
    siteName: "Lookinit",
    images: [{ url: "https://lookinit.com/logo-white.png", width: 1920, height: 1080, alt: "Lookinit — AI-Powered Search" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@lookinit",
    title: "Lookinit — AI-Powered Search Engine",
    description: "Real answers, not just links. Lookinit combines live web search with powerful AI.",
    images: ["https://lookinit.com/logo-white.png"],
  },
};

const features = [
  {
    icon: <Brain size={22} />,
    title: "Real AI Answers",
    description: "Not just links. Lookinit reads the web and synthesizes a direct, cited answer from multiple sources.",
  },
  {
    icon: <Globe size={22} />,
    title: "Live Web Results",
    description: "Pulls from real-time search across the open web — news, blogs, docs, and more. Always fresh.",
  },
  {
    icon: <Zap size={22} />,
    title: "Multiple AI Models",
    description: "Switch between Groq, Claude, Mistral, DeepSeek, and more. Pick the model that fits the task.",
  },
  {
    icon: <Image size={22} />,
    title: "Images & Videos",
    description: "Relevant visuals automatically surfaced alongside every answer. No extra searching needed.",
  },
  {
    icon: <MessageSquare size={22} />,
    title: "Follow-up Questions",
    description: "AI suggests what to ask next. Dig deeper without starting over — conversation-style search.",
  },
  {
    icon: <Shield size={22} />,
    title: "Search History",
    description: "Every search saved to your account. Pick up where you left off, anytime, from any device.",
  },
];

const stats = [
  { value: "10+", label: "AI Models" },
  { value: "3", label: "Search Providers" },
  { value: "< 3s", label: "Avg Response Time" },
  { value: "Free", label: "To Start" },
];

const exampleQueries = [
  "What is the latest on GPT-5?",
  "Best headphones under €100",
  "How does RAG work in LLMs?",
  "Flights from Berlin to Tokyo",
];

export default function Home() {
  return (
    <>
      <style>{`
        .query-chip:hover { background: rgba(255,255,255,0.08) !important; color: rgba(255,255,255,0.8) !important; }
        .feature-card:hover { background: rgba(99,102,241,0.05) !important; }
      `}</style>

      <div style={{ overflowX: "hidden" }}>
        {/* Hero */}
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "120px 24px 80px",
            position: "relative",
            textAlign: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "20%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "600px",
              height: "400px",
              background: "radial-gradient(ellipse at center, rgba(99,102,241,0.12) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.3)",
              borderRadius: "100px",
              padding: "6px 14px",
              marginBottom: "32px",
              fontSize: "13px",
              color: "#a5b4fc",
              fontWeight: 500,
            }}
          >
            <Sparkles size={13} />
            AI-powered search engine
          </div>

          <h1
            style={{
              fontSize: "clamp(40px, 7vw, 80px)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: "800px",
              margin: "0 0 24px",
              background: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.6) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Search smarter.
            <br />
            Get real answers.
          </h1>

          <p
            style={{
              fontSize: "clamp(16px, 2.5vw, 20px)",
              color: "rgba(255,255,255,0.5)",
              maxWidth: "520px",
              lineHeight: 1.7,
              margin: "0 0 48px",
            }}
          >
            Lookinit combines live web search with powerful AI to give you
            direct, cited answers — not a list of links to sift through.
          </p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: "64px",
            }}
          >
            <Link
              href="https://app.lookinit.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                color: "#fff",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 600,
                padding: "12px 24px",
                borderRadius: "10px",
                boxShadow: "0 0 30px rgba(99,102,241,0.3)",
              }}
            >
              <Search size={16} />
              Start searching free
            </Link>
            <Link
              href="/pricing"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.8)",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 500,
                padding: "12px 24px",
                borderRadius: "10px",
              }}
            >
              View pricing
              <ArrowRight size={15} />
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              justifyContent: "center",
              maxWidth: "700px",
            }}
          >
            {exampleQueries.map((q) => (
              <Link
                key={q}
                href={`https://app.lookinit.com?q=${encodeURIComponent(q)}`}
                className="query-chip"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "8px",
                  padding: "8px 14px",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  transition: "all 0.15s",
                }}
              >
                {q}
              </Link>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            padding: "48px 24px",
          }}
        >
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "24px",
              textAlign: "center",
            }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontSize: "clamp(28px, 4vw, 40px)",
                    fontWeight: 800,
                    background: "linear-gradient(135deg, #fff, #a5b4fc)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: "4px",
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          style={{ padding: "100px 24px", maxWidth: "1200px", margin: "0 auto" }}
        >
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#a5b4fc",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "12px",
              }}
            >
              What makes it different
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                background: "linear-gradient(180deg, #fff, rgba(255,255,255,0.6))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Built different from day one
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            {features.map((f) => (
              <div
                key={f.title}
                className="feature-card"
                style={{
                  background: "#080808",
                  padding: "36px 32px",
                  transition: "background 0.2s",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    background: "rgba(99,102,241,0.12)",
                    border: "1px solid rgba(99,102,241,0.2)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#a5b4fc",
                    marginBottom: "20px",
                  }}
                >
                  {f.icon}
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#fff", marginBottom: "10px" }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section
          style={{
            padding: "80px 24px",
            background: "rgba(255,255,255,0.02)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#a5b4fc",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "12px",
              }}
            >
              How it works
            </p>
            <h2
              style={{
                fontSize: "clamp(26px, 4vw, 44px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                marginBottom: "56px",
                background: "linear-gradient(180deg, #fff, rgba(255,255,255,0.6))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              From question to answer in seconds
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "32px",
                textAlign: "left",
              }}
            >
              {[
                { step: "01", title: "Ask anything", desc: "Type your question naturally. No keywords, no boolean operators. Just ask like you would a person." },
                { step: "02", title: "AI reads the web", desc: "Lookinit searches the live web, scrapes relevant pages, and vectorizes the content in real time." },
                { step: "03", title: "Get a real answer", desc: "A cited, structured answer streams back in seconds. With images, follow-ups, and source links." },
              ].map((item) => (
                <div key={item.step}>
                  <div style={{ fontSize: "12px", fontWeight: 700, color: "rgba(99,102,241,0.6)", letterSpacing: "0.1em", marginBottom: "12px" }}>
                    {item.step}
                  </div>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#fff", marginBottom: "10px" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "100px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <div
              style={{
                background: "rgba(99,102,241,0.08)",
                border: "1px solid rgba(99,102,241,0.2)",
                borderRadius: "16px",
                padding: "48px 40px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-60px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "300px",
                  height: "200px",
                  background: "radial-gradient(ellipse, rgba(99,102,241,0.2) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />
              <h2 style={{ fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "16px", color: "#fff" }}>
                Ready to search smarter?
              </h2>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", lineHeight: 1.7, marginBottom: "32px" }}>
                Start free. No credit card required. Upgrade when you need more.
              </p>
              <Link
                href="https://app.lookinit.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: 600,
                  padding: "13px 28px",
                  borderRadius: "10px",
                  boxShadow: "0 0 40px rgba(99,102,241,0.35)",
                }}
              >
                <Search size={16} />
                Start for free
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
