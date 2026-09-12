import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, Calendar, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenPlanning: () => void;
  onOpenCallback: () => void;
  onOpenWhatsApp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenPlanning,
  onOpenCallback,
  onOpenWhatsApp,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'DESTINATIONS', href: '#destinations' },
    { name: 'VENUES', href: '#venues' },
    { name: 'EXPERIENCES', href: '#experiences' },
    { name: 'CUISINE', href: '#cuisine' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'JOURNAL', href: '#journal' },
    { name: 'OFFERS', href: '#offers' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#1A1410]/92 backdrop-blur-md text-[#FAF8F5] py-3.5 shadow-xl border-b border-[#C5A880]/20'
            : 'bg-gradient-to-b from-[#1A1410]/80 via-[#1A1410]/40 to-transparent text-white py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#C5A880]/50 rounded-sm"
            >
              <div className="w-10 h-10 rounded-full border border-[#C5A880] flex items-center justify-center bg-[#1A1410]/60 group-hover:border-[#DFCDAB] transition-colors shadow-sm">
                <span className="font-cinzel text-lg font-semibold text-gold-gradient">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-base sm:text-lg font-bold tracking-[0.22em] text-[#FAF8F5] leading-tight">
                  AURELIA
                </span>
                <span className="text-[9px] tracking-[0.32em] text-[#C5A880] uppercase font-medium">
                  WEDDINGS
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-xs font-medium tracking-[0.18em] text-[#FAF8F5]/85 hover:text-[#C5A880] transition-colors uppercase relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A880] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* Desktop Action CTAs */}
            <div className="hidden md:flex items-center gap-3.5">
              <button
                onClick={onOpenCallback}
                className="text-xs font-semibold tracking-wider text-[#FAF8F5] hover:text-[#C5A880] px-3.5 py-2 transition-colors flex items-center gap-1.5 border border-[#C5A880]/40 hover:border-[#C5A880] rounded-sm bg-[#1A1410]/40 backdrop-blur-sm"
                title="Get a 30-Second Call Back"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>CALL BACK</span>
              </button>

              <button
                onClick={onOpenWhatsApp}
                className="p-2 text-[#FAF8F5] hover:text-[#C5A880] transition-colors border border-[#C5A880]/30 hover:border-[#C5A880] rounded-sm bg-[#1A1410]/30"
                title="WhatsApp Concierge"
              >
                <MessageSquare className="w-4 h-4 text-[#C5A880]" />
              </button>

              <button
                onClick={onOpenPlanning}
                className="relative group overflow-hidden bg-gradient-to-r from-[#C5A880] via-[#DFCDAB] to-[#C5A880] bg-size-200 text-[#1A1410] font-sans font-semibold text-xs tracking-[0.16em] uppercase px-5 py-2.5 rounded-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5" />
                  START PLANNING
                </span>
              </button>
            </div>

            {/* Mobile Menu & Plan CTA Toggle */}
            <div className="flex items-center gap-2.5 xl:hidden">
              <button
                onClick={onOpenPlanning}
                className="bg-gradient-to-r from-[#C5A880] to-[#DFCDAB] text-[#1A1410] text-[11px] font-bold tracking-wider uppercase px-3.5 py-2 rounded-sm"
              >
                PLAN
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#FAF8F5] hover:text-[#C5A880] transition-colors border border-[#C5A880]/40 rounded-sm bg-[#1A1410]/60"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Luxury Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#140E0A] text-[#FAF8F5] flex flex-col justify-between p-6 sm:p-10 animate-fade-slow overflow-y-auto">
          {/* Mobile Header */}
          <div className="flex items-center justify-between border-b border-[#C5A880]/20 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#C5A880] flex items-center justify-center bg-[#241C16]">
                <span className="font-cinzel text-lg text-gold-gradient font-bold">A</span>
              </div>
              <div>
                <div className="font-cinzel text-lg font-bold tracking-[0.2em] text-[#FAF8F5]">AURELIA</div>
                <div className="text-[9px] tracking-[0.3em] text-[#C5A880]">WEDDINGS</div>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#FAF8F5] hover:text-[#C5A880] border border-[#C5A880]/30 rounded-sm"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links in Mobile */}
          <div className="py-8 flex flex-col gap-4">
            {navLinks.map((link, idx) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="flex items-center justify-between text-left py-2 border-b border-[#C5A880]/10 group"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-[11px] font-mono text-[#C5A880]/60">0{idx + 1}</span>
                  <span className="font-serif text-2xl sm:text-3xl tracking-wide group-hover:text-[#C5A880] transition-colors">
                    {link.name}
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-[#C5A880]/40 group-hover:text-[#C5A880] group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </div>

          {/* Mobile Action Buttons & Footer */}
          <div className="space-y-4 pt-4 border-t border-[#C5A880]/20">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPlanning();
              }}
              className="w-full bg-gradient-to-r from-[#C5A880] via-[#DFCDAB] to-[#C5A880] text-[#1A1410] font-sans font-bold text-sm tracking-[0.18em] uppercase py-3.5 rounded-sm flex items-center justify-center gap-2 shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              START PLANNING YOUR WEDDING
            </button>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCallback();
                }}
                className="w-full border border-[#C5A880]/50 text-[#FAF8F5] hover:text-[#C5A880] py-2.5 text-xs font-semibold tracking-wider uppercase rounded-sm flex items-center justify-center gap-2 bg-[#1A1410]"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                CALL BACK
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsApp();
                }}
                className="w-full border border-[#C5A880]/50 text-[#FAF8F5] hover:text-[#C5A880] py-2.5 text-xs font-semibold tracking-wider uppercase rounded-sm flex items-center justify-center gap-2 bg-[#1A1410]"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#C5A880]" />
                WHATSAPP
              </button>
            </div>

            <p className="text-[11px] text-center text-[#C5A880]/70 tracking-widest uppercase pt-2">
              “YOUR STORY. YOUR DAY. YOUR FOREVER.”
            </p>
          </div>
        </div>
      )}
    </>
  );
};
