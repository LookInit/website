"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

// Static posts — replace with MongoDB fetch when ready
const posts = [
  {
    id: "1",
    title: "How RAG makes AI search actually useful",
    excerpt:
      "Retrieval-augmented generation is the reason Lookinit gives you cited, accurate answers instead of hallucinations. Here's how it works.",
    category: "Engineering",
    readTime: "5 min read",
    date: "Apr 8, 2026",
  },
  {
    id: "2",
    title: "Comparing Groq, Claude, and Mistral for search tasks",
    excerpt:
      "We benchmarked three leading AI models on 500 real user queries. The results were surprising — and shaped how we built model selection.",
    category: "Research",
    readTime: "7 min read",
    date: "Mar 28, 2026",
  },
  {
    id: "3",
    title: "Why we moved to a subdomain architecture",
    excerpt:
      "Separating the marketing site from the app wasn't just cosmetic. It unlocked faster load times, better SEO, and cleaner deployments.",
    category: "Product",
    readTime: "4 min read",
    date: "Mar 15, 2026",
  },
  {
    id: "4",
    title: "Building a semantic cache with Upstash",
    excerpt:
      "Caching AI responses by meaning, not exact text, cut our API costs by 30% without any noticeable quality drop. Here's the implementation.",
    category: "Engineering",
    readTime: "6 min read",
    date: "Feb 27, 2026",
  },
  {
    id: "5",
    title: "The future of search is conversational",
    excerpt:
      "Search boxes are dead. The next decade belongs to interfaces that remember context, suggest follow-ups, and understand what you actually mean.",
    category: "Insights",
    readTime: "3 min read",
    date: "Feb 10, 2026",
  },
  {
    id: "6",
    title: "Lookinit hits 10,000 searches",
    excerpt:
      "A milestone, a thank you, and a look at the most-asked questions so far — from 'how does photosynthesis work' to 'best ramen in Munich'.",
    category: "Company",
    readTime: "2 min read",
    date: "Jan 31, 2026",
  },
];

const categoryColors: Record<string, string> = {
  Engineering: "rgba(99,102,241,0.2)",
  Research: "rgba(16,185,129,0.2)",
  Product: "rgba(245,158,11,0.2)",
  Insights: "rgba(236,72,153,0.2)",
  Company: "rgba(59,130,246,0.2)",
};

const categoryText: Record<string, string> = {
  Engineering: "#a5b4fc",
  Research: "#6ee7b7",
  Product: "#fcd34d",
  Insights: "#f9a8d4",
  Company: "#93c5fd",
};

export default function BlogPage() {
  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Header */}
      <section style={{ padding: "80px 24px 56px", textAlign: "center" }}>
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
          Blog
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
          Ideas, updates & research
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.45)",
            fontSize: "16px",
            maxWidth: "400px",
            margin: "0 auto",
          }}
        >
          Engineering deep-dives, product thinking, and notes from building Lookinit.
        </p>
      </section>

      {/* Posts grid */}
      <section style={{ padding: "0 24px 100px", maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "20px",
          }}
        >
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              style={{ textDecoration: "none" }}
            >
              <article
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "14px",
                  padding: "28px",
                  height: "100%",
                  transition: "all 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "rgba(255,255,255,0.05)";
                  el.style.borderColor = "rgba(255,255,255,0.12)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "rgba(255,255,255,0.03)";
                  el.style.borderColor = "rgba(255,255,255,0.07)";
                  el.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    background: categoryColors[post.category] || "rgba(255,255,255,0.1)",
                    color: categoryText[post.category] || "rgba(255,255,255,0.6)",
                    fontSize: "11px",
                    fontWeight: 600,
                    padding: "3px 10px",
                    borderRadius: "100px",
                    marginBottom: "16px",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {post.category}
                </div>

                <h2
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#fff",
                    lineHeight: 1.4,
                    marginBottom: "10px",
                  }}
                >
                  {post.title}
                </h2>

                <p
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "20px",
                  }}
                >
                  {post.excerpt}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "rgba(255,255,255,0.3)",
                      fontSize: "12px",
                    }}
                  >
                    <Clock size={12} />
                    {post.readTime} · {post.date}
                  </div>
                  <ArrowRight size={14} style={{ color: "rgba(255,255,255,0.3)" }} />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
