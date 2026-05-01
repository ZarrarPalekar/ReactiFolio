import Image from "next/image";

import { skillCategories } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

function ExpertiseVisual({ title }: { title: string }) {
  if (title === "Frontend + Backend") {
    return (
      <div className="relative h-32 overflow-hidden border-b border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0)_58%)]">
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="absolute left-6 top-6 h-[4.9rem] w-[7.6rem] rounded-2xl border border-white/12 bg-black/50">
          <div className="flex h-6 items-center gap-1.5 border-b border-white/10 px-3">
            <span className="size-1.5 rounded-full bg-red-400" />
            <span className="size-1.5 rounded-full bg-white/22" />
            <span className="size-1.5 rounded-full bg-white/16" />
          </div>
          <div className="grid grid-cols-[0.8fr_1fr] gap-2 p-3">
            <span className="h-8 rounded-lg border border-red-400/30 bg-red-500/18" />
            <div className="space-y-1.5 pt-0.5">
              <span className="block h-1.5 rounded-full bg-white/28" />
              <span className="block h-1.5 w-4/5 rounded-full bg-white/16" />
              <span className="block h-1.5 w-3/5 rounded-full bg-white/12" />
            </div>
          </div>
        </div>
        <div className="absolute right-6 top-6 grid gap-2">
          {["API", "DB"].map((label, index) => (
            <div
              key={label}
              className="flex h-8 w-20 items-center justify-between rounded-xl border border-white/12 bg-white/[0.055] px-3 text-[0.56rem] font-medium uppercase tracking-[0.18em] text-white/55"
            >
              <span>{label}</span>
              <span
                className={`size-2 rounded-full ${
                  index === 0 ? "bg-red-400" : "bg-white/28"
                }`}
              />
            </div>
          ))}
        </div>
        <div className="absolute left-[48%] top-[3.95rem] h-px w-[22%] bg-red-400/60">
          <span className="absolute -right-1 -top-1 size-2 rounded-full bg-red-400" />
        </div>
      </div>
    );
  }

  if (title === "Enterprise Delivery") {
    return (
      <div className="relative h-32 overflow-hidden border-b border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0)_60%)]">
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:30px_30px]" />
        <div className="absolute left-6 top-6 grid gap-2">
          {["01", "02", "03"].map((label, index) => (
            <div
              key={label}
              className="flex h-7 w-28 items-center gap-3 rounded-xl border border-white/12 bg-black/45 px-3"
            >
              <span
                className={`text-[0.58rem] font-semibold ${
                  index === 1 ? "text-red-300" : "text-white/36"
                }`}
              >
                {label}
              </span>
              <span
                className={`h-1.5 rounded-full ${
                  index === 1 ? "w-12 bg-red-400/80" : "w-10 bg-white/18"
                }`}
              />
            </div>
          ))}
        </div>
        <div className="absolute left-[48%] top-[4.1rem] h-px w-[17%] bg-red-400/55" />
        <div className="absolute right-6 top-6 h-[5.25rem] w-24 rounded-2xl border border-white/12 bg-white/[0.055] p-3">
          <div className="space-y-2">
            {[0, 1, 2].map((item) => (
              <span
                key={item}
                className="block h-3 rounded-[50%] border border-white/12 bg-black/30"
              />
            ))}
          </div>
          <div className="absolute inset-x-3 top-[1.9rem] h-8 border-x border-red-400/28" />
        </div>
        <span className="absolute left-[64%] top-[3.72rem] size-2 rounded-full bg-red-400" />
      </div>
    );
  }

  return (
    <div className="relative h-32 overflow-hidden border-b border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0)_60%)]">
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:30px_30px]" />
      <div className="absolute left-6 top-6 grid h-[5.25rem] w-[7.4rem] grid-cols-3 gap-2 rounded-2xl border border-white/12 bg-black/45 p-3">
        {["Backlog", "Active", "Done"].map((label, columnIndex) => (
          <div key={label} className="space-y-2">
            <span className="block h-1.5 rounded-full bg-white/16" />
            <span
              className={`block rounded-lg ${
                columnIndex === 1
                  ? "h-9 border border-red-400/30 bg-red-500/20"
                  : "h-6 bg-white/12"
              }`}
            />
          </div>
        ))}
      </div>
      <div className="absolute right-7 top-7 h-20 w-24">
        <span className="absolute left-0 top-8 size-8 rounded-full border border-white/12 bg-white/[0.055]" />
        <span className="absolute right-0 top-8 size-8 rounded-full border border-white/12 bg-white/[0.055]" />
        <span className="absolute left-1/2 top-2 size-10 -translate-x-1/2 rounded-full border border-red-400/35 bg-red-500/18" />
        <span className="absolute left-4 right-4 top-[3.25rem] h-px bg-red-400/45" />
      </div>
    </div>
  );
}

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
                <ExpertiseVisual title={category.title} />

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
