import Image from "next/image";

import { SectionReveal } from "@/components/animations/section-reveal";
import { TextReveal } from "@/components/animations/text-reveal";
import { skillCategories } from "@/data/portfolio";

const marqueeItems = [
  "React",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "MongoDB",
  "GraphQL",
  ".NET",
  "Scrum",
  "AI-assisted SDLC",
  "SEO",
  "Performance",
  "Code reviews",
];

const accents = [
  {
    text: "text-[#8ef0df]",
    border: "border-[#8ef0df]/22",
    bg: "bg-[#8ef0df]/8",
  },
  {
    text: "text-[#ffb3bd]",
    border: "border-[#ff4d5f]/22",
    bg: "bg-[#ff4d5f]/8",
  },
  {
    text: "text-[#ffe09a]",
    border: "border-[#f8c85b]/22",
    bg: "bg-[#f8c85b]/8",
  },
];

export function SkillsSection() {
  return (
    <section
      id="expertise"
      className="overflow-hidden border-b border-white/10 bg-[#050608] py-18 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[92rem] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <SectionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#8ef0df]">
              Expertise
            </p>
            <TextReveal
              text="A product stack shaped by real delivery pressure."
              className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.98] text-white sm:text-6xl lg:text-7xl"
            />
          </SectionReveal>
          <SectionReveal delay={0.08}>
            <p className="max-w-2xl text-lg leading-8 text-white/62">
              The core is MERN/PERN full-stack work, strengthened by enterprise
              .NET systems, stakeholder-heavy delivery, and AI-assisted
              workflows used with careful human review.
            </p>
          </SectionReveal>
        </div>
      </div>

      <SectionReveal className="mt-14">
        <div className="relative flex overflow-hidden border-y border-white/10 bg-white/[0.025] py-5">
          <div className="flex min-w-full shrink-0 animate-[marqueeDrift_28s_linear_infinite] items-center gap-4 pr-4">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="rounded-full border border-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/64"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </SectionReveal>

      <div className="mx-auto mt-12 grid w-full max-w-[92rem] gap-5 px-5 sm:px-8 lg:grid-cols-3 lg:px-10">
        {skillCategories.map((category, index) => {
          const accent = accents[index % accents.length];

          return (
            <SectionReveal key={category.title} delay={index * 0.06}>
              <article
                className={`h-full rounded-lg border ${accent.border} bg-white/[0.035] p-6 transition hover:border-white/24`}
              >
                <div className="flex min-h-40 flex-col justify-between">
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-[0.3em] ${accent.text}`}>
                      0{index + 1}
                    </p>
                    <h3 className="mt-4 text-3xl font-semibold leading-tight text-white">
                      {category.title}
                    </h3>
                  </div>
                  <p className="mt-5 text-sm leading-6 text-white/58">
                    {category.description}
                  </p>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`flex min-w-0 items-center gap-3 rounded-md border border-white/8 ${accent.bg} px-3 py-3`}
                    >
                      <span
                        className={`relative h-8 w-8 shrink-0 ${skill.iconWrapperClassName ?? ""}`.trim()}
                      >
                        <Image
                          src={skill.icon}
                          alt=""
                          fill
                          sizes="32px"
                          className={`object-contain ${skill.iconClassName ?? ""}`.trim()}
                        />
                      </span>
                      <span className="min-w-0 break-words text-sm leading-5 text-white/76">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            </SectionReveal>
          );
        })}
      </div>
    </section>
  );
}
