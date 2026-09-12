import React, { useState } from 'react';
import { Sparkles, Utensils, Building2, Clock, Calendar } from 'lucide-react';
import { EXPERIENCES, type WeddingExperience } from '../data/experiences';

interface ExperiencesSectionProps {
  onStartPlanning: (experienceName?: string) => void;
}

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({ onStartPlanning }) => {
  const [activeExperience, setActiveExperience] = useState<WeddingExperience>(EXPERIENCES[4]); // Default to The Wedding

  return (
    <section id="experiences" className="py-24 sm:py-32 bg-[#1A1410] text-[#FAF8F5] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#C89689]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[#C5A880]" />
            <span className="font-mono text-xs text-[#C5A880] tracking-[0.28em] font-semibold uppercase">
              04 / WEDDING EXPERIENCES
            </span>
            <div className="h-[1px] w-8 bg-[#C5A880]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#FAF8F5] tracking-tight mb-6">
            EVERY CELEBRATION,<br />
            <span className="italic font-normal text-[#DFCDAB]">YOUR WAY.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#FAF8F5]/75 font-light leading-relaxed">
            An Indian wedding is a symphony of distinct rituals and joyous chapters. Explore how our master planners curate every signature moment from vibrant turmeric mornings to starlit pheras.
          </p>
        </div>

        {/* Experience Selector Navigation Horizontal Bar */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-6 mb-12 no-scrollbar">
          {EXPERIENCES.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setActiveExperience(exp)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-[0.16em] uppercase transition-all whitespace-nowrap border ${
                activeExperience.id === exp.id
                  ? 'bg-gradient-to-r from-[#C5A880] to-[#DFCDAB] text-[#1A1410] border-[#DFCDAB] shadow-lg scale-105'
                  : 'bg-[#241C16] text-[#FAF8F5]/80 border-[#C5A880]/20 hover:border-[#C5A880]/60 hover:text-white'
              }`}
            >
              {exp.name.replace('THE ', '')}
            </button>
          ))}
        </div>

        {/* Main Experience Visual Feature Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#241C16] rounded-sm p-6 sm:p-10 border border-[#C5A880]/25 shadow-2xl">
          
          {/* Left Column: Big Atmospheric Image (6 Cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-sm overflow-hidden h-[360px] sm:h-[480px] img-zoom-container border border-[#C5A880]/30 shadow-xl">
              <img
                src={activeExperience.image}
                alt={activeExperience.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140E0A] via-transparent to-transparent" />
              
              {/* Bottom Tag */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#DFCDAB] block mb-1">
                  {activeExperience.tag}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white">
                  {activeExperience.name}
                </h3>
              </div>
            </div>
          </div>

          {/* Right Column: Experience Details & Curation (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#C5A880] uppercase mb-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{activeExperience.suggestedDuration}</span>
              </div>
              <h4 className="font-serif text-xl sm:text-2xl text-[#FAF8F5] mb-3">
                {activeExperience.subtitle}
              </h4>
              <p className="text-sm text-[#FAF8F5]/80 font-light leading-relaxed">
                {activeExperience.description}
              </p>
            </div>

            {/* Décor & Cuisine Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-sm bg-[#1A1410] border border-[#C5A880]/20">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#DFCDAB] uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>DÉCOR DIRECTION</span>
                </div>
                <p className="text-xs text-[#FAF8F5]/75 leading-relaxed">
                  {activeExperience.decorDirection}
                </p>
              </div>

              <div className="p-4 rounded-sm bg-[#1A1410] border border-[#C5A880]/20">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#DFCDAB] uppercase tracking-wider mb-2">
                  <Utensils className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>CUISINE PAIRING</span>
                </div>
                <ul className="space-y-1">
                  {activeExperience.cuisineHighlights.slice(0, 3).map((c, i) => (
                    <li key={i} className="text-xs text-[#FAF8F5]/75 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#C5A880]" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Recommended Venue Settings */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#DFCDAB] uppercase tracking-wider mb-2">
                <Building2 className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>RECOMMENDED VENUES</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {activeExperience.recommendedVenues.map((v, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded bg-[#1A1410] border border-[#C5A880]/40 text-[#FAF8F5]"
                  >
                    📍 {v}
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 border-t border-[#C5A880]/20 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => onStartPlanning(activeExperience.name)}
                className="w-full sm:w-auto bg-gradient-to-r from-[#C5A880] via-[#DFCDAB] to-[#C5A880] text-[#1A1410] font-sans font-bold text-xs tracking-[0.18em] uppercase px-7 py-3 rounded-sm shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>PLAN {activeExperience.name}</span>
              </button>

              <span className="text-xs text-[#DFCDAB]/70 font-mono tracking-wide text-center">
                Customizable for multi-day itineraries
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
