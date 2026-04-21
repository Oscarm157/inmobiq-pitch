import { Slide } from "../slide";
import { FadeStack, FadeItem } from "../ui/motion-primitives";

export function S03Solution() {
  return (
    <Slide mode="dark" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 700px 500px at 70% 50%, rgba(59,130,246,0.12) 0%, transparent 70%)",
        }}
      />

      <FadeStack className="relative z-10 flex flex-col gap-10">
        <FadeItem>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold tracking-[0.22em] text-accent">03</span>
            <span className="text-xs uppercase tracking-[0.18em] text-muted-light">La solución</span>
          </div>
        </FadeItem>

        <FadeItem>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] text-foreground tracking-[-0.015em] max-w-4xl">
            Un co-piloto de inteligencia para el{" "}
            <em className="italic text-gradient-accent">broker profesional.</em>
          </h2>
        </FadeItem>

        <FadeItem>
          <p className="text-lg text-muted max-w-2xl leading-relaxed">
            Inmobiq combina data curada manualmente por analistas locales,
            demografía INEGI (Censo 2020 hoy · Encuesta Intercensal 2025 disponible
            septiembre 2026), histórico de crecimiento por zona y valuaciones con IA.
            Es una herramienta de análisis, no un portal de anuncios.
          </p>
        </FadeItem>

        <FadeStack className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
          {pillars.map((p) => (
            <FadeItem key={p.title}>
              <div className="relative h-full rounded-2xl bg-card p-7 overflow-hidden">
                <div
                  className="absolute -top-12 -right-12 w-36 h-36 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)" }}
                />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/10 mb-5">
                    <span className="material-symbols-outlined text-accent" style={{ fontSize: 22 }}>
                      {p.icon}
                    </span>
                  </div>
                  <h3 className="text-2xl font-medium text-foreground mb-2 leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{p.description}</p>
                </div>
              </div>
            </FadeItem>
          ))}
        </FadeStack>
      </FadeStack>
    </Slide>
  );
}

const pillars = [
  {
    icon: "verified",
    title: "Data curada por locales",
    description: (
      <>
        Analistas <em className="italic text-foreground/95">humanos</em> en cada ciudad validan precios, zonas y anuncios. Calidad que la extracción automática nunca alcanza.
      </>
    ),
  },
  {
    icon: "insights",
    title: "Inteligencia de zona",
    description: "Precio por m², tendencia, riesgo, demografía INEGI cruzada. 30 zonas canónicas ya vivas en TJ.",
  },
  {
    icon: "travel_explore",
    title: "Brújula AI",
    description: "Valuación instantánea de cualquier propiedad con narrativa explicable generada por IA.",
  },
];
