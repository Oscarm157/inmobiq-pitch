"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface SlidesDeckProps {
  children: React.ReactNode[];
  storageKey?: string;
}

export function SlidesDeck({ children, storageKey = "inmobiq-pitch-slide" }: SlidesDeckProps) {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [, setIsAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);
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
          className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
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

      {/* Top-left: brand + home button */}
      <div
        className="absolute top-0 left-0 z-50 flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-4"
        style={{ paddingTop: "max(0.75rem, env(safe-area-inset-top))" }}
      >
        <span className="font-semibold text-sm tracking-widest text-foreground/70 uppercase">
          INMOBIQ
        </span>
        {current > 0 && (
          <button
            onClick={() => goTo(0)}
            className="flex items-center gap-1 text-xs text-concrete hover:text-foreground transition-all"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>home</span>
            <span className="hidden sm:inline">Inicio</span>
          </button>
        )}
      </div>

      {/* Top-right: counter + nav + fullscreen */}
      <div
        className="absolute top-0 right-0 z-50 flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-3 sm:py-4"
        style={{ paddingTop: "max(0.75rem, env(safe-area-inset-top))" }}
      >
        <span className="text-xs font-mono text-concrete tabular-nums">
          {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-1">
          <button
            onClick={prev}
            disabled={current === 0}
            className="w-11 h-11 rounded-lg flex items-center justify-center text-concrete hover:text-foreground hover:bg-card disabled:opacity-20 disabled:cursor-not-allowed transition-all"
            aria-label="Anterior"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>chevron_left</span>
          </button>
          <button
            onClick={next}
            disabled={current === total - 1}
            className="w-11 h-11 rounded-lg flex items-center justify-center text-concrete hover:text-foreground hover:bg-card disabled:opacity-20 disabled:cursor-not-allowed transition-all"
            aria-label="Siguiente"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>chevron_right</span>
          </button>
        </div>
        <button
          onClick={toggleFullscreen}
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-concrete hover:text-foreground hover:bg-card transition-all"
          title="Fullscreen (F)"
        >
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
            {isFullscreen ? "fullscreen_exit" : "fullscreen"}
          </span>
          <span className="text-xs font-medium hidden md:inline">
            {isFullscreen ? "Salir" : "Fullscreen"}
          </span>
        </button>
      </div>

      {/* Bottom progress */}
      <div
        className="absolute bottom-0 left-0 right-0 z-50 px-6 py-3"
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      >
        <div className="h-0.5 bg-card-border rounded-full overflow-hidden">
          <div
            className="h-full bg-accent transition-all duration-500 ease-out rounded-full"
            style={{ width: `${((current + 1) / total) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
