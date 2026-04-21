"use client";

import {
  ComposedChart,
  Bar,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
  Legend,
  Cell,
} from "recharts";

type Point = {
  month: string;
  monthNum: number;
  users: number;
  mrr_mxn: number;
  arr_mxn: number;
  status: string;
  highlight?: "break-even" | "profitable" | "expansion";
};

export const growthSeries: Point[] = [
  { month: "M3",  monthNum: 3,  users: 280,   mrr_mxn: 204_120,   arr_mxn: 2_449_440,  status: "TJ + 4 ciudades ola 1" },
  { month: "M6",  monthNum: 6,  users: 805,   mrr_mxn: 586_845,   arr_mxn: 7_042_140,  status: "8 ciudades · rentable",  highlight: "break-even" },
  { month: "M9",  monthNum: 9,  users: 1_385, mrr_mxn: 1_009_665, arr_mxn: 12_115_980, status: "Ola 2 consolidando",    highlight: "profitable" },
  { month: "M12", monthNum: 12, users: 1_950, mrr_mxn: 1_421_550, arr_mxn: 17_058_600, status: "15 ciudades activas",   highlight: "expansion" },
  { month: "M18", monthNum: 18, users: 4_380, mrr_mxn: 3_193_020, arr_mxn: 38_316_240, status: "Plan completo · 5.5% TAM", highlight: "expansion" },
];

const fmtUsers = (n: number) => n.toLocaleString("es-MX");
const fmtMxn = (n: number) =>
  n >= 1_000_000
    ? `$${(n / 1_000_000).toFixed(1)}M`
    : `$${Math.round(n / 1_000)}K`;

function CustomTooltip({ active, payload }: { active?: boolean; payload?: Array<{ payload: Point }> }) {
  if (!active || !payload || !payload.length) return null;
  const p = payload[0].payload;

  const highlightColor =
    p.highlight === "break-even"
      ? "text-emerald-300"
      : p.highlight === "profitable"
      ? "text-accent-light"
      : p.highlight === "expansion"
      ? "text-accent"
      : "text-muted";

  return (
    <div className="rounded-xl bg-[#0a0a0a]/95 border border-[#2a2a3e] backdrop-blur-sm px-4 py-3 shadow-[0_20px_48px_-4px_rgba(0,0,0,0.6)] min-w-[220px]">
      <div className="flex items-baseline justify-between gap-3 mb-2.5 pb-2.5 border-b border-[#2a2a3e]">
        <div className="text-xl font-semibold text-[#e0e0e0]">
          Mes {p.monthNum}
        </div>
        <div className={`text-[10px] uppercase tracking-widest font-semibold ${highlightColor}`}>
          {p.status}
        </div>
      </div>
      <dl className="flex flex-col gap-1.5">
        <div className="flex justify-between items-baseline gap-3">
          <dt className="text-[10px] uppercase tracking-wider text-[#94a3b8]">Users activos</dt>
          <dd className="text-sm font-semibold text-[#e0e0e0] tabular-nums">{fmtUsers(p.users)}</dd>
        </div>
        <div className="flex justify-between items-baseline gap-3">
          <dt className="text-[10px] uppercase tracking-wider text-[#94a3b8]">Ingreso mensual</dt>
          <dd className="text-sm font-semibold text-[#60a5fa] tabular-nums">{fmtMxn(p.mrr_mxn)} MXN</dd>
        </div>
        <div className="flex justify-between items-baseline gap-3">
          <dt className="text-[10px] uppercase tracking-wider text-[#94a3b8]">Ingreso anual</dt>
          <dd className="text-sm font-bold text-[#60a5fa] tabular-nums">{fmtMxn(p.arr_mxn)} MXN</dd>
        </div>
      </dl>
    </div>
  );
}

interface ActiveDotProps {
  cx?: number;
  cy?: number;
  payload?: Point;
}

