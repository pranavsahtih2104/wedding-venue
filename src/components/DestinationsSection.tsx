import React, { useState } from 'react';
import { ArrowRight, MapPin, Sparkles, ChevronRight } from 'lucide-react';
import { DESTINATIONS, type Destination } from '../data/destinations';
import { DestinationModal } from './DestinationModal';

interface DestinationsSectionProps {
  onStartPlanning: (destinationId?: string) => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({
  onStartPlanning,
}) => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [activeTab, setActiveTab] = useState<string>(DESTINATIONS[0].id);

  const currentDest = DESTINATIONS.find((d) => d.id === activeTab) || DESTINATIONS[0];

  return (
    <section id="destinations" className="py-24 sm:py-32 bg-[#F4EFEA] text-[#1A1410] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-[#8C6E42] tracking-[0.25em] font-semibold">
                02 / DESTINATIONS
              </span>
              <div className="h-[1px] w-12 bg-[#8C6E42]/60" />
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#1A1410] tracking-tight">
              CHOOSE YOUR SETTING.
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#2D231C]/75 font-light leading-relaxed">
            From the tranquil rhythm of coastal tides to regal sandstone courtyards, our diverse destinations offer a bespoke canvas for your wedding vision.
          </p>
        </div>

        {/* Destination Category Navigation Pills */}
        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {DESTINATIONS.map((dest, index) => (
            <button
              key={dest.id}
              onClick={() => setActiveTab(dest.id)}
              className={`px-5 sm:px-6 py-3 rounded-full text-xs font-semibold tracking-[0.18em] uppercase transition-all whitespace-nowrap flex items-center gap-2 border ${
                activeTab === dest.id
                  ? 'bg-[#1A1410] text-[#FAF8F5] border-[#1A1410] shadow-md'
                  : 'bg-white/80 text-[#2D231C]/80 border-[#EAE2D8] hover:border-[#C5A880] hover:text-[#1A1410]'
              }`}
            >
              <span className="font-mono text-[10px] text-[#C5A880]">0{index + 1}</span>
              <span>{dest.name}</span>
            </button>
          ))}
        </div>

        {/* Featured Showcase Card for Selected Destination */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white rounded-sm p-6 sm:p-10 shadow-xl border border-[#EAE2D8] items-center">
          
          {/* Visual Showcase (7 cols) */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-sm overflow-hidden h-[340px] sm:h-[460px] img-zoom-container shadow-lg">
              <img
                src={currentDest.image}
                alt={currentDest.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1410]/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white flex items-end justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1410]/60 backdrop-blur-md text-[10px] tracking-widest text-[#DFCDAB] uppercase mb-2 border border-white/20">
                    <MapPin className="w-3 h-3" />
                    {currentDest.location}
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white">
                    {currentDest.name}
                  </h3>
                </div>

                <span className="hidden sm:block text-xs font-mono tracking-wider uppercase text-[#DFCDAB]">
                  {currentDest.capacityRange}
                </span>
              </div>
            </div>
          </div>

          {/* Editorial Description & Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full py-2">
            <div>
              <span className="font-script text-2xl sm:text-3xl text-[#8C6E42] block mb-2">
                “{currentDest.tagline}”
              </span>
              
              <p className="text-sm sm:text-base text-[#2D231C]/80 font-light leading-relaxed mb-6">
                {currentDest.description}
              </p>

              <div className="space-y-3 mb-8">
                <span className="text-[11px] font-mono tracking-[0.2em] text-[#8C6E42] uppercase font-semibold block">
                  DISTINCTIVE ADVANTAGES
                </span>
                <ul className="space-y-2">
                  {currentDest.features.slice(0, 3).map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#1A1410]/85">
                      <Sparkles className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-6 border-t border-[#EAE2D8]">
              <button
                onClick={() => setSelectedDestination(currentDest)}
                className="w-full sm:w-auto px-6 py-3 bg-[#1A1410] text-[#FAF8F5] hover:bg-[#2D231C] text-xs font-semibold tracking-[0.18em] uppercase rounded-sm transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>EXPLORE DESTINATION</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
              </button>

              <button
                onClick={() => onStartPlanning(currentDest.id)}
                className="w-full sm:w-auto px-5 py-3 border border-[#C5A880] hover:bg-[#F4EFEA] text-[#1A1410] text-xs font-semibold tracking-[0.18em] uppercase rounded-sm transition-colors text-center"
              >
                PLAN HERE
              </button>
            </div>
          </div>

        </div>

        {/* 4-Card Mini Grid for Quick Scan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {DESTINATIONS.map((d, idx) => (
            <div
              key={d.id}
              onClick={() => {
                setActiveTab(d.id);
                setSelectedDestination(d);
              }}
              className={`p-5 rounded-sm transition-all cursor-pointer border ${
                activeTab === d.id
                  ? 'bg-[#FAF8F5] border-[#C5A880] shadow-md'
                  : 'bg-white/60 border-[#EAE2D8] hover:border-[#C5A880]/60 hover:bg-white'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-[#8C6E42]">0{idx + 1}</span>
                <ChevronRight className="w-4 h-4 text-[#8C6E42]" />
              </div>
              <h4 className="font-serif text-lg font-medium text-[#1A1410] mb-1">{d.name}</h4>
              <p className="text-xs text-[#2D231C]/70 line-clamp-2">{d.tagline}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Destination Modal Details */}
      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onStartPlanning={(destId) => onStartPlanning(destId)}
      />
    </section>
  );
};
