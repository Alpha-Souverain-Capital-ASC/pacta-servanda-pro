import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/book-consultation")({
  head: () => ({
    meta: [
      { title: "Book a Consultation — P&A Advocates LLP" },
      { name: "description", content: "Schedule a confidential consultation with the legal team at P&A Advocates LLP." },
    ],
  }),
  component: Book,
});

function Book() {
  return (
    <>
      <PageHeader eyebrow="Consultation" title="Schedule a Consultation" subtitle="Book a confidential session with our legal team." />
      <section className="py-20 px-6 bg-brand-offwhite">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-neutral-200 h-[520px] flex items-center justify-center text-center px-6">
            <div>
              <p className="text-brand-gold text-xs tracking-[0.3em] uppercase mb-3">Booking</p>
              <p className="font-display text-2xl text-brand-green">Calendly Booking Widget</p>
              <p className="text-sm text-muted-foreground mt-2">Embed link goes here.</p>
            </div>
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center">
            <a href="tel:+254757688891" className="bg-white p-6 border border-neutral-200 hover:border-brand-gold transition">
              <p className="text-brand-gold text-2xl">📞</p>
              <p className="text-xs tracking-[0.25em] uppercase text-brand-green mt-2">Call</p>
              <p className="text-sm text-muted-foreground mt-1">+254 757 688 891</p>
            </a>
            <a href="mailto:paadvocatesllp@gmail.com" className="bg-white p-6 border border-neutral-200 hover:border-brand-gold transition">
              <p className="text-brand-gold text-2xl">✉</p>
              <p className="text-xs tracking-[0.25em] uppercase text-brand-green mt-2">Email</p>
              <p className="text-sm text-muted-foreground mt-1">paadvocatesllp@gmail.com</p>
            </a>
            <a href="https://wa.me/254757688891" className="bg-white p-6 border border-neutral-200 hover:border-brand-gold transition">
              <p className="text-brand-gold text-2xl">💬</p>
              <p className="text-xs tracking-[0.25em] uppercase text-brand-green mt-2">WhatsApp</p>
              <p className="text-sm text-muted-foreground mt-1">wa.me/254757688891</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
