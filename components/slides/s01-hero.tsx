import { Slide } from "../slide";
import { HeroWord, FadeStack, FadeItem } from "../ui/motion-primitives";
import { brand } from "@/lib/data";

export function S01Hero() {
  return (
    <Slide mode="dark" centered={true} className="relative overflow-hidden">
      {/* Grid bg + radial spotlight */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 900px 600px at 35% 50%, rgba(59,130,246,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left narrative */}
        <div className="lg:col-span-7">
          <FadeStack className="flex flex-col gap-6">
            <FadeItem>
              <span className="inline-block text-[11px] font-semibold tracking-[0.22em] uppercase text-accent">
                Presentación de Inversión · 2026
              </span>
            </FadeItem>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-bold leading-[1.02] text-foreground tracking-[-0.02em]">
              <HeroWord delay={0.2}>Inteligencia </HeroWord>
              <HeroWord delay={0.35}>inmobiliaria </HeroWord>
              <br className="hidden sm:block" />
              <HeroWord delay={0.55}>
                <em className="italic text-gradient-accent">curada</em>
              </HeroWord>
              <HeroWord delay={0.7}> para profesionales.</HeroWord>
            </h1>

            <FadeItem>
              <p className="text-lg sm:text-xl text-muted max-w-xl leading-relaxed mt-2">
                {brand.subline}
              </p>
            </FadeItem>

            <FadeItem>
              <div className="flex items-center gap-3 mt-6 text-xs uppercase tracking-[0.18em] text-accent-light/80">
                <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-accent-light" />
                <span>Para Grupo VEQ</span>
                <span className="text-muted-light">·</span>
                <span>{brand.city}</span>
              </div>
            </FadeItem>
          </FadeStack>
        </div>

        {/* Right — editorial geometric composition */}
        <div className="lg:col-span-5 relative hidden lg:block h-[460px]">
          <HeroGeometry />
        </div>
      </div>
    </Slide>
  );
}

function HeroGeometry() {
  return (
    <svg viewBox="0 0 420 460" className="w-full h-full">
      <defs>
        <linearGradient id="zoneGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="zoneGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.02" />
        </linearGradient>
        <filter id="blueGlow">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Stylized zone polygons — evoking Tijuana choropleth */}
      <polygon
        points="90,40 260,60 280,180 130,220 60,150"
        fill="url(#zoneGrad1)"
        stroke="#3b82f6"
        strokeOpacity="0.4"
        strokeWidth="1"
      />
      <polygon
        points="260,60 380,100 390,240 280,180"
        fill="url(#zoneGrad2)"
        stroke="#60a5fa"
        strokeOpacity="0.3"
        strokeWidth="1"
      />
      <polygon
        points="130,220 280,180 310,350 150,360 90,290"
        fill="url(#zoneGrad1)"
        stroke="#3b82f6"
        strokeOpacity="0.35"
        strokeWidth="1"
      />
      <polygon
        points="280,180 390,240 380,390 310,350"
        fill="url(#zoneGrad2)"
        stroke="#60a5fa"
        strokeOpacity="0.25"
        strokeWidth="1"
      />

      {/* Data points with glow */}
      <circle cx="180" cy="130" r="5" fill="#60a5fa" filter="url(#blueGlow)" className="pulse-dot" />
      <circle cx="320" cy="160" r="4" fill="#3b82f6" filter="url(#blueGlow)" />
      <circle cx="200" cy="280" r="5" fill="#60a5fa" filter="url(#blueGlow)" />
      <circle cx="340" cy="310" r="4" fill="#3b82f6" filter="url(#blueGlow)" />
      <circle cx="110" cy="200" r="3" fill="#93c5fd" />

      {/* Connecting lines */}
      <line x1="180" y1="130" x2="320" y2="160" stroke="#3b82f6" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="2 4" />
      <line x1="320" y1="160" x2="340" y2="310" stroke="#3b82f6" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="2 4" />
      <line x1="200" y1="280" x2="340" y2="310" stroke="#3b82f6" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="2 4" />
    </svg>
  );
}
