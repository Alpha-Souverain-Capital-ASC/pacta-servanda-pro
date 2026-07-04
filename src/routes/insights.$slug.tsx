import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import { CtaBanner } from "@/components/site/CtaBanner";
import { insights } from "@/data/insights-articles";
import { useReveal } from "@/hooks/use-reveal";

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
    return {
      meta: [
        { title: `${article.title} — P&A Advocates LLP` },
        { name: "description", content: article.metaDescription },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:image", content: article.coverImage },
        { property: "og:url", content: `https://paadvocatesllp.com/insights/${article.slug}` },
      ],
      links: [{ rel: "canonical", href: `https://paadvocatesllp.com/insights/${article.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.metaDescription,
            image: article.coverImage,
            datePublished: article.date,
            author: { "@type": "Person", name: article.author },
            publisher: {
              "@type": "Organization",
              name: "P&A Advocates LLP",
              logo: { "@type": "ImageObject", url: "https://paadvocatesllp.com/favicon.ico" },
            },
            mainEntityOfPage: `https://paadvocatesllp.com/insights/${article.slug}`,
          }),
        },
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

      <CtaBanner buttonLabel="Book a Consultation" />
    </>
  );
}
