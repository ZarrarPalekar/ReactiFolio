"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { skillCategories } from "@/data/portfolio";
import { Marquee } from "@/components/ui/marquee";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const labels = ["Product stack", "Enterprise systems", "Lead and improve"];

export function ExpertiseSection() {
  const prefersReducedMotion = useReducedMotion();
  const allSkills = skillCategories.flatMap((cat) => cat.skills);

  return (
    <section
      id="expertise"
      className="relative border-t border-white/10 py-32 sm:py-40"
    >
      <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-10 lg:px-14">
        <Reveal>
          <SectionHeading
            index="03"
            eyebrow="Expertise"
            title={
              <>
                <span className="block">Resume stack,</span>
                <span className="block text-gradient-red">
                  <span className="serif font-normal">delivery</span> strengths.
                </span>
              </>
            }
            description="The core is MERN/PERN full-stack work, backed by .NET enterprise depth, Scrum leadership, and practical AI-assisted development habits."
          />
        </Reveal>

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex flex-col overflow-hidden border border-white/10 bg-[#080404]/80"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                <span className="mono text-[0.65rem] uppercase tracking-[0.32em] text-[var(--accent-soft)]/85">
                  {labels[index]}
                </span>
                <span className="mono text-[0.65rem] uppercase tracking-[0.32em] text-white/35">
                  {String(index + 1).padStart(2, "0")} / 03
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-6 p-6 sm:p-8">
                <h3 className="display text-3xl leading-tight text-white">
                  {category.title}
                </h3>
                <p className="text-sm leading-[1.7] text-white/55">
                  {category.description}
                </p>

                <div className="mt-auto grid grid-cols-4 gap-px overflow-hidden border border-white/10 bg-white/[0.06]">
                  {category.skills.slice(0, 8).map((skill) => (
                    <div
                      key={skill.name}
                      className="group/skill relative flex aspect-square items-center justify-center bg-[#080404] transition hover:bg-[var(--accent)]/15"
                    >
                      <div
                        className={`relative h-8 w-8 transition group-hover/skill:scale-110 ${skill.iconWrapperClassName ?? ""}`}
                      >
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          fill
                          sizes="40px"
                          className={`object-contain ${skill.iconClassName ?? ""}`}
                        />
                      </div>
                      <span className="pointer-events-none absolute inset-x-0 bottom-1 text-center text-[0.55rem] uppercase tracking-[0.18em] text-white/0 transition group-hover/skill:text-white/70">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/60 to-transparent opacity-0 transition group-hover:opacity-100"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* skills marquee — full-bleed to the viewport edges */}
      <div className="mt-16 border-y border-white/10 bg-black/40 backdrop-blur">
        <Marquee duration={56}>
          {allSkills.map((skill, index) => (
            <span
              key={`${skill.name}-${index}`}
              className="flex items-center gap-4 px-6 py-5"
            >
              <span
                className={`relative inline-block h-6 w-6 ${skill.iconWrapperClassName ?? ""}`}
              >
                <Image
                  src={skill.icon}
                  alt=""
                  fill
                  sizes="24px"
                  className={`object-contain ${skill.iconClassName ?? ""}`}
                />
              </span>
              <span className="mono text-xs uppercase tracking-[0.32em] text-white/50">
                {skill.name}
              </span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
