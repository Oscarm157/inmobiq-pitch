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
  raise_mxn: 9_250_000,
  raise_usd: 500_000,
  equity_percent: 25,
  post_money_mxn: 37_000_000,
  post_money_usd: 2_000_000,
  pre_money_mxn: 27_750_000,
  pre_money_usd: 1_500_000,
  founder_percent: 60,
  employee_pool_percent: 15,
  instrument: "SAFE · Cap $2M USD / $37M MXN",
  runway_months: 18,
  buffer_months: 6,
};

export const roi = {
  break_even_month: 6,
  capital_payback_month: 18,
  year_3: {
    arr_usd: 5_800_000,
    arr_mxn: 107_300_000,
    multiple_saas: 8,
    valuation_usd: 46_400_000,
    valuation_mxn: 858_400_000,
    veq_return_usd: 11_600_000,
    veq_return_mxn: 214_600_000,
    veq_multiple: "23×",
  },
  year_5: {
    arr_usd: 11_900_000,
    arr_mxn: 220_150_000,
    multiple_saas: 8,
    valuation_usd: 95_200_000,
    valuation_mxn: 1_761_200_000,
    veq_return_usd: 23_800_000,
    veq_return_mxn: 440_300_000,
    veq_multiple: "47×",
  },
  irr_annual_percent: 95,
};

// Uso de fondos — breakdown detallado
export const use_of_funds = [
  {
    chapter: "Equipo",
    percent: 42.8,
    mxn: 3_960_000,
    usd: 214_054,
    items: [
      { label: "4 curadores de data (TJ + 2a ciudad)", detail: "2 TJ + 2 GDL/Cancún · $20K MXN c/u · 18 meses", mxn: 1_440_000 },
      { label: "CTO / Tech Lead", detail: "Formalizar rol técnico · 18 meses", mxn: 720_000 },
      { label: "2 devs full-time", detail: "$30K MXN c/u · 18 meses", mxn: 1_080_000 },
      { label: "Founder (dedicación 100%)", detail: "Salario mínimo vital · 18 meses", mxn: 720_000 },
    ],
  },
  {
    chapter: "Marketing y crecimiento",
    percent: 17.1,
    mxn: 1_580_000,
    usd: 85_405,
    items: [
      { label: "Ads digitales (Meta + Google)", detail: "$20K/mes · 18 meses", mxn: 360_000 },
      { label: "Campañas ad-hoc", detail: "6 campañas · launches y temporadas", mxn: 600_000 },
      { label: "Brand + video + contenido inicial", detail: "One-off", mxn: 200_000 },
      { label: "Eventos brokers + AMPI", detail: "6 eventos · presencia ferias", mxn: 240_000 },
      { label: "SEO + contenido continuo", detail: "Blog, case studies, whitepapers", mxn: 180_000 },
    ],
  },
  {
    chapter: "Expansión 2 ciudades",
    percent: 3.7,
    mxn: 340_000,
    usd: 18_378,
    items: [
      { label: "Apertura Guadalajara", detail: "Curadores 3m + launch + setup INEGI", mxn: 170_000 },
      { label: "Apertura Cancún", detail: "Curadores 3m + launch + setup INEGI", mxn: 170_000 },
    ],
  },
  {
    chapter: "Infraestructura y operación",
    percent: 7.9,
    mxn: 729_000,
    usd: 39_405,
    items: [
      { label: "Infra cloud", detail: "Supabase Pro + Vercel Pro + Claude API + dominios · 18m", mxn: 45_000 },
      { label: "Software SaaS", detail: "Figma, Linear, Notion, GitHub · 18m", mxn: 54_000 },
      { label: "Legal", detail: "Constitución formal + contratos VEQ + marcas", mxn: 180_000 },
      { label: "Contador fiscal", detail: "$10K/mes · 18m", mxn: 180_000 },
      { label: "Admin + varios", detail: "Bank fees, papeleo, imprevistos", mxn: 270_000 },
    ],
  },
  {
    chapter: "Buffer estratégico (6 meses extra)",
    percent: 28.5,
    mxn: 2_641_000,
    usd: 142_757,
    items: [
      { label: "Runway adicional mes 19-24", detail: "Colchón si revenue ramp-up tarda · reduce riesgo de bridge round", mxn: 2_641_000 },
    ],
  },
];

// Costos operativos mensuales — steady state
export const monthly_opex = {
  infra_mxn: 2_500,
  curators_mxn: 80_000, // 4 pax
  tech_team_mxn: 140_000, // CTO + 2 devs + founder
  marketing_mxn: 20_000,
  software_mxn: 3_000,
  legal_contador_mxn: 20_000,
  admin_mxn: 15_000,
  total_mxn: 280_500,
  total_usd: 15_162,
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
    price_mxn: 499,
    price_label: "$499 MXN/mes",
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
  avg_ticket_mxn: 799, // weighted: $499 × 0.7 + $1,499 × 0.3
  cac_mxn: 2_500,
  cac_usd: 147,
  ltv_retention_months: 18,
  ltv_mxn: 14_382,
  ltv_cac_ratio: 5.7,
  payback_months: 3.1,
};

