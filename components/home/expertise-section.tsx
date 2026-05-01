import Image from "next/image";

import { skillCategories } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const categoryThemes = [
  {
    label: "Interface to API",
    accentText: "text-red-200",
    border: "border-red-500/24",
    background: "bg-red-500/10",
    line: "bg-red-500/70",
  },
  {
    label: "Scale and systems",
    accentText: "text-red-300",
    border: "border-red-800/24",
    background: "bg-red-950/45",
    line: "bg-red-700/70",
  },
  {
    label: "Delivery rhythm",
    accentText: "text-red-100",
    border: "border-red-200/24",
    background: "bg-red-300/10",
    line: "bg-red-300/70",
  },
];

function ExpertiseVisual({ index }: { index: number }) {
  const theme = categoryThemes[index % categoryThemes.length];
  const columns = index === 0 ? ["UI", "API", "DB"] : index === 1 ? ["Plan", "Build", "Run"] : ["Align", "Lead", "Ship"];

  return (
    <div className="relative h-40 overflow-hidden border-b border-white/10 bg-black/35">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.28)_1px,transparent_1px)] [background-size:30px_30px]"
      />
      <div className="absolute inset-x-5 top-5 flex items-center gap-2">
        {columns.map((column, columnIndex) => (
          <div
            key={column}
            className={`relative flex h-24 flex-1 flex-col justify-between rounded-lg border p-3 ${theme.border} ${columnIndex === index % 3 ? theme.background : "bg-white/[0.035]"}`}
          >
            <span className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-white/46">
              0{columnIndex + 1}
            </span>
            <span className={`text-sm font-semibold ${theme.accentText}`}>
              {column}
            </span>
            {columnIndex < columns.length - 1 ? (
              <span
                className={`absolute -right-3 top-1/2 h-px w-6 -translate-y-1/2 ${theme.line}`}
              />
            ) : null}
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-5 right-5 flex items-center gap-3">
        <span className={`h-1.5 flex-1 rounded-full ${theme.line}`} />
        <span className="text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-white/38">
          Production ready
        </span>
      </div>
    </div>
  );
}

export function ExpertiseSection() {
  return (
    <section id="expertise" className="border-b border-white/10 py-18 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Expertise"
            title="A stack that reads as one complete product engine."
            description="The stack reflects how I work in practice: frontend and backend depth, enterprise reliability, and communication that keeps delivery moving."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const theme = categoryThemes[index % categoryThemes.length];

            return (
              <Reveal
                key={category.title}
                delay={index * 0.08}
                className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.045]"
              >
                <ExpertiseVisual index={index} />

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p
                        className={`text-xs font-semibold uppercase tracking-[0.28em] ${theme.accentText}`}
                      >
                        {theme.label}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold leading-tight text-white">
                        {category.title}
                      </h3>
                    </div>
                    <span className="shrink-0 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/48">
                      {category.skills.length} tools
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-white/60">
                    {category.description}
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex min-w-0 items-center gap-3 border border-white/8 bg-black/30 px-3 py-3"
                      >
                        <div
                          className={`relative h-8 w-8 shrink-0 ${skill.iconWrapperClassName ?? ""}`.trim()}
                        >
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            fill
                            sizes="40px"
                            className={`object-contain ${skill.iconClassName ?? ""}`.trim()}
                          />
                        </div>
                        <span className="min-w-0 break-words text-sm leading-5 text-white/76">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
