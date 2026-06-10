"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { doc, getDoc, setDoc, increment } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function ViewCounter({ slug, readOnly = false }: { slug: string; readOnly?: boolean }) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const ref = doc(db, "blog_views", slug);

    async function run() {
      try {
        if (!readOnly) {
          await setDoc(ref, { views: increment(1) }, { merge: true });
        }
        const snap = await getDoc(ref);
        setViews(snap.data()?.views ?? 0);
      } catch {
        // Silently fail — never break the page over a view count
      }
    }

    run();
  }, [slug, readOnly]);

  if (views === null) return null;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "rgba(255,255,255,0.3)", fontSize: "12px" }}>
      <Eye size={12} />
      <span>{views.toLocaleString()} {views === 1 ? "view" : "views"}</span>
    </div>
  );
}
