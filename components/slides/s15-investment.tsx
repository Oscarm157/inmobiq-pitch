import { Slide } from "../slide";
import { TermLegend } from "../ui/term-legend";
import { FadeStack, FadeItem } from "../ui/motion-primitives";
import { AnimatedCounter } from "../ui/animated-counter";
import {
  round,
  roi,
  veq_inkind,
  founder_secondary_tranches,
  monthly_cash_flow,
} from "@/lib/data";

const fmtMxn = (n: number) =>
  n >= 1_000_000
    ? `$${(n / 1_000_000).toFixed(2)}M`
    : `$${Math.round(n / 1_000).toLocaleString("es-MX")}K`;
const fmtK = (n: number) => `$${Math.round(n / 1_000).toLocaleString("es-MX")}K`;

export function S15Investment() {
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

      <FadeStack className="relative z-10 flex flex-col gap-7">
        <FadeItem>
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-semibold tracking-[0.22em] text-accent">15</span>
            <span className="text-sm uppercase tracking-[0.18em] text-muted-light">Ronda · capital con operación</span>
          </div>
        </FadeItem>

        <FadeItem>
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.05] text-foreground tracking-[-0.015em]">
              <em className="italic text-gradient-accent">No es solo capital.</em> VEQ opera junto a Inmobiq.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted max-w-2xl leading-relaxed">
              VEQ cubre <span className="text-foreground font-semibold">todo el opex de Inmobiq</span> el año base
              (desarrolladores, admin, marketing, salario fundador, infra, IA, legal). Inmobiq solo paga curadores —
              que se cubren con el revenue de cada ciudad. Paquete total $5.68M MXN por
              <span className="text-foreground font-semibold"> 49% de participación</span>.
            </p>
          </div>
        </FadeItem>

        {/* Desglose del paquete */}
        <FadeItem>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <PackageCard
              label="Compensación al fundador"
              amount={fmtMxn(round.founder_secondary_mxn)}
              subtitle="Pagada por VEQ · por hitos"
              detail="Diferida en 3 tramos atados a hitos operativos. Reducida del estándar para hacer el deal más atractivo a VEQ."
              color="amber"
              breakdown={founder_secondary_tranches.map((t) => ({
                label: `Tramo ${t.tranche}`,
                detail: t.milestone,
                mxn: t.mxn,
              }))}
            />
            <PackageCard
              label="Aporte VEQ · año base (12 meses)"
              amount={fmtMxn(round.veq_inkind_mxn)}
              subtitle="MXN · todo el opex de Inmobiq"
              detail="VEQ asume el opex completo el año 1: desarrolladores, admin, marketing, salario fundador, infra, IA, legal. Inmobiq solo se preocupa por curadores."
              color="emerald"
              breakdown={veq_inkind}
            />
            <PackageCard
              label="Efectivo a Inmobiq"
              amount={fmtMxn(round.cash_to_operation_mxn)}
              subtitle="MXN · al banco de Inmobiq"
              detail="Apertura de 14 ciudades nuevas + ramp de curadores antes de que la ciudad genere revenue."
              color="accent"
            />
          </div>
        </FadeItem>

        {/* Participación + valuación */}
        <FadeItem>
          <div className="rounded-2xl bg-card p-5 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <Stat label="Fundador" value={`${round.founder_percent}%`} sub="control mayoritario" />
            <Stat label="VEQ" value={`${round.equity_percent}%`} sub="socio co-operador" accent />
            <Stat label="Valuación post-inversión" value={fmtMxn(round.post_money_mxn)} sub={`MXN · pre-inversión ${fmtMxn(round.pre_money_mxn)}`} />
          </div>
        </FadeItem>

        {/* Ingresos vs gasto mensual — el dato que vende */}
        <FadeItem>
          <div className="rounded-2xl bg-card p-5 sm:p-6">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div>
                <div className="text-xs uppercase tracking-[0.22em] font-semibold text-accent mb-1">
                  La razón por la que el efectivo es modesto
                </div>
                <div className="text-base font-semibold text-foreground">
                  El negocio se autosostiene desde el mes 3 — la ronda solo financia las aperturas y el colchón.
                </div>
              </div>
              <span className="text-[11px] uppercase tracking-[0.18em] text-muted italic max-w-[180px] text-right">
                Los ingresos cubren el gasto casi de inmediato
              </span>
            </div>

            <div className="overflow-hidden rounded-xl border border-card-border/50">
              <table className="w-full">
                <thead>
                  <tr className="bg-surface-muted/40">
                    <th className="px-3 py-2.5 text-left text-[11px] uppercase tracking-[0.16em] font-semibold text-muted">Mes</th>
                    <th className="px-3 py-2.5 text-right text-[11px] uppercase tracking-[0.16em] font-semibold text-muted">Ciudades</th>
                    <th className="px-3 py-2.5 text-right text-[11px] uppercase tracking-[0.16em] font-semibold text-muted">Curadores Inmobiq</th>
                    <th className="px-3 py-2.5 text-right text-[11px] uppercase tracking-[0.16em] font-semibold text-muted">Ingresos mensuales</th>
                    <th className="px-3 py-2.5 text-right text-[11px] uppercase tracking-[0.16em] font-semibold text-accent">Sobrante</th>
                    <th className="px-3 py-2.5 text-left text-[11px] uppercase tracking-[0.16em] font-semibold text-muted">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {monthly_cash_flow.map((row, i) => {
                    const isBE = row.month === 6;
                    const rowBg = isBE
                      ? "bg-emerald-500/8 border-l-2 border-emerald-500"
                      : i % 2 === 0
                      ? "bg-transparent"
                      : "bg-surface-muted/20";
                    return (
                      <tr key={`${row.month}`} className={rowBg}>
                        <td className="px-3 py-2.5 text-sm font-mono tabular-nums text-foreground/90">M{row.month}</td>
                        <td className="px-3 py-2.5 text-right text-sm tabular-nums text-muted">{row.cities}</td>
                        <td className="px-3 py-2.5 text-right text-sm tabular-nums text-foreground/80">{fmtK(row.burn_mxn)}</td>
                        <td className="px-3 py-2.5 text-right text-sm tabular-nums text-foreground/90">{fmtK(row.mrr_mxn)}</td>
                        <td className="px-3 py-2.5 text-right text-sm font-semibold tabular-nums text-accent">
                          +{fmtK(row.net_mxn)}
                        </td>
                        <td className="px-3 py-2.5 text-xs text-muted leading-snug">{row.note}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-5 text-xs text-muted">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-sm bg-emerald-500" />
                <span className="uppercase tracking-widest font-semibold text-emerald-300/90">Punto de equilibrio mes 6</span>
              </span>
              <span className="ml-auto italic text-muted/70">
                Único gasto de Inmobiq = curadores ($40K/mes por ciudad activa). Todo lo demás lo paga VEQ durante el año base.
              </span>
            </div>
          </div>
        </FadeItem>

        {/* Retornos para VEQ */}
        <FadeItem>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ReturnCard
              horizon="Año 3"
              multiple={roi.year_3.veq_multiple}
              mxn={roi.year_3.veq_return_mxn}
              usd={roi.year_3.veq_return_usd}
              detail={`Ingreso anual ${fmtMxn(roi.year_3.arr_mxn)} MXN · ${roi.year_3.users.toLocaleString()} usuarios · ${roi.year_3.tam_percent}% del mercado · múltiplo 8× SaaS LatAm`}
            />
            <ReturnCard
              horizon="Año 5"
              multiple={roi.year_5.veq_multiple}
              mxn={roi.year_5.veq_return_mxn}
              usd={roi.year_5.veq_return_usd}
              detail={`Ingreso anual ${fmtMxn(roi.year_5.arr_mxn)} MXN · ${roi.year_5.users.toLocaleString()} usuarios · ${roi.year_5.tam_percent}% del mercado · salida / Ronda B`}
              featured
            />
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
            { term: "Aporte en especie", def: "equipo, servicios y publicidad aportados por VEQ — valor equivalente, no efectivo" },
            { term: "Compensación al fundador", def: "pago al fundador por el año de bootstrap, dividido en tramos atados a hitos" },
            { term: "Gasto mensual", def: "lo que sale del banco cada mes para operar (salarios, infra, etc.)" },
            { term: "Ingreso recurrente", def: "ingresos mensuales por suscripciones (MRR · ARR cuando es anual)" },
            { term: "Valuación post-inversión", def: "lo que vale la empresa una vez que entra el capital" },
            { term: "Rendimiento anual", def: "ganancia compuesta anual del dinero invertido (IRR)" },
          ]}
        />
      </FadeStack>
    </Slide>
  );
}

