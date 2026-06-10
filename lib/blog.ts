import fs from "fs";
import path from "path";
import matter from "gray-matter";
export { formatDate } from "@/lib/format";

const POSTS_DIR = path.join(process.cwd(), "content/blog");

export interface PostSummary {
  slug: string;
  title: string;
  brief: string;
  publishedAt: string;
  readTimeInMinutes: number;
  tags: { name: string }[];
  coverImage: { url: string } | null;
  author: { name: string; profilePicture: string };
}

export interface PostFull extends PostSummary {
  content: string;
  seo: { title: string; description: string } | null;
  ogMetaData: { image: string } | null;
}

function calcReadTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

function slugify(filename: string): string {
  return filename.replace(/\.mdx?$/, "");
}

function parsePost(filename: string): PostFull | null {
  const filePath = path.join(POSTS_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  if (!data.title || !data.publishedAt) return null;

  return {
    slug: data.slug ?? slugify(filename),
    title: data.title,
    brief: data.brief ?? content.replace(/[#*`>\-]/g, "").trim().split("\n").find(Boolean)?.slice(0, 160) ?? "",
    publishedAt: data.publishedAt,
    readTimeInMinutes: data.readTimeInMinutes ?? calcReadTime(content),
    tags: Array.isArray(data.tags) ? data.tags.map((t: string) => ({ name: t })) : [],
    coverImage: data.coverImage ? { url: data.coverImage } : null,
    author: {
      name: data.author?.name ?? "Lookinit",
      profilePicture: data.author?.profilePicture ?? "",
    },
    content,
    seo: data.seo ?? null,
    ogMetaData: data.ogImage ? { image: data.ogImage } : null,
  };
}

export function getPosts(): PostSummary[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  const files = fs.readdirSync(POSTS_DIR).filter((f) => /\.mdx?$/.test(f));
  return files
    .map(parsePost)
    .filter(Boolean)
    .sort((a, b) => new Date(b!.publishedAt).getTime() - new Date(a!.publishedAt).getTime()) as PostSummary[];
}

export function getPost(slug: string): PostFull | null {
  if (!fs.existsSync(POSTS_DIR)) return null;
  const files = fs.readdirSync(POSTS_DIR).filter((f) => /\.mdx?$/.test(f));
  for (const file of files) {
    const post = parsePost(file);
    if (post?.slug === slug) return post;
  }
  return null;
}

export function getPostSlugs(): string[] {
  return getPosts().map((p) => p.slug);
}

