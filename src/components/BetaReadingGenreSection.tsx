import React, { useState } from 'react';
import {
  BookOpen,
  Sparkles,
  Heart,
  Globe,
  Compass,
  Shield,
  Skull,
  Scroll,
  Feather,
  Smile,
  Users,
  Briefcase,
  Moon,
  CheckCircle2,
  AlertTriangle,
  MessageCircle,
  ArrowRight,
  ChevronDown,
  Quote
} from 'lucide-react';
import { SITE_CONFIG, GenreExpertise } from '../config/siteConfig';

interface BetaReadingGenreSectionProps {
  onSelectGenre: (genreName: string) => void;
}

export const BetaReadingGenreSection: React.FC<BetaReadingGenreSectionProps> = ({ onSelectGenre }) => {
  const genres = SITE_CONFIG.betaReadingGenres;
  const [selectedGenreId, setSelectedGenreId] = useState<string>('romance');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Romance & Relationships',
    'Speculative & Sci-Fi',
    'Mystery & Suspense',
    'Dark & Gothic',
    'Contemporary & Life',
    'Fiction & Nonfiction'
  ];

  const filteredGenres = genres.filter((g) => {
    if (activeCategory === 'All') return true;
    return g.category === activeCategory;
  });

  const activeGenre = genres.find((g) => g.id === selectedGenreId) || genres[0];

  const getGenreIcon = (iconName: string) => {
    switch (iconName) {
      case 'Heart': return <Heart className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Globe': return <Globe className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'Shield': return <Shield className="w-5 h-5" />;
      case 'Skull': return <Skull className="w-5 h-5" />;
      case 'Scroll': return <Scroll className="w-5 h-5" />;
      case 'Feather': return <Feather className="w-5 h-5" />;
      case 'Smile': return <Smile className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5" />;
      case 'Moon': return <Moon className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  const whatsappGenreUrl = (genreName: string) =>
    `https://wa.me/+2349014111435?text=${encodeURIComponent(`Hi! I would like to inquire about a beta reading report for my ${genreName} manuscript.`)}`;

  return (
    <section id="beta-genres" className="py-24 bg-[#0a1c2e] text-[#FAF9F5] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-amber-300 font-bold block mb-2">
            Genre Specialization
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
            Beta Reading Across Every Major Genre
          </h2>
          <div className="w-12 h-1 bg-amber-400 rounded mx-auto mb-4" />
          <p className="text-sm sm:text-base text-neutral-200 font-light leading-relaxed">
            Every genre operates by its own narrative physics, emotional stakes, and reader expectations. Here is how I evaluate manuscripts across <strong className="text-white font-semibold">Fiction & Nonfiction, Romance, Fantasy, Sci-Fi, Mystery, Thriller, Horror, Historical, Literary, YA, Contemporary, Crime, Adventure, Paranormal & more</strong>.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-[#173E63]/80 border border-white/10 rounded-2xl mb-10 max-w-4xl mx-auto shadow-lg">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-amber-500 text-[#0f2a45] shadow-md font-bold'
                  : 'text-neutral-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main Interactive Split Layout: Genre Selector Grid + Detailed Analytical Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Left Column: Genre Navigation List */}
          <div className="lg:col-span-5 space-y-2.5 max-h-[700px] overflow-y-auto pr-2 custom-scrollbar">
            {filteredGenres.map((g) => {
              const isSelected = selectedGenreId === g.id;
              return (
                <div
                  key={g.id}
                  onClick={() => setSelectedGenreId(g.id)}
                  className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? 'bg-gradient-to-r from-amber-500/20 to-[#173E63] border-amber-400/60 shadow-lg'
                      : 'bg-[#173E63]/60 border-white/10 hover:border-white/25 hover:bg-[#173E63]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-amber-400 text-[#0f2a45]'
                          : 'bg-white/10 text-neutral-300 group-hover:text-amber-300'
                      }`}
                    >
                      {getGenreIcon(g.iconName)}
                    </div>
                    <div>
                      <h3 className={`font-serif text-base font-bold ${isSelected ? 'text-amber-300' : 'text-white'}`}>
                        {g.name}
                      </h3>
                      <p className="text-[11px] text-neutral-300 line-clamp-1 font-light">
                        {g.subgenres.slice(0, 3).join(', ')}...
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected
                        ? 'text-amber-300 translate-x-1'
                        : 'text-neutral-500 group-hover:text-neutral-300'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed In-Depth Genre Breakdown */}
          <div className="lg:col-span-7 bg-[#173E63]/90 border border-amber-400/40 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-400 text-[#0f2a45] flex items-center justify-center shrink-0 shadow-md">
                  {getGenreIcon(activeGenre.iconName)}
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-black/40 text-amber-300 border border-amber-400/30">
                    {activeGenre.category}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white mt-1">
                    {activeGenre.name}
                  </h3>
                </div>
              </div>

              <a
                href={whatsappGenreUrl(activeGenre.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-lg shadow-md transition-all self-start sm:self-auto"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>Book {activeGenre.name} Read</span>
              </a>
            </div>

            {/* Tagline */}
            <p className="text-sm sm:text-base text-amber-200 font-medium leading-relaxed italic">
              “{activeGenre.tagline}”
            </p>

            {/* Subgenres Pills */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-300 block mb-2">
                Subgenres & Tropes Covered
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeGenre.subgenres.map((sub, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/10 text-neutral-200 border border-white/15"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>

            {/* What I Analyze In Your Manuscript */}
            <div className="p-4 rounded-xl bg-[#0f2a45]/80 border border-white/10 space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>What I Analyze in Your {activeGenre.name} Manuscript:</span>
              </span>
              <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-200 font-light">
                {activeGenre.focusAreas.map((area, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reader Expectations We Safeguard */}
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/25 space-y-1.5 text-xs sm:text-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block">
                Reader Expectations We Safeguard:
              </span>
              <p className="text-neutral-200 font-light leading-relaxed">
                {activeGenre.readerExpectations}
              </p>
            </div>

            {/* Common Pitfalls & Bottlenecks Flagged */}
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/25 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-red-300 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                <span>Common Pitfalls & Bottlenecks I Flag in Reports:</span>
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-200 font-light">
                {activeGenre.commonPitfallsFlagged.map((pitfall, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-red-400">✕</span>
                    <span>{pitfall}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sample Diagnostic Feedback Snippet */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                <Quote className="w-3.5 h-3.5 text-amber-400" />
                <span>Sample Diagnostic Feedback from Real Reader Report:</span>
              </span>
              <p className="text-xs sm:text-sm text-neutral-200 font-light italic leading-relaxed">
                {activeGenre.sampleFeedbackSnippet}
              </p>
            </div>

            {/* Bottom Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => onSelectGenre(activeGenre.name)}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-[#0f2a45] text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer shadow-md"
              >
                Inquire for {activeGenre.name} Manuscript
              </button>

              <a
                href={whatsappGenreUrl(activeGenre.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Discuss on WhatsApp (+2349014111435)</span>
              </a>
            </div>

          </div>

        </div>

        {/* Cross-Genre Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#173E63] border border-amber-400/30 flex flex-col md:flex-row items-center justify-between gap-4 text-left">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider text-amber-300 font-bold">
              Multi-Genre & Hybrid Manuscripts Welcome
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Writing a Romantasy, Sci-Fi Mystery, or Historical Horror?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-xl">
              I specialize in cross-genre manuscripts, auditing both sides of your hybrid story to ensure dual-trope fulfillment and pacing balance.
            </p>
          </div>

          <a
            href="https://wa.me/+2349014111435?text=Hi!%20I%20have%20a%20cross-genre%20manuscript%20and%20would%20love%20to%20discuss%20a%20beta%20reading%20report."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-wider shadow-lg transition-all whitespace-nowrap"
          >
            Ask About Your Genre Blend (+2349014111435)
          </a>
        </div>

      </div>
    </section>
  );
};
