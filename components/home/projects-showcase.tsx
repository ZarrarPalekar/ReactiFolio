"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { projects } from "@/data/portfolio";
import { Magnetic } from "@/components/ui/magnetic";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const featuredProjects = projects.filter((project) => project.featured);

function ProjectCard({
  project,
  index,
  total,
}: {
  project: (typeof projects)[number];
  index: number;
  total: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.96, 1, 0.96],
  );

  return (
    <motion.article
      ref={ref}
      style={prefersReducedMotion ? undefined : { scale }}
      className="sticky top-28 grid overflow-hidden border border-white/10 bg-[#080404]/95 backdrop-blur lg:grid-cols-[1.1fr_0.9fr]"
    >
      <div
        className={`relative aspect-video overflow-hidden lg:aspect-auto lg:min-h-[34rem] ${
          index % 2 === 1 ? "lg:order-2" : ""
        }`}
      >
        <motion.div
          style={prefersReducedMotion ? undefined : { y: imageY, scale: 1.15 }}
          className="absolute inset-0"
        >
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            priority={index === 0}
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute left-6 top-6 flex items-center gap-2">
          <span className="mono inline-flex items-center rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-white/75 backdrop-blur">
            {project.date}
          </span>
        </div>
        <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white/55">
          <span className="mono text-[0.65rem] uppercase tracking-[0.32em]">
            Build / {String(index + 1).padStart(2, "0")}
          </span>
          <span className="mono text-[0.65rem] uppercase tracking-[0.32em]">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-10 p-8 sm:p-12 lg:p-14">
        <div>
          <span className="mono text-[0.65rem] uppercase tracking-[0.32em] text-[var(--accent-soft)]/85">
            Featured work
          </span>
          <h3 className="display mt-5 text-4xl text-white sm:text-5xl">
            {project.name}
          </h3>
          <p className="mt-6 text-base leading-[1.7] text-white/60 sm:text-lg">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="mono inline-flex items-center border border-white/15 bg-white/[0.03] px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.22em] text-white/65"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 border-t border-white/10 pt-8">
          {project.liveUrl ? (
            <Magnetic strength={0.25}>
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white/85"
              >
                Live ↗
              </Link>
            </Magnetic>
          ) : null}
          {project.repoUrl ? (
            <Magnetic strength={0.25}>
              <Link
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/85 transition hover:border-white/50"
              >
                Source ↗
              </Link>
            </Magnetic>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsShowcase() {
  return (
    <section
      id="projects"
      className="relative border-t border-white/10 py-32 sm:py-40"
    >
      <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-10 lg:px-14">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="flex-1">
            <SectionHeading
              index="06"
              eyebrow="Projects"
              title={
                <>
                  <span className="block">Selected</span>
                  <span className="block text-gradient-red">builds.</span>
                </>
              }
              description="Earlier MERN and frontend projects that show the hands-on foundation behind the current SaaS, CRM, CMS, and enterprise work."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/projects"
              className="group inline-flex h-12 items-center gap-3 rounded-full border border-white/20 px-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/85 transition hover:border-white/50"
            >
              <span>Full archive</span>
              <span className="transition group-hover:translate-x-1">→</span>
            </Link>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-col gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              total={featuredProjects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
