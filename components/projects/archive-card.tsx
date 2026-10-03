import Image from "next/image";
import Link from "next/link";

import type { ProjectItem } from "@/types/portfolio";

type ArchiveCardProps = {
  project: ProjectItem;
  index: number;
};

export function ArchiveCard({ project, index }: ArchiveCardProps) {
  return (
    <article className="grid overflow-hidden border border-white/10 bg-[var(--panel)]/95 lg:grid-cols-[1.1fr_0.9fr]"
    >
      <div
        className={`relative aspect-video overflow-hidden lg:aspect-auto lg:min-h-[28rem] ${
          index % 2 === 1 ? "lg:order-2" : ""
        }`}
      >
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute left-6 top-6 flex items-center gap-2">
          <span className="mono inline-flex items-center rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-white/75 backdrop-blur">
            {project.date}
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
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white/85"
              >
                Live ↗
              </Link>
          ) : null}
          {project.repoUrl ? (
              <Link
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/85 transition hover:border-white/50"
              >
                Source ↗
              </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
