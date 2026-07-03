import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";
import { TEAM } from "@/lib/site-data";
import { TeamAvatar } from "@/components/site/TeamAvatar";
import { useRevealSections } from "@/hooks/use-reveal";

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
  const rootRef = useRevealSections<HTMLDivElement>();
  return (
    <div ref={rootRef}>
      <PageHeader eyebrow="Our Team" title="Meet Our Advocates" subtitle="Experienced advocates committed to delivering results." />
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {TEAM.map((m) => (
            <div key={m.name} className="bg-brand-offwhite p-8 text-center border-t-2 border-brand-gold w-full max-w-sm card-lift">
              <div className="flex justify-center mb-6">
                <TeamAvatar name={m.name} size={128} />
              </div>
              <h2 className="font-display text-2xl text-brand-green">{m.name}</h2>
              <p className="text-brand-gold text-xs tracking-[0.25em] uppercase mt-1">{m.title}</p>
              <p className="text-sm text-brand-dark-text/70 mt-4 leading-relaxed">{m.bio}</p>
              <div className="flex flex-wrap justify-center gap-2 mt-5">
                {m.tags.map((t) => (
                  <span key={t} className="text-[10px] tracking-[0.2em] uppercase border border-brand-gold/50 text-brand-green px-3 py-1">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner heading="Secure Your Representation" subtext="Speak with our partners about your matter." buttonLabel="Book a Consultation" variant="outline" />
    </div>
  );
}
