import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { VisionMission } from "@/components/site/VisionMission";
import { Philosophy } from "@/components/site/Philosophy";
import { Services } from "@/components/site/Services";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Coverage } from "@/components/site/Coverage";
import { Legality } from "@/components/site/Legality";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const TITLE = "PT. Armada Nusantara Agency — Trusted Marine Solution";
const DESC =
  "Professional ship agency, crew management, vessel clearance, logistics support, and marine operational assistance across Indonesia.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "PT. Armada Nusantara Agency",
          description: DESC,
          url: "https://arnusa-shipagency.co.id",
          telephone: "+62 31 99544156",
          email: "agency@arnusa-shipagency.co.id",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Darmo Park 1 Blok 4C No.10",
            addressLocality: "Surabaya",
            addressCountry: "ID",
          },
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <VisionMission />
      <Philosophy />
      <Services />
      <WhyChooseUs />
      <Coverage />
      <Legality />
      <Contact />
      <Footer />
    </main>
  );
}
