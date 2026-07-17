import { stack } from "@/data/content";

export default function Ticker() {
  const items = [...stack, ...stack];

  return (
    <div className="overflow-hidden border-y border-line bg-black/20 py-3.5">
      <div className="animate-marquee flex w-max gap-10">
        {items.map((s, i) => (
          <span
            key={`${s}-${i}`}
            className="whitespace-nowrap font-mono text-xs text-ink-faint"
          >
            <span className="text-accent">◆</span> {s}
          </span>
        ))}
      </div>
    </div>
  );
}
