"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowLeft, Zap } from "lucide-react";

const PRO_PRICE_ID = "price_1QwOWKB9l3mkM5VXvYJ3PMo5";

const features = [
  "Everything in Basic",
  "Advanced AI models (Claude, Mistral)",
  "Image generation",
  "Web scraping tool",
  "Semantic search cache",
  "Early access to new features",
];

export default function ProPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId: PRO_PRICE_ID }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || "Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch {
      setError("Could not reach checkout. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div style={{ paddingTop: "80px", minHeight: "100vh" }}>
      <section
        style={{
          maxWidth: "480px",
          margin: "0 auto",
          padding: "80px 24px",
        }}
      >
        <Link
          href="/pricing"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "13px",
            color: "rgba(255,255,255,0.4)",
            textDecoration: "none",
            marginBottom: "40px",
          }}
        >
          <ArrowLeft size={14} />
          Back to pricing
        </Link>

        <div
          style={{
            background: "rgba(99,102,241,0.08)",
            border: "1px solid rgba(99,102,241,0.4)",
            borderRadius: "20px",
            padding: "40px",
            position: "relative",
            boxShadow: "0 0 40px rgba(99,102,241,0.1)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-14px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: "#fff",
              fontSize: "11px",
              fontWeight: 700,
              padding: "4px 14px",
              borderRadius: "100px",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              whiteSpace: "nowrap",
            }}
          >
            <Zap size={10} />
            Most popular
          </div>

          <p
            style={{
              fontSize: "12px",
              fontWeight: 700,
              color: "#a5b4fc",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "8px",
            }}
          >
            Pro Plan
          </p>

          <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "6px" }}>
            <span
              style={{
                fontSize: "48px",
                fontWeight: 800,
                color: "#fff",
                letterSpacing: "-0.03em",
              }}
            >
              €9.99
            </span>
            <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)" }}>/ month</span>
          </div>

          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", marginBottom: "32px" }}>
            For power users and researchers.
          </p>

          <button
            onClick={handleCheckout}
            disabled={loading}
            style={{
              display: "block",
              width: "100%",
              padding: "13px",
              borderRadius: "10px",
              fontSize: "15px",
              fontWeight: 600,
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: "#fff",
              border: "none",
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1,
              marginBottom: "32px",
              boxShadow: "0 0 30px rgba(99,102,241,0.3)",
            }}
          >
            {loading ? "Loading..." : "Subscribe to Pro"}
          </button>

          {error && (
            <p style={{ color: "#f87171", fontSize: "13px", marginBottom: "20px" }}>{error}</p>
          )}

          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {features.map((feat) => (
              <li
                key={feat}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  marginBottom: "12px",
                }}
              >
                <Check size={15} style={{ color: "#a5b4fc", marginTop: "2px", flexShrink: 0 }} />
                <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)" }}>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <p style={{ textAlign: "center", fontSize: "12px", color: "rgba(255,255,255,0.25)", marginTop: "20px" }}>
          Cancel anytime. Secure checkout powered by Stripe.
        </p>
      </section>
    </div>
  );
}
