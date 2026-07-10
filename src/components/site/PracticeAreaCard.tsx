import { Link } from "@tanstack/react-router";

// NOTE: Placeholder photography via picsum.photos — replace with real,
// descriptively-named images (e.g. corporate-law-mombasa.jpg) when supplied.
export function PracticeAreaCard({
  slug,
  title,
}: {
  slug: string;
  title: string;
}) {
  const imgSrc = `https://picsum.photos/seed/${slug}/600/450`;
  const alt = `${title} lawyer Mombasa Kenya — P&A Advocates LLP`;

  return (
    <Link
      to="/practice-areas"
      hash={slug}
      aria-label={`${title} — P&A Advocates LLP, Mombasa Kenya`}
      className="group relative block overflow-hidden rounded-xl aspect-[5/4] card-lift focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
    >
      <img
        src={imgSrc}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Base scrim — always visible so title is legible */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-brand-green via-brand-green/50 to-transparent"
      />

      {/* Hover darken overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-brand-green/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />

      {/* Title */}
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="font-display text-xl md:text-2xl font-semibold text-brand-cream-text drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          {title}
        </h3>
        <span className="mt-2 inline-block text-brand-gold text-[10px] tracking-[0.25em] uppercase font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Learn More →
        </span>
      </div>
    </Link>
  );
}
