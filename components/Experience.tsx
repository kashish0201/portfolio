import { experience } from "@/data/content";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-7">
        <Reveal>
          <p className="mb-2.5 font-mono text-[11px] tracking-[0.12em] text-accent">
            EXPERIENCE
          </p>
          <h2 className="mb-9 font-display text-3xl font-extrabold leading-none tracking-tight md:text-[2.6rem]">
            Six services,
            <br />
            zero downtime.
          </h2>
        </Reveal>

        <Reveal>
          {experience.map((job) => (
            <div
              key={job.role}
              className={`relative pb-9 pl-7 ${
                job.marker ? "border-l-2 border-line" : "border-l-2 border-transparent"
              }`}
            >
              {job.marker && (
                <span className="absolute -left-[6px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_14px_var(--color-accent)]" />
              )}
              <h3 className="font-display text-xl font-semibold tracking-tight">
                {job.role}
              </h3>
              <p className="mb-3 font-mono text-[11px] text-ink-faint">{job.meta}</p>

              {job.paragraphs.map((p, i) => (
                <p key={i} className="mb-3.5 max-w-[68ch] text-[14.5px] text-ink-dim">
                  {p}
                </p>
              ))}

              {job.chips.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {job.chips.map((c) => (
                    <span
                      key={c}
                      className="rounded-md border border-line px-2.5 py-1 font-mono text-[10.5px] text-ink-dim"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
