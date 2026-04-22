import { Slide } from "../slide";
import { HeroWord, FadeStack, FadeItem } from "../ui/motion-primitives";
import { TijuanaChoropleth } from "../ui/tijuana-choropleth";
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

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left narrative */}
        <div className="lg:col-span-5">
          <FadeStack className="flex flex-col gap-5">
            <FadeItem>
              <span className="inline-block text-[11px] font-semibold tracking-[0.22em] uppercase text-accent">
                Presentación de Inversión · 2026
              </span>
            </FadeItem>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold leading-[1.04] text-foreground tracking-[-0.02em]">
              <HeroWord delay={0.2}>Inteligencia </HeroWord>
              <HeroWord delay={0.35}>inmobiliaria </HeroWord>
              <br className="hidden sm:block" />
              <HeroWord delay={0.55}>
                <em className="italic text-gradient-accent">confiable y precisa</em>
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
                <span>Para Inversor</span>
                <span className="text-muted-light">·</span>
                <span>{brand.city}</span>
              </div>
            </FadeItem>
          </FadeStack>
        </div>

        {/* Right — choropleth real de Tijuana */}
        <div className="lg:col-span-7 relative hidden lg:block h-[520px]">
          <TijuanaChoropleth />
        </div>
      </div>
    </Slide>
  );
}
