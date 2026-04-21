import { Slide } from "../slide";
import { FadeStack, FadeItem } from "../ui/motion-primitives";
import { market } from "@/lib/data";

export function S07Market() {
  const fmt = (n: number) => n.toLocaleString("es-MX");

  // 3 niveles del embudo, de mayor a menor
  const layers = [
    {
      key: "total",
      label: "Mercado total",
      sub: "Brokers e inmobiliarias activos en México",
      breakdown: undefined as string | undefined,
      users: market.tam.users,
      revenue: market.tam.revenue_potential_mxn,
      barPct: 100,
    },
    {
      key: "alcanzable",
      label: "Mercado alcanzable",
      sub: "5 ciudades con mayor volumen de transacciones",
      breakdown: "CDMX 22,400 · MTY 8,000 · GDL 7,200 · Puebla 3,200 · TJ 3,200",
      users: market.sam.users,
      revenue: market.sam.revenue_potential_mxn,
      barPct: 55,
    },
    {
      key: "captura",
      label: "Captura objetivo · mes 18",
      sub: "Plan conservador en 15 ciudades activas",
      breakdown: undefined as string | undefined,
      users: market.som.users,
      revenue: market.som.revenue_potential_mxn,
      barPct: 6.8,
      highlight: true,
    },
  ];

  return (
    <Slide mode="dark">
      <FadeStack className="flex flex-col gap-8">
        <FadeItem>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold tracking-[0.22em] text-accent">07</span>
            <span className="text-xs uppercase tracking-[0.18em] text-muted">Mercado</span>
          </div>
        </FadeItem>

        <FadeItem>
          <div className="max-w-3xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] text-foreground tracking-[-0.015em]">
              Un mercado real, medible y <em className="italic text-accent">subatendido.</em>
            </h2>
            <p className="mt-3 text-base text-muted max-w-2xl leading-relaxed">
              80,000 brokers activos en México. La mitad trabaja con datos sin curar.
            </p>
          </div>
        </FadeItem>

        {/* Embudo visual horizontal */}
        <FadeStack className="flex flex-col gap-3">
          {layers.map((l) => (
            <FadeItem key={l.key}>
              <div
                className={`relative rounded-2xl p-5 sm:p-6 overflow-hidden ${
                  l.highlight ? "bg-card border border-accent/30 glow-accent-subtle" : "bg-card"
                }`}
              >
                {/* Barra de fondo proporcional */}
                <div
                  className="absolute inset-y-0 left-0 pointer-events-none"
                  style={{
                    width: `${l.barPct}%`,
                    background: l.highlight
                      ? "linear-gradient(to right, rgba(59,130,246,0.18), rgba(59,130,246,0.04))"
                      : "linear-gradient(to right, rgba(59,130,246,0.10), rgba(59,130,246,0.02))",
                  }}
                />

                <div className="relative flex items-center justify-between gap-6 flex-wrap">
                  <div className="flex-1 min-w-[220px]">
                    <div
                      className={`text-xs uppercase tracking-[0.18em] font-semibold mb-1 ${
                        l.highlight ? "text-accent" : "text-muted"
                      }`}
                    >
                      {l.label}
                    </div>
                    <div className="text-sm text-foreground/85 leading-snug">{l.sub}</div>
                    {l.breakdown && (
                      <div className="text-[11px] text-muted/60 mt-1 italic">{l.breakdown}</div>
                    )}
                  </div>

                  <div className="flex items-baseline gap-4">
                    <div className="text-right">
                      <div
                        className={`text-3xl sm:text-4xl font-semibold tabular-nums ${
                          l.highlight ? "text-gradient-accent" : "text-foreground"
                        }`}
                      >
                        {fmt(l.users)}
                      </div>
                      <div className="text-[10px] uppercase tracking-widest text-muted mt-0.5">
                        brokers
                      </div>
                    </div>
                    <div className="w-px h-10 bg-card-border" />
                    <div className="text-right">
                      <div className="text-xl font-semibold text-accent-light tabular-nums">
                        ${(l.revenue / 1_000_000).toFixed(1)}M
                      </div>
                      <div className="text-[10px] uppercase tracking-widest text-muted mt-0.5">
                        MXN/año potencial
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeItem>
          ))}
        </FadeStack>

        <FadeItem>
          <p className="text-xs text-muted/70 italic">
            Fuente: AMPI (Asociación Mexicana de Profesionales Inmobiliarios) + estimaciones sectoriales · ticket promedio $899 MXN/mes × 12 meses.
          </p>
        </FadeItem>
      </FadeStack>
    </Slide>
  );
}
