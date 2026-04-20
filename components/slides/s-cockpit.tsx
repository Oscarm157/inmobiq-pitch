import { Slide } from "../slide";
import { FadeStack, FadeItem } from "../ui/motion-primitives";

function ScanLines() {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-10 opacity-[0.025]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 4px)",
      }}
    />
  );
}

function Crosshair() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
      <div className="relative w-14 h-14">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-accent/50" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-accent/50" />
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-accent" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-accent" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-accent" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-accent" />
      </div>
    </div>
  );
}

function RiskArc() {
  const score = 2.1;
  const pct = score / 10;
  const r = 22;
  const circ = Math.PI * r;
  return (
    <div className="flex flex-col items-center gap-0.5">
      <div className="text-[8px] uppercase tracking-widest text-muted font-semibold">Riesgo</div>
      <div className="relative">
        <svg width="54" height="30" viewBox="0 0 54 30">
          <path
            d="M 5 28 A 22 22 0 0 1 49 28"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M 5 28 A 22 22 0 0 1 49 28"
            fill="none"
            stroke="#34d399"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circ}
            strokeDashoffset={circ * (1 - pct)}
          />
        </svg>
        <div className="absolute inset-0 flex items-end justify-center pb-0.5">
          <span className="text-[10px] font-bold text-emerald-300">{score}</span>
        </div>
      </div>
      <div className="text-[8px] text-emerald-300 font-semibold uppercase tracking-wide">Bajo</div>
    </div>
  );
}

function BasicView() {
  return (
    <div className="bg-[#0e0e16] px-6 py-5 flex flex-col gap-4 relative border-r border-card-border">
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-muted/30" />
        <span className="text-[9px] uppercase tracking-[0.22em] font-semibold text-muted/50">
          Sin Inmobiq
        </span>
      </div>

      <div className="rounded-xl bg-[#16161f] aspect-video flex items-center justify-center">
        <span className="material-symbols-outlined opacity-10 text-muted" style={{ fontSize: 44 }}>
          home
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <div className="text-[11px] text-muted/50">Col. Zona Río, Tijuana</div>
        <div className="text-[10px] text-muted/40">Casa · 3 rec · 2 baños · 180 m²</div>
        <div className="text-2xl font-semibold text-foreground/50 tabular-nums mt-1">
          $3,200,000 MXN
        </div>
      </div>

      <div className="flex flex-col gap-2.5 border-t border-card-border/20 pt-3">
        {[
          "¿Precio por m² de la zona?",
          "¿Tendencia del mercado?",
          "¿Nivel de riesgo real?",
          "¿Valuación es justa?",
        ].map((q) => (
          <div key={q} className="flex items-center gap-2.5">
            <span className="text-base font-bold text-muted/20">?</span>
            <span className="text-[10px] text-muted/35 italic">{q}</span>
          </div>
        ))}
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 20%, rgba(8,8,15,0.5) 100%)",
        }}
      />
    </div>
  );
}

function CockpitView() {
  return (
    <div className="bg-[#08080f] px-6 py-5 flex flex-col gap-3 relative overflow-hidden">
      <ScanLines />

      <div className="flex items-center gap-3 text-[8px] font-mono uppercase tracking-[0.16em] relative z-20">
        <span className="flex items-center gap-1.5 text-emerald-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Sistema activo
        </span>
        <span className="text-card-border">·</span>
        <span className="text-accent/80">Zona: TJ-ZONA RÍO</span>
        <span className="text-card-border">·</span>
        <span className="text-muted/60">Datos: en vivo</span>
      </div>

      <div className="relative rounded-xl overflow-hidden bg-[#10101a] aspect-video z-20">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <span className="material-symbols-outlined text-accent" style={{ fontSize: 44 }}>
            home
          </span>
        </div>
        <ScanLines />
        <Crosshair />

        <div className="absolute top-2 left-2.5 text-[7px] font-mono text-accent/60">
          32.5149° N · 117.0382° W
        </div>
        <div className="absolute top-2 right-2.5 text-[7px] font-mono text-accent/60">
          ID: TJ-ZR-4412
        </div>
        <div className="absolute bottom-2 left-2.5 text-[7px] font-mono text-muted/40">
          AGEB 02004·0010·7
        </div>

        <div className="absolute bottom-2 right-2.5 bg-accent/20 border border-accent/40 rounded-lg px-2.5 py-1.5 backdrop-blur-sm">
          <div className="text-[7px] uppercase tracking-widest text-accent font-semibold">
            Brújula AI
          </div>
          <div className="text-sm font-bold text-foreground tabular-nums leading-tight">
            $3.45M
          </div>
          <div className="text-[8px] text-emerald-300 font-semibold">+7.8% · precio justo</div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 relative z-20">
        <div className="bg-card/50 border border-card-border/50 rounded-lg p-2.5 backdrop-blur-sm">
          <div className="text-[7px] uppercase tracking-widest text-muted font-semibold mb-1">
            Precio/m²
          </div>
          <div className="text-base font-bold text-foreground tabular-nums">$18.2K</div>
          <div className="flex items-center gap-0.5 mt-0.5">
            <span
              className="material-symbols-outlined text-emerald-300"
              style={{ fontSize: 10 }}
            >
              arrow_upward
            </span>
            <span className="text-[8px] text-emerald-300 font-semibold">+3.2%</span>
          </div>
        </div>

        <div className="bg-card/50 border border-card-border/50 rounded-lg p-2 backdrop-blur-sm flex items-center justify-center">
          <RiskArc />
        </div>

        <div className="bg-card/50 border border-card-border/50 rounded-lg p-2.5 backdrop-blur-sm">
          <div className="text-[7px] uppercase tracking-widest text-muted font-semibold mb-2">
            Demanda
          </div>
          <div className="h-1 rounded-full bg-card-border overflow-hidden">
            <div className="h-full bg-accent rounded-full" style={{ width: "78%" }} />
          </div>
          <div className="text-[8px] text-accent font-bold mt-1">78% · Alta</div>
        </div>

        <div className="bg-card/50 border border-card-border/50 rounded-lg p-2.5 backdrop-blur-sm">
          <div className="text-[7px] uppercase tracking-widest text-muted font-semibold mb-1">
            NSE · INEGI
          </div>
          <div className="text-[10px] font-semibold text-foreground">Medio-Alto</div>
          <div className="text-[8px] text-muted mt-0.5">12,400 hogares</div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to top, rgba(59,130,246,0.07), transparent)",
        }}
      />
    </div>
  );
}

export function SCockpit() {
  return (
    <Slide mode="dark">
      <FadeStack className="flex flex-col gap-6">
        <FadeItem>
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.18em] text-muted">La diferencia</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold leading-[1.05] text-foreground tracking-[-0.015em] mt-2">
            Misma propiedad.{" "}
            <em className="italic text-gradient-accent">Dos mundos.</em>
          </h2>
          <p className="mt-3 text-base text-muted max-w-2xl leading-relaxed">
            Un portal es la vitrina donde se exhiben propiedades. Inmobiq es la herramienta que
            usa el broker detrás del mostrador para entender el mercado, valuar con precisión y
            cerrar mejor — nunca compite con la vitrina.
          </p>
        </FadeItem>

        <FadeItem>
          <div className="grid grid-cols-2 rounded-2xl overflow-hidden border border-card-border shadow-[0_24px_64px_-8px_rgba(0,0,0,0.7)]">
            <BasicView />
            <CockpitView />
          </div>
        </FadeItem>
      </FadeStack>
    </Slide>
  );
}
