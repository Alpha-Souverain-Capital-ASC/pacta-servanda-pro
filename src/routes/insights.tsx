import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";
import { insights } from "@/data/insights-articles";
import { useRevealSections } from "@/hooks/use-reveal";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "News & Insights — P&A Advocates LLP" },
      { name: "description", content: "Legal insights, guides, and commentary from the advocates of P&A Advocates LLP." },
      { property: "og:title", content: "News & Insights — P&A Advocates LLP" },
      { property: "og:description", content: "Legal insights, guides, and commentary from P&A Advocates LLP." },
      { property: "og:url", content: "https://paadvocatesllp.com/insights" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://paadvocatesllp.com/insights" }],
  }),
  component: InsightsList,
});

function formatDate(iso: string) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  } catch {
    return iso;
  }
}

function InsightsList() {
  const rootRef = useRevealSections<HTMLDivElement>();
  return (
    <div ref={rootRef}>
      <PageHeader eyebrow="News & Insights" title="Legal Perspectives" subtitle="Guides, commentary, and updates from our advocates." />
      <section className="py-16 md:py-24 px-6 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((a) => (
            <Link
              key={a.slug}
              to="/insights/$slug"
              params={{ slug: a.slug }}
              className="bg-white border border-neutral-200 card-lift flex flex-col overflow-hidden group"
            >
              <div className="aspect-[16/10] bg-brand-green/10 overflow-hidden">
                <img
                  src={a.coverImage}
                  alt={a.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-brand-gold text-[10px] tracking-[0.3em] uppercase mb-2">{a.category}</p>
                <h2 className="font-display text-xl font-semibold text-brand-green mb-3 group-hover:text-brand-gold transition-colors">{a.title}</h2>
                <p className="text-sm text-brand-dark-text/70 leading-relaxed mb-4 flex-1">{a.excerpt}</p>
                <div className="flex items-center justify-between text-[11px] text-brand-dark-text/60 tracking-wide">
                  <span>{formatDate(a.date)}</span>
                  <span>{a.readingTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBanner buttonLabel="Book a Consultation" />
    </div>
  );
}
