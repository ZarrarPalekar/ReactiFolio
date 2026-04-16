import type { Metadata } from "next";

import { ServiceLanding } from "@/components/seo/service-landing";
import { siteConfig } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Full Stack Developer in India",
  description:
    "Zarrar Palekar is a full stack developer in India building scalable React and Node.js applications for startups, businesses, and product teams.",
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
      description={`${siteConfig.name} is a full stack developer in India with deep experience building modern React frontends, Node.js backends, and product-ready web applications that balance speed, usability, and maintainable engineering.`}
      locationLine="Based in Mumbai, India and available for product consulting, contract builds, and long-term development work."
      primaryKeyword="Full Stack Developer in India"
      slug="full-stack-developer-india"
      supportingPoints={[
        "Strong React, TypeScript, and UI architecture expertise for scalable frontend systems.",
        "Hands-on Node.js and backend delivery experience for APIs, business logic, and product workflows.",
        "Professional experience across startups, SaaS platforms, enterprise systems, and client-facing delivery.",
      ]}
    />
  );
}
