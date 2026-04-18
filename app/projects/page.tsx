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
    "Project archive for Zarrar Palekar, a full stack developer in India building React and Node.js applications.",
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
          "Project archive for Zarrar Palekar, a full stack developer in India building React and Node.js applications.",
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
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Archive"
            title="A broader look at the portfolio."
            description="This page keeps every project accessible while the homepage stays curated and focused."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.slug}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.38em] text-red-500">{project.date}</p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
                    {project.name}
                  </h2>
                  <p className="mt-3 text-base leading-7 text-white/64">{project.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-white/60"
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
                        className="inline-flex min-h-11 items-center justify-center rounded-full bg-red-600 px-5 text-sm font-medium text-white transition hover:bg-red-500"
                      >
                        Live site
                      </Link>
                    ) : null}
                    {project.repoUrl ? (
                      <Link
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/12 px-5 text-sm font-medium text-white transition hover:border-red-500 hover:text-red-400"
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
