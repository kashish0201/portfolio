export default function ArchitectureDiagram() {
  return (
    <div className="my-2 rounded-2xl border border-line bg-gradient-to-br from-surface-2/80 to-surface/80 p-5">
      <svg
        viewBox="0 0 800 360"
        role="img"
        aria-label="Architecture diagram of the self-healing deployment pipeline: git push flows through GitHub Actions and an image registry, Terraform provisions infrastructure, a load balancer switches traffic between blue and green environments, and an observability layer monitors both while chaos tooling injects failure and the system auto-recovers."
        className="block h-auto w-full"
      >
        <defs>
          <marker id="arw" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6" fill="none" stroke="var(--color-steel)" strokeWidth="1.2" />
          </marker>
        </defs>

        {/* delivery lane */}
        <text x="20" y="34" className="fill-[var(--color-ink-faint)] font-mono text-[9px] tracking-wider">DELIVERY</text>
        <Node x={20} y={44} w={112} label="git push" sub="developer" />
        <Node x={164} y={44} w={120} label="GitHub Actions" sub="test · build · scan" />
        <Node x={316} y={44} w={120} label="image registry" sub="docker build" />
        <Line x1={132} y1={70} x2={160} y2={70} />
        <Line x1={284} y1={70} x2={312} y2={70} />

        {/* terraform */}
        <Node x={316} y={128} w={120} h={46} label="Terraform" sub="provisions all infra" steel />
        <Line x1={376} y1={96} x2={376} y2={126} />

        {/* runtime lane */}
        <text x="480" y="34" className="fill-[var(--color-ink-faint)] font-mono text-[9px] tracking-wider">RUNTIME</text>
        <Node x={468} y={44} w={132} label="load balancer" sub="traffic switch" />
        <NodeC x={636} y={20} w={132} label="BLUE (live)" sub="current version" color="ok" />
        <NodeC x={636} y={82} w={132} label="GREEN (idle)" sub="new version → swap" dashed />
        <Line x1={436} y1={70} x2={464} y2={70} />
        <Line x1={600} y1={62} x2={632} y2={46} />
        <Line x1={600} y1={78} x2={632} y2={104} />

        {/* observability */}
        <text x="20" y="228" className="fill-[var(--color-ink-faint)] font-mono text-[9px] tracking-wider">OBSERVABILITY</text>
        <rect x="20" y="240" width="748" height="70" rx="12" fill="rgba(214,184,140,0.03)" stroke="rgba(214,184,140,0.18)" />
        <Chip x={40} y={258} w={150} label="Grafana dashboards" />
        <Chip x={212} y={258} w={150} label="latency · errors · RPS" />
        <Chip x={470} y={258} w={130} label="chaos inject" tone="alert" />
        <Chip x={620} y={258} w={128} label="auto-recover" tone="ok" />
        <line x1="534" y1="96" x2="534" y2="240" stroke="rgba(160,138,102,0.4)" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="702" y1="134" x2="702" y2="240" stroke="rgba(160,138,102,0.4)" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="535" y1="258" x2="535" y2="150" stroke="var(--color-alert)" strokeWidth="1.2" strokeDasharray="3 3" markerEnd="url(#arw)" />
      </svg>
      <p className="mt-2 text-center font-mono text-[10.5px] tracking-wide text-ink-faint">
        Push to production is fully automated; the monitoring layer watches both
        environments and the chaos tooling injects failure on demand.
      </p>
    </div>
  );
}

function Node({
  x, y, w, h = 52, label, sub, steel,
}: {
  x: number; y: number; w: number; h?: number; label: string; sub: string; steel?: boolean;
}) {
  return (
    <g>
      <rect
        x={x} y={y} width={w} height={h} rx={9}
        fill={steel ? "rgba(160,138,102,0.08)" : "rgba(214,184,140,0.06)"}
        stroke={steel ? "rgba(160,138,102,0.4)" : "rgba(214,184,140,0.35)"}
      />
      <text x={x + w / 2} y={y + h / 2 - 2} textAnchor="middle" className="fill-[var(--color-ink)] font-mono text-[10px]">{label}</text>
      <text x={x + w / 2} y={y + h / 2 + 12} textAnchor="middle" className="fill-[var(--color-ink-faint)] font-mono text-[8px]">{sub}</text>
    </g>
  );
}

function NodeC({
  x, y, w, label, sub, color, dashed,
}: {
  x: number; y: number; w: number; label: string; sub: string; color?: "ok"; dashed?: boolean;
}) {
  const stroke = color === "ok" ? "rgba(155,176,103,0.45)" : "rgba(214,184,140,0.3)";
  const fill = color === "ok" ? "rgba(155,176,103,0.08)" : "rgba(214,184,140,0.05)";
  return (
    <g>
      <rect x={x} y={y} width={w} height={52} rx={9} fill={fill} stroke={stroke} strokeDasharray={dashed ? "4 3" : undefined} />
      <text x={x + w / 2} y={y + 24} textAnchor="middle" className="fill-[var(--color-ink)] font-mono text-[10px]">{label}</text>
      <text x={x + w / 2} y={y + 38} textAnchor="middle" className="fill-[var(--color-ink-faint)] font-mono text-[8px]">{sub}</text>
    </g>
  );
}

function Chip({
  x, y, w, label, tone,
}: {
  x: number; y: number; w: number; label: string; tone?: "alert" | "ok";
}) {
  const stroke = tone === "alert" ? "rgba(232,120,74,0.4)" : tone === "ok" ? "rgba(155,176,103,0.4)" : "rgba(214,184,140,0.3)";
  const fill = tone === "alert" ? "rgba(232,120,74,0.08)" : tone === "ok" ? "rgba(155,176,103,0.08)" : "rgba(214,184,140,0.06)";
  const textFill = tone === "alert" ? "#F0A585" : tone === "ok" ? "#BBD08A" : "var(--color-ink)";
  return (
    <g>
      <rect x={x} y={y} width={w} height={36} rx={8} fill={fill} stroke={stroke} />
      <text x={x + w / 2} y={y + 22} textAnchor="middle" style={{ fill: textFill }} className="font-mono text-[10px]">{label}</text>
    </g>
  );
}

function Line({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--color-steel)" strokeWidth="1.2" markerEnd="url(#arw)" />;
}
