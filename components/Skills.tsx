import { skills } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-7">
        <Reveal>
          <SectionHeader
            eyebrow={skills.eyebrow}
            title={skills.title}
            subtitle={skills.subtitle}
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.groups.map((g) => (
            <Reveal key={g.name}>
              <div className="h-full rounded-2xl border border-line bg-gradient-to-br from-surface-2/70 to-surface/70 p-5 transition-colors duration-300 hover:border-accent/40">
                <h3 className="font-display text-[17px] font-semibold tracking-tight">
                  {g.name}
                </h3>
                <p className="mb-4 mt-1 text-[13px] text-ink-faint">{g.note}</p>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((i) => (
                    <span
                      key={i}
                      className="rounded-md border border-accent/25 bg-accent/[0.08] px-2.5 py-1 font-mono text-[10.5px] text-accent-soft"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
