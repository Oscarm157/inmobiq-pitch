import { Slide } from "../slide";
import { FadeStack, FadeItem } from "../ui/motion-primitives";

const publishers = [
  {
    icon: "person",
    title: "Vendedores",
    detail: "Dueños que venden directo, sin broker. Publican una vez, validados por teléfono + INE/CURP.",
  },
  {
    icon: "key",
    title: "Compradores / rentadores",
    detail: "Onboarding de 10 preguntas que perfila a fondo al usuario. El matching funciona como Tinder/Bumble: el sistema empareja al comprador con las propiedades que realmente encajan con su perfil.",
  },
  {
    icon: "badge",
    title: "Brokers",
    detail: "Publican su inventario completo. Los de Inmobiq lo hacen gratis como beneficio del plan.",
  },
];

const portalProblems = [
  {
    icon: "content_copy",
    title: "Listings duplicados",
    detail:
      "El mismo inmueble publicado por 4-6 brokers en cada portal. El usuario no sabe a quién contactar; los datos no se pueden agregar.",
  },
  {
    icon: "report",
    title: "Fichas incompletas",
    detail:
      "Falta m², año, geolocalización exacta, fotos reales. La data scrapeada es inútil para análisis serio de mercado.",
  },
  {
    icon: "search_off",
    title: "Sin matching real",
    detail:
      "Filtros básicos (precio, recámaras). Cero perfilamiento del comprador. La experiencia no ha evolucionado en 10 años.",
  },
];

const haviPrinciples = [
  {
    icon: "verified",
    title: "1 inmueble = 1 listing",
    detail:
      "Cada propiedad publicada una sola vez, validada por teléfono + INE/CURP. Dedup estructural sin importar quién la publique.",
    accent: true,
  },
  {
    icon: "fact_check",
    title: "Ficha 100% completa",
    detail:
      "Campos obligatorios: m² construcción y terreno, año, recámaras, baños, parking, geolocalización exacta, documentos legales, fotos verificadas.",
    accent: true,
  },
  {
    icon: "psychology",
    title: "Match score personalizado",
    detail:
      "Onboarding tipo quiz: estilo de vida, prioridades, presupuesto, horizonte. Cada propiedad recibe un score por usuario.",
  },
  {
    icon: "handyman",
    title: "Marketplace de servicios",
    detail:
      "Mudanza, mantenimiento, financiero, legal. El ciclo completo del comprador, no solo la transacción.",
  },
];

