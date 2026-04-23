import { Fragment } from "react";
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

const PRICE_SITIO = 800;
const PRICE_AGENTE = 150;
const PRICE_TRANSLATION = 200;
const USD_TOTAL = PRICE_SITIO + PRICE_AGENTE + PRICE_TRANSLATION;
const USD_DEPOSIT = Math.round(USD_TOTAL * 0.5);

const PHASES = [
  { num: "01", name: "Propuesta" },
  { num: "02", name: "Transformación" },
  { num: "03", name: "Contenido" },
  { num: "04", name: "Inversión" },
] as const;

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

const BEFORE = [
  "Visitantes cierran el sitio sin información clara de lo que ofrecen.",
  "Cada cotización empieza desde cero por teléfono o correo.",
  "Información dispersa entre correo, teléfono y el sitio actual.",
  "Sin forma de medir qué productos o servicios se consultan más.",
];

const AFTER = [
  "Catálogo y servicios claros a primera vista.",
  "Solicitudes estructuradas directo al correo de ventas.",
  "Un solo lugar con toda la información unificada.",
  "Reporte mensual con lo que más buscan sus clientes.",
];

const BENEFITS = [
  {
    icon: "schedule",
    title: "Menos tiempo explicando lo básico",
    detail:
      "El sitio presenta sus servicios y categorías con claridad. El cliente llega a la llamada con contexto y ustedes se concentran en cerrar.",
  },
  {
    icon: "mark_email_read",
    title: "Solicitudes de cotización ordenadas",
    detail:
      "Los formularios piden número de parte, cantidad, industria y contacto. Cada correo llega completo al equipo de ventas.",
  },
  {
    icon: "phone_in_talk",
    title: "Su teléfono siempre a un clic",
    detail:
      "El número aparece fijo en el encabezado. Desde celular, el cliente toca y marca sin copiar ni pegar.",
  },
  {
    icon: "insights",
    title: "Información real de qué buscan",
    detail:
      "Cada mes podrán ver qué categorías y servicios se consultan más. Datos para decidir, no para adivinar.",
  },
];

const FEATURES = [
  {
    icon: "design_services",
    title: "Diseño profesional y moderno",
    detail: "Se ve bien en computadora y en celular. Transmite la seriedad de un distribuidor global.",
  },
  {
    icon: "search",
    title: "Buscador de productos en la página principal",
    detail: "El visitante escribe número de parte o palabra clave y llega directo a lo que necesita.",
  },
  {
    icon: "view_list",
    title: "Todos los servicios presentados con claridad",
    detail:
      "Una sección dedicada a cada servicio (componentes difíciles de encontrar, obsoletos, revisión, reparación) con su explicación y botón para cotizar.",
  },
  {
    icon: "description",
    title: "Formulario para pedir cotización",
    detail: "El correo llega estructurado al equipo de ventas para responder sin fricción.",
  },
  {
    icon: "inventory_2",
    title: "Formulario para vender inventario",
    detail: "Apartado separado para proveedores que quieren venderles inventario excedente.",
  },
  {
    icon: "call",
    title: "Teléfono y correo visibles siempre",
    detail: "(949) 481-7935 fijo en el encabezado. El negocio vive de llamadas inmediatas.",
  },
  {
    icon: "monitoring",
    title: "Medición de visitas desde el primer día",
    detail: "Para saber cuántas personas entran, de dónde llegan y qué buscan.",
  },
];

const PAGES = [
  { name: "Inicio", detail: "Buscador, propuesta de valor y marcas destacadas." },
  { name: "Nosotros", detail: "Historia, experiencia y diferenciadores." },
  { name: "Servicios", detail: "Todos los servicios especializados agrupados por secciones dentro de una sola página." },
  { name: "Productos", detail: "Catálogo base organizado por categorías." },
  { name: "Industrias", detail: "Sectores que atienden, cada uno como sección dentro de una sola página." },
  { name: "Vender inventario", detail: "Formulario dedicado para proveedores con inventario excedente." },
  { name: "Contacto", detail: "Formulario de cotización, mapa, teléfonos y correos." },
];

