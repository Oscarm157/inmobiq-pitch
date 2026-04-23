import { PrintButton } from "./print-button";

const PROVIDER = {
  name: "Bravo Publicidad",
  tagline: "Estrategia digital y desarrollo web para empresas B2B.",
  lead: "Oscar Amayoral",
  email: "oscar.amayoral@gmail.com",
};

const CLIENT = {
  name: "Intransit Technologies Corp",
  short: "Intransit Tech",
  descriptor: "Global components sourcing · Semiconductors · MRO",
};

const FOLIO = "COT-2026-0002";
const ISSUED = "2026-04-23";
const VALID = "2026-05-08";

const USD_TOTAL = 950;
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
    title: "Diseño profesional B2B",
    detail:
      "Moderno, rápido y responsive — que transmita la escala de distribuidor global que atiende aerospace, automotive y semiconductores.",
  },
  {
    title: "Part Search en el hero",
    detail:
      "Buscador de número de parte destacado en home: el 90% de los ingenieros llega buscando un SKU específico.",
  },
  {
    title: "Páginas por servicio optimizadas para SEO",
    detail:
      "Una landing dedicada por servicio (Counterfeit Screening, BGA Reballing, RoHS Conversion, Obsolete / Hard-to-Find, Cross Reference) con keywords de alta intención.",
  },
  {
    title: "Formulario RFQ (Request for Quote)",
    detail:
      "Captura número de parte, cantidad, industria y urgencia. Notificación automática al equipo comercial.",
  },
  {
    title: "Formulario Sell Your Excess Inventory",
    detail:
      "Flujo separado para proveedores que quieren vender inventario excedente — captura por BOM o lista.",
  },
  {
    title: "Click-to-call y soporte 24/7 visibles",
    detail:
      "Teléfono (949) 481-7935 persistente en header y CTA. El negocio vive de llamadas inmediatas.",
  },
  {
    title: "Bilingüe · Inglés y Español",
    detail:
      "Selector de idioma EN/ES aprovechando el 'Se Habla Español' como ventaja de venta frente a competidores.",
  },
  {
    title: "Medición profesional desde día 1",
    detail:
      "Google Analytics 4, Google Ads Conversion Tracking (AW-979437184 ya existe) y Meta Pixel integrados.",
  },
];

const PAGES = [
  {
    name: "Home",
    detail: "Hero con Part Search, propuesta de valor, industrias, CTA 24/7.",
  },
  {
    name: "About",
    detail: "Historia, capacidades globales, certificaciones y diferenciadores.",
  },
  {
    name: "Services",
    detail:
      "Hub + landing por servicio: Global Sourcing, Counterfeit Screening, BGA Reballing, Component Harvesting, RoHS / Leaded Conversion, Reeling / Lead Forming.",
  },
  {
    name: "Industries",
    detail:
      "Páginas por sector SEO-ready: Aerospace, Automotive, Robotics, Semiconductor, Medical, Industrial MRO.",
  },
  {
    name: "Line Card",
    detail:
      "Catálogo de marcas representadas (Fanuc, Allen Bradley, Yaskawa, Samsung, Intel, TI, Micron, Broadcom).",
  },
  {
    name: "Sell Your Excess Inventory",
    detail: "Landing dedicada con formulario para proveedores y BOM upload.",
  },
  {
    name: "Contact / RFQ",
    detail: "Formulario de cotización, mapa, correo de soporte técnico, 24/7 hotline.",
  },
];

