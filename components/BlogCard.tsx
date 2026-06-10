"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { formatDate } from "@/lib/format";
import type { PostSummary } from "@/lib/blog";
import ViewCounter from "@/components/ViewCounter";

const tagColor = (tag: string): [string, string] => {
  const map: Record<string, [string, string]> = {
    Engineering: ["rgba(99,102,241,0.2)", "#a5b4fc"],
    Research:    ["rgba(16,185,129,0.2)",  "#6ee7b7"],
    Product:     ["rgba(245,158,11,0.2)",  "#fcd34d"],
    Insights:    ["rgba(236,72,153,0.2)",  "#f9a8d4"],
    Company:     ["rgba(59,130,246,0.2)",  "#93c5fd"],
  };
  return map[tag] ?? ["rgba(255,255,255,0.08)", "rgba(255,255,255,0.5)"];
};

export default function BlogCard({ post }: { post: PostSummary }) {
  const firstTag = post.tags?.[0]?.name;
  const [bg, text] = firstTag ? tagColor(firstTag) : ["rgba(255,255,255,0.08)", "rgba(255,255,255,0.5)"];

  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
      <article
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "14px",
          overflow: "hidden",
          height: "100%",
          transition: "all 0.2s",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
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
        {post.coverImage?.url && (
          <div style={{ width: "100%", height: "180px", overflow: "hidden" }}>
            <img
              src={post.coverImage.url}
              alt={post.title}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        )}

        <div style={{ padding: "28px", flex: 1, display: "flex", flexDirection: "column" }}>
          {firstTag && (
            <div style={{ display: "inline-block", background: bg, color: text, fontSize: "11px", fontWeight: 600, padding: "3px 10px", borderRadius: "100px", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              {firstTag}
            </div>
          )}

          <h2 style={{ fontSize: "16px", fontWeight: 700, color: "#fff", lineHeight: 1.4, marginBottom: "10px" }}>
            {post.title}
          </h2>

          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: "20px", flex: 1 }}>
            {post.brief}
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.3)", fontSize: "12px" }}>
              <Clock size={12} />
              {post.readTimeInMinutes} min · {formatDate(post.publishedAt)}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <ViewCounter slug={post.slug} readOnly />
              <ArrowRight size={14} style={{ color: "rgba(255,255,255,0.3)" }} />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
