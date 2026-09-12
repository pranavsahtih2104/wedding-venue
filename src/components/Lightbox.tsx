import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import type { GalleryItem } from '../data/gallery';

interface LightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  item,
  items,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    if (item) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [item, onClose, onNext, onPrev]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  return (
    <div className="fixed inset-0 z-60 bg-[#0E0A07]/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-fade-slow text-white">
      {/* Top Header Controls */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#C5A880] tracking-widest uppercase">
            {currentIndex + 1} / {items.length}
          </span>
          <span className="text-white/40">|</span>
          <span className="text-xs font-mono tracking-wider text-white/70 uppercase">
            {item.categoryLabel}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Viewport with Previous & Next Navigation */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        {/* Previous Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-black/50 hover:bg-[#C5A880] hover:text-[#1A1410] text-white border border-white/20 transition-all"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Display Image */}
        <div className="relative max-h-[78vh] max-w-5xl overflow-hidden rounded shadow-2xl">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[78vh] max-w-full object-contain mx-auto transition-transform duration-500"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-black/50 hover:bg-[#C5A880] hover:text-[#1A1410] text-white border border-white/20 transition-all"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Caption & Location Meta */}
      <div className="max-w-3xl mx-auto text-center z-10">
        <div className="inline-flex items-center gap-1.5 text-xs text-[#DFCDAB] font-mono tracking-wider uppercase mb-1">
          <MapPin className="w-3.5 h-3.5" />
          <span>{item.location}</span>
        </div>
        <h3 className="font-serif text-xl sm:text-2xl text-white font-medium mb-1">
          {item.title}
        </h3>
        <p className="text-xs sm:text-sm text-white/75 font-light">
          {item.caption}
        </p>
      </div>
    </div>
  );
};
