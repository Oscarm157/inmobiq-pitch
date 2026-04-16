import { Slide } from "../slide";
import { FadeStack, FadeItem } from "../ui/motion-primitives";
import { market } from "@/lib/data";

export function S07Market() {
  const fmt = (n: number) => n.toLocaleString("es-MX");

  const layers = [
    { key: "som" as const, data: market.som, size: 100, highlight: true },
    { key: "sam" as const, data: market.sam, size: 220 },
    { key: "tam" as const, data: market.tam, size: 380 },
  ];

  return (
    <Slide mode="dark">
      <FadeStack className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <FadeItem>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold tracking-[0.22em] text-accent">07</span>
              <span className="text-xs uppercase tracking-[0.18em] text-muted">Mercado</span>
            </div>
          </FadeItem>

          <FadeItem>
            <h2 className="text-4xl sm:text-5xl font-bold leading-[1.05] text-foreground tracking-[-0.015em]">
              Un mercado real, medible y <em className="font-sans italic text-accent">subatendido.</em>
            </h2>
          </FadeItem>

          <FadeItem>
            <p className="text-base text-muted leading-relaxed max-w-md">
              AMPI registra más de 80,000 brokers e inmobiliarias activas en México.
              La mitad trabaja con data fragmentada. Nosotros atacamos primero los
              20K profesionales de las 5 ciudades con mayor volumen de transacciones.
            </p>
          </FadeItem>

          <FadeStack className="flex flex-col gap-3 mt-4">
            {[market.tam, market.sam, market.som].map((m, i) => (
              <FadeItem key={m.label}>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-[0_6px_20px_-4px_rgba(0,0,0,0.35)]">
                  <span className="font-mono text-xs font-semibold text-accent mt-1 tracking-widest">
                    {["TAM", "SAM", "SOM"][i]}
                  </span>
                  <div className="flex-1">
                    <div className="text-xs text-muted uppercase tracking-wide">
                      {m.label.replace(/^(TAM|SAM|SOM) — /, "")}
                    </div>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-2xl font-semibold text-foreground tabular-nums">
                        {fmt(m.users)} users
                      </span>
                      <span className="text-sm text-muted">·</span>
                      <span className="text-sm font-semibold text-accent tabular-nums">
                        ${(m.revenue_potential_mxn / 1_000_000).toFixed(1)}M MXN
                      </span>
                    </div>
                  </div>
                </div>
              </FadeItem>
            ))}
          </FadeStack>
        </div>

        {/* Right — concentric circles visualization */}
        <div className="lg:col-span-7 relative h-[440px] flex items-center justify-center">
          <div className="relative" style={{ width: 420, height: 420 }}>
            {layers.map((l) => (
              <div
                key={l.key}
                className={`absolute rounded-full ${l.highlight ? "glow-accent" : ""}`}
                style={{
                  width: l.size,
                  height: l.size,
                  left: `calc(50% - ${l.size / 2}px)`,
                  top: `calc(50% - ${l.size / 2}px)`,
                  background: l.highlight
                    ? "radial-gradient(circle, rgba(59,130,246,0.28) 0%, rgba(59,130,246,0.08) 100%)"
                    : `rgba(59,130,246,${0.07 - (l.size / 6000)})`,
                  border: `1px solid rgba(59,130,246,${l.highlight ? 0.4 : 0.2})`,
                }}
              />
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-semibold text-gradient-accent tabular-nums">
                  {fmt(market.som.users)}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted mt-1">
                  SOM año 5
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeStack>
    </Slide>
  );
}
