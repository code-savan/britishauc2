import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://britishauc.com";

export const metadata: Metadata = {
  title: {
    default: "British AUC — Pathways to Global Success",
    template: "%s | British AUC",
  },
  description: "British AUC is a UK-based education consultancy helping Nigerian students access global education, sports development, and university pathway programmes. Study abroad with expert visa and admissions support.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/site.webmanifest",
  keywords: [
    "study abroad Nigeria",
    "UK university admission",
    "British AUC",
    "study in UK",
    "Nigerian students abroad",
    "visa application support",
    "IELTS preparation",
    "scholarships for Nigerian students",
    "football academy UK",
    "university pathway programme",
    "A-Level Abuja",
    "international foundation year",
    "education consultancy Nigeria",
    "study in USA",
    "study in Canada",
    "British AUC University Pathway",
  ],
  authors: [{ name: "British AUC", url: siteUrl }],
  creator: "British AUC",
  publisher: "British AUC",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: "British AUC — Pathways to Global Success",
    description: "Study abroad with expert support. British AUC helps Nigerian students access world-class education, elite sports programmes, and university pathways.",
    url: siteUrl,
    siteName: "British AUC",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "British AUC — Pathways to Global Success",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "British AUC — Pathways to Global Success",
    description: "Study abroad with expert support. British AUC helps Nigerian students access world-class education, elite sports programmes, and university pathways.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "education",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": `${siteUrl}/#organization`,
      name: "British AUC",
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      description: "UK-based education consultancy helping Nigerian students access global education, sports development, and university pathway programmes.",
      address: [
        {
          "@type": "PostalAddress",
          streetAddress: "128 City Road",
          addressLocality: "London",
          postalCode: "EC1V 2NX",
          addressCountry: "GB",
        },
        {
          "@type": "PostalAddress",
          streetAddress: "Kingfem GA247, Plot 264, Ahmadu Bello Way",
          addressLocality: "Abuja",
          addressCountry: "NG",
        },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+44-7840-782759",
          contactType: "sales",
          areaServed: "GB",
          availableLanguage: ["English"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+234-805-900-0097",
          contactType: "sales",
          areaServed: "NG",
          availableLanguage: ["English"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "British AUC",
      description: "Pathways to global success through education, sports, and cultural exchange.",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "British AUC — Pathways to Global Success",
      description: "Transform your future through comprehensive programmes in international education, sports development, immersive camps, and college preparation.",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-canvas text-ink`}>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/poster.png" fetchPriority="high" />
        <link rel="preload" as="video" href="/herobg.mp4" type="video/mp4" fetchPriority="high" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
