import type { Metadata } from "next";

import { ServiceLanding } from "@/components/seo/service-landing";
import { siteConfig } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "React Developer in Mumbai",
  description:
    "Hire Zarrar Palekar, a senior React and MERN/PERN full stack developer in Mumbai with 9+ years across SaaS, CRM, CMS, team leadership, and AI-assisted SDLC.",
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
      description={`${siteConfig.name} is a React developer in Mumbai focused on MERN/PERN product delivery, reusable frontend architecture, Node.js APIs, PostgreSQL-backed workflows, and practical AI-assisted engineering habits.`}
      locationLine="Serving clients in Mumbai, across India, and remote teams looking for senior frontend execution backed by full stack and Scrum delivery ownership."
      primaryKeyword="React Developer in Mumbai"
      slug="react-developer-mumbai"
      supportingPoints={[
        "Modern React development backed by TypeScript, reusable components, state management, and production UI quality.",
        "Frontend leadership supported by Node.js, Express, PostgreSQL, MongoDB, GraphQL, Apollo, and API delivery.",
        "Certified Scrum Master experience across sprint planning, client communication, code reviews, QA coordination, and AI-assisted SDLC.",
      ]}
    />
  );
}
