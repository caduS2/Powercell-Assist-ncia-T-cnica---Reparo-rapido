import React from 'react';
import { Instagram, ExternalLink, Heart, MessageCircle, CheckCircle, ShieldCheck, Sparkles, Send, Smartphone, Cpu, BatteryCharging, Laptop } from 'lucide-react';
import { COMPANY_DATA } from '../data/powercellData';
import { PowercellLogo } from './PowercellLogo';
import heroLabImage from '../assets/images/hero_repair_lab_1788353762086.jpg';
import aboutLabImage from '../assets/images/about_tech_lab_1788353774077.jpg';

interface InstagramPost {
  id: string;
  image: string;
  fallbackIcon: React.ReactNode;
  caption: string;
  tag: string;
  likes: number;
  comments: number;
}

const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'post-1',
    image: heroLabImage,
    fallbackIcon: <Smartphone className="w-8 h-8 text-[#FFB800]" />,
    caption: 'Troca de tela expressa para iPhone concluída em menos de 40 min na bancada de SBC. Calibração de touch 100% testada!',
    tag: '#ReparoExpress #iPhoneSBC',
    likes: 47,
    comments: 6,
  },
  {
    id: 'post-2',
    image: aboutLabImage,
    fallbackIcon: <Cpu className="w-8 h-8 text-sky-400" />,
    caption: 'Análise microscópica de circuito integrado e linha de carga. Aqui o defeito não é adivinhado, é medido e reparado.',
    tag: '#MicroSoldagem #DiagnósticoPlaca',
    likes: 62,
    comments: 9,
  },
  {
    id: 'post-3',
    image: heroLabImage,
    fallbackIcon: <BatteryCharging className="w-8 h-8 text-emerald-400" />,
    caption: 'Bateria estufada ou descarregando do nada? Substituição com ciclagem limpa e máxima durabilidade para seu aparelho.',
    tag: '#BateriaNova #Manutencao',
    likes: 38,
    comments: 4,
  },
  {
    id: 'post-4',
    image: aboutLabImage,
    fallbackIcon: <Laptop className="w-8 h-8 text-purple-400" />,
    caption: 'Notebook travando ou esquentando? Revisão preventiva completa, limpeza interna e troca de pasta térmica.',
    tag: '#NotebookSBC #Upgrade',
    likes: 53,
    comments: 8,
  },
];

export const InstagramSection: React.FC = () => {
  const { instagram } = COMPANY_DATA;

  return (
    <section id="instagram" className="py-20 bg-[#060a14] relative overflow-hidden border-t border-white/[0.06]">
      {/* Background Ambience */}
      <div className="absolute -top-24 right-1/4 w-80 h-80 bg-gradient-to-tr from-purple-600/10 via-pink-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Instagram Profile Card Header */}
        <div className="bg-[#0c1220] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left: Avatar & Info */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
              {/* Profile Avatar with Instagram Gradient Ring */}
              <div className="relative group shrink-0">
                <div className="p-1 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shadow-xl">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-black flex items-center justify-center overflow-hidden border-2 border-black p-2">
                    <PowercellLogo variant="icon-only" className="w-full h-full border-0" />
                  </div>
                </div>
                <div className="absolute bottom-1 right-1 bg-gradient-to-tr from-amber-500 to-purple-600 text-white rounded-full p-1 shadow-md">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Bio & Details */}
              <div className="space-y-2 max-w-lg">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
                    {instagram.username}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-white bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15">
                    <CheckCircle className="w-3 h-3 text-sky-400" />
                    Oficial
                  </span>
                </div>

                <p className="text-sm font-semibold text-[#FFB800]">
                  Powercell Assistência Técnica
                </p>

                {/* Follower Stats */}
                <div className="flex items-center justify-center sm:justify-start gap-6 py-1 text-xs sm:text-sm font-mono text-zinc-300">
                  <div>
                    <strong className="text-white font-bold">{instagram.postsCount}</strong> publicações
                  </div>
                  <div>
                    <strong className="text-white font-bold">{instagram.followersCount}</strong> seguidores
                  </div>
                  <div>
                    <strong className="text-white font-bold">{instagram.followingCount}</strong> seguindo
                  </div>
                </div>

                {/* Bullet Points from Real Bio */}
                <div className="text-xs sm:text-sm text-zinc-300 space-y-1 font-sans text-left">
                  {instagram.bioHighlights.map((highlight, idx) => (
                    <p key={idx} className="flex items-center gap-1.5">
                      <span>{highlight}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Instagram Actions */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 w-full sm:w-auto">
              <a
                href={instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 text-white font-bold text-sm shadow-lg shadow-rose-500/20 hover:opacity-95 transition-opacity"
              >
                <Instagram className="w-4 h-4" />
                <span>Seguir no Instagram</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <a
                href={COMPANY_DATA.defaultWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-surface border border-white/15 text-zinc-200 hover:text-white hover:bg-surface-elevated font-semibold text-sm transition-all"
              >
                <Send className="w-3.5 h-3.5 text-[#FFB800]" />
                <span>Pedir Orçamento no Direct</span>
              </a>
            </div>
          </div>
        </div>

        {/* Gallery of Recent Repair Posts */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
              <Instagram className="w-5 h-5 text-rose-400" />
              <span>Rotina e Reparos na Bancada (@powercell_sbc)</span>
            </h4>
            <p className="text-xs text-muted-foreground mt-0.5">
              Acompanhe reparos reais feitos diariamente em nossa assistência técnica
            </p>
          </div>

          <a
            href={instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-[#FFB800] hover:underline hidden sm:inline-flex items-center gap-1"
          >
            <span>Ver perfil completo ↗</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl overflow-hidden bg-[#0c1220] border border-white/10 hover:border-rose-500/40 transition-all duration-300 flex flex-col shadow-lg"
            >
              {/* Image Container */}
              <div className="aspect-square relative overflow-hidden bg-black/50">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 justify-between text-white text-xs font-mono">
                  <span className="flex items-center gap-1.5">
                    <Heart className="w-4 h-4 fill-rose-500 text-rose-500" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4" /> {post.comments}
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-zinc-300 line-clamp-3 leading-relaxed">
                  {post.caption}
                </p>
                <span className="text-[11px] font-mono text-amber-400 mt-3 block">
                  {post.tag}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
