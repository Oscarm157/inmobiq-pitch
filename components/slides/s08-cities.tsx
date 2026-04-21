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
  { rank: 1,  name: "CDMX + Zona Metropolitana", tam: 22_400, wave: "mes3",  m1: 0,  m3: 100, m6: 350, m12: 900, m18: 2_016 },
  { rank: 2,  name: "Monterrey",                  tam: 8_000,  wave: "mes3",  m1: 0,  m3: 50,  m6: 150, m12: 360, m18: 720   },
  { rank: 3,  name: "Guadalajara",                tam: 7_200,  wave: "mes3",  m1: 0,  m3: 45,  m6: 140, m12: 320, m18: 650   },
  { rank: 4,  name: "Puebla",                     tam: 3_200,  wave: "mes6",  m1: 0,  m3: 0,   m6: 0,   m12: 90,  m18: 225   },
  { rank: 5,  name: "Tijuana",                    tam: 3_200,  wave: "live",  m1: 35, m3: 100, m6: 210, m12: 330, m18: 445   },
  { rank: 6,  name: "Cancún + Riviera Maya",      tam: 3_200,  wave: "mes3",  m1: 0,  m3: 30,  m6: 90,  m12: 180, m18: 288   },
  { rank: 7,  name: "Querétaro",                  tam: 2_800,  wave: "mes6",  m1: 0,  m3: 0,   m6: 0,   m12: 80,  m18: 196   },
  { rank: 8,  name: "Mérida",                     tam: 2_400,  wave: "mes6",  m1: 0,  m3: 0,   m6: 0,   m12: 70,  m18: 168   },
  { rank: 9,  name: "León",                       tam: 2_000,  wave: "mes12", m1: 0,  m3: 0,   m6: 0,   m12: 0,   m18: 120   },
  { rank: 10, name: "Toluca",                     tam: 2_000,  wave: "mes12", m1: 0,  m3: 0,   m6: 0,   m12: 0,   m18: 120   },
  { rank: 11, name: "Ciudad Juárez",              tam: 1_600,  wave: "mes12", m1: 0,  m3: 0,   m6: 0,   m12: 0,   m18: 96    },
  { rank: 12, name: "Playa del Carmen",           tam: 1_600,  wave: "mes12", m1: 0,  m3: 0,   m6: 0,   m12: 0,   m18: 96    },
  { rank: 13, name: "San Luis Potosí",            tam: 1_600,  wave: "mes12", m1: 0,  m3: 0,   m6: 0,   m12: 0,   m18: 96    },
  { rank: 14, name: "Los Cabos",                  tam: 1_200,  wave: "mes12", m1: 0,  m3: 0,   m6: 0,   m12: 0,   m18: 72    },
  { rank: 15, name: "Aguascalientes",             tam: 1_200,  wave: "mes12", m1: 0,  m3: 0,   m6: 0,   m12: 0,   m18: 72    },
];

const totals = cities.reduce(
  (a, c) => ({ tam: a.tam + c.tam, m1: a.m1 + c.m1, m3: a.m3 + c.m3, m6: a.m6 + c.m6, m12: a.m12 + c.m12, m18: a.m18 + c.m18 }),
  { tam: 0, m1: 0, m3: 0, m6: 0, m12: 0, m18: 0 }
);

const penetration18 = (totals.m18 / totals.tam) * 100;

const fmt = (n: number) => n.toLocaleString("es-MX");
const cell = (n: number) => (n > 0 ? fmt(n) : <span className="text-muted-light/40">—</span>);

const waveConfig: Record<Wave, { bg: string; text: string; dot?: boolean; label: string }> = {
  live:  { bg: "bg-success/15",  text: "text-success", dot: true, label: "En vivo · Mes 1" },
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
                Mercado potencial agregado de 63,600 brokers en las 15 ciudades. Tijuana opera en vivo
                desde el día uno; las 14 ciudades restantes se incorporan en tres olas durante los
                primeros 10 meses. La ronda financia la expansión completa.
              </p>
            </div>

            <div className="flex gap-5 sm:gap-7">
              <Kpi label="Mercado total" value={fmt(totals.tam)} sub="brokers · 15 ciudades" />
              <div className="w-px bg-card-border" />
              <Kpi label="Usuarios mes 18" value={fmt(totals.m18)} sub={`${penetration18.toFixed(1)}% del mercado`} accent />
              <div className="w-px bg-card-border" />
              <Kpi label="Ingreso mensual mes 18" value="$3.92M MXN" sub="5,380 suscripciones · prom. $729/mes" accent />
              <div className="w-px bg-card-border" />
              <Kpi label="Ingreso anual mes 18" value="$47.1M MXN" sub="≈ $2.5M USD anualizado" />
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
              { label: "Ola 3 · Mes 12", cities: "7 ciudades restantes", detail: "León, Toluca, Cd. Juárez, Playa del Carmen, SLP, Los Cabos, Aguascalientes. Pipeline consolidado." },
            ].map((w) => (
              <div key={w.label} className="rounded-xl bg-card p-4">
                <div className="text-[10px] uppercase tracking-[0.18em] font-semibold text-accent mb-1">{w.label}</div>
                <div className="text-sm font-semibold text-foreground mb-1">{w.cities}</div>
                <div className="text-[11px] text-muted leading-relaxed">{w.detail}</div>
              </div>
            ))}
          </div>
        </FadeItem>

        {/* Horizonte — trayectoria post broker */}
        <FadeItem>
          <div className="rounded-2xl bg-gradient-to-br from-accent/10 via-card to-card border border-accent/20 p-5 sm:p-6">
            <div className="flex items-start justify-between gap-6 flex-wrap">
              <div className="flex-1 min-w-[280px]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-accent" style={{ fontSize: 18 }}>
                    rocket_launch
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-accent">
                    Horizonte · post broker
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground leading-tight mb-2">
                  Hoy empoderamos al broker. Mañana, el cliente final tendrá ese poder en 3 clics.
                </h3>
                <p className="text-[12px] sm:text-sm text-muted leading-relaxed max-w-2xl">
                  Inmobiq nace B2B porque el broker es el nodo de conocimiento del mercado mexicano. Pero
                  conforme la data se vuelve más confiable y la AI más capaz, esa intermediación se simplifica:
                  el cliente final podrá hacer su propio análisis de zona, valuación y comparación. El broker
                  se mueve a la etapa de cierre, donde realmente aporta valor humano.
                </p>
              </div>

              <div className="flex flex-col gap-3 min-w-[220px]">
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted font-semibold">
                  Referencia del modelo
                </div>
                <a
                  href="https://www.nobroker.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-accent/15 hover:bg-accent/25 border border-accent/40 text-accent font-semibold transition-all hover:-translate-y-0.5"
                >
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] uppercase tracking-widest text-accent/70">India · 2014→</span>
                    <span className="text-base">Nobroker.in</span>
                  </div>
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>open_in_new</span>
                </a>
                <p className="text-[11px] text-muted leading-relaxed">
                  Plataforma india que eliminó al broker del proceso. Hoy +50M usuarios, $200M+ revenue.
                </p>
              </div>
            </div>
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