export function S13Havi() {
  return (
    <Slide mode="dark" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 1100px 700px at 50% 20%, rgba(59,130,246,0.10) 0%, transparent 70%)",
        }}
      />

      <FadeStack className="relative z-10 flex flex-col gap-7">
        <FadeItem>
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <span className="text-xs uppercase tracking-[0.18em] text-muted">Visión · portal propio de data</span>
            <a
              href="https://havi-ai.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 hover:bg-accent/25 border border-accent/40 text-accent font-semibold text-xs uppercase tracking-[0.18em] transition-all hover:-translate-y-0.5"
            >
              Ver Havi
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
            </a>
          </div>
        </FadeItem>

        <FadeItem>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.05] text-foreground tracking-[-0.015em]">
                Havi: El Tinder para encontrar tu próxima{" "}
                <span className="line-through decoration-[3px] text-muted/60">pareja</span>{" "}
                <em className="italic text-gradient-accent">casa.</em>
              </h2>
              <div className="mt-3 text-base sm:text-lg text-muted tracking-[-0.005em]">
                Portal abierto que genera data para Inmobiq.
              </div>
              <p className="mt-3 text-sm sm:text-base text-muted max-w-2xl leading-relaxed">
                Producto independiente donde compradores, vendedores y brokers publican. Su función primaria
                no es facturar. Es generar data first-party limpia, sin duplicados, completa, que alimenta
                la inteligencia de mercado de Inmobiq y reduce la dependencia del scraping.
              </p>
            </div>

            <div className="flex gap-5 sm:gap-7">
              <Kpi label="Launch" value="Mes 6" sub="siguiente etapa" />
              <div className="w-px bg-card-border" />
              <Kpi label="Publicadores" value="3 tipos" sub="abierto a todos" accent />
              <div className="w-px bg-card-border" />
              <Kpi label="Output" value="Data propia" sub="0 scraping de eso" accent />
            </div>
          </div>
        </FadeItem>

        {/* Who publishes */}
        <FadeItem>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-accent">
              Quién publica en Havi
            </span>
            <div className="flex-1 h-px bg-accent/20" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {publishers.map((p) => (
              <div key={p.title} className="rounded-xl bg-card p-5 border border-card-border/40">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-accent/15">
                    <span className="material-symbols-outlined text-accent" style={{ fontSize: 18 }}>
                      {p.icon}
                    </span>
                  </div>
                  <div className="text-base font-semibold text-foreground">{p.title}</div>
                </div>
                <div className="text-sm text-muted leading-relaxed">{p.detail}</div>
              </div>
            ))}
          </div>
        </FadeItem>

        {/* Loop diagram */}
        <FadeItem>
          <div className="rounded-2xl bg-card p-5 sm:p-6">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="text-xs uppercase tracking-[0.22em] font-semibold text-muted">
                El loop · cómo Havi alimenta Inmobiq
              </div>
              <span className="text-xs uppercase tracking-[0.18em] text-accent-light italic">
                Ningún competidor en MX tiene los dos lados
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-3">
              <LoopNode
                step="01"
                title="Havi (B2C abierto)"
                detail="Vendedores, compradores y brokers publican. Validación + dedup en el origen."
                color="emerald"
              />
              <LoopArrow label="Listings + búsquedas + perfiles" />
              <LoopNode
                step="02"
                title="Data first-party"
                detail="Inventario único, fichas completas, demand signals reales (no proxies de scraping)."
                color="accent"
              />
              <LoopArrow label="Alimenta el motor" />
              <LoopNode
                step="03"
                title="Inmobiq (B2B)"
                detail="KPIs, valuaciones y leads cualificados con data propia + INEGI + scraping complementario."
                color="accent"
              />
            </div>
          </div>
        </FadeItem>

        {/* Problems vs principles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <FadeItem>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-muted">
                Lo que rompen los portales actuales
              </span>
              <div className="flex-1 h-px bg-card-border" />
            </div>
            <div className="flex flex-col gap-2.5">
              {portalProblems.map((p) => (
                <div key={p.title} className="rounded-xl bg-card/50 border border-card-border/50 p-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="material-symbols-outlined text-muted-light/70" style={{ fontSize: 18 }}>
                      {p.icon}
                    </span>
                    <div className="text-base font-semibold text-foreground/90">{p.title}</div>
                  </div>
                  <div className="text-sm text-muted leading-relaxed">{p.detail}</div>
                </div>
              ))}
            </div>
          </FadeItem>

          <FadeItem>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-accent">
                Cómo Havi lo resuelve
              </span>
              <div className="flex-1 h-px bg-accent/20" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {haviPrinciples.map((s) => (
                <div
                  key={s.title}
                  className={`rounded-xl p-4 h-full ${s.accent ? "bg-card glow-accent-subtle" : "bg-card"}`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="material-symbols-outlined text-accent" style={{ fontSize: 18 }}>
                      {s.icon}
                    </span>
                    <div className="text-base font-semibold text-foreground leading-tight">{s.title}</div>
                  </div>
                  <div className="text-sm text-muted leading-relaxed">{s.detail}</div>
                </div>
              ))}
            </div>
          </FadeItem>
        </div>

        <FadeItem>
          <div className="flex flex-wrap items-center gap-6 text-xs text-muted pt-1">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="uppercase tracking-widest font-semibold text-accent">Build mes 6-12</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="uppercase tracking-widest font-semibold text-emerald-300/90">Launch mes 6</span>
            </span>
          </div>
        </FadeItem>
      </FadeStack>
    </Slide>
  );
}

function Kpi({
  label,
  value,
  sub,
  accent,
}: {
  label: string;
  value: string;
  sub: string;
  accent?: boolean;
}) {
  return (
    <div className="text-right">
      <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-muted">{label}</div>
      <div className={`text-2xl sm:text-3xl font-semibold tabular-nums mt-0.5 ${accent ? "text-gradient-accent" : "text-foreground"}`}>
        {value}
      </div>
      <div className="text-[10px] text-muted mt-0.5">{sub}</div>
    </div>
  );
}

function LoopNode({
  step,
  title,
  detail,
  color,
}: {
  step: string;
  title: string;
  detail: string;
  color: "accent" | "emerald";
}) {
  const ring = color === "emerald" ? "ring-emerald-400/30" : "ring-accent/30";
  const text = color === "emerald" ? "text-emerald-300" : "text-accent";
  return (
    <div className={`rounded-xl bg-foreground/5 p-4 ring-1 ${ring} h-full`}>
      <div className={`font-mono text-xs tracking-[0.22em] font-semibold ${text} mb-2`}>{step}</div>
      <div className="text-base font-semibold text-foreground mb-1.5 leading-tight">{title}</div>
      <div className="text-sm text-muted leading-relaxed">{detail}</div>
    </div>
  );
}

function LoopArrow({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-1.5 py-1">
      <div className="text-[11px] uppercase tracking-[0.16em] font-semibold text-muted text-center max-w-[160px] leading-snug">
        {label}
      </div>
      <span className="material-symbols-outlined text-accent rotate-90 lg:rotate-0" style={{ fontSize: 22 }}>
        arrow_forward
      </span>
    </div>
  );
}
