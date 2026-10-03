import Image from "next/image";
import Link from "next/link";

import { CalendlyButton } from "@/components/ui/calendly-button";
import { siteConfig } from "@/data/portfolio";
import { getExperienceYears } from "@/lib/date";

const primaryBtn =
  "inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-7 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-[0_24px_60px_-20px_rgba(255,58,69,0.7)] transition hover:bg-[#ff525d]";
const secondaryBtn =
  "inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.03] px-7 text-sm font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur transition hover:border-white/55 hover:bg-white/[0.08]";

export function Hero() {
  const years = getExperienceYears("2017-03-01");

  const proof = [
    [years, "years shipping"],
    ["9 + 3", "devs & QA led"],
    ["CSM", "certified"],
  ];

  return (
    <section className="relative isolate overflow-hidden">
      {/* portrait — fades into the page, behind the copy */}
      <div
        aria-hidden
        className="rise pointer-events-none absolute right-0 top-[14svh] -z-[1] h-[46svh] w-[68vw] max-w-[280px] opacity-55 sm:max-w-[340px] md:right-[5vw] md:max-w-[400px] lg:inset-y-0 lg:h-auto lg:right-[6vw] lg:w-[40vw] lg:max-w-[560px] lg:opacity-90"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, #000 40%), linear-gradient(to left, transparent, #000 14%), linear-gradient(to bottom, transparent, #000 16%), linear-gradient(to top, transparent 2%, #000 18%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 40%), linear-gradient(to left, transparent, #000 14%), linear-gradient(to bottom, transparent, #000 16%), linear-gradient(to top, transparent 2%, #000 18%)",
          maskComposite: "intersect, intersect, intersect",
          WebkitMaskComposite: "source-in, source-in, source-in",
        }}
      >
        <Image
          src="/images/profile/hero.webp"
          alt=""
          fill
          priority
          sizes="(max-width: 1024px) 70vw, 40vw"
          className="object-cover object-top lg:object-[60%_22%]"
        />
      </div>

      <div className="mx-auto flex min-h-[100svh] w-full max-w-[1480px] flex-col justify-center px-5 pb-16 pt-32 sm:px-10 lg:px-14">
        <p className="mono text-[0.72rem] uppercase tracking-[0.32em] text-white/60">
          {siteConfig.location} · Remote-friendly
        </p>

        <h1 className="display mt-6 text-[clamp(3.25rem,10vw,9rem)] text-white">
          Zarrar
          <br />
          <span className="text-gradient-red">
            <span className="serif font-normal">Palekar</span>
          </span>
          <span className="text-[var(--accent)]">.</span>
        </h1>

        <p className="mt-8 max-w-xl text-xl leading-[1.5] text-white/85 sm:text-2xl">
          Senior full-stack engineer &amp; team lead. I build React, Node.js,
          PostgreSQL and .NET products, and lead the remote team that ships
          them.
        </p>

        <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
          {proof.map(([value, label]) => (
            <div key={label} className="flex items-baseline gap-3">
              <dt className="display text-3xl text-white tabular sm:text-4xl">
                {value}
              </dt>
              <dd className="mono text-[0.7rem] uppercase tracking-[0.24em] text-white/60">
                {label}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href={`mailto:${siteConfig.email}`} className={primaryBtn}>
            Email me
          </Link>
          <Link
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className={secondaryBtn}
          >
            WhatsApp
          </Link>
          <CalendlyButton className={secondaryBtn}>Book a call</CalendlyButton>
        </div>

        <p className="mt-5 text-sm text-white/60">
          {siteConfig.email}
          <span className="mx-3 text-white/25">/</span>
          {siteConfig.phone}
        </p>

        <nav
          aria-label="Profiles"
          className="mono mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[0.72rem] uppercase tracking-[0.24em] text-white/60"
        >
          {[
            ["LinkedIn", siteConfig.linkedinUrl],
            ["GitHub", siteConfig.githubUrl],
            ["Resume", siteConfig.resumeUrl],
            ["Projects", "/#projects"],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              {...(href.startsWith("http")
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
              className="transition hover:text-white"
            >
              {label} {href.startsWith("http") ? "↗" : "↓"}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
