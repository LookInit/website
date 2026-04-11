"use client";

import { useState } from "react";
import { X, Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";

interface AuthModalProps {
  onClose: () => void;
  defaultMode?: "signin" | "signup";
}

export default function AuthModal({ onClose, defaultMode = "signin" }: AuthModalProps) {
  const [mode, setMode] = useState<"signin" | "signup">(defaultMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const redirect = () => {
    window.location.href = "https://app.lookinit.com";
  };

  async function handleGoogle() {
    setLoading(true);
    setError("");
    try {
      await signInWithPopup(auth, googleProvider);
      redirect();
    } catch (e: any) {
      setError(e.message || "Google sign in failed");
    } finally {
      setLoading(false);
    }
  }

  async function handleEmail(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      if (mode === "signin") {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      redirect();
    } catch (e: any) {
      const msg = e.code === "auth/invalid-credential"
        ? "Invalid email or password"
        : e.code === "auth/email-already-in-use"
        ? "Email already in use"
        : e.code === "auth/weak-password"
        ? "Password must be at least 6 characters"
        : e.message || "Authentication failed";
      setError(msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(6px)",
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: "relative",
          background: "#111",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "16px",
          padding: "32px",
          width: "100%",
          maxWidth: "400px",
          boxShadow: "0 0 60px rgba(0,0,0,0.5)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "none",
            border: "none",
            color: "rgba(255,255,255,0.4)",
            cursor: "pointer",
            padding: "4px",
          }}
        >
          <X size={18} />
        </button>

        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <span
            style={{
              fontSize: "22px",
              fontWeight: 700,
              background: "linear-gradient(135deg, #fff 0%, #a5b4fc 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            lookinit
          </span>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px", marginTop: "6px" }}>
            {mode === "signin" ? "Welcome back" : "Create your account"}
          </p>
        </div>

        {/* Google */}
        <button
          onClick={handleGoogle}
          disabled={loading}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "8px",
            padding: "11px",
            color: "#fff",
            fontSize: "14px",
            fontWeight: 500,
            cursor: "pointer",
            marginBottom: "20px",
            transition: "background 0.2s",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18z"/>
            <path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2.04a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17z"/>
            <path fill="#FBBC05" d="M4.5 10.48A4.8 4.8 0 0 1 4.5 7.5V5.43H1.83a8 8 0 0 0 0 7.14l2.67-2.09z"/>
            <path fill="#EA4335" d="M8.98 3.58c1.32 0 2.5.45 3.44 1.35l2.54-2.54A8 8 0 0 0 1.83 5.43L4.5 7.5c.66-1.97 2.52-3.92 4.48-3.92z"/>
          </svg>
          Continue with Google
        </button>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.08)" }} />
          <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>or</span>
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.08)" }} />
        </div>

        {/* Email form */}
        <form onSubmit={handleEmail} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {mode === "signup" && (
            <div style={{ position: "relative" }}>
              <User size={15} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.3)" }} />
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: "100%",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  padding: "11px 12px 11px 36px",
                  color: "#fff",
                  fontSize: "14px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>
          )}

          <div style={{ position: "relative" }}>
            <Mail size={15} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.3)" }} />
            <input
              type="email"
              placeholder="Email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
                padding: "11px 12px 11px 36px",
                color: "#fff",
                fontSize: "14px",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ position: "relative" }}>
            <Lock size={15} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.3)" }} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
                padding: "11px 36px 11px 36px",
                color: "#fff",
                fontSize: "14px",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                color: "rgba(255,255,255,0.3)",
                cursor: "pointer",
                padding: 0,
              }}
            >
              {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
            </button>
          </div>

          {error && (
            <p style={{ fontSize: "13px", color: "#f87171", margin: 0 }}>{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "12px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1,
              marginTop: "4px",
            }}
          >
            {loading ? "Please wait..." : mode === "signin" ? "Sign in" : "Create account"}
          </button>
        </form>

        {/* Toggle */}
        <p style={{ textAlign: "center", fontSize: "13px", color: "rgba(255,255,255,0.4)", marginTop: "20px" }}>
          {mode === "signin" ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => { setMode(mode === "signin" ? "signup" : "signin"); setError(""); }}
            style={{
              background: "none",
              border: "none",
              color: "#a5b4fc",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: 600,
              padding: 0,
            }}
          >
            {mode === "signin" ? "Sign up" : "Sign in"}
          </button>
        </p>
      </div>
    </div>
  );
}
