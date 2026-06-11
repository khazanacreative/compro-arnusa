import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/arnusa-logo.png";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#coverage", label: "Coverage" },
  { href: "#legality", label: "Legality" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="PT. Armada Nusantara Agency" className="h-11 w-11 object-contain" width={44} height={44} />
          <span className={`hidden sm:flex flex-col leading-tight ${scrolled ? "text-foreground" : "text-white"}`}>
            <span className="font-display text-sm font-semibold tracking-wide">ARMADA NUSANTARA</span>
            <span className="text-[10px] uppercase tracking-[0.22em] opacity-80">Trusted Marine Solution</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-highlight ${
                  scrolled ? "text-foreground/80" : "text-white/90"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/6287852160631"
          target="_blank"
          rel="noreferrer"
          className="hidden lg:inline-flex items-center rounded-full bg-highlight px-5 py-2.5 text-sm font-semibold text-highlight-foreground shadow-card transition-transform hover:scale-[1.03]"
        >
          Get in Touch
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden rounded-md p-2 ${scrolled ? "text-foreground" : "text-white"}`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden glass border-t border-border">
          <ul className="mx-auto max-w-7xl px-5 py-4 space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-foreground/90 hover:bg-muted"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/6287852160631"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-highlight px-5 py-2.5 text-center text-sm font-semibold text-highlight-foreground"
              >
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
