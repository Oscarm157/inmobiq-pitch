"use client";

import { motion } from "motion/react";
import { useMemo } from "react";
import { ZONE_GEOJSON, getPriceColor } from "@/lib/geo-data";

type Coord = [number, number];
type Ring = Coord[];

const MOCK_PRICE_PER_M2: Record<string, number> = {
  "zona-rio": 42000,
  "hipodromo-chapultepec": 38000,
  "cacho": 34000,
  "agua-caliente": 32000,
  "lomas-de-agua-caliente": 33000,
  "playas-de-tijuana": 36000,
  "centro": 26000,
  "otay": 24000,
  "otay-universidad": 27000,
  "la-mesa": 23000,
  "libertad": 19000,
  "soler": 21000,
  "cerro-colorado": 18000,
  "zona-este": 15000,
  "las-americas": 22000,
  "el-lago-cucapah": 16000,
  "natura": 28000,
  "santa-fe": 22000,
  "colinas-de-california": 24000,
  "lomas-virreyes": 20000,
  "insurgentes": 17000,
  "el-florido": 14000,
  "terrazas-de-la-presa": 15000,
  "baja-malibu": 33000,
  "real-del-mar": 30000,
  "san-antonio-del-mar": 28000,
  "punta-bandera": 27000,
  "costa-coronado": 31000,
};

const LABELED_ZONES = new Set([
  "zona-rio",
  "playas-de-tijuana",
  "otay",
  "centro",
  "la-mesa",
  "hipodromo-chapultepec",
]);

const PULSE_ZONES = ["zona-rio", "otay-universidad", "natura", "playas-de-tijuana"];

const VIEWBOX_W = 500;
const VIEWBOX_H = 360;
const PAD = 14;

function computeBounds(features: GeoJSON.Feature[]) {
  let minLng = Infinity, maxLng = -Infinity, minLat = Infinity, maxLat = -Infinity;
  for (const f of features) {
    const geom = f.geometry as GeoJSON.Polygon | GeoJSON.MultiPolygon;
    const rings: Ring[] =
      geom.type === "MultiPolygon"
        ? geom.coordinates.map((p) => p[0] as Ring)
        : [geom.coordinates[0] as Ring];
    for (const ring of rings) {
      for (const [lng, lat] of ring) {
        if (lng < minLng) minLng = lng;
        if (lng > maxLng) maxLng = lng;
        if (lat < minLat) minLat = lat;
        if (lat > maxLat) maxLat = lat;
      }
    }
  }
  return { minLng, maxLng, minLat, maxLat };
}

function makeProjector(bounds: ReturnType<typeof computeBounds>) {
  const { minLng, maxLng, minLat, maxLat } = bounds;
  const midLat = (minLat + maxLat) / 2;
  const cosLat = Math.cos((midLat * Math.PI) / 180);
  const dLng = (maxLng - minLng) * cosLat;
  const dLat = maxLat - minLat;
  const availW = VIEWBOX_W - PAD * 2;
  const availH = VIEWBOX_H - PAD * 2;
  const scale = Math.min(availW / dLng, availH / dLat);
  const mapW = dLng * scale;
  const mapH = dLat * scale;
  const offX = (VIEWBOX_W - mapW) / 2;
  const offY = (VIEWBOX_H - mapH) / 2;
  return (lng: number, lat: number): Coord => [
    offX + (lng - minLng) * cosLat * scale,
    offY + (maxLat - lat) * scale,
  ];
}

function ringToPath(ring: Ring, project: (lng: number, lat: number) => Coord): string {
  if (ring.length === 0) return "";
  const pts = ring.map(([lng, lat]) => project(lng, lat));
  const [x0, y0] = pts[0];
  let d = `M${x0.toFixed(2)},${y0.toFixed(2)}`;
  for (let i = 1; i < pts.length; i++) {
    const [x, y] = pts[i];
    d += `L${x.toFixed(2)},${y.toFixed(2)}`;
  }
  return d + "Z";
}

function featureToPath(
  feature: GeoJSON.Feature,
  project: (lng: number, lat: number) => Coord,
): string {
  const geom = feature.geometry as GeoJSON.Polygon | GeoJSON.MultiPolygon;
  if (geom.type === "MultiPolygon") {
    return geom.coordinates.map((poly) => ringToPath(poly[0] as Ring, project)).join(" ");
  }
  return ringToPath(geom.coordinates[0] as Ring, project);
}

function featureCentroid(
  feature: GeoJSON.Feature,
  project: (lng: number, lat: number) => Coord,
): Coord {
  const geom = feature.geometry as GeoJSON.Polygon | GeoJSON.MultiPolygon;
  const ring: Ring =
    geom.type === "MultiPolygon"
      ? (geom.coordinates[0][0] as Ring)
      : (geom.coordinates[0] as Ring);
  let sx = 0, sy = 0, n = 0;
  for (const [lng, lat] of ring.slice(0, -1)) {
    const [x, y] = project(lng, lat);
    sx += x;
    sy += y;
    n++;
  }
  return [sx / n, sy / n];
}

