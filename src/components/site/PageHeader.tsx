export function PageHeader({
  eyebrow,
  title,
  subtitle,
  backgroundImage,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}) {
  return (
    <section
      className="bg-brand-green pt-32 md:pt-36 pb-20 md:pb-24 px-6 text-center relative overflow-hidden"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(28,64,50,0.78), rgba(28,64,50,0.85)), url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      <div className="relative z-10">
        {eyebrow && <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-4">{eyebrow}</p>}
        <h1 className="font-display text-brand-cream-text text-5xl md:text-6xl font-semibold">{title}</h1>
        {subtitle && <p className="text-brand-cream-text/80 mt-4 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}
