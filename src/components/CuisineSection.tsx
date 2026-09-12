import React, { useState } from 'react';
import { ArrowRight, ChefHat } from 'lucide-react';
import { CUISINE_CATEGORIES, type CuisineCategory } from '../data/cuisine';

interface CuisineSectionProps {
  onStartPlanning: () => void;
}

export const CuisineSection: React.FC<CuisineSectionProps> = ({ onStartPlanning }) => {
  const [selectedCat, setSelectedCat] = useState<CuisineCategory>(CUISINE_CATEGORIES[0]);

  return (
    <section id="cuisine" className="py-24 sm:py-32 bg-[#F4EFEA] text-[#1A1410] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-[#8C6E42] tracking-[0.25em] font-semibold">
                06 / ROYAL GASTRONOMY
              </span>
              <div className="h-[1px] w-12 bg-[#8C6E42]/60" />
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#1A1410] tracking-tight">
              THE FEAST<br />
              <span className="italic font-normal text-[#A16B5E]">IS PART OF</span> THE STORY.
            </h2>
          </div>
          
          <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-[#EAE2D8] shadow-xs">
            <ChefHat className="w-5 h-5 text-[#8C6E42]" />
            <span className="text-xs font-mono tracking-widest text-[#1A1410] uppercase font-semibold">
              CURATED BY OUR MASTER CHEFS
            </span>
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CUISINE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-[0.16em] uppercase transition-all whitespace-nowrap border ${
                selectedCat.id === cat.id
                  ? 'bg-[#1A1410] text-white border-[#1A1410] shadow-md'
                  : 'bg-white/80 text-[#2D231C]/75 border-[#EAE2D8] hover:border-[#C5A880] hover:text-[#1A1410]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Active Cuisine Showcase Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white rounded-sm p-6 sm:p-10 shadow-xl border border-[#EAE2D8] items-center">
          
          {/* Visual Showcase (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden h-[340px] sm:h-[460px] img-zoom-container shadow-md">
              <img
                src={selectedCat.image}
                alt={selectedCat.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140E0A]/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-mono tracking-widest text-[#DFCDAB] uppercase block mb-1">
                  SIGNATURE CATERING THEME
                </span>
                <h3 className="font-serif text-2xl font-medium text-white">
                  {selectedCat.name}
                </h3>
              </div>
            </div>
          </div>

          {/* Dishes & Menu Preview (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full py-2">
            <div>
              <span className="font-script text-2xl sm:text-3xl text-[#8C6E42] block mb-2">
                “{selectedCat.tagline}”
              </span>
              <p className="text-sm text-[#2D231C]/80 font-light leading-relaxed mb-6">
                {selectedCat.description}
              </p>

              {/* Signature Dishes List */}
              <div className="space-y-3 mb-8">
                <span className="text-[11px] font-mono tracking-[0.2em] text-[#8C6E42] uppercase font-semibold block">
                  HIGHLIGHT DISHES & SPECIALTIES
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedCat.signatureDishes.map((dish, i) => (
                    <div key={i} className="p-3 rounded-sm bg-[#FAF8F5] border border-[#EAE2D8]">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h5 className="font-serif text-sm font-semibold text-[#1A1410] line-clamp-1">{dish.name}</h5>
                        <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${
                          dish.dietary === 'Veg' ? 'bg-emerald-100 text-emerald-800' :
                          dish.dietary === 'Non-Veg' ? 'bg-amber-100 text-amber-800' : 'bg-purple-100 text-purple-800'
                        }`}>
                          {dish.dietary}
                        </span>
                      </div>
                      <p className="text-xs text-[#2D231C]/70 line-clamp-2">{dish.description}</p>
                      <span className="text-[10px] text-[#8C6E42] font-mono mt-1 block">Origin: {dish.origin}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-5 border-t border-[#EAE2D8]">
              <div className="text-xs text-[#2D231C]/70">
                100% custom menu tastings arranged with our Executive Chef.
              </div>

              <button
                onClick={onStartPlanning}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-[#1A1410] text-[#FAF8F5] hover:bg-[#8C6E42] text-xs font-semibold tracking-[0.18em] uppercase rounded-sm transition-all shadow-sm"
              >
                <span>EXPLORE OUR CUISINE</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
