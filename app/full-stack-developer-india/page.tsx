import type { Metadata } from "next";

import { ServiceLanding } from "@/components/seo/service-landing";
import { siteConfig } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Full Stack Developer in India",
  description:
    "Zarrar Palekar is a senior MERN/PERN full stack developer in India with 9+ years across React, Node.js, PostgreSQL, .NET, SaaS, CRM, CMS, Scrum leadership, and AI-assisted SDLC.",
  alternates: {
    canonical: "/full-stack-developer-india",
  },
  keywords: [
    "full stack developer India",
    "full stack developer in India",
    "MERN stack developer India",
    "React Node.js developer India",
    "Zarrar Palekar",
  ],
};

export default function FullStackDeveloperIndiaPage() {
  return (
    <ServiceLanding
      eyebrow="India SEO Page"
      title="Full Stack Developer in India"
      description={`${siteConfig.name} is a full stack developer in India with deep experience across MERN, PERN, .NET, CRM/CMS systems, SaaS products, remote team leadership, client communication, and AI-assisted software delivery.`}
      locationLine="Based in Mumbai, India and available for product builds, codebase cleanup, delivery leadership, and long-term full stack development work."
      primaryKeyword="Full Stack Developer in India"
      slug="full-stack-developer-india"
      supportingPoints={[
        "Hands-on React, TypeScript, Node.js, Express, PostgreSQL, MongoDB, GraphQL, and Apollo experience.",
        "Enterprise background in .NET, ASP.NET, C#, Web APIs, MS SQL, Oracle PL/SQL, CRM, and CMS workflows.",
        "Certified Scrum Master leadership across user stories, estimation, code reviews, QA coordination, client communication, and AI-assisted SDLC.",
      ]}
    />
  );
}
