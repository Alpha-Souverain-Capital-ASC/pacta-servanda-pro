export function PageHeader({
  eyebrow,
  title,
  subtitle,
  backgroundImage,
  backgroundVideo,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
}) {
  return (
    <section
      className="bg-brand-green pt-32 md:pt-36 pb-20 md:pb-24 px-6 text-center relative overflow-hidden"
      style={
        backgroundImage && !backgroundVideo
          ? {
              backgroundImage: `linear-gradient(rgba(28,64,50,0.72), rgba(28,64,50,0.82)), url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }
          : undefined
      }
    >
      {backgroundVideo && (
        <>
          <video
            src={backgroundVideo}
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(rgba(28,64,50,0.72), rgba(28,64,50,0.82))",
            }}
          />
        </>
      )}
      <div className="relative z-10">
        {eyebrow && <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-4">{eyebrow}</p>}
        <h1 className="font-display text-brand-cream-text text-5xl md:text-6xl font-semibold">{title}</h1>
        {subtitle && <p className="text-brand-gold mt-4 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}
