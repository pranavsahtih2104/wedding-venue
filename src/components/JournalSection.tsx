import React, { useState } from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { JOURNAL_ARTICLES, type JournalArticle } from '../data/journal';
import { ArticleModal } from './ArticleModal';

interface JournalSectionProps {
  onStartPlanning: () => void;
}

export const JournalSection: React.FC<JournalSectionProps> = ({ onStartPlanning }) => {
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  return (
    <section id="journal" className="py-24 sm:py-32 bg-[#F4EFEA] text-[#1A1410] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-[#8C6E42] tracking-[0.25em] font-semibold">
                11 / EDITORIAL INSIGHTS
              </span>
              <div className="h-[1px] w-12 bg-[#8C6E42]/60" />
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#1A1410] tracking-tight">
              THE AURELIA<br />
              <span className="italic font-normal text-[#A16B5E]">WEDDING</span> JOURNAL.
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#2D231C]/75 font-light leading-relaxed">
            Expert guidance, bridal styling wisdom, and destination planning advice curated by our lead directors and floral artisans.
          </p>
        </div>

        {/* 6 Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {JOURNAL_ARTICLES.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="bg-white rounded-sm overflow-hidden border border-[#EAE2D8] hover:border-[#C5A880] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              {/* Cover Image */}
              <div className="relative h-60 overflow-hidden img-zoom-container">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#1A1410]/75 backdrop-blur-md text-[9px] font-mono tracking-widest text-[#DFCDAB] uppercase border border-white/20">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-[#8C6E42] uppercase tracking-wider mb-2">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="font-serif text-xl font-medium text-[#1A1410] group-hover:text-[#8C6E42] transition-colors mb-2 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#2D231C]/75 font-light leading-relaxed mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#EAE2D8] text-xs font-semibold tracking-wider text-[#1A1410] group-hover:text-[#8C6E42] uppercase">
                  <span>READ FULL GUIDE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#8C6E42]" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onStartPlanning={onStartPlanning}
      />
    </section>
  );
};
