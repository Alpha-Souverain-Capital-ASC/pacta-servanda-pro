import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/practice-areas", label: "Practice Areas" },
  { to: "/team", label: "Our Team" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl font-semibold text-brand-green tracking-wide">
          P<span className="text-brand-gold">&amp;</span>A Advocates
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-brand-green hover:text-brand-gold transition-colors relative py-2"
              activeProps={{ className: "text-sm font-medium text-brand-green relative py-2 border-b-2 border-brand-gold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/book-consultation"
          className="hidden sm:inline-flex items-center justify-center h-10 px-5 border border-brand-gold text-brand-gold text-[13px] font-semibold uppercase tracking-[0.12em] whitespace-nowrap transition-colors hover:bg-brand-gold hover:text-white font-sans"
        >
          Book a Consultation
        </Link>
      </div>
    </header>

  );
}
