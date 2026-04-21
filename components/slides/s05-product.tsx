import { Slide } from "../slide";
import { FadeStack, FadeItem } from "../ui/motion-primitives";
import { features } from "@/lib/data";

export function S05Product() {
  return (
    <Slide mode="dark">
      <FadeStack className="flex flex-col gap-10">
        <FadeItem>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold tracking-[0.22em] text-accent">05</span>
            <span className="text-xs uppercase tracking-[0.18em] text-muted">El producto</span>
          </div>
        </FadeItem>

        <FadeItem>
          <div className="max-w-3xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] text-foreground tracking-[-0.015em]">
              Seis módulos. <em className="italic text-gradient-accent">Un solo tablero.</em>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
              Plataforma viva en producción para Tijuana.
            </p>
          </div>
        </FadeItem>

        <FadeItem>
          <div className="flex flex-wrap gap-2.5">
            {features.map((f) => (
              <span
                key={f.title}
                className="inline-flex items-center gap-2 rounded-full bg-card border border-card-border/60 px-4 py-2 text-sm text-foreground/85"
              >
                <span className="material-symbols-outlined text-accent" style={{ fontSize: 16 }}>
                  {f.icon}
                </span>
                {f.title}
              </span>
            ))}
          </div>
        </FadeItem>

        <FadeItem>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted">
            <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-success" />
            <span>Vivo en inmobiq.com · siguiente: vistazo visual</span>
          </div>
        </FadeItem>
      </FadeStack>
    </Slide>
  );
}
