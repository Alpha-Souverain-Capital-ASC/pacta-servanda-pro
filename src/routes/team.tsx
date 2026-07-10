import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";
import { TEAM } from "@/lib/site-data";
import { TeamAvatar } from "@/components/site/TeamAvatar";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — P&A Advocates LLP" },
      { name: "description", content: "Meet the advocates of P&A Advocates LLP — experienced legal professionals committed to your success." },
      { property: "og:title", content: "Our Team — P&A Advocates LLP" },
      { property: "og:description", content: "Meet the advocates and partners behind P&A Advocates LLP in Mombasa, Kenya." },
      { property: "og:url", content: "https://paadvocatesllp.com/team" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://paadvocatesllp.com/team" }],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <div>
      <PageHeader eyebrow="Our Team" title="Meet Our Advocates" subtitle="Experienced advocates committed to delivering results." />

      {/* Intro */}
      <section className="bg-cream-veil py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p data-reveal className="text-brand-gold text-xs tracking-[0.35em] uppercase mb-4">The People</p>
          <h2 data-reveal data-reveal-delay="80" className="font-display text-3xl md:text-4xl text-brand-green font-semibold mb-5">
            A practice built by advocates who take your matter personally.
          </h2>
          <p data-reveal data-reveal-delay="160" className="text-brand-dark-text/85 leading-relaxed">
            Our partners lead every engagement directly. You are not passed down a hierarchy — you work with the advocate whose name is on the file.
          </p>
        </div>
      </section>

      {/* Team — editorial cards */}
      <section className="bg-brand-offwhite py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
          {TEAM.map((m, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <article
                key={m.name}
                className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center ${
                  isEven ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <div data-reveal className="md:col-span-5 flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-3 border border-brand-gold/40 rounded-full" aria-hidden />
                    <TeamAvatar name={m.name} size={240} />
                  </div>
                </div>
                <div data-reveal data-reveal-delay="120" className="md:col-span-7">
                  <p className="text-brand-gold text-[10px] tracking-[0.35em] uppercase mb-3">{m.title}</p>
                  <h2 className="font-display text-3xl md:text-4xl text-brand-green font-semibold mb-5">
                    {m.name}
                  </h2>
                  <div className="w-12 h-px bg-brand-gold mb-5" aria-hidden />
                  <p className="text-brand-dark-text/85 text-base leading-relaxed mb-6 max-w-xl">
                    {m.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {m.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] tracking-[0.2em] uppercase border border-brand-gold/60 text-brand-green px-3 py-1 bg-white/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <CtaBanner heading="Secure Your Representation" subtext="Speak with our partners about your matter." buttonLabel="Book a Consultation" variant="outline" />
    </div>
  );
}
