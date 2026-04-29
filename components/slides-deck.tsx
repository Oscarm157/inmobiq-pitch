"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { slideVeqCategories, glossary } from "@/lib/data";

interface SlidesDeckProps {
  children: React.ReactNode[];
  storageKey?: string;
}

export function SlidesDeck({ children, storageKey = "inmobiq-pitch-slide" }: SlidesDeckProps) {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [, setIsAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [glossaryOpen, setGlossaryOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const total = children.length;

  useEffect(() => {
    const saved = sessionStorage.getItem(storageKey);
    if (saved) setCurrent(parseInt(saved, 10));
    setMounted(true);
  }, [storageKey]);

  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= total) return;
      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [total]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (mounted) sessionStorage.setItem(storageKey, String(current));
  }, [current, mounted, storageKey]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      if (e.key === "Home") { e.preventDefault(); goTo(0); }
      if (e.key === "End") { e.preventDefault(); goTo(total - 1); }
      if (e.key === "f" || e.key === "F") { toggleFullscreen(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, goTo, total, toggleFullscreen]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    Array.from(container.children).forEach((slideWrapper) => {
      const scrollable = slideWrapper.firstElementChild;
      if (scrollable) scrollable.scrollTop = 0;
    });
  }, [current]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onTouchStart = (e: TouchEvent) => {
      touchStart.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (touchStart.current === null || touchStartY.current === null) return;
      const diffX = touchStart.current - e.changedTouches[0].clientX;
      const diffY = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(diffX) > 80 && Math.abs(diffX) > Math.abs(diffY) * 2) {
        if (diffX > 0) next();
        else prev();
      }
      touchStart.current = null;
      touchStartY.current = null;
    };
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [next, prev]);

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  if (!mounted) return null;

  return (
    <div ref={containerRef} className="relative w-screen h-screen overflow-x-hidden bg-background">
      {children.map((child, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-background transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            i === current
              ? "opacity-100 translate-x-0 pointer-events-auto"
              : i < current
              ? "opacity-0 -translate-x-full pointer-events-none"
              : "opacity-0 translate-x-full pointer-events-none"
          }`}
          aria-hidden={i !== current}
        >
          {child}
        </div>
      ))}

      {/* Top scrim — keeps controls readable over any slide background */}
      <div
        className="absolute top-0 left-0 right-0 z-40 pointer-events-none h-20 sm:h-24"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.55) 55%, transparent 100%)",
        }}
      />

      {/* Top-left: brand + home button */}
      <div
        className="absolute top-0 left-0 z-50 flex items-center gap-3 sm:gap-4 px-3 sm:px-6 py-3 sm:py-4"
        style={{ paddingTop: "max(0.75rem, env(safe-area-inset-top))" }}
      >
        <button
          onClick={() => goTo(0)}
          aria-label="Ir al inicio"
          className="flex items-center transition-opacity hover:opacity-100"
        >
          <Image
            src="/logo-inmobiq-white.png"
            alt="Inmobiq"
            width={260}
            height={80}
            priority
            className="h-7 sm:h-9 w-auto"
          />
        </button>
        {current > 0 && (
          <button
            onClick={() => goTo(0)}
            className="flex items-center gap-1 text-xs text-foreground/80 hover:text-foreground transition-all"
            aria-label="Volver al inicio"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>home</span>
            <span className="hidden sm:inline">Inicio</span>
          </button>
        )}
      </div>

      {/* Top-right: counter + nav + glossary + fullscreen */}
      <div
        className="absolute top-0 right-0 z-50 flex items-center gap-1.5 sm:gap-2 px-2 sm:px-5 py-3 sm:py-4"
        style={{ paddingTop: "max(0.75rem, env(safe-area-inset-top))" }}
      >
        <span className="text-[11px] sm:text-xs font-mono font-semibold text-foreground/85 tabular-nums px-2 py-1 rounded-md bg-black/40 ring-1 ring-white/10 backdrop-blur-sm">
          {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-0.5 rounded-lg bg-black/40 ring-1 ring-white/10 backdrop-blur-sm">
          <button
            onClick={prev}
            disabled={current === 0}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center text-foreground/85 hover:text-foreground hover:bg-white/10 disabled:opacity-25 disabled:cursor-not-allowed transition-all"
            aria-label="Anterior"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>chevron_left</span>
          </button>
          <button
            onClick={next}
            disabled={current === total - 1}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center text-foreground/85 hover:text-foreground hover:bg-white/10 disabled:opacity-25 disabled:cursor-not-allowed transition-all"
            aria-label="Siguiente"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>chevron_right</span>
          </button>
        </div>
        <button
          onClick={() => setGlossaryOpen((v) => !v)}
          className="flex items-center gap-1.5 px-2.5 sm:px-3 h-10 sm:h-11 rounded-lg text-foreground/85 hover:text-foreground bg-black/40 hover:bg-white/10 ring-1 ring-white/10 backdrop-blur-sm transition-all"
          title="Glosario de términos"
          aria-label="Glosario"
        >
          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>menu_book</span>
          <span className="text-xs font-medium hidden md:inline">Glosario</span>
        </button>
        <button
          onClick={toggleFullscreen}
          className="hidden sm:flex items-center gap-1.5 px-2.5 sm:px-3 h-10 sm:h-11 rounded-lg text-foreground/85 hover:text-foreground bg-black/40 hover:bg-white/10 ring-1 ring-white/10 backdrop-blur-sm transition-all"
          title="Fullscreen (F)"
          aria-label="Fullscreen"
        >
          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
            {isFullscreen ? "fullscreen_exit" : "fullscreen"}
          </span>
          <span className="text-xs font-medium hidden md:inline">
            {isFullscreen ? "Salir" : "Fullscreen"}
          </span>
        </button>
      </div>

      {/* Bottom scrim — keeps progress bar + badges readable */}
      <div
        className="absolute bottom-0 left-0 right-0 z-40 pointer-events-none h-20"
        style={{
          background:
            "linear-gradient(to top, rgba(10,10,10,0.8) 0%, rgba(10,10,10,0.4) 60%, transparent 100%)",
        }}
      />

      {/* Investor Category Badge */}
      {slideVeqCategories[current]?.length > 0 && (
        <div
          className="absolute left-3 sm:left-6 z-40 flex flex-wrap gap-1.5 pointer-events-none"
          style={{ bottom: "max(2.75rem, calc(env(safe-area-inset-bottom) + 2.5rem))" }}
        >
          {slideVeqCategories[current].map((cat) => (
            <span
              key={cat}
              className="px-2.5 py-1 rounded-md bg-accent/20 border border-accent/40 text-accent text-[10px] font-semibold uppercase tracking-wider backdrop-blur-sm"
            >
              {cat}
            </span>
          ))}
        </div>
      )}

      {/* Glossary panel */}
      <div
        className={`absolute top-0 right-0 h-full z-50 w-80 bg-[#111118] border-l border-card-border flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          glossaryOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-card-border">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-accent" style={{ fontSize: 18 }}>menu_book</span>
            <span className="text-sm font-semibold text-foreground uppercase tracking-[0.12em]">Glosario</span>
          </div>
          <button
            onClick={() => setGlossaryOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-muted hover:text-foreground hover:bg-card transition-all"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>close</span>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-4">
          {glossary.map((item) => (
            <div key={item.term} className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-accent uppercase tracking-[0.14em]">{item.term}</span>
              <span className="text-xs text-muted leading-relaxed">{item.def}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom progress */}
      <div
        className="absolute bottom-0 left-0 right-0 z-50 px-4 sm:px-6 py-3"
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      >
        <div className="h-1 bg-white/10 rounded-full overflow-hidden ring-1 ring-white/5">
          <div
            className="h-full bg-accent transition-all duration-500 ease-out rounded-full"
            style={{ width: `${((current + 1) / total) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
