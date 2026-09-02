import React from 'react';
import { ArrowUp, Phone, MapPin, MessageSquare } from 'lucide-react';
import { COMPANY_DATA } from '../data/powercellData';

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
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
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
    <footer className="bg-[#050810] border-t border-white/[0.08] text-muted-foreground pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Col 1: Brand & Descriptor (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-surface border border-white/10">
                <span className="font-display font-bold text-sm text-primary">P</span>
              </div>
              <span className="font-display text-lg font-bold tracking-tight text-foreground">
                POWERCELL
              </span>
            </div>

            <p className="text-xs text-foreground/80 font-mono uppercase tracking-wider">
              {COMPANY_DATA.descriptor}
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Diagnóstico claro e assistência técnica especializada para celulares, notebooks e computadores no Centro de São Bernardo do Campo.
            </p>
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
                    className="hover:text-primary transition-colors inline-block py-0.5"
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
              Local & Atendimento
            </span>

            <div className="space-y-2.5 text-xs text-muted-foreground">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{COMPANY_DATA.address.fullFormatted}</span>
              </p>

              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href={`tel:${COMPANY_DATA.phoneRaw}`}
                  className="text-foreground hover:text-primary transition-colors font-medium"
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
                  className="text-primary hover:underline"
                >
                  WhatsApp: (11) 96172-9877
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {currentYear} Powercell Assistência Técnica. Todos os direitos reservados.</p>

          <button
            type="button"
            onClick={handleScrollToTop}
            id="footer-back-to-top"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-white/10 hover:border-primary/40 hover:text-foreground transition-all cursor-pointer"
            aria-label="Voltar ao topo da página"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5 text-primary" />
          </button>
        </div>
      </div>
    </footer>
  );
};
