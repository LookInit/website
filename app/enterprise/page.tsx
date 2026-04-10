"use client";

import { useState } from "react";
import { Check, Building2, Server, Lock, Users, Headphones, Zap } from "lucide-react";

const capabilities = [
  {
    icon: <Server size={20} />,
    title: "Dedicated infrastructure",
    desc: "Your own isolated deployment. No shared rate limits, no noisy neighbours.",
  },
  {
    icon: <Lock size={20} />,
    title: "Private data & compliance",
    desc: "Data stays in your region. SOC 2 ready. GDPR-compliant by default.",
  },
  {
    icon: <Users size={20} />,
    title: "Team management",
    desc: "SSO, role-based access, audit logs, and centralised billing for your whole org.",
  },
  {
    icon: <Zap size={20} />,
    title: "Custom AI models",
    desc: "Bring your own LLM or fine-tuned model. Integrate with internal knowledge bases.",
  },
  {
    icon: <Headphones size={20} />,
    title: "Priority support & SLA",
    desc: "Dedicated Slack channel, named account manager, and uptime guarantees.",
  },
  {
    icon: <Building2 size={20} />,
    title: "Custom data sources",
    desc: "Connect internal wikis, CRMs, databases, or any API to power your searches.",
  },
];

const includes = [
  "Everything in Pro",
  "Unlimited users",
  "Custom domain",
  "Dedicated infrastructure",
  "SSO (SAML / OIDC)",
  "Audit logs",
  "Custom AI model integration",
  "Private data sources",
  "SLA & uptime guarantee",
  "Dedicated account manager",
];

export default function EnterprisePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    size: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/enterprise-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

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
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(99,102,241,0.1)",
            border: "1px solid rgba(99,102,241,0.3)",
            borderRadius: "100px",
            padding: "5px 14px",
            marginBottom: "24px",
            fontSize: "12px",
            color: "#a5b4fc",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          Enterprise
        </div>
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
          AI search built
          <br />
          for your organisation
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "17px",
            maxWidth: "480px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          Dedicated infrastructure, custom integrations, and full compliance. Lookinit Enterprise scales with your team.
        </p>
      </section>

      {/* Capabilities */}
      <section style={{ padding: "20px 24px 80px", maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "16px",
          }}
        >
          {capabilities.map((c) => (
            <div
              key={c.title}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "12px",
                padding: "24px",
                display: "flex",
                gap: "16px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  background: "rgba(99,102,241,0.12)",
                  border: "1px solid rgba(99,102,241,0.2)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#a5b4fc",
                  flexShrink: 0,
                }}
              >
                {c.icon}
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "#fff",
                    marginBottom: "6px",
                  }}
                >
                  {c.title}
                </h3>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Includes + Form */}
      <section
        id="contact"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "80px 24px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "60px",
            alignItems: "start",
          }}
          className="enterprise-grid"
        >
          {/* What's included */}
          <div>
            <h2
              style={{
                fontSize: "clamp(22px, 3vw, 32px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "#fff",
                marginBottom: "8px",
              }}
            >
              Everything you need
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "28px",
                lineHeight: 1.6,
              }}
            >
              Enterprise includes all Pro features plus:
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {includes.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "12px",
                  }}
                >
                  <Check size={15} style={{ color: "#a5b4fc", flexShrink: 0 }} />
                  <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact form */}
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "16px",
              padding: "32px",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "6px",
              }}
            >
              Talk to sales
            </h3>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", marginBottom: "24px" }}>
              We'll get back to you within one business day.
            </p>

            {status === "sent" ? (
              <div
                style={{
                  background: "rgba(16,185,129,0.1)",
                  border: "1px solid rgba(16,185,129,0.2)",
                  borderRadius: "10px",
                  padding: "24px",
                  textAlign: "center",
                  color: "#6ee7b7",
                  fontSize: "14px",
                }}
              >
                Thanks! We&apos;ll be in touch shortly.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: "14px" }}
              >
                {[
                  { key: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { key: "email", label: "Work email", type: "email", placeholder: "you@company.com" },
                  { key: "company", label: "Company", type: "text", placeholder: "Acme Inc." },
                ].map(({ key, label, type, placeholder }) => (
                  <div key={key}>
                    <label
                      style={{
                        display: "block",
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "rgba(255,255,255,0.5)",
                        marginBottom: "6px",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {label}
                    </label>
                    <input
                      type={type}
                      required
                      placeholder={placeholder}
                      value={form[key as keyof typeof form]}
                      onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                      style={{
                        width: "100%",
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "8px",
                        padding: "10px 12px",
                        color: "#fff",
                        fontSize: "14px",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                ))}

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.5)",
                      marginBottom: "6px",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Team size
                  </label>
                  <select
                    value={form.size}
                    onChange={(e) => setForm((f) => ({ ...f, size: e.target.value }))}
                    style={{
                      width: "100%",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "8px",
                      padding: "10px 12px",
                      color: form.size ? "#fff" : "rgba(255,255,255,0.4)",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  >
                    <option value="" disabled style={{ background: "#111" }}>
                      Select...
                    </option>
                    {["1–10", "11–50", "51–200", "200+"].map((s) => (
                      <option key={s} value={s} style={{ background: "#111" }}>
                        {s} people
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.5)",
                      marginBottom: "6px",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Message (optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your use case..."
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    style={{
                      width: "100%",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "8px",
                      padding: "10px 12px",
                      color: "#fff",
                      fontSize: "14px",
                      outline: "none",
                      resize: "vertical",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                {status === "error" && (
                  <p style={{ fontSize: "13px", color: "#f87171" }}>
                    Something went wrong. Try emailing us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    padding: "11px",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                    opacity: status === "sending" ? 0.7 : 1,
                    transition: "opacity 0.2s",
                  }}
                >
                  {status === "sending" ? "Sending..." : "Send inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
