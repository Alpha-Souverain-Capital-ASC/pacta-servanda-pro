import { Link } from "@tanstack/react-router";

export function CtaBanner({
  heading = "Ready to Get Legal Clarity?",
  subtext = "Our partners are ready to discuss your matter.",
  buttonLabel = "Book a Consultation",
  variant = "solid",
}: {
  heading?: string;
  subtext?: string;
  buttonLabel?: string;
  variant?: "solid" | "outline";
}) {
  return (
    <section className="bg-brand-green diagonal-gold-lines py-24 px-6 text-center">
      <div className="text-brand-gold text-2xl mb-6">▲</div>
      <h2 className="font-display text-white text-5xl md:text-6xl font-semibold mb-4">{heading}</h2>
      <p className="text-white/80 text-base md:text-lg mb-10">{subtext}</p>
      <Link to="/book-consultation" className={variant === "solid" ? "btn-gold" : "btn-outline-gold"}>
        {buttonLabel}
      </Link>
    </section>
  );
}
