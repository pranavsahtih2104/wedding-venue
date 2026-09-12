import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import type { JournalArticle } from '../data/journal';

interface ArticleModalProps {
  article: JournalArticle | null;
  onClose: () => void;
  onStartPlanning: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose, onStartPlanning }) => {
  useEffect(() => {
    if (article) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [article]);

  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-[#100C09]/88 backdrop-blur-md animate-fade-slow overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#FAF8F5] text-[#1A1410] rounded-sm shadow-2xl overflow-hidden my-auto border border-[#C5A880]/30 max-h-[92vh] flex flex-col">
        
        {/* Close Modal Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-[#1A1410]/70 hover:bg-[#1A1410] text-white border border-white/20 transition-colors shadow-lg"
          aria-label="Close article"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Cover Image Banner */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden shrink-0">
          <img src={article.coverImage} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#140E0A] via-[#140E0A]/40 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-3 text-[10px] font-mono tracking-widest text-[#DFCDAB] uppercase mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#1A1410]/60 border border-white/20">{article.category}</span>
              <span>•</span>
              <span>{article.readTime}</span>
              <span>•</span>
              <span>{article.date}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#FAF8F5] leading-tight">
              {article.title}
            </h2>
          </div>
        </div>

        {/* Article Body Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 flex-1">
          
          {/* Author Byline */}
          <div className="flex items-center justify-between pb-6 border-b border-[#EAE2D8]">
            <div className="flex items-center gap-3">
              <img src={article.author.avatar} alt={article.author.name} className="w-11 h-11 rounded-full object-cover border border-[#C5A880]" />
              <div>
                <span className="text-xs sm:text-sm font-serif font-bold text-[#1A1410] block">{article.author.name}</span>
                <span className="text-[10px] font-mono text-[#8C6E42] uppercase tracking-wider">{article.author.role}</span>
              </div>
            </div>
            <div className="text-[11px] font-mono text-[#8C6E42] tracking-wider uppercase">
              AURELIA JOURNAL
            </div>
          </div>

          {/* Subtitle / Excerpt */}
          <p className="font-serif italic text-lg sm:text-xl text-[#8C6E42] leading-relaxed">
            “{article.subtitle}”
          </p>

          {/* Main Body Text */}
          <div className="space-y-6 text-sm sm:text-base text-[#2D231C]/85 leading-relaxed font-light">
            <p>{article.content.introduction}</p>

            {article.content.sections.map((sec, idx) => (
              <div key={idx} className="space-y-2 pt-3">
                <h4 className="font-serif text-lg sm:text-xl font-semibold text-[#1A1410]">
                  {sec.heading}
                </h4>
                <p>{sec.body}</p>
              </div>
            ))}

            <div className="p-5 rounded-sm bg-[#F4EFEA] border-l-4 border-[#C5A880] my-6">
              <p className="font-serif italic text-base text-[#1A1410]">
                {article.content.conclusion}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-[#EAE2D8]">
            {article.tags.map((t, idx) => (
              <span key={idx} className="px-3 py-1 rounded-full bg-[#F4EFEA] text-[10px] font-mono text-[#8C6E42] uppercase tracking-wider">
                #{t}
              </span>
            ))}
          </div>

        </div>

        {/* Modal Footer Callout */}
        <div className="p-5 sm:p-6 bg-[#F4EFEA] border-t border-[#EAE2D8] flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div>
            <span className="text-[11px] font-mono tracking-wider text-[#8C6E42] uppercase block">
              READY TO BRING THIS INSPIRATION TO LIFE?
            </span>
            <span className="font-serif text-sm text-[#1A1410]">
              Consult with our wedding design specialists today.
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 border border-[#C5A880]/50 text-xs font-semibold tracking-wider uppercase text-[#1A1410] hover:bg-white rounded-sm"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onStartPlanning();
              }}
              className="w-1/2 sm:w-auto bg-gradient-to-r from-[#C5A880] to-[#DFCDAB] text-[#1A1410] font-sans font-bold text-xs tracking-[0.16em] uppercase px-6 py-2.5 rounded-sm shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              START PLANNING
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
