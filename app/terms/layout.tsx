import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "British AUC terms of use govern your access to and use of our website, services, and educational consultancy programmes.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://britishauc.com/terms",
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
