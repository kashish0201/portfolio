import { profile } from "@/data/content";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <>
      <section id="contact" className="py-24 md:py-28">
        <Reveal>
          <div className="mx-auto max-w-5xl px-7 text-center">
            <p className="mb-2.5 font-mono text-[11px] tracking-[0.12em] text-accent">
              CONTACT
            </p>
            <h2 className="mb-4 font-display text-3xl font-extrabold leading-none tracking-tight md:text-[2.6rem]">
              Let&apos;s build something
              <br />
              that stays up.
            </h2>
            <p className="mx-auto mb-7 max-w-[46ch] text-ink-dim">
              Open to Summer 2027 internships and backend, infrastructure, or AI platform
              roles. Say hi — I answer everything.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="font-display text-xl font-semibold tracking-tight text-accent transition-colors hover:text-accent-soft md:text-3xl"
            >
              {profile.email}
            </a>

            <div className="mt-6 flex justify-center gap-5">
              {[
                { href: profile.github, label: "GitHub" },
                { href: profile.linkedin, label: "LinkedIn" },
                { href: profile.resumeUrl, label: "Resume" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="font-mono text-[13px] text-ink-dim transition-colors hover:text-accent"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-line py-5">
        <div className="mx-auto flex max-w-5xl justify-between px-7 font-mono text-[11px] text-ink-faint">
          <span>© {new Date().getFullYear()} KASHISH PHULWANI</span>
          <span>BUILT WITH TOO MANY DASHBOARDS</span>
        </div>
      </footer>
    </>
  );
}
