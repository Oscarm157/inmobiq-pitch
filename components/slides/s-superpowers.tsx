import { Slide } from "../slide";
import { FadeStack, FadeItem } from "../ui/motion-primitives";

const journey = [
  { label: "Interés", icon: "favorite", problem: false },
  { label: "Análisis", icon: "manage_search", problem: true },
  { label: "Comparativas", icon: "compare", problem: true },
  { label: "Decisión", icon: "gavel", problem: false },
  { label: "Cierre", icon: "handshake", problem: false },
];

const gains = [
  {
    icon: "schedule",
    title: "Tiempo liberado",
    value: "22× más rápido",
    detail: "Análisis manual de 1 propiedad: ~90 min (portales, filtros, cálculos). Con Inmobiq: ~4 min. En 1 hora haces lo que antes te tomaba día y medio.",
  },
  {
    icon: "groups",
    title: "Más clientes",
    value: "8 → 20 activos",
    detail: "Un broker promedio maneja 8-10 clientes activos limitado por el tiempo de investigación. Con ese cuello de botella eliminado: 20-25 clientes en paralelo.",
  },
  {
    icon: "verified",
    title: "Se ve pro",
    value: "Reporte al instante",
    detail: "Llega a la cita con valuación IA, comparativa de zona, riesgo y demografía — en PDF. El cliente percibe a alguien que domina el mercado.",
  },
];

export function SSuperpowers() {
  return (
    <Slide mode="dark" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <FadeStack className="relative z-10 flex flex-col gap-6">
        {/* Header */}
        <FadeItem>
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.18em] text-muted">El broker del futuro cercano</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold leading-[1.05] text-foreground tracking-[-0.015em] mt-2">
            No lo reemplaza.{" "}
            <em className="italic text-gradient-accent">Le da superpoderes.</em>
          </h2>
          <p className="mt-2 text-sm text-muted max-w-2xl leading-relaxed">
            La parte tediosa del customer journey — análisis, comparativas, preguntas de incertidumbre —
            ahora la resuelve la IA en 5 segundos. El broker se enfoca en lo que ningún algoritmo puede hacer.
          </p>
        </FadeItem>

        {/* Customer journey */}
        <FadeItem>
          <div className="relative">
            {/* Journey line */}
            <div className="flex items-start gap-0">
              {journey.map((step, i) => (
                <div key={step.label} className="flex-1 flex flex-col items-center relative">
                  {/* Connector line */}
                  {i < journey.length - 1 && (
                    <div className={`absolute top-5 left-1/2 w-full h-px ${
                      step.problem ? "bg-danger/40" : "bg-card-border"
                    }`} />
                  )}

                  {/* Node */}
                  <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                    step.problem
                      ? "bg-danger/10 border-danger/60"
                      : "bg-card border-card-border"
                  }`}>
                    <span className={`material-symbols-outlined ${
                      step.problem ? "text-danger" : "text-muted"
                    }`} style={{ fontSize: 18 }}>
                      {step.icon}
                    </span>
                  </div>

                  {/* Label */}
                  <div className={`mt-2 text-[10px] font-semibold uppercase tracking-wide text-center ${
                    step.problem ? "text-danger" : "text-muted"
                  }`}>
                    {step.label}
                  </div>

                  {/* Problem callout */}
                  {step.problem && (
                    <div className={`mt-2 rounded-lg px-2 py-1.5 text-center ${
                      step.label === "Análisis"
                        ? "bg-danger/10 border border-danger/30"
                        : "bg-card-border/30 border border-card-border/50"
                    }`}>
                      {step.label === "Análisis" ? (
                        <>
                          <div className="text-[9px] text-danger font-semibold">Horas de trabajo manual</div>
                          <div className="text-[8px] text-muted mt-0.5">1 prop. a la vez</div>
                        </>
                      ) : (
                        <>
                          <div className="text-[9px] text-muted/80 font-semibold">Preguntas interminables</div>
                          <div className="text-[8px] text-muted mt-0.5">Incertidumbre del comprador</div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* AI takeover badge */}
            <div className="mt-4 mx-auto w-fit flex items-center gap-3 bg-accent/10 border border-accent/30 rounded-xl px-5 py-3">
              <span className="material-symbols-outlined text-accent" style={{ fontSize: 20 }}>auto_awesome</span>
              <div>
                <div className="text-xs font-semibold text-accent uppercase tracking-wide">Brújula Inmobiliaria toma este tramo</div>
                <div className="text-[11px] text-muted mt-0.5">
                  Cruza 1 propiedad vs <span className="text-foreground font-semibold">1,000 en el mercado</span> · genera reporte completo ·{" "}
                  <span className="text-emerald-300 font-semibold">~4 minutos</span> vs 90 min manual
                </div>
              </div>
            </div>
          </div>
        </FadeItem>

        {/* Broker gains */}
        <FadeStack className="grid grid-cols-3 gap-4">
          {gains.map((g) => (
            <FadeItem key={g.title}>
              <div className="rounded-2xl bg-card p-5 h-full flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-accent" style={{ fontSize: 18 }}>
                      {g.icon}
                    </span>
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.15em] font-semibold text-muted leading-tight">
                    {g.title}
                  </div>
                </div>
                <div className="text-2xl font-bold text-foreground tabular-nums">{g.value}</div>
                <div className="text-[11px] text-muted leading-relaxed">{g.detail}</div>
              </div>
            </FadeItem>
          ))}
        </FadeStack>

        {/* Bottom banner */}
        <FadeItem>
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-card-border" />
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-muted">
              <span className="material-symbols-outlined text-accent" style={{ fontSize: 14 }}>bolt</span>
              El broker sigue siendo indispensable — ahora con inteligencia artificial de copiloto
            </div>
            <div className="h-px flex-1 bg-card-border" />
          </div>
        </FadeItem>
      </FadeStack>
    </Slide>
  );
}
