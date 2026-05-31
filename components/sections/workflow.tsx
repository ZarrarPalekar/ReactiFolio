import { SectionReveal } from "@/components/animations/section-reveal";
import { TextReveal } from "@/components/animations/text-reveal";

const workflow = [
  {
    label: "AI-assisted development",
    title: "Faster exploration, still human-reviewed.",
    copy: "Augment Code, ChatGPT, Codex, and Claude Code support codebase exploration, debugging, refactoring, documentation, and test-case ideation.",
  },
  {
    label: "SEO and performance",
    title: "Search-aware builds without losing craft.",
    copy: "Metadata, semantic structure, accessibility, optimized imagery, and fast user paths are treated as engineering concerns, not launch-day chores.",
  },
  {
    label: "Product ownership",
    title: "Senior delivery across the whole path.",
    copy: "Requirements, estimation, architecture, implementation, QA coordination, reviews, and stakeholder updates stay connected through release.",
  },
];

export function WorkflowSection() {
  return (
    <section
      id="workflow"
      className="relative overflow-hidden border-b border-white/10 bg-[#050608] py-18 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-35 [background-image:linear-gradient(120deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:38px_38px]"
      />

      <div className="relative mx-auto w-full max-w-[92rem] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <SectionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#f8c85b]">
              Modern workflow
            </p>
            <TextReveal
              text="A delivery system for code, quality, and momentum."
              className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.98] text-white sm:text-6xl lg:text-7xl"
            />
          </SectionReveal>
          <SectionReveal delay={0.08}>
            <p className="max-w-2xl text-lg leading-8 text-white/62">
              The premium part is not only animation. It is the way the work is
              planned, reviewed, shipped, measured, and improved after release.
            </p>
          </SectionReveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {workflow.map((item, index) => (
            <SectionReveal key={item.label} delay={index * 0.07}>
              <article className="group h-full rounded-lg border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-white/22">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/36">
                    {item.label}
                  </p>
                  <span
                    className={`h-2 w-12 rounded-full ${
                      index === 0
                        ? "bg-[#8ef0df]"
                        : index === 1
                          ? "bg-[#f8c85b]"
                          : "bg-[#ff4d5f]"
                    }`}
                  />
                </div>
                <h3 className="mt-14 text-3xl font-semibold leading-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-white/62">
                  {item.copy}
                </p>
              </article>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="mt-12 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:grid-cols-4">
          {[
            ["01", "Discover", "Clarify goals and constraints"],
            ["02", "Design", "Shape system and delivery plan"],
            ["03", "Build", "Implement, review, and test"],
            ["04", "Improve", "Refine performance and release quality"],
          ].map(([step, title, copy]) => (
            <div key={step} className="bg-[#07080b] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8ef0df]">
                {step}
              </p>
              <p className="mt-8 text-2xl font-semibold text-white">{title}</p>
              <p className="mt-3 text-sm leading-6 text-white/56">{copy}</p>
            </div>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}
