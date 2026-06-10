import type { Metadata } from "next";
import { getPosts, type PostSummary } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog — Lookinit",
  description: "Engineering deep-dives, product thinking, and notes from building Lookinit.",
  alternates: { canonical: "https://lookinit.com/blog" },
  openGraph: {
    title: "Blog — Lookinit",
    description: "Engineering deep-dives, product thinking, and notes from building Lookinit.",
    url: "https://lookinit.com/blog",
    siteName: "Lookinit",
    type: "website",
  },
};

export default function BlogPage() {
  const posts: PostSummary[] = getPosts();

  return (
    <div style={{ paddingTop: "80px" }}>
      <section style={{ padding: "80px 24px 56px", textAlign: "center" }}>
        <p style={{ fontSize: "13px", fontWeight: 600, color: "#a5b4fc", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>
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
          Ideas, updates &amp; research
        </h1>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "16px", maxWidth: "400px", margin: "0 auto" }}>
          Engineering deep-dives, product thinking, and notes from building Lookinit.
        </p>
      </section>

      <section style={{ padding: "0 24px 100px", maxWidth: "1100px", margin: "0 auto" }}>
        {posts.length === 0 && (
          <p style={{ textAlign: "center", color: "rgba(255,255,255,0.3)", fontSize: "14px" }}>
            No posts yet — check back soon.
          </p>
        )}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "20px" }}>
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