const CATEGORIES = [
  { icon: "memory", name: "Componentes electrónicos", detail: "Semiconductores, pasivos, discretos y de placa." },
  { icon: "settings_input_component", name: "Motores y control", detail: "Servomotores, encoders y controladores industriales." },
  { icon: "sensors", name: "Sensores e instrumentación", detail: "Sensores, interruptores, medidores y transductores." },
  { icon: "water_drop", name: "Neumática e hidráulica", detail: "Válvulas, bombas, actuadores y accesorios." },
  { icon: "precision_manufacturing", name: "Robótica industrial", detail: "Partes para robots Fanuc, Kuka, Yaskawa y similares." },
  { icon: "flight", name: "Aeroespacial y automotriz", detail: "Componentes certificados para ambos sectores." },
  { icon: "construction", name: "Herramientas y adhesivos", detail: "Herramienta industrial, adhesivos técnicos y consumibles." },
  { icon: "hub", name: "Comunicación y datos", detail: "Módulos de red, conectividad y transmisión industrial." },
];

const AGENT_FEATURES = [
  {
    icon: "support_agent",
    title: "Atiende 24/7",
    detail: "Responde consultas básicas de inmediato, sin importar el horario ni la zona horaria.",
  },
  {
    icon: "category",
    title: "Reconoce categorías",
    detail: "El cliente pregunta por una categoría y el agente responde con las marcas que ustedes manejan.",
  },
  {
    icon: "contact_mail",
    title: "Captura datos del prospecto",
    detail: "Solicita nombre, empresa y correo para armar un lead listo para el equipo de ventas.",
  },
  {
    icon: "forward_to_inbox",
    title: "Avisa al equipo al instante",
    detail: "En cuanto captura un lead, envía notificación al correo de ventas para dar seguimiento.",
  },
];

const CHAT = [
  {
    from: "client" as const,
    text: "Buenas tardes. Estoy buscando servomotores para una línea de ensamble nueva. ¿Manejan?",
  },
  {
    from: "agent" as const,
    text:
      "Buenas tardes. Sí, manejamos servomotores de Fanuc, Yaskawa, Allen Bradley y Kuka, entre otras marcas. ¿Tiene ya una preferencia de marca o potencia?",
  },
  {
    from: "client" as const,
    text: "Aún no definimos marca. Necesitaríamos unas 10 unidades.",
  },
  {
    from: "agent" as const,
    text:
      "Con gusto. Para que un asesor de Intransit Tech le envíe opciones con tiempos y precios, ¿me comparte su nombre, empresa y un correo de contacto?",
  },
  {
    from: "client" as const,
    text: "Luis Herrera, Industrial ACX, luis@acx.mx",
  },
  {
    from: "agent" as const,
    text:
      "Gracias, Luis. Un asesor se pondrá en contacto con usted en las próximas horas. ¿Hay algo más en lo que pueda ayudarle mientras tanto?",
  },
];

