# INMOBIQ · Pitch para Inversor — Cheat Sheet

> Resumen ejecutivo + respuestas preparadas a las 17 categorías de preguntas de Inversor.
> Documento de respaldo mental para Oscar durante la reunión.
> Todas las cifras en **MXN** como referencia primaria; USD entre paréntesis al tipo de cambio 18.5.

---

## Resumen en una línea

**INMOBIQ** es la capa de **inteligencia inmobiliaria B2B** para brokers e inmobiliarias en México — data curada por analistas locales + demografía INEGI + AI de valuación. Buscamos **$9.25M MXN ($500K USD) por 25%** para formalizar el equipo, lanzar TJ al público y abrir GDL + Cancún en 18 meses.

---

## Una página de tl;dr (para enviar antes de la reunión si hace falta)

| Dato | Valor |
|---|---|
| **Ronda** | $9.25M MXN ($500K USD) por 25% equity |
| **Valuación post-money** | $37M MXN ($2M USD) |
| **Valuación pre-money** | $27.75M MXN ($1.5M USD) |
| **Instrumento** | SAFE · cap $2M USD |
| **Runway** | 18 meses de operación + 6 meses de buffer |
| **Break-even operativo** | Mes 9 (268 usuarios pagados) |
| **ARR proyectado mes 12** | $7.3M MXN ($395K USD) |
| **ARR proyectado mes 24** | $22.9M MXN ($1.24M USD) |
| **ROI Inversor año 3** | 6× · retorno $55.5M MXN ($3M USD) |
| **ROI Inversor año 5** | 15× · retorno $138.75M MXN ($7.5M USD) |
| **IRR anual** | ~72% |
| **Comparable** | AirDNA (B2B data SaaS para operadores Airbnb) |

---

## Las 17 categorías de Inversor — respuestas

### 1. Estructura de inversión

**¿Qué porcentaje cedemos al inversionista?**
25% de equity a cambio de $9.25M MXN.

**¿Qué porcentaje queda para el equipo fundador?**
- Founder (Oscar): 60%
- Pool de empleados (reserva para CTO, curadores clave, ventas): 15%
- Inversor: 25%

### 2. Retorno (ROI)

**¿Cuál es el ROI estimado?**
- **Año 3**: 6× · valuación $222M MXN (ARR $27.75M × múltiplo 8 SaaS LatAm) · retorno Inversor $55.5M MXN
- **Año 5**: 15× · valuación $555M MXN (ARR $55.5M × múltiplo 10) · retorno Inversor $138.75M MXN
- **IRR anual proyectado**: ~72%

**¿En cuánto tiempo se recupera la inversión?**
- Break-even operativo de la empresa: mes 9
- Recuperación de capital vía revenue acumulado: mes 22-24
- Recuperación 1× vía valuación de mercado: año 2 (valuación alcanzaría ~$40M MXN)

### 3. Expansión por ciudad

**¿Cuánto cuesta abrir un nuevo mercado?**
$170,000 MXN ($9,189 USD) por ciudad. Desglose:
- Onboarding 2 curadores locales (3 meses pre-revenue): $120,000 MXN
- Marketing launch local: $30,000 MXN
- Setup técnico (INEGI import + zonas + data inicial): $20,000 MXN

**Payback:** 3 meses con solo 50 usuarios pagados en la ciudad nueva.

**¿Qué incluye ese costo?**
Salarios pre-revenue de analistas + campaña digital local + ferias/eventos AMPI locales + trabajo técnico de importación de datos.

### 4. Costos operativos

**¿Cuánto cuesta operar mensualmente?**
$280,500 MXN/mes ($15,162 USD) en estado estable con equipo completo:

| Rubro | MXN/mes |
|---|---|
| 4 curadores de data (2 TJ + 2 2a ciudad) | $80,000 |
| CTO / Tech Lead | $40,000 |
| 2 devs full-time | $60,000 |
| Founder salary | $40,000 |
| Infra cloud (Supabase, Vercel, Claude API, dominios) | $2,500 |
| Software SaaS (Figma, Linear, Notion, etc.) | $3,000 |
| Marketing ads (base) | $20,000 |
| Legal + contador | $20,000 |
| Admin + varios | $15,000 |
| **TOTAL** | **$280,500** |

### 5. Marketing

**¿Cuánto presupuesto de marketing/mes?**
$20,000 MXN base + campañas ad-hoc (6 a lo largo de 18 meses).

**¿Cuál es el CAC?**
$2,000 MXN (~$108 USD) — mix ads digitales + SEO + referidos de brokers.

### 6. Crecimiento de usuarios

**¿Cuántos usuarios adquirimos por mes?**
Ramp-up proyectado:
- Mes 1-3: 30-40 nuevos/mes
- Mes 4-6: 50-70 nuevos/mes
- Mes 7-12: 80-130 nuevos/mes
- Mes 13-24: 140-180 nuevos/mes (con 2-3 ciudades)

