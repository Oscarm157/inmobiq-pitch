import { Slide } from "../slide";
import { FadeStack, FadeItem } from "../ui/motion-primitives";
import { team, risks } from "@/lib/data";

type TeamSource = "founder" | "current" | "veq" | "inmobiq";

const sourceConfig: Record<TeamSource, { label: string; bg: string; text: string; icon: string }> = {
  founder:  { label: "Fundador",      bg: "bg-accent/15",       text: "text-accent",        icon: "account_circle" },
  current:  { label: "Equipo actual", bg: "bg-muted/15",        text: "text-muted-light",   icon: "groups" },
  veq:      { label: "Aporte VEQ",    bg: "bg-emerald-500/15",  text: "text-emerald-300",   icon: "handshake" },
  inmobiq:  { label: "Contrata Inmobiq", bg: "bg-violet/15",    text: "text-violet",        icon: "group_add" },
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
              Un año ejecutando solo. <em className="italic text-gradient-accent">Riesgos claros, mitigación concreta.</em>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted max-w-2xl leading-relaxed">
              Oscar construyó Inmobiq de punta a punta durante un año con equipo subcontratado por tareas —
              producto, data, IA, comercial. El MVP está al 80%. Aquí los principales riesgos del plan
              y cómo pensamos mitigarlos.
            </p>
          </div>
        </FadeItem>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left — team cards grouped by source */}
          <FadeItem>
            <div className="flex flex-col gap-3">
              {team
                .filter((m) => m.source === "founder" || m.source === "current")
                .map((m) => {
                  const src = (m.source as TeamSource) ?? "current";
                  const cfg = sourceConfig[src];
                  const cardClass = `rounded-xl p-4 ${
                    m.highlight ? "bg-card glow-accent-subtle border border-accent/20" : "bg-card"
                  }`;
                  return (
                    <div key={m.name} className={cardClass}>
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

              {/* Single collapsible "Equipo VEQ" grouping VEQ + curadores */}
              <details className="rounded-xl bg-card p-4 group cursor-pointer">
                <summary className="list-none marker:hidden">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-emerald-500/15">
                      <span className="material-symbols-outlined text-emerald-300" style={{ fontSize: 20 }}>
                        handshake
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <div className="font-semibold text-foreground text-sm">Equipo VEQ</div>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-muted/60 group-open:rotate-180 transition-transform flex-shrink-0" style={{ fontSize: 18 }}>
                      expand_more
                    </span>
                  </div>
                </summary>
                <div className="mt-3 pt-3 border-t border-card-border/50 flex flex-col gap-3">
                  {team
                    .filter((m) => m.source === "veq" || m.source === "inmobiq")
                    .map((m) => {
                      const src = (m.source as TeamSource) ?? "veq";
                      const cfg = sourceConfig[src];
                      return (
                        <div key={m.name} className="flex items-start gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${cfg.bg}`}>
                            <span className={`material-symbols-outlined ${cfg.text}`} style={{ fontSize: 16 }}>
                              {cfg.icon}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-foreground text-sm">{m.name}</div>
                            <div className="text-[11px] uppercase tracking-widest text-accent/80 mt-0.5">
                              {m.role}
                            </div>
                            <div className="text-xs text-muted mt-1 leading-relaxed">{m.bio}</div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </details>
            </div>
          </FadeItem>

          {/* Right — risks & mitigation */}
          <FadeItem>
            <div className="rounded-2xl bg-card p-6 h-full">
              <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-accent mb-5">
                Principales riesgos · Mitigación
              </div>
              <div className="flex flex-col gap-4">
                {risks.map((r) => {
                  const hasLink = "link" in r && r.link;
                  const lastIdx = r.mitigation.length - 1;
                  return (
                    <div key={r.risk} className="border-l-2 border-accent/30 pl-4">
                      <div className="text-sm font-semibold text-foreground">{r.risk}</div>
                      <ul className="mt-1.5 flex flex-col gap-1">
                        {r.mitigation.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-muted leading-relaxed">
                            <span className="text-accent/70 flex-shrink-0 mt-0.5">·</span>
                            <div className="flex-1">
                              <span>{point}</span>
                              {hasLink && i === lastIdx && (
                                <div className="mt-0.5 ml-0">
                                  <a
                                    href={r.link!.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-accent underline underline-offset-2 hover:text-accent-light"
                                  >
                                    {r.link!.label}
                                  </a>
                                </div>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeItem>
        </div>
      </FadeStack>
    </Slide>
  );
}
