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

const FOLIO = "384";
const ISSUED = "2026-04-23";
const VALID = "2026-05-15";

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

const BENEFITS = [
  {
    title: "Menos tiempo explicando lo básico",
    detail:
      "El sitio presenta sus servicios y categorías con claridad. El cliente llega a la llamada con contexto y ustedes se concentran en cerrar.",
  },
  {
    title: "Solicitudes de cotización ordenadas",
    detail:
      "Los formularios piden número de parte, cantidad, industria y contacto. Cada correo llega completo al equipo de ventas.",
  },
  {
    title: "Su teléfono siempre a un clic",
    detail:
      "El número aparece fijo en la parte superior. Desde celular, el cliente toca y marca — sin copiar ni pegar.",
  },
  {
    title: "Información real de qué buscan sus clientes",
    detail:
      "Cada mes podrán ver qué categorías y servicios se consultan más. Es información para decidir con base en datos.",
  },
];

const FEATURES = [
  {
    title: "Diseño profesional y moderno",
    detail: "Se ve bien en computadora y en celular. Transmite la seriedad de un distribuidor global.",
  },
  {
    title: "Buscador de productos en la página principal",
    detail: "El visitante escribe número de parte o palabra clave y llega directo a lo que necesita.",
  },
  {
    title: "Una página por cada servicio especializado",
    detail:
      "Componentes difíciles de encontrar, obsoletos, reparación, entre otros — cada uno con su explicación y botón de cotización.",
  },
  {
    title: "Formulario para pedir cotización",
    detail: "El correo llega estructurado al equipo de ventas para responder sin fricción.",
  },
  {
    title: "Formulario para vender inventario",
    detail: "Apartado separado para proveedores que quieren venderles inventario excedente.",
  },
  {
    title: "Teléfono y correo visibles siempre",
    detail: "(949) 481-7935 fijo en el encabezado — el negocio vive de llamadas inmediatas.",
  },
  {
    title: "Sitio en español y en inglés",
    detail: "Con botón para cambiar idioma. Aprovecha el 'Se Habla Español' como diferenciador real.",
  },
  {
    title: "Medición de visitas desde el primer día",
    detail: "Para saber cuántas personas entran, de dónde llegan y qué buscan.",
  },
];

const PAGES = [
  { name: "Inicio", detail: "Buscador, servicios y propuesta de valor." },
  { name: "Nosotros", detail: "Historia, experiencia y diferenciadores." },
  {
    name: "Servicios",
    detail: "Una página por cada servicio: hard-to-find, obsoletos, revisión, reparación, conversión.",
  },
  { name: "Productos", detail: "Catálogo base organizado por categorías (ver sección siguiente)." },
  { name: "Industrias", detail: "Aeroespacial, automotriz, robótica, médico, entre otros." },
  { name: "Marcas que distribuimos", detail: "Fanuc, Allen Bradley, Yaskawa, Samsung, Intel, entre otras." },
  { name: "Vender inventario", detail: "Formulario dedicado para proveedores." },
  { name: "Contacto", detail: "Formulario de cotización, mapa, teléfonos y correos." },
];

const CATEGORIES = [
  { name: "Componentes electrónicos", detail: "Semiconductores, pasivos, discretos y de placa." },
  { name: "Motores y control", detail: "Servomotores, encoders y controladores industriales." },
  { name: "Sensores e instrumentación", detail: "Sensores, interruptores, medidores y transductores." },
  { name: "Neumática e hidráulica", detail: "Válvulas, bombas, actuadores y accesorios." },
  { name: "Robótica industrial", detail: "Partes para robots Fanuc, Kuka, Yaskawa y similares." },
  { name: "Aeroespacial y automotriz", detail: "Componentes certificados para ambos sectores." },
  { name: "Herramientas y adhesivos", detail: "Herramienta industrial, adhesivos técnicos, consumibles." },
  { name: "Comunicación y datos", detail: "Módulos de red, conectividad y transmisión industrial." },
];

