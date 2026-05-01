import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/data/portfolio";
import { getExperienceYears } from "@/lib/date";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  const experienceYears = getExperienceYears("2017-03-01");

  return (
    <section id="about" className="border-b border-white/10 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Full-stack execution with leadership built in."
            description="I work across frontend, backend, stakeholders, and delivery execution so products move forward with less friction and more clarity."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] xl:grid-cols-[0.72fr_1.28fr]">
          <Reveal className="grid gap-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
              <div className="mx-auto flex max-w-[320px] flex-col items-center">
                <div className="relative w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/40 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
                  <Image
                    src="/images/profile/profile.webp"
                    alt={siteConfig.name}
                    width={200}
                    height={200}
                    priority
                    sizes="(max-width: 768px) 200px, 320px"
                    className="h-auto w-full object-cover"
                  />
                </div>

                <div className="mt-5 text-center">
                  <p className="text-xs uppercase tracking-[0.38em] text-red-500">
                    Snapshot
                  </p>
                  <p className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                    {experienceYears}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/60 sm:text-base">
                    years leading web products from requirement discussions to production delivery.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-white/38">
                  Focus
                </p>
                <p className="mt-3 text-lg font-medium text-white">
                  Full Stack Delivery
                </p>
                <p className="mt-2 text-sm leading-6 text-white/58">
                  Frontend, backend, APIs, databases, and delivery ownership together.
                </p>
              </div>

              <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-white/38">
                  Based In
                </p>
                <p className="mt-3 text-lg font-medium text-white">
                  {siteConfig.location}
                </p>
                <p className="mt-2 text-sm leading-6 text-white/58">
                  Open to product builds, consulting, and team support.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal
            delay={0.08}
            className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 sm:p-10"
          >
            <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-black/30">
              <div className="relative min-h-[18rem] overflow-hidden border-b border-white/10 p-6 sm:min-h-[20rem] sm:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(239,68,68,0.22),transparent_32%),radial-gradient(circle_at_75%_30%,rgba(255,255,255,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0))]" />
                <div className="relative grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/38">
                      Build Lens
                    </p>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                      {["Stakeholder clarity", "Enterprise delivery", "Launch-ready systems"].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 rounded-full border border-white/10 bg-black/35 px-4 py-3 text-sm text-white/72"
                        >
                          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-red-500" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                    <div className="rounded-[1.5rem] border border-white/10 bg-black/35 p-5">
                      <p className="text-xs uppercase tracking-[0.35em] text-white/38">
                        Delivery Rhythm
                      </p>
                      <div className="relative mt-5 h-28 overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03]">
                        <div className="absolute inset-0 opacity-[0.11] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:28px_28px]" />
                        <div className="absolute left-7 right-7 top-1/2 h-px bg-red-400/45" />
                        {[
                          ["Plan", "left-4 top-4", "01"],
                          ["Build", "left-[34%] bottom-4", "02"],
                          ["Review", "right-[27%] top-4", "03"],
                          ["Ship", "right-4 bottom-4", "04"],
                        ].map(([label, position, step], index) => (
                          <div
                            key={label}
                            className={`absolute ${position} flex h-12 w-12 flex-col items-center justify-center rounded-2xl border text-[0.5rem] font-medium uppercase tracking-[0.12em] ${
                              index === 1
                                ? "border-red-400/34 bg-red-500/18 text-white"
                                : "border-white/10 bg-black/36 text-white/58"
                            }`}
                          >
                            <span className="text-[0.48rem] text-white/34">
                              {step}
                            </span>
                            {label}
                            {index < 3 ? (
                              <span className="absolute -right-1 top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-red-400" />
                            ) : null}
                          </div>
                        ))}
                        <div className="absolute bottom-2.5 left-4 right-4 flex justify-between text-[0.5rem] uppercase tracking-[0.2em] text-white/24">
                          <span>Scope</span>
                          <span>Release</span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-[1.5rem] border border-white/10 bg-black/35 p-5">
                      <p className="text-xs uppercase tracking-[0.35em] text-white/38">
                        Core Mix
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {["React", "Node", ".NET", "SQL"].map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-white/64"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 p-6 md:grid-cols-2 xl:grid-cols-3 sm:p-8">
                <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/38">
                    Speciality
                  </p>
                  <p className="mt-3 text-lg font-medium leading-8 text-white">
                    End-to-end application leadership
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/38">
                    Strength
                  </p>
                  <p className="mt-3 text-lg font-medium leading-8 text-white">
                    Stakeholder management and communication
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5 md:col-span-2 xl:col-span-1">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/38">
                    Style
                  </p>
                  <p className="mt-3 text-lg font-medium leading-8 text-white">
                    Clear, dependable, leadership-driven
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-red-600 px-6 text-sm font-medium text-white transition hover:bg-red-500"
              >
                Start a conversation
              </Link>
              <Link
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 px-6 text-sm font-medium text-white transition hover:border-red-500 hover:text-red-400"
              >
                View resume
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
