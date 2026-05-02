import Image from "next/image";
import Link from "next/link";

import { experience } from "@/data/portfolio";
import { getDurationLabel } from "@/lib/date";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const accents = [
  "border-red-500/30 bg-red-500/10 text-red-200",
  "border-red-800/30 bg-red-950/45 text-red-300",
  "border-red-200/30 bg-red-300/10 text-red-100",
];

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="border-b border-white/10 bg-black/15 py-18 sm:py-24"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <SectionHeading
                eyebrow="Experience"
                title="Nine years across SaaS, CRM, CMS, and enterprise delivery."
                description="From .NET CRM/CMS systems to MERN/PERN SaaS products, the work has stayed hands-on while adding team leadership, Scrum practice, and client communication."
              />
            </Reveal>

            <Reveal delay={0.1} className="mt-8 overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
              <div className="grid grid-cols-3 gap-px bg-white/10">
                {["Plan", "Build", "Ship"].map((item, index) => (
                  <div key={item} className="bg-[#100506] p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/36">
                      0{index + 1}
                    </p>
                    <p className="mt-3 font-semibold text-white">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-red-500/55 via-white/16 to-red-950/55 sm:left-8"
            />

            <div className="space-y-5">
              {experience.map((item, index) => (
                <Reveal
                  key={`${item.company}-${item.start}`}
                  delay={index * 0.07}
                  className="relative pl-14 sm:pl-20"
                >
                  <span
                    className={`absolute left-0 top-7 z-10 flex h-10 w-10 items-center justify-center rounded-full border text-xs font-semibold sm:left-3 ${accents[index % accents.length]}`}
                  >
                    0{index + 1}
                  </span>

                  <article className="rounded-lg border border-white/10 bg-white/[0.045] p-5 transition hover:border-white/18 sm:p-6">
                    <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                      <div className="flex items-start gap-4">
                        <Link
                          href={item.companyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white"
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
                          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/42">
                            {item.company}
                          </p>
                          <h3 className="mt-2 text-2xl font-semibold leading-tight text-white">
                            {item.role}
                          </h3>
                          <p className="mt-1 text-sm text-white/56">
                            {item.track}
                          </p>
                        </div>
                      </div>

                      <div className="shrink-0 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/66">
                        {getDurationLabel(item.start, item.end) || "Ongoing"}
                      </div>
                    </div>

                    <div className="mt-6 grid gap-3 md:grid-cols-[0.8fr_1.2fr]">
                      <div className="border border-white/8 bg-black/25 p-4">
                        <p className="text-xs uppercase tracking-[0.24em] text-white/34">
                          Stack
                        </p>
                        <p className="mt-2 text-sm leading-6 text-white/74">
                          {item.stack}
                        </p>
                      </div>
                      <div className="border border-white/8 bg-black/25 p-4">
                        <p className="text-xs uppercase tracking-[0.24em] text-white/34">
                          Timeline
                        </p>
                        <p className="mt-2 text-sm leading-6 text-white/74">
                          {formatDate(item.start)} -{" "}
                          {item.end ? formatDate(item.end) : "Present"}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 grid gap-3">
                      {item.summary.map((point, pointIndex) => (
                        <div
                          key={point}
                          className="grid gap-3 border-l border-white/10 bg-black/[0.22] px-4 py-3 sm:grid-cols-[3rem_1fr]"
                        >
                          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-200/72">
                            H{pointIndex + 1}
                          </span>
                          <p className="text-sm leading-7 text-white/66">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
