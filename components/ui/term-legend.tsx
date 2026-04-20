interface Term {
  term: string;
  def: string;
}

export function TermLegend({ terms }: { terms: Term[] }) {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 pt-2 border-t border-card-border/50">
      {terms.map((t) => (
        <span key={t.term} className="text-[10px] text-muted leading-snug">
          <span className="font-semibold text-muted-light uppercase tracking-wide">{t.term}</span>
          {" "}= {t.def}
        </span>
      ))}
    </div>
  );
}
