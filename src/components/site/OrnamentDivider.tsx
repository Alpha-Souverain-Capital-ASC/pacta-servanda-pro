import { useEffect, useRef } from "react";

// Ornamental section divider — tapered gold line with a small diamond
// flourish at center. Draws in from the centre when scrolled into view.
export function OrnamentDivider({
  className,
  width = 220,
  tone = "gold",
}: {
  className?: string;
  width?: number;
  tone?: "gold" | "cream";
}) {
  const color = tone === "gold" ? "var(--brand-gold)" : "#F8F8F8";
  const gradientId = `ornament-grad-${tone}`;
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex justify-center ornament-draw ${className ?? ""}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 240 20"
        width={width}
        height={18}
        xmlns="http://www.w3.org/2000/svg"
        className="block"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor={color} stopOpacity="0" />
            <stop offset="50%" stopColor={color} stopOpacity="0.9" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="0" y1="10" x2="108" y2="10" stroke={`url(#${gradientId})`} strokeWidth="1" />
        <line x1="132" y1="10" x2="240" y2="10" stroke={`url(#${gradientId})`} strokeWidth="1" />
        <g transform="translate(120 10) rotate(45)">
          <rect x="-4" y="-4" width="8" height="8" fill="none" stroke={color} strokeWidth="1" />
          <rect x="-1.5" y="-1.5" width="3" height="3" fill={color} />
        </g>
      </svg>
    </div>
  );
}