export default function Page() {
  return (
    <main className="slide-dark min-h-screen w-full text-foreground relative">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none no-print" />
      <div
        className="absolute inset-0 pointer-events-none no-print"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 50% 0%, rgba(59,130,246,0.14) 0%, transparent 60%)",
        }}
      />

      <div className="no-print sticky top-0 z-20 border-b border-card-border bg-background/80 backdrop-blur">
        <div className="max-w-[900px] mx-auto px-6 py-3 flex items-center justify-between">
          <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-muted">
            Cotización {FOLIO} · {CLIENT.short}
          </div>
          <PrintButton />
        </div>
      </div>

      {/* ─────────── PÁGINA 1 ─────────── */}
      <article className="doc-page relative max-w-[900px] mx-auto px-8 sm:px-12 py-8 text-[13px] leading-relaxed">
        {/* Encabezado */}
        <header className="flex items-start justify-between gap-6 pb-5 border-b border-card-border">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold tracking-tight text-foreground">
                {PROVIDER.name}
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
            </div>
            <p className="mt-0.5 text-[11px] text-muted max-w-xs leading-snug">{PROVIDER.tagline}</p>
          </div>
          <div className="text-right">
            <div className="text-[9px] uppercase tracking-[0.22em] font-semibold text-accent">
              Cotización
            </div>
            <div className="mt-0.5 font-mono text-base text-foreground">N.º {FOLIO}</div>
            <dl className="mt-1.5 text-[11px] text-muted grid grid-cols-[auto_auto] gap-x-3 gap-y-0.5 justify-end">
              <dt className="text-right">Emitida</dt>
              <dd className="text-foreground/90 tabular-nums text-right">{fmtDate(ISSUED)}</dd>
              <dt className="text-right">Vigencia</dt>
              <dd className="text-foreground/90 tabular-nums text-right">{fmtDate(VALID)}</dd>
            </dl>
          </div>
        </header>

        {/* Partes */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 py-5 border-b border-card-border">
          <div>
            <div className="text-[9px] uppercase tracking-[0.22em] font-semibold text-muted mb-1">
              De
            </div>
            <div className="text-[12px] text-foreground font-semibold">{PROVIDER.name}</div>
            <div className="text-[11px] text-muted">Responsable · {PROVIDER.lead}</div>
            <div className="text-[11px] text-muted">{PROVIDER.email}</div>
          </div>
          <div>
            <div className="text-[9px] uppercase tracking-[0.22em] font-semibold text-muted mb-1">
              Preparado para
            </div>
            <div className="text-[12px] text-foreground font-semibold">{CLIENT.name}</div>
            <div className="text-[11px] text-muted">{CLIENT.descriptor}</div>
          </div>
        </section>

        {/* Intro */}
        <section className="pt-5">
          <div className="text-[9px] uppercase tracking-[0.22em] font-semibold text-accent">
            Propuesta · Sitio web nuevo
          </div>
          <h1 className="mt-1.5 text-2xl sm:text-[28px] font-bold leading-[1.1] tracking-[-0.015em] text-foreground">
            Sitio web <em className="italic text-gradient-accent">profesional</em> para {CLIENT.short}
          </h1>
          <p className="mt-2 text-[12px] text-muted leading-relaxed max-w-2xl">
            Propuesta para construir un sitio web nuevo que reemplace al actual. Pensado para
            acompañar el trabajo que ya hacen a diario: atender compradores, cotizar partes y
            mantener el teléfono sonando.
          </p>
        </section>

        {/* Cómo facilita su día a día */}
        <section className="mt-5">
          <div className="flex items-baseline justify-between mb-2.5">
            <h2 className="text-[15px] font-bold text-foreground tracking-tight">
              Cómo les facilita el día a día
            </h2>
            <span className="text-[9px] uppercase tracking-[0.22em] font-semibold text-muted">
              Beneficios directos
            </span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {BENEFITS.map((b, i) => (
              <li
                key={b.title}
                className="rounded-xl bg-accent/5 border border-accent/20 p-3 flex gap-2.5"
              >
                <div className="shrink-0 w-6 h-6 rounded-lg bg-accent/20 text-accent flex items-center justify-center font-mono text-[10px] font-semibold tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="text-[12px] font-semibold text-foreground leading-tight">
                    {b.title}
                  </div>
                  <div className="text-[11px] text-muted mt-0.5 leading-snug">{b.detail}</div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Qué incluye */}
        <section className="mt-5">
          <div className="flex items-baseline justify-between mb-2.5">
            <h2 className="text-[15px] font-bold text-foreground tracking-tight">
              Qué incluye el sitio
            </h2>
            <span className="text-[9px] uppercase tracking-[0.22em] font-semibold text-muted">
              8 puntos
            </span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {FEATURES.map((f, i) => (
              <li
                key={f.title}
                className="rounded-xl border border-card-border bg-card p-2.5 flex gap-2.5"
              >
                <div className="shrink-0 w-5 h-5 rounded-md bg-accent/15 text-accent flex items-center justify-center font-mono text-[9px] font-semibold tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="text-[12px] font-semibold text-foreground leading-tight">
                    {f.title}
                  </div>
                  <div className="text-[10.5px] text-muted mt-0.5 leading-snug">{f.detail}</div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-5 text-right text-[9px] uppercase tracking-[0.22em] text-muted/70">
          Página 1 · 3
        </div>
      </article>

      {/* ─────────── PÁGINA 2 ─────────── */}
      <article className="doc-page relative max-w-[900px] mx-auto px-8 sm:px-12 py-8 text-[13px] leading-relaxed page-break">
        <section>
          <div className="flex items-baseline justify-between mb-2.5">
            <h2 className="text-[15px] font-bold text-foreground tracking-tight">Páginas del sitio</h2>
            <span className="text-[9px] uppercase tracking-[0.22em] font-semibold text-muted">
              8 secciones
            </span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {PAGES.map((p) => (
              <li
                key={p.name}
                className="rounded-lg bg-card border border-card-border border-l-4 border-l-accent px-3 py-2"
              >
                <div className="text-[12px] font-semibold text-foreground">{p.name}</div>
                <div className="text-[10.5px] text-muted mt-0.5 leading-snug">{p.detail}</div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-6">
          <div className="flex items-baseline justify-between mb-1">
            <h2 className="text-[15px] font-bold text-foreground tracking-tight">
              Catálogo de productos · por categorías
            </h2>
            <span className="text-[9px] uppercase tracking-[0.22em] font-semibold text-muted">
              8 familias
            </span>
          </div>
          <p className="text-[11px] text-muted leading-relaxed max-w-2xl mb-3">
            No es un catálogo pieza por pieza, es un catálogo base con las familias de productos
            que ustedes ya saben que les piden con más frecuencia. El cliente reconoce su
            categoría y llega al formulario para cotizar.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {CATEGORIES.map((c, i) => (
              <li
                key={c.name}
                className="rounded-lg bg-card border border-card-border px-3 py-2 flex gap-2.5"
              >
                <div className="shrink-0 w-5 h-5 rounded-md bg-accent/15 text-accent flex items-center justify-center font-mono text-[9px] font-semibold tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="text-[12px] font-semibold text-foreground leading-tight">
                    {c.name}
                  </div>
                  <div className="text-[10.5px] text-muted mt-0.5 leading-snug">{c.detail}</div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-5 rounded-xl bg-accent/10 border border-accent/30 p-3.5 flex items-start gap-2.5">
          <span className="text-accent text-base leading-none mt-0.5">◎</span>
          <div className="text-[12px] leading-relaxed text-foreground/90">
            <span className="font-semibold text-accent">Objetivo del sitio:</span> que cada visita
            termine en una llamada al (949) 481-7935 o en un formulario de cotización recibido
            por el equipo de ventas de {CLIENT.short}.
          </div>
        </section>

        <div className="mt-5 text-right text-[9px] uppercase tracking-[0.22em] text-muted/70">
          Página 2 · 3
        </div>
      </article>

      {/* ─────────── PÁGINA 3 ─────────── */}
      <article className="doc-page relative max-w-[900px] mx-auto px-8 sm:px-12 py-8 text-[13px] leading-relaxed page-break">
        <section>
          <h2 className="text-[15px] font-bold text-foreground tracking-tight mb-3">Inversión</h2>

          <div className="rounded-xl border border-card-border bg-card overflow-hidden">
            <div className="grid grid-cols-[1fr_auto] gap-4 p-4 border-b border-card-border">
              <div>
                <div className="text-[9px] uppercase tracking-[0.22em] font-semibold text-accent mb-0.5">
                  Pago único · Entrega completa
                </div>
                <div className="text-[13px] font-semibold text-foreground">
                  Sitio web profesional — diseño, construcción y publicación
                </div>
                <div className="text-[11px] text-muted mt-1 leading-snug max-w-md">
                  Incluye los 8 puntos, las 8 páginas, el catálogo base por categorías, versión en
                  español e inglés, y herramientas de medición activas desde el primer día. Sin
                  costos ocultos.
                </div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-2xl font-semibold tabular-nums text-gradient-accent">
                  {fmtUsd(USD_TOTAL)}
                </div>
                <div className="text-[9px] uppercase tracking-[0.2em] text-muted">USD · total</div>
              </div>
            </div>
            <div className="grid grid-cols-2 divide-x divide-card-border">
              <div className="p-3.5">
                <div className="text-[9px] uppercase tracking-[0.22em] font-semibold text-muted">
                  Anticipo · al aprobar
                </div>
                <div className="mt-0.5 text-[15px] font-semibold tabular-nums text-foreground">
                  {fmtUsd(USD_DEPOSIT)}{" "}
                  <span className="text-[10px] text-muted font-normal">USD</span>
                </div>
                <div className="text-[10px] text-muted">50% para iniciar</div>
              </div>
              <div className="p-3.5">
                <div className="text-[9px] uppercase tracking-[0.22em] font-semibold text-muted">
                  Liquidación · al entregar
                </div>
                <div className="mt-0.5 text-[15px] font-semibold tabular-nums text-foreground">
                  {fmtUsd(USD_TOTAL - USD_DEPOSIT)}{" "}
                  <span className="text-[10px] text-muted font-normal">USD</span>
                </div>
                <div className="text-[10px] text-muted">50% con el sitio publicado</div>
              </div>
            </div>
          </div>

          <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-[10.5px] text-muted">
            <li>• Precios en dólares americanos (USD).</li>
            <li>• Vigencia de la cotización: hasta el {fmtDate(VALID)}.</li>
            <li>• Formas de pago: transferencia o tarjeta.</li>
            <li>• Factura disponible a solicitud.</li>
          </ul>
        </section>

        <section className="mt-6 rounded-xl bg-surface-muted/60 border border-card-border p-4">
          <div className="text-[9px] uppercase tracking-[0.22em] font-semibold text-accent mb-1.5">
            Siguiente paso
          </div>
          <p className="text-[12px] text-foreground/90 leading-relaxed">
            Aprobar esta cotización y cubrir el anticipo de{" "}
            <span className="font-semibold text-foreground">{fmtUsd(USD_DEPOSIT)} USD</span> para
            agendar la reunión de arranque. En ella acordamos accesos, qué servicios y categorías
            van primero, materiales disponibles (logo, fotos, textos) y fechas concretas por
            entrega.
          </p>
        </section>

        <footer className="mt-8 pt-5 border-t border-card-border flex items-end justify-between gap-6">
          <div>
            <div className="text-[9px] uppercase tracking-[0.22em] font-semibold text-muted">
              Aceptación
            </div>
            <div className="mt-8 w-60 border-t border-foreground/40" />
            <div className="mt-1 text-[10.5px] text-muted">Firma de {CLIENT.short}</div>
          </div>
          <div className="text-right">
            <div className="text-[9px] uppercase tracking-[0.22em] font-semibold text-muted">
              {PROVIDER.name}
            </div>
            <div className="mt-0.5 text-[12px] text-foreground font-semibold">{PROVIDER.lead}</div>
            <div className="text-[10.5px] text-muted">{PROVIDER.email}</div>
          </div>
        </footer>

        <div className="mt-5 text-right text-[9px] uppercase tracking-[0.22em] text-muted/70">
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
          .page-break {
            break-before: auto !important;
            page-break-before: auto !important;
          }
          article section, article ul li, article header, article footer {
            break-inside: avoid;
            page-break-inside: avoid;
          }
        }
      `}</style>
    </main>
  );
}
