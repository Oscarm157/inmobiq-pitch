// ============================================================================
// INMOBIQ PITCH DATA — Grupo VEQ
// Tipo de cambio base: 1 USD = 18.5 MXN (referencia interna, no se muestra)
// Toda la narrativa visible al inversionista se presenta en MXN como primario.
// ============================================================================

export const brand = {
  name: "Inmobiq",
  tagline: "Inteligencia inmobiliaria confiable y precisa para profesionales.",
  subline: "La claridad del mercado mexicano, finalmente.",
  founder: "Oscar Amayoral",
  city: "Tijuana, México",
  url: "inmobiq.com",
};

export const round = {
  // Paquete total VEQ (todo lo aporta VEQ — Inmobiq solo paga curadores)
  package_total_mxn: 5_260_000,
  package_total_usd: 284_324,

  // Cash a Inmobiq (apertura de ciudades + ramp pre-revenue de curadores)
  cash_to_operation_mxn: 1_960_000,
  cash_to_operation_usd: 105_946,

  // Salario fundador (cubierto por VEQ in-kind)
  founder_salary_mxn: 540_000,
  founder_salary_monthly_mxn: 45_000,
  founder_salary_months: 12,

  // Compensación al fundador (3 tramos de $150K c/u · pagado por VEQ)
  founder_secondary_mxn: 450_000,
  founder_secondary_tranches: 3,

  // Aporte VEQ in-kind (12 meses cubriendo TODO el opex de Inmobiq)
  veq_inkind_mxn: 2_850_000,
  veq_inkind_months: 12,

  // Participación
  equity_percent: 49,
  founder_percent: 51,
  employee_pool_percent: 0,

  // Valuación
  post_money_mxn: 10_735_000,
  post_money_usd: 580_270,
  pre_money_mxn: 5_475_000,
  pre_money_usd: 295_946,

  // Términos
  instrument: "Participación directa · 49% por paquete de $5.26M MXN",
  runway_months: 12,
  buffer_months: 0,
};

export const roi = {
  break_even_month: 6,
  capital_payback_month: 18,
  year_3: {
    arr_usd: 3_368_000,
    arr_mxn: 62_300_000,
    users: 6_500,
    tam_percent: 10.2,
    multiple_saas: 8,
    valuation_usd: 26_940_000,
    valuation_mxn: 498_400_000,
    veq_return_usd: 13_200_000,
    veq_return_mxn: 244_220_000,
    veq_multiple: "46×",
  },
  year_5: {
    arr_usd: 4_146_000,
    arr_mxn: 76_700_000,
    users: 8_000,
    tam_percent: 12.6,
    multiple_saas: 8,
    valuation_usd: 33_168_000,
    valuation_mxn: 613_600_000,
    veq_return_usd: 16_252_000,
    veq_return_mxn: 300_660_000,
    veq_multiple: "57×",
  },
  irr_annual_percent: 122,
};

// Aporte VEQ in-kind — TODO el opex de Inmobiq durante el año base (12 meses)
export const veq_inkind = [
  { label: "2 desarrolladores full-stack", detail: "$35K MXN/mes c/u · 12m", mxn: 840_000 },
  { label: "1 admin/operaciones", detail: "Cobros, contratos, RH · $25K/mes · 12m", mxn: 300_000 },
  { label: "Publicidad pagada (Meta + Google)", detail: "$40K MXN/mes · 12m", mxn: 480_000 },
  { label: "Equipo de marketing VEQ", detail: "Estrategia + creatividad · 12m", mxn: 180_000 },
  { label: "Salario fundador", detail: "$45K MXN/mes · 12m", mxn: 540_000 },
  { label: "Infraestructura + IA", detail: "Cloud + Claude API masivo + tokens · 12m", mxn: 296_000 },
  { label: "Legal + contador fiscal", detail: "$15K/mes · 12m", mxn: 180_000 },
  { label: "Software (GitHub, Linear, Notion, Figma)", detail: "$3K/mes · 12m", mxn: 36_000 },
];

// Cash a Inmobiq — desglose
export const cash_to_operation_breakdown = [
  { label: "Curadores pre-revenue", detail: "14 ciudades × 1.5 curadores prom × $20K × 3 meses", mxn: 1_260_000 },
  { label: "Marketing local de lanzamiento", detail: "14 ciudades × $30K · activación broker AMPI local", mxn: 420_000 },
  { label: "Setup técnico por ciudad", detail: "14 ciudades × $20K · import INEGI + data inicial", mxn: 280_000 },
];

