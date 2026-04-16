interface SectionHeaderProps {
  number?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeader({ number, eyebrow, title, subtitle, align = "left" }: SectionHeaderProps) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start";
  return (
    <div className={`flex flex-col ${alignClass} mb-8 sm:mb-12`}>
      {(number || eyebrow) && (
        <div className="flex items-center gap-3 mb-4">
          {number && (
            <span className="font-mono text-xs font-semibold text-accent tabular-nums tracking-widest">
              {number}
            </span>
          )}
          {eyebrow && (
            <span className="text-xs uppercase tracking-[0.18em] text-muted font-medium">
              {eyebrow}
            </span>
          )}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] text-foreground max-w-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
