import type { Metadata } from "next";
import Link from "next/link";
import { caseStudy as cs } from "@/data/caseStudy";
import { profile } from "@/data/content";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Self-healing deployment pipeline - Kashish Phulwani",
  description:
    "A case study: a small service deployed with Terraform, Docker, blue-green CI, live monitoring, and a chaos experiment proving it recovers from failure.",
};

export default function CaseStudyPage() {
  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-line bg-base/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-7 py-3.5">
          <span className="font-display text-lg font-extrabold tracking-tight">
            {profile.brand}
            <span className="text-accent">.</span>
          </span>
          <Link href="/#work" className="font-mono text-xs text-ink-dim hover:text-ink">
            ← All work
          </Link>
        </div>
      </nav>

      <main className="relative z-10">
        <header className="py-14 md:py-16">
          <div className="mx-auto max-w-3xl px-7">
            <p className="mb-3.5 font-mono text-[11px] tracking-[0.12em] text-accent">
              {cs.kicker}
            </p>
            <h1 className="mb-4 font-display text-[2rem] font-extrabold leading-[1.04] tracking-[-0.035em] md:text-5xl">
              {cs.title}
            </h1>
            <p className="mb-6 max-w-[62ch] text-lg text-ink-dim">{cs.standfirst}</p>
            <div className="flex flex-wrap gap-x-6 gap-y-4 border-t border-line pt-5">
              {cs.meta.map((m) => (
                <div key={m.label}>
                  <div className="mb-1 font-mono text-[10px] tracking-wider text-ink-faint">
                    {m.label}
                  </div>
                  <div className="text-sm text-ink">
                    {m.href ? (
                      <a href={m.href} className="text-accent hover:text-accent-soft">
                        {m.value}
                      </a>
                    ) : (
                      m.value
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-7">
          <div className="rounded-xl border border-alert/25 bg-alert/[0.07] px-4 py-3.5 font-mono text-[12.5px] leading-relaxed text-[#F0A585]">
            <span className="text-alert">NOTE TO SELF:</span> every bracketed value on
            this page is a placeholder. Swap in real numbers from your own runs before
            publishing. Empty metrics are worse than none, so don&apos;t ship the brackets.
          </div>
        </div>

        <Section title="Why I built it" sub="THE PROBLEM">
          {cs.why.map((p, i) => (
            <p key={i} className="mb-4 text-base text-ink-dim">
              {p}
            </p>
          ))}
        </Section>

        <Section title="How it fits together" sub="ARCHITECTURE">
          <ArchitectureDiagram />
          <p className="mt-2 text-base text-ink-dim">
            The application is a{" "}
            <span className="text-ink">[ e.g. URL shortener / notes API ]</span> -
            deliberately trivial, maybe 200 lines. Everything worth talking about is the
            path it takes from a git push to serving live traffic, and what watches it once
            it&apos;s there.
          </p>
        </Section>

        <Section title="Decisions worth explaining" sub="NOT A TUTORIAL - THE CHOICES">
          {cs.decisions.map((d) => (
            <div key={d.h} className="relative border-l-2 border-line py-1 pb-5 pl-[22px]">
              <span className="absolute -left-[5px] top-2 h-2 w-2 rounded-full bg-accent" />
              <h3 className="mb-1.5 font-display text-[17px] font-semibold tracking-tight">
                {d.h}
              </h3>
              <p className="text-[14.5px] text-ink-dim">{d.p}</p>
            </div>
          ))}
        </Section>

        <Section title="The chaos experiment" sub="BREAK IT ON PURPOSE, WATCH IT HEAL">
          <p className="mb-4 text-base text-ink-dim">
            The centerpiece. I injected a controlled failure and watched the system detect,
            respond, and recover - the same practice I helped establish at JPMorgan.
          </p>
          <div className="rounded-2xl border border-line bg-surface p-5">
            {cs.experiment.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-[80px_1fr] gap-3.5 border-b border-line py-2.5 text-[14.5px] last:border-none"
              >
                <div className="pt-0.5 font-mono text-[11px] text-ink-faint">{row.t}</div>
                <div className="text-ink-dim">
                  <Highlight text={row.d} tone={row.tone} />
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="By the numbers" sub="FROM MY OWN RUNS">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {cs.metrics.map((m) => (
              <div key={m.l} className="rounded-xl border border-line bg-surface-2 p-4">
                <div className="font-display text-2xl font-semibold tracking-tight text-accent-soft">
                  {m.v}
                </div>
                <div className="mt-1 font-mono text-[10px] tracking-wide text-ink-faint">
                  {m.l}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="What's simplified" sub="HONEST LIMITATIONS">
          <ul className="rounded-xl border border-line bg-steel/[0.06] px-5 py-4">
            {cs.limits.map((l, i) => (
              <li
                key={i}
                className="relative py-1.5 pl-5 text-[14.5px] text-ink-dim before:absolute before:left-0 before:text-ink-faint before:content-['-']"
              >
                {l}
              </li>
            ))}
          </ul>
        </Section>

        <div className="py-12 text-center md:py-16">
          <Link
            href="/#work"
            className="mx-1.5 inline-block rounded-xl border border-line-strong px-5 py-2.5 font-mono text-[13px] hover:border-accent"
          >
            ← All work
          </Link>
          <Link
            href="/#contact"
            className="mx-1.5 inline-block rounded-xl border border-line-strong px-5 py-2.5 font-mono text-[13px] hover:border-accent"
          >
            Get in touch →
          </Link>
        </div>
      </main>

      <footer className="border-t border-line py-5">
        <div className="mx-auto flex max-w-3xl justify-between px-7 font-mono text-[11px] text-ink-faint">
          <span>© {new Date().getFullYear()} KASHISH PHULWANI</span>
          <span>CASE STUDY · SELF-HEALING PIPELINE</span>
        </div>
      </footer>
    </>
  );
}

function Section({
  title,
  sub,
  children,
}: {
  title: string;
  sub: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-3xl px-7">
        <Reveal>
          <h2 className="mb-2 font-display text-2xl font-semibold tracking-tight">
            {title}
          </h2>
          <p className="mb-5 font-mono text-[11px] tracking-[0.08em] text-ink-faint">
            {sub}
          </p>
          {children}
        </Reveal>
      </div>
    </section>
  );
}

// Renders [bracketed] placeholders in a highlighted colour so they're easy to spot and replace.
function Highlight({ text, tone }: { text: string; tone: string }) {
  const parts = text.split(/(\[[^\]]*\])/g);
  const boldClass =
    tone === "warn" ? "text-alert" : tone === "ok" ? "text-[#9BB067]" : "text-ink";
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("[") ? (
          <span key={i} className={`font-medium ${boldClass}`}>
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}
