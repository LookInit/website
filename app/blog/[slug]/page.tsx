import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost, getPostSlugs, formatDate } from "@/lib/blog";
import ViewCounter from "@/components/ViewCounter";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const title = post.seo?.title || post.title;
  const description = post.seo?.description || post.brief;
  const image = post.ogMetaData?.image || post.coverImage?.url;
  const url = `https://lookinit.com/blog/${slug}`;

  return {
    title: `${title} — Lookinit Blog`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Lookinit",
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.brief,
    datePublished: post.publishedAt,
    author: { "@type": "Person", name: post.author.name },
    publisher: { "@type": "Organization", name: "Lookinit", url: "https://lookinit.com" },
    url: `https://lookinit.com/blog/${slug}`,
    ...(post.coverImage?.url ? { image: post.coverImage.url } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div style={{ paddingTop: "96px", paddingBottom: "96px" }}>
        {/* Back */}
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 24px 32px" }}>
          <Link
            href="/blog"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: "14px" }}
          >
            <ArrowLeft size={14} /> Back to blog
          </Link>
        </div>

        {/* Cover */}
        {post.coverImage?.url && (
          <div style={{ maxWidth: "860px", margin: "0 auto 48px", padding: "0 24px" }}>
            <img
              src={post.coverImage.url}
              alt={post.title}
              style={{ width: "100%", borderRadius: "14px", display: "block", maxHeight: "440px", objectFit: "cover" }}
            />
          </div>
        )}

        {/* Header */}
        <header style={{ maxWidth: "760px", margin: "0 auto", padding: "0 24px 48px" }}>
          {post.tags?.length > 0 && (
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "20px" }}>
              {post.tags.map((t) => (
                <span key={t.name} style={{ background: "rgba(99,102,241,0.15)", color: "#a5b4fc", fontSize: "11px", fontWeight: 600, padding: "3px 10px", borderRadius: "100px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  {t.name}
                </span>
              ))}
            </div>
          )}

          <h1
            style={{
              fontSize: "clamp(26px, 4vw, 42px)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: "20px",
            }}
          >
            {post.title}
          </h1>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              {post.author.profilePicture && (
                <img
                  src={post.author.profilePicture}
                  alt={post.author.name}
                  style={{ width: "32px", height: "32px", borderRadius: "50%", objectFit: "cover" }}
                />
              )}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.4)", fontSize: "13px" }}>
                <span>{post.author.name}</span>
                <span>·</span>
                <Clock size={12} />
                <span>{post.readTimeInMinutes} min read</span>
                <span>·</span>
                <span>{formatDate(post.publishedAt)}</span>
              </div>
            </div>
            <ViewCounter slug={post.slug} />
          </div>
        </header>

        {/* Body */}
        <article style={{ maxWidth: "760px", margin: "0 auto", padding: "0 24px" }}>
          <MDXRemote source={post.content} />
        </article>

        {/* Post styles */}
        <style>{`
          article h2 { color: #fff; font-size: 22px; font-weight: 700; margin: 40px 0 12px; }
          article h3 { color: #fff; font-size: 18px; font-weight: 600; margin: 32px 0 10px; }
          article p  { color: rgba(255,255,255,0.6); font-size: 16px; line-height: 1.8; margin-bottom: 20px; }
          article a  { color: #a5b4fc; text-decoration: underline; text-underline-offset: 3px; }
          article ul, article ol { color: rgba(255,255,255,0.6); font-size: 16px; line-height: 1.8; padding-left: 24px; margin-bottom: 20px; }
          article li { margin-bottom: 6px; }
          article pre { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 20px; overflow-x: auto; margin-bottom: 24px; }
          article code { font-family: ui-monospace, monospace; font-size: 14px; color: #e2e8f0; }
          article p code { background: rgba(255,255,255,0.08); padding: 2px 6px; border-radius: 4px; }
          article blockquote { border-left: 3px solid rgba(99,102,241,0.5); padding-left: 20px; margin: 0 0 20px; color: rgba(255,255,255,0.45); font-style: italic; }
          article img { max-width: 100%; border-radius: 10px; margin: 24px 0; }
          article hr { border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 40px 0; }
        `}</style>
      </div>
    </>
  );
}
