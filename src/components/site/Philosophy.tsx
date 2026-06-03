import bg from "@/assets/philosophy-ocean.jpg";
import { Quote } from "lucide-react";

export function Philosophy() {
  return (
    <section className="relative isolate overflow-hidden py-28 lg:py-40">
      <img
        src={bg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in oklab, var(--primary) 88%, transparent), color-mix(in oklab, var(--primary) 70%, transparent))",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-5 text-center text-white lg:px-8">
        <Quote className="mx-auto text-highlight" size={44} />
        <blockquote className="mt-8 font-display text-2xl font-medium leading-snug sm:text-3xl lg:text-4xl">
          &ldquo;We believe the sea is the lifeline and primary connector of
          the world.&rdquo;
        </blockquote>
        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          By upholding integrity, reliability, and exceptional service,
          PT. Armada Nusantara Agency serves as a trusted partner in every
          voyage, supporting the growth of Indonesian and global maritime
          logistics.
        </p>
        <div className="mx-auto mt-10 h-px w-24 bg-highlight" />
      </div>
    </section>
  );
}