// Compensación fundador — 3 tramos de $150K c/u atados a hitos · pagada por VEQ
export const founder_secondary_tranches = [
  { tranche: 1, mxn: 150_000, milestone: "Cierre del trato (inicial)" },
  { tranche: 2, mxn: 150_000, milestone: "Mes 6 · punto de equilibrio confirmado (intermedia)" },
  { tranche: 3, mxn: 150_000, milestone: "Mes 12 · Inmobiq autosostenible 3 meses (final)" },
];

// Flujo mensual — opex completo (VEQ + Inmobiq) vs ingresos
// Año 1 (M1-M12): VEQ cubre $238K/mes opex · Inmobiq solo paga curadores
// Año 2 (M13+): Inmobiq asume opex propio ($238K/mes) + sigue pagando curadores
// Curadores: 1.5 promedio por ciudad (2 en grandes, 1 en chicas) × $20K/mes
const opexMonthly = 238_000;
export const monthly_cash_flow = [
  { month: 1,  cities: 1,  users: 35,    curators: 2,  opex_veq_mxn: opexMonthly, opex_inmobiq_mxn: 0,            burn_mxn: 40_000,  mrr_mxn: 25_515,    net_mxn: -14_485,  margin_pct: -57, note: "Tijuana piloto · pre-escala" },
  { month: 3,  cities: 5,  users: 345,   curators: 8,  opex_veq_mxn: opexMonthly, opex_inmobiq_mxn: 0,            burn_mxn: 160_000, mrr_mxn: 251_505,   net_mxn: 91_505,   margin_pct: 36, note: "Ola 1 abriendo · 5 ciudades" },
  { month: 6,  cities: 8,  users: 990,   curators: 12, opex_veq_mxn: opexMonthly, opex_inmobiq_mxn: 0,            burn_mxn: 240_000, mrr_mxn: 721_710,   net_mxn: 481_710,  margin_pct: 67, note: "Punto de equilibrio · ola 2 abriendo" },
  { month: 9,  cities: 8,  users: 1_700, curators: 12, opex_veq_mxn: opexMonthly, opex_inmobiq_mxn: 0,            burn_mxn: 240_000, mrr_mxn: 1_239_300, net_mxn: 999_300,  margin_pct: 81, note: "Rentable · 8 ciudades estabilizadas" },
  { month: 12, cities: 15, users: 2_400, curators: 22, opex_veq_mxn: opexMonthly, opex_inmobiq_mxn: 0,            burn_mxn: 440_000, mrr_mxn: 1_749_600, net_mxn: 1_309_600, margin_pct: 75, note: "Ola 3 abriendo · 15 ciudades · último mes año 1" },
  { month: 15, cities: 15, users: 3_900, curators: 22, opex_veq_mxn: 0,           opex_inmobiq_mxn: opexMonthly, burn_mxn: 440_000, mrr_mxn: 2_830_000, net_mxn: 2_152_000, margin_pct: 76, note: "Año 2 · Inmobiq asume opex" },
  { month: 16, cities: 15, users: 4_400, curators: 22, opex_veq_mxn: 0,           opex_inmobiq_mxn: opexMonthly, burn_mxn: 440_000, mrr_mxn: 3_200_000, net_mxn: 2_522_000, margin_pct: 79, note: "Crecimiento sostenido" },
  { month: 17, cities: 15, users: 4_900, curators: 22, opex_veq_mxn: 0,           opex_inmobiq_mxn: opexMonthly, burn_mxn: 440_000, mrr_mxn: 3_560_000, net_mxn: 2_882_000, margin_pct: 81, note: "Optimización" },
  { month: 18, cities: 15, users: 5_380, curators: 22, opex_veq_mxn: 0,           opex_inmobiq_mxn: opexMonthly, burn_mxn: 440_000, mrr_mxn: 3_922_020, net_mxn: 3_244_020, margin_pct: 83, note: "Plan completo · autosostenible" },
];

