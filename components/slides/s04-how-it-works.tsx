import { Slide } from "../slide";
import { FadeStack, FadeItem } from "../ui/motion-primitives";

export function S04HowItWorks() {
  return (
    <Slide mode="dark" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 1100px 700px at 50% 30%, rgba(59,130,246,0.14) 0%, transparent 65%)",
        }}
      />

      <FadeStack className="relative z-10 flex flex-col gap-8">
        <FadeItem>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold tracking-[0.22em] text-accent">04</span>
            <span className="text-xs uppercase tracking-[0.18em] text-muted-light">Cómo funcionamos</span>
          </div>
        </FadeItem>

        <FadeItem>
          <h2 className="text-4xl sm:text-5xl md:text-[64px] font-bold leading-[1.02] text-foreground tracking-[-0.02em] max-w-5xl">
            De data cruda a <em className="italic text-gradient-accent">claridad</em> de mercado.
          </h2>
        </FadeItem>

        <FadeItem>
          <p className="text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
            La data inmobiliaria en México vive dispersa entre 10+ portales, redes sociales, WhatsApp y
            marketplaces. Nuestro pipeline curado convierte ese caos en un{" "}
            <em className="italic text-foreground/90">source of truth</em> para el profesional.
          </p>
        </FadeItem>

        {/* Source chaos — visual of fragmented inputs */}
        <FadeItem>
          <SourceChaos />
        </FadeItem>

        {/* Pipeline visual */}
        <FadeItem>
          <PipelineFlow />
        </FadeItem>

        {/* Blue ocean vs red ocean */}
        <FadeStack className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
          <FadeItem>
            <OceanCard
              kind="red"
              label="Océano rojo"
              title="Saturado"
              description="Portales de listings, CRMs, páginas amarillas. Competencia voraz, márgenes erosionados, diferenciación marginal."
              examples={["Inmuebles24", "Lamudi", "CRMs genéricos", "Vivanuncios"]}
            />
          </FadeItem>

          <FadeItem>
            <OceanCard
              kind="blue"
              label="Océano azul"
              title="Sin explorar"
              description="La capa de intelligence inmobiliaria para el profesional mexicano. Digitalizar lo que nadie ha digitalizado."
              examples={["Data curada", "Intelligence de zona", "AI co-piloto", "Decisiones basadas en datos"]}
              featured
            />
          </FadeItem>
        </FadeStack>

        <FadeItem>
          <div className="relative mt-4 pl-6 border-l-2 border-accent/60 max-w-4xl">
            <p className="italic text-xl sm:text-2xl text-foreground/90 leading-snug">
              &ldquo;No queremos ser otro CRM ni otro portal. Queremos digitalizar lo que
              nadie ha digitalizado en México.&rdquo;
            </p>
          </div>
        </FadeItem>
      </FadeStack>
    </Slide>
  );
}

// ---------------------------------------------------------------------------
// Pipeline
// ---------------------------------------------------------------------------

const stages = [
  {
    num: "01",
    icon: "download",
    title: "Recopilamos",
    sub: "15+ fuentes · portales · redes · INEGI",
    detail: "Analistas locales cruzan 10 portales inmobiliarios, Facebook Marketplace, grupos y WhatsApp. Demografía censal oficial.",
  },
  {
    num: "02",
    icon: "filter_alt",
    title: "Limpiamos",
    sub: "Dedup + normalización + validación",
    detail: "Reglas estrictas por categoría. Outliers removidos con IQR 2.0. Doble verificación humana.",
  },
  {
    num: "03",
    icon: "hub",
    title: "Transformamos",
    sub: "Zone assignment + AI enrichment",
    detail: "30 zonas canónicas + 500 variables INEGI + valuaciones con Claude.",
  },
  {
    num: "04",
    icon: "insights",
    title: "Procesamos",
    sub: "Intelligence + valuaciones + narrativas",
    detail: "Risk scoring multifactor. ADN de zona. Brújula AI. Comparadores.",
  },
];

