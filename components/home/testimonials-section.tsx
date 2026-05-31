"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useState } from "react";

import { testimonials } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

type Card = (typeof testimonials)[number];

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

function Avatar({
  item,
  size = "sm",
  dimmed = false,
}: {
  item: Card;
  size?: "sm" | "lg";
  dimmed?: boolean;
}) {
  const dim = size === "lg" ? "h-12 w-12 text-sm" : "h-10 w-10 text-xs";
  const tone = dimmed
    ? "grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0"
    : "";

  if (item.image) {
    return (
      <span
        className={`relative shrink-0 overflow-hidden rounded-full border border-white/10 bg-black/40 transition ${dim} ${tone}`}
      >
        <Image
          src={item.image}
          alt={item.author}
          fill
          sizes="48px"
          className="object-cover"
        />
      </span>
    );
  }

  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full border border-white/10 bg-[var(--accent)]/15 font-semibold uppercase text-[var(--accent-soft)] transition ${dim} ${tone}`}
    >
      {getInitials(item.author)}
    </span>
  );
}

export function TestimonialsSection() {
  const prefersReducedMotion = useReducedMotion();
  const count = testimonials.length;
  const [active, setActive] = useState(0);

  const go = useCallback(
    (next: number) => setActive((next + count) % count),
    [count],
  );

  if (count === 0) return null;

  const current = testimonials[active];

  return (
    <section
      id="testimonials"
      className="relative border-t border-white/10 py-32 sm:py-40"
    >
      <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-10 lg:px-14">
        <Reveal>
          <SectionHeading
            index="05"
            eyebrow="Testimonials"
            title={
              <>
                <span className="block">Work style,</span>
                <span className="block text-gradient-red">
                  in <span className="serif font-normal">their words.</span>
                </span>
              </>
            }
            description="Recommendations from teammates, managers, and collaborators who have seen the mix of leadership, clarity, and engineering depth up close."
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-16 sm:mt-20">
          <div className="grid gap-8 lg:grid-cols-[1.55fr_1fr] lg:items-start lg:gap-14">
            {/* Featured quote */}
            <figure className="relative overflow-hidden border border-white/10 bg-[#080404]/85 p-8 sm:p-12 lg:p-14">
              <span
                aria-hidden
                className="serif pointer-events-none absolute left-6 top-4 select-none text-[9rem] leading-none text-[var(--accent)]/12 sm:left-10"
              >
                &ldquo;
              </span>
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/60 to-transparent"
              />

              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={active}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10"
                >
                  {current.relationship ? (
                    <span className="mono mb-6 inline-flex w-fit items-center border border-white/10 px-3 py-1 text-[0.6rem] uppercase tracking-[0.28em] text-[var(--accent-soft)]/85">
                      {current.relationship}
                    </span>
                  ) : null}

                  <p className="text-lg leading-[1.65] text-white/80 sm:text-xl lg:text-[1.4rem] lg:leading-[1.62]">
                    {current.quote}
                  </p>

                  <figcaption className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                    <Avatar item={current} size="lg" />
                    <div className="min-w-0">
                      <p className="text-base font-semibold text-white">
                        {current.author}
                      </p>
                      <p className="truncate text-sm text-white/50">
                        {current.role}
                        {current.company ? ` · ${current.company}` : ""}
                      </p>
                    </div>
                  </figcaption>
                </motion.blockquote>
              </AnimatePresence>
            </figure>

            {/* Author navigator */}
            <div className="flex flex-col">
              <ul className="flex flex-col border-t border-white/10">
                {testimonials.map((item, index) => {
                  const isActive = index === active;
                  return (
                    <li key={item.author}>
                      <button
                        type="button"
                        onClick={() => go(index)}
                        aria-current={isActive}
                        className={`group flex w-full items-center gap-4 border-b border-l-2 border-b-white/10 py-4 pl-5 pr-3 text-left transition ${
                          isActive
                            ? "border-l-[var(--accent)] bg-white/[0.04]"
                            : "border-l-transparent hover:bg-white/[0.02]"
                        }`}
                      >
                        <Avatar item={item} dimmed={!isActive} />
                        <span className="min-w-0 flex-1">
                          <span
                            className={`block truncate text-sm font-semibold transition ${
                              isActive
                                ? "text-white"
                                : "text-white/55 group-hover:text-white/80"
                            }`}
                          >
                            {item.author}
                          </span>
                          <span className="block truncate text-xs text-white/40">
                            {item.role}
                            {item.company ? ` · ${item.company}` : ""}
                          </span>
                        </span>
                        <span
                          className={`mono text-[0.6rem] tracking-[0.2em] transition ${
                            isActive
                              ? "text-[var(--accent-soft)]"
                              : "text-white/25"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* Controls */}
              <div className="mt-8 flex items-center justify-between">
                <span className="mono tabular text-[0.7rem] tracking-[0.32em] text-white/40">
                  <span className="text-white">
                    {String(active + 1).padStart(2, "0")}
                  </span>{" "}
                  / {String(count).padStart(2, "0")}
                </span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => go(active - 1)}
                    aria-label="Previous testimonial"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/70 transition hover:border-white/40 hover:bg-white/[0.07] hover:text-white"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M19 12H5M11 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => go(active + 1)}
                    aria-label="Next testimonial"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/70 transition hover:border-white/40 hover:bg-white/[0.07] hover:text-white"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
