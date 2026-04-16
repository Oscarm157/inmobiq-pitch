import { Slide } from "../slide";
import { FadeStack, FadeItem } from "../ui/motion-primitives";

type City = {
  rank: number;
  name: string;
  tam: number;
  status: "live" | "q4-2026" | "q2-2027" | "q4-2027" | "pipeline";
  activation_label: string;
  m6: number;
  m12: number;
  m18: number;
  m24: number;
};

const cities: City[] = [
  { rank: 1,  name: "CDMX + Zona Metropolitana", tam: 22_400, status: "q2-2027",  activation_label: "Q2 2027",     m6: 0,   m12: 0,   m18: 120, m24: 480 },
  { rank: 2,  name: "Monterrey",                  tam: 8_000,  status: "q4-2027",  activation_label: "Q4 2027",     m6: 0,   m12: 0,   m18: 0,   m24: 250 },
  { rank: 3,  name: "Guadalajara",                tam: 7_200,  status: "q4-2026",  activation_label: "Q4 2026",     m6: 0,   m12: 150, m18: 380, m24: 550 },
  { rank: 4,  name: "Puebla",                     tam: 3_200,  status: "pipeline", activation_label: "Pipeline 2028+", m6: 0, m12: 0, m18: 0, m24: 0 },
  { rank: 5,  name: "Tijuana",                    tam: 3_200,  status: "live",     activation_label: "Live · Q2 2026", m6: 250, m12: 550, m18: 700, m24: 800 },
  { rank: 6,  name: "Cancún + Riviera Maya",      tam: 3_200,  status: "q4-2026",  activation_label: "Q4 2026",     m6: 0,   m12: 100, m18: 300, m24: 420 },
  { rank: 7,  name: "Querétaro",                  tam: 2_800,  status: "pipeline", activation_label: "Pipeline 2028+", m6: 0, m12: 0, m18: 0, m24: 0 },
  { rank: 8,  name: "Mérida",                     tam: 2_400,  status: "pipeline", activation_label: "Pipeline 2028+", m6: 0, m12: 0, m18: 0, m24: 0 },
  { rank: 9,  name: "León",                       tam: 2_000,  status: "pipeline", activation_label: "Pipeline 2028+", m6: 0, m12: 0, m18: 0, m24: 0 },
  { rank: 10, name: "Toluca",                     tam: 2_000,  status: "pipeline", activation_label: "Pipeline 2028+", m6: 0, m12: 0, m18: 0, m24: 0 },
  { rank: 11, name: "Ciudad Juárez",              tam: 1_600,  status: "pipeline", activation_label: "Pipeline 2028+", m6: 0, m12: 0, m18: 0, m24: 0 },
  { rank: 12, name: "Playa del Carmen",           tam: 1_600,  status: "pipeline", activation_label: "Pipeline 2028+", m6: 0, m12: 0, m18: 0, m24: 0 },
  { rank: 13, name: "San Luis Potosí",            tam: 1_600,  status: "pipeline", activation_label: "Pipeline 2028+", m6: 0, m12: 0, m18: 0, m24: 0 },
  { rank: 14, name: "Los Cabos",                  tam: 1_200,  status: "pipeline", activation_label: "Pipeline 2028+", m6: 0, m12: 0, m18: 0, m24: 0 },
  { rank: 15, name: "Aguascalientes",             tam: 1_200,  status: "pipeline", activation_label: "Pipeline 2028+", m6: 0, m12: 0, m18: 0, m24: 0 },
];

const totals = cities.reduce(
  (a, c) => ({
    tam: a.tam + c.tam,
    m6: a.m6 + c.m6,
    m12: a.m12 + c.m12,
    m18: a.m18 + c.m18,
    m24: a.m24 + c.m24,
  }),
  { tam: 0, m6: 0, m12: 0, m18: 0, m24: 0 }
);

const penetration24 = (totals.m24 / totals.tam) * 100;

const fmt = (n: number) => n.toLocaleString("es-MX");
const cell = (n: number) => (n > 0 ? fmt(n) : <span className="text-muted-light/50">—</span>);

