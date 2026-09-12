import React from 'react';
import { Calendar, Sparkles, HeartHandshake, Wine, Camera, ArrowRight } from 'lucide-react';

interface JourneySectionProps {
  onStartPlanning: () => void;
}

const JOURNEY_STEPS = [
  {
    step: '01',
    title: 'DISCOVER',
    subtitle: 'Tell us about your celebration',
    description: 'Connect with our lead wedding director for an intimate discovery conversation. Share your destination preferences, ceremonial dates, guest estimates, and dream aesthetic.',
    icon: Sparkles
  },
  {
    step: '02',
    title: 'DESIGN',
    subtitle: 'Build your wedding experience',
    description: 'We craft a bespoke 3D spatial vision, curate custom floral mandap architectures, and arrange private menu tastings with our master culinary team.',
    icon: HeartHandshake
  },
  {
    step: '03',
    title: 'PLAN',
    subtitle: 'Our team handles the details',
    description: 'From luxury airport fleet logistics and RSVP hospitality desks to Vedic priest scheduling and soundstage rehearsals, every minute is meticulously coordinated.',
    icon: Calendar
  },
  {
    step: '04',
    title: 'CELEBRATE',
    subtitle: 'Arrive and enjoy your day',
    description: 'Step into your wedding weekend with zero stress. Our private butler service and dedicated ceremony managers guide you through every joyful celebration.',
    icon: Wine
  },
  {
    step: '05',
    title: 'REMEMBER',
    subtitle: 'Leave with memories that last',
    description: 'Conclude your celebration with a farewell sunset brunch, heirloom cinematic wedding films, hand-bound leather photo books, and memories to cherish for generations.',
    icon: Camera
  }
];

export const JourneySection: React.FC<JourneySectionProps> = ({ onStartPlanning }) => {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] text-[#1A1410] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="h-[1px] w-8 bg-[#8C6E42]" />
            <span className="font-mono text-xs text-[#8C6E42] tracking-[0.25em] font-semibold uppercase">
              07 / THE WEDDING JOURNEY
            </span>
            <div className="h-[1px] w-8 bg-[#8C6E42]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#1A1410] tracking-tight mb-6">
            HOW YOUR FOREVER<br />
            <span className="italic font-normal text-[#A16B5E]">COMES TO LIFE.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#2D231C]/75 font-light leading-relaxed">
            Our seamless 5-stage planning methodology ensures that the journey to your wedding day is as joyful, romantic, and unhurried as the celebration itself.
          </p>
        </div>

        {/* 5-Step Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {JOURNEY_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="bg-white rounded-sm p-6 border border-[#EAE2D8] hover:border-[#C5A880] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
              >
                {/* Step Number */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-4xl font-bold text-[#EAE2D8] group-hover:text-[#C5A880] transition-colors">
                      {step.step}
                    </span>
                    <div className="p-2 rounded-full bg-[#FAF8F5] border border-[#EAE2D8] text-[#8C6E42]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-medium text-[#1A1410] mb-1">
                    {step.title}
                  </h3>
                  <span className="text-[11px] font-mono tracking-wider text-[#8C6E42] uppercase block mb-3">
                    {step.subtitle}
                  </span>

                  <p className="text-xs text-[#2D231C]/75 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="h-[2px] w-full bg-[#EAE2D8] group-hover:bg-[#C5A880] transition-colors mt-6" />
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="mt-16 text-center">
          <button
            onClick={onStartPlanning}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#C5A880] via-[#DFCDAB] to-[#C5A880] text-[#140E0A] font-sans font-bold text-xs tracking-[0.2em] uppercase rounded-sm shadow-xl hover:shadow-[#C5A880]/30 hover:scale-[1.02] transition-all"
          >
            <Calendar className="w-4 h-4 text-[#140E0A]" />
            <span>START YOUR WEDDING JOURNEY</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#140E0A]" />
          </button>
        </div>

      </div>
    </section>
  );
};
