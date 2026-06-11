import { MapPin } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const regions = [
  { name: "Sumatra", x: 18, y: 49, ports: "Belawan · Kuala Tanjung · Dumai · Panjang" },
  { name: "Java", x: 41, y: 81, ports: "Tanjung Priok · Tanjung Perak · Tanjung Mas" },
  { name: "Kalimantan", x: 50, y: 49, ports: "Balikpapan · Samarinda · Banjarmasin · Pontianak" },
  { name: "Sulawesi", x: 66, y: 49, ports: "Makassar · Bitung · Morowali" },
  { name: "Papua", x: 88, y: 60, ports: "Sorong · Jayapura · Manokwari" },
];

const pins = [
  // Sumatra
  { name: "Belawan", x: 12, y: 28 },
  { name: "Kuala Tanjung", x: 14, y: 33 },
  { name: "Dumai", x: 17, y: 41 },
  { name: "Panjang", x: 27, y: 72 },
  // Java
  { name: "Tanjung Priok", x: 37, y: 81 },
  { name: "Tanjung Mas", x: 42, y: 81.5 },
  { name: "Tanjung Perak", x: 47, y: 82 },
  // Kalimantan
  { name: "Pontianak", x: 44, y: 48 },
  { name: "Banjarmasin", x: 51, y: 61 },
  { name: "Balikpapan", x: 53, y: 48 },
  { name: "Samarinda", x: 55, y: 45 },
  // Sulawesi
  { name: "Makassar", x: 61, y: 65 },
  { name: "Morowali", x: 66, y: 53 },
  { name: "Bitung", x: 71, y: 31 },
  // Papua
  { name: "Sorong", x: 80, y: 52 },
  { name: "Manokwari", x: 84, y: 51 },
  { name: "Jayapura", x: 96, y: 59 },
];

export function Coverage() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="coverage" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">Operational Coverage</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-primary sm:text-4xl lg:text-5xl">
            Nationwide Indonesian Reach
          </h2>
          <div className="mx-auto mt-5 h-1 w-16 bg-highlight" />
          <p className="mt-5 text-muted-foreground">
            Serving major ports and strategic maritime locations throughout
            Indonesia &mdash; from Sumatra to Papua.
          </p>
        </div>

        <div ref={ref} className="reveal mt-14 flex flex-col gap-8">
          {/* Map */}
          <div className="w-full">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-ocean p-4 sm:p-6 shadow-elegant">
              {/* Subtle grid */}
              <svg className="absolute inset-0 h-full w-full opacity-20" aria-hidden="true">
                <defs>
                  <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                    <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>

              {/* Map & Pins wrapper to maintain constant aspect ratio and scale in sync */}
              <div className="relative w-full aspect-[1000/368]">
                {/* Indonesia Map */}
                <img
                  src="/id.svg"
                  alt="Indonesia Operational Map"
                  className="absolute inset-0 h-full w-full opacity-75"
                  aria-hidden="true"
                />

                {/* Pins */}
                {pins.map((p) => (
                  <div
                    key={p.name}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${p.x}%`, top: `${p.y}%` }}
                  >
                    <div className="relative flex flex-col items-center">
                      {/* The dot itself */}
                      <div className="relative flex h-2 w-2 sm:h-3 sm:w-3 items-center justify-center">
                        <span className="absolute inset-0 -m-2 animate-ping rounded-full bg-highlight/40" />
                        <span className="relative block h-full w-full rounded-full bg-highlight ring-4 ring-highlight/30" />
                      </div>
                      
                      {/* The label positioned absolutely below the dot, centered and not affecting height */}
                      <div className="absolute top-full mt-1.5 whitespace-nowrap rounded-md bg-white/95 px-1.5 py-0.5 text-[8px] sm:text-[10px] font-semibold uppercase tracking-wide text-primary shadow">
                        {p.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Region list */}
          <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {regions.map((r) => (
              <li
                key={r.name}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="font-display text-lg font-semibold text-primary">{r.name}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{r.ports}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
