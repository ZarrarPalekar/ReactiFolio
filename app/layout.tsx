import type { Metadata } from "next";
import Script from "next/script";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { CalendlyProvider } from "@/components/ui/calendly-provider";
import { siteConfig } from "@/data/portfolio";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  applicationName: siteConfig.name,
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Zarrar Palekar",
    "Zarrar Palekar portfolio",
    "full stack developer India",
    "full stack developer in India",
    "full stack developer Mumbai",
    "React developer India",
    "Node.js developer India",
    "MERN stack developer India",
    "frontend developer India",
    "backend developer India",
    "React Node.js developer",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - ${siteConfig.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Mumbai",
    "geo.position": "19.0760;72.8777",
    ICBM: "19.0760, 72.8777",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  image: `${siteConfig.siteUrl}${siteConfig.ogImage}`,
  jobTitle: siteConfig.title,
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressCountry: "IN",
  },
  homeLocation: {
    "@type": "Place",
    name: siteConfig.location,
  },
  sameAs: [siteConfig.githubUrl, siteConfig.linkedinUrl, siteConfig.instagramUrl],
  knowsAbout: [
    "React",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "MERN stack",
    "Frontend development",
    "Backend development",
    "Full stack web development",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Independent / Portfolio",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  description: siteConfig.description,
  inLanguage: "en-IN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white antialiased">
        <Script
          id="person-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Script
          id="website-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
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
