import React, { useState, useEffect } from 'react';
import { Calendar, ChevronDown, Sparkles, Compass } from 'lucide-react';

interface HeroProps {
  onOpenPlanning: () => void;
  onExploreVenues: () => void;
}

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=90',
    title: 'YOUR FOREVER\nSTARTS HERE.',
    subtitle: 'Extraordinary celebrations, beautiful destinations, and every detail thoughtfully brought to life.',
    location: 'The Coastal Clifftop & Ocean Mandap'
  },
  {
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=90',
    title: 'WHERE TIMELESS\nROMANCE MEETS ROYALTY.',
    subtitle: 'Heritage sandstone arches, torch-lit courtyards, and sacred pheras bathed in golden candlelight.',
    location: 'The Imperial Heritage Courtyard'
  },
  {
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=2000&q=90',
    title: 'CELEBRATE EVERY\nUNFORGETTABLE MOMENT.',
    subtitle: 'Pillarless crystal grand ballrooms, world-class gastronomy, and legendary Indian hospitality.',
    location: 'The Grand Ballroom & Crystal Foyer'
  }
];

export const Hero: React.FC<HeroProps> = ({ onOpenPlanning, onExploreVenues }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#100C09] text-white">
      {/* Background Slides with Slow Zoom Ken-Burns Effect */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className={`w-full h-full object-cover object-center scale-105 transition-transform duration-[8000ms] ease-out ${
              index === currentSlide ? 'scale-110' : 'scale-100'
            }`}
          />
          {/* Cinematic Vignette & Warm Tint Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#140E0A] via-[#140E0A]/40 to-[#140E0A]/60" />
          <div className="absolute inset-0 bg-[#3A2416]/20 mix-blend-multiply" />
        </div>
      ))}

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center flex flex-col items-center">
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#C5A880]/40 bg-[#1A1410]/70 backdrop-blur-md mb-8 animate-fade-slow">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
          <span className="text-[11px] font-sans font-medium tracking-[0.25em] text-[#E6D8BE] uppercase">
            AURELIA WEDDINGS & CELEBRATIONS
          </span>
        </div>

        {/* Hero Headline - Editorial High-Contrast Serif */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#FAF8F5] leading-[1.08] mb-6 drop-shadow-md whitespace-pre-line">
          {HERO_SLIDES[currentSlide].title}
        </h1>

        {/* Supporting Narrative */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-[#FAF8F5]/90 font-light leading-relaxed mb-10 font-sans tracking-wide drop-shadow">
          {HERO_SLIDES[currentSlide].subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          <button
            onClick={onOpenPlanning}
            className="w-full sm:w-auto bg-gradient-to-r from-[#C5A880] via-[#DFCDAB] to-[#C5A880] text-[#140E0A] font-sans font-bold text-xs sm:text-sm tracking-[0.2em] uppercase px-8 py-4 rounded-sm shadow-2xl hover:shadow-[#C5A880]/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 group"
          >
            <Calendar className="w-4 h-4 text-[#140E0A]" />
            <span>START PLANNING</span>
          </button>

          <button
            onClick={onExploreVenues}
            className="w-full sm:w-auto border border-[#FAF8F5]/60 hover:border-[#C5A880] text-[#FAF8F5] hover:text-[#C5A880] bg-[#140E0A]/40 hover:bg-[#140E0A]/80 backdrop-blur-md font-sans font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase px-8 py-4 rounded-sm transition-all flex items-center justify-center gap-2.5"
          >
            <Compass className="w-4 h-4 text-[#C5A880]" />
            <span>EXPLORE VENUES</span>
          </button>
        </div>

        {/* Brand Core Pillars Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-[#FAF8F5]/15 max-w-3xl w-full">
          <div className="flex flex-col items-center">
            <span className="text-[11px] font-medium tracking-[0.22em] text-[#C5A880] uppercase">
              LUXURY WEDDINGS
            </span>
            <span className="text-xs text-[#FAF8F5]/70 mt-0.5">Bespoke Royal Hospitality</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[11px] font-medium tracking-[0.22em] text-[#C5A880] uppercase">
              DESTINATION CELEBRATIONS
            </span>
            <span className="text-xs text-[#FAF8F5]/70 mt-0.5">Ocean, Palace & Gardens</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[11px] font-medium tracking-[0.22em] text-[#C5A880] uppercase">
              CURATED EXPERIENCES
            </span>
            <span className="text-xs text-[#FAF8F5]/70 mt-0.5">From Haldi to Reception</span>
          </div>
        </div>
      </div>

      {/* Slide Navigation Dots */}
      <div className="absolute bottom-16 right-8 sm:right-12 z-20 flex items-center gap-2">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              idx === currentSlide ? 'w-8 bg-[#C5A880]' : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Scroll to Discover Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors cursor-pointer" onClick={onExploreVenues}>
        <span className="text-[10px] tracking-[0.28em] font-sans uppercase text-[#C5A880]">
          SCROLL TO DISCOVER
        </span>
        <ChevronDown className="w-4 h-4 text-[#C5A880] animate-bounce" />
      </div>
    </section>
  );
};
