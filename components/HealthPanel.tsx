"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const POINTS = 48;
const TICK_MS = 900;
const CHAOS_MS = 5200;

/** Fixed seed so SSR markup matches the client's first paint. */
function seed() {
  return Array.from({ length: POINTS }, (_, i) => 40 + ((i * 7) % 13));
}

export default function HealthPanel() {
  const [data, setData] = useState<number[]>(seed);
  const [chaos, setChaos] = useState(false);
  const [badge, setBadge] = useState("ALL SYSTEMS NOMINAL");
  const [throughput, setThroughput] = useState(1.2);
  const [uptime, setUptime] = useState(99.9);
  const chaosRef = useRef(false);

  useEffect(() => {
    chaosRef.current = chaos;
  }, [chaos]);

  useEffect(() => {
    const id = setInterval(() => {
      const isChaos = chaosRef.current;
      setData((prev) => {
        const next = isChaos ? 120 + Math.random() * 60 : 40 + Math.random() * 12;
        return [...prev.slice(1), next];
      });
      setThroughput(isChaos ? 0.3 + Math.random() * 0.3 : 1.1 + Math.random() * 0.3);
      setUptime(isChaos ? 97.4 + Math.random() * 0.4 : 99.9);
    }, TICK_MS);
    return () => clearInterval(id);
  }, []);

  const inject = useCallback(() => {
    if (chaosRef.current) return;
    setChaos(true);
    setBadge("DEGRADED — INVESTIGATING");

    setTimeout(() => {
      setChaos(false);
      setBadge("RECOVERED — ALL SYSTEMS NOMINAL");
      setTimeout(() => setBadge("ALL SYSTEMS NOMINAL"), 3200);
    }, CHAOS_MS);
  }, []);

  const latest = data[data.length - 1];
  const stroke = chaos ? "var(--color-alert)" : "var(--color-accent)";
  const areaFill = chaos
    ? "color-mix(in srgb, var(--color-alert) 14%, transparent)"
    : "color-mix(in srgb, var(--color-accent) 14%, transparent)";

  const pts = data
    .map((v, i) => {
      const x = (i / (POINTS - 1)) * 300;
      const y = Math.max(3, 96 - (Math.min(v, 190) / 190) * 96);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <div className="rounded-2xl border border-line bg-gradient-to-br from-surface-2 to-surface p-5 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.55)]">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="font-mono text-[11px] tracking-widest text-ink-faint">
          SERVICE HEALTH — LIVE
        </span>
        <span
          className={`rounded border px-2 py-0.5 font-mono text-[10px] transition-colors ${
            chaos
              ? "border-alert/40 bg-alert/15 text-alert"
              : "border-accent/40 bg-accent/10 text-accent-soft"
          }`}
        >
          {badge}
        </span>
      </div>

      <div className="mb-4 grid grid-cols-3 gap-2.5">
        <Metric label="P99 LATENCY" value={`${Math.round(latest)}ms`} alert={chaos} />
        <Metric label="THROUGHPUT" value={`${throughput.toFixed(1)}k/s`} />
        <Metric label="UPTIME" value={`${uptime.toFixed(1)}%`} />
      </div>

      <div className="mb-3.5 rounded-xl border border-white/5 bg-black/30 p-2.5">
        <div className="mb-1.5 font-mono text-[9.5px] tracking-widest text-ink-faint">
          REQUEST LATENCY — LAST 60s
        </div>
        <svg
          viewBox="0 0 300 96"
          preserveAspectRatio="none"
          className="block h-24 w-full"
          role="img"
          aria-label="Live request latency chart"
        >
          <polyline points={`0,96 ${pts} 300,96`} fill={areaFill} stroke="none" />
          <polyline
            points={pts}
            fill="none"
            stroke={stroke}
            strokeWidth={2}
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <button
        onClick={inject}
        disabled={chaos}
        className="w-full rounded-xl border border-accent/40 bg-accent/10 p-2.5 font-mono text-xs text-accent-soft transition-colors hover:bg-accent/20 disabled:cursor-wait disabled:opacity-50"
      >
        {chaos ? "⚡ Failure injected — watching recovery…" : "⚡ Inject failure (chaos experiment)"}
      </button>
      <p className="mt-2 text-center font-mono text-[9.5px] text-ink-faint">
        Yes, this actually works. Try it.
      </p>
    </div>
  );
}

function Metric({
  label,
  value,
  alert,
}: {
  label: string;
  value: string;
  alert?: boolean;
}) {
  return (
    <div className="rounded-xl border border-white/5 bg-black/25 px-3 py-2.5">
      <div className="mb-0.5 font-mono text-[9.5px] tracking-widest text-ink-faint">
        {label}
      </div>
      <div
        className={`font-display text-lg font-semibold tracking-tight ${
          alert ? "text-alert" : "text-accent-soft"
        }`}
      >
        {value}
      </div>
    </div>
  );
}
