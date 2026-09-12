import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, MessageSquare, Navigation, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  onStartPlanning: () => void;
  onOpenCallback: () => void;
  onOpenWhatsApp: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onStartPlanning,
  onOpenCallback,
  onOpenWhatsApp,
}) => {
  const [tourBooked, setTourBooked] = useState(false);
  const [tourData, setTourData] = useState({
    name: '',
    phone: '',
    date: '',
    guests: '100–250 Guests',
  });

  const handleBookTour = (e: React.FormEvent) => {
    e.preventDefault();
    setTourBooked(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FAF8F5] text-[#1A1410] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-[#8C6E42] tracking-[0.25em] font-semibold">
                14 / CONNECT & VISIT
              </span>
              <div className="h-[1px] w-12 bg-[#8C6E42]/60" />
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#1A1410] tracking-tight">
              BEGIN YOUR JOURNEY<br />
              <span className="italic font-normal text-[#A16B5E]">WITH US.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#2D231C]/75 font-light leading-relaxed">
            Whether you envision a coastal mandap bathed in sunset light or a royal banquet under crystal chandeliers, our wedding team is here to assist.
          </p>
        </div>

        {/* Contact Layout (2-Column Split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Estate Info & Map Aesthetic Box (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#1A1410] text-white p-8 sm:p-10 rounded-sm border border-[#C5A880]/30 shadow-xl space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full border border-[#C5A880] flex items-center justify-center bg-[#241C16]">
                    <span className="font-cinzel text-sm text-gold-gradient font-bold">A</span>
                  </div>
                  <h3 className="font-cinzel text-xl font-bold tracking-[0.2em] text-[#FAF8F5]">
                    AURELIA WEDDINGS
                  </h3>
                </div>
                <p className="font-script text-xl text-[#DFCDAB]">
                  “Your Story. Your Day. Your Forever.”
                </p>
              </div>

              {/* Address & Meta */}
              <div className="space-y-4 pt-4 border-t border-[#C5A880]/20">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#DFCDAB] uppercase block font-semibold">
                      ESTATE LOCATION
                    </span>
                    <p className="text-sm text-[#FAF8F5]/90 mt-0.5">
                      18 Heritage Estate, Beach Road,<br />
                      Visakhapatnam, Andhra Pradesh 530003, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#DFCDAB] uppercase block font-semibold">
                      DIRECT WEDDING DESK
                    </span>
                    <p className="text-sm text-[#FAF8F5]/90 mt-0.5">
                      +91 90000 00000 <span className="text-xs text-white/50">(Fictional Demo)</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#DFCDAB] uppercase block font-semibold">
                      EMAIL INQUIRIES
                    </span>
                    <p className="text-sm text-[#FAF8F5]/90 mt-0.5">
                      celebrate@aurelia.example
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#DFCDAB] uppercase block font-semibold">
                      CONCIERGE HOURS
                    </span>
                    <p className="text-sm text-[#FAF8F5]/90 mt-0.5">
                      Monday — Sunday: 9:00 AM — 8:00 PM IST
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-4 border-t border-[#C5A880]/20">
                <button
                  onClick={onOpenCallback}
                  className="p-2.5 rounded-sm bg-[#241C16] hover:bg-[#C5A880] hover:text-[#1A1410] border border-[#C5A880]/40 text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>CALL</span>
                </button>

                <button
                  onClick={onOpenWhatsApp}
                  className="p-2.5 rounded-sm bg-[#241C16] hover:bg-[#C5A880] hover:text-[#1A1410] border border-[#C5A880]/40 text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WHATSAPP</span>
                </button>

                <button
                  onClick={onStartPlanning}
                  className="col-span-2 sm:col-span-1 p-2.5 rounded-sm bg-gradient-to-r from-[#C5A880] to-[#DFCDAB] text-[#140E0A] text-xs font-bold tracking-wider uppercase shadow-md transition-all flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>PLAN</span>
                </button>
              </div>

              <div className="text-[11px] font-mono text-[#DFCDAB]/70 tracking-wider text-center">
                * Clearly labeled fictional demo information for presentation purposes.
              </div>
            </div>
          </div>

          {/* Right Column: Schedule a Private Estate Tour Card (6 Cols) */}
          <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-sm border border-[#EAE2D8] shadow-xl">
            <div className="mb-6">
              <span className="text-[10px] font-mono tracking-widest text-[#8C6E42] uppercase font-semibold block mb-1">
                PRIVATE ESTATE EXPERIENCE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1A1410]">
                SCHEDULE A PRIVATE TOUR
              </h3>
              <p className="text-xs sm:text-sm text-[#2D231C]/75 font-light mt-1">
                Experience our oceanfront lawns, pillarless ballrooms, and bridal suite in person with a dedicated wedding director.
              </p>
            </div>

            {tourBooked ? (
              <div className="py-10 text-center space-y-4 animate-fade-slow">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-2xl text-[#1A1410] font-medium">
                  TOUR CONFIRMATION PENDING
                </h4>
                <p className="text-xs sm:text-sm text-[#2D231C]/80 font-light max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{tourData.name}</strong>. Our estate host has received your private walkthrough request for <strong>{tourData.date || 'your chosen date'}</strong> and will send a personalized confirmation itinerary to {tourData.phone}.
                </p>
                <button
                  onClick={() => setTourBooked(false)}
                  className="px-6 py-2.5 bg-[#1A1410] text-white text-xs font-semibold tracking-wider uppercase rounded-sm"
                >
                  SCHEDULE ANOTHER TOUR
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookTour} className="space-y-4">
                <div>
                  <label className="text-[11px] font-mono tracking-wider uppercase text-[#8C6E42] font-semibold block mb-1">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Radhika Sharma"
                    value={tourData.name}
                    onChange={(e) => setTourData({ ...tourData, name: e.target.value })}
                    className="w-full p-3 rounded-sm bg-[#FAF8F5] border border-[#EAE2D8] focus:border-[#C5A880] text-sm text-[#1A1410] outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono tracking-wider uppercase text-[#8C6E42] font-semibold block mb-1">
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={tourData.phone}
                      onChange={(e) => setTourData({ ...tourData, phone: e.target.value })}
                      className="w-full p-3 rounded-sm bg-[#FAF8F5] border border-[#EAE2D8] focus:border-[#C5A880] text-sm text-[#1A1410] outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono tracking-wider uppercase text-[#8C6E42] font-semibold block mb-1">
                      PREFERRED VISIT DATE *
                    </label>
                    <input
                      type="date"
                      required
                      value={tourData.date}
                      onChange={(e) => setTourData({ ...tourData, date: e.target.value })}
                      className="w-full p-3 rounded-sm bg-[#FAF8F5] border border-[#EAE2D8] focus:border-[#C5A880] text-sm text-[#1A1410] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-mono tracking-wider uppercase text-[#8C6E42] font-semibold block mb-1">
                    ESTIMATED GUEST SCALE
                  </label>
                  <select
                    value={tourData.guests}
                    onChange={(e) => setTourData({ ...tourData, guests: e.target.value })}
                    className="w-full p-3 rounded-sm bg-[#FAF8F5] border border-[#EAE2D8] focus:border-[#C5A880] text-sm text-[#1A1410] outline-none"
                  >
                    <option value="Under 100 Guests">Under 100 Guests (Boutique)</option>
                    <option value="100–250 Guests">100 – 250 Guests (Heritage)</option>
                    <option value="250–500 Guests">250 – 500 Guests (Grand)</option>
                    <option value="500+ Guests">500+ Guests (Royal Monumental)</option>
                  </select>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-[#C5A880] via-[#DFCDAB] to-[#C5A880] text-[#140E0A] font-sans font-bold text-xs tracking-[0.2em] uppercase rounded-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>CONFIRM PRIVATE WALKTHROUGH</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
