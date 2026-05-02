import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/data/portfolio";
import { getExperienceYears } from "@/lib/date";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  const experienceYears = getExperienceYears("2017-03-01");
  const operatingPrinciples = [
    "Business requirements become user stories, estimates, and delivery plans.",
    "React, Node.js, PostgreSQL, MongoDB, and .NET are handled as one product surface.",
    "AI-assisted work stays human-reviewed, security-aware, and practical.",
  ];

  return (
    <section
      id="about"
      className="border-b border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.025),transparent)] py-18 sm:py-24"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Hands-on engineering with team-lead ownership."
            description="I work across architecture, API design, code reviews, sprint planning, client communication, and release execution so product work keeps moving clearly."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.88fr_1.12fr]">
          <Reveal className="relative min-h-[34rem] overflow-hidden rounded-lg border border-white/10 bg-black/30">
            <Image
              src="/images/profile/pro-pic-1.webp"
              alt={siteConfig.name}
              fill
              sizes="(max-width: 1024px) 100vw, 44vw"
              className="object-cover object-[22%_top]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/18 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-red-200/85">
                {siteConfig.location}
              </p>
              <h3 className="mt-3 text-4xl font-semibold leading-tight text-white sm:text-5xl">
                {experienceYears} years of product delivery.
              </h3>
              <p className="mt-4 max-w-md text-base leading-7 text-white/68">
                From requirement calls to production releases, I stay close to
                the code, the team, and the decisions that shape the outcome.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5">
            <Reveal
              delay={0.06}
              className="rounded-lg border border-white/10 bg-white/[0.045] p-6 sm:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-red-100/80">
                Operating mode
              </p>
              <p className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
                I build like the senior engineer in the codebase and
                communicate like the Scrum Master responsible for delivery.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-white/64">
                My resume thread is consistent: MERN/PERN product work, .NET
                CRM/CMS depth, remote team leadership, direct stakeholder
                alignment, and AI-assisted development used with engineering
                judgment instead of blind automation.
              </p>
            </Reveal>

            <div className="grid gap-5 md:grid-cols-3">
              {operatingPrinciples.map((item, index) => (
                <Reveal
                  key={item}
                  delay={0.1 + index * 0.05}
                  className="rounded-lg border border-white/10 bg-black/35 p-5"
                >
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.28em] ${
                      index === 0
                        ? "text-red-200/80"
                        : index === 1
                          ? "text-red-300/75"
                          : "text-red-100/76"
                    }`}
                  >
                    0{index + 1}
                  </p>
                  <p className="mt-5 text-base leading-7 text-white/70">
                    {item}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.18} className="grid gap-5 md:grid-cols-3">
              <div className="rounded-lg border border-white/10 bg-red-500/10 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-red-200/72">
                  Focus
                </p>
                <p className="mt-3 text-xl font-semibold text-white">
                  MERN/PERN Delivery
                </p>
                <p className="mt-2 text-sm leading-6 text-white/58">
                  React UI, Node APIs, PostgreSQL, MongoDB, and release ownership.
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-red-950/45 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-red-300/72">
                  Strength
                </p>
                <p className="mt-3 text-xl font-semibold text-white">
                  Remote Team Leadership
                </p>
                <p className="mt-2 text-sm leading-6 text-white/58">
                  Sprint planning, backlog refinement, QA coordination, and reviews.
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-red-300/10 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-red-100/64">
                  Style
                </p>
                <p className="mt-3 text-xl font-semibold text-white">
                  AI-Assisted SDLC
                </p>
                <p className="mt-2 text-sm leading-6 text-white/58">
                  Codebase analysis, debugging, docs, and test ideation with review.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.24} className="flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-red-600 px-6 text-sm font-semibold text-white shadow-[0_0_28px_rgba(239,68,68,0.16)] transition hover:bg-red-500 hover:text-white"
              >
                Start a conversation
              </Link>
              <Link
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 px-6 text-sm font-semibold text-white transition hover:border-red-500/50 hover:text-red-200"
              >
                View resume
              </Link>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
