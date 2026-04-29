"use client";

import { useState } from "react";
import { Slide } from "../slide";
import { TermLegend } from "../ui/term-legend";
import { FadeStack, FadeItem } from "../ui/motion-primitives";
import {
  round,
  roundB,
  roi,
  veq_inkind,
  veq_inkindB,
  monthly_cash_flow,
  monthly_cash_flow_B,
} from "@/lib/data";

const fmtMxn = (n: number) =>
  n >= 1_000_000
    ? `$${(n / 1_000_000).toFixed(2)}M`
    : `$${Math.round(n / 1_000).toLocaleString("es-MX")}K`;

type Variant = "A" | "B";

type CashRow = typeof monthly_cash_flow[number];
type InkindRow = {
  category?: string;
  label: string;
  detail?: string;
  monthly?: number;
  mxn: number;
  struck?: boolean;
  absorbedBy?: string;
  fromA?: { monthly?: number; label?: string };
};

const copyA = {
  eyebrow: "Ronda · plan intensivo",
  headline: <>
    <em className="italic text-gradient-accent">No es solo capital.</em> Inversor opera junto a Inmobiq.
  </>,
  description: (
    <>
      Inversor cubre <span className="text-foreground font-semibold">todo el opex de Inmobiq</span> durante 10 meses
      (desarrolladores, admin, marketing, salario fundador, infra, IA, legal). Inmobiq solo paga curadores,
      que se cubren con el revenue de cada ciudad. Estructura completa, equipo robusto y escala agresiva por
      <span className="text-foreground font-semibold"> 49% de participación</span>.
    </>
  ),
  inkindLabel: "Aporte Inversor · opex mensual",
  inkindSubtitle: "Opex completo de Inmobiq durante 10 meses",
  inkindDetail:
    "Inversor asume el opex completo: equipo, infraestructura, marketing y legal. Inmobiq solo se preocupa por curadores, que se cubren con el revenue de cada ciudad.",
  founderBonus: { amount: "+ $150K", when: "al llegar a los primeros 400 usuarios pagados" },
  founderUpfront: "$250K",
  founderSubtitle: "Al cierre del deal · pago asegurado",
  cashflowKicker: "Inmobiq genera utilidad desde el mes 3",
  cashflowCopy:
    "Inversor cubre todo el opex los primeros 10 meses. El único gasto de Inmobiq son los curadores — que se pagan con el revenue de cada ciudad. Todo lo demás del MRR es utilidad neta.",
  cashflowFootnoteLeft: "M1-M10 · Inversor cubre $228K/mes opex",
  cashflowFootnoteRight: "Utilidad acumulada M1-M10 ~$5M MXN. Suficiente para cubrir el opex propio a partir del mes 11.",
};

const copyB = {
  eyebrow: "Ronda · plan liviano",
  headline: <>
    <em className="italic text-gradient-accent">Arranque liviano.</em> Menos riesgo, mismo destino.
  </>,
  description: (
    <>
      Estructura operativa reducida: <span className="text-foreground font-semibold">admin y marketing los absorbe
      el fundador, legal se comparte VEQ + fundador</span>. Menor compromiso de capital,
      menor riesgo, con <span className="text-foreground font-semibold">20% de participación</span> y
      opción de expansión al cierre del primer año.
    </>
  ),
  inkindLabel: "Aporte Inversor · opex mensual liviano",
  inkindSubtitle: "Opex liviano durante 10 meses",
  inkindDetail:
    "Misma estructura que A: las líneas tachadas las absorbe el fundador o se comparten con VEQ. Solo lo gris cuenta como aporte cash de Inversor.",
  founderBonus: { amount: "+ $150K", when: "al llegar a los primeros 400 usuarios pagados" },
  founderUpfront: "$150K",
  founderSubtitle: "Al cierre del deal",
  cashflowKicker: "Break-even desde mes 3 · hito de 400 usuarios en mes 7",
  cashflowCopy:
    "Inversor cubre $87.5K/mes los primeros 10 meses. Crecimiento más medido por menor publicidad y un solo desarrollador, pero con riesgo significativamente menor para VEQ.",
  cashflowFootnoteLeft: "M1-M10 · Inversor cubre $87.5K/mes opex",
  cashflowFootnoteRight: "Inmobiq autosostenible desde M11. 5 ciudades estabilizadas a M18.",
};

