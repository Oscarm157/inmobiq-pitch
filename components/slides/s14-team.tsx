import { Slide } from "../slide";
import { FadeStack, FadeItem } from "../ui/motion-primitives";
import { team, risks } from "@/lib/data";

export function S14Team() {
  return (
    <Slide mode="dark" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <FadeStack className="relative z-10 flex flex-col gap-10">
        <FadeItem>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold tracking-[0.22em] text-accent">14</span>
            <span className="text-xs uppercase tracking-[0.18em] text-muted-light">Equipo y riesgos</span>
          </div>
        </FadeItem>

        <FadeItem>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] text-foreground tracking-[-0.015em] max-w-4xl">
            Un año ejecutando. <em className="italic text-gradient-accent">Capital para formalizar.</em>
          </h2>
        </FadeItem>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left — team cards */}
          <FadeItem>
            <div className="flex flex-col gap-4">
              {team.map((m) => (
                <div
                  key={m.name}
                  className={`rounded-2xl p-6 ${
                    m.highlight ? "bg-card glow-accent-subtle border border-accent/20" : "bg-card"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-accent" style={{ fontSize: 22 }}>
                        {m.highlight ? "account_circle" : m.role.includes("Plan") ? "group_add" : "groups"}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-foreground text-base">{m.name}</div>
                      <div className="text-xs uppercase tracking-widest text-accent mt-0.5">
                        {m.role}
                      </div>
                      <div className="text-sm text-muted mt-2 leading-relaxed">{m.bio}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeItem>

          {/* Right — risks & mitigation */}
          <FadeItem>
            <div className="rounded-2xl bg-card p-6 h-full">
              <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-accent mb-5">
                Principales riesgos · Mitigación
              </div>
              <div className="flex flex-col gap-4">
                {risks.map((r) => (
                  <div key={r.risk} className="border-l-2 border-accent/30 pl-4">
                    <div className="text-sm font-semibold text-foreground">{r.risk}</div>
                    <div className="text-xs text-muted mt-1 leading-relaxed">{r.mitigation}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeItem>
        </div>
      </FadeStack>
    </Slide>
  );
}
