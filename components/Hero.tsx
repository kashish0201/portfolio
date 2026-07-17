import { profile, stats } from "@/data/content";
import HealthPanel from "./HealthPanel";

export default function Hero() {
  return (
    <header className="py-16 md:py-20">
      <div className="mx-auto grid max-w-5xl gap-10 px-7 md:grid-cols-[1.05fr_0.95fr] md:items-center">
        <div>
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/8 px-3 py-1.5 font-mono text-[11px] tracking-wider text-accent-soft">
            <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_var(--color-accent)]" />
            {profile.status}
          </span>

          <h1 className="mb-5 font-display text-[2.6rem] font-extrabold leading-[0.98] tracking-[-0.035em] md:text-[4rem]">
            {profile.headline.before}
            <span className="text-accent">{profile.headline.accent}</span>
          </h1>

          <p className="mb-7 max-w-[44ch] text-[17px] text-ink-dim">
            {profile.lede} Previously{" "}
            <strong className="font-medium text-ink">JPMorgan Chase</strong>, now an MS at{" "}
            <strong className="font-medium text-ink">CSULB</strong>.
          </p>

          <div className="mb-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-xl bg-ink px-5 py-3 font-mono text-[13px] font-medium text-base transition-colors hover:bg-accent-soft"
            >
              View my work
            </a>
            <a
              href={profile.resumeUrl}
              className="rounded-xl border border-line px-5 py-3 font-mono text-[13px] text-ink-dim transition-colors hover:border-accent hover:text-ink"
            >
              Download resume
            </a>
          </div>

          <div className="flex gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-semibold tracking-tight text-accent-soft">
                  {s.value}
                  {s.unit && <span className="text-base">{s.unit}</span>}
                </div>
                <div className="font-mono text-[10.5px] tracking-wider text-ink-faint">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <HealthPanel />
      </div>
    </header>
  );
}
