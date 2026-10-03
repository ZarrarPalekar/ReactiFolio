import Link from "next/link";

import { ArchiveCard } from "@/components/projects/archive-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/portfolio";

const featuredProjects = projects.filter((project) => project.featured);

export default function ProjectsShowcase() {
  return (
    <section
      id="projects"
      className="relative border-t border-white/10 py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-10 lg:px-14">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="flex-1">
            <SectionHeading
              eyebrow="Projects"
              title={
                <>
                  <span className="block">
                    <span className="serif font-normal">Selected</span>
                  </span>
                  <span className="block text-gradient-red">builds.</span>
                </>
              }
              description="Earlier MERN and frontend projects that show the hands-on foundation behind the current SaaS, CRM, CMS, and enterprise work."
            />
          </Reveal>
          <Reveal>
            <Link
              href="/projects"
              className="group inline-flex h-12 items-center gap-3 rounded-full border border-white/20 px-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/85 transition hover:border-white/50"
            >
              <span>Full archive</span>
              <span className="transition group-hover:translate-x-1">→</span>
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col gap-6">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug}>
              <ArchiveCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
