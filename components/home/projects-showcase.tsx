"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { projects } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const featuredProjects = projects.filter((project) => project.featured);

export default function ProjectsShowcase() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="projects" className="border-b border-white/10 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Selected projects, explained with less copy."
          description="A few builds that show range quickly through visuals, stack, and outcome instead of long case-study text."
        />

        <div className="mt-14 space-y-6">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.08 }}
              whileHover={prefersReducedMotion ? {} : { y: -4 }}
              className="group grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] lg:grid-cols-[1.05fr_0.95fr]"
            >
              <div className="relative min-h-[18rem] overflow-hidden border-b border-white/10 lg:min-h-[24rem] lg:border-b-0 lg:border-r">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  priority={index === 0}
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full border border-white/12 bg-black/50 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/70 backdrop-blur-sm">
                  Featured build
                </div>
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-red-500">{project.date}</p>
                  <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                    {project.name}
                  </h3>
                  <p className="mt-4 text-lg leading-8 text-white/68">{project.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/56">
                      Visual-first
                    </span>
                    <span className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/56">
                      Responsive
                    </span>
                    <span className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/56">
                      Product build
                    </span>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-white/62"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.liveUrl ? (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-11 items-center justify-center rounded-full bg-red-500 px-5 text-sm font-medium text-black transition hover:bg-red-400"
                      >
                        Visit live project
                      </Link>
                    ) : null}
                    {project.repoUrl ? (
                      <Link
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/12 px-5 text-sm font-medium text-white transition hover:border-red-500 hover:text-red-400"
                      >
                        View repository
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <Link
            href="/projects"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 px-6 text-sm font-medium text-white transition hover:border-red-500 hover:text-red-400"
          >
            Browse full project archive
          </Link>
        </div>
      </Container>
    </section>
  );
}
