import { featured, projects, type Project } from "@/data/content";
import Reveal from "./Reveal";
import { RagViz, WaveViz, PlaceholderViz } from "./ProjectViz";

function Viz({ kind }: { kind: Project["viz"] }) {
  if (kind === "rag") return <RagViz />;
  if (kind === "wave") return <WaveViz />;
  return <PlaceholderViz />;
}

function Card({ project, tall }: { project: Project; tall?: boolean }) {
  const muted = project.viz === "placeholder";

  return (
    <article
      className={`overflow-hidden rounded-2xl border bg-gradient-to-br from-surface-2/70 to-surface/70 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 ${
        muted ? "border-dashed border-line opacity-75" : "border-line"
      }`}
    >
      <div className={`border-b border-line ${tall ? "h-48" : "h-40"}`}>
        <Viz kind={project.viz} />
      </div>
      <div className="p-6">
        <div className="mb-3 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded border border-accent/25 bg-accent/10 px-2.5 py-1 font-mono text-[10px] text-accent-soft"
            >
              {t}
            </span>
          ))}
        </div>
        <h3 className="mb-2 font-display text-xl font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="mb-4 text-[14.5px] text-ink-dim">{project.body}</p>
        <a
          href={project.href}
          className="font-mono text-[12.5px] text-accent transition-colors hover:text-accent-soft"
        >
          {project.linkLabel} →
        </a>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-7">
        <Reveal>
          <p className="mb-2.5 font-mono text-[11px] tracking-[0.12em] text-accent">
            SELECTED WORK
          </p>
          <h2 className="mb-9 font-display text-3xl font-extrabold leading-none tracking-tight md:text-[2.6rem]">
            Things I&apos;ve built
            <br />
            and how they hold up.
          </h2>
        </Reveal>

        <Reveal className="mb-5">
          <Card project={featured} tall />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
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