function PipelineFlow() {
  return (
    <div className="rounded-2xl bg-card p-5 sm:p-7">
      {/* Stages grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-0 relative">
        {stages.map((s, i) => (
          <div key={s.num} className="relative flex flex-col items-start px-3 py-4 md:px-5">
            {/* Connector line between cards (hidden on mobile) */}
            {i < stages.length - 1 && (
              <div className="hidden md:block absolute top-[38px] left-full w-full h-px z-0">
                <svg width="100%" height="2" className="block">
                  <line
                    x1="0"
                    y1="1"
                    x2="100%"
                    y2="1"
                    stroke="#3b82f6"
                    strokeOpacity="0.5"
                    strokeWidth="1.5"
                    strokeDasharray="3 4"
                  />
                </svg>
                {/* Arrow */}
                <span
                  className="absolute -right-1.5 -top-[7px] text-accent"
                  style={{ lineHeight: 1 }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path d="M0 2 L8 6 L0 10 Z" fill="#3b82f6" opacity="0.6" />
                  </svg>
                </span>
              </div>
            )}

            <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/15 glow-accent-subtle mb-4">
              <span className="material-symbols-outlined text-accent" style={{ fontSize: 28 }}>
                {s.icon}
              </span>
            </div>

            <div className="text-[10px] font-mono font-semibold text-accent tracking-[0.24em] mb-1">
              {s.num}
            </div>
            <div className="text-xl sm:text-2xl font-semibold text-foreground leading-tight">
              {s.title}
            </div>
            <div className="text-xs text-accent-light mt-1.5 font-medium tracking-wide">
              {s.sub}
            </div>
            <div className="text-[11px] text-muted mt-2 leading-relaxed">{s.detail}</div>
          </div>
        ))}
      </div>

      {/* Pipeline output */}
      <div className="mt-6 pt-6 border-t border-card-border/60 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-muted font-semibold">
          <svg width="18" height="12" viewBox="0 0 18 12">
            <line x1="0" y1="6" x2="14" y2="6" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M14 2 L18 6 L14 10 Z" fill="#3b82f6" />
          </svg>
          <span>Output</span>
        </div>
        <div className="flex-1 relative rounded-xl bg-gradient-to-r from-accent/20 via-accent/10 to-transparent px-5 py-4 glow-accent-subtle">
          <div className="text-xl sm:text-2xl md:text-[26px] font-semibold text-foreground leading-tight">
            <span className="text-gradient-accent">Status actual</span> del mercado inmobiliario en México.
          </div>
          <div className="text-xs text-muted mt-1.5 uppercase tracking-[0.18em]">
            Un único source of truth para brokers e inmobiliarias
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Ocean cards
// ---------------------------------------------------------------------------