// Proyección usuarios + revenue (MXN)
export const projections = [
  { month: 3,  users_active: 345,   paid_percent: 100, paid_users: 345,   mrr_mxn: 275_655,   arr_mxn: 3_307_860,   status: "ramp" },
  { month: 6,  users_active: 990,   paid_percent: 100, paid_users: 990,   mrr_mxn: 791_010,   arr_mxn: 9_492_120,   status: "break-even" },
  { month: 9,  users_active: 1_700, paid_percent: 100, paid_users: 1_700, mrr_mxn: 1_358_300, arr_mxn: 16_299_600,  status: "profitable" },
  { month: 12, users_active: 2_400, paid_percent: 100, paid_users: 2_400, mrr_mxn: 1_917_600, arr_mxn: 23_011_200,  status: "15 ciudades" },
  { month: 18, users_active: 5_512, paid_percent: 100, paid_users: 5_512, mrr_mxn: 4_403_888, arr_mxn: 52_846_656,  status: "plan completo" },
];

export const market = {
  tam: {
    label: "TAM — Brokers e inmobiliarias registrados en México",
    users: 80_000,
    revenue_potential_mxn: 862_800_000,
    detail: "Fuente: AMPI + estimaciones sectoriales · ~$899 MXN avg × 12 meses × 80K usuarios",
  },
  sam: {
    label: "SAM — Brokers activos en 5 ciudades prioritarias",
    users: 20_000,
    revenue_potential_mxn: 215_760_000,
    detail: "TJ + GDL + Cancún + CDMX + MTY · profesionales con >5 transacciones/año",
  },
  som: {
    label: "SOM — Penetración objetivo mes 18",
    users: 5_545,
    revenue_potential_mxn: 53_200_000,
    detail: "8.7% del TAM · 5,545 usuarios pagos × $799 avg (70% Pro / 30% Empresarial) = $4.4M MXN/mes MRR",
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

// Equipo
export const team = [
  {
    name: "Oscar Amayoral",
    role: "Founder · Product, Tech & Go-to-Market",
    bio: "Full-stack. 1 año construyendo Inmobiq end-to-end con equipo técnico subcontratado. Experiencia en marketing digital y desarrollo de producto.",
    highlight: true,
  },
  {
    name: "Equipo técnico actual",
    role: "3 colaboradores de desarrollo",
    bio: "Programadores subcontratados que han apoyado en la construcción del MVP durante el último año.",
    highlight: false,
  },
  {
    name: "Post-inversión",
    role: "Plan de contratación",
    bio: "CTO full-time · 4 curadores de data (TJ + 2a ciudad) · 2 devs dedicados · Customer success lead.",
    highlight: false,
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
    title: "Brújula AI",
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
  { term: "IRR", def: "Tasa Interna de Retorno — rendimiento anual compuesto de la inversión. 72% proyectado." },
  { term: "Break-even", def: "Punto de equilibrio — mes en que los ingresos cubren exactamente los costos operativos. Proyectado en mes 9." },
  { term: "Runway", def: "Tiempo que dura el dinero de la ronda antes de necesitar más capital o ser rentables." },
  { term: "SaaS", def: "Software as a Service — modelo de negocio de suscripción mensual/anual en la nube." },
  { term: "B2B", def: "Business to Business — vendemos a empresas (inmobiliarias, brokers profesionales), no al consumidor final." },
  { term: "TAM", def: "Total Addressable Market — mercado total disponible si capturaras el 100% (80K brokers en México)." },
  { term: "SAM", def: "Serviceable Addressable Market — porción del TAM a la que realmente puedes llegar (20K en ciudades objetivo)." },
  { term: "SOM", def: "Serviceable Obtainable Market — porción realista del SAM capturable en el horizonte del plan (4K usuarios)." },
  { term: "Múltiplo ARR", def: "Valuación de empresas SaaS = ARR × múltiplo (8–10× en LatAm seed). Estándar de la industria para calcular retorno." },
  { term: "Churn", def: "Tasa de cancelación — porcentaje de usuarios que dejan de pagar cada mes. Queremos <5% mensual." },
  { term: "Series A", def: "Segunda ronda formal de inversión (después de seed). Proyectada en mes 24–30 con ARR de $22.9M MXN." },
  { term: "Tiers", def: "Niveles de precio del producto: Explorador (gratis), Pro ($499 MXN/mes), Empresarial ($1,499 MXN/mes)." },
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
  ["Riesgos"],                                           // S13 Team & Risks
  ["Estructura de inversión", "Retorno (ROI)"],          // S14 Investment
  [],                                                    // S15 CTA
];
