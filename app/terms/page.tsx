import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Lookinit terms of service — the rules for using our AI-powered search engine.",
  alternates: { canonical: "https://lookinit.com/terms" },
  robots: { index: true, follow: false },
  openGraph: {
    title: "Terms of Service — Lookinit",
    description: "The rules for using Lookinit's AI-powered search engine.",
    url: "https://lookinit.com/terms",
    siteName: "Lookinit",
    type: "website",
  },
};

const EFFECTIVE_DATE = "1 April 2025";

export default function TermsPage() {
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
        Terms of Service
      </h1>
      <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "14px", marginBottom: "48px" }}>
        Effective date: {EFFECTIVE_DATE}
      </p>

      {[
        {
          title: "1. Acceptance",
          body: 'By accessing or using Lookinit (the "Service") you agree to be bound by these Terms of Service ("Terms"). If you do not agree, do not use the Service.',
        },
        {
          title: "2. Eligibility",
          body: "You must be at least 13 years old to use Lookinit. By using the Service you represent that you meet this requirement. If you are under 18, you confirm that you have parental or guardian consent.",
        },
        {
          title: "3. Accounts",
          body: `• You are responsible for maintaining the confidentiality of your login credentials.
• You are responsible for all activity that occurs under your account.
• Notify us immediately at hello@lookinit.com if you suspect unauthorised access.
• We reserve the right to suspend or terminate accounts that violate these Terms.`,
        },
        {
          title: "4. Acceptable Use",
          body: `You agree not to:
• Use the Service for any unlawful purpose or in violation of any applicable law.
• Submit queries or content that are defamatory, harassing, obscene, or infringe third-party rights.
• Attempt to scrape, crawl, or bulk-query the Service using automated tools without written permission.
• Reverse-engineer, decompile, or attempt to extract the source code of Lookinit.
• Use the Service to generate or distribute spam, malware, or phishing content.`,
        },
        {
          title: "5. Subscriptions & Payments",
          body: `• Paid plans are billed monthly or annually as selected at checkout.
• All payments are processed by Stripe. By subscribing you agree to Stripe's terms.
• Subscriptions renew automatically unless cancelled before the renewal date.
• We do not offer refunds for partial billing periods, except where required by law.
• We reserve the right to change pricing with 30 days' notice to registered users.`,
        },
        {
          title: "6. Intellectual Property",
          body: "All content, design, trademarks, and software on Lookinit are owned by or licensed to us. You may not reproduce, distribute, or create derivative works without our prior written consent. Your search queries remain your own; you grant us a limited licence to process them solely to provide the Service.",
        },
        {
          title: "7. AI-Generated Content",
          body: "Lookinit uses large language models to generate answers. AI-generated content may be inaccurate, incomplete, or outdated. You should independently verify any information before relying on it for important decisions. We are not liable for decisions made based on AI-generated answers.",
        },
        {
          title: "8. Disclaimers",
          body: `The Service is provided "as is" and "as available" without warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the Service will be uninterrupted or error-free.`,
        },
        {
          title: "9. Limitation of Liability",
          body: "To the maximum extent permitted by applicable law, Lookinit and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service, even if advised of the possibility of such damages. Our total liability to you shall not exceed the amount you paid us in the twelve months preceding the claim.",
        },
        {
          title: "10. Termination",
          body: "You may delete your account at any time from account settings or by emailing hello@lookinit.com. We may suspend or terminate your access at our discretion if you breach these Terms, with or without notice.",
        },
        {
          title: "11. Governing Law",
          body: "These Terms are governed by the laws of the Republic of Ireland, without regard to conflict-of-law principles. Any disputes shall be subject to the exclusive jurisdiction of the courts of Ireland.",
        },
        {
          title: "12. Changes to These Terms",
          body: "We may update these Terms from time to time. Continued use of the Service after changes take effect constitutes your acceptance of the revised Terms. We will notify registered users of material changes by email.",
        },
        {
          title: "13. Contact",
          body: "Questions about these Terms? Email hello@lookinit.com.",
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
