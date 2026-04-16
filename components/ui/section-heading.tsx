type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <div className={alignment}>
      <p className="text-xs font-semibold uppercase tracking-[0.45em] text-red-500">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-white/64 sm:text-lg">{description}</p>
    </div>
  );
}
