import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let scrollTriggerRegistered = false;

export const premiumEase = "power3.out";
export const cinematicEase = "expo.out";

export function registerScrollTrigger() {
  if (typeof window !== "undefined" && !scrollTriggerRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    scrollTriggerRegistered = true;
  }

  return { gsap, ScrollTrigger };
}

export function prefersReducedMotion() {
  if (typeof window === "undefined") {
    return true;
  }

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
