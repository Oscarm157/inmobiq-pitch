import { Slide } from "../slide";
import { FadeStack, FadeItem } from "../ui/motion-primitives";
import { mvp_stats } from "@/lib/data";

export function S10Traction() {
  return (
    <Slide mode="dark" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <FadeStack className="relative z-10 flex flex-col gap-10">
        <FadeItem>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold tracking-[0.22em] text-accent">10</span>
            <span className="text-xs uppercase tracking-[0.18em] text-muted-light">Tracción y roadmap</span>
          </div>
        </FadeItem>

        <FadeItem>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] text-foreground tracking-[-0.015em] max-w-4xl">
            Un año construyendo. <em className="italic text-gradient-accent">MVP listo.</em> Pre-launch.
          </h2>
        </FadeItem>

        <FadeStack className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {mvp_stats.map((s) => (
            <FadeItem key={s.label}>
              <div className="rounded-2xl bg-card p-5 h-full">
                <div className="text-3xl font-semibold text-gradient-accent tabular-nums leading-none">
                  {s.value}
                </div>
                <div className="text-[11px] uppercase tracking-[0.15em] text-muted mt-3 leading-snug">
                  {s.label}
                </div>
              </div>
            </FadeItem>
          ))}
        </FadeStack>

        <FadeItem>
          <div className="rounded-2xl bg-card p-6 sm:p-8">
            <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-accent mb-5">
              Roadmap
            </div>
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4">
              {roadmap.map((r, i) => (
                <div key={r.quarter} className="relative pl-4">
                  <div
                    className={`absolute left-0 top-1 w-2 h-2 rounded-full ${
                      r.status === "done"
                        ? "bg-success"
                        : r.status === "active"
                        ? "bg-accent pulse-dot"
                        : "bg-muted/40"
                    }`}
                  />
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted font-semibold mb-1">
                    {r.quarter}
                  </div>
                  <div className="text-sm font-medium text-foreground leading-snug">{r.label}</div>
                  <div className="text-xs text-muted mt-1 leading-relaxed">{r.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeItem>
      </FadeStack>
    </Slide>
  );
}

const roadmap = [
  { quarter: "Q2 2026 · hoy", label: "Terminar MVP · lanzar Tijuana", detail: "Cerrar el 20% restante del producto · activar Pro/Empresarial · primeros pagados", status: "active" },
  { quarter: "Mes 3-6", label: "Ola 1 · 5 ciudades", detail: "GDL + Cancún + CDMX + Monterrey · punto de equilibrio en mes 4-5", status: "next" },
  { quarter: "Mes 6-12", label: "Ola 2-3 · 15 ciudades", detail: "8 ciudades rentables en M9 · 15 ciudades activas en M12 · 1,950 usuarios", status: "next" },
  { quarter: "Mes 12-18", label: "Plan completo · Ronda A", detail: "4,380 usuarios · ARR ~$38M MXN · posicionado para Ronda A", status: "next" },
];
