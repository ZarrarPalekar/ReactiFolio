"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { siteConfig, testimonials } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
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

function getItemsPerPage(width: number) {
  if (width >= 1280) return 3;
  if (width >= 768) return 2;
  return 1;
}

export function TestimonialsSection() {
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(getItemsPerPage(window.innerWidth));
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const pages =
    testimonials.length > 0
      ? Array.from(
          { length: Math.ceil(testimonials.length / itemsPerPage) },
          (_, index) =>
            testimonials.slice(
              index * itemsPerPage,
              (index + 1) * itemsPerPage,
            ),
        )
      : [];
  const currentPage = Math.min(activePage, Math.max(pages.length - 1, 0));
  const rangeStart = Math.min(currentPage * itemsPerPage + 1, testimonials.length);
  const rangeEnd = Math.min((currentPage + 1) * itemsPerPage, testimonials.length);

  return (
    <section
      id="testimonials"
      className="border-b border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)] py-18 sm:py-24"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="The work style, described by people who have lived it."
            description="Recommendations from teammates, managers, and collaborators who have seen the mix of leadership, clarity, and engineering depth up close."
          />
        </Reveal>

        {testimonials.length > 0 ? (
          <div className="mt-14">
            <Reveal className="flex items-center justify-between gap-4">
              <p className="text-sm text-white/50">
                <span className="sm:hidden">
                  Recommendation {currentPage + 1} of {pages.length}
                </span>
                <span className="hidden sm:inline">
                  Showing {rangeStart}-{rangeEnd} of {testimonials.length} recommendations
                </span>
              </p>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActivePage((page) => Math.max(page - 1, 0))}
                  disabled={currentPage === 0}
                  className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/12 bg-white/5 text-white transition hover:border-cyan-200/50 hover:text-cyan-100 disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Previous testimonials"
                >
                  <span className="block h-3 w-3 rotate-45 border-b border-l border-current" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActivePage((page) =>
                      Math.min(page + 1, pages.length - 1),
                    )
                  }
                  disabled={currentPage === pages.length - 1}
                  className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/12 bg-white/5 text-white transition hover:border-cyan-200/50 hover:text-cyan-100 disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Next testimonials"
                >
                  <span className="block h-3 w-3 rotate-45 border-r border-t border-current" />
                </button>
              </div>
            </Reveal>

            <Reveal
              delay={0.06}
              className="mt-6 overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-2"
            >
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentPage * 100}%)` }}
              >
                {pages.map((page, pageIndex) => (
                  <div
                    key={`page-${pageIndex}`}
                    className="grid min-w-full gap-4 p-2 md:grid-cols-2 xl:grid-cols-3"
                  >
                    {page.map((item, itemIndex) => (
                      <article
                        key={`${item.author}-${pageIndex}-${itemIndex}`}
                        className="flex h-full flex-col rounded-lg border border-white/10 bg-black/30 p-6"
                      >
                        <div className="flex items-start gap-3">
                          {item.image ? (
                            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10 bg-black/40">
                              <Image
                                src={item.image}
                                alt={item.author}
                                fill
                                sizes="44px"
                                className="object-cover"
                              />
                            </div>
                          ) : (
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-cyan-200/10 text-sm font-semibold uppercase text-cyan-100">
                              {getInitials(item.author)}
                            </div>
                          )}

                          <div>
                            <p className="text-lg font-semibold text-white">
                              {item.author}
                            </p>
                            <p className="text-sm text-white/56">
                              {item.role}
                              {item.company ? `, ${item.company}` : ""}
                            </p>
                            {item.relationship ? (
                              <p className="mt-1 text-xs font-medium text-white/38">
                                {item.relationship}
                              </p>
                            ) : null}
                          </div>
                        </div>

                        <p className="mt-6 flex-1 text-base leading-8 text-white/72">
                          &ldquo;{item.quote}&rdquo;
                        </p>

                        {item.linkedinUrl ? (
                          <Link
                            href={item.linkedinUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-6 inline-flex w-fit items-center rounded-full border border-white/12 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-200/50 hover:text-cyan-100"
                          >
                            View on LinkedIn
                          </Link>
                        ) : null}
                      </article>
                    ))}
                  </div>
                ))}
              </div>
            </Reveal>

            {pages.length > 1 ? (
              <Reveal delay={0.08} className="mt-6 flex justify-center gap-2">
                {pages.map((_, pageIndex) => (
                  <button
                    key={`dot-${pageIndex}`}
                    type="button"
                    onClick={() => setActivePage(pageIndex)}
                    className={`h-2.5 rounded-full transition ${
                      currentPage === pageIndex
                        ? "w-10 bg-cyan-200"
                        : "w-2.5 bg-white/20 hover:bg-white/35"
                    }`}
                    aria-label={`Go to testimonial page ${pageIndex + 1}`}
                  />
                ))}
              </Reveal>
            ) : null}
          </div>
        ) : (
          <Reveal
            delay={0.06}
            className="mt-14 rounded-lg border border-white/10 bg-white/[0.04] p-8 sm:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-cyan-100/80">
                  LinkedIn Recommendations
                </p>
                <h3 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Ready to showcase your recommendations here.
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/66">
                  I could not automatically extract recommendation text from
                  LinkedIn in this environment, so the section is live with a
                  clean fallback and is ready to be populated as soon as the
                  recommendation copy is available.
                </p>
              </div>

              <div className="rounded-lg border border-white/10 bg-black/30 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-white/38">
                  Next Step
                </p>
                <p className="mt-4 text-base leading-7 text-white/68">
                  Share the recommendation text or a public export, and I can
                  replace this CTA state with fully designed testimonial cards
                  immediately.
                </p>
                <Link
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:bg-cyan-100"
                >
                  Open LinkedIn Profile
                </Link>
              </div>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
