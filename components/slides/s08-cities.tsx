import { Slide } from "../slide";
import { FadeStack, FadeItem } from "../ui/motion-primitives";

type Wave = "live" | "mes3" | "mes6" | "mes12";

type City = {
  rank: number;
  name: string;
  tam: number;
  wave: Wave;
  m1: number;
  m3: number;
  m6: number;
  m12: number;
  m18: number;
};

const cities: City[] = [
  { rank: 1,  name: "CDMX + Zona Metropolitana", tam: 22_400, wave: "mes3",  m1: 0,  m3: 100, m6: 350, m12: 900, m18: 2_240 },
  { rank: 2,  name: "Monterrey",                  tam: 8_000,  wave: "mes3",  m1: 0,  m3: 50,  m6: 150, m12: 360, m18: 720   },
  { rank: 3,  name: "Guadalajara",                tam: 7_200,  wave: "mes3",  m1: 0,  m3: 45,  m6: 140, m12: 320, m18: 650   },
  { rank: 4,  name: "Puebla",                     tam: 3_200,  wave: "mes6",  m1: 0,  m3: 0,   m6: 0,   m12: 90,  m18: 225   },
  { rank: 5,  name: "Tijuana",                    tam: 3_200,  wave: "live",  m1: 40, m3: 120, m6: 260, m12: 400, m18: 545   },
  { rank: 6,  name: "Cancún + Riviera Maya",      tam: 3_200,  wave: "mes3",  m1: 0,  m3: 30,  m6: 90,  m12: 180, m18: 320   },
  { rank: 7,  name: "Querétaro",                  tam: 2_800,  wave: "mes6",  m1: 0,  m3: 0,   m6: 0,   m12: 80,  m18: 196   },
  { rank: 8,  name: "Mérida",                     tam: 2_400,  wave: "mes6",  m1: 0,  m3: 0,   m6: 0,   m12: 70,  m18: 168   },
  { rank: 9,  name: "León",                       tam: 2_000,  wave: "mes12", m1: 0,  m3: 0,   m6: 0,   m12: 0,   m18: 80    },
  { rank: 10, name: "Toluca",                     tam: 2_000,  wave: "mes12", m1: 0,  m3: 0,   m6: 0,   m12: 0,   m18: 80    },
  { rank: 11, name: "Ciudad Juárez",              tam: 1_600,  wave: "mes12", m1: 0,  m3: 0,   m6: 0,   m12: 0,   m18: 64    },
  { rank: 12, name: "Playa del Carmen",           tam: 1_600,  wave: "mes12", m1: 0,  m3: 0,   m6: 0,   m12: 0,   m18: 64    },
  { rank: 13, name: "San Luis Potosí",            tam: 1_600,  wave: "mes12", m1: 0,  m3: 0,   m6: 0,   m12: 0,   m18: 64    },
  { rank: 14, name: "Los Cabos",                  tam: 1_200,  wave: "mes12", m1: 0,  m3: 0,   m6: 0,   m12: 0,   m18: 48    },
  { rank: 15, name: "Aguascalientes",             tam: 1_200,  wave: "mes12", m1: 0,  m3: 0,   m6: 0,   m12: 0,   m18: 48    },
];

const totals = cities.reduce(
  (a, c) => ({ tam: a.tam + c.tam, m1: a.m1 + c.m1, m3: a.m3 + c.m3, m6: a.m6 + c.m6, m12: a.m12 + c.m12, m18: a.m18 + c.m18 }),
  { tam: 0, m1: 0, m3: 0, m6: 0, m12: 0, m18: 0 }
);

const penetration18 = (totals.m18 / totals.tam) * 100;

const fmt = (n: number) => n.toLocaleString("es-MX");
const cell = (n: number) => (n > 0 ? fmt(n) : <span className="text-muted-light/40">—</span>);

