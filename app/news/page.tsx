"use client";

import { ExternalLink, Clock } from "lucide-react";

// Static placeholder — wire to /api/news from the main app when on same infra
const articles = [
  {
    id: "1",
    title: "OpenAI releases GPT-5 with significantly improved reasoning",
    source: "The Verge",
    url: "#",
    summary:
      "OpenAI's latest flagship model shows major gains in mathematical reasoning, coding, and multi-step problem solving over its predecessor.",
    time: "2 hours ago",
    category: "AI",
  },
  {
    id: "2",
    title: "EU AI Act compliance deadline draws closer for tech firms",
    source: "Reuters",
    url: "#",
    summary:
      "European companies deploying high-risk AI systems face a tight timeline. Legal experts outline what needs to happen before August.",
    time: "5 hours ago",
    category: "Policy",
  },
  {
    id: "3",
    title: "Anthropic raises $3.5B in new funding round",
    source: "TechCrunch",
    url: "#",
    summary:
      "The AI safety company secures fresh capital to accelerate Claude development and expand its enterprise offering globally.",
    time: "8 hours ago",
    category: "Business",
  },
  {
    id: "4",
    title: "Google unveils real-time AI search overhaul",
    source: "Bloomberg",
    url: "#",
    summary:
      "Search Generative Experience gets a major update, threatening to reshape how billions of users interact with the web.",
    time: "Yesterday",
    category: "Search",
  },
  {
    id: "5",
    title: "Meta's open-source LLaMA 4 outperforms closed models on key benchmarks",
    source: "Wired",
    url: "#",
    summary:
      "The latest open-weight release from Meta closes the gap with proprietary models, reigniting debates about open vs. closed AI development.",
    time: "Yesterday",
    category: "AI",
  },
  {
    id: "6",
    title: "Mistral AI expands model lineup with specialised coding variant",
    source: "VentureBeat",
    url: "#",
    summary:
      "The Paris-based startup launches a fine-tuned model aimed at developer workflows, challenging GitHub Copilot and Cursor in the coding assistant space.",
    time: "2 days ago",
    category: "AI",
  },
];

const categoryColors: Record<string, string> = {
  AI: "rgba(99,102,241,0.2)",
  Policy: "rgba(245,158,11,0.2)",
  Business: "rgba(16,185,129,0.2)",
  Search: "rgba(236,72,153,0.2)",
};

const categoryText: Record<string, string> = {
  AI: "#a5b4fc",
  Policy: "#fcd34d",
  Business: "#6ee7b7",
  Search: "#f9a8d4",
};

export default function NewsPage() {
  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Header */}
      <section style={{ padding: "80px 24px 48px", textAlign: "center" }}>
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
          News
        </p>
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            background: "linear-gradient(180deg, #fff, rgba(255,255,255,0.6))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "16px",
          }}
        >
          What&apos;s happening in AI
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.45)",
            fontSize: "16px",
            maxWidth: "380px",
            margin: "0 auto",
          }}
        >
          The latest from the world of AI, search, and the open web.
        </p>
      </section>

      {/* Articles */}
      <section style={{ padding: "0 24px 100px", maxWidth: "860px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", overflow: "hidden" }}>
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                background: "#080808",
                padding: "24px 28px",
                textDecoration: "none",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255,255,255,0.02)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#080808";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "16px",
                }}
              >
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "8px",
                    }}
                  >
                    <span
                      style={{
                        background: categoryColors[article.category] || "rgba(255,255,255,0.1)",
                        color: categoryText[article.category] || "rgba(255,255,255,0.6)",
                        fontSize: "10px",
                        fontWeight: 700,
                        padding: "2px 8px",
                        borderRadius: "100px",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {article.category}
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.3)",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <Clock size={11} />
                      {article.time} · {article.source}
                    </span>
                  </div>

                  <h2
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#fff",
                      lineHeight: 1.4,
                      marginBottom: "8px",
                    }}
                  >
                    {article.title}
                  </h2>

                  <p
                    style={{
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.4)",
                      lineHeight: 1.6,
                    }}
                  >
                    {article.summary}
                  </p>
                </div>

                <ExternalLink
                  size={15}
                  style={{ color: "rgba(255,255,255,0.2)", flexShrink: 0, marginTop: "4px" }}
                />
              </div>
            </a>
          ))}
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: "32px",
            fontSize: "13px",
            color: "rgba(255,255,255,0.2)",
          }}
        >
          News updates powered by GNews API — refreshed hourly.
        </p>
      </section>
    </div>
  );
}
