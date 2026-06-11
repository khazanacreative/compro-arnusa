import { MapPin, Phone, Smartphone, Mail, Globe, MessageCircle } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const PHONE = "+62 31 99544156";
const MOBILE = "+62 878 5216 0631";
const WA = "6287852160631";
const EMAIL = "agency@arnusa-shipagency.co.id";
const SITE = "www.arnusa-shipagency.co.id";
const ADDR = "Jl. Mayjend Sungkono, Darmo Park 1 Blok 4C No.10, Surabaya, Indonesia";

export function Contact() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">Get in Touch</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-primary sm:text-4xl lg:text-5xl">
            Contact Our Team
          </h2>
          <div className="mx-auto mt-5 h-1 w-16 bg-highlight" />
          <p className="mt-5 text-muted-foreground">
            Reach out for vessel agency support, crew arrangements, or any
            operational requirement across Indonesia.
          </p>
        </div>

        <div ref={ref} className="reveal mt-14 grid gap-10 lg:grid-cols-5">
          {/* Info Card */}
          <div className="lg:col-span-2 overflow-hidden rounded-3xl bg-gradient-ocean p-8 text-white shadow-elegant flex flex-col justify-between">
            <div>
              <h3 className="font-display text-2xl font-semibold">PT. Armada Nusantara Agency</h3>
              <p className="mt-1 text-sm text-white/80">Trusted Marine Solution</p>

              <ul className="mt-7 space-y-5 text-sm">
                <li className="flex gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-highlight" />
                  <span>
                    <span className="block font-semibold">Head Office</span>
                    <a
                      href="https://maps.app.goo.gl/LoLbACoefurLgRMc9"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white/85 hover:text-highlight transition-colors"
                    >
                      {ADDR}
                    </a>
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone size={18} className="mt-0.5 shrink-0 text-highlight" />
                  <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="hover:text-highlight">{PHONE}</a>
                </li>
                <li className="flex gap-3">
                  <Smartphone size={18} className="mt-0.5 shrink-0 text-highlight" />
                  <a
                    href={`https://wa.me/${WA}`}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-highlight"
                  >
                    {MOBILE}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail size={18} className="mt-0.5 shrink-0 text-highlight" />
                  <a href={`mailto:${EMAIL}`} className="break-all hover:text-highlight">{EMAIL}</a>
                </li>
                <li className="flex gap-3">
                  <Globe size={18} className="mt-0.5 shrink-0 text-highlight" />
                  <span>{SITE}</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${WA}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-highlight px-5 py-2.5 text-sm font-semibold text-highlight-foreground transition-transform hover:scale-[1.03]"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                <Mail size={16} /> Email
              </a>
            </div>
          </div>

          {/* Map Frame */}
          <div className="lg:col-span-3 overflow-hidden rounded-3xl border border-border shadow-card h-full min-h-[380px]">
            <iframe
              title="Office location"
              src="https://maps.google.com/maps?q=-7.289712,112.718366&z=17&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block min-h-[380px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
