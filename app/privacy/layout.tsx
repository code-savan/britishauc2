import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "British AUC privacy policy explains how we collect, use, and protect your personal information when you use our education consultancy services.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://britishauc.com/privacy",
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
