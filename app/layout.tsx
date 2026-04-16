import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { CalendlyProvider } from "@/components/ui/calendly-provider";
import { siteConfig } from "@/data/portfolio";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "A modern portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description:
      "A cinematic, high-performance developer portfolio inspired by premium product storytelling.",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white antialiased">
        <CalendlyProvider>
          <div className="relative min-h-screen overflow-x-hidden bg-black">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.14),_transparent_32%),linear-gradient(to_bottom,_rgba(255,255,255,0.02),_transparent_25%)]"
            />
            <SiteHeader />
            <main className="relative">{children}</main>
            <SiteFooter />
          </div>
        </CalendlyProvider>
      </body>
    </html>
  );
}
