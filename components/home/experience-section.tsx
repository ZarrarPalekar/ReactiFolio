import Image from "next/image";
import Link from "next/link";

import { experience } from "@/data/portfolio";
import { getDurationLabel } from "@/lib/date";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="border-b border-white/10 py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <SectionHeading
                eyebrow="Experience"
                title="Enterprise discipline with product-minded frontend leadership."
                description="From .NET systems to MERN applications, each role sharpened a different part of how I build, communicate, and deliver."
              />
            </Reveal>
          </div>

          <div className="space-y-6">
            {experience.map((item, index) => (
              <Reveal
                key={`${item.company}-${item.start}`}
                delay={index * 0.07}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-center gap-4">
                    <Link
                      href={item.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white"
                    >
                      <div className="relative h-10 w-10">
                        <Image
                          src={item.logo}
                          alt={item.company}
                          fill
                          sizes="40px"
                          className="object-contain"
                        />
                      </div>
                    </Link>

                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-red-500">{item.company}</p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-sm text-white/56">{item.track}</p>
                    </div>
                  </div>

                  <div className="shrink-0 rounded-full border border-white/10 px-4 py-2 text-sm text-white/64">
                    {getDurationLabel(item.start, item.end) || "Ongoing"}
                  </div>
                </div>

                <div className="mt-6 grid gap-3 text-sm text-white/60 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/8 bg-black/40 px-4 py-3">
                    <span className="text-white/34">Stack</span>
                    <p className="mt-1 text-white/76">{item.stack}</p>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-black/40 px-4 py-3">
                    <span className="text-white/34">Timeline</span>
                    <p className="mt-1 text-white/76">
                      {new Date(item.start).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })}{" "}
                      -{" "}
                      {item.end
                        ? new Date(item.end).toLocaleDateString("en-US", {
                            month: "short",
                            year: "numeric",
                          })
                        : "Present"}
                    </p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-base leading-7 text-white/68">
                  {item.summary.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
