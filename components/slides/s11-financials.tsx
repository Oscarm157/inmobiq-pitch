import { Slide } from "../slide";
import { FadeStack, FadeItem } from "../ui/motion-primitives";
import { GrowthChart } from "../ui/growth-chart";

export function S11Financials() {
  return (
    <Slide mode="dark" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 1100px 700px at 50% 20%, rgba(59,130,246,0.12) 0%, transparent 70%)",
        }}
      />

      <FadeStack className="relative z-10 flex flex-col gap-6">
        <FadeItem>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold tracking-[0.22em] text-accent">11</span>
            <span className="text-xs uppercase tracking-[0.18em] text-muted-light">Crecimiento proyectado</span>
          </div>
        </FadeItem>

        <FadeItem>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.05] text-foreground tracking-[-0.015em]">
                Crecimiento <em className="font-sans italic text-gradient-accent">viable</em>. No milagroso.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted max-w-2xl leading-relaxed">
                Break-even mes 9. Rentable mes 12. 18 meses para triplicar de 800 a 2,500 usuarios —
                consistente con la captura por ciudad del plan.
              </p>
            </div>

            <div className="flex gap-5 sm:gap-7">
              <HeroKpi label="Break-even" value="Mes 9" sub="268 users pagados" accent="emerald" />
              <div className="w-px bg-[#2a2a3e]" />
              <HeroKpi label="ARR Mes 12" value="$7.3M" sub="MXN · $395K USD" />
              <div className="w-px bg-[#2a2a3e]" />
              <HeroKpi label="ARR Mes 24" value="$22.9M" sub="MXN · $1.24M USD" accent="blue" />
            </div>
          </div>
        </FadeItem>

        <FadeItem>
          <div className="rounded-2xl bg-card p-5 sm:p-7">
            <div className="flex items-center justify-between gap-4 mb-3">
              <div className="flex items-center gap-5 text-[10px] uppercase tracking-[0.18em] font-semibold">
                <span className="flex items-center gap-2 text-[#60a5fa]">
                  <span className="w-2.5 h-2.5 rounded-sm bg-[#60a5fa]/60" />
                  Users activos
                </span>
                <span className="flex items-center gap-2 text-accent">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                  MRR (MXN)
                </span>
                <span className="flex items-center gap-2 text-emerald-300">
                  <span className="w-5 h-px bg-emerald-400/80" style={{ borderTop: "1px dashed rgba(16,185,129,0.8)" }} />
                  Break-even
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted">
                Hover los puntos · proyección base del plan
              </span>
            </div>
            <GrowthChart />
          </div>
        </FadeItem>

        <FadeStack className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <InsightCard
            icon="trending_up"
            label="Doblez de users"
            value="M12 → M18"
            detail="De 800 a 1,500 users en 6 meses con la entrada de GDL + Cancún"
          />
          <InsightCard
            icon="payments"
            label="Margen SaaS"
            value="78%"
            detail="Margen bruto estándar; costos variables mínimos tras data curada"
          />
          <InsightCard
            icon="schedule"
            label="Payback CAC"
            value="2.5 meses"
            detail="CAC $2K MXN · ticket promedio $799 MXN · retención 18m"
          />
          <InsightCard
            icon="rocket_launch"
            label="Series A"
            value="Mes 24-30"
            detail="ARR $22.9M MXN habilita ronda A $3-5M USD @ múltiplo 10x"
            featured
          />
        </FadeStack>

        <FadeItem>
          <div className="flex flex-wrap items-center gap-6 text-xs text-muted pt-2">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="uppercase tracking-widest font-semibold text-emerald-300/90">Break-even mes 9</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="uppercase tracking-widest font-semibold text-accent">Rentable mes 12</span>
            </span>
            <span className="ml-auto italic">
              Proyección base · tabla detallada en anexo · USD @ 18.5 MXN
            </span>
          </div>
        </FadeItem>
      </FadeStack>
    </Slide>
  );
}

function HeroKpi({
  label,
  value,
  sub,
  accent,
}: {
  label: string;
  value: string;
  sub: string;
  accent?: "blue" | "emerald";
}) {
  const valueClass =
    accent === "emerald"
      ? "text-emerald-300"
      : accent === "blue"
      ? "text-gradient-accent"
      : "text-foreground";
  return (
    <div className="text-right">
      <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-muted">{label}</div>
      <div className={`text-2xl sm:text-3xl font-semibold tabular-nums mt-0.5 ${valueClass}`}>
        {value}
      </div>
      <div className="text-[10px] text-muted mt-0.5">{sub}</div>
    </div>
  );
}

function InsightCard({
  icon,
  label,
  value,
  detail,
  featured,
}: {
  icon: string;
  label: string;
  value: string;
  detail: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-5 h-full transition-all duration-300 hover:-translate-y-0.5 ${
        featured ? "bg-card glow-accent-subtle" : "bg-card"
      }`}
    >
      <div className="flex items-center gap-2.5 mb-3">
        <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-accent/15">
          <span className="material-symbols-outlined text-accent" style={{ fontSize: 18 }}>
            {icon}
          </span>
        </div>
        <div className="text-[10px] uppercase tracking-[0.18em] font-semibold text-muted leading-tight">
          {label}
        </div>
      </div>
      <div className={`text-2xl font-semibold tabular-nums mb-2 ${featured ? "text-gradient-accent" : "text-foreground"}`}>
        {value}
      </div>
      <div className="text-[11px] text-muted leading-relaxed">{detail}</div>
    </div>
  );
}
