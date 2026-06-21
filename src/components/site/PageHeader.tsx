export function PageHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="bg-brand-green diagonal-gold-lines pt-40 pb-24 px-6 text-center relative">
      {eyebrow && <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-4">{eyebrow}</p>}
      <h1 className="font-display text-white text-5xl md:text-6xl font-semibold">{title}</h1>
      {subtitle && <p className="text-white/80 mt-4 max-w-2xl mx-auto">{subtitle}</p>}
      <div className="mt-8 flex justify-center">
        <span className="text-brand-gold">▲</span>
      </div>
    </section>
  );
}
