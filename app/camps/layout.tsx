import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Camps",
  description: "Immersive summer and winter camps focused on leadership, cultural exchange, and personal growth. Coming soon from British AUC.",
  openGraph: {
    title: "British AUC Camps",
    description: "Immersive summer and winter camps focused on leadership, cultural exchange, and personal growth worldwide.",
    url: "https://britishauc.com/camps",
  },
  twitter: {
    title: "British AUC Camps",
    description: "Immersive summer and winter camps focused on leadership, cultural exchange, and personal growth worldwide.",
  },
  alternates: {
    canonical: "https://britishauc.com/camps",
  },
};

export default function CampsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
