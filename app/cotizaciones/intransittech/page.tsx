import { brand } from "@/lib/data";
import { PrintButton } from "./print-button";

const CLIENT = "Intransit Tech";
const ISSUED = "2026-04-23";
const VALID = "2026-05-08";
const FOLIO = "COT-2026-0002";

const USD_TOTAL = 700;
const USD_DEPOSIT = Math.round(USD_TOTAL * 0.5);

const fmtUsd = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

const fmtDate = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("es-MX", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

const FEATURES = [
  {
    title: "Diseño profesional custom",
    detail: "Rápido, moderno y adaptado a celulares y computadoras.",
  },
  {
    title: "Estructura enfocada en servicios",
    detail: "Arquitectura orientada a los servicios de mayor demanda.",
  },
  {
    title: "Páginas por industria optimizadas para SEO",
    detail: "Contenido específico por sector para capturar búsquedas calificadas.",
  },
  {
    title: "Formularios inteligentes",
    detail: "Capturan información de contacto lista para seguimiento comercial.",
  },
  {
    title: "Click-to-call y contacto visible",
    detail: "Botones persistentes para que el prospecto llame o escriba en un tap.",
  },
  {
    title: "Blog integrado",
    detail: "Motor de contenido educativo para posicionamiento orgánico en Google.",
  },
  {
    title: "Velocidad de carga optimizada",
    detail: "Preparado para rankear en búsquedas y convertir en móvil.",
  },
  {
    title: "Herramientas de medición desde día 1",
    detail: "Google Analytics 4 y Meta Pixel integrados al lanzamiento.",
  },
];

const PAGES = [
  { name: "Home", detail: "Hero, proceso, testimonios, formulario" },
  { name: "Servicio principal", detail: "Explicación, calculadora, FAQ" },
  { name: "Otros servicios", detail: "Sub-servicios y casos de uso complementarios" },
  { name: "Industrias", detail: "Páginas por sector optimizadas para SEO" },
  { name: "Blog / Recursos", detail: "Motor de tráfico orgánico" },
  { name: "Contacto / Aplicar", detail: "Formulario, mapa, agente IA" },
  { name: "Sobre Nosotros", detail: "Historia, equipo, fotos reales" },
];

export default function Page() {
  return (
    <main className="slide-light min-h-screen w-full text-foreground">
      {/* Toolbar */}
      <div className="no-print sticky top-0 z-20 border-b border-card-border bg-background/85 backdrop-blur">
        <div className="max-w-[900px] mx-auto px-6 py-3 flex items-center justify-between">
          <div className="text-xs uppercase tracking-[0.22em] font-semibold text-muted">
            Cotización · {CLIENT}
          </div>
          <PrintButton />
        </div>
      </div>

      {/* ─────────── PAGE 1 ─────────── */}
      <article className="doc-page max-w-[900px] mx-auto px-8 sm:px-12 py-10">
        {/* Encabezado */}
        <header className="flex items-start justify-between gap-6 pb-7 border-b border-card-border">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold tracking-tight text-primary">
                {brand.name}
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
            </div>
            <p className="mt-1 text-xs text-muted max-w-xs leading-snug">
              {brand.tagline}
            </p>
          </div>
          <div className="text-right">
            <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-muted">
              Cotización
            </div>
            <div className="mt-1 font-mono text-base text-primary">{FOLIO}</div>
            <dl className="mt-2 text-xs text-muted grid grid-cols-[auto_auto] gap-x-3 gap-y-0.5 justify-end">
              <dt className="text-right">Emitida</dt>
              <dd className="text-foreground tabular-nums text-right">{fmtDate(ISSUED)}</dd>
              <dt className="text-right">Vigencia</dt>
              <dd className="text-foreground tabular-nums text-right">{fmtDate(VALID)}</dd>
            </dl>
          </div>
        </header>

        {/* Partes */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-7 border-b border-card-border">
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-muted mb-2">
              De
            </div>
            <div className="text-sm text-foreground font-semibold">{brand.founder}</div>
            <div className="text-sm text-muted">Fundador · {brand.name}</div>
            <div className="text-sm text-muted">oscar@{brand.url}</div>
            <div className="text-sm text-muted">{brand.url}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-muted mb-2">
              Preparado para
            </div>
            <div className="text-sm text-foreground font-semibold">{CLIENT}</div>
            <div className="text-sm text-muted">Posicionamiento Digital · Sitio Web</div>
          </div>
        </section>

        {/* Intro */}
        <section className="pt-7">
          <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-accent">
            Entregable · Fase de activación
          </div>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold leading-[1.08] tracking-[-0.015em] text-primary">
            Sitio Web <em className="italic text-gradient-accent">Profesional</em> para {CLIENT}
          </h1>
          <p className="mt-3 text-sm text-muted leading-relaxed max-w-2xl">
            Reemplazo completo del sitio actual por una pieza de comunicación profesional, rápida y
            preparada para convertir visitantes en leads desde el primer día. Diseño custom, estructura
            pensada en el recorrido del cliente y medición integrada desde el lanzamiento.
          </p>
        </section>

        {/* Por qué este cambio */}
        <section className="mt-6 rounded-xl bg-surface-muted/70 border-l-4 border-accent p-5">
          <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-accent mb-1.5">
            Por qué este cambio
          </div>
          <p className="text-sm text-foreground/90 leading-relaxed">
            Cuando un prospecto encuentra un sitio descuidado, simplemente cierra la página y busca
            otra opción. Un sitio profesional transforma la experiencia real en ventaja competitiva
            visible y el canal principal de captación de nuevos clientes.
          </p>
        </section>

        {/* Características */}
        <section className="mt-8">
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="text-xl font-bold text-primary tracking-tight">
              Características del sitio
            </h2>
            <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-muted">
              8 entregables
            </span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {FEATURES.map((f, i) => (
              <li
                key={f.title}
                className="rounded-xl border border-card-border bg-card p-3.5 flex gap-3"
              >
                <div className="shrink-0 w-7 h-7 rounded-lg bg-accent/10 text-accent flex items-center justify-center font-mono text-[11px] font-semibold tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground leading-tight">
                    {f.title}
                  </div>
                  <div className="text-xs text-muted mt-0.5 leading-snug">{f.detail}</div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-8 text-right text-[10px] uppercase tracking-[0.22em] text-muted/70">
          Página 1 · 2
        </div>
      </article>

      {/* ─────────── PAGE 2 ─────────── */}
      <article className="doc-page max-w-[900px] mx-auto px-8 sm:px-12 py-10 page-break">
        {/* Páginas del sitio */}
        <section>
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="text-xl font-bold text-primary tracking-tight">Páginas del sitio</h2>
            <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-muted">
              7 secciones
            </span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {PAGES.map((p) => (
              <li
                key={p.name}
                className="rounded-xl bg-card border border-card-border border-l-4 border-l-accent p-3.5"
              >
                <div className="text-sm font-semibold text-foreground">{p.name}</div>
                <div className="text-xs text-muted mt-0.5 leading-snug">{p.detail}</div>
              </li>
            ))}
          </ul>

          <div className="mt-5 rounded-xl bg-primary text-primary-foreground p-4 flex items-start gap-3">
            <span className="text-accent-light text-lg leading-none mt-0.5">◎</span>
            <div className="text-sm leading-relaxed">
              <span className="font-semibold text-accent-light">Objetivo principal:</span>{" "}
              diseñado para convertir visitantes en leads. El sitio web será el canal principal
              de captación de {CLIENT}.
            </div>
          </div>
        </section>

        {/* Inversión */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-primary tracking-tight mb-4">Inversión</h2>

          <div className="rounded-xl border border-card-border bg-card overflow-hidden">
            <div className="grid grid-cols-[1fr_auto] gap-4 p-5 border-b border-card-border">
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-accent mb-1">
                  Pago único · Entrega llave en mano
                </div>
                <div className="text-base font-semibold text-foreground">
                  Sitio Web Profesional — diseño, desarrollo y lanzamiento
                </div>
                <div className="text-xs text-muted mt-1 leading-snug max-w-md">
                  Incluye las 8 características descritas, las 7 páginas listadas y la configuración
                  de herramientas de tracking (Google Analytics 4 y Meta Pixel) sin costo adicional.
                </div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-3xl font-semibold tabular-nums text-gradient-accent">
                  {fmtUsd(USD_TOTAL)}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted">USD · total</div>
              </div>
            </div>
            <div className="grid grid-cols-2 divide-x divide-card-border">
              <div className="p-4">
                <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-muted">
                  Anticipo · al aprobar
                </div>
                <div className="mt-1 text-lg font-semibold tabular-nums text-foreground">
                  {fmtUsd(USD_DEPOSIT)} <span className="text-xs text-muted font-normal">USD</span>
                </div>
                <div className="text-[11px] text-muted">50% para iniciar producción</div>
              </div>
              <div className="p-4">
                <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-muted">
                  Liquidación · al entregar
                </div>
                <div className="mt-1 text-lg font-semibold tabular-nums text-foreground">
                  {fmtUsd(USD_TOTAL - USD_DEPOSIT)}{" "}
                  <span className="text-xs text-muted font-normal">USD</span>
                </div>
                <div className="text-[11px] text-muted">50% contra sitio publicado</div>
              </div>
            </div>
          </div>

          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-muted">
            <li>• Precios en dólares americanos (USD).</li>
            <li>• Vigencia de la cotización: hasta {fmtDate(VALID)}.</li>
            <li>• Pagos: transferencia bancaria o tarjeta (Stripe).</li>
            <li>• Factura disponible bajo solicitud.</li>
          </ul>
        </section>

        {/* Siguiente paso */}
        <section className="mt-8 rounded-xl bg-surface-muted border border-card-border p-5">
          <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-accent mb-2">
            Siguiente paso
          </div>
          <p className="text-sm text-foreground/90 leading-relaxed">
            Aprobar esta cotización y liquidar el anticipo de{" "}
            <span className="font-semibold text-foreground">{fmtUsd(USD_DEPOSIT)} USD</span> para
            agendar la reunión de inicio. En ella definiremos accesos a cuentas, contenidos
            prioritarios, material disponible (logo, fotos, documentos) y el calendario de
            implementación con fechas específicas por entregable.
          </p>
        </section>

        {/* Firma */}
        <footer className="mt-10 pt-6 border-t border-card-border flex items-end justify-between gap-6">
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-muted">
              Aceptación
            </div>
            <div className="mt-10 w-64 border-t border-primary/60" />
            <div className="mt-1 text-xs text-muted">Firma de {CLIENT}</div>
          </div>
          <div className="text-right">
            <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-muted">
              {brand.name}
            </div>
            <div className="mt-1 text-sm text-primary font-semibold">{brand.founder}</div>
            <div className="text-xs text-muted">{brand.url}</div>
          </div>
        </footer>

        <div className="mt-6 text-right text-[10px] uppercase tracking-[0.22em] text-muted/70">
          Página 2 · 2
        </div>
      </article>

      <style>{`
        @page { size: Letter; margin: 14mm 12mm; }
        @media print {
          .no-print { display: none !important; }
          .doc-page { padding: 0 !important; max-width: 100% !important; }
          .page-break { break-before: page; page-break-before: always; }
          html, body { background: #ffffff !important; }
        }
      `}</style>
    </main>
  );
}

