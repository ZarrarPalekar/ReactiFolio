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
    align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-4xl";

  return (
    <div className={alignment}>
      <p className="text-xs font-semibold uppercase tracking-[0.38em] text-red-300/85">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-4xl font-semibold leading-[1.02] text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="mt-5 max-w-3xl text-base leading-7 text-white/64 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
