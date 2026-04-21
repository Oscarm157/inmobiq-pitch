"use client";

import { useState } from "react";
import { Slide } from "../slide";
import { FadeStack, FadeItem } from "../ui/motion-primitives";

const screenshots = [
  { src: "/inmobiq%20mapa%20principal.png", caption: "Mapa choropleth de precios" },
  { src: "/inmobiq%20secundario.png",       caption: "Inteligencia por zona" },
  { src: "/inmobiq%203.png",                caption: "Brújula · valuación" },
  { src: "/inmobiq%204.png",                caption: "Panorama de mercado" },
];

export function S05ProductShowcase() {
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null);

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
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <span className="text-xs uppercase tracking-[0.18em] text-muted">Un vistazo del producto</span>
            <a
              href="https://inmobiq.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 hover:bg-accent/25 border border-accent/40 text-accent font-semibold text-xs uppercase tracking-[0.18em] transition-all hover:-translate-y-0.5"
            >
              Ver Inmobiq
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
            </a>
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

        {/* Mapa hero + 3 secundarios */}
        <FadeItem>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {/* Hero — mapa grande izquierda */}
            <div className="lg:col-span-2 lg:row-span-2 rounded-2xl bg-card border border-card-border/60 overflow-hidden aspect-[16/10]">
              <ScreenshotSlot screenshot={screenshots[0]} large onOpen={setLightbox} />
            </div>

            {/* 3 secundarios */}
            {screenshots.slice(1).map((s, i) => (
              <div
                key={i}
                className="rounded-2xl bg-card border border-card-border/60 overflow-hidden aspect-[4/3]"
              >
                <ScreenshotSlot screenshot={s} onOpen={setLightbox} />
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

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-8 cursor-zoom-out"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/80 hover:bg-card border border-card-border flex items-center justify-center text-foreground transition-all"
            aria-label="Cerrar"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 22 }}>close</span>
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightbox.src}
            alt={lightbox.caption}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-card/80 border border-card-border">
            <span className="text-sm text-foreground/90 font-medium">{lightbox.caption}</span>
          </div>
        </div>
      )}
    </Slide>
  );
}

function ScreenshotSlot({
  screenshot,
  large,
  onOpen,
}: {
  screenshot: { src: string; caption: string };
  large?: boolean;
  onOpen: (s: { src: string; caption: string }) => void;
}) {
  if (screenshot.src) {
    return (
      <button
        type="button"
        onClick={() => onOpen(screenshot)}
        className="group relative w-full h-full block cursor-zoom-in"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={screenshot.src}
          alt={screenshot.caption}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <div className="absolute bottom-0 inset-x-0 px-3 py-2 bg-gradient-to-t from-black/80 to-transparent">
          <span className="text-xs text-foreground/90 font-medium">{screenshot.caption}</span>
        </div>
        <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/50 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="material-symbols-outlined text-white" style={{ fontSize: 14 }}>zoom_in</span>
        </div>
      </button>
    );
  }
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
