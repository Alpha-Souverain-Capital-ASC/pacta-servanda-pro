import { createFileRoute, Link } from "@tanstack/react-router";
import { PRACTICE_AREAS, TEAM } from "@/lib/site-data";
import { CtaBanner } from "@/components/site/CtaBanner";

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
      <section className="relative bg-brand-green diagonal-gold-lines min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center px-6 text-center">
        <h1 className="font-display text-white text-5xl md:text-7xl font-semibold leading-tight max-w-5xl">
          Trusted Legal Excellence.<br />Personalised Legal Support.
        </h1>
        <p className="text-white/80 mt-6 text-base md:text-lg max-w-2xl">
          P&amp;A Advocates LLP — Strategic legal counsel across Kenya.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link to="/book-consultation" className="btn-gold">Book a Consultation</Link>
          <Link to="/practice-areas" className="btn-outline-white">Explore Practice Areas</Link>
        </div>

        <div className="absolute bottom-12 left-0 right-0 px-6">
          <div className="max-w-3xl mx-auto grid grid-cols-4 gap-6">
            {LOCATIONS.map((loc, i) => (
              <div key={loc} className="text-center">
                <div className={`h-0.5 ${i === 0 ? "bg-brand-gold" : "bg-brand-gold-light/30"}`} />
                <p className="mt-3 text-[10px] tracking-[0.3em] text-white/80 uppercase">{loc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-brand-green border-t border-white/10 py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {["Full-Service Firm", "9 Practice Areas", "Mombasa & Beyond"].map((s, i) => (
            <div key={s} className={`text-center text-white text-xs md:text-sm uppercase tracking-[0.25em] ${i !== 0 ? "md:border-l md:border-brand-gold/40" : ""}`}>
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* PRACTICE AREAS PREVIEW */}
      <section className="bg-brand-offwhite py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-gold text-xs tracking-[0.3em] uppercase text-center mb-4">Our Expertise</p>
          <h2 className="font-display text-4xl md:text-5xl text-brand-green text-center font-semibold">Comprehensive Legal Solutions</h2>
          <div className="flex justify-center mt-4 mb-14"><span className="text-brand-gold">▲</span></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRACTICE_AREAS.map((p) => (
              <PracticeCard key={p.slug} title={p.title} desc={p.short} />
            ))}
          </div>
        </div>
      </section>

      {/* TEAM PREVIEW */}
      <section className="bg-brand-green py-24 px-6 diagonal-gold-lines">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-display text-brand-gold text-4xl md:text-5xl font-semibold">Meet Our Team</h2>
          <p className="text-white/80 mt-3">Experienced advocates committed to your success.</p>
          <div className="grid md:grid-cols-3 gap-10 mt-14">
            {TEAM.map((m) => (
              <div key={m.name} className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-white/10 border border-brand-gold/30" />
                <h3 className="font-display text-white text-2xl mt-5">{m.name}</h3>
                <p className="text-brand-gold text-xs tracking-[0.25em] uppercase mt-1">{m.title}</p>
              </div>
            ))}
          </div>
          <div className="mt-14">
            <Link to="/team" className="btn-outline-gold">View Full Team →</Link>
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
