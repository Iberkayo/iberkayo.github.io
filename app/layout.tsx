import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "İbrahim Berkay Öz — Data Scientist", template: "%s — İbrahim Berkay Öz" },
  description: "Data Scientist and AI Product Builder working on machine learning, RAG, decision-support systems, and data products.",
  metadataBase: new URL("https://iberkayo.github.io"),
  openGraph: {
    title: "İbrahim Berkay Öz — Data Scientist",
    description: "Machine learning, RAG, decision-support systems, and AI products.",
    url: "https://iberkayo.github.io",
    siteName: "İbrahim Berkay Öz",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
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