export function S15Investment() {
  const [variant, setVariant] = useState<Variant>("A");

  const data = variant === "A"
    ? { round, inkind: veq_inkind, cashflow: monthly_cash_flow, copy: copyA }
    : { round: roundB, inkind: veq_inkindB, cashflow: monthly_cash_flow_B, copy: copyB };

  return (
    <Slide mode="dark" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 900px 600px at 75% 50%, rgba(59,130,246,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Sticky header — toggle siempre visible al hacer scroll dentro del slide */}
      <div className="sticky top-16 sm:top-20 z-30 -mx-4 sm:-mx-8 md:-mx-12 px-4 sm:px-8 md:px-12 py-3 mb-6 bg-background/85 backdrop-blur-md border-b border-card-border/50">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-semibold tracking-[0.22em] text-accent">15</span>
            <span className="text-sm uppercase tracking-[0.18em] text-muted-light">{data.copy.eyebrow}</span>
          </div>
          <VariantToggle variant={variant} onChange={setVariant} />
        </div>
      </div>

      <FadeStack className="relative z-10 flex flex-col gap-7">
        <FadeItem>
          <div key={`head-${variant}`} className="max-w-3xl animate-[heroFadeIn_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.05] text-foreground tracking-[-0.015em]">
              {data.copy.headline}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-foreground/85 max-w-2xl leading-relaxed">
              {data.copy.description}
            </p>
          </div>
        </FadeItem>

        {/* Banner: plataforma 80% lista beta Tijuana — ambas variantes */}
        <FadeItem>
          <div className="inline-flex items-center gap-2.5 self-start px-3 py-2 rounded-lg bg-emerald-500/10 ring-1 ring-emerald-400/30 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-60 animate-ping" />
              <span className="relative rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-emerald-200">
              Plataforma al 80% · beta Tijuana lista para lanzamiento
            </span>
          </div>
        </FadeItem>

        {/* Trade-off panel A vs B — siempre visible, resalta la activa */}
        <FadeItem>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <TradeoffCard
              tag="A"
              title="Apuesta mayor, crecimiento acelerado"
              copy="Equipo completo (2 devs, admin, marketing, legal). Capital cash mayor, escala agresiva, 14 ciudades en 18 meses."
              tone="amber"
              active={variant === "A"}
              onClick={() => setVariant("A")}
            />
            <TradeoffCard
              tag="B"
              title="Más segura, crecimiento sostenido"
              copy="Equipo mínimo + absorciones VEQ. Cheque cash menor, ritmo más medido, beta Tijuana sólida antes de expansión."
              tone="emerald"
              active={variant === "B"}
              onClick={() => setVariant("B")}
            />
          </div>
        </FadeItem>

        {/* Participación + valuación */}
        <FadeItem>
          <div key={`stats-${variant}`} className="rounded-2xl bg-card p-5 grid grid-cols-2 sm:grid-cols-3 gap-4 animate-[heroFadeIn_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards]">
            <Stat label="Fundador" value={`${data.round.founder_percent}%`} sub={variant === "A" ? "voto de calidad · libertad creativa y de producto" : "control mayoritario · dirige producto y operación"} />
            <Stat label="Inversor" value={`${data.round.equity_percent}%`} sub={variant === "A" ? "socio co-operador" : "socio capital · menor exposición"} accent />
            <Stat label="Valuación" value={fmtMxn(data.round.post_money_mxn)} currency="MXN" sub="Valor de la empresa" />
          </div>
        </FadeItem>

        {/* Desglose del paquete */}
        <FadeItem>
          <div key={`pkg-${variant}`} className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4 items-start animate-[heroFadeIn_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards]">
            <PackageCard
              label="Compensación al fundador"
              amount={data.copy.founderUpfront}
              subtitle={data.copy.founderSubtitle}
              detail=""
              color="amber"
              bonus={data.copy.founderBonus}
              badge={variant === "B" ? "-$100K vs Plan A" : undefined}
            />
            <PackageCard
              label={data.copy.inkindLabel}
              amount={fmtMxn(data.round.veq_inkind_mxn / data.round.veq_inkind_months)}
              amountSuffix="/Mes"
              secondary={{
                amount: fmtMxn(data.round.veq_inkind_mxn),
                label: `Total acumulado · ${data.round.veq_inkind_months} meses`,
              }}
              subtitle={data.copy.inkindSubtitle}
              detail={data.copy.inkindDetail}
              color="emerald"
              breakdown={data.inkind}
            />
          </div>
        </FadeItem>

        {/* Opción de expansión — solo Plan B */}
        {variant === "B" && (
          <FadeItem>
            <div className="rounded-xl bg-accent/[0.06] ring-1 ring-accent/30 p-4 flex items-start gap-3">
              <span className="material-symbols-outlined text-accent shrink-0 mt-0.5" style={{ fontSize: 20 }}>expand_circle_right</span>
              <div>
                <div className="text-xs uppercase tracking-[0.18em] font-semibold text-accent mb-1">
                  Opción de expansión
                </div>
                <div className="text-sm text-foreground/90 leading-relaxed">
                  Una vez cumplido el primer año, VEQ tendrá la opción de crecer su participación hasta un <span className="font-semibold text-foreground">20%
                  adicional</span>, con la empresa valuada a <span className="font-semibold text-foreground">1 año de ventas
                  al momento de ejercerla</span>. Esta opción estará disponible durante el segundo año de operación.
                </div>
              </div>
            </div>
          </FadeItem>
        )}

        {/* Utilidad mensual de Inmobiq */}
        <FadeItem>
          <div key={`cf-${variant}`} className="rounded-2xl bg-card p-5 sm:p-6 animate-[heroFadeIn_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards]">
            <div className="mb-4">
              <div className="text-xs uppercase tracking-[0.22em] font-semibold text-accent mb-1.5">
                {data.copy.cashflowKicker}
              </div>
              <div className="text-base text-foreground/90 leading-snug max-w-3xl mb-2">
                {data.copy.cashflowCopy}
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-1 text-[11px] text-muted">
                <span className="uppercase tracking-widest font-semibold text-foreground/80">
                  Todas las cifras son mensuales · MXN
                </span>
                <span className="italic">
                  {variant === "A"
                    ? "Curadores: 1.5 promedio por ciudad (2 en grandes, 1 en chicas) · $20K MXN/mes c/u"
                    : "Curadores: 1 por ciudad chica · $20K MXN/mes c/u · ticket promedio $729 MXN"}
                </span>
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-card-border/50">
              <table className="w-full min-w-[760px]">
                <thead>
                  <tr className="bg-surface-muted/40">
                    <th className="px-2.5 py-3 text-left text-[11px] uppercase tracking-[0.14em] font-semibold text-muted">Mes</th>
                    <th className="px-2.5 py-3 text-right text-[11px] uppercase tracking-[0.14em] font-semibold text-muted">
                      Ciudades<span className="block text-[9px] normal-case tracking-normal font-normal text-muted/60">activas</span>
                    </th>
                    <th className="px-2.5 py-3 text-right text-[11px] uppercase tracking-[0.14em] font-semibold text-muted">
                      Usuarios<span className="block text-[9px] normal-case tracking-normal font-normal text-muted/60">pagados</span>
                    </th>
                    <th className="px-2.5 py-3 text-right text-[11px] uppercase tracking-[0.14em] font-semibold text-emerald-300/90">
                      Opex Inversor<span className="block text-[9px] normal-case tracking-normal font-normal text-muted/60">aporte operativo</span>
                    </th>
                    <th className="px-2.5 py-3 text-right text-[11px] uppercase tracking-[0.14em] font-semibold text-violet">
                      Opex Inmobiq<span className="block text-[9px] normal-case tracking-normal font-normal text-muted/60">post-mes 10</span>
                    </th>
                    <th className="px-2.5 py-3 text-right text-[11px] uppercase tracking-[0.14em] font-semibold text-muted">
                      Curadores<span className="block text-[9px] normal-case tracking-normal font-normal text-muted/60">$20K × persona</span>
                    </th>
                    <th className="px-2.5 py-3 text-right text-[11px] uppercase tracking-[0.14em] font-semibold text-muted">
                      Ingresos<span className="block text-[9px] normal-case tracking-normal font-normal text-muted/60">MRR</span>
                    </th>
                    <th className="px-2.5 py-3 text-right text-[11px] uppercase tracking-[0.14em] font-semibold text-accent">
                      Utilidad<span className="block text-[9px] normal-case tracking-normal font-normal text-muted/60">Inmobiq · %</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.cashflow.map((row: CashRow, i: number) => {
                    const isYear2 = row.opex_veq_mxn === 0;
                    return (
                      <tr
                        key={`${variant}-${row.month}`}
                        className={
                          isYear2
                            ? "bg-accent/5 border-l-2 border-accent/40"
                            : i % 2 === 0
                            ? "bg-transparent"
                            : "bg-surface-muted/20"
                        }
                      >
                        <td className="px-2.5 py-3 text-sm font-mono tabular-nums text-foreground/90">
                          M{row.month}
                        </td>
                        <td className="px-2.5 py-3 text-right text-sm tabular-nums text-muted">{row.cities}</td>
                        <td className="px-2.5 py-3 text-right text-sm tabular-nums text-foreground/85">
                          {row.users.toLocaleString("es-MX")}
                        </td>
                        <td className="px-2.5 py-3 text-right text-sm tabular-nums text-emerald-300/80">
                          {row.opex_veq_mxn > 0 ? fmtMxn(row.opex_veq_mxn) : <span className="text-muted/50 italic text-xs">—</span>}
                        </td>
                        <td className="px-2.5 py-3 text-right text-sm tabular-nums text-violet/90">
                          {row.opex_inmobiq_mxn > 0 ? fmtMxn(row.opex_inmobiq_mxn) : <span className="text-muted/50 italic text-xs">—</span>}
                        </td>
                        <td className="px-2.5 py-3 text-right text-sm tabular-nums text-foreground/80">
                          {fmtMxn(row.burn_mxn)}
                        </td>
                        <td className="px-2.5 py-3 text-right text-sm tabular-nums text-foreground/90">
                          {fmtMxn(row.mrr_mxn)}
                        </td>
                        <td className="px-2.5 py-3 text-right text-sm tabular-nums">
                          <div className={`font-semibold ${row.net_mxn < 0 ? "text-rose-300" : "text-accent"}`}>
                            {row.net_mxn < 0 ? "" : "+"}{fmtMxn(row.net_mxn)}
                          </div>
                          <div className={`text-[10px] font-medium ${row.margin_pct < 0 ? "text-rose-400/70" : "text-accent/60"}`}>
                            {row.margin_pct}%
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="uppercase tracking-widest font-semibold text-emerald-300/90">
                  {data.copy.cashflowFootnoteLeft}
                </span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="uppercase tracking-widest font-semibold text-accent">
                  M11+ · Inmobiq asume opex
                </span>
              </span>
              <span className="ml-auto italic text-muted max-w-[420px] text-right">
                {data.copy.cashflowFootnoteRight}
              </span>
            </div>
          </div>
        </FadeItem>

        <FadeItem>
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-card-border" />
            <div className="text-xs uppercase tracking-[0.22em] font-semibold text-accent">
              Rendimiento anual proyectado · {roi.irr_annual_percent}%
            </div>
            <div className="h-px flex-1 bg-card-border" />
          </div>
        </FadeItem>

        <TermLegend
          terms={[
            { term: "Aporte en especie", def: "equipo, servicios y publicidad aportados por Inversor (valor equivalente, no efectivo)" },
            { term: "Compensación al fundador", def: "pago al fundador por el año de bootstrap, dividido en tramos atados a hitos" },
            { term: "Gasto mensual", def: "lo que sale del banco cada mes para operar (salarios, infra, etc.)" },
            { term: "Ingreso recurrente", def: "ingresos mensuales por suscripciones (MRR · ARR cuando es anual)" },
            { term: "Valuación", def: "lo que vale la empresa" },
            { term: "Rendimiento anual", def: "ganancia compuesta anual del dinero invertido (IRR)" },
          ]}
        />
      </FadeStack>
    </Slide>
  );
}

function VariantToggle({ variant, onChange }: { variant: Variant; onChange: (v: Variant) => void }) {
  return (
    <div
      role="tablist"
      aria-label="Variante de propuesta"
      className="inline-flex items-center gap-0.5 p-1 rounded-xl bg-black/40 ring-1 ring-white/10 backdrop-blur-sm"
    >
      <ToggleButton active={variant === "A"} onClick={() => onChange("A")} sub="plan intensivo">A</ToggleButton>
      <ToggleButton active={variant === "B"} onClick={() => onChange("B")} sub="plan liviano">B</ToggleButton>
    </div>
  );
}

function ToggleButton({
  active,
  onClick,
  children,
  sub,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  sub: string;
}) {
  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`px-3 sm:px-4 py-1.5 rounded-lg flex items-center gap-2 transition-all ${
        active
          ? "bg-accent text-background shadow-[0_0_24px_rgba(59,130,246,0.35)]"
          : "text-foreground/70 hover:text-foreground hover:bg-white/5"
      }`}
    >
      <span className="font-mono text-sm font-bold tracking-wide">{children}</span>
      <span className={`text-[10px] uppercase tracking-[0.16em] hidden sm:inline ${active ? "opacity-90" : "opacity-70"}`}>
        {sub}
      </span>
    </button>
  );
}

function PackageCard({
  label,
  amount,
  amountSuffix,
  secondary,
  subtitle,
  detail,
  color,
  breakdown,
  bonus,
  badge,
}: {
  label: string;
  amount: string;
  amountSuffix?: string;
  secondary?: { amount: string; label: string };
  subtitle: string;
  detail: string;
  color: "accent" | "emerald" | "amber";
  breakdown?: InkindRow[];
  bonus?: { amount: string; when: string };
  badge?: string;
}) {
  const text =
    color === "emerald" ? "text-emerald-300" : color === "amber" ? "text-amber-300" : "text-gradient-accent";
  const ring =
    color === "emerald" ? "ring-emerald-400/25" : color === "amber" ? "ring-amber-400/25" : "ring-accent/25";

  return (
    <div className={`rounded-2xl bg-card p-5 ring-1 ${ring} flex flex-col h-full`}>
      <div className="flex items-center justify-between mb-1.5">
        <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-foreground/85">{label}</div>
        {badge && (
          <span className="px-2 py-0.5 rounded-md bg-rose-500/15 ring-1 ring-rose-400/30 text-[10px] uppercase tracking-[0.12em] font-semibold text-rose-300">
            {badge}
          </span>
        )}
      </div>
      <div className={`text-3xl sm:text-4xl font-semibold tabular-nums ${text}`}>
        {amount}
        <span className="text-sm sm:text-base text-muted ml-1.5 font-medium tracking-wide">MXN</span>
        {amountSuffix && (
          <span className="text-lg sm:text-xl text-muted ml-1 font-medium">{amountSuffix}</span>
        )}
      </div>
      {secondary && (
        <div className="mt-1.5 flex items-baseline gap-2 flex-wrap">
          <span className="text-xl sm:text-2xl font-semibold tabular-nums text-foreground/90">
            {secondary.amount}
            <span className="text-xs text-muted ml-1 font-medium tracking-wide">MXN</span>
          </span>
          <span className="text-[11px] uppercase tracking-[0.16em] font-semibold text-muted">
            {secondary.label}
          </span>
        </div>
      )}
      <div className="text-xs text-muted mt-2 mb-3">{subtitle}</div>
      {detail && <div className="text-xs text-foreground/75 leading-relaxed mb-3">{detail}</div>}
      {bonus && (
        <div className="mt-1 mb-3 rounded-xl bg-foreground/5 border border-card-border/60 p-3.5">
          <div className="text-[10px] uppercase tracking-[0.18em] font-semibold text-foreground/70 mb-1">Bono por tracción</div>
          <div className={`text-2xl sm:text-3xl font-semibold tabular-nums ${text}`}>
            {bonus.amount}
            <span className="text-xs text-muted ml-1 font-medium tracking-wide">MXN</span>
          </div>
          <div className="text-xs text-muted mt-0.5 leading-snug">{bonus.when}</div>
        </div>
      )}
      {breakdown && (
        <div className="mt-auto pt-4 border-t border-card-border/50 flex flex-col gap-6">
          {(["team", "expense"] as const).map((cat) => {
            const items = breakdown.filter((b) => (b.category ?? "team") === cat);
            if (items.length === 0) return null;
            return (
              <div key={cat}>
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-[11px] uppercase tracking-widest font-semibold text-foreground/90">
                    {cat === "team" ? "Equipo de trabajo" : "Gastos operativos"}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-muted">
                    10 meses
                  </span>
                </div>
                <ul className="flex flex-col gap-4">
                  {items.map((b, i) => <BreakdownRow key={i} b={b} />)}
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function BreakdownRow({ b }: { b: InkindRow }) {
  const struck = b.struck === true;
  const fromAMonthly = b.fromA?.monthly;
  const fromATotal = fromAMonthly !== undefined ? fromAMonthly * 10 : undefined;

  return (
    <li className="flex items-start justify-between gap-4 text-[13px] pb-4 border-b border-card-border last:border-0 last:pb-0">
      <div className="flex-1 leading-snug">
        <div className={struck ? "text-muted/70 line-through decoration-rose-400/70 decoration-[1.5px]" : "text-foreground/95"}>
          {b.label}
        </div>
        {b.detail && (
          <div className={struck ? "text-muted/55 line-through text-[11px] mt-0.5" : "text-muted text-[11px] mt-0.5"}>
            {b.detail}
          </div>
        )}
        {struck && b.absorbedBy && (
          <div className="mt-1 inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-emerald-500/15 ring-1 ring-emerald-400/40">
            <span className="material-symbols-outlined text-emerald-300" style={{ fontSize: 11 }}>handshake</span>
            <span className="text-[10px] uppercase tracking-[0.12em] font-semibold text-emerald-200">
              {b.absorbedBy}
            </span>
          </div>
        )}
      </div>
      <div className="text-right whitespace-nowrap">
        {struck ? (
          <div className="text-muted/65 line-through tabular-nums text-[11px]">
            {fromATotal !== undefined ? `$${(fromATotal / 1_000).toFixed(0)}K` : "—"}
          </div>
        ) : (
          <>
            <div className="font-semibold tabular-nums text-foreground">
              ${(b.mxn / 1_000).toFixed(0)}K
            </div>
            {b.monthly !== undefined && (
              <div className="text-muted text-[10px] tabular-nums">
                ${(b.monthly / 1_000).toFixed(b.monthly % 1_000 === 0 ? 0 : 1)}K/mes
                {fromAMonthly !== undefined && fromAMonthly !== b.monthly && (
                  <span className="ml-1 line-through text-muted/60">
                    ${(fromAMonthly / 1_000).toFixed(fromAMonthly % 1_000 === 0 ? 0 : 1)}K
                  </span>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </li>
  );
}

function TradeoffCard({
  tag,
  title,
  copy,
  tone,
  active,
  onClick,
}: {
  tag: "A" | "B";
  title: string;
  copy: string;
  tone: "amber" | "emerald";
  active: boolean;
  onClick: () => void;
}) {
  const ring = active
    ? tone === "amber"
      ? "ring-amber-400/50 bg-amber-500/[0.06]"
      : "ring-emerald-400/50 bg-emerald-500/[0.06]"
    : "ring-card-border/60 bg-card/40 hover:ring-card-border hover:bg-card/60";
  const tagColor = tone === "amber" ? "text-amber-300 bg-amber-500/15" : "text-emerald-300 bg-emerald-500/15";
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl ring-1 ${ring} p-3.5 flex items-start gap-3 transition-all text-left cursor-pointer`}
    >
      <span className={`shrink-0 w-7 h-7 rounded-md flex items-center justify-center font-mono text-sm font-bold ${tagColor}`}>
        {tag}
      </span>
      <div className="flex-1 min-w-0">
        <div className={`text-xs uppercase tracking-[0.16em] font-semibold mb-1 ${active ? "text-foreground" : "text-foreground/75"}`}>
          {title}
        </div>
        <div className={`text-[12px] leading-relaxed ${active ? "text-foreground/85" : "text-muted"}`}>
          {copy}
        </div>
      </div>
    </button>
  );
}

function Stat({
  label,
  value,
  currency,
  sub,
  accent,
}: {
  label: string;
  value: string;
  currency?: string;
  sub: string;
  accent?: boolean;
}) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-foreground/85">{label}</div>
      <div className={`text-2xl font-semibold tabular-nums mt-1 ${accent ? "text-gradient-accent" : "text-foreground"}`}>
        {value}
        {currency && <span className="text-sm text-muted ml-1.5 font-medium tracking-wide">{currency}</span>}
      </div>
      <div className="text-[11px] text-muted mt-0.5">{sub}</div>
    </div>
  );
}
