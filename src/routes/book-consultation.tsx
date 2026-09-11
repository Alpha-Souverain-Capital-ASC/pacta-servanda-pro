import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/book-consultation")({
  head: () => ({
    meta: [
      { title: "Book a Consultation — P&A Advocates LLP" },
      {
        name: "description",
        content: "Request a confidential consultation with P&A Advocates LLP.",
      },
      { property: "og:title", content: "Book a Consultation — P&A Advocates LLP" },
      {
        property: "og:description",
        content: "Request a confidential consultation with the legal team at P&A Advocates LLP.",
      },
      { property: "og:url", content: "https://paadvocatesllp.com/book-consultation" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://paadvocatesllp.com/book-consultation" }],
  }),
  component: BookConsultation,
});

function BookConsultation() {
  return (
    <div className="bg-brand-offwhite">
      <PageHeader
        eyebrow="Consultation"
        title="Schedule a Consultation"
        subtitle="Begin with a confidential conversation about your legal matter."
      />
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          <div className="border-t-2 border-brand-gold bg-white p-7 md:col-span-2 md:p-10">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-brand-gold">How it works</p>
            <h2 className="mb-5 font-display text-3xl font-semibold text-brand-green md:text-4xl">
              Tell us what you need.
            </h2>
            <p className="mb-6 max-w-2xl leading-relaxed text-brand-dark-text/85">
              Share a brief outline of your matter and your preferred contact details. Our team will
              review your request and respond with the next available consultation arrangements.
            </p>
            <ul className="space-y-3 text-sm text-brand-dark-text/85">
              <li>
                <span className="mr-2 text-brand-gold">01</span> Submit your request through our
                contact page.
              </li>
              <li>
                <span className="mr-2 text-brand-gold">02</span> A member of the team will confirm
                the appropriate next step.
              </li>
              <li>
                <span className="mr-2 text-brand-gold">03</span> Receive a consultation time and
                preparation guidance.
              </li>
            </ul>
          </div>
          <div className="bg-brand-green p-7 text-brand-cream-text md:p-8">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-brand-gold">
              Request an appointment
            </p>
            <h2 className="mb-4 font-display text-2xl font-semibold">Speak with the firm</h2>
            <p className="mb-7 text-sm leading-relaxed text-brand-cream-text/85">
              Consultations are arranged directly with the team based on the nature of your matter.
            </p>
            <Link
              to="/contact"
              className="btn-gold inline-flex min-h-11 w-full items-center justify-center text-center"
            >
              Continue to Contact
            </Link>
            <a
              href="tel:+254757688891"
              className="mt-4 block text-center text-sm text-brand-gold-light hover:text-white"
            >
              +254 757 688 891
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
