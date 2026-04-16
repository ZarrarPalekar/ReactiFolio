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
      ? Array.from({ length: Math.ceil(testimonials.length / itemsPerPage) }, (_, index) =>
          testimonials.slice(index * itemsPerPage, (index + 1) * itemsPerPage),
        )
      : [];
  const currentPage = Math.min(activePage, Math.max(pages.length - 1, 0));

  return (
    <section id="testimonials" className="border-b border-white/10 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="What teammates and clients say about working with me."
            description="This section is set up for LinkedIn recommendations so trust signals live directly on the site instead of staying buried on a profile page."
          />
        </Reveal>

        {testimonials.length > 0 ? (
          <div className="mt-14">
            <Reveal className="flex items-center justify-between gap-4">
              <p className="text-sm text-white/50">
                Showing {Math.min(currentPage * itemsPerPage + 1, testimonials.length)}-
                {Math.min((currentPage + 1) * itemsPerPage, testimonials.length)} of{" "}
                {testimonials.length} recommendations
              </p>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActivePage((page) => Math.max(page - 1, 0))}
                  disabled={currentPage === 0}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-lg text-white transition hover:border-red-500 hover:text-red-400 disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Previous testimonials"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => setActivePage((page) => Math.min(page + 1, pages.length - 1))}
                  disabled={currentPage === pages.length - 1}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-lg text-white transition hover:border-red-500 hover:text-red-400 disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Next testimonials"
                >
                  →
                </button>
              </div>
            </Reveal>

            <Reveal
              delay={0.06}
              className="mt-6 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-2"
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
                        className="flex h-full flex-col rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-7"
                      >
                        <div className="flex items-start gap-3">
                          {item.image ? (
                            <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/10 bg-black/40">
                              <Image
                                src={item.image}
                                alt={item.author}
                                fill
                                sizes="44px"
                                className="object-cover"
                              />
                            </div>
                          ) : (
                            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 text-sm font-semibold uppercase text-red-400">
                              {getInitials(item.author)}
                            </div>
                          )}

                          <div>
                            <p className="text-lg font-medium text-white">{item.author}</p>
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
                            className="mt-6 inline-flex w-fit items-center rounded-full border border-white/12 px-4 py-2 text-sm font-medium text-white transition hover:border-red-500 hover:text-red-400"
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
                      currentPage === pageIndex ? "w-10 bg-red-500" : "w-2.5 bg-white/20 hover:bg-white/35"
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
            className="mt-14 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 sm:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-red-500">
                  LinkedIn Recommendations
                </p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                  Ready to showcase your recommendations here.
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/66">
                  I could not automatically extract recommendation text from LinkedIn in this
                  environment, so the section is live with a clean fallback and is ready to be
                  populated as soon as the recommendation copy is available.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-black/30 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-white/38">Next Step</p>
                <p className="mt-4 text-base leading-7 text-white/68">
                  Share the recommendation text or a public export, and I can replace this CTA
                  state with fully designed testimonial cards immediately.
                </p>
                <Link
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-red-500 px-6 text-sm font-medium text-black transition hover:bg-red-400"
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
