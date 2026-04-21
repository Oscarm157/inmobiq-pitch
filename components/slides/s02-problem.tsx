import { Slide } from "../slide";
import { FadeStack, FadeItem } from "../ui/motion-primitives";

export function S02Problem() {
  return (
    <Slide mode="dark">
      <FadeStack className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left narrative — 50% */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <FadeItem>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold tracking-[0.22em] text-accent">02</span>
              <span className="text-xs uppercase tracking-[0.18em] text-muted">El problema</span>
            </div>
          </FadeItem>

          <FadeItem>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] text-foreground tracking-[-0.015em]">
              En México, los brokers <em className="italic text-accent">trabajan a ciegas.</em>
            </h2>
          </FadeItem>

          <FadeItem>
            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-xl mt-2">
              Varios portales, marketplaces y grupos de redes sociales —
              información <em>diversa y difusa</em>, <em>generada por usuarios</em> y sin curar.
              Precios inflados, anuncios duplicados, cero forma de validar una zona con
              confianza. Cada broker profesional pierde horas cada semana verificando
              información que debería ser un servicio base.
            </p>
          </FadeItem>

          <FadeItem>
            <div className="relative mt-6 pl-6 border-l-2 border-accent/40 max-w-xl">
              <p className="italic text-xl sm:text-2xl text-foreground/90 leading-snug">
                &ldquo;Mientras en USA cualquier agente consulta MLS en 30 segundos, en México la claridad no existe.&rdquo;
              </p>
            </div>
          </FadeItem>
        </div>

        {/* Right data evidence — 50% */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          {problemCards.map((c) => (
            <FadeItem key={c.label}>
              <div className="rounded-2xl bg-card p-6 shadow-[0_12px_32px_-4px_rgba(0,0,0,0.45)] hover:-translate-y-0.5 transition-transform duration-300">
                <div className="flex items-center gap-4">
                  <span className="text-5xl sm:text-6xl font-semibold text-foreground leading-[0.95] tabular-nums shrink-0">
                    {c.number}
                  </span>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-foreground uppercase tracking-wider">
                      {c.label}
                    </div>
                    <div className="text-xs text-muted mt-1 leading-relaxed">{c.detail}</div>
                  </div>
                </div>
              </div>
            </FadeItem>
          ))}
        </div>
      </FadeStack>

      <FadeItem>
        <p className="mt-12 text-center text-sm italic text-muted">
          Llevamos años perdiendo tiempo en data sucia.
        </p>
      </FadeItem>
    </Slide>
  );
}

const problemCards = [
  {
    number: "4",
    label: "Portales desintegrados",
    detail: "Inmuebles24, Lamudi, Vivanuncios, MercadoLibre — sin estándar común, sin API pública confiable.",
  },
  {
    number: "8-12",
    label: "Horas / semana validando",
    detail: "Tiempo que cada broker profesional pierde cruzando datos entre portales para cerrar una venta.",
  },
  {
    number: "1-2",
    label: "Data pública confiable",
    detail: "Pueden existir intentos aislados, pero la cobertura real es mínima o nula. Nadie ha construido la capa de inteligencia que el broker mexicano necesita.",
  },
];
