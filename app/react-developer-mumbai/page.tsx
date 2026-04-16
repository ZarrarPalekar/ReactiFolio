import type { Metadata } from "next";

import { ServiceLanding } from "@/components/seo/service-landing";
import { siteConfig } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "React Developer in Mumbai",
  description:
    "Hire Zarrar Palekar, a React developer in Mumbai, India building performant frontend experiences and modern full stack applications with React and Node.js.",
  alternates: {
    canonical: "/react-developer-mumbai",
  },
  keywords: [
    "React developer Mumbai",
    "React developer in Mumbai",
    "frontend developer Mumbai",
    "React developer India",
    "Zarrar Palekar",
  ],
};

export default function ReactDeveloperMumbaiPage() {
  return (
    <ServiceLanding
      eyebrow="Mumbai SEO Page"
      title="React Developer in Mumbai"
      description={`${siteConfig.name} is a React developer in Mumbai focused on polished frontend experiences, strong component architecture, and full stack product delivery with React, TypeScript, and Node.js.`}
      locationLine="Serving clients in Mumbai, across India, and remote teams looking for product-focused frontend and full stack execution."
      primaryKeyword="React Developer in Mumbai"
      slug="react-developer-mumbai"
      supportingPoints={[
        "Modern React development with strong UI quality, performance focus, and reusable architecture.",
        "Frontend leadership supported by backend fluency in Node.js, Express, and database-backed application delivery.",
        "A portfolio that combines design sensitivity, business context, and production-ready engineering discipline.",
      ]}
    />
  );
}
