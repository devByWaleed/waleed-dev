import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { MotionConfig } from "motion/react";
import "./globals.css";
import { site } from "@/data/site";
import Preloader from "@/components/layout/Preloader";
import StructuredData from "@/components/layout/StructuredData";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.name} | ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    site.name,
    site.role,
    "Software Engineer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
  ],
  authors: [{ name: site.name, url: site.siteUrl }],
  creator: site.name,
  openGraph: {
    type: "website",
    url: site.siteUrl,
    title: `${site.name} | ${site.role}`,
    description: site.description,
    siteName: site.name,
    images: [
      {
        url: "/images/og-cover.webp",
        width: 1200,
        height: 630,
        alt: `${site.name}, ${site.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.role}`,
    description: site.description,
    images: ["/images/og-cover.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-sans">
        <MotionConfig reducedMotion="user">
          <Preloader />
          {children}
        </MotionConfig>
        <StructuredData />
      </body>
    </html>
  );
}