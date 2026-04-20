import { Slide } from "../slide";
import { FadeStack, FadeItem } from "../ui/motion-primitives";
import { team, risks } from "@/lib/data";

type TeamSource = "founder" | "current" | "veq" | "inmobiq";

const sourceConfig: Record<TeamSource, { label: string; bg: string; text: string; icon: string }> = {
  founder:  { label: "Founder",       bg: "bg-accent/15",       text: "text-accent",        icon: "account_circle" },
  current:  { label: "Equipo actual", bg: "bg-muted/15",        text: "text-muted-light",   icon: "groups" },
  veq:      { label: "VEQ in-kind",   bg: "bg-emerald-500/15",  text: "text-emerald-300",   icon: "handshake" },
  inmobiq:  { label: "Inmobiq hire",  bg: "bg-violet/15",       text: "text-violet",        icon: "group_add" },
};

export function S14Team() {
  return (
    <Slide mode="dark" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <FadeStack className="relative z-10 flex flex-col gap-7">
        <FadeItem>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold tracking-[0.22em] text-accent">14</span>
            <span className="text-xs uppercase tracking-[0.18em] text-muted-light">Equipo y riesgos</span>
          </div>
        </FadeItem>

        <FadeItem>
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.05] text-foreground tracking-[-0.015em]">
              Un año ejecutando solo. <em className="italic text-gradient-accent">VEQ aporta el equipo que falta.</em>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted max-w-2xl leading-relaxed">
              No es un round de capital pasivo. VEQ pone 2 desarrolladores, un admin/operaciones y su
              equipo de marketing in-kind durante 18 meses — además del cash. El founder se libera para
              foco en producto y go-to-market.
            </p>
          </div>
        </FadeItem>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left — team cards grouped by source */}
          <FadeItem>
            <div className="flex flex-col gap-3">
              {team.map((m) => {
                const src = (m.source as TeamSource) ?? "current";
                const cfg = sourceConfig[src];
                return (
                  <div
                    key={m.name}
                    className={`rounded-xl p-4 ${
                      m.highlight ? "bg-card glow-accent-subtle border border-accent/20" : "bg-card"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${cfg.bg}`}>
                        <span className={`material-symbols-outlined ${cfg.text}`} style={{ fontSize: 20 }}>
                          {cfg.icon}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <div className="font-semibold text-foreground text-sm">{m.name}</div>
                          <span className={`text-[9px] uppercase tracking-widest font-semibold px-1.5 py-0.5 rounded ${cfg.bg} ${cfg.text}`}>
                            {cfg.label}
                          </span>
                        </div>
                        <div className="text-[11px] uppercase tracking-widest text-accent/80 mt-0.5">
                          {m.role}
                        </div>
                        <div className="text-xs text-muted mt-1.5 leading-relaxed">{m.bio}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
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
