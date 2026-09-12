import React, { useState } from 'react';
import { X, Maximize2, Sparkles, Building2, Calendar, CheckCircle2 } from 'lucide-react';
import type { Venue } from '../data/venues';

interface VenueModalProps {
  venue: Venue | null;
  onClose: () => void;
  onEnquireVenue: (venueId: string) => void;
}

export const VenueModal: React.FC<VenueModalProps> = ({ venue, onClose, onEnquireVenue }) => {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  if (!venue) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-[#100C09]/88 backdrop-blur-md animate-fade-slow overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#FAF8F5] text-[#1A1410] rounded-sm shadow-2xl overflow-hidden my-auto border border-[#C5A880]/30 max-h-[92vh] flex flex-col">
        
        {/* Close Modal Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-[#1A1410]/70 hover:bg-[#1A1410] text-white border border-white/20 transition-colors shadow-lg"
          aria-label="Close venue details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Venue Header Banner */}
        <div className="relative h-64 sm:h-84 w-full overflow-hidden shrink-0">
          <img src={venue.coverImage} alt={venue.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#140E0A] via-[#140E0A]/45 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A880]/30 backdrop-blur-md border border-[#C5A880]/50 text-[10px] tracking-[0.25em] text-[#DFCDAB] uppercase mb-2 font-mono">
              <Building2 className="w-3 h-3" />
              {venue.typeLabel}
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#FAF8F5]">
              {venue.name}
            </h2>
            <p className="font-script text-xl sm:text-2xl text-[#DFCDAB] mt-1">
              {venue.subtitle}
            </p>
          </div>
        </div>

        {/* Venue Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          
          {/* Key Metric Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 rounded-sm bg-[#F4EFEA] border border-[#EAE2D8]">
            <div className="flex flex-col">
              <span className="text-[10px] font-mono tracking-wider uppercase text-[#8C6E42] font-semibold">Capacity</span>
              <span className="text-base sm:text-lg font-serif font-bold text-[#1A1410]">{venue.capacityText}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono tracking-wider uppercase text-[#8C6E42] font-semibold">Total Area</span>
              <span className="text-base sm:text-lg font-serif font-bold text-[#1A1410]">{venue.areaSqFt.toLocaleString()} sq. ft.</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono tracking-wider uppercase text-[#8C6E42] font-semibold">Ceiling Height</span>
              <span className="text-sm sm:text-base font-medium text-[#1A1410]">{venue.ceilingHeight}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono tracking-wider uppercase text-[#8C6E42] font-semibold">Setting Style</span>
              <span className="text-sm sm:text-base font-medium text-[#1A1410] capitalize">{venue.type}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-mono tracking-[0.2em] text-[#8C6E42] uppercase mb-2 font-semibold">
              VENUE ESSENCE
            </h4>
            <p className="text-sm sm:text-base text-[#2D231C]/85 font-light leading-relaxed">
              {venue.description}
            </p>
          </div>

          {/* Ideal Celebrations */}
          <div>
            <h4 className="text-xs font-mono tracking-[0.2em] text-[#8C6E42] uppercase mb-3 font-semibold">
              IDEAL CELEBRATIONS
            </h4>
            <div className="flex flex-wrap gap-2">
              {venue.idealEvents.map((evt, i) => (
                <span key={i} className="px-3 py-1.5 rounded-full bg-white border border-[#C5A880]/40 text-xs text-[#1A1410] font-medium shadow-xs">
                  ✨ {evt}
                </span>
              ))}
            </div>
          </div>

          {/* Spatial & Hospitality Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-mono tracking-[0.2em] text-[#8C6E42] uppercase mb-3 font-semibold">
                KEY VENUE FEATURES
              </h4>
              <ul className="space-y-2">
                {venue.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2D231C]/85">
                    <CheckCircle2 className="w-4 h-4 text-[#8C6E42] shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono tracking-[0.2em] text-[#8C6E42] uppercase mb-3 font-semibold">
                ARCHITECTURAL DETAILS
              </h4>
              <ul className="space-y-2">
                {venue.architecturalHighlights.map((a, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2D231C]/85">
                    <Sparkles className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Floorplan & Catering Overview */}
          <div className="p-4 rounded-sm bg-[#FAF3EC] border border-[#C5A880]/30 space-y-3">
            <div>
              <span className="text-[10px] font-mono tracking-wider uppercase text-[#8C6E42] font-semibold block">
                FLOORPLAN CONFIGURATION
              </span>
              <p className="text-xs sm:text-sm text-[#1A1410] font-light mt-0.5">{venue.floorplanSummary}</p>
            </div>
            <div className="pt-2 border-t border-[#EAE2D8]">
              <span className="text-[10px] font-mono tracking-wider uppercase text-[#8C6E42] font-semibold block">
                CATERING & DINING SERVICE
              </span>
              <p className="text-xs sm:text-sm text-[#1A1410] font-light mt-0.5">{venue.cateringStyle}</p>
            </div>
          </div>

          {/* Gallery Showcase */}
          <div>
            <h4 className="text-xs font-mono tracking-[0.2em] text-[#8C6E42] uppercase mb-3 font-semibold">
              VENUE PHOTOGRAPHY
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {venue.gallery.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setActivePhoto(img)}
                  className="h-28 rounded-sm overflow-hidden border border-[#EAE2D8] cursor-pointer group relative"
                >
                  <img src={img} alt={`${venue.name} view ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-[#1A1410]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-5 sm:p-6 bg-[#F4EFEA] border-t border-[#EAE2D8] flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div>
            <span className="text-[11px] font-mono tracking-wider text-[#8C6E42] uppercase block">
              VENUE AVAILABILITY & TOUR
            </span>
            <span className="font-serif text-sm text-[#1A1410]">
              Inquire for preferred wedding dates at {venue.name}.
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 border border-[#C5A880]/50 text-xs font-semibold tracking-wider uppercase text-[#1A1410] hover:bg-white rounded-sm"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onEnquireVenue(venue.id);
              }}
              className="w-1/2 sm:w-auto bg-gradient-to-r from-[#C5A880] to-[#DFCDAB] text-[#1A1410] font-sans font-bold text-xs tracking-[0.16em] uppercase px-6 py-2.5 rounded-sm shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              ENQUIRE THIS VENUE
            </button>
          </div>
        </div>

      </div>

      {/* Expanded Lightbox View */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setActivePhoto(null)}
        >
          <img src={activePhoto} alt="Full view" className="max-w-full max-h-[85vh] object-contain rounded" />
          <button className="absolute top-6 right-6 text-white p-2 rounded-full bg-white/10 hover:bg-white/20">
            <X className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
};
