import { contact, profile } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const details = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Location", value: profile.location },
  { label: "GitHub", value: profile.githubHandle, href: profile.github },
  { label: "LinkedIn", value: profile.linkedinHandle, href: profile.linkedin },
];

export default function Contact() {
  return (
    <>
      <section id="contact" className="border-t border-line py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-7">
          <Reveal>
            <SectionHeader
              eyebrow={contact.eyebrow}
              title={contact.title}
              subtitle={contact.subtitle}
              center
            />
          </Reveal>

          <Reveal>
            <div className="mb-8 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/[0.08] px-3 py-1.5 font-mono text-[11px] tracking-wider text-accent-soft">
                <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_var(--color-accent)]" />
                {profile.status}
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {details.map((d) => (
                <div
                  key={d.label}
                  className="rounded-2xl border border-line bg-gradient-to-br from-surface-2/70 to-surface/70 p-5"
                >
                  <p className="mb-1.5 font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-faint">
                    {d.label}
                  </p>
                  {d.href ? (
                    <a
                      href={d.href}
                      target={d.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="break-words text-[14px] text-accent transition-colors hover:text-accent-soft"
                    >
                      {d.value}
                    </a>
                  ) : (
                    <p className="text-[14px] text-ink-dim">{d.value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a
                href={`mailto:${profile.email}`}
                className="inline-block rounded-xl bg-accent px-6 py-3.5 font-mono text-[13px] font-medium text-base transition-colors hover:bg-accent-soft"
              >
                Send me an email →
              </a>
              <p className="mt-4 font-mono text-[11px] text-ink-faint">
                Or grab the{" "}
                <a href={profile.resumeUrl} className="text-accent hover:text-accent-soft">
                  resume
                </a>{" "}
                first.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-line py-8">
        <div className="mx-auto max-w-5xl px-7">
          <p className="mb-6 max-w-[50ch] text-[14px] text-ink-dim">
            Thanks for scrolling this far. If something here lines up with what your team
            is building, I&apos;d like to hear about it.
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5 font-mono text-[11px] text-ink-faint">
            <span>© {new Date().getFullYear()} KASHISH PHULWANI</span>
            <div className="flex gap-5">
              <a href="#about" className="hover:text-accent">About</a>
              <a href="#skills" className="hover:text-accent">Skills</a>
              <a href="#work" className="hover:text-accent">Projects</a>
              <a href="#experience" className="hover:text-accent">Experience</a>
              <a href="#contact" className="hover:text-accent">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
