import Image from "next/image";
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
        <div className="absolute top-1/2 left-0 right-0 h-px bg-accent/60" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-accent/60" />
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-accent" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-accent" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-accent" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-accent" />
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
      <div className="text-[7px] uppercase tracking-widest text-muted font-semibold">Riesgo</div>
      <div className="relative">
        <svg width="54" height="30" viewBox="0 0 54 30">
          <path d="M 5 28 A 22 22 0 0 1 49 28" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" strokeLinecap="round" />
          <path d="M 5 28 A 22 22 0 0 1 49 28" fill="none" stroke="#34d399" strokeWidth="4" strokeLinecap="round"
            strokeDasharray={circ} strokeDashoffset={circ * (1 - pct)} />
        </svg>
        <div className="absolute inset-0 flex items-end justify-center pb-0.5">
          <span className="text-[10px] font-bold text-emerald-300">{score}</span>
        </div>
      </div>
      <div className="text-[7px] text-emerald-300 font-semibold uppercase tracking-wide">Bajo</div>
    </div>
  );
}

function BasicView() {
  return (
    <div className="bg-[#0e0e16] px-5 py-4 flex flex-col gap-3 relative border-r border-card-border">
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-muted/30" />
        <span className="text-[9px] uppercase tracking-[0.22em] font-semibold text-muted/50">Sin Inmobiq</span>
      </div>

      <div className="relative rounded-xl overflow-hidden aspect-video">
        <Image src="/house.webp" alt="Propiedad" fill className="object-cover grayscale opacity-50" />
        <div className="absolute inset-0" style={{ background: "rgba(14,14,22,0.45)" }} />
      </div>

      <div className="flex flex-col gap-0.5">
        <div className="text-[11px] text-muted/50">Col. Zona Río, Tijuana</div>
        <div className="text-[10px] text-muted/40">Depto · 2 rec · 1 baño · 75 m²</div>
        <div className="text-xl font-semibold text-foreground/50 tabular-nums mt-1">$1,850,000 MXN</div>
      </div>

      <div className="flex flex-col gap-2 border-t border-card-border/20 pt-2.5">
        {[
          "¿Precio por m² de la zona?",
          "¿Tendencia del mercado?",
          "¿Nivel de riesgo real?",
          "¿Valuación es justa?",
          "¿Cuántos listings activos?",
        ].map((q) => (
          <div key={q} className="flex items-center gap-2">
            <span className="text-base font-bold text-muted/20 leading-none">?</span>
            <span className="text-[10px] text-muted/35 italic">{q}</span>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, transparent 20%, rgba(8,8,15,0.55) 100%)" }} />
    </div>
  );
}

function CockpitView() {
  return (
    <div className="bg-[#08080f] px-5 py-4 flex flex-col gap-2.5 relative overflow-hidden">
      <ScanLines />

      {/* Status bar */}
      <div className="flex items-center gap-3 text-[8px] font-mono uppercase tracking-[0.14em] relative z-20">
        <span className="flex items-center gap-1.5 text-emerald-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Sistema activo
        </span>
        <span className="text-card-border">·</span>
        <span className="text-accent/80">Zona: TJ-ZONA RÍO</span>
        <span className="text-card-border">·</span>
        <span className="text-muted/60">Datos: en vivo</span>
      </div>

      {/* Property image with HUD */}
      <div className="relative rounded-xl overflow-hidden aspect-video z-20">
        <Image src="/house.webp" alt="Propiedad" fill className="object-cover brightness-50" />
        <div className="absolute inset-0" style={{ background: "rgba(8,8,15,0.35)" }} />
        <ScanLines />
        <Crosshair />

        <div className="absolute top-2 left-2.5 text-[7px] font-mono text-accent/70">32.5149° N · 117.0382° W</div>
        <div className="absolute top-2 right-2.5 text-[7px] font-mono text-accent/70">ID: TJ-ZR-4412</div>
        <div className="absolute bottom-2 left-2.5 text-[7px] font-mono text-muted/40">AGEB 02004·0010·7</div>

        <div className="absolute bottom-2 right-2.5 bg-accent/20 border border-accent/40 rounded-lg px-2.5 py-1.5 backdrop-blur-sm">
          <div className="text-[7px] uppercase tracking-widest text-accent font-semibold">Brújula AI</div>
          <div className="text-sm font-bold text-foreground tabular-nums leading-tight">$1.92M</div>
          <div className="text-[8px] text-emerald-300 font-semibold">+3.8% · precio justo</div>
        </div>
      </div>

      {/* KPI grid — 4 cols × 2 rows */}
      <div className="grid grid-cols-4 gap-1.5 relative z-20">
        {/* Row 1 */}
        <div className="bg-card/50 border border-card-border/50 rounded-lg p-2 backdrop-blur-sm">
          <div className="text-[7px] uppercase tracking-widest text-muted font-semibold mb-1">Precio/m²</div>
          <div className="text-sm font-bold text-foreground tabular-nums">$24.6K</div>
          <div className="flex items-center gap-0.5 mt-0.5">
            <span className="material-symbols-outlined text-emerald-300" style={{ fontSize: 9 }}>arrow_upward</span>
            <span className="text-[8px] text-emerald-300 font-semibold">+3.2%</span>
          </div>
        </div>

        <div className="bg-card/50 border border-card-border/50 rounded-lg p-1.5 backdrop-blur-sm flex items-center justify-center">
          <RiskArc />
        </div>

        <div className="bg-card/50 border border-card-border/50 rounded-lg p-2 backdrop-blur-sm">
          <div className="text-[7px] uppercase tracking-widest text-muted font-semibold mb-1.5">Demanda</div>
          <div className="h-1 rounded-full bg-card-border overflow-hidden">
            <div className="h-full bg-accent rounded-full" style={{ width: "78%" }} />
          </div>
          <div className="text-[8px] text-accent font-bold mt-1">78% · Alta</div>
        </div>

        <div className="bg-card/50 border border-card-border/50 rounded-lg p-2 backdrop-blur-sm">
          <div className="text-[7px] uppercase tracking-widest text-muted font-semibold mb-1">NSE · INEGI</div>
          <div className="text-[10px] font-semibold text-foreground">Medio-Alto</div>
          <div className="text-[8px] text-muted mt-0.5">12,400 hog.</div>
        </div>

        {/* Row 2 */}
        <div className="bg-card/50 border border-card-border/50 rounded-lg p-2 backdrop-blur-sm">
          <div className="text-[7px] uppercase tracking-widest text-muted font-semibold mb-1">Apreciación</div>
          <div className="text-sm font-bold text-foreground tabular-nums">+12.4%</div>
          <div className="text-[8px] text-muted mt-0.5">anual zona</div>
        </div>

        <div className="bg-card/50 border border-card-border/50 rounded-lg p-2 backdrop-blur-sm">
          <div className="text-[7px] uppercase tracking-widest text-muted font-semibold mb-1">Liquidez</div>
          <div className="text-sm font-bold text-foreground tabular-nums">6.2/10</div>
          <div className="text-[8px] text-accent mt-0.5">Media-alta</div>
        </div>

        <div className="bg-card/50 border border-card-border/50 rounded-lg p-2 backdrop-blur-sm">
          <div className="text-[7px] uppercase tracking-widest text-muted font-semibold mb-1">Días mercado</div>
          <div className="text-sm font-bold text-foreground tabular-nums">42 días</div>
          <div className="text-[8px] text-muted mt-0.5">prom. zona</div>
        </div>

        <div className="bg-card/50 border border-card-border/50 rounded-lg p-2 backdrop-blur-sm">
          <div className="text-[7px] uppercase tracking-widest text-muted font-semibold mb-1">Listings</div>
          <div className="text-sm font-bold text-foreground tabular-nums">23</div>
          <div className="text-[8px] text-muted mt-0.5">activos zona</div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-10"
        style={{ background: "linear-gradient(to top, rgba(59,130,246,0.07), transparent)" }} />
    </div>
  );
}

export function SCockpit() {
  return (
    <Slide mode="dark">
      <FadeStack className="flex flex-col gap-5">
        <FadeItem>
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.18em] text-muted">La diferencia</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold leading-[1.05] text-foreground tracking-[-0.015em] mt-2">
            Misma propiedad.{" "}
            <em className="italic text-gradient-accent">Dos mundos.</em>
          </h2>
          <p className="mt-2 text-sm text-muted max-w-2xl leading-relaxed">
            Un portal es la vitrina donde se exhiben propiedades. Inmobiq es la herramienta que
            usa el broker detrás del mostrador — para entender el mercado, valuar con precisión
            y cerrar mejor. Nunca compite con la vitrina.
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
