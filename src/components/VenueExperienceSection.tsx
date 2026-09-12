import React, { useState } from 'react';
import { Sparkles, Sun, Heart, Music, Utensils, Bed } from 'lucide-react';

interface Stage {
  number: string;
  time: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  icon: any;
}

const EXPERIENCE_STAGES: Stage[] = [
  {
    number: '01',
    time: 'AFTERNOON ARRIVAL',
    title: 'THE ROYAL WELCOME',
    tagline: 'Flower petals, brass fanfares & cold-pressed refreshments',
    description: 'Guests arrive to a traditional ceremonial greeting with fragrant rose petal showers, chilled tender coconut water, and seamless luggage butler escort to their private suites.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=85',
    icon: Sparkles
  },
  {
    number: '02',
    time: 'PREPARATION & BRIDAL SALON',
    title: 'THE SANCTUARY OF BEAUTY',
    tagline: 'Quiet champagne moments with your inner circle',
    description: 'In the Imperial Bridal Suite, master hair and makeup artists work their craft amidst natural daylight, soft classical melodies, and gourmet grazing platters.',
    image: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1000&q=85',
    icon: Heart
  },
  {
    number: '03',
    time: 'GOLDEN HOUR CEREMONY',
    title: 'THE SACRED PHERAS',
    tagline: 'Sunset vows overlooking the Bay of Bengal',
    description: 'As the sun dips beneath the sea, the couple exchanges sacred garlands under a fragrant canopy of tuberoses and jasmine, accompanied by ancient Vedic chants.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85',
    icon: Sun
  },
  {
    number: '04',
    time: 'TWILIGHT RECEPTION',
    title: 'THE GRAND BANQUET',
    tagline: 'Candlelight, live jazz & royal Awadhi cuisine',
    description: 'Crystal chandeliers cast a warm glow over starlit dining tables as guests savor slow-cooked dum biryanis, grilled delicacies, and heartfelt toasts.',
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1000&q=85',
    icon: Utensils
  },
  {
    number: '05',
    time: 'MIDNIGHT SPEAKEASY',
    title: 'THE AFTER PARTY',
    tagline: 'High-energy beats & craft mixology till dawn',
    description: 'The party moves to the open-air rooftop deck with deep house sets from international DJs, molecular cocktail bars, and late-night comfort delicacies.',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1000&q=85',
    icon: Music
  },
  {
    number: '06',
    time: 'LUXURY RETREAT',
    title: 'PEACEFUL STAY',
    tagline: 'Pillow-top king suites & sunrise ocean views',
    description: 'Retire into pure tranquility with Egyptian cotton linens, private soaking tubs, and morning breakfast in bed overlooking the calm waters.',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=85',
    icon: Bed
  }
];

export const VenueExperienceSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<Stage>(EXPERIENCE_STAGES[2]);

  return (
    <section className="py-24 sm:py-32 bg-[#1A1410] text-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[#C5A880]" />
            <span className="font-mono text-xs text-[#C5A880] tracking-[0.28em] font-semibold uppercase">
              09 / THE IMMERSIVE JOURNEY
            </span>
            <div className="h-[1px] w-8 bg-[#C5A880]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#FAF8F5] tracking-tight mb-4">
            ARRIVE. CELEBRATE. STAY.
          </h2>
          <p className="text-sm sm:text-base text-[#FAF8F5]/75 font-light leading-relaxed">
            A wedding weekend at Aurelia is an unbroken 36-hour narrative of beauty, celebration, and restorative luxury.
          </p>
        </div>

        {/* Interactive Step Navigator */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-12">
          {EXPERIENCE_STAGES.map((stg) => {
            const isSelected = activeStage.number === stg.number;
            const Icon = stg.icon;
            return (
              <button
                key={stg.number}
                onClick={() => setActiveStage(stg)}
                className={`p-3.5 rounded-sm transition-all text-left flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-[#241C16] border-[#DFCDAB] shadow-lg'
                    : 'bg-[#140E0A]/60 border-[#C5A880]/15 hover:border-[#C5A880]/40 text-[#FAF8F5]/70 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-[11px] font-bold ${isSelected ? 'text-[#C5A880]' : 'text-[#FAF8F5]/40'}`}>
                    {stg.number}
                  </span>
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#C5A880]' : 'text-[#FAF8F5]/40'}`} />
                </div>
                <span className="text-[10px] font-mono tracking-wider uppercase line-clamp-1 block text-[#FAF8F5]/80">
                  {stg.time.split(' ')[0]}
                </span>
                <span className={`font-serif text-xs sm:text-sm font-medium line-clamp-1 mt-0.5 ${isSelected ? 'text-white' : 'text-[#FAF8F5]/70'}`}>
                  {stg.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Full Width Editorial Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-[#241C16] rounded-sm p-6 sm:p-10 border border-[#C5A880]/25 shadow-2xl items-center">
          
          {/* Big Cinematic Image (7 cols) */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-sm overflow-hidden h-[340px] sm:h-[440px] img-zoom-container border border-[#C5A880]/30 shadow-xl">
              <img
                src={activeStage.image}
                alt={activeStage.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100C09]/90 via-[#100C09]/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#DFCDAB] block mb-1">
                  STAGE {activeStage.number} — {activeStage.time}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white">
                  {activeStage.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Editorial Narrative (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <span className="font-script text-2xl sm:text-3xl text-[#DFCDAB] block">
              “{activeStage.tagline}”
            </span>
            
            <p className="text-sm sm:text-base text-[#FAF8F5]/80 font-light leading-relaxed">
              {activeStage.description}
            </p>

            <div className="p-4 rounded-sm bg-[#1A1410] border border-[#C5A880]/20 space-y-2">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#C5A880] font-semibold block">
                HOSPITALITY STANDARD
              </span>
              <p className="text-xs text-[#FAF8F5]/75 leading-relaxed">
                Dedicated personal butler service, climate-managed transition breezeways, and 24/7 guest concierge.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
