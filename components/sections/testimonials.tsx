"use client";

import Image from "next/image";
import { useState } from "react";

import { SectionReveal } from "@/components/animations/section-reveal";
import { TextReveal } from "@/components/animations/text-reveal";
import { testimonials } from "@/data/portfolio";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  if (!active) {
    return null;
  }

  return (
    <section
      id="testimonials"
      className="border-b border-white/10 bg-[#050608] py-18 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[92rem] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <SectionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#f8c85b]">
              Leadership proof
            </p>
            <TextReveal
              text="The work style, described by people who have lived it."
              className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.98] text-white sm:text-6xl lg:text-7xl"
            />
          </SectionReveal>
          <SectionReveal delay={0.08}>
            <p className="max-w-2xl text-lg leading-8 text-white/62">
              Recommendations from teammates, managers, and collaborators who
              have seen the mix of leadership, clarity, and engineering depth
              up close.
            </p>
          </SectionReveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.42fr_0.58fr]">
          <SectionReveal className="grid gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.author}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3 text-left transition ${
                  index === activeIndex
                    ? "border-[#8ef0df]/40 bg-[#8ef0df]/10"
                    : "border-white/10 bg-white/[0.025] hover:border-white/20"
                }`}
                aria-pressed={index === activeIndex}
              >
                {item.image ? (
                  <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-white/10 bg-black/40">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </span>
                ) : (
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xs font-semibold uppercase text-white">
                    {getInitials(item.author)}
                  </span>
                )}
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-white">
                    {item.author}
                  </span>
                  <span className="mt-1 block truncate text-xs text-white/46">
                    {item.role}
                    {item.company ? `, ${item.company}` : ""}
                  </span>
                </span>
              </button>
            ))}
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <article className="min-h-full rounded-lg border border-white/10 bg-white/[0.035] p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-center gap-4">
                  {active.image ? (
                    <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-white/10 bg-black/40">
                      <Image
                        src={active.image}
                        alt={active.author}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </span>
                  ) : (
                    <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm font-semibold uppercase text-white">
                      {getInitials(active.author)}
                    </span>
                  )}
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {active.author}
                    </h3>
                    <p className="mt-1 text-sm text-white/54">
                      {active.role}
                      {active.company ? `, ${active.company}` : ""}
                    </p>
                  </div>
                </div>
                <p className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/42">
                  {activeIndex + 1}/{testimonials.length}
                </p>
              </div>

              {active.relationship ? (
                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-[#8ef0df]">
                  {active.relationship}
                </p>
              ) : null}

              <p className="mt-5 text-xl leading-9 text-white/76">
                &ldquo;{active.quote}&rdquo;
              </p>

              <div className="mt-8 flex gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((index) =>
                      index === 0 ? testimonials.length - 1 : index - 1,
                    )
                  }
                  className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/12 text-white/72 transition hover:border-[#8ef0df]/45 hover:text-[#8ef0df]"
                  aria-label="Previous testimonial"
                >
                  <span className="block h-3 w-3 rotate-45 border-b border-l border-current" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((index) =>
                      index === testimonials.length - 1 ? 0 : index + 1,
                    )
                  }
                  className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/12 text-white/72 transition hover:border-[#8ef0df]/45 hover:text-[#8ef0df]"
                  aria-label="Next testimonial"
                >
                  <span className="block h-3 w-3 rotate-45 border-r border-t border-current" />
                </button>
              </div>
            </article>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