export function TijuanaChoropleth() {
  const { paths, labels, dots } = useMemo(() => {
    const features = ZONE_GEOJSON.features;
    const bounds = computeBounds(features);
    const project = makeProjector(bounds);

    const raw = features.map((f) => {
      const slug = (f.properties as { slug: string }).slug;
      const name = (f.properties as { name: string }).name;
      const price = MOCK_PRICE_PER_M2[slug] ?? 20000;
      return {
        slug,
        name,
        price,
        color: getPriceColor(price),
        d: featureToPath(f, project),
        centroid: featureCentroid(f, project),
      };
    });

    const cx = VIEWBOX_W / 2;
    const cy = VIEWBOX_H / 2;
    const withDist = raw
      .map((r) => ({
        ...r,
        dist: Math.hypot(r.centroid[0] - cx, r.centroid[1] - cy),
      }))
      .sort((a, b) => a.dist - b.dist);

    const paths = withDist.map((r, i) => ({ ...r, orderIdx: i }));
    const labels = paths.filter((p) => LABELED_ZONES.has(p.slug));
    const dots = paths.filter((p) => PULSE_ZONES.includes(p.slug));

    return { paths, labels, dots };
  }, []);

  return (
    <div className="relative w-full h-full">
      <svg
        viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
        className="w-full h-full overflow-visible"
        aria-label="Mapa de zonas de Tijuana"
      >
        <defs>
          <radialGradient id="choroAmbient" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </radialGradient>
          <filter id="choroGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect x="0" y="0" width={VIEWBOX_W} height={VIEWBOX_H} fill="url(#choroAmbient)" />

        {paths.map((p) => (
          <motion.path
            key={p.slug}
            d={p.d}
            fill={p.color}
            stroke={p.color}
            strokeWidth={0.8}
            strokeLinejoin="round"
            initial={{ opacity: 0, fillOpacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, fillOpacity: 0.55, pathLength: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.2 + p.orderIdx * 0.035,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ strokeOpacity: 0.85 }}
          />
        ))}

        {dots.map((d, i) => (
          <motion.circle
            key={`dot-${d.slug}`}
            cx={d.centroid[0]}
            cy={d.centroid[1]}
            r={3.5}
            fill="#93c5fd"
            filter="url(#choroGlow)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.4 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <animate
              attributeName="r"
              values="3.5;5.5;3.5"
              dur="2.4s"
              begin={`${i * 0.4}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="1;0.6;1"
              dur="2.4s"
              begin={`${i * 0.4}s`}
              repeatCount="indefinite"
            />
          </motion.circle>
        ))}

        {labels.map((l, i) => (
          <motion.text
            key={`label-${l.slug}`}
            x={l.centroid[0]}
            y={l.centroid[1]}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="8.5"
            fontWeight="600"
            fill="#e5e7eb"
            style={{
              fontFamily: "var(--font-sans, 'Plus Jakarta Sans')",
              letterSpacing: "0.02em",
              paintOrder: "stroke",
              stroke: "#0a0a0a",
              strokeWidth: 2.5,
              strokeOpacity: 0.7,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.6 + i * 0.08 }}
          >
            {l.name}
          </motion.text>
        ))}
      </svg>

      <HeroMetricPills />
    </div>
  );
}

function HeroMetricPills() {
  const pills = [
    {
      label: "Cap rate ~7%",
      sub: "Rendimiento renta · zonas consolidadas",
      pos: "top-2 left-0",
      delay: 1.8,
    },
    {
      label: "$3.2M MXN",
      sub: "Ticket promedio · residencial venta",
      pos: "top-[42%] right-0",
      delay: 2.05,
    },
    {
      label: "Casa · Depto · Local",
      sub: "Tipologías · venta y renta por zona",
      pos: "bottom-2 left-6",
      delay: 2.3,
    },
  ];

  return (
    <>
      {pills.map((p) => (
        <motion.div
          key={p.label}
          initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: p.delay, ease: [0.16, 1, 0.3, 1] }}
          className={`absolute ${p.pos} rounded-xl border border-white/10 bg-card/70 backdrop-blur-md px-3.5 py-2.5 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.6)]`}
        >
          <div className="flex items-center gap-2">
            <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-accent-light" />
            <span className="text-sm font-semibold tabular-nums text-foreground tracking-tight">
              {p.label}
            </span>
          </div>
          <div className="text-[10px] uppercase tracking-[0.14em] text-muted mt-0.5 whitespace-nowrap">
            {p.sub}
          </div>
        </motion.div>
      ))}
    </>
  );
}