function ActiveDot({ cx, cy, payload }: ActiveDotProps) {
  if (cx === undefined || cy === undefined || !payload) return null;
  const isBreakEven = payload.highlight === "break-even";
  const isMilestone = !!payload.highlight;
  const r = isMilestone ? 8 : 5;
  const fill = isBreakEven ? "#10b981" : "#60a5fa";

  return (
    <g>
      <circle cx={cx} cy={cy} r={r + 7} fill={fill} opacity={0.12} />
      <circle cx={cx} cy={cy} r={r + 3} fill={fill} opacity={0.25} />
      <circle cx={cx} cy={cy} r={r} fill={fill} stroke="#0a0a0a" strokeWidth={2} />
    </g>
  );
}

export function GrowthChart() {
  return (
    <div className="w-full h-[420px] sm:h-[460px]">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={growthSeries}
          margin={{ top: 20, right: 40, bottom: 10, left: 10 }}
        >
          <defs>
            <linearGradient id="mrrGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.45} />
              <stop offset="60%" stopColor="#3b82f6" stopOpacity={0.14} />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity={0.55} />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.15} />
            </linearGradient>
          </defs>

          <CartesianGrid
            stroke="rgba(148, 163, 184, 0.08)"
            strokeDasharray="3 6"
            vertical={false}
          />

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#94a3b8", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em" }}
            dy={10}
          />

          {/* Left axis — users */}
          <YAxis
            yAxisId="users"
            orientation="left"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#64748b", fontSize: 10 }}
            tickFormatter={(v) => fmtUsers(v)}
            width={50}
          />

          {/* Right axis — MRR */}
          <YAxis
            yAxisId="mrr"
            orientation="right"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#60a5fa", fontSize: 10, fontWeight: 600 }}
            tickFormatter={(v) => fmtMxn(v)}
            width={55}
          />

          <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(59, 130, 246, 0.06)" }} />

          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ paddingBottom: 14, fontSize: 11, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.12em" }}
            formatter={(value: string) => <span style={{ color: "#94a3b8", marginRight: 12 }}>{value}</span>}
          />

          {/* Ola 1 — Mes 3 */}
          <ReferenceLine
            x="M3"
            yAxisId="users"
            stroke="#60a5fa"
            strokeDasharray="3 5"
            strokeOpacity={0.45}
            label={{
              value: "Ola 1 · 5 ciudades",
              position: "insideTopRight",
              fill: "#60a5fa",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.15em",
              offset: 6,
            }}
          />

          {/* Break-even + Ola 2 — Mes 6 */}
          <ReferenceLine
            x="M6"
            yAxisId="users"
            stroke="#10b981"
            strokeDasharray="4 4"
            strokeOpacity={0.6}
            label={{
              value: "Break-even · Ola 2",
              position: "insideTopRight",
              fill: "#10b981",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.15em",
              offset: 6,
            }}
          />

          {/* Ola 3 — Mes 12 */}
          <ReferenceLine
            x="M12"
            yAxisId="users"
            stroke="#60a5fa"
            strokeDasharray="3 5"
            strokeOpacity={0.45}
            label={{
              value: "Ola 3 · 15 ciudades",
              position: "insideTopRight",
              fill: "#60a5fa",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.15em",
              offset: 6,
            }}
          />

          {/* Users bars */}
          <Bar
            yAxisId="users"
            dataKey="users"
            name="Users activos"
            fill="url(#barGradient)"
            radius={[6, 6, 0, 0]}
            barSize={34}
            isAnimationActive={true}
            animationDuration={1200}
            animationEasing="ease-out"
          >
            {growthSeries.map((p, i) => (
              <Cell
                key={`c-${i}`}
                fill={p.highlight === "break-even" ? "rgba(16, 185, 129, 0.35)" : "url(#barGradient)"}
              />
            ))}
          </Bar>

          {/* MRR area */}
          <Area
            yAxisId="mrr"
            type="monotone"
            dataKey="mrr_mxn"
            name="Ingreso mensual MXN"
            stroke="#3b82f6"
            strokeWidth={2.5}
            fill="url(#mrrGradient)"
            activeDot={(props: unknown) => <ActiveDot {...(props as ActiveDotProps)} />}
            isAnimationActive={true}
            animationDuration={1600}
            animationEasing="ease-out"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
