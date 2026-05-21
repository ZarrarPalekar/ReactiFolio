"use client";

import Image from "next/image";
import Link from "next/link";

import { siteConfig, testimonials } from "@/data/portfolio";
import { Marquee } from "@/components/ui/marquee";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

function truncate(text: string, max = 280) {
  if (text.length <= max) return text;
  return `${text.slice(0, max).trimEnd()}…`;
}

type Card = (typeof testimonials)[number];

function TestimonialCard({ item }: { item: Card }) {
  return (
    <article className="mx-4 flex w-[22rem] shrink-0 flex-col gap-5 border border-white/10 bg-[#080404]/85 p-6 transition hover:border-white/25 sm:w-[26rem] sm:p-7">
      <p className="mono text-[0.65rem] uppercase tracking-[0.32em] text-[var(--accent-soft)]/85">
        “
      </p>
      <p className="text-sm leading-[1.7] text-white/70 sm:text-base">
        {truncate(item.quote)}
      </p>
      <div className="mt-auto flex items-center gap-3 border-t border-white/10 pt-5">
        {item.image ? (
          <span className="relative h-11 w-11 overflow-hidden rounded-full border border-white/10 bg-black/40">
            <Image
              src={item.image}
              alt={item.author}
              fill
              sizes="44px"
              className="object-cover"
            />
          </span>
        ) : (
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[var(--accent)]/15 text-sm font-semibold uppercase text-[var(--accent-soft)]">
            {getInitials(item.author)}
          </span>
        )}
        <div className="min-w-0">
          <p className="text-sm font-semibold text-white">{item.author}</p>
          <p className="truncate text-xs text-white/50">
            {item.role}
            {item.company ? ` · ${item.company}` : ""}
          </p>
        </div>
      </div>
    </article>
  );
}

export function TestimonialsSection() {
  const half = Math.ceil(testimonials.length / 2);
  const rowOne = testimonials.slice(0, half);
  const rowTwo = testimonials.slice(half);

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
      </div>

      {testimonials.length > 0 ? (
        <div className="mt-20 flex flex-col gap-6 overflow-hidden">
          <Marquee duration={70} pauseOnHover>
            {rowOne.map((item, index) => (
              <TestimonialCard key={`r1-${index}`} item={item} />
            ))}
          </Marquee>
          {rowTwo.length > 0 ? (
            <Marquee duration={80} reverse pauseOnHover>
              {rowTwo.map((item, index) => (
                <TestimonialCard key={`r2-${index}`} item={item} />
              ))}
            </Marquee>
          ) : null}
        </div>
      ) : (
        <div className="mx-auto mt-16 w-full max-w-[1480px] px-5 sm:px-10 lg:px-14">
          <Reveal className="border border-white/10 bg-[#080404]/85 p-8 sm:p-10">
            <p className="mono text-[0.65rem] uppercase tracking-[0.32em] text-[var(--accent-soft)]/85">
              LinkedIn Recommendations
            </p>
            <h3 className="display mt-4 text-3xl text-white sm:text-4xl">
              Ready to showcase recommendations here.
            </h3>
            <Link
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white/85"
            >
              Open LinkedIn ↗
            </Link>
          </Reveal>
        </div>
      )}
    </section>
  );
}