function OceanCard({
  kind,
  label,
  title,
  description,
  examples,
  featured,
}: {
  kind: "red" | "blue";
  label: string;
  title: string;
  description: string;
  examples: string[];
  featured?: boolean;
}) {
  const isRed = kind === "red";

  return (
    <div
      className={`relative overflow-hidden rounded-2xl p-6 sm:p-7 h-full ${
        featured ? "bg-card glow-accent" : "bg-card"
      }`}
    >
      {/* Wave/fluid background */}
      <svg
        className="absolute inset-x-0 bottom-0 w-full h-24 pointer-events-none"
        viewBox="0 0 400 80"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`wave-${kind}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              stopColor={isRed ? "#ef4444" : "#3b82f6"}
              stopOpacity={isRed ? "0.12" : "0.22"}
            />
            <stop
              offset="100%"
              stopColor={isRed ? "#ef4444" : "#3b82f6"}
              stopOpacity={isRed ? "0.02" : "0.04"}
            />
          </linearGradient>
        </defs>
        <path
          d="M0 40 C80 20, 160 60, 240 40 C320 20, 400 60, 400 40 L400 80 L0 80 Z"
          fill={`url(#wave-${kind})`}
        />
        <path
          d="M0 50 C80 30, 160 70, 240 50 C320 30, 400 70, 400 50 L400 80 L0 80 Z"
          fill={`url(#wave-${kind})`}
          opacity="0.5"
        />
      </svg>

      <div className="relative">
        <div className="flex items-center gap-2 mb-4">
          <span
            className={`w-2.5 h-2.5 rounded-full ${isRed ? "bg-danger" : "bg-accent pulse-dot"}`}
          />
          <span
            className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${
              isRed ? "text-danger/80" : "text-accent"
            }`}
          >
            {label}
          </span>
        </div>

        <h3
          className={`text-4xl sm:text-5xl font-semibold leading-tight mb-3 ${
            isRed ? "text-foreground/60" : "text-gradient-accent"
          }`}
        >
          {title}
        </h3>

        <p
          className={`text-sm leading-relaxed mb-5 ${
            isRed ? "text-muted/90" : "text-foreground/85"
          }`}
        >
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {examples.map((e) => (
            <span
              key={e}
              className={`text-[11px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-lg ${
                isRed
                  ? "bg-danger/10 text-danger/90 line-through decoration-danger/40"
                  : "bg-accent/15 text-accent-light"
              }`}
            >
              {e}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Source Chaos — fragmented input visualization
// ---------------------------------------------------------------------------

const chaosSources = [
  { label: "Inmuebles24", rot: -3, scale: 1.05, op: 0.9, type: "portal" },
  { label: "Lamudi", rot: 2, scale: 0.95, op: 0.75, type: "portal" },
  { label: "Facebook Marketplace", rot: -1.5, scale: 1.08, op: 0.95, type: "social" },
  { label: "Vivanuncios", rot: 3, scale: 0.9, op: 0.7, type: "portal" },
  { label: "MercadoLibre", rot: -2, scale: 1, op: 0.85, type: "portal" },
  { label: "WhatsApp brokers", rot: 4, scale: 1.02, op: 0.88, type: "social" },
  { label: "Grupos de FB", rot: -4, scale: 0.92, op: 0.7, type: "social" },
  { label: "Propiedades.com", rot: 1, scale: 0.95, op: 0.72, type: "portal" },
  { label: "Casas y Terrenos", rot: -2.5, scale: 0.98, op: 0.78, type: "portal" },
  { label: "Instagram DMs", rot: 3.5, scale: 0.92, op: 0.65, type: "social" },
  { label: "Metros Cúbicos", rot: -1, scale: 0.9, op: 0.7, type: "portal" },
  { label: "Trovit", rot: 2.5, scale: 0.88, op: 0.65, type: "portal" },
  { label: "EasyBroker", rot: -3.5, scale: 0.95, op: 0.72, type: "portal" },
  { label: "Clasificados locales", rot: 1.5, scale: 0.9, op: 0.6, type: "social" },
  { label: "INEGI 2020", rot: 0, scale: 1.1, op: 1, type: "official" },
];

function SourceChaos() {
  return (
    <div className="relative rounded-2xl bg-gradient-to-b from-card/40 to-card/10 p-5 sm:p-6 overflow-hidden">
      {/* Diagonal noise bars — chaos energy */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(45deg, rgba(239,68,68,0.04) 0px, rgba(239,68,68,0.04) 1px, transparent 1px, transparent 10px)",
        }}
      />

      <div className="relative flex items-center gap-3 mb-4">
        <span className="w-2 h-2 rounded-full bg-danger pulse-dot" />
        <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-danger/80">
          Entrada · El caos actual
        </span>
        <span className="ml-auto text-[11px] uppercase tracking-[0.18em] text-muted">
          15+ fuentes fragmentadas
        </span>
      </div>

      <div className="relative flex flex-wrap gap-2 sm:gap-2.5 items-center justify-center py-3">
        {chaosSources.map((s) => {
          const tone =
            s.type === "official"
              ? "bg-success/15 border-success/30 text-success"
              : s.type === "social"
              ? "bg-danger/10 border-danger/20 text-foreground/80"
              : "bg-card border-card-border text-foreground/70";
          return (
            <span
              key={s.label}
              className={`inline-block px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-medium border ${tone} transition-transform duration-500 hover:scale-105 hover:opacity-100`}
              style={{
                transform: `rotate(${s.rot}deg) scale(${s.scale})`,
                opacity: s.op,
              }}
            >
              {s.label}
            </span>
          );
        })}
      </div>

      {/* Arrow down into pipeline */}
      <div className="relative flex items-center justify-center mt-4 gap-2 text-[10px] uppercase tracking-[0.22em] text-accent font-semibold">
        <span className="h-px w-16 bg-gradient-to-r from-transparent via-accent/60 to-accent" />
        <span>Entrada al pipeline</span>
        <svg width="14" height="14" viewBox="0 0 14 14" className="text-accent">
          <path d="M7 0 L7 11 M2 6 L7 11 L12 6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}
