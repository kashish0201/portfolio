import { profile, stats } from "@/data/content";

export default function Hero() {
  return (
    <header className="py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-7">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/[0.08] px-3.5 py-1.5 font-mono text-[11px] tracking-wider text-accent-soft">
          <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_var(--color-accent)]" />
          {profile.status}
        </span>

        <h1 className="mb-5 font-display text-[2.3rem] font-extrabold leading-[1.03] tracking-[-0.035em] md:text-[3.4rem]">
          {profile.headline.map((seg, i) => (
            <span key={i} className={seg.accent ? "text-accent" : "text-ink"}>
              {seg.text}
            </span>
          ))}
        </h1>

        <p className="mb-1.5 font-display text-[17px] font-semibold tracking-tight text-ink">
          {profile.name} — {profile.role}
        </p>

        <p className="mb-8 max-w-[50ch] text-[16px] leading-relaxed text-ink-dim">
          {profile.lede}
        </p>

        <div className="mb-10 flex flex-wrap gap-3">
          <a
            href="#work"
            className="rounded-xl bg-accent px-5 py-3 font-mono text-[13px] font-medium text-base transition-colors hover:bg-accent-soft"
          >
            View my work
          </a>
          <a
            href={profile.resumeUrl}
            className="rounded-xl border border-line-strong px-5 py-3 font-mono text-[13px] text-ink-dim transition-colors hover:border-accent hover:text-ink"
          >
            Download resume
          </a>
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-5">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-[28px] font-semibold tracking-tight text-accent-soft">
                {s.value}
                {s.unit && <span className="text-lg">{s.unit}</span>}
              </div>
              <div className="mt-0.5 font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-faint">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
