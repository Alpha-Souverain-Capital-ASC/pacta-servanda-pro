import { createFileRoute, Link } from "@tanstack/react-router";
import { PRACTICE_AREAS, TEAM } from "@/lib/site-data";
import { CtaBanner } from "@/components/site/CtaBanner";
import { HeroVideo } from "@/components/site/HeroVideo";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "P&A Advocates LLP — Trusted Legal Excellence in Kenya" },
      { name: "description", content: "Strategic legal counsel across Kenya from a full-service Mombasa-based law firm." },
    ],
  }),
  component: Home,
});

const LOCATIONS = ["Mombasa", "Nairobi", "Embu", "Kisumu"];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        <HeroVideo />
        <div className="relative z-10 flex flex-col items-center w-full">
          <h1 className="font-display text-white text-[32px] sm:text-[42px] md:text-6xl lg:text-7xl font-semibold leading-tight max-w-5xl">
            Trusted Legal Excellence.<br />Personalised Legal Support.
          </h1>
          <p className="text-white/80 mt-5 sm:mt-6 text-sm sm:text-base md:text-lg max-w-2xl">
            P&amp;A Advocates LLP — Strategic legal counsel across Kenya.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-stretch sm:items-center px-4 sm:px-0 max-w-xs sm:max-w-none mx-auto">
            <Link to="/contact" className="btn-gold text-center min-h-11">Book a Consultation</Link>
            <Link to="/practice-areas" className="btn-outline-white text-center min-h-11">Explore Practice Areas</Link>
          </div>
        </div>
      </section>


      {/* TRUST BAR */}
      <section className="bg-brand-green border-t border-white/10 py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-brand-gold/40">
          {["Full-Service Firm", "9 Practice Areas", "Mombasa & Beyond"].map((s) => (
            <div
              key={s}
              className="text-center text-white text-xs md:text-sm uppercase tracking-[0.25em] py-4 md:py-0 px-4"
            >
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* PRACTICE AREAS PREVIEW */}
      <section className="bg-brand-offwhite py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-gold text-xs tracking-[0.3em] uppercase text-center mb-4">Our Expertise</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-brand-green text-center font-semibold">Comprehensive Legal Solutions</h2>
          <div className="flex justify-center mt-4 mb-10 md:mb-14"><span className="text-brand-gold">▲</span></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRACTICE_AREAS.map((p) => (
              <PracticeCard key={p.slug} title={p.title} desc={p.short} />
            ))}
          </div>
        </div>
      </section>

      {/* TEAM PREVIEW */}
      <section className="bg-brand-green py-16 md:py-24 px-6 diagonal-gold-lines">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-display text-brand-gold text-3xl sm:text-4xl md:text-5xl font-semibold">Meet Our Team</h2>
          <p className="text-white/80 mt-3 text-sm sm:text-base">Experienced advocates committed to your success.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 md:mt-14 justify-items-center">
            {TEAM.map((m) => (
              <div key={m.name} className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-white/10 border border-brand-gold/30" />
                <h3 className="font-display text-white text-2xl mt-5">{m.name}</h3>
                <p className="text-brand-gold text-xs tracking-[0.25em] uppercase mt-1">{m.title}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 md:mt-14">
            <Link to="/team" className="btn-outline-gold inline-block min-h-11">View Full Team →</Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}


function PracticeCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white border border-neutral-200 p-7 group hover:border-l-4 hover:border-l-brand-gold transition-all">
      <div className="w-10 h-10 border border-brand-gold flex items-center justify-center text-brand-gold mb-5">
        <span className="text-sm">▲</span>
      </div>
      <h3 className="font-display text-xl font-semibold text-brand-green mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-5">{desc}</p>
      <Link to="/practice-areas" className="text-brand-gold text-xs tracking-[0.2em] uppercase font-semibold">Learn More →</Link>
    </div>
  );
}
