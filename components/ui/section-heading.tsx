type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  accent?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  accent,
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-4xl";

  return (
    <div className={alignment}>
      <div
        className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 backdrop-blur-md ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)]" />
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.32em] text-white/65">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
        {title}
        {accent ? <span className="text-gradient-warm"> {accent}</span> : null}
      </h2>
      <p className="mt-6 max-w-3xl text-pretty text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
        {description}
      </p>
    </div>
  );
}
