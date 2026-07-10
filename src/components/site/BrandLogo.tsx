// Vector reproduction of the P&A Advocates LLP wordmark from the brand book.
// Gold-on-transparent variant, sized for the dark green footer.
// currentColor drives the "P" and "A" letterforms so the mark can be recolored
// with a Tailwind text-* class without editing the SVG.
export function BrandLogo({
  className,
  showSubline = false,
}: {
  className?: string;
  showSubline?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 320 180"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="P&A Advocates LLP"
      className={className}
    >
      <g fontFamily='"Cormorant Garamond", serif' fontWeight={600}>
        {/* Big P and A in currentColor (recolored via className) */}
        <text
          x="70"
          y="120"
          fontSize="140"
          textAnchor="middle"
          fill="currentColor"
        >
          P
        </text>
        <text
          x="250"
          y="120"
          fontSize="140"
          textAnchor="middle"
          fill="currentColor"
        >
          A
        </text>

        {/* Thin gold divider line */}
        <line
          x1="160"
          y1="14"
          x2="160"
          y2="170"
          stroke="#d9b158"
          strokeWidth="1.4"
        />

        {/* Small gold ampersand centered */}
        <text
          x="160"
          y="72"
          fontSize="34"
          textAnchor="middle"
          fill="#d9b158"
          fontStyle="italic"
        >
          &amp;
        </text>

        {/* Horizontal wordmark: ADVOCATES / LLP */}
        <g
          fontFamily='"Montserrat", sans-serif'
          fontWeight={600}
          fill="currentColor"
          textAnchor="middle"
        >
          <text x="160" y="112" fontSize="18" letterSpacing="4">
            ADVOCATES
          </text>
          <text x="160" y="134" fontSize="16" letterSpacing="6">
            LLP
          </text>
        </g>

        {showSubline && (
          <text
            x="160"
            y="168"
            fontFamily='"Montserrat", sans-serif'
            fontSize="10"
            fontWeight={500}
            textAnchor="middle"
            fill="currentColor"
            letterSpacing="2"
          >
            Commissioners for Oaths
          </text>
        )}
      </g>
    </svg>
  );
}
