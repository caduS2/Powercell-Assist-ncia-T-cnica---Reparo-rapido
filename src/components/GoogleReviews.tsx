import React, { useState } from 'react';
import { Star, CheckCircle, MessageSquare, ThumbsUp, ChevronDown, ChevronUp, ExternalLink, ShieldCheck, Award } from 'lucide-react';
import { COMPANY_DATA, REVIEWS_LIST } from '../data/powercellData';

export const GoogleReviews: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [expandedReplies, setExpandedReplies] = useState<Record<string, boolean>>({
    'rev-2': true,
    'rev-4': true,
  });

  const toggleReply = (id: string) => {
    setExpandedReplies((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredReviews = REVIEWS_LIST.filter((review) => {
    if (selectedTag === 'all') return true;
    if (selectedTag === 'speed') return review.serviceTag.toLowerCase().includes('rápido') || review.serviceTag.toLowerCase().includes('40 min');
    if (selectedTag === 'screen') return review.serviceTag.toLowerCase().includes('tela') || review.serviceTag.toLowerCase().includes('iphone');
    if (selectedTag === 'same-day') return review.serviceTag.toLowerCase().includes('hora') || review.serviceTag.toLowerCase().includes('40 min');
    return true;
  });

  return (
    <section id="avaliacoes" className="py-20 sm:py-24 bg-[#080d1a] relative overflow-hidden border-t border-white/[0.06]">
      {/* Subtle Glow Accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-mono font-medium mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Avaliações Verificadas no Google</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground tracking-tight">
              O que dizem os clientes da <span className="text-[#FFB800]">Powercell</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-2 max-w-xl">
              Reparos executados com transparência, rapidez e preços justos na Galeria Lauro Gomes em São Bernardo do Campo.
            </p>
          </div>

          {/* Google Score Summary Card */}
          <div className="bg-[#0e1628] border border-white/10 rounded-2xl p-5 flex items-center gap-5 shrink-0 shadow-xl shadow-black/40">
            {/* Google Logo Mark */}
            <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-inner shrink-0">
              <svg viewBox="0 0 24 24" className="w-8 h-8">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-black font-display text-white">4.9</span>
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5 font-mono">
                Baseado em <strong className="text-white font-bold">352 avaliações</strong> no Google
              </p>
              <div className="flex items-center gap-1 text-[11px] text-emerald-400 mt-1">
                <ShieldCheck className="w-3 h-3" />
                <span>Excelente reputação verificada</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tags */}
        <div className="flex items-center gap-2 overflow-x-auto py-6 no-scrollbar">
          <span className="text-xs font-mono text-muted-foreground mr-1 shrink-0">Filtrar por:</span>
          {COMPANY_DATA.googleBusiness.tags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => setSelectedTag(tag.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium shrink-0 transition-all ${
                selectedTag === tag.id
                  ? 'bg-[#FFB800] text-black font-semibold shadow-md shadow-amber-500/20'
                  : 'bg-surface border border-white/10 text-muted-foreground hover:text-foreground hover:bg-surface-elevated'
              }`}
            >
              {tag.label} ({tag.count})
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl bg-[#0e1628] border border-white/[0.08] p-6 flex flex-col justify-between hover:border-amber-400/40 transition-all duration-300 group shadow-lg"
            >
              <div>
                {/* Header: Author & Rating */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-tr ${review.avatarColor} flex items-center justify-center text-white font-bold text-sm shadow`}
                    >
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground leading-tight flex items-center gap-1.5">
                        {review.author}
                        <CheckCircle className="w-3.5 h-3.5 text-sky-400 shrink-0" title="Avaliação Verificada" />
                      </h3>
                      <p className="text-[11px] text-muted-foreground font-mono mt-0.5">{review.role}</p>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-muted-foreground shrink-0">{review.timeAgo}</span>
                </div>

                {/* Stars & Service Tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono font-medium text-amber-400/90 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                    {review.serviceTag}
                  </span>
                </div>

                {/* Review Body */}
                <p className="text-sm text-zinc-300 leading-relaxed italic mb-4">
                  "{review.content}"
                </p>
              </div>

              {/* Owner Response Box (if available) */}
              {review.ownerReply && (
                <div className="mt-2 pt-3 border-t border-white/10">
                  <button
                    onClick={() => toggleReply(review.id)}
                    className="flex items-center justify-between w-full text-left text-xs text-sky-400 hover:text-sky-300 font-medium transition-colors mb-1.5"
                  >
                    <span className="flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5" />
                      Resposta da Powercell ({review.ownerReply.date})
                    </span>
                    {expandedReplies[review.id] ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>

                  {expandedReplies[review.id] && (
                    <div className="bg-[#070b14] rounded-xl p-3 border border-white/5 text-xs text-zinc-400 leading-relaxed font-sans mt-1">
                      <p className="font-semibold text-zinc-300 text-[11px] mb-1">Powercell (proprietário):</p>
                      <p>{review.ownerReply.text}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA to Google Maps */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={COMPANY_DATA.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface border border-white/15 text-sm font-semibold text-white hover:bg-surface-elevated hover:border-amber-400/40 transition-all shadow-md"
          >
            <span>Ver todas as 352 avaliações no Google Maps</span>
            <ExternalLink className="w-4 h-4 text-amber-400" />
          </a>

          <a
            href={COMPANY_DATA.defaultWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FFB800] text-black font-bold text-sm hover:bg-[#ffc220] transition-colors shadow-lg shadow-amber-500/20"
          >
            <span>Falar com o técnico no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
