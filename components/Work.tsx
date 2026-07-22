import { projects, work, type Project } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { RagViz, WaveViz, PlaceholderViz } from "./ProjectViz";

function Viz({ kind }: { kind: Project["viz"] }) {
  if (kind === "rag") return <RagViz />;
  if (kind === "wave") return <WaveViz />;
  return <PlaceholderViz />;
}

function Card({ project }: { project: Project }) {
  const featured = project.featured;

  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-surface-2/70 to-surface/70 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
      <div
        className={`border-b border-line ${featured ? "h-44 md:h-52" : "h-36"}`}
      >
        <Viz kind={project.viz} />
      </div>

      <div className="p-6 md:p-7">
        <div className="mb-3 flex flex-wrap items-center gap-2.5">
          <span className="rounded-full border border-accent/30 bg-accent/[0.09] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent-soft">
            {project.badge}
          </span>
          <span className="text-[13px] text-ink-faint">{project.summary}</span>
        </div>

        <h3 className="mb-2.5 font-display text-xl font-semibold tracking-tight md:text-2xl">
          {project.title}
        </h3>
        <p className="mb-6 max-w-[68ch] text-[14.5px] leading-relaxed text-ink-dim">
          {project.body}
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="mb-2.5 font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-faint">
              Key features
            </h4>
            <ul className="space-y-1.5">
              {project.features.map((f) => (
                <li
                  key={f}
                  className="relative pl-4 text-[13.5px] leading-relaxed text-ink-dim before:absolute before:left-0 before:top-[9px] before:h-1 before:w-1 before:rounded-full before:bg-accent"
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-2.5 font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-faint">
              Technologies
            </h4>
            <div className="mb-5 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-line bg-base/40 px-2.5 py-1 font-mono text-[10.5px] text-ink-dim"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2.5">
              {project.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-line-strong px-3.5 py-2 font-mono text-[12px] text-accent transition-colors hover:border-accent hover:text-accent-soft"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" className="border-t border-line py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-7">
        <Reveal>
          <SectionHeader
            eyebrow={work.eyebrow}
            title={work.title}
            subtitle={work.subtitle}
          />
        </Reveal>

        <div className="space-y-5">
          {projects.map((p) => (
            <Reveal key={p.title}>
              <Card project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
