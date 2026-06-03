import aboutImg from "@/assets/about-port.jpg";
import isoCertificate from "@/assets/iso-certificate.png";
import { useReveal } from "@/hooks/use-reveal";
import { ShieldCheck, Eye, Gauge, Handshake, Award } from "lucide-react";

const values = [
  { icon: ShieldCheck, label: "Integrity" },
  { icon: Eye, label: "Transparency" },
  { icon: Gauge, label: "Efficiency" },
  { icon: Handshake, label: "Long-term Partnerships" },
  { icon: Award, label: "Service Excellence" },
];

export function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div ref={ref} className="reveal mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8 items-center">
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-ocean opacity-20 blur-2xl" />
          <img
            src={aboutImg}
            alt="Indonesian commercial port operations at dusk"
            width={1280}
            height={960}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-elegant"
          />
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-highlight px-6 py-5 text-highlight-foreground shadow-elegant sm:block">
            <div className="font-display text-3xl font-semibold">Excellence</div>
            <div className="text-xs uppercase tracking-[0.18em]">at every voyage</div>
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
            About Us
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-primary sm:text-4xl lg:text-5xl">
            About PT. Armada Nusantara Agency
          </h2>
          <div className="mt-6 h-1 w-16 bg-highlight" />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            PT. Armada Nusantara Agency is a shipping agency company dedicated to
            providing excellent service in Indonesia&rsquo;s maritime sector.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            With experienced maritime professionals, we support ship owners,
            vessel operators, and logistics businesses through efficient port
            operations, compliance management, and reliable agency services.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {values.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-3.5 py-3 text-sm shadow-sm transition-shadow hover:shadow-card"
              >
                <Icon className="text-secondary" size={18} />
                <span className="font-medium text-foreground">{label}</span>
              </div>
            ))}
          </div>

          {/* Certifications Logo */}
          <div className="mt-8 pt-6 border-t border-border">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-3">
              Certifications & Accreditations
            </div>
            <img
              src={isoCertificate}
              alt="ISO 9001:2015 & ASCB Certified"
              className="h-16 object-contain opacity-90 transition-opacity hover:opacity-100 rounded"
              height={64}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
