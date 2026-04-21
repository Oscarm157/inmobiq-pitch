import { Slide } from "../slide";
import { FadeStack, FadeItem } from "../ui/motion-primitives";
import { competitors } from "@/lib/data";

export function S06Differentiator() {
  return (
    <Slide mode="dark" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <FadeStack className="relative z-10 flex flex-col gap-10">
        <FadeItem>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold tracking-[0.22em] text-accent">06</span>
            <span className="text-xs uppercase tracking-[0.18em] text-muted-light">Diferenciador</span>
          </div>
        </FadeItem>

        <FadeItem>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] text-foreground tracking-[-0.015em] max-w-4xl">
            Ellos muestran anuncios.{" "}
            <em className="italic text-gradient-accent">Nosotros damos claridad.</em>
          </h2>
        </FadeItem>

        <FadeItem>
          <div className="rounded-2xl bg-card overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="text-left">
                  <th className="px-5 py-4 text-[11px] uppercase tracking-[0.18em] font-semibold text-muted">Competidor</th>
                  <th className="px-5 py-4 text-[11px] uppercase tracking-[0.18em] font-semibold text-muted">Foco</th>
                  <th className="px-5 py-4 text-[11px] uppercase tracking-[0.18em] font-semibold text-muted">Data</th>
                  <th className="px-5 py-4 text-[11px] uppercase tracking-[0.18em] font-semibold text-muted">Característica</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((c, i) => {
                  const isUs = c.name === "Inmobiq";
                  return (
                    <tr
                      key={c.name}
                      className={`${
                        isUs
                          ? "bg-accent/10 border-l-2 border-accent"
                          : i % 2 === 0
                          ? "bg-transparent"
                          : "bg-surface-muted/40"
                      }`}
                    >
                      <td className={`px-5 py-4 font-semibold ${isUs ? "text-accent" : "text-foreground"}`}>
                        {isUs && "→ "}
                        {c.name}
                      </td>
                      <td className="px-5 py-4 text-sm text-foreground/80">{c.focus}</td>
                      <td className="px-5 py-4 text-sm text-muted">{c.data_source}</td>
                      <td className="px-5 py-4 text-sm text-foreground/80 italic">{c.differentiator}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </FadeItem>

        <FadeItem>
          <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.18em] text-muted pt-4">
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent" />
              No competimos volumen
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent" />
              Competimos confianza
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent" />
              Modelo boutique
            </span>
          </div>
        </FadeItem>
      </FadeStack>
    </Slide>
  );
}
