"use client";

import { useEffect } from "react";

import { prefersReducedMotion, registerScrollTrigger } from "@/lib/animations";

export function SmoothScroll() {
  useEffect(() => {
    let cleanup = () => {};

    const setup = async () => {
      const { default: Lenis } = await import("lenis");
      const { gsap, ScrollTrigger } = registerScrollTrigger();

      if (prefersReducedMotion()) {
        ScrollTrigger.refresh();
        return;
      }

      const lenis = new Lenis({
        duration: 1.08,
        easing: (time: number) => Math.min(1, 1.001 - Math.pow(2, -10 * time)),
        smoothWheel: true,
        syncTouch: false,
        touchMultiplier: 1.15,
      });

      lenis.on("scroll", ScrollTrigger.update);

      const update = (time: number) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(update);
      gsap.ticker.lagSmoothing(0);
      ScrollTrigger.refresh();

      cleanup = () => {
        gsap.ticker.remove(update);
        lenis.destroy();
      };
    };

    setup();

    return () => cleanup();
  }, []);

  return null;
}
