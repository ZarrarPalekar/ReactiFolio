"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

import { siteConfig } from "@/data/portfolio";
import { getExperienceYears } from "@/lib/date";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const principles = [
  { n: "01", label: "Lead", body: "Plans the team trusts." },
  { n: "02", label: "Build", body: "One product surface, no silos." },
  { n: "03", label: "Ship", body: "AI-assisted, human-reviewed." },
];

export function AboutSection() {
  const years = getExperienceYears("2017-03-01");
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "12%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative border-t border-white/10 py-32 sm:py-40"
    >
      <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-10 lg:px-14">
        <Reveal>
          <SectionHeading
            index="02"
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
            description={undefined}
          />
        </Reveal>

        <div className="mt-24 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-white/10">
              <motion.div
                style={
                  prefersReducedMotion
                    ? undefined
                    : { y: imgY, scale: imgScale }
                }
                className="absolute inset-0"
              >
                <Image
                  src="/images/profile/pro-pic-1.webp"
                  alt={siteConfig.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  className="object-cover object-[22%_top]"
                  priority
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />

              <div className="absolute inset-x-6 bottom-6 flex items-end justify-between text-white">
                <div>
                  <p className="mono text-[0.65rem] uppercase tracking-[0.32em] text-white/55">
                    {siteConfig.location} \\ Remote
                  </p>
                  <p className="display mt-3 text-3xl">{siteConfig.name}</p>
                </div>
                <span className="mono text-[0.65rem] uppercase tracking-[0.32em] text-white/45">
                  PORTRAIT / 01
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/[0.06]">
              <div className="bg-[#080404] p-6">
                <p className="mono text-[0.65rem] uppercase tracking-[0.32em] text-white/45">
                  Years
                </p>
                <p className="display mt-3 text-5xl text-white tabular">
                  {years}
                </p>
              </div>
              <div className="bg-[#080404] p-6">
                <p className="mono text-[0.65rem] uppercase tracking-[0.32em] text-white/45">
                  Team Size
                </p>
                <p className="display mt-3 text-5xl text-white tabular">
                  9 devs<span className="text-[var(--accent)]"> + </span>3 QA
                </p>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-10 lg:pt-12">
            <Reveal delay={0.1}>
              <p className="display text-3xl leading-[1.15] text-white sm:text-4xl lg:text-5xl">
                I build like the senior engineer in the codebase and communicate
                like the Scrum Master responsible for delivery.
              </p>
            </Reveal>

            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/[0.06] md:grid-cols-3">
              {principles.map((item, index) => (
                <Reveal
                  key={item.n}
                  delay={0.1 + index * 0.06}
                  className="bg-[#080404] p-6"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="mono text-[0.65rem] uppercase tracking-[0.32em] text-[var(--accent-soft)]/80">
                      {item.n}
                    </span>
                    <span className="mono text-[0.65rem] uppercase tracking-[0.32em] text-white/30">
                      /03
                    </span>
                  </div>
                  <p className="display mt-6 text-2xl text-white">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm leading-[1.65] text-white/55">
                    {item.body}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3} className="flex flex-wrap items-center gap-3">
              <Link
                href="/#contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white/85"
              >
                Start a conversation
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
