import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lookinit — AI-Powered Search",
  description:
    "Lookinit is an AI search engine that delivers real answers with sources, images, and follow-up questions — powered by the latest LLMs.",
  openGraph: {
    title: "Lookinit — AI-Powered Search",
    description: "Ask anything. Get real answers.",
    url: "https://lookinit.com",
    siteName: "Lookinit",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lookinit — AI-Powered Search",
    description: "Ask anything. Get real answers.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body style={{ margin: 0, background: "#080808", color: "#f0f0f0" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
