interface StatCardProps {
  value: string;
  label: string;
  hint?: string;
  accent?: boolean;
  className?: string;
}

export function StatCard({ value, label, hint, accent = false, className = "" }: StatCardProps) {
  return (
    <div
      className={`rounded-2xl border p-6 sm:p-7 bg-card border-card-border ${
        accent ? "glow-accent-subtle" : ""
      } ${className}`}
    >
      <div
        className={`text-4xl sm:text-5xl md:text-6xl font-semibold leading-none mb-2 ${
          accent ? "text-gradient-accent" : "text-foreground"
        }`}
      >
        {value}
      </div>
      <div className="text-sm font-medium text-foreground/90 uppercase tracking-wider mt-3">
        {label}
      </div>
      {hint && <div className="text-xs text-muted mt-1.5">{hint}</div>}
    </div>
  );
}
