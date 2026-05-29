import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "British AUC — Pathways to Global Success",
  description: "Transform your future through our comprehensive programmes in international education, sports development, immersive camps, and college preparation.",
  icons: {
    icon: "/logoicon.png",
    shortcut: "/logoicon.png",
    apple: "/logoicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-canvas text-ink`}>
        {children}
      </body>
    </html>
  );
}
