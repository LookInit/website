import type { MetadataRoute } from "next";
import { getPostSlugs } from "@/lib/hashnode";

const BASE = "https://lookinit.com";

const staticRoutes: MetadataRoute.Sitemap = [
  { url: BASE,                    lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
  { url: `${BASE}/pricing`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  { url: `${BASE}/blog`,          lastModified: new Date(), changeFrequency: "daily",   priority: 0.9 },
  { url: `${BASE}/enterprise`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/news`,          lastModified: new Date(), changeFrequency: "hourly",  priority: 0.7 },
  { url: `${BASE}/about`,         lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/privacy`,       lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
  { url: `${BASE}/terms`,         lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogRoutes: MetadataRoute.Sitemap = [];

  try {
    const slugs = await getPostSlugs();
    blogRoutes = slugs.map((slug) => ({
      url: `${BASE}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch {
    // Don't fail sitemap generation if Hashnode is unreachable
  }

  return [...staticRoutes, ...blogRoutes];
}
