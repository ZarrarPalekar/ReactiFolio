import Link from "next/link";

import { MagneticButton } from "@/components/animations/magnetic-button";
import { CalendlyButton } from "@/components/ui/calendly-button";
import { SocialIcon } from "@/components/ui/social-icon";
import { navigation, siteConfig, socialLinks } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050608]">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8ef0df]/60 to-transparent"
      />
      <div className="mx-auto w-full max-w-[92rem] px-5 py-10 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#8ef0df]">
              {siteConfig.location}
            </p>
            <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.95] text-white sm:text-7xl lg:text-8xl">
              {siteConfig.name}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/58 sm:text-lg">
              Senior full-stack engineering, team leadership, AI-assisted
              delivery, and product ownership for teams that need calm velocity.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/36">
                Navigate
              </p>
              <div className="mt-4 grid gap-2">
                {navigation.slice(1).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="w-fit text-sm text-white/58 transition hover:text-[#8ef0df]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/36">
                Social
              </p>
              <div className="mt-4 grid gap-2">
                {socialLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-fit items-center gap-2 text-sm text-white/58 transition hover:text-[#8ef0df]"
                  >
                    <SocialIcon name={link.label} className="size-5 shrink-0" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/42">
            <Link href="/full-stack-developer-india" className="transition hover:text-white">
              Full Stack Developer in India
            </Link>
            <Link href="/react-developer-mumbai" className="transition hover:text-white">
              React Developer in Mumbai
            </Link>
          </div>

          <MagneticButton>
            <CalendlyButton className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-6 text-sm font-semibold text-white transition hover:border-[#8ef0df]/45 hover:text-[#8ef0df]">
              Book a conversation
            </CalendlyButton>
          </MagneticButton>
        </div>
      </div>
    </footer>
  );
}
