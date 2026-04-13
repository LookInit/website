"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowLeft } from "lucide-react";

const BASIC_PRICE_ID = "price_1Qw7XMB9l3mkM5VXZW4OGm8w";

const features = [
  "Unlimited searches",
  "AI-generated answers",
  "Web search results",
  "Images & videos",
  "Follow-up questions",
  "Search history",
  "Multiple AI models",
  "Priority response speed",
];

export default function BasicPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId: BASIC_PRICE_ID }),
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
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            padding: "40px",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              fontWeight: 700,
              color: "rgba(255,255,255,0.4)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "8px",
            }}
          >
            Basic Plan
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
              €5.99
            </span>
            <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)" }}>/ month</span>
          </div>

          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", marginBottom: "32px" }}>
            For daily users who want more.
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
              background: "rgba(255,255,255,0.08)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.12)",
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1,
              marginBottom: "32px",
            }}
          >
            {loading ? "Loading..." : "Subscribe to Basic"}
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
                <Check size={15} style={{ color: "rgba(255,255,255,0.3)", marginTop: "2px", flexShrink: 0 }} />
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
