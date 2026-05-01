import dynamic from "next/dynamic";

import { AboutSection } from "@/components/home/about-section";
import { ContactCta } from "@/components/home/contact-cta";
import { ExperienceSection } from "@/components/home/experience-section";
import { ExpertiseSection } from "@/components/home/expertise-section";
import { Hero } from "@/components/home/hero";
import { TestimonialsSection } from "@/components/home/testimonials-section";

const ProjectsShowcase = dynamic(() => import("@/components/home/projects-showcase"), {
  loading: () => (
    <section id="projects" className="border-b border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="h-72 animate-pulse rounded-lg border border-white/10 bg-white/[0.03]" />
      </div>
    </section>
  ),
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ExpertiseSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ProjectsShowcase />
      <ContactCta />
    </>
  );
}
