import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/logo-gold.png.asset.json";

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
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

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
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        transparent
          ? "bg-transparent border-b border-transparent"
          : "bg-brand-green border-b border-brand-green-mid nav-scrolled"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[4.25rem] sm:h-[4.75rem] flex items-center justify-between gap-3">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="shrink-0 flex items-center gap-3"
          aria-label="P&A Advocates LLP — Home"
        >
          <span className="inline-flex items-center justify-center h-11 w-11 sm:h-13 sm:w-13 rounded-full bg-brand-offwhite ring-1 ring-brand-gold/60 shadow-sm overflow-hidden">
            <img
              src={logoAsset.url}
              alt="P&A Advocates LLP"
              className="h-full w-full object-contain"
              width={56}
              height={56}
            />
          </span>
          <span className="sr-only">P&amp;A Advocates LLP</span>
        </Link>

        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[13px] lg:text-sm font-medium text-white/90 hover:text-brand-gold transition-colors relative py-2 whitespace-nowrap"
              activeProps={{
                className:
                  "text-[13px] lg:text-sm font-medium text-white relative py-2 border-b-2 border-brand-gold whitespace-nowrap",
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
