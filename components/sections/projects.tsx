"use client";

import type { MouseEvent } from "react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { MagneticButton } from "@/components/animations/magnetic-button";
import { SectionReveal } from "@/components/animations/section-reveal";
import { TextReveal } from "@/components/animations/text-reveal";
import { projects } from "@/data/portfolio";
import { prefersReducedMotion } from "@/lib/animations";

const featuredProjects = projects.filter((project) => project.featured);

function ProjectCard({
  project,
  index,
}: {
  project: (typeof featuredProjects)[number];
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const element = ref.current;

    if (!element || prefersReducedMotion()) {
      return;
    }

    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    element.style.transform = `perspective(1100px) rotateX(${y * -4}deg) rotateY(${x * 5}deg) translateY(-6px)`;
  };

  const handleLeave = () => {
    const element = ref.current;

    if (!element) {
      return;
    }

    element.style.transform =
      "perspective(1100px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  return (
    <article
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] transition duration-300 hover:border-white/22"
      style={{ transformStyle: "preserve-3d" }}
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/86 via-black/12 to-transparent" />
          <div className="absolute left-5 top-5 flex flex-wrap gap-2">
            <span className="rounded-full border border-[#8ef0df]/24 bg-[#8ef0df]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#b9fff3]">
              Featured
            </span>
            <span className="rounded-full border border-white/12 bg-black/45 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-white/70 backdrop-blur">
              {project.date}
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/36">
              Case study 0{index + 1}
            </p>
            <h3 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {project.name}
            </h3>
            <p className="mt-4 text-lg leading-8 text-white/66">
              {project.summary}
            </p>
            <p className="mt-4 text-sm leading-7 text-white/48">
              {project.description}
            </p>
          </div>

          <div className="mt-8">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/[0.22] px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-white/62"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {project.liveUrl ? (
                <MagneticButton>
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[#050608] transition hover:bg-[#8ef0df]"
                  >
                    Visit live project
                  </Link>
                </MagneticButton>
              ) : null}
              {project.repoUrl ? (
                <MagneticButton>
                  <Link
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/12 px-5 text-sm font-semibold text-white transition hover:border-[#f8c85b]/50 hover:text-[#f8c85b]"
                  >
                    View repository
                  </Link>
                </MagneticButton>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="border-b border-white/10 bg-[#07080b] py-18 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[92rem] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_0.18fr] lg:items-end">
          <SectionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#8ef0df]">
              Featured projects
            </p>
            <TextReveal
              text="Selected builds from the full-stack foundation."
              className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.98] text-white sm:text-6xl lg:text-7xl"
            />
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
              Earlier MERN, frontend, and 3D web projects that show the hands-on
              base behind the current SaaS, CRM, CMS, and enterprise work.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1} className="lg:justify-self-end">
            <MagneticButton>
              <Link
                href="/projects"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 px-6 text-sm font-semibold text-white transition hover:border-[#8ef0df]/45 hover:text-[#8ef0df]"
              >
                Full archive
              </Link>
            </MagneticButton>
          </SectionReveal>
        </div>

        <div className="mt-12 grid gap-5">
          {featuredProjects.map((project, index) => (
            <SectionReveal key={project.slug} delay={index * 0.06}>
              <ProjectCard project={project} index={index} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
