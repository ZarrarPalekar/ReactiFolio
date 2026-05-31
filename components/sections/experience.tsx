import Image from "next/image";
import Link from "next/link";

import { SectionReveal } from "@/components/animations/section-reveal";
import { TextReveal } from "@/components/animations/text-reveal";
import { experience } from "@/data/portfolio";
import { getDurationLabel } from "@/lib/date";

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
      className="relative border-b border-white/10 bg-[#08090d] py-18 sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid w-full max-w-[92rem] gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#ffb3bd]">
              Experience
            </p>
            <TextReveal
              text="From enterprise systems to SaaS product leadership."
              className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.98] text-white sm:text-6xl lg:text-7xl"
            />
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
              A career arc through .NET CRM/CMS work, MERN SaaS delivery,
              PERN product leadership, client communication, and Scrum practice.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1} className="mt-9 grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10">
            {["Plan", "Review", "Ship"].map((item, index) => (
              <div key={item} className="bg-[#050608] p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-white/34">
                  0{index + 1}
                </p>
                <p className="mt-5 font-semibold text-white">{item}</p>
              </div>
            ))}
          </SectionReveal>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-[#8ef0df]/70 via-white/14 to-[#ff4d5f]/60 sm:left-8"
          />

          <div className="grid gap-5">
            {experience.map((item, index) => (
              <SectionReveal
                key={`${item.company}-${item.start}`}
                delay={index * 0.06}
                className="relative pl-14 sm:pl-20"
              >
                <span className="absolute left-0 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-[#050608] text-xs font-semibold text-white sm:left-3">
                  0{index + 1}
                </span>

                <article className="rounded-lg border border-white/10 bg-white/[0.035] p-5 transition hover:border-white/20 sm:p-6">
                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <div className="flex items-start gap-4">
                      <Link
                        href={item.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white"
                        aria-label={`${item.company} website`}
                      >
                        <span className="relative h-9 w-9">
                          <Image
                            src={item.logo}
                            alt=""
                            fill
                            sizes="36px"
                            className="object-contain"
                          />
                        </span>
                      </Link>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/38">
                          {item.company}
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                          {item.role}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-white/54">
                          {item.track}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 rounded-full border border-white/10 bg-black/24 px-4 py-2 text-sm text-white/66">
                      {getDurationLabel(item.start, item.end) || "Ongoing"}
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 md:grid-cols-[0.92fr_1.08fr]">
                    <div className="rounded-md border border-white/8 bg-black/20 p-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-white/34">
                        Stack
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/72">
                        {item.stack}
                      </p>
                    </div>
                    <div className="rounded-md border border-white/8 bg-black/20 p-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-white/34">
                        Timeline
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/72">
                        {formatDate(item.start)} -{" "}
                        {item.end ? formatDate(item.end) : "Present"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3">
                    {item.summary.map((point, pointIndex) => (
                      <p
                        key={point}
                        className="border-l border-white/12 bg-black/[0.18] px-4 py-3 text-sm leading-7 text-white/64"
                      >
                        <span className="mr-3 font-semibold text-[#8ef0df]">
                          H{pointIndex + 1}
                        </span>
                        {point}
                      </p>
                    ))}
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
