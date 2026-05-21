import type { ReactNode } from "react";

type SectionHeadingProps = {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto max-w-5xl text-center" : "max-w-5xl";

  return (
    <div className={`${alignment} ${className}`}>
      <div
        className={`flex items-center gap-4 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        {index ? (
          <span className="mono text-[0.7rem] uppercase tracking-[0.4em] text-white/35">
            {index}
          </span>
        ) : null}
        <span className="h-px flex-1 max-w-16 bg-white/15" />
        <span className="mono text-[0.7rem] uppercase tracking-[0.4em] text-[var(--accent-soft)]/85">
          {eyebrow}
        </span>
      </div>
      <h2 className="display mt-8 text-5xl text-white sm:text-6xl lg:text-[5.5rem]">
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-6 text-base leading-[1.7] text-white/60 sm:text-lg ${
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
