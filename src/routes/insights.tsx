import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";
import { insights } from "@/data/insights-articles";

const SITE_URL = "https://paadvocatesllp.com";

export const Route = createFileRoute("/insights")({
  head: () => {
    const blog = {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "P&A Advocates LLP — News & Insights",
      url: `${SITE_URL}/insights`,
      inLanguage: "en-KE",
      publisher: {
        "@type": "Organization",
        name: "P&A Advocates LLP",
        url: SITE_URL,
      },
      blogPost: insights.map((a) => ({
        "@type": "BlogPosting",
        headline: a.title,
        description: a.metaDescription,
        url: `${SITE_URL}/insights/${a.slug}`,
        datePublished: a.date,
        dateModified: a.date,
        image: a.coverImage,
        articleSection: a.category,
        keywords: a.keywords.join(", "),
        author: { "@type": "Person", name: a.author, url: `${SITE_URL}/team` },
      })),
    };
    const itemList = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      numberOfItems: insights.length,
      itemListElement: insights.map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE_URL}/insights/${a.slug}`,
        name: a.title,
      })),
    };
    return {
      meta: [
        { title: "News & Insights — Kenyan Legal Guides | P&A Advocates LLP" },
        { name: "description", content: "Legal insights and guides from P&A Advocates LLP on Kenyan law — conveyancing, employment, succession, corporate and commercial practice." },
        { property: "og:title", content: "News & Insights — P&A Advocates LLP" },
        { property: "og:description", content: "Legal insights, guides, and commentary from P&A Advocates LLP." },
        { property: "og:url", content: `${SITE_URL}/insights` },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: `${SITE_URL}/insights` }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(blog) },
        { type: "application/ld+json", children: JSON.stringify(itemList) },
      ],
    };
  },
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
  const [featured, ...rest] = insights;
  const categories = Array.from(new Set(insights.map((i) => i.category)));

  return (
    <div>
      <PageHeader
        eyebrow="News & Insights"
        title="Legal Perspectives"
        subtitle="Guides, commentary, and updates from our advocates on Kenyan law and practice."
      />

      {/* Categories bar */}
      <section className="bg-cream-veil py-6 px-6 border-b border-brand-gold/25">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-2 md:gap-3">
          <span className="text-[10px] tracking-[0.3em] uppercase text-brand-green/80 px-3 py-2">Topics:</span>
          {categories.map((c) => (
            <span
              key={c}
              className="text-[10px] tracking-[0.2em] uppercase border border-brand-gold/50 text-brand-green px-3 py-2 bg-white/60"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="bg-cream-veil py-16 md:py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <p data-reveal className="text-brand-gold text-[10px] tracking-[0.35em] uppercase mb-6">Featured Insight</p>
            <Link
              to="/insights/$slug"
              params={{ slug: featured.slug }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
            >
              <div data-reveal className="md:col-span-7 relative aspect-[16/10] overflow-hidden rounded-sm">
                <img
                  src={featured.coverImage}
                  alt={featured.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-tr from-brand-green/50 via-transparent to-transparent" />
              </div>
              <div data-reveal data-reveal-delay="120" className="md:col-span-5">
                <p className="text-brand-gold text-[10px] tracking-[0.3em] uppercase mb-4">{featured.category}</p>
                <h2 className="font-display text-3xl md:text-4xl text-brand-green font-semibold leading-tight mb-4 group-hover:text-brand-gold transition-colors">
                  {featured.title}
                </h2>
                <p className="text-brand-dark-text/85 leading-relaxed mb-5">{featured.excerpt}</p>
                <div className="flex items-center gap-3 text-[11px] text-brand-dark-text/70 tracking-wide mb-6">
                  <span>{featured.author}</span>
                  <span className="text-brand-gold">•</span>
                  <span>{formatDate(featured.date)}</span>
                  <span className="text-brand-gold">•</span>
                  <span>{featured.readingTime}</span>
                </div>
                <span className="inline-flex items-center gap-2 text-brand-gold text-xs tracking-[0.25em] uppercase font-semibold border-b border-brand-gold pb-1">
                  Read Article →
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Grid */}
      <section className="py-16 md:py-24 px-6 bg-brand-offwhite">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline justify-between mb-10 md:mb-12">
            <h2 data-reveal className="font-display text-2xl md:text-3xl text-brand-green font-semibold">More Insights</h2>
            <span data-reveal className="text-[10px] tracking-[0.3em] uppercase text-brand-green/70">{rest.length} articles</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {rest.map((a, i) => (
              <Link
                key={a.slug}
                to="/insights/$slug"
                params={{ slug: a.slug }}
                data-reveal
                data-reveal-delay={String((i % 3) * 80)}
                className="bg-white border border-neutral-200 card-lift flex flex-col overflow-hidden group"
              >
                <div className="aspect-[16/10] bg-brand-green/10 overflow-hidden relative">
                  <img
                    src={a.coverImage}
                    alt={a.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-brand-green/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <p className="text-brand-gold text-[10px] tracking-[0.3em] uppercase mb-3">{a.category}</p>
                  <h3 className="font-display text-xl md:text-[1.4rem] font-semibold text-brand-green mb-3 leading-snug group-hover:text-brand-gold transition-colors">
                    {a.title}
                  </h3>
                  <p className="text-sm text-brand-dark-text/80 leading-relaxed mb-5 flex-1">{a.excerpt}</p>
                  <div className="flex items-center justify-between text-[11px] text-brand-dark-text/70 tracking-wide pt-4 border-t border-brand-gold/25">
                    <span>{formatDate(a.date)}</span>
                    <span>{a.readingTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner buttonLabel="Book a Consultation" />
    </div>
  );
}