// Uso de fondos — breakdown del cash que entra a Inmobiq ($4.67M MXN)
export const use_of_funds = [
  {
    chapter: "Apertura 14 ciudades nuevas",
    percent: 51.0,
    mxn: 2_380_000,
    usd: 128_649,
    items: [
      { label: "$170K por ciudad × 14", detail: "Incluye 2 curadores × 3 meses pre-revenue + marketing launch + setup INEGI", mxn: 2_380_000 },
    ],
  },
  {
    chapter: "Salarios · operación",
    percent: 11.6,
    mxn: 540_000,
    usd: 29_189,
    items: [
      { label: "Salario fundador (12 meses)", detail: "$45K MXN/mes · contrato laboral", mxn: 540_000 },
    ],
  },
  {
    chapter: "Compensación al fundador · personal por hitos",
    percent: 10.7,
    mxn: 500_000,
    usd: 27_027,
    items: [
      { label: "Compensación por el año bootstrap", detail: "4 tramos: cierre, mes 3, mes 6, mes 12", mxn: 500_000 },
    ],
  },
  {
    chapter: "Marketing extras",
    percent: 6.4,
    mxn: 300_000,
    usd: 16_216,
    items: [
      { label: "Eventos AMPI + ferias", detail: "Aparte de los $40K/mo ads que pone VEQ", mxn: 150_000 },
      { label: "Brand + video + contenido", detail: "Lanzamiento por ciudad", mxn: 150_000 },
    ],
  },
  {
    chapter: "Legal + contador + admin",
    percent: 6.4,
    mxn: 300_000,
    usd: 16_216,
    items: [
      { label: "Constitución formal + contratos VEQ", detail: "One-off + marcas", mxn: 150_000 },
      { label: "Contador fiscal", detail: "$8K/mes · 18m", mxn: 150_000 },
    ],
  },
  {
    chapter: "Infraestructura + software",
    percent: 3.2,
    mxn: 150_000,
    usd: 8_108,
    items: [
      { label: "Cloud + APIs", detail: "Supabase Pro + Vercel Pro + Claude API · 18m", mxn: 90_000 },
      { label: "Software SaaS", detail: "Linear, Notion, GitHub, Figma · 18m", mxn: 60_000 },
    ],
  },
  {
    chapter: "Buffer / contingencia",
    percent: 10.7,
    mxn: 500_000,
    usd: 27_027,
    items: [
      { label: "Colchón de seguridad", detail: "Para si revenue ramp-up tarda o hay imprevistos", mxn: 500_000 },
    ],
  },
];

// Costos operativos mensuales — fixed (steady state)
// VEQ paga aparte sus 2 devs + admin + ads (no entra aquí)
export const monthly_opex = {
  founder_salary_mxn: 45_000,
  infra_mxn: 8_000,
  legal_contador_mxn: 15_000,
  software_mxn: 3_000,
  total_fixed_mxn: 71_000,
  total_fixed_usd: 3_838,
  // Variable: $40K/mes por cada ciudad nueva durante 3 meses pre-revenue
  variable_per_city_opening_mxn: 40_000,
  variable_per_city_opening_months: 3,
};

// Pricing
export const pricing = [
  {
    name: "Explorador",
    price_mxn: 0,
    price_label: "Gratis",
    target: "Funnel inicial · probadita del producto",
    features: [
      "3 créditos Brújula · export PDF / mes",
      "Vista parcial del dashboard",
      "Comparador limitado (2 zonas)",
    ],
  },
  {
    name: "Pro",
    price_mxn: 399,
    price_label: "$399 MXN/mes",
    target: "Broker profesional independiente",
    featured: true,
    features: [
      "75 créditos Brújula · export PDF/Excel / mes",
      "Comparador completo · todas las zonas",
      "Panorama de ciudad completo",
      "Historial de valuaciones (90 días)",
      "Data demográfica INEGI cruzada",
      "Alertas de precio por zona",
      "Análisis de riesgo completo",
    ],
  },
  {
    name: "Empresarial",
    price_mxn: 1_499,
    price_label: "$1,499 MXN/mes",
    target: "Inmobiliarias · 5-20 agentes",
    features: [
      "1,000 créditos Brújula · export PDF/Excel / mes",
      "Hasta 5 usuarios simultáneos",
      "Reportes con logo de la inmobiliaria",
      "Historial extendido (12 meses)",
      "API de acceso a data",
      "Reportes automatizados semanales",
      "Acceso a comunidad INMOBIQ",
      "Soporte prioritario",
      "Onboarding personalizado",
    ],
  },
];

