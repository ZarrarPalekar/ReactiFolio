import Image from "next/image";
import Link from "next/link";

import { ImageReveal } from "@/components/animations/image-reveal";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { SectionReveal } from "@/components/animations/section-reveal";
import { TextReveal } from "@/components/animations/text-reveal";
import { siteConfig } from "@/data/portfolio";
import { getExperienceYears } from "@/lib/date";

const principles = [
  {
    label: "Translate",
    copy: "Business needs become user stories, estimates, architecture choices, and release plans.",
  },
  {
    label: "Build",
    copy: "React interfaces, Node APIs, database flows, integrations, and legacy .NET work stay connected.",
  },
  {
    label: "Lead",
    copy: "Planning, code reviews, QA coordination, and stakeholder communication move as one rhythm.",
  },
];

export function AboutSection() {
  const experienceYears = getExperienceYears("2017-03-01");

  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-white/10 bg-[#07080b] py-18 sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid w-full max-w-[92rem] gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#f8c85b]">
              Professional story
            </p>
            <TextReveal
              text="Hands-on engineering with delivery ownership."
              className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.98] text-white sm:text-6xl lg:text-7xl"
            />
          </SectionReveal>
        </div>

        <div className="grid gap-6">
          <SectionReveal>
            <p className="max-w-4xl text-2xl leading-10 text-white/78 sm:text-3xl sm:leading-[1.35]">
              I work where code, people, and product direction overlap. The
              thread across my career is simple: understand the outcome, design
              the system, guide the team, and stay close enough to the code to
              protect quality.
            </p>
          </SectionReveal>

          <div className="grid gap-5 md:grid-cols-[0.86fr_1.14fr]">
            <ImageReveal className="relative min-h-[28rem] overflow-hidden rounded-lg border border-white/10 bg-white/[0.035]">
              <Image
                src="/images/profile/pro-pic-1.webp"
                alt={siteConfig.name}
                fill
                sizes="(max-width: 768px) 100vw, 38vw"
                data-reveal-media
                className="object-cover object-[24%_top]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8ef0df]">
                  {siteConfig.location}
                </p>
                <p className="mt-3 text-4xl font-semibold text-white">
                  {experienceYears} years
                </p>
              </div>
            </ImageReveal>

            <div className="grid gap-5">
              {principles.map((item, index) => (
                <SectionReveal key={item.label} delay={index * 0.06}>
                  <article className="rounded-lg border border-white/10 bg-white/[0.035] p-6 transition hover:border-white/20">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/34">
                      0{index + 1}
                    </p>
                    <h3 className="mt-5 text-3xl font-semibold text-white">
                      {item.label}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-white/62">
                      {item.copy}
                    </p>
                  </article>
                </SectionReveal>
              ))}
            </div>
          </div>

          <SectionReveal className="grid gap-5 md:grid-cols-3">
            {[
              ["Focus", "MERN/PERN product delivery"],
              ["Strength", "Remote team leadership"],
              ["Style", "Clear, pragmatic, human"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="border-t border-white/14 pt-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/36">
                  {label}
                </p>
                <p className="mt-3 text-xl font-semibold leading-snug text-white">
                  {value}
                </p>
              </div>
            ))}
          </SectionReveal>

          <SectionReveal className="flex flex-col gap-3 sm:flex-row">
            <MagneticButton>
              <Link
                href="/#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-[#050608] transition hover:bg-[#8ef0df]"
              >
                Start a conversation
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 px-7 text-sm font-semibold text-white transition hover:border-[#f8c85b]/50 hover:text-[#f8c85b]"
              >
                View resume
              </Link>
            </MagneticButton>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
