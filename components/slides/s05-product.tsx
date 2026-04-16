import { Slide } from "../slide";
import { FadeStack, FadeItem } from "../ui/motion-primitives";
import { features } from "@/lib/data";

export function S05Product() {
  return (
    <Slide mode="dark">
      <FadeStack className="flex flex-col gap-8">
        <FadeItem>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold tracking-[0.22em] text-accent">05</span>
            <span className="text-xs uppercase tracking-[0.18em] text-muted">El producto</span>
          </div>
        </FadeItem>

        <FadeItem>
          <div className="max-w-3xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] text-foreground tracking-[-0.015em]">
              Seis módulos. Un solo tablero.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted max-w-xl leading-relaxed">
              Lo que el broker mexicano necesita para cerrar con credibilidad —
              todo en producción, vivo hoy para Tijuana.
            </p>
          </div>
        </FadeItem>

        <FadeStack className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {features.map((f) => (
            <FadeItem key={f.title}>
              <div className="group h-full rounded-2xl bg-card p-6 shadow-[0_12px_32px_-4px_rgba(0,0,0,0.45)] hover:-translate-y-1 hover:shadow-[0_20px_48px_-4px_rgba(59,130,246,0.28)] transition-all duration-300">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 mb-4 group-hover:bg-accent/15 transition-colors">
                  <span className="material-symbols-outlined text-accent" style={{ fontSize: 20 }}>
                    {f.icon}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 leading-snug">
                  {f.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{f.description}</p>
              </div>
            </FadeItem>
          ))}
        </FadeStack>

        <FadeItem>
          <div className="mt-4 flex items-center justify-center gap-6 text-xs uppercase tracking-[0.18em] text-muted">
            <span className="flex items-center gap-2">
              <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-success" />
              Producción · Vivo en inmobiq.com
            </span>
          </div>
        </FadeItem>
      </FadeStack>
    </Slide>
  );
}
