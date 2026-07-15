import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";
import { PRACTICE_AREAS } from "@/lib/site-data";
import { PRACTICE_ICONS } from "@/lib/practice-icons";

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
    <div>
      <PageHeader eyebrow="Practice Areas" title="Our Expertise" subtitle="Comprehensive legal solutions across nine specialized practice areas." />

      {/* Quick jump-link index */}
      <section className="bg-cream-veil py-8 md:py-10 px-6 border-b border-brand-gold/25">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-brand-gold text-[10px] tracking-[0.35em] uppercase mb-4">Jump To</p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {PRACTICE_AREAS.map((p) => (
              <a
                key={p.slug}
                href={`#${p.slug}`}
                className="text-[11px] tracking-[0.15em] uppercase border border-brand-gold/50 text-brand-green px-3 py-2 bg-white hover:bg-brand-gold hover:text-white transition-colors"
              >
                {p.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-veil py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {PRACTICE_AREAS.map((p, idx) => {
            const Icon = PRACTICE_ICONS[p.slug];
            const isEven = idx % 2 === 0;
            return (
              <article
                id={p.slug}
                key={p.slug}
                className="scroll-mt-28 py-14 md:py-20 border-b border-brand-gold/25 last:border-b-0"
              >
                <div
                  className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center ${
                    isEven ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                >
                  <div
                    data-reveal
                    className="md:col-span-6 relative aspect-[5/4] overflow-hidden rounded-sm"
                  >
                    <img
                      src={p.image}
                      alt={`${p.title} — P&A Advocates LLP, Mombasa`}
                      loading="lazy"
                      width={1024}
                      height={820}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-tr from-brand-green/40 via-transparent to-transparent" />
                  </div>


                  <div data-reveal data-reveal-delay="120" className="md:col-span-6">
                    <div className="flex items-center gap-3 mb-4">
                      {Icon && <Icon size={22} strokeWidth={1.5} className="text-brand-gold" aria-hidden />}
                      <p className="text-brand-gold text-[10px] tracking-[0.35em] uppercase">Practice Area</p>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-green font-semibold leading-tight mb-5">
                      {p.title}
                    </h2>
                    <p className="font-display text-brand-green/80 text-lg italic mb-4">
                      {p.short}
                    </p>
                    <p className="text-brand-dark-text/85 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
                      {p.long}
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-brand-gold text-xs tracking-[0.25em] uppercase font-semibold border-b border-brand-gold pb-1 hover:text-brand-green hover:border-brand-green transition-colors"
                    >
                      Discuss Your Matter →
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <CtaBanner buttonLabel="Book a Consultation" />
    </div>
  );
}
