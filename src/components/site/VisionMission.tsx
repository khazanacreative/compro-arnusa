import { Target, Compass, Check } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const missions = [
  "Deliver high-quality, timely, and cost-effective ship agency services.",
  "Continuously improve operational efficiency and reliability.",
  "Maintain compliance with international maritime regulations.",
  "Promote environmentally responsible maritime operations.",
  "Ensure customer satisfaction through professional service delivery.",
];

export function VisionMission() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative bg-muted/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
            Our Direction
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-primary sm:text-4xl lg:text-5xl">
            Vision &amp; Mission
          </h2>
          <div className="mx-auto mt-5 h-1 w-16 bg-highlight" />
        </div>

        <div ref={ref} className="reveal mt-14 grid gap-8 lg:grid-cols-2">
          <article className="group relative overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
            <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gradient-ocean opacity-10 blur-2xl transition-opacity group-hover:opacity-20" />
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
              <Compass size={26} />
            </div>
            <h3 className="mt-6 font-display text-2xl font-semibold text-primary">Vision</h3>
            <div className="mt-3 h-0.5 w-10 bg-highlight" />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              To become a leading and trusted shipping agency company in
              Indonesia, providing reliable maritime services according to
              client expectations.
            </p>
          </article>

          <article className="group relative overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
            <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gradient-gold opacity-15 blur-2xl transition-opacity group-hover:opacity-25" />
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-highlight/15 text-highlight">
              <Target size={26} />
            </div>
            <h3 className="mt-6 font-display text-2xl font-semibold text-primary">Mission</h3>
            <div className="mt-3 h-0.5 w-10 bg-highlight" />
            <ul className="mt-5 space-y-3">
              {missions.map((m) => (
                <li key={m} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <Check size={18} className="mt-0.5 shrink-0 text-secondary" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
