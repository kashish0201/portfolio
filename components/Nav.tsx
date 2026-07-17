import { profile } from "@/data/content";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-base/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-7 py-3.5">
        <span className="font-display text-lg font-extrabold tracking-tight">
          {profile.brand}
          <span className="text-accent">.</span>
        </span>

        <div className="flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden text-sm text-ink-dim transition-colors hover:text-ink sm:block"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-accent px-4 py-2 font-mono text-xs font-medium text-base transition-colors hover:bg-accent-soft"
          >
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
}
