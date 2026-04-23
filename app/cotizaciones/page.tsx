"use client";

import { useMemo, useState } from "react";
import { pricing, brand } from "@/lib/data";

const IVA = 0.16;

type LineItem = {
  planKey: "explorador" | "pro" | "empresarial";
  qty: number;
  months: number;
  discountPct: number;
};

const todayISO = () => {
  const d = new Date();
  return d.toISOString().slice(0, 10);
};

const plusDays = (iso: string, days: number) => {
  const d = new Date(iso);
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
};

const fmtMxn = (n: number) =>
  new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(n);

const fmtDate = (iso: string) => {
  if (!iso) return "";
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString("es-MX", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

const planByKey = {
  explorador: pricing[0],
  pro: pricing[1],
  empresarial: pricing[2],
} as const;

export default function CotizacionesPage() {
  const [folio, setFolio] = useState("COT-2026-0001");
  const [issued, setIssued] = useState(todayISO());
  const [validUntil, setValidUntil] = useState(plusDays(todayISO(), 15));

  const [clientName, setClientName] = useState("María Fernández");
  const [clientCompany, setClientCompany] = useState("Century 21 Baja");
  const [clientEmail, setClientEmail] = useState("maria@c21baja.mx");
  const [clientPhone, setClientPhone] = useState("+52 664 000 0000");

  const [items, setItems] = useState<LineItem[]>([
    { planKey: "empresarial", qty: 1, months: 12, discountPct: 10 },
  ]);

  const [notes, setNotes] = useState(
    "Activación en 24-48h hábiles tras confirmar el pago. Incluye onboarding personalizado y capacitación para el equipo. La suscripción se renueva automáticamente salvo cancelación con 15 días de anticipación."
  );

  const lines = useMemo(() => {
    return items.map((it) => {
      const plan = planByKey[it.planKey];
      const monthly = plan.price_mxn;
      const gross = monthly * it.qty * it.months;
      const discount = gross * (it.discountPct / 100);
      const subtotal = gross - discount;
      return { ...it, plan, monthly, gross, discount, subtotal };
    });
  }, [items]);

  const subtotal = lines.reduce((s, l) => s + l.subtotal, 0);
  const iva = Math.round(subtotal * IVA);
  const total = subtotal + iva;

  const updateItem = (idx: number, patch: Partial<LineItem>) =>
    setItems((prev) => prev.map((it, i) => (i === idx ? { ...it, ...patch } : it)));

  const addItem = () =>
    setItems((prev) => [...prev, { planKey: "pro", qty: 1, months: 12, discountPct: 0 }]);

  const removeItem = (idx: number) =>
    setItems((prev) => prev.filter((_, i) => i !== idx));

  return (
    <main className="slide-light min-h-screen w-full">
      {/* Toolbar — hidden on print */}
      <div className="no-print sticky top-0 z-20 border-b border-card-border bg-background/85 backdrop-blur">
        <div className="max-w-[900px] mx-auto px-6 py-3 flex items-center justify-between">
          <div className="text-xs uppercase tracking-[0.22em] font-semibold text-muted">
            Plantilla · edita los campos y exporta
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition"
            >
              Imprimir / PDF
            </button>
          </div>
        </div>
      </div>

      <div className="doc max-w-[900px] mx-auto px-8 sm:px-12 py-12 text-foreground">
        {/* Encabezado */}
        <header className="flex items-start justify-between gap-6 pb-8 border-b border-card-border">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold tracking-tight text-primary">
                {brand.name}
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
            </div>
            <p className="mt-1 text-xs text-muted max-w-xs leading-snug">
              {brand.tagline}
            </p>
          </div>
          <div className="text-right">
            <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-muted">
              Cotización
            </div>
            <div className="mt-1 font-mono text-lg text-primary">
              <Editable value={folio} onChange={setFolio} className="text-right" />
            </div>
            <dl className="mt-3 text-xs text-muted grid grid-cols-[auto_auto] gap-x-3 gap-y-1 justify-end">
              <dt className="text-right">Emitida</dt>
              <dd className="text-foreground tabular-nums text-right">
                <DateField value={issued} onChange={setIssued} />
              </dd>
              <dt className="text-right">Vigencia</dt>
              <dd className="text-foreground tabular-nums text-right">
                <DateField value={validUntil} onChange={setValidUntil} />
              </dd>
            </dl>
          </div>
        </header>

        {/* Partes */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-8 border-b border-card-border">
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-muted mb-2">
              De
            </div>
            <div className="text-sm text-foreground font-semibold">{brand.founder}</div>
            <div className="text-sm text-muted">Fundador · {brand.name}</div>
            <div className="text-sm text-muted">oscar@{brand.url}</div>
            <div className="text-sm text-muted">{brand.url}</div>
            <div className="text-sm text-muted">{brand.city}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-muted mb-2">
              Preparado para
            </div>
            <div className="text-sm text-foreground font-semibold">
              <Editable value={clientName} onChange={setClientName} />
            </div>
            <div className="text-sm text-muted">
              <Editable value={clientCompany} onChange={setClientCompany} />
            </div>
            <div className="text-sm text-muted">
              <Editable value={clientEmail} onChange={setClientEmail} />
            </div>
            <div className="text-sm text-muted">
              <Editable value={clientPhone} onChange={setClientPhone} />
            </div>
          </div>
        </section>

        {/* Resumen */}
        <section className="py-8">
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.01em] text-primary">
            Acceso a <em className="italic text-gradient-accent">Inmobiq</em> para su operación
          </h1>
          <p className="mt-2 text-sm text-muted leading-relaxed max-w-2xl">
            Inteligencia inmobiliaria del mercado mexicano: valuaciones confiables, comparadores,
            panorama de ciudad y análisis de riesgo — todo desde un solo panel.
          </p>
        </section>

        {/* Tabla de conceptos */}
        <section>
          <div className="overflow-hidden rounded-xl border border-card-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-muted text-[10px] uppercase tracking-[0.16em] font-semibold text-muted">
                  <th className="text-left px-4 py-3 w-[38%]">Concepto</th>
                  <th className="text-right px-3 py-3">Usuarios</th>
                  <th className="text-right px-3 py-3">Meses</th>
                  <th className="text-right px-3 py-3">Mensual</th>
                  <th className="text-right px-3 py-3">Desc.</th>
                  <th className="text-right px-4 py-3">Subtotal</th>
                  <th className="no-print w-8" />
                </tr>
              </thead>
              <tbody>
                {lines.map((l, i) => (
                  <tr key={i} className="border-t border-card-border align-top">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <select
                          value={l.planKey}
                          onChange={(e) =>
                            updateItem(i, { planKey: e.target.value as LineItem["planKey"] })
                          }
                          className="no-print bg-transparent font-semibold text-foreground text-sm border-0 focus:outline-none focus:ring-1 focus:ring-accent/40 rounded px-1 -ml-1"
                        >
                          <option value="explorador">Explorador</option>
                          <option value="pro">Pro</option>
                          <option value="empresarial">Empresarial</option>
                        </select>
                        <span className="print-only font-semibold text-foreground">
                          {l.plan.name}
                        </span>
                        {l.plan.price_mxn > 0 && (
                          <span className="text-[10px] uppercase tracking-[0.18em] text-accent font-semibold">
                            {l.plan.cost_per_valuation}
                          </span>
                        )}
                      </div>
                      <div className="mt-1.5 text-xs text-muted leading-snug">{l.plan.target}</div>
                      <ul className="mt-2 text-[11px] text-muted/90 leading-relaxed list-disc pl-4 space-y-0.5">
                        {l.plan.features.slice(0, 4).map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-3 py-3 text-right">
                      <NumberField
                        value={l.qty}
                        onChange={(v) => updateItem(i, { qty: Math.max(1, v) })}
                      />
                    </td>
                    <td className="px-3 py-3 text-right">
                      <NumberField
                        value={l.months}
                        onChange={(v) => updateItem(i, { months: Math.max(1, v) })}
                      />
                    </td>
                    <td className="px-3 py-3 text-right tabular-nums text-muted">
                      {l.monthly > 0 ? fmtMxn(l.monthly) : "—"}
                    </td>
                    <td className="px-3 py-3 text-right tabular-nums text-muted">
                      <NumberField
                        value={l.discountPct}
                        onChange={(v) =>
                          updateItem(i, { discountPct: Math.max(0, Math.min(100, v)) })
                        }
                        suffix="%"
                      />
                    </td>
                    <td className="px-4 py-3 text-right tabular-nums font-semibold text-foreground">
                      {fmtMxn(l.subtotal)}
                    </td>
                    <td className="no-print px-2 py-3 text-right">
                      {items.length > 1 && (
                        <button
                          onClick={() => removeItem(i)}
                          className="text-muted hover:text-danger text-xs"
                          aria-label="Eliminar"
                        >
                          ×
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="no-print mt-2">
            <button
              onClick={addItem}
              className="text-xs text-accent hover:underline font-semibold"
            >
              + Agregar concepto
            </button>
          </div>

          {/* Totales */}
          <div className="mt-6 flex justify-end">
            <div className="w-full sm:w-[340px] text-sm">
              <Row label="Subtotal" value={fmtMxn(subtotal)} />
              <Row label={`IVA (${Math.round(IVA * 100)}%)`} value={fmtMxn(iva)} />
              <div className="mt-2 pt-3 border-t border-card-border flex items-baseline justify-between">
                <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-muted">
                  Total MXN
                </span>
                <span className="text-2xl font-semibold tabular-nums text-gradient-accent">
                  {fmtMxn(total)}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Notas */}
        <section className="mt-10 rounded-xl bg-surface-muted/70 border border-card-border p-5">
          <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-muted mb-2">
            Notas y términos
          </div>
          <Editable
            value={notes}
            onChange={setNotes}
            multiline
            className="text-sm text-foreground/90 leading-relaxed block w-full"
          />
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-muted">
            <li>• Precios en pesos mexicanos (MXN), sin IVA.</li>
            <li>• Vigencia de la cotización: hasta {fmtDate(validUntil)}.</li>
            <li>• Facturación CFDI 4.0 a solicitud del cliente.</li>
            <li>• Pagos: transferencia SPEI o tarjeta (Stripe).</li>
          </ul>
        </section>

        {/* Firma */}
        <footer className="mt-10 pt-6 border-t border-card-border flex items-end justify-between gap-6">
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-muted">
              Aceptación
            </div>
            <div className="mt-10 w-64 border-t border-primary/60" />
            <div className="mt-1 text-xs text-muted">Firma del cliente</div>
          </div>
          <div className="text-right">
            <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-muted">
              {brand.name}
            </div>
            <div className="mt-1 text-sm text-primary font-semibold">{brand.founder}</div>
            <div className="text-xs text-muted">{brand.url}</div>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        @page {
          size: Letter;
          margin: 14mm 12mm;
        }
        @media print {
          .no-print {
            display: none !important;
          }
          .doc {
            padding: 0 !important;
            max-width: 100% !important;
          }
          html,
          body {
            background: #ffffff !important;
          }
          select,
          input {
            -webkit-appearance: none;
            appearance: none;
            background: transparent !important;
            border: 0 !important;
            color: inherit !important;
          }
        }
        @media not print {
          .print-only {
            display: none;
          }
        }
      `}</style>
    </main>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between py-1.5">
      <span className="text-muted">{label}</span>
      <span className="tabular-nums text-foreground">{value}</span>
    </div>
  );
}

function Editable({
  value,
  onChange,
  multiline = false,
  className = "",
}: {
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
  className?: string;
}) {
  const base =
    "bg-transparent border-0 focus:outline-none focus:ring-1 focus:ring-accent/40 rounded px-1 -mx-1";
  if (multiline) {
    return (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={3}
        className={`${base} resize-none ${className}`}
      />
    );
  }
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`${base} ${className}`}
      style={{ width: `${Math.max(value.length, 6)}ch` }}
    />
  );
}

function DateField({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <>
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="no-print bg-transparent border-0 focus:outline-none focus:ring-1 focus:ring-accent/40 rounded px-1 text-right tabular-nums"
      />
      <span className="print-only">{fmtDate(value)}</span>
    </>
  );
}

function NumberField({
  value,
  onChange,
  suffix,
}: {
  value: number;
  onChange: (v: number) => void;
  suffix?: string;
}) {
  return (
    <span className="inline-flex items-baseline justify-end gap-0.5 tabular-nums">
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value) || 0)}
        className="bg-transparent border-0 focus:outline-none focus:ring-1 focus:ring-accent/40 rounded px-1 text-right tabular-nums w-14 text-foreground"
      />
      {suffix && <span className="text-muted text-xs">{suffix}</span>}
    </span>
  );
}
