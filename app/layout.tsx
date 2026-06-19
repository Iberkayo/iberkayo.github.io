import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Ibrahim Berkay Öz — Data Scientist", template: "%s — Ibrahim Berkay Öz" },
  description: "Data Scientist and AI Product Builder creating machine-learning systems, decision-support platforms, retrieval applications, and AI products.",
  metadataBase: new URL("https://iberkayo.github.io"),
  openGraph: {
    title: "Ibrahim Berkay Öz — Data Scientist",
    description: "Turning complex data into better decisions.",
    url: "https://iberkayo.github.io",
    siteName: "Ibrahim Berkay Öz",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-paper text-ink antialiased`}>
        <SiteHeader /><main>{children}</main><SiteFooter />
      </body>
    </html>
  );
}
