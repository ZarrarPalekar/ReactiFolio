"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

import { experience } from "@/data/portfolio";
import { getDurationLabel } from "@/lib/date";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export function ExperienceSection() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });
  const lineScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  return (
    <section
      id="experience"
      className="relative border-t border-white/10 py-32 sm:py-40"
    >
      <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-10 lg:px-14">
        <Reveal>
          <SectionHeading
            index="04"
            eyebrow="Experience"
            title={
              <>
                <span className="block">
                  Nine <span className="serif font-normal">years.</span>
                </span>
                <span className="block text-gradient-red">
                  Four <span className="serif font-normal">chapters.</span>
                </span>
              </>
            }
            description="From .NET CRM/CMS systems to MERN/PERN SaaS products — hands-on work that grew into team leadership, Scrum practice, and direct client ownership."
          />
        </Reveal>

        <div
          ref={ref}
          className="mt-24 grid gap-10 lg:grid-cols-[0.34fr_0.66fr] lg:gap-20"
        >
          {/* sticky meta */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <div className="border border-white/10 bg-[#080404]/80 p-6">
                <p className="mono text-[0.65rem] uppercase tracking-[0.32em] text-[var(--accent-soft)]/85">
                  Timeline
                </p>
                <p className="display mt-6 text-5xl text-white tabular">
                  2017<span className="text-white/30">—</span>
                  <span className="text-[var(--accent)]">∞</span>
                </p>
                <p className="mt-6 text-sm leading-[1.7] text-white/55">
                  Currently leading product engineering at Azul Arc — remote
                  team of 9 developers + 3 QA, in-house PERN product, US-based
                  clients.
                </p>
              </div>
            </Reveal>
          </div>

          {/* timeline */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute left-4 top-0 h-full w-px bg-white/8 sm:left-6"
            />
            <motion.div
              aria-hidden
              style={
                prefersReducedMotion
                  ? undefined
                  : { scaleY: lineScale, transformOrigin: "top" }
              }
              className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent-soft)] to-transparent sm:left-6"
            />

            <div className="flex flex-col gap-10">
              {experience.map((item, index) => (
                <motion.article
                  key={`${item.company}-${item.start}`}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 50 }}
                  whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.9,
                    delay: index * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative pl-14 sm:pl-20"
                >
                  <span className="absolute left-0 top-7 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--accent)]/40 bg-[#080404] sm:left-2 sm:h-8 sm:w-8">
                    <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_18px_rgba(255,58,69,0.85)]" />
                  </span>

                  <div className="group border border-white/10 bg-[#080404]/85 transition hover:border-white/25">
                    <div className="flex flex-col gap-5 border-b border-white/10 p-6 sm:flex-row sm:items-start sm:justify-between sm:p-8">
                      <div className="flex items-start gap-4">
                        <Link
                          href={item.companyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white"
                        >
                          <span className="relative h-9 w-9">
                            <Image
                              src={item.logo}
                              alt={item.company}
                              fill
                              sizes="36px"
                              className="object-contain"
                            />
                          </span>
                        </Link>
                        <div>
                          <p className="mono text-[0.65rem] uppercase tracking-[0.32em] text-white/40">
                            {item.company}
                          </p>
                          <h3 className="display mt-2 text-2xl text-white">
                            {item.role}
                          </h3>
                          <p className="mt-1 text-sm text-white/55">
                            {item.track}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col items-start gap-2 sm:items-end">
                        <span className="mono inline-flex items-center rounded-full border border-white/15 px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-white/60">
                          {getDurationLabel(item.start, item.end) || "Ongoing"}
                        </span>
                        <span className="mono text-[0.65rem] uppercase tracking-[0.28em] text-white/35">
                          {formatDate(item.start)} —{" "}
                          {item.end ? formatDate(item.end) : "Present"}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-8">
                      <p className="mono text-[0.65rem] uppercase tracking-[0.32em] text-[var(--accent-soft)]/85">
                        Stack
                      </p>
                      <p className="mt-3 text-sm leading-[1.7] text-white/70">
                        {item.stack}
                      </p>

                      <ul className="mt-7 flex flex-col gap-4">
                        {item.summary.map((point, pointIndex) => (
                          <li
                            key={point}
                            className="grid gap-3 border-l border-white/15 pl-5 sm:grid-cols-[2.5rem_1fr]"
                          >
                            <span className="mono text-[0.65rem] uppercase tracking-[0.28em] text-[var(--accent-soft)]/70">
                              H{pointIndex + 1}
                            </span>
                            <p className="text-sm leading-[1.7] text-white/65">
                              {point}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
