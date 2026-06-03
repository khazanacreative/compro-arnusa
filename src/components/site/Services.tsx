import { Anchor, Users, Package, Droplet, LifeBuoy } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const services = [
  {
    icon: Anchor,
    title: "Vessel Clearance",
    desc: "Handling all Indonesian port entry and departure formalities with full regulatory compliance.",
  },
  {
    icon: Users,
    title: "Crew Management",
    desc: "Crew changes, embarkation, debarkation, visa arrangements, and complete crew administration.",
  },
  {
    icon: Package,
    title: "Cargo Operations",
    desc: "Supervision and coordination of loading and unloading activities at every Indonesian port.",
  },
  {
    icon: Droplet,
    title: "Logistics Support",
    desc: "Fresh water supply, bunker arrangement, provisioning, and full operational logistics support.",
  },
  {
    icon: LifeBuoy,
    title: "Emergency Assistance",
    desc: "Rapid 24/7 response support for maritime operational emergencies wherever you sail.",
  },
];

export function Services() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
            What We Do
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-primary sm:text-4xl lg:text-5xl">
            Core Services
          </h2>
          <div className="mx-auto mt-5 h-1 w-16 bg-highlight" />
          <p className="mt-5 text-muted-foreground">
            End-to-end maritime support delivered with precision, transparency,
            and round-the-clock reliability.
          </p>
        </div>

        <div ref={ref} className="reveal mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-elegant"
            >
              <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-gradient-ocean opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25" />
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-ocean text-white shadow-card">
                <Icon size={24} />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-primary">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              <div className="mt-6 inline-flex items-center text-xs font-semibold uppercase tracking-[0.18em] text-highlight">
                0{i + 1} &nbsp;/&nbsp; Service
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
