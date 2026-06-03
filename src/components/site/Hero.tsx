import heroImg from "@/assets/hero-vessel.jpg";

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      <img
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
        className="pointer-events-none absolute bottom-0 left-0 h-32 w-[200%] animate-wave text-background/90"
        viewBox="0 0 2880 200"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,96L120,112C240,128,480,160,720,154.7C960,149,1200,107,1440,96C1680,85,1920,107,2160,122.7C2400,139,2640,149,2760,154.7L2880,160L2880,200L0,200Z"
        />
      </svg>

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-40 lg:px-8 lg:pt-40 lg:pb-48">
        <div className="max-w-3xl text-white reveal in">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/90 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-highlight" />
            Trusted Marine Solution
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-7xl">
            Trusted Marine Solutions for{" "}
            <span className="text-gradient-gold">Indonesia&rsquo;s</span> Maritime Industry
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            Providing professional ship agency services, crew management, vessel
            clearance, logistics support, and offshore operational assistance
            throughout Indonesia.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
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
