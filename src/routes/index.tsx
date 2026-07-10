import { createFileRoute, Link } from "@tanstack/react-router";
import { PRACTICE_AREAS, TEAM } from "@/lib/site-data";

import { CtaBanner } from "@/components/site/CtaBanner";
import { HeroVideo } from "@/components/site/HeroVideo";
import { TeamAvatar } from "@/components/site/TeamAvatar";
import { PracticeAreaCard } from "@/components/site/PracticeAreaCard";
import aboutImage from "@/assets/about-law.jpg.asset.json";
import { useRevealSections } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "P&A Advocates LLP — Trusted Legal Excellence in Kenya" },
      { name: "description", content: "Strategic legal counsel across Kenya from a full-service Mombasa-based law firm." },
      { property: "og:title", content: "P&A Advocates LLP — Trusted Legal Excellence in Kenya" },
      { property: "og:description", content: "Strategic legal counsel across Kenya from a full-service Mombasa-based law firm." },
      { property: "og:url", content: "https://paadvocatesllp.com/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://paadvocatesllp.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "P&A Advocates LLP",
          url: "https://paadvocatesllp.com/",
          telephone: "+254 757 688 891",
          email: "paadvocatesllp@gmail.com",
          areaServed: "KE",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Kaderbhoy Building, First Floor, Room 13, Nkurumah Road",
            addressLocality: "Mombasa",
            addressCountry: "KE",
          },
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  const rootRef = useRevealSections<HTMLDivElement>();

  return (
    <div ref={rootRef}>
      {/* HERO */}
      <section className="relative min-h-[calc(100vh-4.75rem)] flex flex-col items-center justify-center px-6 text-center overflow-hidden hero-glow">
        <HeroVideo />
        <div className="relative z-10 flex flex-col items-center w-full">
          <h1 className="font-display text-white text-[32px] sm:text-[42px] md:text-6xl lg:text-7xl font-semibold leading-tight max-w-5xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
            Trusted <span className="text-brand-gold">Legal</span> Excellence,<br />Unrivaled <span className="text-brand-gold">Personal</span> Support.
          </h1>
          <p
            data-reveal
            data-reveal-delay="120"
            className="text-white/90 mt-5 sm:mt-6 text-sm sm:text-base md:text-lg max-w-2xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.55)]"
          >
            P&amp;A Advocates LLP — Strategic legal counsel across Kenya.
          </p>
          <div
            data-reveal
            data-reveal-delay="240"
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-stretch sm:items-center px-4 sm:px-0 max-w-xs sm:max-w-none mx-auto"
          >
            <Link to="/contact" className="btn-gold text-center min-h-11">Book a Consultation</Link>
            <Link to="/practice-areas" className="btn-outline-white text-center min-h-11">Explore Practice Areas</Link>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <CtaBanner heading="Ready to Discuss Legal Matters?" subtext="Our partners are ready to discuss your matter." buttonLabel="Book a Consultation" />

      {/* ABOUT US */}
      <section className="bg-brand-offwhite py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          <img data-reveal src={aboutImage.url} alt="Gavel and legal documents" width={800} height={1000} className="aspect-[4/5] w-full max-w-sm md:max-w-md mx-auto object-cover rounded-sm" loading="lazy" />
          <div>
            <p data-reveal className="text-brand-gold text-xs tracking-[0.3em] uppercase mb-3">About Us</p>
            <h2 data-reveal data-reveal-delay="80" className="font-display text-3xl sm:text-4xl md:text-5xl text-brand-green font-semibold mb-6">Built on trust, delivered with rigor.</h2>
            <p data-reveal data-reveal-delay="160" className="text-brand-dark-text/85 text-sm sm:text-base leading-relaxed mb-6">
              P&amp;A Advocates LLP is a full-service law firm in Kenya committed to expert legal services across a wide range of practice areas — driven by integrity, professionalism, and a deep commitment to results-oriented legal solutions.
            </p>
            <Link data-reveal data-reveal-delay="240" to="/about" className="btn-outline-gold inline-block">Learn More →</Link>
          </div>
        </div>
      </section>

      {/* OUR TEAM */}
      <section className="bg-brand-green py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p data-reveal className="text-brand-gold text-xs tracking-[0.3em] uppercase mb-3">Our Team</p>
          <h2 data-reveal data-reveal-delay="80" className="font-display text-brand-cream-text text-3xl sm:text-4xl md:text-5xl font-semibold">Meet Our Advocates</h2>
          <p data-reveal data-reveal-delay="160" className="text-brand-cream-text/85 mt-3 text-sm sm:text-base">Experienced advocates committed to your success.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 md:mt-14 justify-items-center">
            {TEAM.map((m, i) => (
              <div key={m.name} data-reveal data-reveal-delay={String(i * 120)} className="flex flex-col items-center card-lift p-4">
                <TeamAvatar name={m.name} size={128} />
                <h3 className="font-display text-brand-cream-text text-2xl mt-5">{m.name}</h3>
                <p className="text-brand-gold text-xs tracking-[0.25em] uppercase mt-1">{m.title}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 md:mt-14">
            <Link to="/team" className="btn-outline-gold inline-block min-h-11">View Full Team →</Link>
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section className="bg-brand-offwhite py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p data-reveal className="text-brand-gold text-xs tracking-[0.3em] uppercase text-center mb-4">Our Expertise</p>
          <h2 data-reveal data-reveal-delay="80" className="font-display text-3xl sm:text-4xl md:text-5xl text-brand-green text-center font-semibold mb-10 md:mb-14">Comprehensive Legal Solutions</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-5">
            {PRACTICE_AREAS.map((p, i) => (
              <div key={p.slug} data-reveal data-reveal-delay={String((i % 3) * 80)}>
                <PracticeAreaCard slug={p.slug} title={p.title} image={p.image} />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/practice-areas" className="btn-outline-gold inline-block">View All Practice Areas →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
