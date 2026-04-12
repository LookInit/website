import { NextResponse } from "next/server";

export const revalidate = 3600; // cache for 1 hour

export async function GET() {
  const apiKey = process.env.GNEWS_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "GNEWS_API_KEY not set" }, { status: 500 });
  }

  try {
    const res = await fetch(
      `https://gnews.io/api/v4/top-headlines?category=technology&lang=en&max=12&apikey=${apiKey}`,
      { next: { revalidate: 3600 } },
    );

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json({ error: text }, { status: res.status });
    }

    const data = await res.json();

    const articles = (data.articles ?? []).map((a: any, i: number) => ({
      id: String(i),
      title: a.title,
      source: a.source?.name ?? "Unknown",
      url: a.url,
      summary: a.description ?? "",
      time: formatTime(a.publishedAt),
      image: a.image ?? null,
    }));

    return NextResponse.json({ articles });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

function formatTime(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}
