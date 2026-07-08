import { Link } from "@tanstack/react-router";

export function CtaBanner({
  heading = "Ready to Discuss Legal Matters?",
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
    <section className="bg-brand-green py-16 md:py-24 px-6 text-center">
      <h2 className="font-display text-brand-cream-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
        {heading}
      </h2>
      <p className="text-brand-cream-text/80 text-sm sm:text-base md:text-lg mb-10 max-w-2xl mx-auto">
        {subtext}
      </p>
      <Link
        to="/contact"
        className={`${variant === "solid" ? "btn-gold" : "btn-outline-gold"} inline-block w-full sm:w-auto max-w-xs`}
      >
        {buttonLabel}
      </Link>
    </section>
  );
}
