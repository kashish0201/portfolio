import { credentials, profiles } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Credentials() {
  return (
    <>
      <section id="credentials" className="border-t border-line py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-7">
          <Reveal>
            <SectionHeader
              eyebrow={credentials.eyebrow}
              title={credentials.title}
              subtitle={credentials.subtitle}
            />
          </Reveal>

          <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="h-full rounded-2xl border border-line bg-gradient-to-br from-surface-2/70 to-surface/70 p-6">
                <h3 className="mb-4 font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-faint">
                  Certification
                </h3>
                {credentials.certifications.map((c) => (
                  <div key={c.name}>
                    <p className="font-display text-[17px] font-semibold leading-snug tracking-tight">
                      {c.name}
                    </p>
                    <p className="mb-2 mt-1 font-mono text-[11.5px] text-accent-soft">
                      {c.issuer}
                    </p>
                    <p className="text-[13.5px] leading-relaxed text-ink-dim">{c.note}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <div className="h-full rounded-2xl border border-line bg-gradient-to-br from-surface-2/70 to-surface/70 p-6">
                <h3 className="mb-4 font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-faint">
                  Hackathons
                </h3>
                <ul className="divide-y divide-line">
                  {credentials.hackathons.map((h) => (
                    <li
                      key={h.name + h.year}
                      className="flex items-baseline justify-between gap-4 py-3 first:pt-0 last:pb-0"
                    >
                      <div>
                        <p className="text-[15px] text-ink">{h.name}</p>
                        <p className="text-[13px] text-ink-faint">{h.org}</p>
                      </div>
                      <span className="font-mono text-[11px] text-accent-soft">
                        {h.year}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="profiles" className="border-t border-line py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-7">
          <Reveal>
            <SectionHeader
              eyebrow={profiles.eyebrow}
              title={profiles.title}
              subtitle={profiles.subtitle}
            />
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {profiles.cards.map((c) => (
              <Reveal key={c.platform}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col rounded-2xl border border-line bg-gradient-to-br from-surface-2/70 to-surface/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
                >
                  <div className="mb-1 flex items-baseline justify-between">
                    <h3 className="font-display text-lg font-semibold tracking-tight">
                      {c.platform}
                    </h3>
                    <span className="font-mono text-[11px] text-accent">Visit ↗</span>
                  </div>
                  <p className="mb-3 font-mono text-[12px] text-accent-soft">{c.handle}</p>
                  <p className="mb-5 text-[13.5px] leading-relaxed text-ink-dim">
                    {c.note}
                  </p>

                  <div className="mt-auto flex gap-8 border-t border-line pt-4">
                    {c.stats.map((s) => (
                      <div key={s.l}>
                        <p className="font-display text-lg font-semibold tracking-tight text-ink">
                          {s.v}
                        </p>
                        <p className="font-mono text-[10.5px] uppercase tracking-wider text-ink-faint">
                          {s.l}
                        </p>
                      </div>
                    ))}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
