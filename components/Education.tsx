import { education } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Education() {
  return (
    <section id="education" className="border-t border-line py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-7">
        <Reveal>
          <SectionHeader
            eyebrow={education.eyebrow}
            title={education.title}
            subtitle={education.subtitle}
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {education.entries.map((e) => (
            <Reveal key={e.degree}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-gradient-to-br from-surface-2/70 to-surface/70 p-6">
                <p className="mb-3 font-mono text-[10.5px] uppercase tracking-wider text-ink-faint">
                  {e.status}
                </p>
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {e.degree}
                </h3>
                <p className="mb-2 text-[14px] text-ink-dim">{e.org}</p>
                <p className="mb-5 font-mono text-[12px] text-accent-soft">{e.score}</p>

                <h4 className="mb-2 font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-faint">
                  Relevant coursework
                </h4>
                <div className="mb-5 flex flex-wrap gap-1.5">
                  {e.coursework.map((c) => (
                    <span
                      key={c}
                      className="rounded-md border border-line bg-base/40 px-2.5 py-1 font-mono text-[10.5px] text-ink-dim"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                <h4 className="mb-2 font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-faint">
                  Highlights
                </h4>
                <ul className="space-y-1.5">
                  {e.highlights.map((h) => (
                    <li
                      key={h}
                      className="relative pl-4 text-[13.5px] leading-relaxed text-ink-dim before:absolute before:left-0 before:top-[9px] before:h-1 before:w-1 before:rounded-full before:bg-accent"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
