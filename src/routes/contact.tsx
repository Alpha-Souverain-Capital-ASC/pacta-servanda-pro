import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — P&A Advocates LLP" },
      { name: "description", content: "Get in touch with P&A Advocates LLP in Mombasa, Kenya." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHeader eyebrow="Contact" title="Get in Touch" subtitle="We're here to help. Reach out and our team will respond promptly." />

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14">
          <div>
            <p className="text-brand-gold text-xs tracking-[0.3em] uppercase mb-3">Contact Information</p>
            <h2 className="font-display text-4xl text-brand-green font-semibold mb-8">Visit, call, or write.</h2>
            <div className="space-y-5 text-sm">
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-brand-gold mb-1">Address</p>
                <p className="text-brand-green">Kaderbhoy Building, First Floor, Room 13</p>
                <p className="text-brand-green">Nkurumah Road, Mombasa</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-brand-gold mb-1">Phone</p>
                <p className="text-brand-green">+254 757 688 891</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-brand-gold mb-1">Email</p>
                <p className="text-brand-green">paadvocatesllp@gmail.com</p>
              </div>
            </div>
            <div className="mt-10 bg-brand-offwhite border border-neutral-200 h-72 flex items-center justify-center text-muted-foreground text-sm">
              Google Maps Embed
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="bg-brand-offwhite p-10 border-t-2 border-brand-gold"
          >
            <p className="text-brand-gold text-xs tracking-[0.3em] uppercase mb-3">Send a Message</p>
            <h2 className="font-display text-3xl text-brand-green font-semibold mb-8">How can we help?</h2>
            <div className="space-y-5">
              <Field label="Full Name"><input required type="text" className="input" /></Field>
              <Field label="Email Address"><input required type="email" className="input" /></Field>
              <Field label="Phone Number"><input type="tel" className="input" /></Field>
              <Field label="Subject">
                <select className="input">
                  <option>General Inquiry</option>
                  <option>Specific Practice Area</option>
                </select>
              </Field>
              <Field label="Message"><textarea required rows={5} className="input" /></Field>
            </div>
            <button type="submit" className="btn-gold mt-8 w-full">{sent ? "Message Sent ✓" : "Send Message →"}</button>
          </form>
        </div>
      </section>

      <section className="bg-brand-offwhite py-16 px-6 text-center">
        <p className="text-brand-gold text-xs tracking-[0.3em] uppercase mb-3">Visit Our Offices</p>
        <h2 className="font-display text-3xl text-brand-green">Kaderbhoy Building, First Floor, Room 13</h2>
        <p className="text-muted-foreground mt-2">Nkurumah Road, Mombasa</p>
      </section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs tracking-[0.2em] uppercase text-brand-green mb-2 block">{label}</span>
      {children}
      <style>{`.input{width:100%;background:#fff;border:1px solid #e5e5e5;padding:.75rem 1rem;font-family:var(--font-sans);font-size:.9rem;color:#044422;outline:none}.input:focus{border-color:#C79D31}`}</style>
    </label>
  );
}
