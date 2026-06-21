import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-brand-green text-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-display text-2xl text-brand-gold mb-3">P&amp;A Advocates LLP</h3>
          <p className="text-sm text-white/80 leading-relaxed mb-6">
            Trusted Legal Excellence. Personalised Legal Support.
          </p>
          <p className="text-sm text-white/70">Kaderbhoy Building, First Floor, Room 13</p>
          <p className="text-sm text-white/70">Nkurumah Road, Mombasa</p>
          <p className="text-sm text-white/70 mt-2">+254 757 688 891</p>
          <p className="text-sm text-white/70">paadvocatesllp@gmail.com</p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-brand-gold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/" className="hover:text-brand-gold">Privacy Policy</Link></li>
            <li><Link to="/" className="hover:text-brand-gold">Terms of Service</Link></li>
            <li><Link to="/" className="hover:text-brand-gold">Legal Notice</Link></li>
            <li><Link to="/" className="hover:text-brand-gold">Sitemap</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-brand-gold mb-4">Contact</h4>
          <p className="text-sm text-white/80">Kaderbhoy Building, First Floor</p>
          <p className="text-sm text-white/80">Room 13, Nkurumah Road</p>
          <p className="text-sm text-white/80">Mombasa, Kenya</p>
          <p className="text-sm text-white/80 mt-3">+254 757 688 891</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 text-center text-xs text-white/60">
          © 2025 P&amp;A Advocates LLP. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
