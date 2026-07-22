import { about } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="border-t border-line py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-7">
        <Reveal>
          <SectionHeader
            eyebrow={about.eyebrow}
            title={about.title}
            subtitle={about.subtitle}
          />
        </Reveal>

        <Reveal>
          <div>
            <p className="mb-7 max-w-[60ch] text-[16.5px] leading-relaxed text-ink-dim">
              {about.intro}
            </p>

            <div className="grid gap-5 sm:grid-cols-2">
              {about.blocks.map((b) => (
                <div
                  key={b.h}
                  className="rounded-2xl border border-line bg-gradient-to-br from-surface-2/70 to-surface/70 p-5"
                >
                  <h3 className="mb-2 font-mono text-[11px] uppercase tracking-[0.1em] text-accent">
                    {b.h}
                  </h3>
                  <p className="text-[14.5px] leading-relaxed text-ink-dim">{b.p}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
