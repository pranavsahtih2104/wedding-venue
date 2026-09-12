import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = TESTIMONIALS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#1A1410] text-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[#C5A880]" />
            <span className="font-mono text-xs text-[#C5A880] tracking-[0.28em] font-semibold uppercase">
              13 / REAL CELEBRATIONS
            </span>
            <div className="h-[1px] w-8 bg-[#C5A880]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#FAF8F5] tracking-tight mb-4">
            STORIES OF FOREVER.
          </h2>
          <p className="text-xs sm:text-sm text-[#DFCDAB]/80 font-mono tracking-wider uppercase">
            FICTIONAL DEMO CELEBRATION ACCOUNTS
          </p>
        </div>

        {/* Feature Testimonial Carousel Card */}
        <div className="max-w-5xl mx-auto bg-[#241C16] rounded-sm border border-[#C5A880]/30 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Couple Image (5 Cols) */}
          <div className="lg:col-span-5 relative h-80 sm:h-96 lg:h-[480px]">
            <img
              src={current.image}
              alt={current.names}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140E0A] via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#DFCDAB] uppercase tracking-wider mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{current.destination}</span>
              </div>
              <h3 className="font-serif text-2xl font-medium text-white">{current.names}</h3>
              <span className="text-xs text-white/75">{current.venue} • {current.date}</span>
            </div>
          </div>

          {/* Testimonial Quote & Story (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="flex items-center gap-1 text-[#C5A880] mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <Quote className="w-10 h-10 text-[#C5A880]/30 mb-4" />

              <blockquote className="font-serif italic text-lg sm:text-2xl text-[#FAF8F5] leading-relaxed mb-6">
                “{current.quote}”
              </blockquote>

              <div className="p-4 rounded-sm bg-[#1A1410] border border-[#C5A880]/20">
                <span className="text-[10px] font-mono tracking-widest text-[#C5A880] uppercase font-semibold block mb-1">
                  CELEBRATION OVERVIEW
                </span>
                <p className="text-xs text-[#FAF8F5]/80 font-light leading-relaxed">
                  {current.storySnippet}
                </p>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between pt-6 border-t border-[#C5A880]/20">
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === currentIndex ? 'w-8 bg-[#C5A880]' : 'w-2 bg-white/30 hover:bg-white/60'
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-full bg-[#1A1410] border border-[#C5A880]/30 hover:border-[#C5A880] text-white transition-colors"
                  aria-label="Previous story"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-full bg-[#1A1410] border border-[#C5A880]/30 hover:border-[#C5A880] text-white transition-colors"
                  aria-label="Next story"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
