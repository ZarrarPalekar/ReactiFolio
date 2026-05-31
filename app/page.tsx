import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { ExperienceSection } from "@/components/sections/experience";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { WorkflowSection } from "@/components/sections/workflow";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <WorkflowSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
