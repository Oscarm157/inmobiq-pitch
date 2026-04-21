import { Slide } from "../slide";
import { FadeStack, FadeItem } from "../ui/motion-primitives";

const fakeListings = [
  { price: "$1.85M", zone: "Zona Río",    type: "Depto", m2: "75m²",  photo: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=200&h=120&fit=crop" },
  { price: "$3.2M",  zone: "Playas",      type: "Casa",  m2: "180m²", photo: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=200&h=120&fit=crop" },
  { price: "$980K",  zone: "Otay",        type: "Depto", m2: "52m²",  photo: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=200&h=120&fit=crop" },
  { price: "$2.1M",  zone: "Chapultepec", type: "Casa",  m2: "130m²", photo: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=200&h=120&fit=crop" },
  { price: "$4.5M",  zone: "Playas",      type: "Casa",  m2: "240m²", photo: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=200&h=120&fit=crop" },
  { price: "$1.2M",  zone: "Otay",        type: "Depto", m2: "60m²",  photo: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=200&h=120&fit=crop" },
  { price: "$890K",  zone: "Sanchez T.",  type: "Depto", m2: "48m²",  photo: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=200&h=120&fit=crop" },
  { price: "$2.8M",  zone: "Zona Río",    type: "Casa",  m2: "155m²", photo: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=200&h=120&fit=crop" },
  { price: "$1.5M",  zone: "Chapultepec", type: "Depto", m2: "80m²",  photo: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=200&h=120&fit=crop" },
  { price: "$3.9M",  zone: "Playas",      type: "Casa",  m2: "210m²", photo: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=200&h=120&fit=crop" },
  { price: "$760K",  zone: "Otay",        type: "Depto", m2: "44m²",  photo: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=200&h=120&fit=crop" },
  { price: "$1.1M",  zone: "Sanchez T.",  type: "Depto", m2: "58m²",  photo: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=200&h=120&fit=crop" },
];

const topZones = [
  { name: "Zona Río", pm2: "$24.6K", trend: "+3.2%", risk: "Bajo", bar: 88 },
  { name: "Playas de TJ", pm2: "$19.8K", trend: "+5.1%", risk: "Bajo", bar: 76 },
  { name: "Chapultepec", pm2: "$17.2K", trend: "+2.8%", risk: "Medio", bar: 65 },
  { name: "Otay", pm2: "$13.4K", trend: "+1.9%", risk: "Medio", bar: 52 },
];

const cityKpis = [
  { label: "Precio/m² promedio", value: "$18.7K", sub: "TJ residencial venta" },
  { label: "Variación mensual", value: "+2.4%", sub: "vs mes anterior", accent: true },
  { label: "Listings activos", value: "3,247", sub: "en 30 zonas" },
  { label: "Zonas en alza", value: "22 / 30", sub: "tendencia positiva", accent: true },
];

function ChaosView() {
  return (
    <div className="bg-[#15151f] px-5 py-4 flex flex-col gap-3 relative border-r border-card-border overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-muted/40" />
          <span className="text-[9px] uppercase tracking-[0.22em] font-semibold text-muted">Sin Inmobiq</span>
        </div>
        <span className="text-[9px] text-danger font-mono">3,247 resultados</span>
      </div>

      {/* Fake search bar */}
      <div className="flex items-center gap-2 bg-card/40 border border-card-border/50 rounded-lg px-3 py-1.5">
        <span className="material-symbols-outlined text-muted/40" style={{ fontSize: 14 }}>search</span>
        <span className="text-[10px] text-muted/40 italic">casas tijuana venta...</span>
      </div>

      {/* Chaos grid */}
      <div className="grid grid-cols-3 gap-1.5 flex-1">
        {fakeListings.map((l, i) => (
          <div key={i} className="bg-card/60 border border-card-border/40 rounded-lg p-2 flex flex-col gap-0.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={l.photo}
              alt={`${l.type} en ${l.zone}`}
              className="w-full h-12 object-cover rounded mb-1"
              loading="lazy"
            />
            <div className="text-[8px] font-semibold text-foreground/85 tabular-nums">{l.price}</div>
            <div className="text-[7px] text-muted/70">{l.zone}</div>
            <div className="text-[7px] text-muted/60">{l.type} · {l.m2}</div>
          </div>
        ))}
      </div>

      {/* Pain stats */}
      <div className="flex items-center justify-around border-t border-card-border/30 pt-2.5">
        {[
          { v: "~40 hrs", l: "revisión manual" },
          { v: "0 patrones", l: "visibles" },
          { v: "sin contexto", l: "de zona" },
        ].map((s) => (
          <div key={s.l} className="text-center">
            <div className="text-[11px] font-semibold text-danger/70">{s.v}</div>
            <div className="text-[8px] text-muted/50">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RadarView() {
  return (
    <div className="bg-[#08080f] px-5 py-4 flex flex-col gap-3 relative overflow-hidden">
      {/* scan lines subtle */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 4px)" }} />

      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[9px] uppercase tracking-[0.22em] font-semibold text-accent">Panorama Inmobiq</span>
        </div>
        <span className="text-[8px] font-mono text-muted/60">Tijuana · 30 zonas · en vivo</span>
      </div>

      {/* City KPIs */}
      <div className="grid grid-cols-4 gap-1.5 relative z-10">
        {cityKpis.map((k) => (
          <div key={k.label} className="bg-card/50 border border-card-border/50 rounded-lg p-2 backdrop-blur-sm">
            <div className="text-[7px] uppercase tracking-widest text-muted font-semibold mb-1 leading-tight">{k.label}</div>
            <div className={`text-sm font-bold tabular-nums ${k.accent ? "text-gradient-accent" : "text-foreground"}`}>{k.value}</div>
            <div className="text-[7px] text-muted mt-0.5">{k.sub}</div>
          </div>
        ))}
      </div>

      {/* Zone map simulation */}
      <div className="relative z-10 bg-card/40 border border-card-border/50 rounded-xl p-3 flex gap-3">
        {/* Fake choropleth */}
        <div className="flex-shrink-0 w-28 relative">
          <div className="text-[7px] uppercase tracking-widest text-muted font-semibold mb-1.5">Mapa de zonas</div>
          <div className="grid grid-cols-4 grid-rows-4 gap-0.5 aspect-square">
            {[
              "bg-accent/80","bg-accent/50","bg-accent/30","bg-card-border/40",
              "bg-accent/60","bg-accent/90","bg-accent/40","bg-accent/20",
              "bg-accent/20","bg-accent/50","bg-accent/70","bg-card-border/30",
              "bg-card-border/40","bg-accent/30","bg-accent/60","bg-accent/40",
            ].map((c, i) => (
              <div key={i} className={`${c} rounded-sm`} />
            ))}
          </div>
          <div className="flex items-center justify-between mt-1.5">
            <span className="text-[6px] text-muted">Bajo</span>
            <div className="flex-1 mx-1 h-1 rounded-full" style={{ background: "linear-gradient(to right, rgba(59,130,246,0.2), rgba(59,130,246,0.9))" }} />
            <span className="text-[6px] text-muted">Alto</span>
          </div>
        </div>

        {/* Top zones ranking */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="text-[7px] uppercase tracking-widest text-muted font-semibold">Top zonas · precio/m²</div>
          {topZones.map((z) => (
            <div key={z.name} className="flex items-center gap-2">
              <div className="text-[8px] text-foreground/80 w-20 flex-shrink-0">{z.name}</div>
              <div className="flex-1 h-1.5 bg-card-border rounded-full overflow-hidden">
                <div className="h-full bg-accent rounded-full transition-all" style={{ width: `${z.bar}%` }} />
              </div>
              <div className="text-[8px] font-semibold text-foreground tabular-nums w-12 text-right">{z.pm2}</div>
              <div className="text-[8px] text-emerald-300 font-semibold w-8 text-right">{z.trend}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mini trend + insight row */}
      <div className="grid grid-cols-3 gap-1.5 relative z-10">
        <div className="bg-card/50 border border-card-border/50 rounded-lg p-2 backdrop-blur-sm col-span-2">
          <div className="text-[7px] uppercase tracking-widest text-muted font-semibold mb-1.5">Tendencia de precios · TJ residencial</div>
          <svg viewBox="0 0 160 32" className="w-full h-6">
            <polyline
              points="0,28 20,24 40,22 60,20 80,18 100,15 120,12 140,10 160,8"
              fill="none" stroke="rgba(59,130,246,0.8)" strokeWidth="1.5" strokeLinecap="round"
            />
            <polyline
              points="0,28 20,24 40,22 60,20 80,18 100,15 120,12 140,10 160,8"
              fill="url(#trendGrad)" stroke="none"
            />
            <defs>
              <linearGradient id="trendGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(59,130,246,0.2)" />
                <stop offset="100%" stopColor="rgba(59,130,246,0)" />
              </linearGradient>
            </defs>
          </svg>
          <div className="flex justify-between text-[6px] text-muted/60 mt-0.5">
            <span>Ene</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="bg-emerald-400/10 border border-emerald-400/30 rounded-lg p-2 flex-1">
            <div className="text-[7px] text-emerald-300 font-semibold uppercase tracking-wide">Zona en alza</div>
            <div className="text-[10px] font-bold text-foreground mt-0.5">Playas TJ</div>
            <div className="text-[7px] text-emerald-300">+5.1% mensual</div>
          </div>
          <div className="bg-warning/10 border border-warning/30 rounded-lg p-2 flex-1">
            <div className="text-[7px] text-warning font-semibold uppercase tracking-wide">Zona a vigilar</div>
            <div className="text-[10px] font-bold text-foreground mt-0.5">Sanchez T.</div>
            <div className="text-[7px] text-warning">volatilidad alta</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none z-10"
        style={{ background: "linear-gradient(to top, rgba(59,130,246,0.06), transparent)" }} />
    </div>
  );
}

export function SRadar() {
  return (
    <Slide mode="dark">
      <FadeStack className="flex flex-col gap-5">
        <FadeItem>
          <div className="text-xs uppercase tracking-[0.18em] text-muted">El panorama completo</div>
          <h2 className="text-4xl sm:text-5xl font-bold leading-[1.05] text-foreground tracking-[-0.015em] mt-2">
            3,247 propiedades.{" "}
            <em className="italic text-gradient-accent">Un vistazo.</em>
          </h2>
          <p className="mt-2 text-sm text-muted max-w-2xl leading-relaxed">
            Antes: abrir cada anuncio, copiar precios a un Excel, intentar ver patrones en el ruido.
            Con Inmobiq: el radar completo de la ciudad — zonas, tendencias, riesgo y precios en una sola pantalla.
          </p>
        </FadeItem>

        <FadeItem>
          <div className="grid grid-cols-2 rounded-2xl overflow-hidden border border-card-border shadow-[0_24px_64px_-8px_rgba(0,0,0,0.7)]">
            <ChaosView />
            <RadarView />
          </div>
        </FadeItem>
      </FadeStack>
    </Slide>
  );
}
