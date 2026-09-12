import React from 'react';
import { ArrowRight, Sparkles, Award } from 'lucide-react';

interface IntroductionProps {
  onOpenPlanning: () => void;
}

export const Introduction: React.FC<IntroductionProps> = ({ onOpenPlanning }) => {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] text-[#1A1410] relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C89689]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Narrative (7 Cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Editorial Step Number Label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs text-[#C5A880] tracking-[0.2em] font-semibold">
                01 / THE AURELIA EXPERIENCE
              </span>
              <div className="h-[1px] w-12 bg-[#C5A880]/60" />
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.12] text-[#1A1410] tracking-tight mb-8">
              MORE THAN A VENUE.<br />
              <span className="italic font-normal text-[#A16B5E]">A MEMORY</span> IN THE MAKING.
            </h2>

            {/* Editorial Copy */}
            <p className="text-base sm:text-lg text-[#2D231C]/85 font-light leading-relaxed mb-6">
              From the first welcome to the final farewell, every celebration at Aurelia is designed around the people, traditions, and moments that make your story yours.
            </p>

            <p className="text-sm sm:text-base text-[#2D231C]/75 font-light leading-relaxed mb-10">
              We believe a wedding is not simply a sequence of events—it is a tapestry of unhurried conversations, joyful laughter echoing across starlit lawns, and sacred promises witnessed by the ones you love most. Our dedicated wedding directors, master culinary artisans, and floral architects work seamlessly behind the scenes, ensuring your only role is to celebrate.
            </p>

            {/* Key Signature Pillars */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#EAE2D8] mb-10">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-full bg-[#F4EFEA] border border-[#C5A880]/30 text-[#8C6E42]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-[#1A1410]">Bespoke Planning</h4>
                  <p className="text-xs text-[#2D231C]/70 mt-0.5">Custom timelines & private directors</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-full bg-[#F4EFEA] border border-[#C5A880]/30 text-[#8C6E42]">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-[#1A1410]">Culinary Prestige</h4>
                  <p className="text-xs text-[#2D231C]/70 mt-0.5">Master chefs & royal banquets</p>
                </div>
              </div>
            </div>

            {/* Action CTA Link */}
            <div>
              <button
                onClick={onOpenPlanning}
                className="group inline-flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#1A1410] hover:text-[#8C6E42] transition-colors"
              >
                <span>EXPLORE OUR WEDDING CONCIERGE</span>
                <div className="w-8 h-8 rounded-full border border-[#1A1410] group-hover:border-[#8C6E42] flex items-center justify-center group-hover:translate-x-1 transition-all">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Asymmetric Double Image Layout (6 Cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Main Large Image */}
              <div className="relative rounded-sm overflow-hidden shadow-2xl border-4 border-white img-zoom-container">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85"
                  alt="Bride and groom at luxury wedding venue"
                  className="w-full h-[460px] sm:h-[540px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1410]/60 via-transparent to-transparent" />
                
                {/* Image Caption overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-serif italic text-lg text-[#DFCDAB]">“The beginning of forever.”</p>
                  <p className="text-[11px] tracking-widest uppercase text-white/80 font-mono mt-1">Coastal Mandap & Sunset Vows</p>
                </div>
              </div>

              {/* Supporting Secondary Floating Image */}
              <div className="hidden sm:block absolute -bottom-10 -left-10 w-52 md:w-60 rounded-sm overflow-hidden shadow-2xl border-4 border-white img-zoom-container bg-white">
                <img
                  src="https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=85"
                  alt="Intricate bridal mehndi and jewelry details"
                  className="w-full h-56 object-cover"
                />
                <div className="p-3 bg-[#FAF8F5] border-t border-[#EAE2D8]">
                  <span className="text-[10px] tracking-[0.2em] font-mono text-[#8C6E42] uppercase block">
                    CRAFTED WITH DEVOTION
                  </span>
                  <span className="text-xs font-serif text-[#1A1410]">Every floral petal & tradition</span>
                </div>
              </div>

              {/* Decorative Gold Seal / Badge */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-[#DFCDAB] via-[#C5A880] to-[#91744A] p-0.5 shadow-xl animate-float-slow hidden sm:flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#1A1410] flex flex-col items-center justify-center text-center p-2">
                  <span className="font-cinzel text-xs font-bold text-gold-gradient">EST. 2026</span>
                  <span className="text-[8px] tracking-[0.2em] text-[#DFCDAB] uppercase">ROYAL LUXURY</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
