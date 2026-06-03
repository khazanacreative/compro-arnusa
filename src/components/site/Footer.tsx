import logo from "@/assets/arnusa-logo.png";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#coverage", label: "Coverage" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--highlight), transparent)" }}
      />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="" width={48} height={48} className="h-12 w-12 object-contain" />
            <div className="leading-tight">
              <div className="font-display text-base font-semibold">PT. Armada Nusantara Agency</div>
              <div className="text-xs uppercase tracking-[0.22em] text-white/70">Trusted Marine Solution</div>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">
            Professional ship agency, crew management, and offshore support
            services across Indonesia&rsquo;s strategic maritime locations.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-highlight">Quick Links</h4>
          <ul className="mt-5 space-y-2.5 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-white/80 transition-colors hover:text-highlight">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-highlight">Head Office</h4>
          <address className="mt-5 not-italic text-sm leading-relaxed text-white/80">
            Darmo Park 1 Blok 4C No.10<br />Surabaya, Indonesia<br />
            <a href="tel:+623199544156" className="hover:text-highlight">+62 31 99544156</a><br />
            <a href="mailto:agency@arnusa-shipagency.co.id" className="break-all hover:text-highlight">agency@arnusa-shipagency.co.id</a>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-6 text-center text-xs text-white/60 lg:px-8">
          &copy; 2025 PT. Armada Nusantara Agency. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
