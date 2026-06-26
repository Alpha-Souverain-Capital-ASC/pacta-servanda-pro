import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";
import { PRACTICE_AREAS } from "@/lib/site-data";

export const Route = createFileRoute("/practice-areas")({
  head: () => ({
    meta: [
      { title: "Practice Areas — P&A Advocates LLP" },
      { name: "description", content: "Nine practice areas covering corporate, real estate, litigation, employment, family, banking, public law, IP, and tax." },
      { property: "og:title", content: "Practice Areas — P&A Advocates LLP" },
      { property: "og:description", content: "Nine specialised practice areas delivered by P&A Advocates LLP across Kenya." },
      { property: "og:url", content: "https://paadvocatesllp.com/practice-areas" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://paadvocatesllp.com/practice-areas" }],
  }),
  component: PracticeAreas,
});

function PracticeAreas() {
  return (
    <>
      <PageHeader eyebrow="Practice Areas" title="Our Expertise" subtitle="Comprehensive legal solutions across nine specialized practice areas." />
      <section className="py-16 md:py-24 px-6 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRACTICE_AREAS.map((p) => (
            <div key={p.slug} className="bg-white p-7 md:p-8 border border-neutral-200 hover:border-l-4 hover:border-l-brand-gold transition-all">
              <h2 className="font-display text-2xl font-semibold text-brand-green mb-3">{p.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{p.long}</p>
              <Link to="/contact" className="text-brand-gold text-xs tracking-[0.2em] uppercase font-semibold">Learn More →</Link>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
