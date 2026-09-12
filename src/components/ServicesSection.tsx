import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { SERVICES, type WeddingService } from '../data/services';

interface ServicesSectionProps {
  onStartPlanning: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onStartPlanning }) => {
  const [activeService, setActiveService] = useState<WeddingService>(SERVICES[0]);

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#FAF8F5] text-[#1A1410] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-[#8C6E42] tracking-[0.25em] font-semibold">
                05 / COMPLETE CONCIERGE
              </span>
              <div className="h-[1px] w-12 bg-[#8C6E42]/60" />
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#1A1410] tracking-tight">
              WE TAKE CARE OF<br />
              <span className="italic font-normal text-[#A16B5E]">THE DETAILS.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#2D231C]/75 font-light leading-relaxed">
            From bespoke floral mandap architecture to five-course royal banquets and luxury airport fleet logistics, our in-house wedding artisans orchestrate perfection.
          </p>
        </div>

        {/* Editorial Visual Layout (Interactive List + Big Showcase Frame) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Interactive Service Selector Accordion/List (6 Cols) */}
          <div className="lg:col-span-6 space-y-3">
            {SERVICES.map((service) => {
              const isActive = activeService.id === service.id;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  className={`p-5 rounded-sm transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-white border-[#C5A880] shadow-md'
                      : 'bg-[#F4EFEA]/60 border-[#EAE2D8] hover:bg-white hover:border-[#C5A880]/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-xs font-semibold ${isActive ? 'text-[#8C6E42]' : 'text-[#2D231C]/40'}`}>
                        {service.number}
                      </span>
                      <h3 className={`font-serif text-base sm:text-lg font-medium tracking-wide ${isActive ? 'text-[#1A1410]' : 'text-[#2D231C]/80'}`}>
                        {service.title}
                      </h3>
                    </div>
                    <span className={`text-xs font-mono tracking-widest uppercase ${isActive ? 'text-[#8C6E42]' : 'text-transparent'}`}>
                      ACTIVE
                    </span>
                  </div>

                  {isActive && (
                    <div className="mt-4 pt-3 border-t border-[#EAE2D8] animate-fade-slow">
                      <p className="text-xs sm:text-sm text-[#2D231C]/80 font-light leading-relaxed mb-3">
                        {service.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.highlights.map((h, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-[#1A1410]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#8C6E42] shrink-0" />
                            <span className="line-clamp-1">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Feature Showcase Frame (6 Cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-sm overflow-hidden shadow-2xl border-4 border-white img-zoom-container h-[420px] sm:h-[520px]">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140E0A]/85 via-[#140E0A]/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A880]/30 backdrop-blur-md border border-[#C5A880]/40 text-[10px] tracking-widest uppercase text-[#DFCDAB] mb-2 font-mono">
                  <Sparkles className="w-3 h-3 text-[#DFCDAB]" />
                  <span>{activeService.number} / SIGNATURE SERVICE</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white mb-1">
                  {activeService.title}
                </h3>
                <p className="font-script text-lg text-[#DFCDAB] mb-4">
                  {activeService.subtitle}
                </p>
                <button
                  onClick={onStartPlanning}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FAF8F5] text-[#1A1410] hover:bg-[#DFCDAB] text-xs font-semibold tracking-[0.16em] uppercase rounded-sm transition-colors"
                >
                  <span>INQUIRE ABOUT THIS SERVICE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
