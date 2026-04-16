import { Slide } from "../slide";
import { FadeStack, FadeItem } from "../ui/motion-primitives";
import { AnimatedCounter } from "../ui/animated-counter";
import { round, roi } from "@/lib/data";

export function S14Investment() {
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

      <FadeStack className="relative z-10 flex flex-col gap-8">
        <FadeItem>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold tracking-[0.22em] text-accent">14</span>
            <span className="text-xs uppercase tracking-[0.18em] text-muted-light">Ronda de inversión</span>
          </div>
        </FadeItem>

        <FadeItem>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] text-foreground tracking-[-0.015em]">
            Semilla <em className="italic text-gradient-accent">boutique</em>.
            <br />
            $9.25M MXN por 25%.
          </h2>
        </FadeItem>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-2">
          {/* Structure */}
          <FadeItem className="lg:col-span-5">
            <div className="rounded-2xl bg-card p-7 h-full">
              <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-accent mb-6">
                La estructura
              </div>
              <dl className="flex flex-col gap-4">
                <DealRow label="Monto" value="$9.25M MXN" accent="$500K USD" />
                <DealRow label="Equity cedido" value={`${round.equity_percent}%`} accent="Pro inversionista" />
                <DealRow label="Post-money" value="$37M MXN" accent="$2M USD" />
                <DealRow label="Pre-money" value="$27.75M MXN" accent="$1.5M USD" />
                <DealRow label="Runway" value="18 meses" accent="+ 6 buffer" />
                <DealRow label="Instrumento" value="SAFE" accent="Cap $2M USD" />
              </dl>
            </div>
          </FadeItem>

          {/* Returns */}
          <FadeItem className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 h-full">
              <ReturnCard
                horizon="Año 3"
                multiple={roi.year_3.veq_multiple}
                mxn={roi.year_3.veq_return_mxn}
                usd={roi.year_3.veq_return_usd}
                detail={`ARR $27.75M MXN · múltiplo 8× SaaS LatAm`}
              />
              <ReturnCard
                horizon="Año 5"
                multiple={roi.year_5.veq_multiple}
                mxn={roi.year_5.veq_return_mxn}
                usd={roi.year_5.veq_return_usd}
                detail="ARR $55.5M MXN · múltiplo 10× · exit / Series A"
                featured
              />
            </div>
          </FadeItem>
        </div>

        <FadeItem>
          <div className="flex items-center gap-4 pt-2">
            <div className="h-px flex-1 bg-card-border" />
            <div className="text-xs uppercase tracking-[0.22em] font-semibold text-accent">
              IRR proyectado · {roi.irr_annual_percent}% anual
            </div>
            <div className="h-px flex-1 bg-card-border" />
          </div>
        </FadeItem>
      </FadeStack>
    </Slide>
  );
}

function DealRow({ label, value, accent }: { label: string; value: string; accent?: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <dt className="text-sm text-muted">{label}</dt>
      <dd className="text-right">
        <div className="text-lg font-semibold text-foreground tabular-nums">
          {value}
        </div>
        {accent && <div className="text-xs text-accent-light/80 mt-0.5 tabular-nums">{accent}</div>}
      </dd>
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
  const mult = parseInt(multiple.replace("x", ""), 10);
  return (
    <div
      className={`rounded-2xl p-7 h-full flex flex-col justify-between relative overflow-hidden ${
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
        <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-muted">
          {horizon}
        </div>
        <div
          className={`text-[96px] sm:text-[120px] font-semibold leading-none tabular-nums mt-2 ${
            featured ? "text-gradient-accent" : "text-foreground"
          }`}
        >
          <AnimatedCounter value={mult} duration={1400} suffix="×" />
        </div>
      </div>
      <div className="relative mt-4">
        <div className="text-2xl font-semibold text-foreground tabular-nums">
          ${(mxn / 1_000_000).toFixed(2)}M MXN
        </div>
        <div className="text-xs text-muted mt-0.5 tabular-nums">
          Retorno para VEQ · ${(usd / 1_000_000).toFixed(1)}M USD
        </div>
        <div className="text-[11px] text-muted/80 mt-3 italic leading-relaxed">{detail}</div>
      </div>
    </div>
  );
}
