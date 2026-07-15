import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import { CtaBanner } from "@/components/site/CtaBanner";
import { insights, type InsightArticle } from "@/data/insights-articles";
import { useReveal } from "@/hooks/use-reveal";

const SITE_URL = "https://paadvocatesllp.com";

// Map an article category to a Practice Areas slug (used for the
// "Related practice area" internal link).
const CATEGORY_TO_PRACTICE_SLUG: Record<string, string> = {
  "Real Estate & Conveyancing": "real-estate-conveyancing",
  "Employment & Labour Law": "employment-labour",
  "Family Law & Succession": "family-succession",
  "Corporate & Commercial Law": "corporate-commercial",
  "Litigation & Dispute Resolution": "litigation-disputes",
  "Banking & Finance": "banking-finance",
  "Public Law & Constitutional Law": "public-constitutional",
  "Intellectual Property": "intellectual-property",
  "Tax & Regulatory Compliance": "tax-regulatory",
};

function wordCount(md: string): number {
  return md
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#*_>`\-]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}

function relatedArticles(current: InsightArticle): InsightArticle[] {
  const sameCategory = insights.filter(
    (a) => a.slug !== current.slug && a.category === current.category,
  );
  const others = insights.filter(
    (a) => a.slug !== current.slug && a.category !== current.category,
  );
  return [...sameCategory, ...others].slice(0, 3);
}

export const Route = createFileRoute("/insights/$slug")({
  head: ({ params }) => {
    const article = insights.find((a) => a.slug === params?.slug);
    if (!article) {
      return {
        meta: [
          { title: "Article not found — P&A Advocates LLP" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const url = `${SITE_URL}/insights/${article.slug}`;
    const blogPosting = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: article.title,
      description: article.metaDescription,
      image: [article.coverImage],
      datePublished: article.date,
      dateModified: article.date,
      inLanguage: "en-KE",
      articleSection: article.category,
      keywords: article.keywords.join(", "),
      wordCount: wordCount(article.body),
      author: {
        "@type": "Person",
        name: article.author,
        url: `${SITE_URL}/team`,
      },
      publisher: {
        "@type": "Organization",
        name: "P&A Advocates LLP",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/favicon.svg`,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url,
      },
    };
    const breadcrumbs = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "News & Insights", item: `${SITE_URL}/insights` },
        { "@type": "ListItem", position: 3, name: article.title, item: url },
      ],
    };
    return {
      meta: [
        { title: `${article.title} — P&A Advocates LLP` },
        { name: "description", content: article.metaDescription },
        { name: "keywords", content: article.keywords.join(", ") },
        { name: "author", content: article.author },
        { property: "article:published_time", content: article.date },
        { property: "article:modified_time", content: article.date },
        { property: "article:section", content: article.category },
        ...article.keywords.map((k) => ({ property: "article:tag", content: k })),
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:image", content: article.coverImage },
        { property: "og:url", content: url },
        { property: "og:locale", content: "en_KE" },
        { property: "og:site_name", content: "P&A Advocates LLP" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: article.title },
        { name: "twitter:description", content: article.metaDescription },
        { name: "twitter:image", content: article.coverImage },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(blogPosting) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumbs) },
      ],
    };
  },
  loader: ({ params }) => {
    const article = insights.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  notFoundComponent: ArticleNotFound,
  component: ArticleView,
});

function formatDate(iso: string) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  } catch {
    return iso;
  }
}

function ArticleNotFound() {
  return (
    <section className="py-24 md:py-32 px-6 bg-brand-offwhite text-center">
      <h1 className="font-display text-3xl md:text-4xl text-brand-green mb-4">Article not found</h1>
      <p className="text-brand-dark-text/70 mb-8">This article doesn't exist or has been moved.</p>
      <Link to="/insights" className="btn-outline-gold inline-block">← Back to Insights</Link>
    </section>
  );
}

function ArticleView() {
  const { article } = Route.useLoaderData();
  const heroRef = useReveal<HTMLDivElement>();
  const bodyRef = useReveal<HTMLDivElement>();
  const related = relatedArticles(article);
  const practiceSlug = CATEGORY_TO_PRACTICE_SLUG[article.category];

  return (
    <>
      <section className="bg-brand-green py-16 md:py-20 px-6">
        <div ref={heroRef} className="max-w-3xl mx-auto text-center">
          <Link to="/insights" className="text-brand-gold text-xs tracking-[0.3em] uppercase">← All Insights</Link>
          <p className="text-brand-gold text-xs tracking-[0.3em] uppercase mt-6 mb-3">{article.category}</p>
          <h1 className="font-display text-brand-cream-text text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">{article.title}</h1>
          <div className="mt-6 flex items-center justify-center gap-4 text-[12px] text-brand-cream-text/70 tracking-wide">
            <span>{article.author}</span>
            <span className="text-brand-gold">•</span>
            <span>{formatDate(article.date)}</span>
            <span className="text-brand-gold">•</span>
            <span>{article.readingTime}</span>
          </div>
        </div>
      </section>

      <section className="bg-brand-offwhite py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          {article.coverImage && (
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full aspect-[16/9] object-cover mb-10 md:mb-14 border border-neutral-200"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          )}
          <div ref={bodyRef} className="article-body text-brand-dark-text">
            <ReactMarkdown>{article.body}</ReactMarkdown>
          </div>

          {/* Contextual CTA + related practice area */}
          <div className="mt-12 md:mt-16 border-t border-brand-gold/30 pt-8 md:pt-10 grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-brand-gold text-[10px] tracking-[0.3em] uppercase mb-2">Need Advice?</p>
              <h3 className="font-display text-xl md:text-2xl text-brand-green font-semibold mb-3">
                Speak to an advocate
              </h3>
              <p className="text-sm text-brand-dark-text/80 mb-4">
                For advice on your specific matter, contact P&amp;A Advocates LLP in Mombasa.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-brand-gold text-xs tracking-[0.25em] uppercase font-semibold border-b border-brand-gold pb-1 hover:text-brand-green hover:border-brand-green transition-colors"
              >
                Contact the firm →
              </Link>
            </div>
            {practiceSlug && (
              <div>
                <p className="text-brand-gold text-[10px] tracking-[0.3em] uppercase mb-2">Related Practice Area</p>
                <h3 className="font-display text-xl md:text-2xl text-brand-green font-semibold mb-3">
                  {article.category}
                </h3>
                <p className="text-sm text-brand-dark-text/80 mb-4">
                  Explore how our team advises clients in this area.
                </p>
                <Link
                  to="/practice-areas"
                  hash={practiceSlug}
                  className="inline-flex items-center gap-2 text-brand-gold text-xs tracking-[0.25em] uppercase font-semibold border-b border-brand-gold pb-1 hover:text-brand-green hover:border-brand-green transition-colors"
                >
                  View practice area →
                </Link>
              </div>
            )}
          </div>

          <style>{`
            .article-body { font-family: var(--font-sans); font-size: 1rem; line-height: 1.75; }
            .article-body p { margin: 0 0 1.25rem; }
            .article-body h2 { font-family: var(--font-display); font-size: 1.75rem; color: var(--brand-green); margin: 2.25rem 0 1rem; font-weight: 600; }
            .article-body h3 { font-family: var(--font-display); font-size: 1.35rem; color: var(--brand-green); margin: 1.75rem 0 .75rem; font-weight: 600; }
            .article-body ul, .article-body ol { margin: 0 0 1.25rem 1.5rem; }
            .article-body li { margin-bottom: .5rem; }
            .article-body a { color: var(--brand-gold); text-decoration: underline; }
            .article-body blockquote { border-left: 3px solid var(--brand-gold); padding-left: 1rem; margin: 1.5rem 0; color: var(--brand-green); font-style: italic; }
            .article-body strong { color: var(--brand-green); }
          `}</style>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-cream-veil py-16 md:py-20 px-6 border-t border-brand-gold/25">
          <div className="max-w-6xl mx-auto">
            <p className="text-brand-gold text-[10px] tracking-[0.35em] uppercase mb-6 text-center">Related Insights</p>
            <h2 className="font-display text-2xl md:text-3xl text-brand-green font-semibold text-center mb-10">
              Continue reading
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  to="/insights/$slug"
                  params={{ slug: a.slug }}
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
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-brand-gold text-[10px] tracking-[0.3em] uppercase mb-3">{a.category}</p>
                    <h3 className="font-display text-lg md:text-xl font-semibold text-brand-green mb-3 leading-snug group-hover:text-brand-gold transition-colors">
                      {a.title}
                    </h3>
                    <p className="text-sm text-brand-dark-text/80 leading-relaxed mb-4 flex-1">{a.excerpt}</p>
                    <span className="text-[11px] text-brand-dark-text/70 tracking-wide">{formatDate(a.date)}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner buttonLabel="Book a Consultation" />
    </>
  );
}
