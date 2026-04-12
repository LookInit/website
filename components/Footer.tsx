"use client";

import Link from "next/link";
import Image from "next/image";

const sections = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Enterprise", href: "/enterprise" },
      { label: "Changelog", href: "/blog" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "News", href: "/news" },
      { label: "Documentation", href: "#" },
      { label: "API", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Contact", href: "/enterprise#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        background: "#080808",
        padding: "64px 24px 32px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "48px",
            marginBottom: "48px",
          }}
          className="grid-cols-footer"
        >
          {/* Brand */}
          <div>
            <Link href="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
              <Image
                src="/logo-white.png"
                alt="Lookinit"
                width={114}
                height={64}
                style={{ height: "48px", width: "auto" }}
              />
            </Link>
            <p
              style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: "14px",
                lineHeight: "1.7",
                marginTop: "12px",
                maxWidth: "260px",
              }}
            >
              AI-powered search that understands your questions and delivers real answers.
            </p>
            <Link
              href="https://app.lookinit.com"
              style={{
                display: "inline-block",
                marginTop: "20px",
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                color: "#fff",
                textDecoration: "none",
                fontSize: "13px",
                fontWeight: 600,
                padding: "8px 16px",
                borderRadius: "6px",
              }}
            >
              Try for free →
            </Link>
          </div>

          {sections.map((s) => (
            <div key={s.title}>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.3)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "16px",
                }}
              >
                {s.title}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {s.links.map((l) => (
                  <li key={l.label} style={{ marginBottom: "10px" }}>
                    <Link
                      href={l.href}
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        textDecoration: "none",
                        fontSize: "14px",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = "#fff")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color =
                          "rgba(255,255,255,0.5)")
                      }
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "13px" }}>
            © {new Date().getFullYear()} Lookinit. All rights reserved.
          </p>
          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "13px" }}>
            Built with AI, for everyone.
          </p>
        </div>
      </div>
    </footer>
  );
}