export const unit_economics = {
  avg_ticket_mxn: 729, // ponderado: $399 × 0.7 + $1,499 × 0.3
  cac_mxn: 1_500,
  cac_usd: 81,
  ltv_retention_months: 18,
  ltv_mxn: 13_122,
  ltv_cac_ratio: 8.7,
  payback_months: 2.1,
};

// Proyección usuarios + revenue (MXN) · ticket avg $729
export const projections = [
  { month: 3,  users_active: 345,   paid_percent: 100, paid_users: 345,   mrr_mxn: 251_505,   arr_mxn: 3_018_060,   status: "ramp" },
  { month: 6,  users_active: 990,   paid_percent: 100, paid_users: 990,   mrr_mxn: 721_710,   arr_mxn: 8_660_520,   status: "punto de equilibrio" },
  { month: 9,  users_active: 1_700, paid_percent: 100, paid_users: 1_700, mrr_mxn: 1_239_300, arr_mxn: 14_871_600,  status: "profitable" },
  { month: 12, users_active: 2_400, paid_percent: 100, paid_users: 2_400, mrr_mxn: 1_749_600, arr_mxn: 20_995_200,  status: "15 ciudades" },
  { month: 18, users_active: 5_380, paid_percent: 100, paid_users: 5_380, mrr_mxn: 3_922_020, arr_mxn: 47_064_240,  status: "plan completo" },
];

export const market = {
  tam: {
    label: "TAM — Brokers e inmobiliarias registrados en México",
    users: 80_000,
    revenue_potential_mxn: 699_840_000,
    detail: "Fuente: AMPI + estimaciones sectoriales · $729 MXN avg × 12 meses × 80K brokers",
  },
  sam: {
    label: "SAM — Brokers activos en 5 ciudades prioritarias",
    users: 44_000,
    revenue_potential_mxn: 384_912_000,
    detail: "CDMX 22,400 + MTY 8,000 + GDL 7,200 + Puebla 3,200 + TJ 3,200",
  },
  som: {
    label: "SOM — Penetración objetivo mes 18",
    users: 5_380,
    revenue_potential_mxn: 47_064_240,
    detail: "8.5% del mercado · 5,380 usuarios pagados × $729 avg (70% Pro / 30% Empresarial) = $3.92M MXN/mes",
  },
};

// Diferenciadores vs competencia
export const competitors = [
  { name: "Inmobiq", focus: "Intelligence de zona", data_source: "Curada local + INEGI + AI", differentiator: "Boutique · data confiable" },
  { name: "Inmuebles24", focus: "Listings", data_source: "User-generated · no curada", differentiator: "Volumen masivo, datos sucios" },
  { name: "Lamudi", focus: "Listings", data_source: "User-generated · no curada", differentiator: "Similar a Inmuebles24" },
  { name: "Vivanuncios", focus: "Listings genérico", data_source: "User-generated amplio", differentiator: "No especializado" },
  { name: "AirDNA", focus: "Data B2B (AirBnB)", data_source: "Scraping + curación", differentiator: "Modelo que aspiramos · en otro segmento" },
];

// Expansión roadmap
export const expansion = [
  { city: "Tijuana",     status: "live",     quarter: "Mes 1",  users_target: 1_050 },
  { city: "Guadalajara", status: "Q4 2026",  quarter: "Mes 3",  users_target: 490   },
  { city: "Cancún",      status: "Q4 2026",  quarter: "Mes 3",  users_target: 340   },
  { city: "CDMX",        status: "roadmap",  quarter: "Mes 3",  users_target: 1_550 },
  { city: "Monterrey",   status: "roadmap",  quarter: "Mes 3",  users_target: 560   },
];

// City unit cost (para preguntas de VEQ)
export const city_opening_cost = {
  mxn: 170_000,
  usd: 9_189,
  breakdown: [
    { label: "Onboarding 2 curadores locales (3 meses pre-revenue)", mxn: 120_000 },
    { label: "Marketing launch local", mxn: 30_000 },
    { label: "Setup técnico (INEGI import + data inicial)", mxn: 20_000 },
  ],
  payback_months: 3,
};

