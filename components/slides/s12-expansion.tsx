import { Slide } from "../slide";
import { FadeStack, FadeItem } from "../ui/motion-primitives";
import { expansion, city_opening_cost } from "@/lib/data";

export function S12Expansion() {
  const statusColor = (status: string) => {
    if (status === "live") return { bg: "bg-success/15", text: "text-success", label: "Vivo" };
    if (status.startsWith("Q4 2026")) return { bg: "bg-accent/15", text: "text-accent", label: "Q4 2026" };
    return { bg: "bg-muted/15", text: "text-muted", label: "Roadmap" };
  };

  return (
    <Slide mode="dark">
      <FadeStack className="flex flex-col gap-10">
        <FadeItem>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold tracking-[0.22em] text-accent">12</span>
            <span className="text-xs uppercase tracking-[0.18em] text-muted">Expansión multi-ciudad</span>
          </div>
        </FadeItem>

        <FadeItem>
          <div className="max-w-3xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] text-foreground tracking-[-0.015em]">
              Expansión <em className="italic text-accent">escalonada</em> a 15 ciudades.
            </h2>
            <p className="mt-4 text-base text-muted max-w-xl leading-relaxed">
              Cada ciudad se abre con analistas locales curando data. Costo por apertura:
              ${city_opening_cost.mxn.toLocaleString()} MXN. Payback en 2 meses con
              solo 50 usuarios pagados.
            </p>
          </div>
        </FadeItem>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left — city timeline */}
          <FadeItem className="lg:col-span-7">
            <div className="rounded-2xl bg-card p-6 shadow-[0_12px_32px_-4px_rgba(0,0,0,0.45)]">
              <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-muted mb-5">
                Cronograma de expansión
              </div>
              <div className="flex flex-col gap-4">
                {expansion.map((c) => {
                  const s = statusColor(c.status);
                  return (
                    <div
                      key={c.city}
                      className="flex items-center gap-4 pl-4 border-l-2 border-card-border relative"
                    >
                      <div className="absolute -left-[5px] w-2 h-2 rounded-full bg-accent" />
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <span className="text-xl font-semibold text-foreground">
                            {c.city}
                          </span>
                          <span className={`text-[10px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded ${s.bg} ${s.text}`}>
                            {s.label}
                          </span>
                        </div>
                        <div className="text-xs text-muted mt-0.5">
                          Objetivo: {c.users_target.toLocaleString()} usuarios activos · {c.quarter}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeItem>

          {/* Right — city opening cost breakdown */}
          <FadeItem className="lg:col-span-5">
            <div className="rounded-2xl bg-foreground text-background p-7 glow-accent h-full">
              <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-accent mb-4">
                Costo por ciudad nueva
              </div>
              <div className="text-5xl font-semibold text-gradient-accent tabular-nums mb-2">
                ${city_opening_cost.mxn.toLocaleString()}
              </div>
              <div className="text-sm opacity-70 mb-6">
                MXN · equivalente ${city_opening_cost.usd.toLocaleString()} USD
              </div>
              <ul className="flex flex-col gap-3">
                {city_opening_cost.breakdown.map((b) => (
                  <li key={b.label} className="flex items-start justify-between gap-4 text-sm">
                    <span className="opacity-80 leading-snug">{b.label}</span>
                    <span className="font-semibold tabular-nums whitespace-nowrap">
                      ${b.mxn.toLocaleString()}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest opacity-60">Payback</span>
                <span className="text-sm font-semibold text-accent">2 meses con 50 usuarios</span>
              </div>
            </div>
          </FadeItem>
        </div>
      </FadeStack>
    </Slide>
  );
}
