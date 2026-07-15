import { Link } from "@tanstack/react-router";
import { OrnamentDivider } from "./OrnamentDivider";
import logoAsset from "@/assets/logo-gold.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-brand-green text-white relative">
      <div className="pt-6 flex justify-center">
        <OrnamentDivider width={260} />
      </div>
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <img
            src={logoAsset.url}
            alt="P&A Advocates LLP"
            className="h-24 md:h-28 w-auto object-contain mb-5"
          />
          <p className="text-sm text-brand-cream-text/85 leading-relaxed mb-6 max-w-xs">
            Trusted Legal Excellence. Personalised Legal Support.
          </p>
          <p className="text-sm text-white/70">Kaderbhoy Building, First Floor, Room 13</p>
          <p className="text-sm text-white/70">Nkurumah Road, Mombasa, Kenya</p>
          <p className="text-sm text-white/70 mt-2">+254 757 688 891</p>
          <p className="text-sm text-white/70">paadvocatesllp@gmail.com</p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-brand-gold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-white/85">
            <li><Link to="/" className="hover:text-brand-gold">Privacy Policy</Link></li>
            <li><Link to="/" className="hover:text-brand-gold">Terms of Service</Link></li>
            <li><Link to="/" className="hover:text-brand-gold">Legal Notice</Link></li>
            <li><Link to="/" className="hover:text-brand-gold">Sitemap</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-brand-gold mb-4">Contact</h4>
          <p className="text-sm text-white/85">Kaderbhoy Building, First Floor, Room 13</p>
          <p className="text-sm text-white/85">Nkurumah Road, Mombasa, Kenya</p>
          <p className="text-sm text-white/85 mt-3">+254 757 688 891</p>
          <p className="text-sm text-white/85">paadvocatesllp@gmail.com</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 text-center text-xs text-white/70">
          © 2025 P&amp;A Advocates LLP. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