const waveConfig: Record<Wave, { bg: string; text: string; dot?: boolean; label: string }> = {
  live:  { bg: "bg-success/15",  text: "text-success", dot: true, label: "Live · Mes 1" },
  mes3:  { bg: "bg-accent/15",   text: "text-accent",              label: "Mes 3"        },
  mes6:  { bg: "bg-violet/15",   text: "text-violet",              label: "Mes 6"        },
  mes12: { bg: "bg-muted/10",    text: "text-muted",               label: "Mes 12"       },
};

function WaveChip({ wave }: { wave: Wave }) {
  const s = waveConfig[wave];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[9px] font-semibold uppercase tracking-wider ${s.bg} ${s.text} whitespace-nowrap`}>
      {s.dot && <span className="w-1 h-1 rounded-full bg-success pulse-dot" />}
      {s.label}
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
                15 ciudades. <em className="italic text-accent">Un plan</em> de 18 meses.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted max-w-2xl leading-relaxed">
                TAM total 63.6K usuarios potenciales. Tijuana live desde el día uno — las 14 ciudades
                restantes en 3 olas durante los primeros 12 meses. La ronda financia toda la expansión.
              </p>
            </div>

            <div className="flex gap-5 sm:gap-7">
              <Kpi label="TAM total" value={fmt(totals.tam)} sub="brokers · 15 ciudades" />
              <div className="w-px bg-card-border" />
              <Kpi label="Users mes 18" value={fmt(totals.m18)} sub={`${penetration18.toFixed(1)}% del TAM`} accent />
              <div className="w-px bg-card-border" />
              <Kpi label="MRR mes 18" value="$4.4M MXN" sub="5,545 pagos · avg $799/mes" accent />
              <div className="w-px bg-card-border" />
              <Kpi label="ARR mes 18" value="$53.2M MXN" sub="≈ $2.9M USD run rate" />
            </div>
          </div>
        </FadeItem>

        {/* Wave legend */}
        <FadeItem>
          <div className="flex items-center gap-4 text-[9px] uppercase tracking-widest font-semibold">
            <span className="text-muted">Olas de activación:</span>
            {(Object.entries(waveConfig) as [Wave, typeof waveConfig[Wave]][]).map(([wave, s]) => (
              <span key={wave} className={`flex items-center gap-1.5 ${s.text}`}>
                {s.dot && <span className="w-1.5 h-1.5 rounded-full bg-success" />}
                {s.label}
              </span>
            ))}
          </div>
        </FadeItem>

        <FadeItem>
          <div className="rounded-2xl bg-card overflow-hidden shadow-[0_12px_32px_-4px_rgba(0,0,0,0.45)]">
            <table className="w-full">
              <thead>
                <tr className="bg-surface-muted/60">
                  <th className="px-3 py-3 text-left text-[10px] uppercase tracking-[0.16em] font-semibold text-muted w-10">#</th>
                  <th className="px-3 py-3 text-left text-[10px] uppercase tracking-[0.16em] font-semibold text-muted">Ciudad</th>
                  <th className="px-3 py-3 text-right text-[10px] uppercase tracking-[0.16em] font-semibold text-muted">
                    TAM<span className="block text-[8px] normal-case tracking-normal font-normal text-muted/60">brokers potenciales</span>
                  </th>
                  <th className="px-3 py-3 text-right text-[10px] uppercase tracking-[0.16em] font-semibold text-muted">Mes 1</th>
                  <th className="px-3 py-3 text-right text-[10px] uppercase tracking-[0.16em] font-semibold text-muted">Mes 3</th>
                  <th className="px-3 py-3 text-right text-[10px] uppercase tracking-[0.16em] font-semibold text-muted">Mes 6</th>
                  <th className="px-3 py-3 text-right text-[10px] uppercase tracking-[0.16em] font-semibold text-muted">Mes 12</th>
                  <th className="px-3 py-3 text-right text-[10px] uppercase tracking-[0.16em] font-semibold text-muted">Mes 18</th>
                  <th className="px-3 py-3 text-left text-[10px] uppercase tracking-[0.16em] font-semibold text-muted">Ola</th>
                </tr>
              </thead>
              <tbody>
                {cities.map((c, i) => {
                  const isLive = c.wave === "live";
                  const rowBg = isLive
                    ? "bg-accent/8 border-l-2 border-accent"
                    : i % 2 === 0 ? "bg-transparent" : "bg-surface-muted/30";
                  return (
                    <tr key={c.rank} className={rowBg}>
                      <td className="px-3 py-2.5 text-xs font-mono tabular-nums text-muted">{String(c.rank).padStart(2, "0")}</td>
                      <td className="px-3 py-2.5 text-sm font-semibold text-foreground">{c.name}</td>
                      <td className="px-3 py-2.5 text-right text-xs tabular-nums text-muted">{fmt(c.tam)}</td>
                      <td className="px-3 py-2.5 text-right text-sm tabular-nums text-foreground/90">{cell(c.m1)}</td>
                      <td className="px-3 py-2.5 text-right text-sm tabular-nums text-foreground/90">{cell(c.m3)}</td>
                      <td className="px-3 py-2.5 text-right text-sm tabular-nums text-foreground/90">{cell(c.m6)}</td>
                      <td className="px-3 py-2.5 text-right text-sm tabular-nums text-foreground/90">{cell(c.m12)}</td>
                      <td className="px-3 py-2.5 text-right text-sm tabular-nums font-semibold text-accent">{cell(c.m18)}</td>
                      <td className="px-3 py-2.5"><WaveChip wave={c.wave} /></td>
                    </tr>
                  );
                })}
                <tr className="bg-foreground text-background">
                  <td className="px-3 py-3.5 text-xs font-mono tabular-nums">—</td>
                  <td className="px-3 py-3.5 text-sm font-bold uppercase tracking-widest">Total captura</td>
                  <td className="px-3 py-3.5 text-right text-sm font-bold tabular-nums text-muted-light">{fmt(totals.tam)}</td>
                  <td className="px-3 py-3.5 text-right text-sm font-bold tabular-nums">{fmt(totals.m1)}</td>
                  <td className="px-3 py-3.5 text-right text-sm font-bold tabular-nums">{fmt(totals.m3)}</td>
                  <td className="px-3 py-3.5 text-right text-sm font-bold tabular-nums">{fmt(totals.m6)}</td>
                  <td className="px-3 py-3.5 text-right text-sm font-bold tabular-nums">{fmt(totals.m12)}</td>
                  <td className="px-3 py-3.5 text-right text-base font-bold tabular-nums text-gradient-accent">{fmt(totals.m18)}</td>
                  <td className="px-3 py-3.5">
                    <span className="text-[10px] uppercase tracking-widest text-accent-light font-semibold">{penetration18.toFixed(1)}% TAM</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </FadeItem>

        <FadeItem>
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Ola 1 · Mes 3", cities: "CDMX, MTY, GDL, Cancún", detail: "Las 4 plazas con mayor volumen. Con Tijuana suman las 5 ciudades principales del país." },
              { label: "Ola 2 · Mes 6", cities: "Puebla, Querétaro, Mérida", detail: "Mercados emergentes de alto crecimiento. Menor competencia, mayor velocidad de adopción." },
              { label: "Ola 3 · Mes 12", cities: "7 ciudades restantes", detail: "León, Toluca, Cd. Juárez, Playa del Carmen, SLP, Los Cabos, Aguascalientes — pipeline consolidado." },
            ].map((w) => (
              <div key={w.label} className="rounded-xl bg-card p-4">
                <div className="text-[10px] uppercase tracking-[0.18em] font-semibold text-accent mb-1">{w.label}</div>
                <div className="text-sm font-semibold text-foreground mb-1">{w.cities}</div>
                <div className="text-[11px] text-muted leading-relaxed">{w.detail}</div>
              </div>
            ))}
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
      <div className={`text-2xl sm:text-3xl font-semibold tabular-nums mt-0.5 ${accent ? "text-gradient-accent" : "text-foreground"}`}>{value}</div>
      <div className="text-[10px] text-muted mt-0.5">{sub}</div>
    </div>
  );
}
