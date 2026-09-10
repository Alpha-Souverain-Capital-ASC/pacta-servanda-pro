import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — P&A Advocates LLP" },
      {
        name: "description",
        content:
          "Get in touch with P&A Advocates LLP in Mombasa, Kenya — visit, call, or send us a message.",
      },
      { property: "og:title", content: "Contact — P&A Advocates LLP" },
      {
        property: "og:description",
        content: "Reach P&A Advocates LLP at Kaderbhoy Building, Nkurumah Road, Mombasa.",
      },
      { property: "og:url", content: "https://paadvocatesllp.com/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://paadvocatesllp.com/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact Form: ${formData.subject}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`,
    );
    window.location.href = `mailto:paadvocatesllp@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="page-bg-fixed">
      <PageHeader
        eyebrow="Contact"
        title="Get in Touch"
        subtitle="We're here to help. Reach out and our team will respond promptly."
      />

      <section className="py-16 md:py-24 px-6 relative bg-cream-veil">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 relative">
          <div>
            <p className="text-brand-gold text-xs tracking-[0.3em] uppercase mb-3">
              Contact Information
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-brand-green font-semibold mb-8">
              Visit, call, or write.
            </h2>
            <div className="space-y-5 text-sm">
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-brand-gold mb-1">Address</p>
                <p className="text-brand-green">Kaderbhoy Building, First Floor, Room 13</p>
                <p className="text-brand-green">Nkurumah Road, Mombasa, Kenya</p>
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
            <div className="mt-10 relative h-64 sm:h-72 w-full border-2 border-brand-gold overflow-hidden shadow-lg">
              <iframe
                src="https://maps.google.com/maps?q=Kaderbhoy%20Building%2C%20Nkurumah%20Road%2C%20Mombasa&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "saturate(0.75) contrast(0.95) sepia(0.15)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="P&A Advocates LLP Office Location"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(rgba(4,68,34,0.18), rgba(4,68,34,0.10))" }}
              />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-brand-offwhite p-7 sm:p-10 border-t-2 border-brand-gold w-full"
          >
            <p className="text-brand-gold text-xs tracking-[0.3em] uppercase mb-3">
              Send a Message
            </p>
            <h2 className="font-display text-2xl sm:text-3xl text-brand-green font-semibold mb-8">
              How can we help?
            </h2>
            <div className="space-y-5">
              <Field label="Full Name">
                <input
                  required
                  name="name"
                  type="text"
                  className="input"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Field>
              <Field label="Email Address">
                <input
                  required
                  name="email"
                  type="email"
                  className="input"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Field>
              <Field label="Phone Number">
                <input
                  name="phone"
                  type="tel"
                  className="input"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Field>
              <Field label="Subject">
                <select
                  name="subject"
                  className="input"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option>General Inquiry</option>
                  <option>Specific Practice Area</option>
                </select>
              </Field>
              <Field label="Message">
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="input"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Field>
            </div>
            <button type="submit" className="btn-gold mt-8 w-full min-h-11">
              {sent ? "Message Prepared ✓" : "Send Message →"}
            </button>
            {sent && (
              <p className="text-xs text-brand-green mt-3 text-center">
                Your email client should open with the message pre-filled. If it doesn’t, please
                email us directly at{" "}
                <a href="mailto:paadvocatesllp@gmail.com" className="underline text-brand-gold">
                  paadvocatesllp@gmail.com
                </a>
                .
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="bg-cream-veil py-16 px-6 text-center">
        <p className="text-brand-gold text-xs tracking-[0.3em] uppercase mb-3">Visit Our Offices</p>
        <h2 className="font-display text-3xl text-brand-green">
          Kaderbhoy Building, First Floor, Room 13
        </h2>
        <p className="text-muted-foreground mt-2">Nkurumah Road, Mombasa, Kenya</p>
      </section>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs tracking-[0.2em] uppercase text-brand-green mb-2 block">
        {label}
      </span>
      {children}
      <style>{`.input{width:100%;background:#fff;border:1px solid #e5e5e5;padding:.75rem 1rem;font-family:var(--font-sans);font-size:.9rem;color:#044422;outline:none}.input:focus{border-color:#C79D31}`}</style>
    </label>
  );
}
