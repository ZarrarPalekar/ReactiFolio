"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { projects } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const featuredProjects = projects.filter((project) => project.featured);
const accents = [
  "border-red-500/26 bg-red-500/10 text-red-200",
  "border-red-800/26 bg-red-950/45 text-red-300",
  "border-red-200/26 bg-red-300/10 text-red-100",
];

export default function ProjectsShowcase() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="projects" className="border-b border-white/10 py-18 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.82fr_0.18fr] lg:items-end">
          <SectionHeading
            eyebrow="Projects"
            title="Selected work presented like product evidence."
            description="A few builds that show range quickly through visuals, stack, and outcome instead of long case-study text."
          />
          <Link
            href="/projects"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 px-6 text-sm font-semibold text-white transition hover:border-red-500/50 hover:text-red-200 lg:justify-self-end"
          >
            Full archive
          </Link>
        </div>

        <div className="mt-12 grid gap-5">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.8, delay: index * 0.08 }}
              className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.045]"
            >
              <div className="grid lg:grid-cols-[1.04fr_0.96fr]">
                <div
                  className={`relative min-h-[20rem] overflow-hidden ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 52vw"
                    priority={index === 0}
                    className="object-cover transition duration-700 group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/86 via-black/16 to-transparent" />
                  <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                    <span
                      className={`rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] ${accents[index % accents.length]}`}
                    >
                      Featured
                    </span>
                    <span className="rounded-full border border-white/12 bg-black/45 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-white/70 backdrop-blur">
                      {project.date}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/38">
                      Build 0{index + 1}
                    </p>
                    <h3 className="mt-4 text-4xl font-semibold leading-tight text-white">
                      {project.name}
                    </h3>
                    <p className="mt-4 text-lg leading-8 text-white/68">
                      {project.summary}
                    </p>

                    <div className="mt-7 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-3">
                      {["Responsive", "Product UI", "Full stack"].map((item) => (
                        <div key={item} className="bg-black/[0.34] p-4">
                          <p className="text-xs uppercase tracking-[0.2em] text-white/38">
                            Signal
                          </p>
                          <p className="mt-2 text-sm font-semibold text-white/78">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-black/[0.24] px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-white/62"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
                      {project.liveUrl ? (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-h-11 items-center justify-center rounded-full bg-red-600 px-5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(239,68,68,0.14)] transition hover:bg-red-500 hover:text-white"
                        >
                          Visit live project
                        </Link>
                      ) : null}
                      {project.repoUrl ? (
                        <Link
                          href={project.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/12 px-5 text-sm font-semibold text-white transition hover:border-red-500/50 hover:text-red-200"
                        >
                          View repository
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
