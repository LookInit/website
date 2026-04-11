"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Zap } from "lucide-react";
import AuthModal from "@/components/AuthModal";

const BASIC_PRICE_ID = "price_1Qw7XMB9l3mkM5VXZW4OGm8w";
const PRO_PRICE_ID = "price_1QwOWKB9l3mkM5VXvYJ3PMo5";

const plans = [
  {
    name: "Free",
    price: "€0",
    period: "forever",
    description: "Perfect for trying Lookinit out.",
    cta: "Get started",
    priceId: null,
    type: "free",
    highlight: false,
    features: [
      "3 searches per day",
      "AI-generated answers",
      "Web search results",
      "Images & videos",
      "Follow-up questions",
    ],
  },
  {
    name: "Basic",
    price: "€5.99",
    period: "per month",
    description: "For daily users who want more.",
    cta: "Start Basic",
    priceId: BASIC_PRICE_ID,
    type: "paid",
    highlight: false,
    features: [
      "Unlimited searches",
      "All Free features",
      "Search history",
      "Multiple AI models",
      "Priority response speed",
    ],
  },
  {
    name: "Pro",
    price: "€9.99",
    period: "per month",
    description: "For power users and researchers.",
    cta: "Start Pro",
    priceId: PRO_PRICE_ID,
    type: "paid",
    highlight: true,
    badge: "Most popular",
    features: [
      "Everything in Basic",
      "Advanced AI models (Claude, Mistral)",
      "Image generation",
      "Web scraping tool",
      "Semantic search cache",
      "Early access to new features",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For teams and organisations.",
    cta: "Contact sales",
    priceId: null,
    type: "enterprise",
    href: "/enterprise",
    highlight: false,
    features: [
      "Everything in Pro",
      "Dedicated infrastructure",
      "Custom AI model integration",
      "SSO & team management",
      "SLA & priority support",
      "Custom data sources",
    ],
  },
];

const faq = [
  {
    q: "Can I cancel anytime?",
    a: "Yes. You can cancel your subscription at any time from your account settings. You'll keep access until the end of your billing period.",
  },
  {
    q: "What happens when I hit the free search limit?",
    a: "The counter resets every 24 hours. If you need more, upgrading to Basic or Pro gives you unlimited searches immediately.",
  },
  {
    q: "Which AI models are available?",
    a: "Free and Basic plans include Groq-powered models (Llama, Mistral). Pro adds Claude, DeepSeek, Cohere, and image generation.",
  },
  {
    q: "Is there a free trial for paid plans?",
    a: "We offer a free tier with no time limit. Paid plans start immediately upon checkout — no trial period, but you can cancel anytime.",
  },
  {
    q: "Do you offer student or non-profit discounts?",
    a: "Yes. Reach out via the Enterprise form and we'll sort something out.",
  },
];

async function handleCheckout(priceId: string, setLoadingId: (id: string | null) => void, setAuthModal: (v: boolean) => void) {
  setLoadingId(priceId);
  try {
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priceId }),
    });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
  } catch {
    setLoadingId(null);
  }
}

export default function PricingPage() {
  const [authModal, setAuthModal] = useState<boolean>(false);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Header */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 24px 60px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "500px",
            height: "300px",
            background:
              "radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
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
          Pricing
        </p>
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 58px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            background: "linear-gradient(180deg, #fff, rgba(255,255,255,0.6))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "16px",
          }}
        >
          Simple, honest pricing
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "17px",
            maxWidth: "440px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          Start free. Upgrade when you need more. No hidden fees.
        </p>
      </section>

      {/* Plans */}
      <section style={{ padding: "0 24px 80px", maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "16px",
          }}
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                background: plan.highlight
                  ? "rgba(99,102,241,0.08)"
                  : "rgba(255,255,255,0.03)",
                border: plan.highlight
                  ? "1px solid rgba(99,102,241,0.4)"
                  : "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: "32px 28px",
                position: "relative",
                boxShadow: plan.highlight
                  ? "0 0 40px rgba(99,102,241,0.1)"
                  : "none",
              }}
            >
              {plan.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: "-12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    color: "#fff",
                    fontSize: "11px",
                    fontWeight: 700,
                    padding: "4px 12px",
                    borderRadius: "100px",
                    whiteSpace: "nowrap",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <Zap size={10} />
                  {plan.badge}
                </div>
              )}

              <div style={{ marginBottom: "24px" }}>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: plan.highlight ? "#a5b4fc" : "rgba(255,255,255,0.5)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: "8px",
                  }}
                >
                  {plan.name}
                </p>
                <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                  <span
                    style={{
                      fontSize: "36px",
                      fontWeight: 800,
                      color: "#fff",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {plan.price}
                  </span>
                  <span
                    style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.45)",
                    marginTop: "6px",
                  }}
                >
                  {plan.description}
                </p>
              </div>

              {plan.type === "paid" ? (
                <button
                  onClick={() => handleCheckout(plan.priceId!, setLoadingId, setAuthModal)}
                  disabled={loadingId === plan.priceId}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "center",
                    padding: "10px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: 600,
                    marginBottom: "28px",
                    cursor: loadingId === plan.priceId ? "not-allowed" : "pointer",
                    opacity: loadingId === plan.priceId ? 0.7 : 1,
                    background: plan.highlight
                      ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
                      : "rgba(255,255,255,0.06)",
                    color: plan.highlight ? "#fff" : "rgba(255,255,255,0.7)",
                    border: plan.highlight ? "none" : "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {loadingId === plan.priceId ? "Loading..." : plan.cta}
                </button>
              ) : plan.type === "enterprise" ? (
                <Link
                  href="/enterprise"
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "10px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: 600,
                    textDecoration: "none",
                    marginBottom: "28px",
                    background: "rgba(255,255,255,0.06)",
                    color: "rgba(255,255,255,0.7)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {plan.cta}
                </Link>
              ) : (
                <button
                  onClick={() => setAuthModal(true)}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "center",
                    padding: "10px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: 600,
                    marginBottom: "28px",
                    cursor: "pointer",
                    background: "rgba(255,255,255,0.06)",
                    color: "rgba(255,255,255,0.7)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {plan.cta}
                </button>
              )}

              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {plan.features.map((feat) => (
                  <li
                    key={feat}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <Check
                      size={15}
                      style={{
                        color: plan.highlight ? "#a5b4fc" : "rgba(255,255,255,0.3)",
                        marginTop: "2px",
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)" }}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "80px 24px",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(22px, 3vw, 34px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "#fff",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          Common questions
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {faq.map((item) => (
            <div
              key={item.q}
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                paddingBottom: "24px",
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#fff",
                  marginBottom: "8px",
                }}
              >
                {item.q}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.7,
                }}
              >
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {authModal && (
        <AuthModal defaultMode="signup" onClose={() => setAuthModal(false)} />
      )}
    </div>
  );
}