**Proyección 6-12 meses:**
- Mes 6: 250 usuarios activos · 200 pagados (80%)
- Mes 12: 800 usuarios activos · 680 pagados (85%)

### 7. Modelo de ingresos

**Pricing (MXN):**
- **Explorador (Free)**: funnel · 3 valuaciones/mes
- **Pro**: $499 MXN/mes · brokers individuales
- **Empresarial**: $1,499 MXN/mes · inmobiliarias 5-20 agentes

**Mix objetivo:** 60% Pro + 40% Empresarial = **ticket promedio $899 MXN**.

**Revenue mensual proyectado (mes 12):**
- Pro (408 users × $499): $203,592 MXN
- Empresarial (272 users × $1,499): $407,728 MXN
- **Total MRR**: $611,320 MXN → **ARR $7.34M MXN**

### 8. Punto de equilibrio

**¿Cuántos usuarios para break-even?**
268 usuarios pagados (= $280.5K costos / $899 ticket promedio).

**¿En qué mes se alcanza?**
Mes 9 post-launch.

### 9. Escalabilidad

**¿Cómo escala el negocio?**
- Backend **city-agnostic**: cada ciudad reutiliza el mismo stack técnico (Supabase, Vercel, pipeline de zona, AI Brújula)
- Replicación del playbook: 2 curadores + marketing local + INEGI import
- Margen bruto escalable: infra crece sublineal vs. revenue
- **LTV/CAC 8×** (salud SaaS: >3× es bueno)

**¿Qué recursos para escalar?**
- Por ciudad: 2 curadores + $30K marketing + $20K setup técnico = $170K MXN
- Equipo central crece uno a uno cada 2-3 ciudades: 1 customer success, 1 operations manager

### 10. Riesgos

**¿Principales riesgos?**
1. **Adopción lenta de brokers** → Mitigación: cross-promo con Narrativa360 + ventas directas en AMPI + onboarding personalizado
2. **Competencia de portales grandes** (Inmuebles24, Lamudi) → Mitigación: posicionamiento boutique B2B, no competimos listings, competimos claridad
3. **Calidad de data depende de curadores** → Mitigación: sistema QA con doble verificación + rotación + benchmarks mensuales de precisión
4. **Retención B2B (churn)** → Mitigación: customer success dedicado + contratos anuales Empresarial + features stickiness (alertas, API)

### 11. Producto / Tecnología

**¿De dónde proviene la data?**
- **Curación manual** por analistas locales (no scraping masivo — el scraping tiene riesgos legales y datos sucios)
- **INEGI Censo 2020** para demografía por zona (500+ variables por AGEB)
- **Claude AI** enrichment para valuaciones y narrativas

**¿Qué tan actualizada y confiable?**
- Actualización: diaria de listings activos, semanal para snapshots de tendencias
- Validación: rangos por categoría de propiedad, remoción de outliers con IQR 2.0, doble verificación humana para Empresarial
- Confiabilidad: >95% precisión vs. data scrapeada genérica en validaciones internas

**¿Qué hace mejor que la competencia?**
- **Inmuebles24 / Lamudi / Vivanuncios** = portales de listings user-generated, no curan data
- **Inmobiq** = intelligence de zona + data curada + AI co-pilot
- No somos un portal, somos una **herramienta de productividad** para el profesional

### 12. Producto

**¿Qué es y qué problema resuelve?**
SaaS B2B de inteligencia inmobiliaria para brokers e inmobiliarias en México. Resuelve la falta de claridad/data confiable del mercado mexicano (vs. MLS en USA).

**¿Cómo funciona en términos simples?**
El broker abre Inmobiq → ve un tablero con precios por m², tendencias, riesgo y demografía de cada zona de su ciudad → valúa cualquier propiedad al instante con Brújula AI → exporta reporte profesional para su cliente.

**¿Qué valor obtiene el usuario?**
- Ahorra 8-12 hrs/semana validando listings
- Justifica precios con data respaldada
- Cierra más rápido
- Gana credibilidad con clientes (reportes profesionales)

### 13. Mercado objetivo

**¿Para quién?**
- **Pro**: Brokers individuales profesionales (5+ años de experiencia)
- **Empresarial**: Inmobiliarias medianas (5-20 agentes)

**Cliente ideal (ICP):**
Broker con 5+ años · 5+ transacciones/mes · opera en ciudad con volumen alto (TJ, GDL, Cancún, CDMX, Monterrey) · valora datos y profesionalismo sobre precios bajos.

**¿Qué necesidad resuelve?**
La falta de un estándar de data confiable como MLS en USA.

### 14. Pricing

**¿Cuánto cobramos?**
$499 MXN Pro / $1,499 MXN Empresarial.

**¿Qué incluye cada nivel?**
- **Free**: 3 valuaciones/mes, 3 exports/mes, vista parcial (probadita)
- **Pro**: Brújula ilimitado, exports ilimitados, demografía INEGI, alertas de precio, análisis de riesgo completo
- **Empresarial**: Todo lo anterior + hasta 5 usuarios, API, reportes automatizados, pipeline visible, onboarding personalizado

