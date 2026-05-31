"use client";

import type { ElementType } from "react";
import { useEffect, useRef } from "react";

import {
  cinematicEase,
  prefersReducedMotion,
  registerScrollTrigger,
} from "@/lib/animations";

type TextRevealProps = {
  as?: ElementType;
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
};

export function TextReveal({
  as: Tag = "h2",
  text,
  className = "",
  delay = 0,
  once = true,
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const { gsap } = registerScrollTrigger();
    const targets = element.querySelectorAll("[data-reveal-word]");

    if (prefersReducedMotion()) {
      gsap.set(targets, { yPercent: 0, autoAlpha: 1, rotate: 0 });
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        targets,
        {
          yPercent: 115,
          autoAlpha: 0,
          rotate: 3,
        },
        {
          yPercent: 0,
          autoAlpha: 1,
          rotate: 0,
          duration: 1.05,
          delay,
          ease: cinematicEase,
          stagger: 0.035,
          scrollTrigger: {
            trigger: element,
            start: "top 86%",
            once,
          },
        },
      );
    }, element);

    return () => context.revert();
  }, [delay, once]);

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          aria-hidden="true"
          className="inline-block overflow-hidden align-bottom"
        >
          <span data-reveal-word className="inline-block will-change-transform">
            {word}
            {index < words.length - 1 ? "\u00a0" : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
