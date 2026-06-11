import { useEffect, useRef } from "react";
import heroImg from "@/assets/hero-vessel.jpg";
import { gsap } from "gsap";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([badgeRef.current, titleRef.current, descRef.current, buttonsRef.current], {
        opacity: 0,
        y: 24,
      });

      // Background zoom in
      gsap.fromTo(
        bgRef.current,
        { scale: 1.12 },
        { scale: 1, duration: 2.0, ease: "power2.out" }
      );

      // Text elements cascade
      const tl = gsap.timeline({ delay: 0.3 });
      tl.to(badgeRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" })
        .to(titleRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.55")
        .to(descRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.55")
        .to(buttonsRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.55");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="top" className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      <img
        ref={bgRef}
        src={heroImg}
        alt="Cargo vessel sailing through open ocean at golden hour"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--primary) 70%, transparent) 0%, color-mix(in oklab, var(--primary) 85%, transparent) 100%)",
        }}
      />

      {/* Animated wave overlay */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-32 w-[200%] animate-wave text-background"
        viewBox="0 0 2880 200"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,96L120,112C240,128,480,160,720,154.7C960,149,1200,107,1440,96C1680,85,1920,107,2160,122.7C2400,139,2640,149,2760,154.7L2880,160L2880,200L0,200Z"
        />
      </svg>

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-40 lg:px-8 lg:pt-40 lg:pb-48">
        <div className="max-w-3xl text-white">
          <span ref={badgeRef} className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/90 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-highlight" />
            PT. Armada Nusantara Agency
          </span>
          <h1 ref={titleRef} className="mt-6 font-display text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-7xl">
            Trusted Marine Solutions for{" "}
            <span className="text-gradient-gold">Indonesia&rsquo;s</span> Maritime Industry
          </h1>
          <p ref={descRef} className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            Providing professional ship agency services, crew management, vessel
            clearance, logistics support, and Marine operational assistance
            throughout Indonesia.
          </p>
          <div ref={buttonsRef} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#services"
              className="inline-flex items-center rounded-full bg-highlight px-7 py-3.5 text-sm font-semibold text-highlight-foreground shadow-elegant transition-transform hover:scale-[1.03]"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
