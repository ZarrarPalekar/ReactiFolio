import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

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

          <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.slug}
                className="group flex flex-col overflow-hidden border border-white/10 bg-[#080404]/80 transition hover:border-white/25"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={index === 0}
                    className="object-cover transition duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="mono absolute left-4 top-4 inline-flex items-center rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[0.6rem] uppercase tracking-[0.28em] text-white/70 backdrop-blur">
                    {project.date}
                  </span>
                  <span className="mono absolute right-4 bottom-4 text-[0.6rem] uppercase tracking-[0.28em] text-white/55">
                    {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-5 p-6">
                  <div>
                    <span className="mono text-[0.6rem] uppercase tracking-[0.32em] text-[var(--accent-soft)]/85">
                      Build
                    </span>
                    <h2 className="display mt-3 text-2xl leading-tight text-white">
                      {project.name}
                    </h2>
                  </div>

                  <p className="text-sm leading-[1.7] text-white/55">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="mono inline-flex items-center border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.22em] text-white/55"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2 border-t border-white/10 pt-5">
                    {project.liveUrl ? (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mono inline-flex h-10 items-center justify-center rounded-full bg-white px-4 text-[0.65rem] uppercase tracking-[0.24em] text-black transition hover:bg-white/85"
                      >
                        Live ↗
                      </Link>
                    ) : null}
                    {project.repoUrl ? (
                      <Link
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mono inline-flex h-10 items-center justify-center rounded-full border border-white/20 px-4 text-[0.65rem] uppercase tracking-[0.24em] text-white/80 transition hover:border-white/50"
                      >
                        Source ↗
                      </Link>
                    ) : null}
                  </div>
                </div>
              </article>
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
