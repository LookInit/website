"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Clock, RefreshCw } from "lucide-react";

interface Article {
  id: string;
  title: string;
  source: string;
  url: string;
  summary: string;
  time: string;
  image: string | null;
}

export default function NewsPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function fetchNews() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/news");
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to fetch news");
      setArticles(data.articles);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchNews();
  }, []);

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
        {loading && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", overflow: "hidden" }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} style={{ background: "#080808", padding: "24px 28px" }}>
                <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                  <div style={{ width: "60px", height: "18px", background: "rgba(255,255,255,0.06)", borderRadius: "100px" }} />
                  <div style={{ width: "120px", height: "18px", background: "rgba(255,255,255,0.04)", borderRadius: "100px" }} />
                </div>
                <div style={{ width: "80%", height: "18px", background: "rgba(255,255,255,0.06)", borderRadius: "4px", marginBottom: "8px" }} />
                <div style={{ width: "60%", height: "14px", background: "rgba(255,255,255,0.04)", borderRadius: "4px" }} />
              </div>
            ))}
          </div>
        )}

        {error && (
          <div style={{ textAlign: "center", padding: "60px 0" }}>
            <p style={{ color: "#f87171", fontSize: "14px", marginBottom: "16px" }}>{error}</p>
            <button
              onClick={fetchNews}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.6)",
                fontSize: "13px",
                padding: "8px 16px",
                borderRadius: "8px",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <RefreshCw size={13} /> Try again
            </button>
          </div>
        )}

        {!loading && !error && articles.length > 0 && (
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
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#080808";
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  {/* Thumbnail */}
                  {article.image && (
                    <div style={{ flexShrink: 0, width: "96px", height: "72px", borderRadius: "8px", overflow: "hidden", background: "rgba(255,255,255,0.04)" }}>
                      <img
                        src={article.image}
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                      />
                    </div>
                  )}

                  {/* Text */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
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

                    {article.summary && (
                      <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>
                        {article.summary}
                      </p>
                    )}
                  </div>

                  <ExternalLink
                    size={15}
                    style={{ color: "rgba(255,255,255,0.2)", flexShrink: 0, marginTop: "4px" }}
                  />
                </div>
              </a>
            ))}
          </div>
        )}

        <p style={{ textAlign: "center", marginTop: "32px", fontSize: "13px", color: "rgba(255,255,255,0.2)" }}>
          News powered by GNews · refreshed hourly
        </p>
      </section>
    </div>
  );
}
