import { experience } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-7">
        <Reveal>
          <SectionHeader
            eyebrow={experience.eyebrow}
            title={experience.title}
            subtitle={experience.subtitle}
          />
        </Reveal>

        {experience.jobs.map((job) => (
          <Reveal key={job.role + job.org}>
            <div className="rounded-2xl border border-line bg-gradient-to-br from-surface-2/70 to-surface/70 p-6 md:p-8">
              <span className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/[0.09] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent-soft">
                {job.badge}
              </span>

              <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
                    {job.role}
                  </h3>
                  <p className="text-[15px] text-accent-soft">{job.org}</p>
                </div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                  {job.meta}
                </p>
              </div>

              <p className="mb-5 max-w-[70ch] text-[15px] leading-relaxed text-ink-dim">
                {job.summary}
              </p>

              <div className="mb-6 flex flex-wrap gap-1.5">
                {job.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-line bg-base/40 px-2.5 py-1 font-mono text-[10.5px] text-ink-dim"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h4 className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-faint">
                What I did
              </h4>
              <ul className="space-y-2.5 border-l border-line pl-5">
                {job.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="relative text-[14.5px] leading-relaxed text-ink-dim before:absolute before:-left-[23px] before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent/60"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
