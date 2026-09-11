import logoWhiteGold from "@/assets/branding/pa-advocates-logo-white-gold.png?inline";

// The logo artwork is taken from the approved P&A brand identity PDF.
// Keeping it as a bundled asset prevents the old Lovable asset proxy from
// changing or failing when the site is run locally or deployed elsewhere.
export function BrandLogo({
  className,
  showSubline = false,
}: {
  className?: string;
  showSubline?: boolean;
}) {
  return (
    <span className="inline-flex flex-col items-center shrink-0">
      <img
        src={logoWhiteGold}
        alt="P&A Advocates LLP"
        className={className}
        draggable={false}
        loading="eager"
        decoding="sync"
        fetchPriority="high"
      />
      {showSubline && (
        <span className="mt-1 text-[10px] uppercase tracking-[0.18em] text-brand-gold">
          Commissioners for Oaths
        </span>
      )}
    </span>
  );
}
