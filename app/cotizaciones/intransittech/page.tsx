import { PrintButton } from "./print-button";

const PROVIDER = {
  name: "Bravo Publicidad",
  tagline: "Estrategia digital y desarrollo web.",
  lead: "Oscar Amayoral",
  email: "oscar.amayoral@gmail.com",
};

const CLIENT = {
  name: "Intransit Technologies Corp",
  short: "Intransit Tech",
  descriptor: "Distribución de componentes electrónicos e industriales",
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
    title: "Diseño profesional y moderno",
    detail:
      "Un sitio que se ve bien tanto en computadora como en celular. Limpio, rápido y con la seriedad que espera un comprador industrial.",
  },
  {
    title: "Buscador de productos en la página principal",
    detail:
      "El visitante escribe el número de parte o una palabra clave y encuentra lo que busca sin tener que navegar.",
  },
  {
    title: "Una página por cada servicio especializado",
    detail:
      "Cada servicio (componentes difíciles de encontrar, componentes obsoletos, reparación de componentes, etc.) tiene su propia página, con la explicación clara y un formulario para cotizar.",
  },
  {
    title: "Formulario para pedir cotización",
    detail:
      "El cliente llena número de parte, cantidad, industria y sus datos. El correo llega directo al equipo de ventas para que respondan rápido.",
  },
  {
    title: "Formulario para vender inventario",
    detail:
      "Un apartado separado para proveedores que quieren venderle a Intransit su inventario excedente. Pueden escribir pieza por pieza o adjuntar una lista.",
  },
  {
    title: "Teléfono y botón de correo visibles todo el tiempo",
    detail:
      "El número (949) 481-7935 aparece fijo en el encabezado. El cliente puede llamar o escribir con un solo clic, incluso desde el celular.",
  },
  {
    title: "Sitio en español y en inglés",
    detail:
      "Con un botón arriba para cambiar de idioma. Aprovechamos el 'Se Habla Español' como ventaja real frente a la competencia.",
  },
  {
    title: "Medición de visitas desde el primer día",
    detail:
      "Para saber cuántas personas entran, de dónde vienen y qué buscan. Es la base para mejorar el sitio con datos, no suposiciones.",
  },
];

const PAGES = [
  {
    name: "Inicio",
    detail: "Presentación, buscador de productos, servicios principales e industrias que atienden.",
  },
  {
    name: "Nosotros",
    detail: "Historia de la empresa, experiencia, valores y por qué comprarles a ustedes.",
  },
  {
    name: "Servicios",
    detail:
      "Una página por servicio especializado: componentes difíciles de encontrar, componentes obsoletos, revisión de autenticidad, reparación, conversión de componentes, entre otros.",
  },
  {
    name: "Productos",
    detail: "Catálogo base organizado por categorías (ver la siguiente sección).",
  },
  {
    name: "Industrias",
    detail: "Una página por cada sector que atienden: aeroespacial, automotriz, robótica, médico, entre otros.",
  },
  {
    name: "Marcas que distribuimos",
    detail: "Listado de las marcas principales (Fanuc, Allen Bradley, Yaskawa, Samsung, Intel, entre otras).",
  },
  {
    name: "Vender inventario",
    detail: "Formulario dedicado para proveedores que quieren venderles inventario excedente.",
  },
  {
    name: "Contacto",
    detail: "Formulario de cotización, mapa, teléfonos y correos por área.",
  },
];

const CATEGORIES = [
  {
    name: "Componentes electrónicos",
    detail: "Semiconductores, componentes pasivos, discretos y de placa electrónica.",
  },
  {
    name: "Motores y control",
    detail: "Servomotores, encoders y controladores — marcas industriales principales.",
  },
  {
    name: "Sensores e instrumentación",
    detail: "Sensores, interruptores, medidores y transductores.",
  },
  {
    name: "Neumática e hidráulica",
    detail: "Válvulas, bombas, actuadores y accesorios.",
  },
  {
    name: "Robótica industrial",
    detail: "Partes y componentes para robots Fanuc, Kuka, Yaskawa y similares.",
  },
  {
    name: "Partes aeroespaciales y automotrices",
    detail: "Componentes certificados para fabricantes de sector aeroespacial y automotriz.",
  },
  {
    name: "Herramientas y adhesivos",
    detail: "Herramienta industrial, adhesivos técnicos y consumibles de taller.",
  },
  {
    name: "Equipos de comunicación y datos",
    detail: "Módulos de red, conectividad industrial y equipos de transmisión.",
  },
];

