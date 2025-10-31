import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"



const openSans = Open_Sans({
    subsets: ["latin"],
    variable: "--font-open-sans",
    weight: ["300","400", "500", "600", "700", "800"]
  });

export const metadata: Metadata = {
  title: "British AUC",
  description: "British AUC",
  icons: {
    icon: "/logoicon.png",
    shortcut: "/logoicon.png",
    apple: "/logoicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