// Equipo — actual + post-inversión (incluyendo VEQ in-kind)
export const team = [
  {
    name: "Oscar Amayoral",
    role: "Fundador · Producto, tecnología y comercial",
    bio: "Full-stack. 1 año construyendo Inmobiq de punta a punta con equipo técnico subcontratado. Experiencia en marketing digital y desarrollo de producto.",
    highlight: true,
    source: "founder",
  },
  {
    name: "Equipo técnico actual",
    role: "3 colaboradores de desarrollo",
    bio: "Programadores subcontratados que han apoyado en la construcción del MVP durante el último año.",
    highlight: false,
    source: "current",
  },
  {
    name: "2 desarrolladores VEQ",
    role: "Equipo técnico full-stack · aporte VEQ",
    bio: "Equipo técnico asignado por Grupo VEQ. Construyen y mantienen la plataforma junto al fundador. Reemplaza la necesidad de un CTO formal.",
    highlight: false,
    source: "veq",
  },
  {
    name: "Admin/operaciones VEQ",
    role: "Cobros, contratos, RH ligero · aporte VEQ",
    bio: "Perfil operativo asignado por VEQ. Libera al fundador para enfocarse en producto y comercial.",
    highlight: false,
    source: "veq",
  },
  {
    name: "Equipo de marketing VEQ",
    role: "Estrategia + creatividad + $40K/mes en publicidad · aporte VEQ",
    bio: "Acceso al equipo de marketing de Grupo VEQ + presupuesto mensual para campañas pagadas (Meta + Google).",
    highlight: false,
    source: "veq",
  },
  {
    name: "Curadores por ciudad",
    role: "2 por ciudad nueva · permanentes",
    bio: "Curan datos de mercado local. Pagados por Inmobiq desde el día uno; los ingresos de la ciudad cubren su salario una vez estabilizada.",
    highlight: false,
    source: "inmobiq",
  },
];

// Riesgos y mitigación
export const risks = [
  {
    risk: "Adopción lenta de brokers",
    mitigation: "Cross-promo con Narrativa360 · ventas directas en AMPI · onboarding personalizado para Empresarial",
  },
  {
    risk: "Competencia de portales grandes (Inmuebles24, Lamudi)",
    mitigation: "Posicionamiento boutique: no competimos en listings, competimos en claridad. B2B tool, no portal de consumer.",
  },
  {
    risk: "Calidad de data depende de curadores",
    mitigation: "Sistema QA con doble verificación · rotación de curadores · benchmarks mensuales de precisión",
  },
  {
    risk: "Retención B2B (churn)",
    mitigation: "Customer success dedicado · contratos anuales para Empresarial · features stickiness (alertas, API)",
  },
];

// Producto: features highlight
export const features = [
  {
    icon: "dashboard",
    title: "Panorama",
    description: "Dashboard vivo: precios por m², tendencias, composición del inventario, riesgo — todo al abrir la app.",
  },
  {
    icon: "explore",
    title: "Intelligence por Zona",
    description: "30 zonas canónicas de Tijuana con demografía INEGI cruzada · precio, riesgo, potencial de apreciación.",
  },
  {
    icon: "travel_explore",
    title: "Brújula Inmobiliaria",
    description: "Valuación instantánea de cualquier propiedad con Claude AI · narrativa explicable vs. mercado de zona.",
  },
  {
    icon: "compare_arrows",
    title: "Comparador",
    description: "Hasta 4 zonas lado a lado · scatter, radar demográfico, tendencias, ticket promedio.",
  },
  {
    icon: "warning",
    title: "Análisis de Riesgo",
    description: "Score multifactor (volatilidad + cap rate + demografía + liquidez) por zona.",
  },
  {
    icon: "map",
    title: "Mapa Choropleth",
    description: "Visualización geográfica tipo heatmap · precios, riesgo, yield por zona.",
  },
];

// Producto: stats del MVP construido
export const mvp_stats = [
  { value: "9,000+", label: "Líneas de código" },
  { value: "243", label: "Archivos TypeScript" },
  { value: "30", label: "Zonas canónicas TJ" },
  { value: "500+", label: "Variables INEGI/zona" },
  { value: "4", label: "Scrapers de portales" },
  { value: "1 año", label: "De desarrollo" },
];

