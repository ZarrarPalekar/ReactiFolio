"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { Magnetic } from "@/components/ui/magnetic";
import type { ProjectItem } from "@/types/portfolio";

type ArchiveCardProps = {
  project: ProjectItem;
  index: number;
  total: number;
};

export function ArchiveCard({ project, index, total }: ArchiveCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.96]);

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
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-10 p-8 sm:p-12 lg:p-14">
        <div>
          <span className="mono text-[0.65rem] uppercase tracking-[0.32em] text-[var(--accent-soft)]/85">
            {project.featured ? "Featured work" : "Archive"}
          </span>
          <h3 className="display mt-5 text-4xl text-white sm:text-5xl">
            <span className="serif font-normal">{project.name}</span>
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
