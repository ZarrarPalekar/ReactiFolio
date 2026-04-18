import Image from "next/image";

import { skillCategories } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ExpertiseSection() {
  const baseIconWrapperClassName = "relative h-9 w-9 shrink-0";
  const baseIconClassName = "object-contain";

  return (
    <section id="expertise" className="border-b border-white/10 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Expertise"
            title="A balanced stack with delivery and leadership around it."
            description="The stack reflects how I work in practice: frontend and backend depth, enterprise reliability, and communication that keeps delivery moving."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Reveal
              key={category.title}
              delay={index * 0.08}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7"
            >
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/30">
                <div className="relative h-32 overflow-hidden border-b border-white/10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(239,68,68,0.3),transparent_24%),radial-gradient(circle_at_75%_35%,rgba(255,255,255,0.12),transparent_20%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_60%)]" />
                  <div className="absolute inset-x-5 bottom-5 flex items-end gap-2">
                    {[32, 52, 72, 44, 60].map((height, barIndex) => (
                      <div
                        key={`${category.title}-${height}`}
                        className={`flex-1 rounded-t-full ${
                          barIndex === 2 ? "bg-red-500/80" : "bg-white/12"
                        }`}
                        style={{ height }}
                      />
                    ))}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm uppercase tracking-[0.35em] text-red-500">
                      {category.title}
                    </p>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/46">
                      {category.skills.length} tools
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-white/58">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex min-w-0 items-center gap-3 rounded-2xl border border-white/8 bg-black/40 px-4 py-3"
                  >
                    <div
                      className={`${baseIconWrapperClassName} ${skill.iconWrapperClassName ?? ""}`.trim()}
                    >
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        fill
                        sizes="56px"
                        className={`${baseIconClassName} ${skill.iconClassName ?? ""}`.trim()}
                      />
                    </div>
                    <span className="min-w-0 break-words text-sm leading-5 text-white/78">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
