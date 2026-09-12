import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { VENUES, type Venue } from '../data/venues';
import { VenueModal } from './VenueModal';

interface VenuesSectionProps {
  onStartPlanning: (venueId?: string) => void;
}

export const VenuesSection: React.FC<VenuesSectionProps> = ({ onStartPlanning }) => {
  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);
  const [filterType, setFilterType] = useState<string>('all');

  const filteredVenues = VENUES.filter((venue) => {
    if (filterType === 'all') return true;
    return venue.type === filterType;
  });

  return (
    <section id="venues" className="py-24 sm:py-32 bg-[#FAF8F5] text-[#1A1410] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-[#8C6E42] tracking-[0.25em] font-semibold">
                03 / LUXURY VENUES
              </span>
              <div className="h-[1px] w-12 bg-[#8C6E42]/60" />
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#1A1410] tracking-tight">
              THE PERFECT PLACE<br />
              <span className="italic font-normal text-[#A16B5E]">FOR YOUR</span> YES.
            </h2>
          </div>

          {/* Venue Type Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2 bg-[#F4EFEA] p-1.5 rounded-full border border-[#EAE2D8]">
            <button
              onClick={() => setFilterType('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                filterType === 'all'
                  ? 'bg-[#1A1410] text-[#FAF8F5] shadow-sm'
                  : 'text-[#2D231C]/70 hover:text-[#1A1410]'
              }`}
            >
              All Venues ({VENUES.length})
            </button>
            <button
              onClick={() => setFilterType('indoor')}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                filterType === 'indoor'
                  ? 'bg-[#1A1410] text-[#FAF8F5] shadow-sm'
                  : 'text-[#2D231C]/70 hover:text-[#1A1410]'
              }`}
            >
              Indoor Spaces
            </button>
            <button
              onClick={() => setFilterType('outdoor')}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                filterType === 'outdoor'
                  ? 'bg-[#1A1410] text-[#FAF8F5] shadow-sm'
                  : 'text-[#2D231C]/70 hover:text-[#1A1410]'
              }`}
            >
              Outdoor Lawns
            </button>
            <button
              onClick={() => setFilterType('hybrid')}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                filterType === 'hybrid'
                  ? 'bg-[#1A1410] text-[#FAF8F5] shadow-sm'
                  : 'text-[#2D231C]/70 hover:text-[#1A1410]'
              }`}
            >
              Heritage Courtyards
            </button>
          </div>
        </div>

        {/* Venues Grid (2x2 Editorial Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredVenues.map((venue) => (
            <div
              key={venue.id}
              className="bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#EAE2D8] flex flex-col group"
            >
              {/* Image Frame with Capacity Overlay */}
              <div className="relative h-72 sm:h-80 overflow-hidden img-zoom-container">
                <img
                  src={venue.coverImage}
                  alt={venue.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140E0A]/80 via-transparent to-transparent" />
                
                {/* Top Floating Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#1A1410]/75 backdrop-blur-md border border-[#C5A880]/50 text-[10px] font-mono tracking-widest text-[#DFCDAB] uppercase">
                    {venue.typeLabel}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#FAF8F5]/90 backdrop-blur-md text-[11px] font-serif font-bold text-[#1A1410] shadow-sm">
                    {venue.capacityText}
                  </span>
                </div>

                {/* Bottom Overlay Title on Hover */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono tracking-widest text-[#DFCDAB] uppercase block">
                    {venue.areaSqFt.toLocaleString()} SQ. FT.
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-white group-hover:text-[#DFCDAB] transition-colors">
                    {venue.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-[#2D231C]/75 font-light leading-relaxed mb-5 line-clamp-3">
                    {venue.description}
                  </p>

                  {/* Highlight Features */}
                  <div className="space-y-2 mb-6">
                    {venue.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#1A1410]/85">
                        <Check className="w-3.5 h-3.5 text-[#8C6E42] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ideal Celebrations Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {venue.idealEvents.slice(0, 3).map((evt, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium px-2.5 py-1 rounded bg-[#F4EFEA] text-[#2D231C]/80 border border-[#EAE2D8]"
                      >
                        {evt}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-5 border-t border-[#EAE2D8]">
                  <button
                    onClick={() => setSelectedVenue(venue)}
                    className="w-full py-2.5 px-3 border border-[#1A1410] hover:bg-[#1A1410] hover:text-white text-xs font-semibold tracking-wider uppercase rounded-sm transition-colors text-center"
                  >
                    SPECS & GALLERY
                  </button>
                  <button
                    onClick={() => onStartPlanning(venue.id)}
                    className="w-full py-2.5 px-3 bg-gradient-to-r from-[#C5A880] to-[#DFCDAB] text-[#140E0A] hover:shadow-md text-xs font-bold tracking-wider uppercase rounded-sm transition-all text-center flex items-center justify-center gap-1.5"
                  >
                    <span>ENQUIRE NOW</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Venue Detail Modal */}
      <VenueModal
        venue={selectedVenue}
        onClose={() => setSelectedVenue(null)}
        onEnquireVenue={(venueId) => onStartPlanning(venueId)}
      />
    </section>
  );
};
