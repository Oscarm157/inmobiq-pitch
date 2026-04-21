import { Slide } from "../slide";
import { FadeStack, FadeItem } from "../ui/motion-primitives";

// Placeholders — Oscar reemplazará con paths/URLs reales (ej: /screenshots/panorama.png)
const screenshots = [
  { src: "", caption: "Panorama de ciudad" },
  { src: "", caption: "Inteligencia por zona" },
  { src: "", caption: "Brújula Inmobiliaria" },
  { src: "", caption: "Comparador de zonas" },
  { src: "", caption: "Mapa choropleth" },
];

export function S05ProductShowcase() {
  return (
    <Slide mode="dark" className="relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 1100px 600px at 50% 30%, rgba(59,130,246,0.10) 0%, transparent 70%)",
        }}
      />

      <FadeStack className="relative z-10 flex flex-col gap-7">
        <FadeItem>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold tracking-[0.22em] text-accent">05·</span>
            <span className="text-xs uppercase tracking-[0.18em] text-muted">Un vistazo del producto</span>
          </div>
        </FadeItem>

        <FadeItem>
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.05] text-foreground tracking-[-0.015em]">
              Así se ve <em className="italic text-gradient-accent">Inmobiq</em> hoy.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted max-w-2xl leading-relaxed">
              Capturas reales de la plataforma en producción. Tijuana, vivo.
            </p>
          </div>
        </FadeItem>

        {/* Hero principal + 4 secundarios */}
        <FadeItem>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {/* Hero — imagen grande izquierda */}
            <div className="lg:col-span-2 lg:row-span-2 rounded-2xl bg-card border border-card-border/60 overflow-hidden aspect-[16/10]">
              <ScreenshotSlot screenshot={screenshots[0]} large />
            </div>

            {/* 4 secundarios */}
            {screenshots.slice(1).map((s, i) => (
              <div
                key={i}
                className="rounded-2xl bg-card border border-card-border/60 overflow-hidden aspect-[4/3]"
              >
                <ScreenshotSlot screenshot={s} />
              </div>
            ))}
          </div>
        </FadeItem>

        <FadeItem>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted">
            <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-success" />
            <span>inmobiq.com · Tijuana en vivo</span>
          </div>
        </FadeItem>
      </FadeStack>
    </Slide>
  );
}

function ScreenshotSlot({
  screenshot,
  large,
}: {
  screenshot: { src: string; caption: string };
  large?: boolean;
}) {
  if (screenshot.src) {
    return (
      <div className="relative w-full h-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={screenshot.src}
          alt={screenshot.caption}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 inset-x-0 px-3 py-2 bg-gradient-to-t from-black/80 to-transparent">
          <span className="text-xs text-foreground/90 font-medium">{screenshot.caption}</span>
        </div>
      </div>
    );
  }
  // Placeholder mientras no llega la imagen
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-card-border/30 to-card-border/10">
      <span className="material-symbols-outlined text-muted/40" style={{ fontSize: large ? 40 : 28 }}>
        image
      </span>
      <span className={`uppercase tracking-widest text-muted/60 font-semibold ${large ? "text-xs" : "text-[10px]"}`}>
        {screenshot.caption}
      </span>
      <span className="text-[10px] text-muted/40 italic">pendiente captura</span>
    </div>
  );
}
