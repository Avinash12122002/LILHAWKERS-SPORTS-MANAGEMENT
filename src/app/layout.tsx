import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Lilhawkers Sports Management — Structured Sports Development",
  description:
    "Lilhawkers designs, delivers and continuously improves structured sports development programs — built to take children and young people from their very first movements to sport-specific performance training.",
  keywords: [
    "sports management",
    "youth sports development",
    "sports curriculum",
    "PE program",
    "sports training",
    "school sports program",
    "structured sports",
    "Lilhawkers",
  ],
  openGraph: {
    title: "Lilhawkers — Structured Sports Development for Every Stage of Growth",
    description:
      "We design structured, age-appropriate sports development systems and implement them through schools, clubs, training centres and communities.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-dark)] text-[var(--color-text)]">
        {children}
      </body>
    </html>
  );
}
