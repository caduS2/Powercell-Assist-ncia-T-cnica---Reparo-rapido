import React from 'react';
import { ArrowUp, Phone, MapPin, MessageSquare, Instagram, Star } from 'lucide-react';
import { COMPANY_DATA } from '../data/powercellData';
import { PowercellLogo } from './PowercellLogo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre a Powercell', href: '#sobre' },
    { label: 'Avaliações Google (4.9★)', href: '#avaliacoes' },
    { label: 'Instagram Oficial', href: '#instagram' },
    { label: 'Localização & Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-[#04070e] border-t border-white/[0.08] text-muted-foreground pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Col 1: Brand & Descriptor (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <PowercellLogo variant="footer" />

            <p className="text-xs text-[#FFB800] font-mono font-medium">
              🥇 Mestre em Reparo | Rápido, seguro e garantido
            </p>

            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              Especialista em iPhone, Android, notebooks e computadores. Diagnóstico claro e reparos na Galeria Lauro Gomes em São Bernardo do Campo.
            </p>

            {/* Social & Google Proof Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={COMPANY_DATA.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-purple-600/10 border border-rose-500/30 text-xs text-zinc-200 hover:text-white hover:border-rose-500 transition-all font-mono"
              >
                <Instagram className="w-3.5 h-3.5 text-rose-400" />
                <span>@powercell_sbc ({COMPANY_DATA.instagram.followersCount} seguidores)</span>
              </a>

              <a
                href={COMPANY_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-400/10 border border-amber-400/20 text-xs text-amber-300 hover:border-amber-400/40 transition-all font-mono"
              >
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>Google 4.9 (352 avaliações)</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground block mb-2">
              Navegação
            </span>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-[#FFB800] transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Local Information & Fast Contact (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground block mb-2">
              Localização & Contato
            </span>

            <div className="space-y-2.5 text-xs text-zinc-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FFB800] shrink-0 mt-0.5" />
                <span>{COMPANY_DATA.address.fullFormatted}</span>
              </p>

              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FFB800] shrink-0" />
                <a
                  href={`tel:${COMPANY_DATA.phoneRaw}`}
                  className="text-foreground hover:text-[#FFB800] transition-colors font-medium"
                >
                  {COMPANY_DATA.phoneDisplay}
                </a>
              </p>

              <p className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={COMPANY_DATA.defaultWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FFB800] hover:underline font-semibold"
                >
                  WhatsApp: {COMPANY_DATA.phoneDisplay}
                </a>
              </p>

              <div className="pt-2 text-[11px] font-mono text-emerald-400 space-y-0.5">
                <p>● Seg a Sáb: 07:00 às 20:00</p>
                <p>● Domingo: 07:00 às 16:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {currentYear} Powercell Assistência Técnica - Galeria Lauro Gomes, SBC. Todos os direitos reservados.</p>

          <button
            type="button"
            onClick={handleScrollToTop}
            id="footer-back-to-top"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-white/10 hover:border-[#FFB800]/40 hover:text-foreground transition-all cursor-pointer"
            aria-label="Voltar ao topo da página"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FFB800]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
