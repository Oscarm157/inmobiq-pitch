import { Slide } from "../slide";
import { TermLegend } from "../ui/term-legend";
import { FadeStack, FadeItem } from "../ui/motion-primitives";
import { pricing, unit_economics } from "@/lib/data";

export function S09BusinessModel() {
  return (
    <Slide mode="dark">
      <FadeStack className="flex flex-col gap-10">
        <FadeItem>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold tracking-[0.22em] text-accent">09</span>
            <span className="text-xs uppercase tracking-[0.18em] text-muted">Modelo de negocio</span>
          </div>
        </FadeItem>

        <FadeItem>
          <div className="max-w-3xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] text-foreground tracking-[-0.015em]">
              Tres planes para el broker mexicano.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted max-w-xl leading-relaxed">
              El plan gratuito es puerta de entrada: funnel, no monetización. Los
              planes Pro y Empresarial concentran el valor real, con un costo por
              valuación que baja 3.5× al subir de tier.
            </p>
          </div>
        </FadeItem>

        {/* Pricing cards */}
        <FadeStack className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pricing.map((p) => (
            <FadeItem key={p.name}>
              <div
                className={`h-full rounded-2xl p-7 transition-all duration-300 ${
                  p.featured
                    ? "bg-foreground text-background glow-accent relative overflow-hidden"
                    : "bg-card shadow-[0_12px_32px_-4px_rgba(0,0,0,0.45)] hover:-translate-y-1"
                }`}
              >
                <div className="text-xs uppercase tracking-[0.18em] font-semibold mb-2 opacity-80">
                  {p.name}
                </div>
                <div className="text-4xl font-semibold mb-1 tabular-nums">
                  {p.price_label}
                </div>
                <div className={`text-xs font-semibold tabular-nums mb-2 ${p.featured ? "text-accent" : "text-accent"}`}>
                  {p.cost_per_valuation}
                </div>
                <div className="text-sm opacity-70 mb-5">{p.target}</div>
                <ul className="flex flex-col gap-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span
                        className={`material-symbols-outlined mt-0.5 ${
                          p.featured ? "text-accent" : "text-accent"
                        }`}
                        style={{ fontSize: 16 }}
                      >
                        check
                      </span>
                      <span className={p.featured ? "opacity-90" : "text-foreground/80"}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeItem>
          ))}
        </FadeStack>

        {/* Unit economics strip */}
        <FadeItem>
          <div className="rounded-2xl bg-card p-6 shadow-[0_12px_32px_-4px_rgba(15,23,42,0.05)] grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Kpi label="Ticket promedio" value={`$${unit_economics.avg_ticket_mxn} MXN`} sub="Mix 70% Pro + 30% Empresarial" />
            <Kpi label="CAC objetivo" value={`$${unit_economics.cac_mxn.toLocaleString()} MXN`} sub="Ads + SEO + referidos" accent />
            <Kpi label="LTV" value={`$${unit_economics.ltv_mxn.toLocaleString()} MXN`} sub="12 meses retention B2B" />
            <Kpi label="LTV / CAC" value={`${unit_economics.ltv_cac_ratio}×`} sub="Payback en ~2 meses" accent />
          </div>
        </FadeItem>
        <TermLegend terms={[
          { term: "CAC", def: "costo de adquirir un cliente" },
          { term: "LTV", def: "ingresos totales del cliente en su vida" },
          { term: "LTV/CAC", def: "cuántas veces recuperas lo invertido en adquirirlo (>3× es saludable)" },
        ]} />
      </FadeStack>
    </Slide>
  );
}

function Kpi({ label, value, sub, accent }: { label: string; value: string; sub: string; accent?: boolean }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-muted">{label}</div>
      <div
        className={`text-2xl sm:text-3xl font-semibold mt-1.5 tabular-nums ${
          accent ? "text-gradient-accent" : "text-foreground"
        }`}
      >
        {value}
      </div>
      <div className="text-xs text-muted mt-1">{sub}</div>
    </div>
  );
}
