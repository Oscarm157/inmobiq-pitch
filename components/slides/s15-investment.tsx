import { Slide } from "../slide";
import { TermLegend } from "../ui/term-legend";
import { FadeStack, FadeItem } from "../ui/motion-primitives";
import {
  round,
  roi,
  veq_inkind,
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
              VEQ cubre <span className="text-foreground font-semibold">todo el opex de Inmobiq</span> durante 10 meses
              (desarrolladores, admin, marketing, salario fundador, infra, IA, legal). Inmobiq solo paga curadores,
              que se cubren con el revenue de cada ciudad. Paquete total $4.635M MXN por
              <span className="text-foreground font-semibold"> 49% de participación</span>.
            </p>
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

        {/* Desglose del paquete */}
        <FadeItem>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PackageCard
              label="Compensación al fundador"
              amount="$250K"
              subtitle="Al cierre del deal · pago asegurado"
              detail=""
              color="amber"
              bonus={{ amount: "+ $150K", when: "al llegar a los primeros 300 usuarios pagados" }}
            />
            <PackageCard
              label="Aporte VEQ · 10 meses de opex"
              amount={fmtMxn(round.veq_inkind_mxn)}
              subtitle="MXN · todo el opex de Inmobiq"
              detail="VEQ asume el opex completo durante 10 meses: desarrolladores, admin, marketing, salario fundador, infra, IA, legal. Inmobiq solo se preocupa por curadores."
              color="emerald"
              breakdown={veq_inkind}
            />
          </div>
        </FadeItem>

        {/* Utilidad mensual de Inmobiq */}
        <FadeItem>
          <div className="rounded-2xl bg-card p-5 sm:p-6">
            <div className="mb-4">
              <div className="text-xs uppercase tracking-[0.22em] font-semibold text-accent mb-1.5">
                Inmobiq genera utilidad desde el mes 3
              </div>
              <div className="text-base text-foreground/90 leading-snug max-w-3xl mb-2">
                VEQ cubre todo el opex los primeros 10 meses. El único gasto de Inmobiq son los curadores —
                que se pagan con el revenue de cada ciudad. Todo lo demás del MRR es utilidad neta.
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-1 text-[11px] text-muted">
                <span className="uppercase tracking-widest font-semibold text-foreground/80">
                  Todas las cifras son mensuales · MXN
                </span>
                <span className="italic">
                  Curadores: 1.5 promedio por ciudad (2 en grandes, 1 en chicas) · $20K MXN/mes c/u
                </span>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-card-border/50">
              <table className="w-full">
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
                      Opex VEQ<span className="block text-[9px] normal-case tracking-normal font-normal text-muted/60">aporte in-kind</span>
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
                  {monthly_cash_flow.map((row, i) => {
                    const isYear2 = row.opex_veq_mxn === 0;
                    return (
                      <tr
                        key={`${row.month}`}
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
                  M1-M10 · VEQ cubre $238K/mes opex
                </span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="uppercase tracking-widest font-semibold text-accent">
                  M11+ · Inmobiq asume opex
                </span>
              </span>
              <span className="ml-auto italic text-muted/70 max-w-[420px] text-right">
                Utilidad acumulada M1-M10 ~$5M MXN. Suficiente para cubrir el opex propio a partir del mes 11.
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
            { term: "Aporte en especie", def: "equipo, servicios y publicidad aportados por VEQ (valor equivalente, no efectivo)" },
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
  bonus,
}: {
  label: string;
  amount: string;
  subtitle: string;
  detail: string;
  color: "accent" | "emerald" | "amber";
  breakdown?: Array<{ label: string; detail?: string; mxn: number }>;
  bonus?: { amount: string; when: string };
}) {
  const text =
    color === "emerald" ? "text-emerald-300" : color === "amber" ? "text-amber-300" : "text-gradient-accent";
  const ring =
    color === "emerald" ? "ring-emerald-400/20" : color === "amber" ? "ring-amber-400/20" : "ring-accent/20";

  return (
    <div className={`rounded-2xl bg-card p-5 ring-1 ${ring} flex flex-col h-full`}>
      <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-muted mb-1.5">{label}</div>
      <div className={`text-4xl sm:text-5xl font-semibold tabular-nums ${text}`}>{amount}</div>
      <div className="text-xs text-muted mt-1 mb-3">{subtitle}</div>
      {detail && <div className="text-xs text-muted leading-relaxed mb-3">{detail}</div>}
      {bonus && (
        <div className="mt-1 mb-3 rounded-xl bg-foreground/5 border border-card-border/60 p-3.5">
          <div className={`text-2xl sm:text-3xl font-semibold tabular-nums ${text}`}>{bonus.amount}</div>
          <div className="text-xs text-muted mt-0.5 leading-snug">{bonus.when}</div>
        </div>
      )}
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

