import Link from "next/link";
import Script from "next/script";

import { CalendlyButton } from "@/components/ui/calendly-button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/portfolio";

type ServiceLandingProps = {
  eyebrow: string;
  title: string;
  description: string;
  locationLine: string;
  primaryKeyword: string;
  supportingPoints: string[];
  slug: string;
};

export function ServiceLanding({
  eyebrow,
  title,
  description,
  locationLine,
  primaryKeyword,
  supportingPoints,
  slug,
}: ServiceLandingProps) {
  const pageUrl = `${siteConfig.siteUrl}/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: title,
        url: pageUrl,
        description,
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: title,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Person",
        name: siteConfig.name,
        url: siteConfig.siteUrl,
        jobTitle: siteConfig.title,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mumbai",
          addressCountry: "IN",
        },
        knowsAbout: [
          primaryKeyword,
          "React development",
          "Node.js development",
          "Full stack web development",
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id={`${slug}-jsonld`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-white/10 py-18 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-cyan-100/80">
                {eyebrow}
              </p>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] text-white sm:text-6xl lg:text-7xl">
                {title}
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/68 sm:text-xl">
                {description}
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/56">
                {locationLine}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <CalendlyButton className="inline-flex min-h-12 items-center justify-center rounded-full bg-cyan-300 px-7 text-sm font-semibold !text-slate-950 shadow-[0_0_28px_rgba(41,211,208,0.16)] transition hover:bg-[#29d3d0] hover:!text-slate-950">
                  Book a consultation
                </CalendlyButton>
                <Link
                  href="/projects"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 px-7 text-sm font-semibold text-white transition hover:border-cyan-200/50 hover:text-cyan-100"
                >
                  Explore project archive
                </Link>
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/[0.045] p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-white/36">
                What you can expect
              </p>
              <div className="mt-6 space-y-4">
                {supportingPoints.map((point) => (
                  <div
                    key={point}
                    className="border-l border-cyan-200/30 bg-black/30 p-5 text-base leading-7 text-white/66"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
