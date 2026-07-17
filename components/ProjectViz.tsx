// Visuals used in place of screenshots. Deterministic — no Math.random() here,
// or server and client markup would disagree and React would throw a hydration error.

function Node({ children, dim }: { children: React.ReactNode; dim?: boolean }) {
  return (
    <div
      className={`rounded-lg border px-2.5 py-1.5 font-mono text-[9.5px] ${
        dim
          ? "border-steel/40 bg-steel/10 text-steel"
          : "border-accent/50 bg-accent/12 text-accent-soft"
      }`}
    >
      {children}
    </div>
  );
}

function Arrow() {
  return <span className="font-mono text-xs text-ink-faint">→</span>;
}

export function RagViz() {
  return (
    <div className="flex h-full items-center justify-center p-4">
      <div className="flex flex-wrap items-center justify-center gap-3.5">
        <Node dim>query</Node>
        <Arrow />
        <Node>intent router</Node>
        <Arrow />
        <div className="flex flex-col gap-2">
          <Node>ChromaDB vectors</Node>
          <Node dim>live web search</Node>
        </div>
        <Arrow />
        <Node dim>SSE stream</Node>
      </div>
    </div>
  );
}

export function WaveViz() {
  const bars = Array.from({ length: 42 }, (_, j) => {
    const h = 12 + Math.abs(Math.sin(j * 0.55)) * 90 + ((j * 37) % 22);
    const dur = (1.4 + ((j * 13) % 10) / 10).toFixed(2);
    return { j, h, dur };
  });

  return (
    <svg viewBox="0 0 300 190" className="h-full w-full">
      {bars.map(({ j, h, dur }) => (
        <rect
          key={j}
          x={8 + j * 7}
          y={95 - h / 2}
          width={3.5}
          height={h}
          rx={1.75}
          fill={j % 2 === 0 ? "var(--color-accent)" : "var(--color-steel)"}
          opacity={0.75}
        >
          <animate
            attributeName="height"
            values={`${h};${(h * 0.45).toFixed(1)};${h}`}
            dur={`${dur}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            values={`${(95 - h / 2).toFixed(1)};${(95 - (h * 0.45) / 2).toFixed(1)};${(95 - h / 2).toFixed(1)}`}
            dur={`${dur}s`}
            repeatCount="indefinite"
          />
        </rect>
      ))}
    </svg>
  );
}

export function PlaceholderViz() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="text-center font-mono text-[11px] leading-loose text-ink-faint">
        <div className="text-2xl text-accent">+</div>
        NEXT UP
      </div>
    </div>
  );
}
