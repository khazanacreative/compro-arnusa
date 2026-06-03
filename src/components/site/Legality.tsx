import { FileCheck2, Landmark, Receipt, Ship, Building2, FileBadge2 } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const items = [
  { icon: FileCheck2, title: "Deed of Incorporation", desc: "Officially established and registered legal entity." },
  { icon: Landmark, title: "Ministry Approval", desc: "Approved by the Ministry of Law and Human Rights." },
  { icon: Receipt, title: "NPWP", desc: "Registered taxpayer identification number." },
  { icon: Ship, title: "Ship Agency Business License", desc: "Authorized to operate as a national shipping agency." },
  { icon: Building2, title: "Company Domicile Certificate", desc: "Verified head-office domicile in Surabaya, Indonesia." },
  { icon: FileBadge2, title: "Taxable Enterprise (PKP)", desc: "Registered as a taxable enterprise for VAT compliance." },
];

export function Legality() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="legality" className="relative bg-muted/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">Trust &amp; Compliance</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-primary sm:text-4xl lg:text-5xl">
            Company Legality
          </h2>
          <div className="mx-auto mt-5 h-1 w-16 bg-highlight" />
          <p className="mt-5 text-muted-foreground">
            Fully licensed and compliant with Indonesian maritime and corporate
            regulations.
          </p>
        </div>

        <div ref={ref} className="reveal mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-highlight/40 hover:shadow-card"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-highlight/15 text-highlight transition-colors group-hover:bg-highlight group-hover:text-highlight-foreground">
                <Icon size={22} />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-primary">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