function statusChip(status: City["status"], label: string) {
  const map: Record<City["status"], { bg: string; text: string; dot?: boolean }> = {
    live: { bg: "bg-success/15", text: "text-success", dot: true },
    "q4-2026": { bg: "bg-accent/15", text: "text-accent" },
    "q2-2027": { bg: "bg-accent/10", text: "text-accent/80" },
    "q4-2027": { bg: "bg-accent/10", text: "text-accent/80" },
    pipeline: { bg: "bg-muted/10", text: "text-muted/70" },
  };
  const s = map[status];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[9px] font-semibold uppercase tracking-wider ${s.bg} ${s.text} whitespace-nowrap`}>
      {s.dot && <span className="w-1 h-1 rounded-full bg-success pulse-dot" />}
      {label}
    </span>
  );
}

export function S08Cities() {
  return (
    <Slide mode="dark">
      <FadeStack className="flex flex-col gap-6">
        <FadeItem>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold tracking-[0.22em] text-accent">08</span>
            <span className="text-xs uppercase tracking-[0.18em] text-muted">Oportunidad por ciudad</span>
          </div>
        </FadeItem>

        <FadeItem>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.05] text-foreground tracking-[-0.015em]">
                15 ciudades. <em className="font-sans italic text-accent">Un plan</em> de 24 meses.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted max-w-2xl leading-relaxed">
                TAM total 63.6K usuarios potenciales (brokers + inmobiliarias en las 15 ciudades con mayor
                volumen inmobiliario). La ronda financia la captura de las primeras 4 ciudades. El resto es
                pipeline para Series A.
              </p>
            </div>

            <div className="flex gap-5 sm:gap-7">
              <Kpi label="TAM total" value={fmt(totals.tam)} sub="usuarios" />
              <div className="w-px bg-card-border" />
              <Kpi label="Mes 24" value={fmt(totals.m24)} sub="users activos" accent />
              <div className="w-px bg-card-border" />
              <Kpi label="Penetración" value={`${penetration24.toFixed(1)}%`} sub="del TAM" accent />
            </div>
          </div>
        </FadeItem>

        <FadeItem>
          <div className="rounded-2xl bg-card overflow-hidden shadow-[0_12px_32px_-4px_rgba(0,0,0,0.45)]">
            <table className="w-full">
              <thead>
                <tr className="bg-surface-muted/60">
                  <th className="px-3 py-3 text-left text-[10px] uppercase tracking-[0.16em] font-semibold text-muted w-10">#</th>
                  <th className="px-3 py-3 text-left text-[10px] uppercase tracking-[0.16em] font-semibold text-muted">Ciudad</th>
                  <th className="px-3 py-3 text-right text-[10px] uppercase tracking-[0.16em] font-semibold text-muted">TAM</th>
                  <th className="px-3 py-3 text-right text-[10px] uppercase tracking-[0.16em] font-semibold text-muted">Mes 6</th>
                  <th className="px-3 py-3 text-right text-[10px] uppercase tracking-[0.16em] font-semibold text-muted">Mes 12</th>
                  <th className="px-3 py-3 text-right text-[10px] uppercase tracking-[0.16em] font-semibold text-muted">Mes 18</th>
                  <th className="px-3 py-3 text-right text-[10px] uppercase tracking-[0.16em] font-semibold text-muted">Mes 24</th>
                  <th className="px-3 py-3 text-left text-[10px] uppercase tracking-[0.16em] font-semibold text-muted">Activación</th>
                </tr>
              </thead>
              <tbody>
                {cities.map((c, i) => {
                  const isLive = c.status === "live";
                  const isActive = ["live", "q4-2026", "q2-2027", "q4-2027"].includes(c.status);
                  const rowBg = isLive
                    ? "bg-accent/8 border-l-2 border-accent"
                    : isActive
                    ? i % 2 === 0
                      ? "bg-transparent"
                      : "bg-surface-muted/40"
                    : "opacity-50 bg-surface-muted/20";
                  return (
                    <tr key={c.rank} className={rowBg}>
                      <td className="px-3 py-2.5 text-xs font-mono tabular-nums text-muted">
                        {String(c.rank).padStart(2, "0")}
                      </td>
                      <td className="px-3 py-2.5 text-sm font-semibold text-foreground">
                        {c.name}
                      </td>
                      <td className="px-3 py-2.5 text-right text-xs tabular-nums text-muted">
                        {fmt(c.tam)}
                      </td>
                      <td className="px-3 py-2.5 text-right text-sm tabular-nums text-foreground/90">
                        {cell(c.m6)}
                      </td>
                      <td className="px-3 py-2.5 text-right text-sm tabular-nums text-foreground/90">
                        {cell(c.m12)}
                      </td>
                      <td className="px-3 py-2.5 text-right text-sm tabular-nums text-foreground/90">
                        {cell(c.m18)}
                      </td>
                      <td className="px-3 py-2.5 text-right text-sm tabular-nums font-semibold text-accent">
                        {cell(c.m24)}
                      </td>
                      <td className="px-3 py-2.5 text-left">{statusChip(c.status, c.activation_label)}</td>
                    </tr>
                  );
                })}

                {/* Totals row */}
                <tr className="bg-foreground text-background">
                  <td className="px-3 py-3.5 text-xs font-mono tabular-nums">—</td>
                  <td className="px-3 py-3.5 text-sm font-bold uppercase tracking-widest text-background">
                    Total captura
                  </td>
                  <td className="px-3 py-3.5 text-right text-sm font-bold tabular-nums text-muted-light">
                    {fmt(totals.tam)}
                  </td>
                  <td className="px-3 py-3.5 text-right text-sm font-bold tabular-nums">
                    {fmt(totals.m6)}
                  </td>
                  <td className="px-3 py-3.5 text-right text-sm font-bold tabular-nums">
                    {fmt(totals.m12)}
                  </td>
                  <td className="px-3 py-3.5 text-right text-sm font-bold tabular-nums">
                    {fmt(totals.m18)}
                  </td>
                  <td className="px-3 py-3.5 text-right text-base font-bold tabular-nums text-gradient-accent">
                    {fmt(totals.m24)}
                  </td>
                  <td className="px-3 py-3.5 text-left">
                    <span className="text-[10px] uppercase tracking-widest text-accent-light font-semibold">
                      {penetration24.toFixed(1)}% TAM
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </FadeItem>

        <FadeItem>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl bg-card p-4 shadow-[0_6px_20px_-4px_rgba(0,0,0,0.35)]">
              <div className="text-[10px] uppercase tracking-[0.18em] font-semibold text-accent mb-2">
                La ronda (18 meses)
              </div>
              <div className="text-sm text-foreground/90 leading-relaxed">
                Consolidamos <span className="font-semibold">Tijuana</span> + abrimos{" "}
                <span className="font-semibold">GDL</span> y <span className="font-semibold">Cancún</span> en Q4 2026.
                Mes 18: ~1,500 usuarios activos · 2.4% del TAM.
              </div>
            </div>
            <div className="rounded-xl bg-card p-4 shadow-[0_6px_20px_-4px_rgba(0,0,0,0.35)]">
              <div className="text-[10px] uppercase tracking-[0.18em] font-semibold text-accent mb-2">
                Siguiente fase (Series A · 2027)
              </div>
              <div className="text-sm text-foreground/90 leading-relaxed">
                Abrimos <span className="font-semibold">CDMX</span> y{" "}
                <span className="font-semibold">Monterrey</span> (60% del TAM concentrado). Mes 24: 2,500 usuarios
                · 3.9% del TAM · las 10 restantes son pipeline 2028+.
              </div>
            </div>
          </div>
        </FadeItem>

        <FadeItem>
          <div className="text-xs text-muted italic leading-relaxed max-w-3xl">
            <span className="font-semibold text-foreground not-italic">Fuente TAM:</span> 80K brokers AMPI + estimación de
            no-registrados, distribuidos por participación del mercado inmobiliario mexicano. Mix objetivo 70% Pro + 30% Empresarial
            (ticket promedio ponderado $799 MXN/mes). Números redondeados · proyecciones base del plan financiero (slide 11).
          </div>
        </FadeItem>
      </FadeStack>
    </Slide>
  );
}

function Kpi({ label, value, sub, accent }: { label: string; value: string; sub: string; accent?: boolean }) {
  return (
    <div className="text-right">
      <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-muted">{label}</div>
      <div
        className={`text-2xl sm:text-3xl font-semibold tabular-nums mt-0.5 ${
          accent ? "text-gradient-accent" : "text-foreground"
        }`}
      >
        {value}
      </div>
      <div className="text-[10px] text-muted mt-0.5">{sub}</div>
    </div>
  );
}
