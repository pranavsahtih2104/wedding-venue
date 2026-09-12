import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Globe, Camera, Share2 } from 'lucide-react';

interface FooterProps {
  onOpenPlanning: () => void;
  onOpenCallback: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPlanning, onOpenCallback }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  const navLinks = [
    { name: 'Destinations', href: '#destinations' },
    { name: 'Venues', href: '#venues' },
    { name: 'Wedding Experiences', href: '#experiences' },
    { name: 'Royal Cuisine', href: '#cuisine' },
    { name: 'Photo Gallery', href: '#gallery' },
    { name: 'Aurelia Journal', href: '#journal' },
    { name: 'Current Offers', href: '#offers' },
    { name: 'Contact & Location', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#100C09] text-[#FAF8F5] border-t border-[#C5A880]/30 pt-20 pb-12 relative overflow-hidden">
      {/* Decorative ambient gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#C5A880]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#C5A880]/20">
          
          {/* Brand Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#C5A880] flex items-center justify-center bg-[#1A1410]">
                <span className="font-cinzel text-lg text-gold-gradient font-bold">A</span>
              </div>
              <div>
                <span className="font-cinzel text-xl font-bold tracking-[0.22em] text-[#FAF8F5] block">
                  AURELIA
                </span>
                <span className="text-[9px] tracking-[0.32em] text-[#C5A880] uppercase font-medium">
                  WEDDINGS & DESTINATIONS
                </span>
              </div>
            </div>

            <p className="font-serif italic text-xl sm:text-2xl text-[#DFCDAB] leading-relaxed">
              “YOUR STORY. YOUR DAY. YOUR FOREVER.”
            </p>

            <p className="text-xs sm:text-sm text-[#FAF8F5]/70 font-light leading-relaxed max-w-sm">
              A luxury wedding destination offering regal indoor and outdoor spaces, curated floral architecture, master cuisine, and bespoke wedding concierge directors.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onOpenPlanning}
                className="bg-gradient-to-r from-[#C5A880] to-[#DFCDAB] text-[#140E0A] font-sans font-bold text-xs tracking-[0.16em] uppercase px-6 py-3 rounded-sm shadow-md hover:shadow-lg transition-all"
              >
                START PLANNING
              </button>
              <button
                onClick={onOpenCallback}
                className="border border-[#C5A880]/50 hover:border-[#C5A880] text-xs font-semibold tracking-wider uppercase text-white px-5 py-3 rounded-sm transition-colors"
              >
                CALL BACK
              </button>
            </div>
          </div>

          {/* Navigation Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs tracking-[0.25em] text-[#C5A880] uppercase font-semibold">
              EXPLORE THE ESTATE
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-xs text-[#FAF8F5]/80 hover:text-[#C5A880] transition-colors tracking-wider font-light"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="font-mono text-xs tracking-[0.25em] text-[#C5A880] uppercase font-semibold">
              WEDDING INSPIRATION, DELIVERED.
            </h4>
            <p className="text-xs text-[#FAF8F5]/70 font-light leading-relaxed">
              Subscribe to receive our seasonal bridal lookbooks, culinary updates, and destination wedding guides.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#1A1410] border border-[#C5A880]/40 rounded-sm text-xs text-[#DFCDAB] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
                <span>Thank you for subscribing to Aurelia Weddings journal.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 p-2.5 rounded-sm bg-[#1A1410] border border-[#C5A880]/30 text-xs text-white placeholder-white/40 outline-none focus:border-[#C5A880]"
                />
                <button
                  type="submit"
                  className="p-2.5 bg-[#C5A880] hover:bg-[#DFCDAB] text-[#140E0A] rounded-sm transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* Social Media Links */}
            <div className="pt-4">
              <span className="text-[10px] font-mono tracking-widest text-[#C5A880] uppercase block mb-3 font-semibold">
                CONNECT WITH US
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="#gallery"
                  className="w-9 h-9 rounded-full bg-[#1A1410] border border-[#C5A880]/40 hover:border-[#C5A880] hover:text-[#C5A880] flex items-center justify-center transition-colors text-white"
                  title="Instagram / Visual Gallery"
                >
                  <Camera className="w-4 h-4" />
                </a>
                <a
                  href="#journal"
                  className="w-9 h-9 rounded-full bg-[#1A1410] border border-[#C5A880]/40 hover:border-[#C5A880] hover:text-[#C5A880] flex items-center justify-center transition-colors text-white"
                  title="Editorial Journal"
                >
                  <Globe className="w-4 h-4" />
                </a>
                <a
                  href="#offers"
                  className="w-9 h-9 rounded-full bg-[#1A1410] border border-[#C5A880]/40 hover:border-[#C5A880] hover:text-[#C5A880] flex items-center justify-center transition-colors text-white"
                  title="Celebration Privileges"
                >
                  <Sparkles className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="w-9 h-9 rounded-full bg-[#1A1410] border border-[#C5A880]/40 hover:border-[#C5A880] hover:text-[#C5A880] flex items-center justify-center transition-colors text-white"
                  title="Share Estate Inquiry"
                >
                  <Share2 className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Demo Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#FAF8F5]/50 font-mono">
          <p>© {new Date().getFullYear()} AURELIA WEDDINGS. ALL RIGHTS RESERVED.</p>
          <p className="text-center sm:text-right text-[#C5A880]/70">
            ORIGINAL LUXURY WEDDING VENUE CONCEPT • DEMO EXPERIENCE
          </p>
        </div>

      </div>
    </footer>
  );
};
