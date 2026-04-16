import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/data/portfolio";
import { getExperienceYears } from "@/lib/date";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  const experienceYears = getExperienceYears("2017-03-01");

  return (
    <section id="about" className="border-b border-white/10 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Clean execution, strong design instincts, and end-to-end ownership."
            description="I build interfaces that look sharp, feel fast, and stay maintainable as products evolve. My background spans frontend architecture, full-stack delivery, and direct client collaboration."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.78fr_1fr]">
          <Reveal className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
              <Image
                src="/images/profile/profile.webp"
                alt={siteConfig.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 38vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.38em] text-red-500">Snapshot</p>
                <p className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-white">{experienceYears}</p>
                <p className="mt-2 max-w-xs text-base leading-7 text-white/60">
                  years of professional experience across consulting, product development, and
                  modern web engineering.
                </p>
              </div>

              <div className="space-y-5 text-base leading-8 text-white/68 sm:text-lg">
                <p>
                  I specialize in shipping polished digital products with React, modern frontend
                  systems, and pragmatic full-stack thinking.
                </p>
                <p>
                  My approach blends interface craft, performance awareness, and delivery discipline
                  so the final product feels premium without becoming fragile.
                </p>
                <p>
                  From early architecture to launch refinement, I focus on clarity, momentum, and
                  outcomes that clients and users can feel immediately.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-black transition hover:bg-red-500 hover:text-black"
              >
                Start a conversation
              </Link>
              <Link
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 px-6 text-sm font-medium text-white transition hover:border-red-500 hover:text-red-400"
              >
                View resume
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