export default function Page() {
  return (
    <main className="slide-light min-h-screen w-full text-foreground">
      {/* Toolbar — solo pantalla */}
      <div className="no-print sticky top-0 z-20 border-b border-card-border bg-background/80 backdrop-blur">
        <div className="max-w-[900px] mx-auto px-6 py-3 flex items-center justify-between">
          <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-muted">
            Cotización {FOLIO} · {CLIENT.short}
          </div>
          <PrintButton />
        </div>
      </div>

      {/* ─────────── PÁGINA 1 · PROPUESTA ─────────── */}
      <article className="doc-page relative max-w-[900px] mx-auto px-8 sm:px-12 py-8 text-[14px] leading-relaxed">
        <PhaseBar active={1} />

        {/* Encabezado */}
        <header className="flex items-start justify-between gap-6 pb-5 border-b border-card-border mt-5">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold tracking-tight text-primary">
                {PROVIDER.name}
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
            </div>
            <p className="mt-0.5 text-[12px] text-muted max-w-xs leading-snug">{PROVIDER.tagline}</p>
          </div>
          <div className="text-right">
            <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-accent">
              Cotización
            </div>
            <div className="mt-0.5 font-mono text-base text-primary">N.º {FOLIO}</div>
            <dl className="mt-1.5 text-[12px] text-muted grid grid-cols-[auto_auto] gap-x-3 gap-y-0.5 justify-end">
              <dt className="text-right">Emitida</dt>
              <dd className="text-foreground tabular-nums text-right">{fmtDate(ISSUED)}</dd>
              <dt className="text-right">Vigencia</dt>
              <dd className="text-foreground tabular-nums text-right">{fmtDate(VALID)}</dd>
            </dl>
          </div>
        </header>

        {/* Partes */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-5 border-b border-card-border">
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-muted mb-1">
              De
            </div>
            <div className="text-[13px] text-foreground font-semibold">{PROVIDER.name}</div>
            <div className="text-[12px] text-muted">Responsable · {PROVIDER.lead}</div>
            <div className="text-[12px] text-muted">{PROVIDER.email}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-muted mb-1">
              Preparado para
            </div>
            <div className="text-[13px] text-foreground font-semibold">{CLIENT.name}</div>
            <div className="text-[12px] text-muted">{CLIENT.descriptor}</div>
          </div>
        </section>

        {/* Intro */}
        <section className="pt-6">
          <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-accent">
            Propuesta · Sitio + Agente IA + Versión bilingüe
          </div>
          <h1 className="mt-1.5 text-[28px] sm:text-[32px] font-bold leading-[1.08] tracking-[-0.015em] text-primary">
            Sitio web <em className="italic text-gradient-accent">profesional</em> para {CLIENT.short}
          </h1>
          <p className="mt-2 text-[13px] text-muted leading-relaxed max-w-2xl">
            Propuesta para construir un sitio web nuevo que reemplace al actual, acompañado de un
            agente de ventas con inteligencia artificial que atiende consultas 24 horas, y la
            versión bilingüe del sitio en español e inglés.
          </p>
        </section>

        {/* Antes / Después */}
        <BeforeAfter />

        {/* Beneficios en el día a día */}
        <section className="mt-6">
          <SectionTitle
            icon="auto_awesome"
            title="Cómo les facilita el día a día"
            meta="4 beneficios"
          />
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {BENEFITS.map((b) => (
              <li
                key={b.title}
                className="rounded-xl bg-card border border-card-border p-3.5 flex gap-3"
              >
                <IconBadge icon={b.icon} />
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold text-foreground leading-tight">
                    {b.title}
                  </div>
                  <div className="text-[11.5px] text-muted mt-1 leading-snug">{b.detail}</div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <PageFooter num={1} />
      </article>

      {/* ─────────── PÁGINA 2 · TRANSFORMACIÓN ─────────── */}
      <article className="doc-page relative max-w-[900px] mx-auto px-8 sm:px-12 py-8 text-[14px] leading-relaxed page-break">
        <PhaseBar active={2} />

        <section className="mt-6">
          <SectionTitle icon="check_circle" title="Qué incluye el sitio" meta="7 puntos" />
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {FEATURES.map((f) => (
              <li
                key={f.title}
                className="rounded-xl border border-card-border bg-card p-3 flex gap-3"
              >
                <IconBadge icon={f.icon} />
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold text-foreground leading-tight">
                    {f.title}
                  </div>
                  <div className="text-[11.5px] text-muted mt-0.5 leading-snug">{f.detail}</div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-7">
          <SectionTitle icon="menu_book" title="Páginas del sitio" meta="7 secciones" />
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {PAGES.map((p) => (
              <li
                key={p.name}
                className="rounded-lg bg-card border border-card-border border-l-4 border-l-accent px-3 py-2.5"
              >
                <div className="text-[13px] font-semibold text-foreground">{p.name}</div>
                <div className="text-[11.5px] text-muted mt-0.5 leading-snug">{p.detail}</div>
              </li>
            ))}
          </ul>
        </section>

        <PageFooter num={2} />
      </article>

      {/* ─────────── PÁGINA 3 · CONTENIDO ─────────── */}
      <article className="doc-page relative max-w-[900px] mx-auto px-8 sm:px-12 py-8 text-[14px] leading-relaxed page-break">
        <PhaseBar active={3} />

        {/* Catálogo por categorías */}
        <section className="mt-6">
          <SectionTitle
            icon="category"
            title="Catálogo de productos · por categorías"
            meta="8 familias"
          />
          <p className="text-[12px] text-muted leading-relaxed max-w-2xl mb-3">
            Un catálogo base con las familias de productos que ustedes ya saben que les piden con
            más frecuencia. El cliente reconoce su categoría y llega al formulario para cotizar.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {CATEGORIES.map((c) => (
              <li
                key={c.name}
                className="rounded-lg bg-card border border-card-border px-3 py-2.5 flex gap-3"
              >
                <IconBadge icon={c.icon} small />
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold text-foreground leading-tight">
                    {c.name}
                  </div>
                  <div className="text-[11.5px] text-muted mt-0.5 leading-snug">{c.detail}</div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Agente de ventas IA */}
        <section className="mt-7">
          <SectionTitle
            icon="smart_toy"
            title="Agente de ventas con"
            emphasis="inteligencia artificial"
            meta="Incluido"
          />
          <p className="text-[12px] text-muted leading-relaxed max-w-2xl mb-3">
            Un asistente virtual integrado en el sitio que conversa con el visitante, reconoce qué
            categoría necesita, le dice qué marcas manejan ustedes y deja los datos listos para que
            un asesor humano cierre la venta.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Qué hace · cards en dark */}
            <ul className="grid grid-cols-1 gap-2">
              {AGENT_FEATURES.map((a) => (
                <li
                  key={a.title}
                  className="rounded-lg bg-primary text-primary-foreground border border-primary/30 p-3 flex gap-3"
                >
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-accent/20 text-accent-light flex items-center justify-center">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 18, fontVariationSettings: "'wght' 500" }}
                    >
                      {a.icon}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[13px] font-semibold leading-tight">{a.title}</div>
                    <div className="text-[11.5px] text-white/70 mt-0.5 leading-snug">{a.detail}</div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Mock de chat */}
            <ChatMock />
          </div>

          {/* Nota de integración */}
          <div className="mt-3 rounded-lg bg-accent/10 border border-accent/30 px-3 py-2.5 flex items-start gap-2.5">
            <span
              className="material-symbols-outlined text-accent shrink-0 mt-0.5"
              style={{ fontSize: 18, fontVariationSettings: "'wght' 600" }}
            >
              info
            </span>
            <div className="text-[11.5px] text-foreground/90 leading-snug">
              <span className="font-semibold text-primary">Requisito:</span> el agente necesita
              vincularse con una cuenta de <span className="font-semibold">ChatGPT (OpenAI)</span> o{" "}
              <span className="font-semibold">Gemini (Google)</span>. El costo de esa cuenta corre
              por parte de {CLIENT.short} y se configura durante la reunión de arranque. La
              configuración y el entrenamiento del agente sí están incluidos en esta cotización.
            </div>
          </div>
        </section>

        <PageFooter num={3} />
      </article>

      {/* ─────────── PÁGINA 4 · INVERSIÓN ─────────── */}
      <article className="doc-page relative max-w-[900px] mx-auto px-8 sm:px-12 py-8 text-[14px] leading-relaxed page-break">
        <PhaseBar active={4} />

        <section className="mt-6">
          <SectionTitle icon="payments" title="Inversión" />

          <div className="rounded-xl border border-card-border bg-card overflow-hidden">
            {/* Renglones */}
            <div className="divide-y divide-card-border">
              <div className="flex items-start gap-4 p-4">
                <IconBadge icon="language" />
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-semibold text-foreground">
                    Sitio web profesional
                  </div>
                  <div className="text-[11.5px] text-muted mt-0.5 leading-snug max-w-md">
                    Diseño, desarrollo y publicación. Incluye los 7 puntos, las 7 páginas y el
                    catálogo base por categorías.
                  </div>
                </div>
                <div className="text-right shrink-0 tabular-nums">
                  <div className="text-lg font-semibold text-foreground">{fmtUsd(PRICE_SITIO)}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted">USD</div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4">
                <IconBadge icon="support_agent" />
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-semibold text-foreground">
                    Agente de ventas con IA
                  </div>
                  <div className="text-[11.5px] text-muted mt-0.5 leading-snug max-w-md">
                    Configuración, entrenamiento con su catálogo y marcas, e integración al sitio.
                  </div>
                </div>
                <div className="text-right shrink-0 tabular-nums">
                  <div className="text-lg font-semibold text-foreground">{fmtUsd(PRICE_AGENTE)}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted">USD</div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4">
                <IconBadge icon="translate" />
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-semibold text-foreground">
                    Traducción y versión bilingüe
                  </div>
                  <div className="text-[11.5px] text-muted mt-0.5 leading-snug max-w-md">
                    Traducción de todo el contenido del sitio al inglés, selector de idioma visible
                    y mantenimiento de ambas versiones sincronizadas.
                  </div>
                </div>
                <div className="text-right shrink-0 tabular-nums">
                  <div className="text-lg font-semibold text-foreground">
                    {fmtUsd(PRICE_TRANSLATION)}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted">USD</div>
                </div>
              </div>
            </div>

            {/* Total · dark */}
            <div className="grid grid-cols-[1fr_auto] gap-4 p-4 border-t border-primary bg-primary text-primary-foreground">
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-accent-light mb-0.5">
                  Pago único · Entrega completa
                </div>
                <div className="text-[12px] text-white/70 leading-snug max-w-md">
                  Sin costos ocultos. Medición de visitas y capacitación del equipo incluidas desde
                  el primer día.
                </div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-3xl font-semibold tabular-nums text-accent-light">
                  {fmtUsd(USD_TOTAL)}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/60">
                  USD · total
                </div>
              </div>
            </div>

            {/* Anticipo / liquidación */}
            <div className="grid grid-cols-2 divide-x divide-card-border border-t border-card-border">
              <div className="p-4">
                <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-muted">
                  Anticipo · al aprobar
                </div>
                <div className="mt-0.5 text-lg font-semibold tabular-nums text-foreground">
                  {fmtUsd(USD_DEPOSIT)}{" "}
                  <span className="text-[10px] text-muted font-normal">USD</span>
                </div>
                <div className="text-[11px] text-muted">50% para iniciar</div>
              </div>
              <div className="p-4">
                <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-muted">
                  Liquidación · al entregar
                </div>
                <div className="mt-0.5 text-lg font-semibold tabular-nums text-foreground">
                  {fmtUsd(USD_TOTAL - USD_DEPOSIT)}{" "}
                  <span className="text-[10px] text-muted font-normal">USD</span>
                </div>
                <div className="text-[11px] text-muted">50% con todo publicado</div>
              </div>
            </div>
          </div>

          <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-[11.5px] text-muted">
            <li>• Precios en dólares americanos (USD).</li>
            <li>• Vigencia de la cotización: hasta el {fmtDate(VALID)}.</li>
            <li>• Formas de pago: transferencia o tarjeta.</li>
            <li>• Factura disponible a solicitud.</li>
          </ul>
        </section>

        <section className="mt-6 rounded-xl bg-surface-muted border border-card-border p-4">
          <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-accent mb-1.5">
            Siguiente paso
          </div>
          <p className="text-[13px] text-foreground/90 leading-relaxed">
            Aprobar esta cotización y cubrir el anticipo de{" "}
            <span className="font-semibold text-foreground">{fmtUsd(USD_DEPOSIT)} USD</span> para
            agendar la reunión de arranque. En ella acordamos accesos, qué servicios y categorías
            van primero, materiales disponibles (logo, fotos, textos) y fechas concretas por
            entrega.
          </p>
        </section>

        <footer className="mt-8 pt-5 border-t border-card-border flex items-end justify-between gap-6">
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-muted">
              Aceptación
            </div>
            <div className="mt-8 w-60 border-t border-primary/60" />
            <div className="mt-1 text-[11.5px] text-muted">Firma de {CLIENT.short}</div>
          </div>
          <div className="text-right">
            <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-muted">
              {PROVIDER.name}
            </div>
            <div className="mt-0.5 text-[13px] text-primary font-semibold">{PROVIDER.lead}</div>
            <div className="text-[11.5px] text-muted">{PROVIDER.email}</div>
          </div>
        </footer>

        <PageFooter num={4} />
      </article>

      <style>{`
        @page { size: Letter; margin: 10mm 12mm; }
        @media print {
          .no-print { display: none !important; }
          html, body {
            background: #ffffff !important;
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

/* ────────── Helpers locales ────────── */

function IconBadge({ icon, small = false }: { icon: string; small?: boolean }) {
  const size = small ? "w-8 h-8" : "w-10 h-10";
  const iconSize = small ? 18 : 22;
  return (
    <div
      className={`shrink-0 ${size} rounded-lg bg-accent/10 text-accent flex items-center justify-center`}
    >
      <span
        className="material-symbols-outlined"
        style={{ fontSize: iconSize, fontVariationSettings: "'wght' 500, 'FILL' 0" }}
      >
        {icon}
      </span>
    </div>
  );
}

function PhaseBar({ active }: { active: 1 | 2 | 3 | 4 }) {
  return (
    <div className="flex items-center gap-3 w-full">
      {PHASES.map((p, i) => {
        const idx = (i + 1) as 1 | 2 | 3 | 4;
        const done = idx < active;
        const current = idx === active;
        return (
          <Fragment key={p.num}>
            <div className="flex items-center gap-2 shrink-0">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono font-semibold tabular-nums ${
                  current
                    ? "bg-accent text-white"
                    : done
                    ? "bg-accent/20 text-accent"
                    : "bg-surface-muted text-muted"
                }`}
              >
                {p.num}
              </div>
              <span
                className={`text-[10.5px] uppercase tracking-[0.18em] font-semibold whitespace-nowrap ${
                  current ? "text-primary" : done ? "text-accent" : "text-muted"
                }`}
              >
                {p.name}
              </span>
            </div>
            {i < PHASES.length - 1 && (
              <div
                className={`h-px flex-1 min-w-[10px] ${
                  done ? "bg-accent/40" : "bg-card-border"
                }`}
              />
            )}
          </Fragment>
        );
      })}
    </div>
  );
}

function SectionTitle({
  icon,
  title,
  meta,
  emphasis,
}: {
  icon: string;
  title: string;
  meta?: string;
  emphasis?: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-primary text-primary-foreground px-4 py-2.5 mb-4 gap-3">
      <div className="flex items-center gap-2.5 min-w-0">
        <span
          className="material-symbols-outlined text-accent shrink-0"
          style={{ fontSize: 20, fontVariationSettings: "'wght' 600" }}
        >
          {icon}
        </span>
        <h2 className="text-[16px] font-bold tracking-tight leading-tight">
          {title}
          {emphasis && (
            <>
              {" "}
              <em className="italic text-accent-light font-bold">{emphasis}</em>
            </>
          )}
        </h2>
      </div>
      {meta && (
        <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-white/60 shrink-0 whitespace-nowrap">
          {meta}
        </span>
      )}
    </div>
  );
}

function BeforeAfter() {
  return (
    <section className="mt-6 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-3 items-stretch">
      {/* Antes */}
      <div className="rounded-xl border border-card-border bg-surface-muted/70 p-4">
        <div className="flex items-center gap-2 mb-2">
          <span
            className="material-symbols-outlined text-muted"
            style={{ fontSize: 20, fontVariationSettings: "'wght' 500" }}
          >
            remove_circle
          </span>
          <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-muted">Hoy</div>
        </div>
        <ul className="space-y-1.5">
          {BEFORE.map((t) => (
            <li key={t} className="text-[12px] text-muted leading-snug flex gap-2">
              <span className="text-muted/50 mt-0.5">—</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Flecha */}
      <div className="hidden md:flex items-center justify-center px-1">
        <span
          className="material-symbols-outlined text-accent"
          style={{ fontSize: 28, fontVariationSettings: "'wght' 500" }}
        >
          arrow_forward
        </span>
      </div>

      {/* Después · dark */}
      <div className="rounded-xl border border-primary bg-primary text-primary-foreground p-4">
        <div className="flex items-center gap-2 mb-2">
          <span
            className="material-symbols-outlined text-accent-light"
            style={{ fontSize: 20, fontVariationSettings: "'wght' 600" }}
          >
            check_circle
          </span>
          <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-accent-light">
            Con el sitio nuevo
          </div>
        </div>
        <ul className="space-y-1.5">
          {AFTER.map((t) => (
            <li key={t} className="text-[12px] text-white/90 leading-snug flex gap-2">
              <span className="text-accent-light mt-0.5">+</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ChatMock() {
  return (
    <div className="rounded-xl border border-card-border bg-card overflow-hidden flex flex-col">
      {/* Header del chat */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-card-border bg-surface-muted/60">
        <div className="w-6 h-6 rounded-full bg-accent/15 text-accent flex items-center justify-center">
          <span
            className="material-symbols-outlined"
            style={{ fontSize: 14, fontVariationSettings: "'wght' 600" }}
          >
            support_agent
          </span>
        </div>
        <div>
          <div className="text-[11.5px] font-semibold text-foreground leading-none">
            Asistente Intransit Tech
          </div>
          <div className="text-[9.5px] text-muted mt-0.5">En línea · responde en segundos</div>
        </div>
        <div className="ml-auto flex items-center gap-1 text-[9px] uppercase tracking-[0.18em] font-semibold text-accent">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          Demo
        </div>
      </div>

      {/* Mensajes */}
      <div className="p-3 space-y-2 flex-1">
        {CHAT.map((m, i) => {
          const isAgent = m.from === "agent";
          return (
            <div
              key={i}
              className={`flex ${isAgent ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-[85%] rounded-xl px-3 py-2 text-[11.5px] leading-snug ${
                  isAgent
                    ? "bg-accent text-white rounded-tl-sm"
                    : "bg-surface-muted text-foreground rounded-tr-sm border border-card-border"
                }`}
              >
                {m.text}
              </div>
            </div>
          );
        })}
      </div>

      {/* Input simulado */}
      <div className="flex items-center gap-2 px-3 py-2 border-t border-card-border">
        <div className="flex-1 text-[11px] text-muted/70 italic">Escriba su mensaje…</div>
        <div className="w-7 h-7 rounded-full bg-accent text-white flex items-center justify-center">
          <span
            className="material-symbols-outlined"
            style={{ fontSize: 14, fontVariationSettings: "'wght' 700" }}
          >
            send
          </span>
        </div>
      </div>
    </div>
  );
}

function PageFooter({ num }: { num: number }) {
  return (
    <div className="mt-6 text-right text-[10px] uppercase tracking-[0.22em] text-muted/70">
      Página {num} · 4
    </div>
  );
}