export default function Page() {
  return (
    <main className="slide-dark min-h-screen w-full text-foreground relative">
      {/* Fondo ambiente */}
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

      {/* ─────────── PÁGINA 1 ─────────── */}
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
            <p className="mt-1 text-xs text-muted max-w-xs leading-snug">{PROVIDER.tagline}</p>
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
            Propuesta · Sitio web nuevo
          </div>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold leading-[1.08] tracking-[-0.015em] text-foreground">
            Sitio web <em className="italic text-gradient-accent">profesional</em> para {CLIENT.short}
          </h1>
          <p className="mt-3 text-sm text-muted leading-relaxed max-w-2xl">
            Propuesta para construir un sitio web nuevo que reemplace al actual. Pensado para
            facilitarle al cliente lo que necesita: encontrar la parte que busca, entender qué
            servicios ofrecen, pedir una cotización y poder llamarlos de inmediato.
          </p>
        </section>

        {/* Qué incluye */}
        <section className="mt-7">
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground tracking-tight">Qué incluye el sitio</h2>
            <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-muted">
              8 puntos
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
          Página 1 · 3
        </div>
      </article>

      {/* ─────────── PÁGINA 2 ─────────── */}
      <article className="doc-page relative max-w-[900px] mx-auto px-8 sm:px-12 py-10 page-break">
        {/* Páginas del sitio */}
        <section>
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground tracking-tight">Páginas del sitio</h2>
            <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-muted">
              8 secciones
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
        </section>

        {/* Catálogo de productos por categorías */}
        <section className="mt-8">
          <div className="flex items-baseline justify-between mb-2">
            <h2 className="text-xl font-bold text-foreground tracking-tight">
              Catálogo de productos · por categorías
            </h2>
            <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-muted">
              8 categorías
            </span>
          </div>
          <p className="text-xs text-muted leading-relaxed max-w-2xl mb-4">
            No es un catálogo completo pieza por pieza — es un catálogo base con las familias de
            productos que ustedes ya saben que les piden con más frecuencia. El cliente entra,
            reconoce la categoría que necesita y llega al formulario para pedir cotización.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {CATEGORIES.map((c, i) => (
              <li
                key={c.name}
                className="rounded-xl bg-card border border-card-border p-3.5 flex gap-3"
              >
                <div className="shrink-0 w-7 h-7 rounded-lg bg-accent/15 text-accent flex items-center justify-center font-mono text-[11px] font-semibold tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground leading-tight">
                    {c.name}
                  </div>
                  <div className="text-xs text-muted mt-0.5 leading-snug">{c.detail}</div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Objetivo */}
        <section className="mt-6 rounded-xl bg-accent/10 border border-accent/30 p-4 flex items-start gap-3">
          <span className="text-accent text-lg leading-none mt-0.5">◎</span>
          <div className="text-sm leading-relaxed text-foreground/90">
            <span className="font-semibold text-accent">Objetivo del sitio:</span> que cada visita
            termine en una llamada o en un formulario de cotización recibido por el equipo de
            ventas de {CLIENT.short}.
          </div>
        </section>

        <div className="mt-8 text-right text-[10px] uppercase tracking-[0.22em] text-muted/70">
          Página 2 · 3
        </div>
      </article>

      {/* ─────────── PÁGINA 3 ─────────── */}
      <article className="doc-page relative max-w-[900px] mx-auto px-8 sm:px-12 py-10 page-break">
        {/* Inversión */}
        <section>
          <h2 className="text-xl font-bold text-foreground tracking-tight mb-4">Inversión</h2>

          <div className="rounded-xl border border-card-border bg-card overflow-hidden">
            <div className="grid grid-cols-[1fr_auto] gap-4 p-5 border-b border-card-border">
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-accent mb-1">
                  Pago único · Entrega completa
                </div>
                <div className="text-base font-semibold text-foreground">
                  Sitio web profesional — diseño, construcción y publicación
                </div>
                <div className="text-xs text-muted mt-1 leading-snug max-w-md">
                  Incluye los 8 puntos del sitio, las 8 páginas, el catálogo base por categorías,
                  versión en español e inglés, y las herramientas de medición activas desde el
                  primer día. Sin costos ocultos.
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
                <div className="text-[11px] text-muted">50% para comenzar el trabajo</div>
              </div>
              <div className="p-4">
                <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-muted">
                  Liquidación · al entregar
                </div>
                <div className="mt-1 text-lg font-semibold tabular-nums text-foreground">
                  {fmtUsd(USD_TOTAL - USD_DEPOSIT)}{" "}
                  <span className="text-xs text-muted font-normal">USD</span>
                </div>
                <div className="text-[11px] text-muted">50% cuando el sitio esté publicado</div>
              </div>
            </div>
          </div>

          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-muted">
            <li>• Precios en dólares americanos (USD).</li>
            <li>• Vigencia de la cotización: hasta el {fmtDate(VALID)}.</li>
            <li>• Formas de pago: transferencia o tarjeta.</li>
            <li>• Factura disponible si se solicita.</li>
          </ul>
        </section>

        {/* Siguiente paso */}
        <section className="mt-8 rounded-xl bg-surface-muted/60 border border-card-border p-5">
          <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-accent mb-2">
            Siguiente paso
          </div>
          <p className="text-sm text-foreground/90 leading-relaxed">
            Aprobar esta cotización y cubrir el anticipo de{" "}
            <span className="font-semibold text-foreground">{fmtUsd(USD_DEPOSIT)} USD</span> para
            agendar una reunión de arranque. En esa reunión definimos accesos (dominio, correos,
            sitio actual), qué servicios y categorías van primero, qué materiales ya tienen listos
            (logo, fotos, textos) y un calendario con fechas concretas para cada entrega.
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
          Página 3 · 3
        </div>
      </article>

      <style>{`
        @page { size: Letter; margin: 10mm 12mm; }
        @media print {
          .no-print { display: none !important; }
          html, body {
            background: #0a0a0a !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .doc-page {
            padding: 0 !important;
            max-width: 100% !important;
            break-inside: avoid-page;
            page-break-inside: avoid;
            break-after: page;
            page-break-after: always;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .doc-page:last-of-type {
            break-after: auto;
            page-break-after: auto;
          }
          /* Reset explicit page-break-before so it doesn't double-break */
          .page-break {
            break-before: auto !important;
            page-break-before: auto !important;
          }
          /* Don't split cards mid-content */
          article section, article ul li, article header, article footer {
            break-inside: avoid;
            page-break-inside: avoid;
          }
        }
      `}</style>
    </main>
  );
}