// Glosario de términos y acrónimos del pitch
export const glossary = [
  { term: "ARR", def: "Annual Recurring Revenue — ingresos recurrentes anuales (MRR × 12)." },
  { term: "MRR", def: "Monthly Recurring Revenue — ingresos recurrentes por suscripciones en un mes." },
  { term: "CAC", def: "Costo de Adquisición por Cliente — cuánto cuesta conseguir un usuario pagado." },
  { term: "LTV", def: "Lifetime Value — ingresos totales que genera un cliente durante su vida con el producto." },
  { term: "LTV / CAC", def: "Ratio de eficiencia: cuántas veces recuperas lo que gastas en adquirir un cliente. >3× es saludable; estamos en 8×." },
  { term: "SAFE", def: "Simple Agreement for Future Equity — instrumento de inversión seed que convierte a equity en la siguiente ronda sin fijar valuación hoy." },
  { term: "IRR", def: "Tasa Interna de Retorno — rendimiento anual compuesto de la inversión. ~102% proyectado." },
  { term: "Punto de equilibrio", def: "Mes en que los ingresos cubren exactamente los costos operativos. Proyectado en mes 6." },
  { term: "Runway", def: "Tiempo que dura el dinero de la ronda antes de necesitar más capital o ser rentables." },
  { term: "SaaS", def: "Software as a Service — modelo de negocio de suscripción mensual/anual en la nube." },
  { term: "B2B", def: "Business to Business — vendemos a empresas (inmobiliarias, brokers profesionales), no al consumidor final." },
  { term: "TAM", def: "Total Addressable Market — mercado total disponible si capturaras el 100% (80K brokers en México)." },
  { term: "SAM", def: "Serviceable Addressable Market — porción del TAM a la que realmente puedes llegar (20K en ciudades objetivo)." },
  { term: "SOM", def: "Serviceable Obtainable Market — porción realista del SAM capturable en el horizonte del plan (4K usuarios)." },
  { term: "Múltiplo ARR", def: "Valuación de empresas SaaS = ARR × múltiplo (8–10× en LatAm seed). Estándar de la industria para calcular retorno." },
  { term: "Churn", def: "Tasa de cancelación — porcentaje de usuarios que dejan de pagar cada mes. Queremos <5% mensual." },
  { term: "Series A", def: "Segunda ronda formal de inversión (después de seed). Proyectada en mes 24–30 con ARR de ~$60M MXN." },
  { term: "Tiers", def: "Niveles de precio del producto: Explorador (gratis), Pro ($399 MXN/mes), Empresarial ($1,499 MXN/mes)." },
  { term: "INEGI", def: "Instituto Nacional de Estadística y Geografía — fuente oficial de datos demográficos del Censo 2020 (500+ variables por zona)." },
  { term: "AMPI", def: "Asociación Mexicana de Profesionales Inmobiliarios — principal agremiación de brokers e inmobiliarias en México." },
  { term: "ICP", def: "Ideal Customer Profile — perfil del cliente ideal: broker con 5+ años, 5+ transacciones/mes, ciudad de alto volumen." },
  { term: "Cap Rate", def: "Capitalization Rate — rendimiento anual de un inmueble en renta vs. su valor de mercado. KPI para inversión comercial." },
];

// Categorías de VEQ que cubre cada slide (índice 0 = S01 Hero)
export const slideVeqCategories: string[][] = [
  [],                                                    // S01 Hero
  [],                                                    // S02 Problem
  [],                                                    // S-Cockpit (Brújula)
  [],                                                    // S-Radar (Panorama)
  ["Producto / Tecnología"],                             // S03 Solution
  ["Producto / Tecnología"],                             // S04 How It Works
  ["Producto"],                                          // S05 Product
  ["Producto / Tecnología"],                             // S-Superpowers
  ["Producto / Tecnología"],                             // S06 Differentiator
  ["Mercado objetivo"],                                  // S07 Market
  ["Expansión por ciudad", "Crecimiento de usuarios"],   // S08 Cities
  ["Modelo de ingresos", "Pricing"],                     // S09 Business Model
  ["Escalabilidad"],                                     // S10 Traction
  ["Retorno (ROI)", "Punto de equilibrio"],              // S11 Financials
  ["Expansión por ciudad", "Costos operativos"],         // S12 Expansion
  ["Producto / Tecnología", "Mercado objetivo"],         // S13 Havi
  ["Riesgos"],                                           // S14 Team & Risks
  ["Estructura de inversión", "Retorno (ROI)"],          // S15 Investment
  [],                                                    // S16 CTA
];
