"use client";

import { useEffect, useState } from "react";

import {
  prefersReducedMotion,
  premiumEase,
  registerScrollTrigger,
} from "@/lib/animations";

export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const { gsap } = registerScrollTrigger();

    if (prefersReducedMotion()) {
      const timeout = window.setTimeout(() => setVisible(false), 260);
      return () => window.clearTimeout(timeout);
    }

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: premiumEase },
        onComplete: () => setVisible(false),
      });

      timeline
        .fromTo(
          "[data-loader-word]",
          { yPercent: 120, autoAlpha: 0 },
          {
            yPercent: 0,
            autoAlpha: 1,
            duration: 0.78,
            stagger: 0.04,
          },
        )
        .fromTo(
          "[data-loader-line]",
          { scaleX: 0 },
          { scaleX: 1, duration: 0.82, transformOrigin: "left" },
          "-=0.42",
        )
        .to("[data-loader]", {
          yPercent: -100,
          duration: 0.86,
          ease: "power4.inOut",
          delay: 0.24,
        });
    });

    return () => context.revert();
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      data-loader
      className="fixed inset-0 z-[120] grid place-items-center overflow-hidden bg-[#040506] text-white"
      aria-label="Loading portfolio"
      role="status"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:54px_54px]"
      />
      <div className="relative w-[min(86vw,760px)]">
        <p className="overflow-hidden text-xs font-semibold uppercase tracking-[0.42em] text-[#8ef0df]">
          <span data-loader-word className="inline-block">
            Senior software developer
          </span>
        </p>
        <div className="mt-5 overflow-hidden">
          <h2 className="flex flex-wrap gap-x-4 text-5xl font-semibold leading-[0.92] sm:text-7xl lg:text-8xl">
            {["Zarrar", "Palekar"].map((word) => (
              <span key={word} className="overflow-hidden">
                <span data-loader-word className="inline-block">
                  {word}
                </span>
              </span>
            ))}
          </h2>
        </div>
        <div className="mt-8 h-px overflow-hidden bg-white/12">
          <span
            data-loader-line
            className="block h-full origin-left bg-gradient-to-r from-[#ff4d5f] via-[#f8c85b] to-[#8ef0df]"
          />
        </div>
      </div>
    </div>
  );
}