function PackageCard({
  label,
  amount,
  subtitle,
  detail,
  color,
  breakdown,
}: {
  label: string;
  amount: string;
  subtitle: string;
  detail: string;
  color: "accent" | "emerald" | "amber";
  breakdown?: Array<{ label: string; detail?: string; mxn: number }>;
}) {
  const text =
    color === "emerald" ? "text-emerald-300" : color === "amber" ? "text-amber-300" : "text-gradient-accent";
  const ring =
    color === "emerald" ? "ring-emerald-400/20" : color === "amber" ? "ring-amber-400/20" : "ring-accent/20";

  return (
    <div className={`rounded-2xl bg-card p-5 ring-1 ${ring} flex flex-col h-full`}>
      <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-muted mb-1.5">{label}</div>
      <div className={`text-3xl sm:text-4xl font-semibold tabular-nums ${text}`}>{amount}</div>
      <div className="text-[11px] text-muted mt-0.5 mb-2.5">{subtitle}</div>
      <div className="text-xs text-muted leading-relaxed mb-3">{detail}</div>
      {breakdown && (
        <div className="mt-auto pt-3 border-t border-card-border/50">
          <div className="flex items-baseline justify-between mb-2">
            <span className="text-[11px] uppercase tracking-widest font-semibold text-muted">Desglose</span>
            <span className="text-[11px] uppercase tracking-widest font-semibold text-muted/70">Total acumulado</span>
          </div>
          <ul className="flex flex-col gap-1.5">
            {breakdown.map((b, i) => (
              <li key={i} className="flex items-baseline justify-between gap-3 text-xs">
                <div className="flex-1 leading-snug">
                  <div className="text-foreground/80">{b.label}</div>
                  {b.detail && <div className="text-muted/70 text-[11px]">{b.detail}</div>}
                </div>
                <span className="font-semibold tabular-nums text-foreground/90 whitespace-nowrap">
                  ${(b.mxn / 1_000).toFixed(0)}K
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Stat({ label, value, sub, accent }: { label: string; value: string; sub: string; accent?: boolean }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-muted">{label}</div>
      <div className={`text-2xl font-semibold tabular-nums mt-1 ${accent ? "text-gradient-accent" : "text-foreground"}`}>
        {value}
      </div>
      <div className="text-[11px] text-muted mt-0.5">{sub}</div>
    </div>
  );
}

function ReturnCard({
  horizon,
  multiple,
  mxn,
  usd,
  detail,
  featured,
}: {
  horizon: string;
  multiple: string;
  mxn: number;
  usd: number;
  detail: string;
  featured?: boolean;
}) {
  const mult = parseInt(multiple.replace("×", "").replace("x", ""), 10);
  return (
    <div
      className={`rounded-2xl p-6 sm:p-7 h-full flex flex-col justify-between relative overflow-hidden ${
        featured ? "bg-card glow-accent" : "bg-card"
      }`}
    >
      {featured && (
        <div
          className="absolute -top-20 -right-20 w-48 h-48 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)" }}
        />
      )}
      <div className="relative">
        <div className="text-xs uppercase tracking-[0.22em] font-semibold text-muted">{horizon}</div>
        <div
          className={`text-[80px] sm:text-[100px] font-semibold leading-none tabular-nums mt-2 ${
            featured ? "text-gradient-accent" : "text-foreground"
          }`}
        >
          <AnimatedCounter value={mult} duration={1400} suffix="×" />
        </div>
      </div>
      <div className="relative mt-4">
        <div className="text-2xl font-semibold text-foreground tabular-nums">
          ${(mxn / 1_000_000).toFixed(1)}M MXN
        </div>
        <div className="text-xs text-muted mt-0.5 tabular-nums">
          Retorno para VEQ · equivale a ${(usd / 1_000_000).toFixed(1)}M USD
        </div>
        <div className="text-xs text-muted/80 mt-3 italic leading-relaxed">{detail}</div>
      </div>
    </div>
  );
}
