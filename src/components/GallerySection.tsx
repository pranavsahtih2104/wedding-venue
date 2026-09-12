import React, { useState } from 'react';
import { Maximize2, MapPin } from 'lucide-react';
import { GALLERY_ITEMS, type GalleryItem } from '../data/gallery';
import { Lightbox } from './Lightbox';

const CATEGORIES = [
  { id: 'ALL', label: 'All Photos' },
  { id: 'WEDDINGS', label: 'Weddings' },
  { id: 'VENUES', label: 'Venues' },
  { id: 'DÉCOR', label: 'Décor' },
  { id: 'TABLES', label: 'Tables' },
  { id: 'FOOD', label: 'Cuisine' },
  { id: 'COUPLES', label: 'Couples' },
  { id: 'CELEBRATIONS', label: 'Celebrations' },
  { id: 'DETAILS', label: 'Details' },
];

export const GallerySection: React.FC = () => {
  const [activeCat, setActiveCat] = useState<string>('ALL');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems = activeCat === 'ALL'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCat);

  const handleNext = () => {
    if (!activeLightboxItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === activeLightboxItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveLightboxItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeLightboxItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === activeLightboxItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveLightboxItem(filteredItems[prevIndex]);
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#FAF8F5] text-[#1A1410] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-[#8C6E42] tracking-[0.25em] font-semibold">
                08 / VISUAL INSPIRATION
              </span>
              <div className="h-[1px] w-12 bg-[#8C6E42]/60" />
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#1A1410] tracking-tight">
              A TAPESTRY OF<br />
              <span className="italic font-normal text-[#A16B5E]">TIMELESS</span> MOMENTS.
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#2D231C]/75 font-light leading-relaxed">
            Immerse yourself in real celebrations brought to life across our estates—from intimate sunset vows to grand black-tie receptions.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-6 mb-10 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap border ${
                activeCat === cat.id
                  ? 'bg-[#1A1410] text-[#FAF8F5] border-[#1A1410] shadow-sm'
                  : 'bg-white text-[#2D231C]/70 border-[#EAE2D8] hover:border-[#C5A880] hover:text-[#1A1410]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Editorial Masonry / Dynamic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const isTall = index % 4 === 1 || item.aspectRatio === 'tall';

            return (
              <div
                key={item.id}
                onClick={() => setActiveLightboxItem(item)}
                className={`relative rounded-sm overflow-hidden border border-[#EAE2D8] group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 bg-white ${
                  isTall ? 'sm:row-span-2 h-[480px] sm:h-full min-h-[420px]' : 'h-80'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                
                {/* Gradient and Hover Information Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#140E0A]/90 via-[#140E0A]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-6">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-[#1A1410]/70 backdrop-blur-md border border-[#C5A880]/40 text-[9px] font-mono tracking-widest text-[#DFCDAB] uppercase">
                      {item.categoryLabel}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform group-hover:scale-110 transition-all">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <div className="flex items-center gap-1.5 text-[10px] text-[#DFCDAB] font-mono tracking-wider uppercase mb-1">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>
                    <h4 className="font-serif text-lg sm:text-xl font-medium text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-white/80 font-light line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal Component */}
      <Lightbox
        item={activeLightboxItem}
        items={filteredItems}
        onClose={() => setActiveLightboxItem(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};
