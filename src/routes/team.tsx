import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";
import { TEAM } from "@/lib/site-data";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — P&A Advocates LLP" },
      { name: "description", content: "Meet the advocates of P&A Advocates LLP — experienced legal professionals committed to your success." },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      <PageHeader eyebrow="Our Team" title="Meet Our Advocates" subtitle="Experienced advocates committed to delivering results." />
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {TEAM.map((m) => (
            <div key={m.name} className="bg-brand-offwhite p-8 text-center border-t-2 border-brand-gold">
              <div className="w-32 h-32 rounded-full bg-brand-green/10 mx-auto mb-6" />
              <h3 className="font-display text-2xl text-brand-green">{m.name}</h3>
              <p className="text-brand-gold text-xs tracking-[0.25em] uppercase mt-1">{m.title}</p>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{m.bio}</p>
              <div className="flex flex-wrap justify-center gap-2 mt-5">
                {m.tags.map((t) => (
                  <span key={t} className="text-[10px] tracking-[0.2em] uppercase border border-brand-gold/50 text-brand-green px-3 py-1">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CtaBanner heading="Secure Your Representation" subtext="Speak with our partners about your matter." buttonLabel="Request Consultation" variant="outline" />
    </>
  );
}
