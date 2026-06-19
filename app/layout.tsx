import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: {
    default: "Berkay Öz — AI Product Builder",
    template: "%s — Berkay Öz"
  },
  description:
    "AI Product Builder creating decision-support systems, machine-learning products, RAG applications, and SaaS platforms.",
  metadataBase: new URL("https://iberkayo.github.io"),
  openGraph: {
    title: "Berkay Öz — AI Product Builder",
    description:
      "Building AI systems that turn complex information into better decisions.",
    url: "https://iberkayo.github.io",
    siteName: "Berkay Öz",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-ink text-white antialiased`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
