import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
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
          url: project.liveUrl ?? project.repoUrl ?? `${siteConfig.siteUrl}/projects`,
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
      <section className="py-18 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Archive"
            title="Hands-on builds behind the resume."
            description="Earlier frontend and MERN projects that sit behind the current production experience across SaaS, CRM, CMS, and enterprise systems."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.slug}
                className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] transition hover:border-red-500/30"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                    className="object-cover transition duration-700 group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/76 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/12 bg-black/45 px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-white/72 backdrop-blur">
                    {project.date}
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-red-200/72">
                    Project 0{index + 1}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight text-white">
                    {project.name}
                  </h2>
                  <p className="mt-3 text-base leading-7 text-white/64">{project.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-black/[0.24] px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-white/60"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.liveUrl ? (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-11 items-center justify-center rounded-full bg-red-600 px-5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(239,68,68,0.14)] transition hover:bg-red-500 hover:text-white"
                      >
                        Live site
                      </Link>
                    ) : null}
                    {project.repoUrl ? (
                      <Link
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/12 px-5 text-sm font-semibold text-white transition hover:border-red-500/50 hover:text-red-200"
                      >
                        Repository
                      </Link>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
