import React, { useState } from 'react';
import { X, Calendar, MapPin, Users, SunMedium, Compass } from 'lucide-react';
import type { Destination } from '../data/destinations';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
  onStartPlanning: (destinationId: string) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  onClose,
  onStartPlanning,
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#100C09]/85 backdrop-blur-md animate-fade-slow overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#FAF8F5] text-[#1A1410] rounded-sm shadow-2xl overflow-hidden my-auto border border-[#C5A880]/30 max-h-[92vh] flex flex-col">
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-[#1A1410]/70 hover:bg-[#1A1410] text-white border border-white/20 transition-colors shadow-lg"
          aria-label="Close destination details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Hero Header Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden shrink-0">
          <img
            src={destination.heroImage}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1410] via-[#1A1410]/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A880]/30 backdrop-blur-md border border-[#C5A880]/50 text-[10px] tracking-[0.25em] text-[#DFCDAB] uppercase mb-2 font-mono">
              <MapPin className="w-3 h-3" />
              {destination.location}
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#FAF8F5]">
              {destination.name}
            </h2>
            <p className="font-script text-xl sm:text-2xl text-[#DFCDAB] mt-1">
              {destination.tagline}
            </p>
          </div>
        </div>

        {/* Modal Body Content (Scrollable) */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {/* Overview Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-sm bg-[#F4EFEA] border border-[#EAE2D8]">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-[#8C6E42]" />
              <div>
                <span className="text-[10px] tracking-wider uppercase text-[#8C6E42] font-semibold block">Capacity</span>
                <span className="text-xs sm:text-sm font-medium text-[#1A1410]">{destination.capacityRange}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <SunMedium className="w-5 h-5 text-[#8C6E42]" />
              <div>
                <span className="text-[10px] tracking-wider uppercase text-[#8C6E42] font-semibold block">Climate</span>
                <span className="text-xs sm:text-sm font-medium text-[#1A1410]">{destination.weather}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Compass className="w-5 h-5 text-[#8C6E42]" />
              <div>
                <span className="text-[10px] tracking-wider uppercase text-[#8C6E42] font-semibold block">Best Season</span>
                <span className="text-xs sm:text-sm font-medium text-[#1A1410]">{destination.bestMonths}</span>
              </div>
            </div>
          </div>

          {/* Long Description */}
          <div>
            <h4 className="text-xs font-mono tracking-[0.2em] text-[#8C6E42] uppercase mb-2 font-semibold">
              THE SETTING & ATMOSPHERE
            </h4>
            <p className="text-sm sm:text-base text-[#2D231C]/85 leading-relaxed font-light">
              {destination.longDescription}
            </p>
          </div>

          {/* Features Highlights */}
          <div>
            <h4 className="text-xs font-mono tracking-[0.2em] text-[#8C6E42] uppercase mb-3 font-semibold">
              DESTINATION HIGHLIGHTS
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {destination.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#1A1410]/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Photo Gallery Grid */}
          <div>
            <h4 className="text-xs font-mono tracking-[0.2em] text-[#8C6E42] uppercase mb-3 font-semibold">
              PHOTO INSPIRATION
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {destination.gallery.map((imgUrl, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedPhoto(imgUrl)}
                  className="h-28 sm:h-32 rounded-sm overflow-hidden border border-[#EAE2D8] cursor-pointer group relative"
                >
                  <img
                    src={imgUrl}
                    alt={`${destination.name} ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#1A1410]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-[10px] text-white tracking-widest uppercase bg-[#1A1410]/70 px-2 py-1 rounded">View</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTA Bar */}
        <div className="p-5 sm:p-6 bg-[#F4EFEA] border-t border-[#EAE2D8] flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="text-center sm:text-left">
            <span className="text-[11px] font-mono tracking-wider text-[#8C6E42] uppercase block">
              READY TO EXPLORE THIS SETTING?
            </span>
            <span className="font-serif text-sm sm:text-base text-[#1A1410]">
              Let us curate a bespoke proposal for {destination.name}.
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
                onStartPlanning(destination.id);
              }}
              className="w-1/2 sm:w-auto bg-gradient-to-r from-[#C5A880] to-[#DFCDAB] text-[#1A1410] font-sans font-bold text-xs tracking-[0.16em] uppercase px-6 py-2.5 rounded-sm shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              PLAN HERE
            </button>
          </div>
        </div>
      </div>

      {/* Expanded Photo Lightbox preview if clicked inside modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedPhoto(null)}
        >
          <img src={selectedPhoto} alt="Preview" className="max-w-full max-h-[85vh] object-contain rounded" />
          <button className="absolute top-6 right-6 text-white p-2 rounded-full bg-white/10 hover:bg-white/20">
            <X className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
};
