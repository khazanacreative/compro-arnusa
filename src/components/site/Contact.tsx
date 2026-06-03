import { useState, type FormEvent } from "react";
import { MapPin, Phone, Smartphone, Mail, Globe, MessageCircle, Send } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const PHONE = "+62 31 99544156";
const MOBILE = "+62 812 3493 526";
const WA = "6281234935260"; // wa.me uses no spaces / no leading +
const EMAIL = "agency@arnusa-shipagency.co.id";
const SITE = "www.arnusa-shipagency.co.id";
const ADDR = "Darmo Park 1 Blok 4C No.10, Surabaya, Indonesia";

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0A%0D%0A${form.message}`;
    const subject = form.subject || "Inquiry from website";
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

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
          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="overflow-hidden rounded-3xl bg-gradient-ocean p-8 text-white shadow-elegant">
              <h3 className="font-display text-2xl font-semibold">PT. Armada Nusantara Agency</h3>
              <p className="mt-1 text-sm text-white/80">Trusted Marine Solution</p>

              <ul className="mt-7 space-y-5 text-sm">
                <li className="flex gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-highlight" />
                  <span>
                    <span className="block font-semibold">Head Office</span>
                    <span className="text-white/85">{ADDR}</span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone size={18} className="mt-0.5 shrink-0 text-highlight" />
                  <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="hover:text-highlight">{PHONE}</a>
                </li>
                <li className="flex gap-3">
                  <Smartphone size={18} className="mt-0.5 shrink-0 text-highlight" />
                  <a href={`tel:${MOBILE.replace(/\s/g, "")}`} className="hover:text-highlight">{MOBILE}</a>
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

            <div className="overflow-hidden rounded-3xl border border-border shadow-card">
              <iframe
                title="Office location"
                src="https://www.google.com/maps?q=Darmo+Park+1+Blok+4C+No.10+Surabaya&output=embed"
                width="100%"
                height="260"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 space-y-5 rounded-3xl border border-border bg-card p-8 shadow-card lg:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" required>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                />
              </Field>
              <Field label="Email" required>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                />
              </Field>
            </div>
            <Field label="Subject">
              <input
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
              />
            </Field>
            <Field label="Message" required>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
              />
            </Field>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:scale-[1.02]"
            >
              <Send size={16} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {label} {required && <span className="text-highlight">*</span>}
      </span>
      {children}
    </label>
  );
}
