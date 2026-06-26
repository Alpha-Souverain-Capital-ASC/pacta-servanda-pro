import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/practice-areas", label: "Practice Areas" },
  { to: "/team", label: "Our Team" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-3">
        <Link to="/" onClick={() => setOpen(false)} className="shrink-0">
          <img
            src={logoAsset.url}
            alt="P&A Advocates LLP"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-5 lg:gap-8">
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
          className="hidden md:inline-flex items-center justify-center px-3 lg:px-4 py-2 border border-brand-gold text-brand-gold text-[12px] lg:text-[13px] font-medium uppercase tracking-[0.1em] whitespace-nowrap transition-colors hover:bg-brand-gold hover:text-white font-sans"
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
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown */}
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
