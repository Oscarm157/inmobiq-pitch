import { Slide } from "../slide";
import { FadeStack, FadeItem, HeroWord } from "../ui/motion-primitives";
import { brand } from "@/lib/data";

export function S16CTA() {
  return (
    <Slide mode="dark" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 1000px 600px at 50% 50%, rgba(59,130,246,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
        <FadeStack className="flex flex-col items-center gap-6">
          <FadeItem>
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-accent">
              15 / 15
            </span>
          </FadeItem>

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.02] text-foreground tracking-[-0.02em]">
            <HeroWord delay={0.1}>Construyamos juntos</HeroWord>
            <br />
            <HeroWord delay={0.4}>la capa de&nbsp;</HeroWord>
            <HeroWord delay={0.7}>
              <em className="italic text-gradient-accent">inteligencia</em>
            </HeroWord>
            <HeroWord delay={0.9}>&nbsp;inmobiliaria</HeroWord>
            <br />
            <HeroWord delay={1.1}>de México.</HeroWord>
          </h2>

          <FadeItem>
            <div className="flex flex-col items-center gap-1 mt-12">
              <div className="text-[11px] uppercase tracking-[0.22em] text-muted mb-1">
                Fundador
              </div>
              <div className="text-2xl font-semibold text-foreground">
                {brand.founder}
              </div>
              <div className="text-sm text-accent-light mt-1">oscar.amayoral@gmail.com</div>
              <div className="text-sm text-accent-light tabular-nums">664-731-26-95</div>
            </div>
          </FadeItem>

          <FadeItem>
            <div className="mt-10 text-[11px] uppercase tracking-[0.22em] text-muted">
              {brand.url}
            </div>
          </FadeItem>
        </FadeStack>
      </div>
    </Slide>
  );
}
