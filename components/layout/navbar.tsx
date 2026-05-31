"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { MagneticButton } from "@/components/animations/magnetic-button";
import { CalendlyButton } from "@/components/ui/calendly-button";
import { SocialIcon } from "@/components/ui/social-icon";
import { navigation, siteConfig } from "@/data/portfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 18);

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-500 ${
        scrolled || open
          ? "border-b border-white/10 bg-[#050608]/86 shadow-[0_18px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl"
          : "border-b border-transparent bg-[#050608]/35 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex min-h-20 w-full max-w-[92rem] items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label={`${siteConfig.name} home`}
        >
          <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/12 bg-white/[0.06] transition group-hover:border-[#8ef0df]/50">
            <Image
              src="/images/profile/ZP-logo.svg"
              alt=""
              fill
              sizes="44px"
              priority
              className="object-contain p-1"
            />
          </span>
          <span className="hidden leading-none sm:block">
            <span className="block text-sm font-semibold uppercase tracking-[0.26em] text-white">
              Zarrar
            </span>
            <span className="mt-1 block text-[0.62rem] uppercase tracking-[0.26em] text-white/44">
              Full-stack lead
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1.5 lg:flex"
        >
          {navigation.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm text-white/62 transition hover:bg-white/[0.06] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8ef0df]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#8ef0df]/25 bg-[#8ef0df]/10 px-3 py-2 text-xs font-medium uppercase tracking-[0.22em] text-[#b9fff3]">
            <span className="h-2 w-2 rounded-full bg-[#8ef0df] shadow-[0_0_18px_rgba(142,240,223,0.5)]" />
            Available
          </span>
          <MagneticButton>
            <CalendlyButton className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-[#050608] transition hover:bg-[#8ef0df] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8ef0df]">
              <SocialIcon name="Calendly" className="size-5 shrink-0" />
              Strategy call
            </CalendlyButton>
          </MagneticButton>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-white transition hover:border-[#8ef0df]/45 lg:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="grid gap-1.5">
            <span
              className={`block h-px w-5 bg-current transition ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-current transition ${
                open ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[#050608]/96 backdrop-blur-2xl lg:hidden">
          <nav className="mx-auto flex w-full max-w-[92rem] flex-col px-5 py-4 sm:px-8">
            {navigation.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/8 py-4 text-base text-white/72 transition last:border-b-0 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <CalendlyButton
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-[#050608] transition hover:bg-[#8ef0df]"
            >
              <SocialIcon name="Calendly" className="size-5 shrink-0" />
              Strategy call
            </CalendlyButton>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
