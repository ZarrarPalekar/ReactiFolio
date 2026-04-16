import Image from "next/image";

import { skillCategories } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ExpertiseSection() {
  return (
    <section id="expertise" className="border-b border-white/10 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Expertise"
            title="A focused stack for building modern, scalable, user-first products."
            description="The toolkit here reflects how I actually ship: frontend systems first, backend fluency when needed, and delivery habits that keep teams fast."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Reveal
              key={category.title}
              delay={index * 0.08}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-red-500">{category.title}</p>
              <p className="mt-4 text-base leading-7 text-white/62">{category.description}</p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 rounded-2xl border border-white/8 bg-black/40 px-4 py-3"
                  >
                    <div className="relative h-9 w-9 shrink-0">
                      <Image src={skill.icon} alt={skill.name} fill sizes="36px" className="object-contain" />
                    </div>
                    <span className="text-sm text-white/78">{skill.name}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
