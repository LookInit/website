"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import AuthModal from "./AuthModal";

const links = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "News", href: "/news" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [authModal, setAuthModal] = useState<"signin" | "signup" | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.3s ease",
          background: scrolled ? "rgba(8, 8, 8, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        }}
      >
        <nav
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <span
              style={{
                fontSize: "20px",
                fontWeight: 700,
                background: "linear-gradient(135deg, #fff 0%, #a5b4fc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.3px",
              }}
            >
              lookinit
            </span>
          </Link>

          {/* Desktop Links */}
          <div style={{ display: "flex", alignItems: "center", gap: "32px" }} className="hidden md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  color: "rgba(255,255,255,0.6)",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#fff")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)")}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }} className="hidden md:flex">
            <button
              onClick={() => setAuthModal("signin")}
              style={{
                background: "none",
                border: "none",
                color: "rgba(255,255,255,0.7)",
                fontSize: "14px",
                fontWeight: 500,
                cursor: "pointer",
                padding: 0,
              }}
            >
              Sign in
            </button>
            <button
              onClick={() => setAuthModal("signup")}
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                color: "#fff",
                border: "none",
                fontSize: "14px",
                fontWeight: 600,
                padding: "8px 18px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Get started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", padding: "4px" }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div
            style={{
              background: "rgba(8, 8, 8, 0.98)",
              backdropFilter: "blur(12px)",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              padding: "16px 24px 24px",
            }}
            className="md:hidden"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: 500,
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {l.label}
              </Link>
            ))}
            <button
              onClick={() => { setOpen(false); setAuthModal("signup"); }}
              style={{
                display: "block",
                width: "100%",
                marginTop: "16px",
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                color: "#fff",
                border: "none",
                fontSize: "15px",
                fontWeight: 600,
                padding: "12px",
                borderRadius: "8px",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              Get started free
            </button>
          </div>
        )}
      </header>

      {authModal && (
        <AuthModal
          defaultMode={authModal}
          onClose={() => setAuthModal(null)}
        />
      )}
    </>
  );
}
