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
    "Requirements become readable plans before code starts moving.",
    "Frontend polish and backend reliability are treated as one product surface.",
    "Communication stays direct, calm, and useful when delivery gets complex.",
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
            title="Engineering depth with a delivery lead's calm."
            description="I work across frontend, backend, stakeholders, and release execution so products move forward with less friction and more clarity."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.88fr_1.12fr]">
          <Reveal className="relative min-h-[34rem] overflow-hidden rounded-lg border border-white/10 bg-black/30">
            <Image
              src="/images/profile/profile.webp"
              alt={siteConfig.name}
              fill
              sizes="(max-width: 1024px) 100vw, 44vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/18 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-100/84">
                {siteConfig.location}
              </p>
              <h3 className="mt-3 text-4xl font-semibold leading-tight text-white sm:text-5xl">
                {experienceYears} years of product delivery.
              </h3>
              <p className="mt-4 max-w-md text-base leading-7 text-white/68">
                From requirement calls to production releases, I stay close to
                the work until the outcome is clear.
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
                I build like a product engineer and communicate like the person
                responsible for the room.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-white/64">
                The strongest projects are rarely just code. They need technical
                judgment, clean sequencing, frequent alignment, and enough taste
                to make the final experience feel considered.
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
                        ? "text-cyan-100/76"
                        : index === 1
                          ? "text-lime-100/76"
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
              <div className="rounded-lg border border-white/10 bg-cyan-200/10 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/64">
                  Focus
                </p>
                <p className="mt-3 text-xl font-semibold text-white">
                  Full Stack Delivery
                </p>
                <p className="mt-2 text-sm leading-6 text-white/58">
                  UI, APIs, data workflows, and release ownership.
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-lime-200/10 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-lime-100/64">
                  Strength
                </p>
                <p className="mt-3 text-xl font-semibold text-white">
                  Stakeholder Clarity
                </p>
                <p className="mt-2 text-sm leading-6 text-white/58">
                  Better scope, fewer surprises, cleaner decisions.
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-red-300/10 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-red-100/64">
                  Style
                </p>
                <p className="mt-3 text-xl font-semibold text-white">
                  Launch Ready
                </p>
                <p className="mt-2 text-sm leading-6 text-white/58">
                  Practical engineering with a strong finish.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.24} className="flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-cyan-300 px-6 text-sm font-semibold !text-slate-950 shadow-[0_0_28px_rgba(41,211,208,0.16)] transition hover:bg-[#29d3d0] hover:!text-slate-950"
              >
                Start a conversation
              </Link>
              <Link
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 px-6 text-sm font-semibold text-white transition hover:border-cyan-200/50 hover:text-cyan-100"
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
