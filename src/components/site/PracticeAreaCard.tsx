import { Link } from "@tanstack/react-router";
import { useRef } from "react";

// NOTE: Placeholder photography via picsum.photos — replace with real,
// descriptively-named images (e.g. corporate-law-mombasa.jpg) when supplied.
export function PracticeAreaCard({
  slug,
  title,
  short,
  isRevealed,
  onReveal,
}: {
  slug: string;
  title: string;
  short: string;
  isRevealed: boolean;
  onReveal: (slug: string) => void;
}) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const imgSrc = `https://picsum.photos/seed/${slug}/600/450`;
  const alt = `${title} lawyer Mombasa Kenya — P&A Advocates LLP`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Touch/coarse-pointer devices: first tap reveals, second tap navigates.
    const coarse = window.matchMedia?.("(hover: none)").matches;
    if (coarse && !isRevealed) {
      e.preventDefault();
      onReveal(slug);
    }
  };

  return (
    <Link
      ref={linkRef}
      to="/practice-areas"
      hash={slug}
      onClick={handleClick}
      onMouseEnter={() => onReveal(slug)}
      onFocus={() => onReveal(slug)}
      aria-label={`${title} — P&A Advocates LLP, Mombasa Kenya`}
      className="group relative block overflow-hidden rounded-xl aspect-[4/3] card-lift focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
      data-revealed={isRevealed ? "true" : "false"}
    >
      <img
        src={imgSrc}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Default scrim — name always visible at the bottom */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-green via-brand-green/70 to-transparent"
      />

      {/* Reveal overlay — description shown on hover/focus (desktop) or first tap (touch) */}
      <div
        aria-hidden="true"
        className={
          "absolute inset-0 flex flex-col justify-end p-6 bg-brand-green/85 transition-opacity duration-300 " +
          (isRevealed ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100")
        }
      >
        <p className="text-brand-gold text-[11px] tracking-[0.25em] uppercase mb-2">Practice Area</p>
        <p className="font-sans text-brand-cream-text/90 text-sm leading-relaxed mb-4">{short}</p>
        <span className="text-brand-gold text-xs tracking-[0.2em] uppercase font-semibold">
          Learn More →
        </span>
      </div>

      {/* Bottom title bar — sits above scrim, hides when reveal overlay is fully opaque */}
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="font-display text-2xl md:text-[1.6rem] font-semibold text-brand-cream-text drop-shadow-md">
          {title}
        </h3>
      </div>

      {/* SEO / a11y — always in DOM, visually hidden */}
      <p className="sr-only">
        {title} lawyer Mombasa Kenya — P&amp;A Advocates LLP. {short}
      </p>
    </Link>
  );
}