export default function Page() {
  return (
    <main className="slide-dark min-h-screen w-full text-foreground relative">
      {/* Fondo ambiente · glow sutil */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none no-print" />
      <div
        className="absolute inset-0 pointer-events-none no-print"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 50% 0%, rgba(59,130,246,0.14) 0%, transparent 60%)",
        }}
      />

      {/* Toolbar */}
      <div className="no-print sticky top-0 z-20 border-b border-card-border bg-background/80 backdrop-blur">
        <div className="max-w-[900px] mx-auto px-6 py-3 flex items-center justify-between">
          <div className="text-xs uppercase tracking-[0.22em] font-semibold text-muted">
            Cotización · {CLIENT.short}
          </div>
          <PrintButton />
        </div>
      </div>

      {/* ─────────── PAGE 1 ─────────── */}
      <article className="doc-page relative max-w-[900px] mx-auto px-8 sm:px-12 py-10">
        {/* Encabezado */}
        <header className="flex items-start justify-between gap-6 pb-7 border-b border-card-border">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold tracking-tight text-foreground">
                {PROVIDER.name}
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
            </div>
            <p className="mt-1 text-xs text-muted max-w-xs leading-snug">
              {PROVIDER.tagline}
            </p>
          </div>
          <div className="text-right">
            <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-accent">
              Cotización
            </div>
            <div className="mt-1 font-mono text-base text-foreground">{FOLIO}</div>
            <dl className="mt-2 text-xs text-muted grid grid-cols-[auto_auto] gap-x-3 gap-y-0.5 justify-end">
              <dt className="text-right">Emitida</dt>
              <dd className="text-foreground/90 tabular-nums text-right">{fmtDate(ISSUED)}</dd>
              <dt className="text-right">Vigencia</dt>
              <dd className="text-foreground/90 tabular-nums text-right">{fmtDate(VALID)}</dd>
            </dl>
          </div>
        </header>

        {/* Partes */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-7 border-b border-card-border">
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-muted mb-2">
              De
            </div>
            <div className="text-sm text-foreground font-semibold">{PROVIDER.name}</div>
            <div className="text-sm text-muted">Responsable · {PROVIDER.lead}</div>
            <div className="text-sm text-muted">{PROVIDER.email}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-muted mb-2">
              Preparado para
            </div>
            <div className="text-sm text-foreground font-semibold">{CLIENT.name}</div>
            <div className="text-sm text-muted">{CLIENT.descriptor}</div>
          </div>
        </section>

        {/* Intro */}
        <section className="pt-7">
          <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-accent">
            Entregable · Activación digital
          </div>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold leading-[1.08] tracking-[-0.015em] text-foreground">
            Sitio Web <em className="italic text-gradient-accent">Profesional</em> para {CLIENT.short}
          </h1>
          <p className="mt-3 text-sm text-muted leading-relaxed max-w-2xl">
            Reemplazo del sitio actual por una pieza B2B construida alrededor del recorrido real del
            comprador técnico: búsqueda de número de parte, solicitud de cotización (RFQ) y soporte
            24/7. Diseño custom, estructura pensada para SEO por servicio e industria, y medición
            integrada desde el lanzamiento.
          </p>
        </section>

        {/* Por qué este cambio */}
        <section className="mt-6 rounded-xl bg-surface-muted/60 border-l-4 border-accent p-5">
          <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-accent mb-1.5">
            Por qué este cambio
          </div>
          <p className="text-sm text-foreground/90 leading-relaxed">
            En distribución de componentes, el comprador decide en segundos si un proveedor es serio
            o no. Un sitio con buscador de parte, páginas dedicadas por servicio especializado
            (Counterfeit Screening, BGA Reballing, Obsolete / Hard-to-Find) y un RFQ claro, convierte
            la experiencia técnica real de Intransit en ventaja competitiva visible y accionable.
          </p>
        </section>

        {/* Características */}
        <section className="mt-8">
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground tracking-tight">
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
                <div className="shrink-0 w-7 h-7 rounded-lg bg-accent/15 text-accent flex items-center justify-center font-mono text-[11px] font-semibold tabular-nums">
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
      <article className="doc-page relative max-w-[900px] mx-auto px-8 sm:px-12 py-10 page-break">
        {/* Páginas del sitio */}
        <section>
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground tracking-tight">Páginas del sitio</h2>
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

          <div className="mt-5 rounded-xl bg-accent/10 border border-accent/30 p-4 flex items-start gap-3">
            <span className="text-accent text-lg leading-none mt-0.5">◎</span>
            <div className="text-sm leading-relaxed text-foreground/90">
              <span className="font-semibold text-accent">Objetivo principal:</span>{" "}
              convertir cada visita técnica en RFQ o llamada. El sitio será el canal principal de
              captación de nuevos compradores globales de {CLIENT.short}.
            </div>
          </div>
        </section>

        {/* Inversión */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-foreground tracking-tight mb-4">Inversión</h2>

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
                  Incluye las 8 características descritas, las 7 páginas listadas, versión bilingüe
                  EN/ES y configuración de tracking (GA4, Google Ads, Meta Pixel) sin costo adicional.
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
        <section className="mt-8 rounded-xl bg-surface-muted/60 border border-card-border p-5">
          <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-accent mb-2">
            Siguiente paso
          </div>
          <p className="text-sm text-foreground/90 leading-relaxed">
            Aprobar esta cotización y liquidar el anticipo de{" "}
            <span className="font-semibold text-foreground">{fmtUsd(USD_DEPOSIT)} USD</span> para
            agendar la reunión de inicio. Definiremos accesos (dominio, Google Ads, hosting actual),
            listado priorizado de servicios e industrias, activos disponibles (logo, line card,
            fotos) y el calendario de implementación con fechas por entregable.
          </p>
        </section>

        {/* Firma */}
        <footer className="mt-10 pt-6 border-t border-card-border flex items-end justify-between gap-6">
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-muted">
              Aceptación
            </div>
            <div className="mt-10 w-64 border-t border-foreground/40" />
            <div className="mt-1 text-xs text-muted">Firma de {CLIENT.short}</div>
          </div>
          <div className="text-right">
            <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-muted">
              {PROVIDER.name}
            </div>
            <div className="mt-1 text-sm text-foreground font-semibold">{PROVIDER.lead}</div>
            <div className="text-xs text-muted">{PROVIDER.email}</div>
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
          /* Preserve dark theme when exporting to PDF */
          html, body { background: #0a0a0a !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .doc-page { color-adjust: exact; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}</style>
    </main>
  );
}
