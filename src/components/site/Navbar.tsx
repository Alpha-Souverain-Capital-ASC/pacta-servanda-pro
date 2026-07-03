import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/practice-areas", label: "Practice Areas" },
  { to: "/team", label: "Team" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200 ${
        scrolled ? "nav-scrolled" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[4.25rem] sm:h-[4.75rem] flex items-center justify-between gap-3">
        <Link to="/" onClick={() => setOpen(false)} className="shrink-0 flex items-center">
          {/* Mobile: short only */}
          <span className="md:hidden font-display text-brand-green text-lg font-semibold tracking-wide whitespace-nowrap">
            P &amp; A Advocates LLP
          </span>
          {/* Desktop: full ↔ short with animation */}
          <span className="hidden md:inline-block relative h-7 min-w-[16rem]">
            <span className="wordmark-full font-display text-brand-green text-xl lg:text-2xl font-semibold tracking-wide">
              Perry &amp; Ateng Advocates LLP
            </span>
            <span className="wordmark-short font-display text-brand-green text-xl lg:text-2xl font-semibold tracking-wide">
              P &amp; A Advocates LLP
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[13px] lg:text-sm font-medium text-brand-green hover:text-brand-gold transition-colors relative py-2 whitespace-nowrap"
              activeProps={{
                className:
                  "text-[13px] lg:text-sm font-medium text-brand-green relative py-2 border-b-2 border-brand-gold whitespace-nowrap",
              }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center justify-center px-3 lg:px-4 py-2 border border-brand-gold text-brand-gold text-[11px] lg:text-[12px] font-medium uppercase tracking-[0.1em] whitespace-nowrap transition-colors hover:bg-brand-gold hover:text-white font-sans"
        >
          Book a Consultation
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-11 h-11 text-brand-gold"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div
        className={`md:hidden bg-brand-green overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="min-h-12 flex items-center text-white text-[15px] font-sans tracking-wide border-b border-white/10 hover:text-brand-gold"
              activeProps={{
                className:
                  "min-h-12 flex items-center text-brand-gold text-[15px] font-sans tracking-wide border-b border-white/10",
              }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-5 mb-2 w-full inline-flex items-center justify-center min-h-12 px-4 border border-brand-gold text-brand-gold text-[13px] font-medium uppercase tracking-[0.12em] hover:bg-brand-gold hover:text-white"
          >
            Book a Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
