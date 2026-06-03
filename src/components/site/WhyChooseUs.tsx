import { Users2, Clock, Globe2, ShieldCheck, Layers } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { useCounter } from "@/hooks/use-counter";

const features = [
  { icon: Users2, title: "Professional & Experienced Team", desc: "Seasoned maritime professionals with deep industry expertise." },
  { icon: Clock, title: "Fast & Efficient 24/7 Services", desc: "Around-the-clock operational support whenever you need it." },
  { icon: Globe2, title: "Nationwide Maritime Network", desc: "Coverage across major Indonesian ports and strategic locations." },
  { icon: ShieldCheck, title: "Transparency & Accountability", desc: "Clear reporting and full visibility on every operation." },
  { icon: Layers, title: "Integrated End-to-End Solutions", desc: "One trusted partner for the entire vessel lifecycle." },
];

function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const { ref, value: v } = useCounter(value);
  return (
    <div className="text-center">
      <div className="font-display text-4xl font-semibold text-primary sm:text-5xl">
        <span ref={ref}>{v}</span>
        {suffix}
      </div>
      <div className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
    </div>
  );
}

export function WhyChooseUs() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="why" className="relative bg-muted/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">Why Us</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-primary sm:text-4xl lg:text-5xl">
            Why Choose Armada Nusantara
          </h2>
          <div className="mx-auto mt-5 h-1 w-16 bg-highlight" />
        </div>

        <div ref={ref} className="reveal mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-highlight/15 text-highlight">
                <Icon size={22} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-primary">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 rounded-3xl border border-border bg-card p-10 shadow-card sm:grid-cols-4">
          <Stat value={50} suffix="+" label="Ports Served" />
          <Stat value={24} suffix="/7" label="Operations Support" />
          <Stat value={100} suffix="%" label="Compliance Focus" />
          <Stat value={5} label="Regions Covered" />
        </div>
      </div>
    </section>
  );
}
