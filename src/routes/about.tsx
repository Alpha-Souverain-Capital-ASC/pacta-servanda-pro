import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";
import tusksImage from "@/assets/tusks-bw.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — P&A Advocates LLP" },
      { name: "description", content: "A full-service Kenyan law firm driven by integrity, professionalism, and client commitment." },
      { property: "og:title", content: "About — P&A Advocates LLP" },
      { property: "og:description", content: "Our story, vision, mission, and the values driving P&A Advocates LLP." },
      { property: "og:url", content: "https://paadvocatesllp.com/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://paadvocatesllp.com/about" }],
  }),
  component: About,
});

const VALUES = [
  { name: "Integrity", desc: "We uphold the highest ethical standards in every engagement." },
  { name: "Professionalism", desc: "We bring excellence, attention to detail, and respect into every client relationship." },
  { name: "Client Commitment", desc: "Our clients are at the heart of everything we do." },
  { name: "Continuous Growth", desc: "We embrace legal innovation and professional development." },
  { name: "Teamwork", desc: "We believe in collaboration to achieve the best outcomes." },
];

function About() {
  return (
    <>
      <PageHeader eyebrow="About Us" title="A Legacy of Excellence" subtitle="Driven by integrity, professionalism, and a deep commitment to our clients." backgroundImage={tusksImage.url} />

      <section className="py-16 md:py-24 px-6 bg-brand-offwhite">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div
            className="aspect-[4/5] w-full bg-brand-green"
            style={{
              backgroundImage: `linear-gradient(rgba(28,64,50,0.35), rgba(28,64,50,0.55)), url(${tusksImage.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div>
            <p className="text-brand-gold text-xs tracking-[0.3em] uppercase mb-3">Our Story</p>
            <h2 className="font-display text-3xl sm:text-4xl text-brand-green font-semibold mb-6">Built on trust, delivered with rigor.</h2>
            <p className="text-brand-dark-text/70 text-sm sm:text-base leading-relaxed">
              P&amp;A Advocates LLP is a full-service law firm in Kenya committed to providing expert legal services across a wide range of practice areas. We are driven by integrity, professionalism, and a deep commitment to delivering tailored, results-oriented legal solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-brand-green">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <div className="bg-white/5 p-8 md:p-10 border-t-2 border-brand-gold card-lift">
            <p className="text-brand-gold text-xs tracking-[0.3em] uppercase mb-3">Vision</p>
            <p className="text-brand-cream-text font-display text-xl sm:text-2xl leading-snug">
              To be a leading legal service provider in Kenya and the wider East African region, known for our unwavering commitment to justice, integrity, and legal innovation.
            </p>
          </div>
          <div className="bg-white/5 p-8 md:p-10 border-t-2 border-brand-gold card-lift">
            <p className="text-brand-gold text-xs tracking-[0.3em] uppercase mb-3">Mission</p>
            <p className="text-brand-cream-text font-display text-xl sm:text-2xl leading-snug">
              To provide exceptional legal services anchored in professionalism, responsiveness, and results — while building long-term partnerships based on trust and respect.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-brand-offwhite">
        <div className="max-w-6xl mx-auto">
          <p className="text-brand-gold text-xs tracking-[0.3em] uppercase text-center mb-3">Core Values</p>
          <h2 className="font-display text-3xl sm:text-4xl text-brand-green text-center font-semibold mb-12 md:mb-14">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <div key={v.name} className="bg-white p-7 md:p-8 border-l-4 border-brand-gold card-lift">
                <h3 className="font-display text-2xl text-brand-green mb-2">{v.name}</h3>
                <p className="text-sm text-brand-dark-text/70 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
