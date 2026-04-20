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
            <HeroWord delay={0.1}>Construyamos </HeroWord>
            <HeroWord delay={0.3}>juntos </HeroWord>
            <br />
            <HeroWord delay={0.5}>la capa de </HeroWord>
            <HeroWord delay={0.7}>
              <em className="italic text-gradient-accent">intelligence</em>
            </HeroWord>
            <HeroWord delay={0.9}> inmobiliaria</HeroWord>
            <br />
            <HeroWord delay={1.1}>de México.</HeroWord>
          </h2>

          <FadeItem>
            <p className="text-lg text-muted max-w-2xl leading-relaxed mt-4">
              Llevamos un año construyendo el MVP. Tijuana ya está lista.
              El capital de Grupo VEQ activa el equipo, abre GDL y Cancún, y
              consolida Inmobiq como el estándar profesional del mercado mexicano.
            </p>
          </FadeItem>

          <FadeItem>
            <div className="flex flex-col sm:flex-row items-center gap-6 mt-10">
              <div className="text-left">
                <div className="text-[11px] uppercase tracking-[0.22em] text-muted mb-1">
                  Founder
                </div>
                <div className="text-2xl font-semibold text-foreground">
                  {brand.founder}
                </div>
                <div className="text-sm text-accent-light mt-1">oscar.amayoral@gmail.com</div>
              </div>

              <div className="hidden sm:block w-px h-14 bg-card-border" />

              <div className="text-left">
                <div className="text-[11px] uppercase tracking-[0.22em] text-muted mb-1">
                  Siguiente paso
                </div>
                <div className="text-2xl font-semibold text-foreground">
                  Due diligence + term sheet
                </div>
                <div className="text-sm text-muted mt-1">Ventana: esta semana</div>
              </div>
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
