// Every section opens the same way: small eyebrow, big title, one-line subtitle.
// That repetition is what makes a long page feel deliberate instead of assembled.

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-10 ${center ? "text-center" : ""}`}>
      <p className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
        {eyebrow}
      </p>
      <h2 className="mb-3 font-display text-3xl font-extrabold leading-[1.05] tracking-[-0.03em] md:text-[2.5rem]">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-[60ch] text-[15.5px] text-ink-dim ${
            center ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
