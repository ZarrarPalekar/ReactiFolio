"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

import { siteConfig } from "@/data/portfolio";
import { getExperienceYears } from "@/lib/date";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const operatingPrinciples = [
  {
    icon: "◐",
    title: "Translate the brief",
    body: "Business requirements become user stories, estimates, and a delivery plan everyone can read.",
  },
  {
    icon: "◇",
    title: "One product surface",
    body: "React, Node.js, PostgreSQL, MongoDB, and .NET handled as a single end-to-end product surface.",
  },
  {
    icon: "△",
    title: "AI with judgment",
    body: "AI-assisted work stays human-reviewed, security-aware, and grounded in engineering judgment.",
  },
];

export function AboutSection() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yImage = useTransform(scrollYProgress, [0, 1], ["-6%", "12%"]);
  const experienceYears = getExperienceYears("2017-03-01");

  return (
    <section
      id="about"
      ref={ref}
      className="relative border-b border-white/5 py-24 sm:py-32"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="01 — About"
            title="Hands-on engineer with"
            accent="team-lead ownership."
            description="Architecture, API design, code reviews, sprint planning, client conversations, and release execution — kept close to the work so product momentum stays visible."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Photo card */}
          <Reveal direction="left" className="relative">
            <div className="group relative h-[34rem] overflow-hidden rounded-3xl border border-white/10 bg-black/30">
              <motion.div
                style={{ y: reduce ? 0 : yImage }}
                className="absolute inset-0"
              >
                <Image
                  src="/images/profile/pro-pic-1.webp"
                  alt={siteConfig.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  className="object-cover object-[22%_top] transition duration-700 group-hover:scale-105"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              {/* Floating badge */}
              <div className="absolute right-5 top-5 rounded-2xl border border-white/15 bg-black/45 px-4 py-3 backdrop-blur-xl">
                <p className="font-mono text-[0.58rem] uppercase tracking-[0.3em] text-white/50">
                  Based in
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  {siteConfig.location}
                </p>
              </div>

              <div className="absolute inset-x-6 bottom-6">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.3em] text-[var(--primary-soft)]">
                  Years shipping
                </p>
                <p className="mt-2 text-6xl font-semibold leading-none tracking-tight text-white">
                  {experienceYears}
                  <span className="text-gradient-warm">+</span>
                </p>
                <p className="mt-3 max-w-md text-sm leading-6 text-white/65">
                  From requirement calls to production releases — close to the
                  code, the team, and the decisions that shape the outcome.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Content side */}
          <div className="grid gap-6">
            <Reveal direction="right" delay={0.05}>
              <div className="glass spotlight glow-border rounded-3xl p-8 sm:p-10">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.3em] text-[var(--primary-soft)]">
                  Operating mode
                </p>
                <p className="mt-5 text-pretty text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                  I build like the senior engineer in the codebase and
                  communicate like the Scrum Master responsible for delivery.
                </p>
                <p className="mt-6 text-base leading-8 text-white/65">
                  My resume thread is consistent — MERN/PERN product work, .NET
                  CRM/CMS depth, remote leadership, direct stakeholder alignment,
                  and AI-assisted development used with judgment instead of blind
                  automation.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-4 md:grid-cols-3">
              {operatingPrinciples.map((p, i) => (
                <Reveal key={p.title} delay={0.1 + i * 0.06} direction="up">
                  <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl text-[var(--primary)] transition group-hover:rotate-12">
                        {p.icon}
                      </span>
                      <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-white/30">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="mt-6 text-lg font-semibold tracking-tight text-white">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/60">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.22} direction="up" className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/#contact"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-deep)] px-7 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(255,75,92,0.3)] transition hover:shadow-[0_12px_44px_rgba(255,75,92,0.5)]"
              >
                Start a conversation
                <span className="transition group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-7 text-sm font-semibold text-white backdrop-blur transition hover:border-white/30 hover:bg-white/[0.06]"
              >
                <span>View resume</span>
                <span className="text-white/50">PDF</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
