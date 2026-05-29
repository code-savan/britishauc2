import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about British AUC — a UK-based education consultancy with over 15 years of experience helping Nigerian students access world-class education, sports development, and university pathways.",
  openGraph: {
    title: "About British AUC",
    description: "Over 15 years of helping Nigerian students access world-class education and opportunities worldwide.",
    url: "https://britishauc.com/about",
  },
  twitter: {
    title: "About British AUC",
    description: "Over 15 years of helping Nigerian students access world-class education and opportunities worldwide.",
  },
  alternates: {
    canonical: "https://britishauc.com/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
