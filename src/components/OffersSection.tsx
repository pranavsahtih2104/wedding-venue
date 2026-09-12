import React from 'react';
import { Check, Gift } from 'lucide-react';
import { OFFERS } from '../data/offers';

interface OffersSectionProps {
  onStartPlanning: (offerTitle?: string) => void;
}

export const OffersSection: React.FC<OffersSectionProps> = ({ onStartPlanning }) => {
  return (
    <section id="offers" className="py-24 sm:py-32 bg-[#FAF8F5] text-[#1A1410] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-[#8C6E42] tracking-[0.25em] font-semibold">
                12 / BESPOKE PRIVILEGES
              </span>
              <div className="h-[1px] w-12 bg-[#8C6E42]/60" />
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#1A1410] tracking-tight">
              CURRENT CURATED<br />
              <span className="italic font-normal text-[#A16B5E]">CELEBRATION</span> PACKAGES.
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#2D231C]/75 font-light leading-relaxed">
            Thoughtfully assembled celebration packages offering enhanced hospitality privileges, venue flexibility, and complimentary signature experiences.
          </p>
        </div>

        {/* 3 Offers Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {OFFERS.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-sm overflow-hidden border border-[#EAE2D8] hover:border-[#C5A880] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Header Image */}
              <div className="relative h-64 overflow-hidden img-zoom-container">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140E0A]/85 via-transparent to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#1A1410]/75 backdrop-blur-md text-[9px] font-mono tracking-widest text-[#DFCDAB] uppercase border border-white/20">
                    {offer.badge}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-white mb-0.5">
                    {offer.title}
                  </h3>
                  <span className="text-[10px] font-mono text-[#DFCDAB] uppercase tracking-wider block">
                    {offer.validity}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-[#2D231C]/80 font-light leading-relaxed mb-6">
                    {offer.description}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    <span className="text-[10px] font-mono tracking-widest text-[#8C6E42] uppercase font-semibold block">
                      KEY PACKAGE PRIVILEGES
                    </span>
                    {offer.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#1A1410]/90">
                        <Check className="w-3.5 h-3.5 text-[#8C6E42] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-[#EAE2D8]">
                  <button
                    onClick={() => onStartPlanning(offer.title)}
                    className="w-full py-3 px-4 bg-gradient-to-r from-[#C5A880] to-[#DFCDAB] text-[#140E0A] font-sans font-bold text-xs tracking-[0.16em] uppercase rounded-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Gift className="w-3.5 h-3.5" />
                    <span>CLAIM THIS PACKAGE</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