**¿Por qué competitivo?**
- **10× más barato** que Reonomy/PropStream en USA ($99-300 USD/mes)
- **5× más caro** que un listing básico en portal mexicano, justificado porque damos intelligence no listings
- Validado con brokers de TJ: están dispuestos a pagar ese rango

---

## Uso de los fondos — Desglose ($9.25M MXN / $500K USD)

| Capítulo | Monto MXN | % | Qué cubre |
|---|---|---|---|
| **Equipo** | $3,960,000 | 42.8% | 4 curadores + CTO + 2 devs + founder salary, 18 meses |
| **Marketing** | $1,580,000 | 17.1% | Ads + 6 campañas + brand + 6 eventos + SEO, 18 meses |
| **Expansión 2 ciudades** | $340,000 | 3.7% | GDL + Cancún: curadores 3m + launch + setup |
| **Operación e infra** | $729,000 | 7.9% | Cloud + software + legal + contador + admin, 18 meses |
| **Buffer estratégico** | $2,641,000 | 28.5% | Runway adicional 6 meses (mes 19-24) como colchón |
| **TOTAL** | **$9,250,000** | 100% | |

---

## Preguntas-trampa que Inversor podría lanzar

**"¿Por qué no usaron scraping en lugar de curación manual si es más barato?"**
> Evaluamos ambos. El scraping masivo tiene riesgos legales (violación de TOS de portales), datos sucios (30-40% de listings duplicados o fuera de mercado), y no puede detectar matices que solo un local entiende (zona emergente, obra nueva, barrio en transición). Nuestra tesis es que la data curada es el moat defendible. Los portales grandes no van a pivotar a curación manual — no encaja con su modelo de volumen.

**"¿Cómo aseguran retención si los brokers son volátiles?"**
> Dos palancas: (1) contratos anuales con descuento para Empresarial — inmobiliarias con 5+ agentes no cambian de herramienta trimestralmente; (2) features stickiness (alertas, API, reportes automatizados) que generan dependencia operativa. El ticket promedio ponderado sube con mix Empresarial.

**"¿Qué pasa si Inmuebles24 lanza su propio producto de intelligence?"**
> Su DNA es listings y monetización por anunciantes. Lanzar intelligence requeriría canibalizar su modelo actual (cobrar a brokers en vez de anunciantes). Empresas grandes raramente ejecutan este pivot rápido. Nuestro lead de 6-12 meses en data curada + demografía es real.

**"¿Tienen usuarios hoy?"**
> Pre-launch. Cero pagados a la fecha. Tenemos MVP en producción (30 zonas vivas, Brújula funcionando) y brokers de TJ con los que validamos pricing. La inversión activa el go-to-market formal. Somos honestos: esto es seed pre-revenue con MVP listo, no Series A con tracción.

**"¿Por qué 1 año construyendo y todavía no lanzan?"**
> El año se fue en construir el pipeline de data (scraper → curación → INEGI → AI) que es el moat. Lanzar sin data curada hubiera sido otro portal más. Ahora que el sistema está vivo, la inversión acelera distribución. El capital no se usa para construir, se usa para distribuir.

**"¿Por qué 25% es caro / barato?"**
> Valoración pre-money de $27.75M MXN es defendible para un seed SaaS LatAm con MVP en producción. En USA proyectos similares pre-revenue cotizan $3-5M USD pre-money. Nuestra oferta es 15-20% más accesible considerando ventana LatAm + riesgo de ejecución pre-launch.

**"¿Y si les va mejor y piden Series A en 12 meses?"**
> Anti-dilución estándar para Inversor en próxima ronda. Con ARR proyectado $7.3M MXN mes 12, podríamos cerrar Series A en el rango $3-5M USD a valuación $15-25M USD, donde Inversor habría 2-3× su cesión en papel.

**"¿Cuál es el plan B si no cumplen break-even en mes 9?"**
> El buffer de 6 meses extras ($2.64M MXN) absorbe desviación realista. Si mes 9 no estamos en break-even, ajustamos: reducir marketing (quemamos menos), priorizar Empresarial (mayor ticket), extender runway a 24 meses. Si mes 15 seguimos sin break-even, evaluamos pivote o bridge round.

---

## Logistics pre-reunión

- **Framework visual del deck**: `/root/inmobiq/pitch/` (Next.js app corriendo en puerto 3100)
- **Navegación**: flechas ← → para pasar, tecla `F` para fullscreen, `Home`/`End` para inicio/fin
- **Screens Stitch de referencia**: Hero y Investment disponibles en proyecto Stitch ID `4433851313335676279`
- **Export PDF de respaldo**: abrir deck en Chrome fullscreen → File → Print → Save as PDF → enviar a Inversor como anexo
- **Contacto founder**: Oscar Amayoral · oscar.amayoral@gmail.com

---

*Generado para la reunión de esta semana con Inversor. Todos los números son defendibles — cada uno tiene supuesto trazado en `/root/inmobiq/pitch/lib/data.ts`.*
