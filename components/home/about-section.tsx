import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig, skillCategories } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative border-t border-white/10 py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-10 lg:px-14">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title={
              <>
                <span className="block">
                  Senior <span className="serif font-normal">engineer.</span>
                </span>
                <span className="block text-gradient-red">
                  Hands-on <span className="serif font-normal">lead.</span>
                </span>
              </>
            }
          />
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-white/10">
              <Image
                src="/images/profile/about-portrait.webp"
                alt={siteConfig.name}
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <p className="mono absolute inset-x-6 bottom-6 text-[0.7rem] uppercase tracking-[0.28em] text-white/70">
                {siteConfig.location} · Remote
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-12">
            <Reveal>
              <p className="display text-3xl leading-[1.15] text-white sm:text-4xl">
                I build like the senior engineer in the codebase and
                communicate like the Scrum Master responsible for delivery.
              </p>
              <p className="mt-6 max-w-2xl text-base leading-[1.7] text-white/65 sm:text-lg">
                The core is MERN/PERN product work, backed by .NET enterprise
                depth, Scrum leadership, and AI-assisted development that stays
                human-reviewed.
              </p>
            </Reveal>

            <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {skillCategories.map((category) => (
                <Reveal key={category.title}>
                  <h3 className="display text-xl text-white">
                    {category.title}
                  </h3>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {category.skills.slice(0, 8).map((skill) => (
                      <li
                        key={skill.name}
                        className="mono inline-flex items-center gap-2 border border-white/12 bg-white/[0.03] px-2.5 py-1.5 text-[0.65rem] uppercase tracking-[0.16em] text-white/70"
                      >
                        {skill.icon ? (
                          <span className="relative inline-block h-4 w-4 shrink-0">
                            <Image
                              src={skill.icon}
                              alt=""
                              fill
                              sizes="16px"
                              className={`object-contain ${skill.iconClassName ?? ""}`}
                            />
                          </span>
                        ) : null}
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>

            <Reveal className="flex flex-wrap items-center gap-3">
              <Link
                href={`mailto:${siteConfig.email}`}
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white/85"
              >
                Email me
              </Link>
              <Link
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/85 transition hover:border-white/50"
              >
                View resume ↗
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
