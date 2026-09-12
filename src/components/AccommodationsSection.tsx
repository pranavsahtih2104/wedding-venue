import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { ACCOMMODATIONS, type Accommodation } from '../data/accommodations';

interface AccommodationsSectionProps {
  onStartPlanning: () => void;
}

export const AccommodationsSection: React.FC<AccommodationsSectionProps> = ({ onStartPlanning }) => {
  const [, setSelectedAcc] = useState<Accommodation>(ACCOMMODATIONS[0]);

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] text-[#1A1410] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-[#8C6E42] tracking-[0.25em] font-semibold">
                10 / GUEST ACCOMMODATIONS
              </span>
              <div className="h-[1px] w-12 bg-[#8C6E42]/60" />
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#1A1410] tracking-tight">
              LUXURY RETREATS FOR<br />
              <span className="italic font-normal text-[#A16B5E]">YOUR GUESTS</span> & FAMILY.
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#2D231C]/75 font-light leading-relaxed">
            From the expansive Imperial Bridal Suite with 6-station vanity salon to private oceanfront plunge pool villas, your loved ones experience peerless comfort.
          </p>
        </div>

        {/* 4 Accommodations Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACCOMMODATIONS.map((acc) => (
            <div
              key={acc.id}
              onClick={() => setSelectedAcc(acc)}
              className="bg-white rounded-sm overflow-hidden border border-[#EAE2D8] hover:border-[#C5A880] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              {/* Image Frame */}
              <div className="relative h-60 overflow-hidden img-zoom-container">
                <img
                  src={acc.image}
                  alt={acc.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140E0A]/70 via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-[#1A1410]/70 backdrop-blur-md text-[9px] font-mono tracking-widest text-[#DFCDAB] uppercase border border-white/20">
                    {acc.category}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-mono tracking-wider uppercase text-[#DFCDAB] block">
                    {acc.sizeSqFt} SQ. FT.
                  </span>
                  <h3 className="font-serif text-lg font-medium text-white group-hover:text-[#DFCDAB] transition-colors line-clamp-1">
                    {acc.name}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#8C6E42] tracking-wider uppercase block mb-1">
                    {acc.capacityText}
                  </span>
                  <p className="text-xs text-[#2D231C]/75 font-light leading-relaxed mb-4 line-clamp-3">
                    {acc.description}
                  </p>

                  <div className="space-y-1.5 mb-4">
                    {acc.amenities.slice(0, 3).map((am, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-[#1A1410]/85">
                        <Check className="w-3 h-3 text-[#8C6E42] shrink-0" />
                        <span className="line-clamp-1">{am}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onStartPlanning();
                  }}
                  className="w-full py-2 px-3 border border-[#1A1410] group-hover:bg-[#1A1410] group-hover:text-white text-[11px] font-semibold tracking-wider uppercase rounded-sm transition-colors text-center mt-2"
                >
                  RESERVE ROOM BLOCK
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
