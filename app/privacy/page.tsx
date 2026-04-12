import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Lookinit",
  description: "Lookinit privacy policy — how we collect, use, and protect your data.",
};

const EFFECTIVE_DATE = "1 April 2025";

export default function PrivacyPage() {
  return (
    <div style={{ paddingTop: "96px", paddingBottom: "96px", maxWidth: "760px", margin: "0 auto", padding: "96px 24px" }}>
      <h1
        style={{
          fontSize: "clamp(28px, 4vw, 44px)",
          fontWeight: 700,
          background: "linear-gradient(135deg, #fff 0%, #a5b4fc 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "8px",
          lineHeight: 1.15,
        }}
      >
        Privacy Policy
      </h1>
      <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "14px", marginBottom: "48px" }}>
        Effective date: {EFFECTIVE_DATE}
      </p>

      {[
        {
          title: "1. Who We Are",
          body: 'Lookinit ("we", "us", "our") operates the website lookinit.com and the Lookinit search application. We are the data controller for personal data collected through these services.',
        },
        {
          title: "2. What Data We Collect",
          body: `We collect only the data necessary to provide and improve the service:
• Account data — email address and hashed password when you register.
• Search queries — the text you type into Lookinit in order to return results.
• Usage data — anonymous page views, feature interactions, and error logs.
• Payment data — processed by Stripe. We never store full card numbers.
• Cookies — a single session cookie to keep you signed in. No tracking or advertising cookies.`,
        },
        {
          title: "3. How We Use Your Data",
          body: `• To authenticate your account and maintain your session.
• To process and return search results.
• To send transactional emails (e.g. receipts, password resets).
• To monitor service health and fix bugs.
We do not sell, rent, or share your personal data with third parties for marketing purposes.`,
        },
        {
          title: "4. Data Retention",
          body: "Account data is retained for as long as your account is active. You may request deletion at any time by emailing privacy@lookinit.com. Search queries are retained for up to 90 days for quality improvement, after which they are anonymised.",
        },
        {
          title: "5. Third-Party Services",
          body: `We use a small number of sub-processors:
• Stripe — payment processing (governed by Stripe's privacy policy).
• Firebase / Google — authentication infrastructure.
• Vercel — hosting and edge delivery.
Each processor is bound by a data processing agreement and GDPR-compliant terms.`,
        },
        {
          title: "6. Your Rights",
          body: `Under GDPR and similar laws you have the right to:
• Access the personal data we hold about you.
• Correct inaccurate data.
• Request deletion ("right to be forgotten").
• Restrict or object to processing.
• Data portability.
To exercise any of these rights, email privacy@lookinit.com.`,
        },
        {
          title: "7. Security",
          body: "We use TLS encryption in transit and AES-256 encryption at rest. Access to production systems is restricted to authorised personnel and protected by multi-factor authentication.",
        },
        {
          title: "8. Children",
          body: "Lookinit is not directed at children under 13. We do not knowingly collect personal data from children. If you believe a child has provided us data, contact privacy@lookinit.com and we will delete it promptly.",
        },
        {
          title: "9. Changes to This Policy",
          body: "We may update this policy from time to time. When we do we will update the effective date at the top of this page and, for material changes, notify registered users by email.",
        },
        {
          title: "10. Contact",
          body: "Questions about this policy? Email privacy@lookinit.com.",
        },
      ].map((section) => (
        <section key={section.title} style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#fff", fontSize: "18px", fontWeight: 600, marginBottom: "10px" }}>
            {section.title}
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "15px",
              lineHeight: 1.85,
              whiteSpace: "pre-line",
            }}
          >
            {section.body}
          </p>
        </section>
      ))}
    </div>
  );
}
