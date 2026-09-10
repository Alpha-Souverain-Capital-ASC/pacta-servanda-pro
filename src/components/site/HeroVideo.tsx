import { useEffect, useState } from "react";
import { STOCK_MEDIA } from "@/lib/brand-media";

const IMAGES = [
  STOCK_MEDIA.hero,
  STOCK_MEDIA.legalDesk,
  STOCK_MEDIA.heroGavel,
  STOCK_MEDIA.heroJustice,
  STOCK_MEDIA.heroPortrait,
];
const SLIDE_MS = 7000;

/** Static, globally reachable stock imagery with a graceful green fallback. */
export function HeroVideo() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((value) => (value + 1) % IMAGES.length),
      SLIDE_MS,
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-brand-green">
      {IMAGES.map((image, index) => (
        <img
          key={image}
          src={image}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${index === active ? "opacity-100" : "opacity-0"}`}
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      ))}
      <div className="absolute inset-0 bg-brand-green/65" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(135deg, rgba(4,68,34,0.82), rgba(48,96,60,0.42) 55%, rgba(4,68,34,0.88))",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(135deg, transparent 0 49%, rgba(242,201,135,0.7) 49.2% 49.35%, transparent 49.5% 100%), linear-gradient(135deg, transparent 0 69%, rgba(242,201,135,0.42) 69.2% 69.35%, transparent 69.5% 100%)",
        }}
      />
    </div>
  );
}
