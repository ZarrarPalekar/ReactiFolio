import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

import { ArchiveCard } from "@/components/projects/archive-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects, siteConfig } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Project archive for Zarrar Palekar, a senior MERN/PERN full stack engineer in India with React, Node.js, PostgreSQL, .NET, and SaaS delivery experience.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Projects",
        url: `${siteConfig.siteUrl}/projects`,
        description:
          "Project archive for Zarrar Palekar, a senior MERN/PERN full stack engineer in India with React, Node.js, PostgreSQL, .NET, and SaaS delivery experience.",
      },
      {
        "@type": "ItemList",
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url:
            project.liveUrl ?? project.repoUrl ?? `${siteConfig.siteUrl}/projects`,
          name: project.name,
        })),
      },
    ],
  };

  return (
    <>
      <Script
        id="projects-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <section className="pt-40 pb-32 sm:pt-48">
        <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-10 lg:px-14">
          <Reveal>
            <SectionHeading
              index="∞"
              eyebrow="Archive"
              title={
                <>
                  <span className="block">Hands-on builds</span>
                  <span className="block text-gradient-red">
                    behind the <span className="serif font-normal">resume.</span>
                  </span>
                </>
              }
              description="Earlier frontend and MERN projects that sit behind the current production experience across SaaS, CRM, CMS, and enterprise systems."
            />
          </Reveal>

          <div className="mt-20 flex flex-col gap-6">
            {projects.map((project, index) => (
              <ArchiveCard
                key={project.slug}
                project={project}
                index={index}
                total={projects.length}
              />
            ))}
          </div>

          <div className="mt-20 border-t border-white/10 pt-10">
            <Link
              href="/"
              className="mono inline-flex h-12 items-center gap-3 rounded-full border border-white/20 px-6 text-[0.7rem] uppercase tracking-[0.28em] text-white/80 transition hover:border-white/50"
            >
              <span>← Back home</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
