import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageSquare, Phone, Instagram, Star } from 'lucide-react';
import { COMPANY_DATA } from '../data/powercellData';
import { PowercellLogo } from './PowercellLogo';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle ESC key and scroll lock when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Início', href: '#inicio', id: 'inicio' },
    { label: 'Serviços', href: '#servicos', id: 'servicos' },
    { label: 'Sobre', href: '#sobre', id: 'sobre' },
    { label: 'Avaliações', href: '#avaliacoes', id: 'avaliacoes' },
    { label: 'Instagram', href: '#instagram', id: 'instagram' },
    { label: 'Contato', href: '#contato', id: 'contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#05070d]/95 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40 py-3'
            : 'bg-transparent py-4 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with official Power button symbol */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
            aria-label="Powercell Assistência Técnica - Página inicial"
            id="header-logo-link"
          >
            <PowercellLogo variant="header" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-surface/80 border border-white/[0.08] rounded-full px-3 py-1.5 backdrop-blur-md" aria-label="Navegação Principal">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  id={`nav-link-${link.id}`}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/10 font-semibold'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {link.id === 'avaliacoes' && (
                    <span className="ml-1 text-[10px] text-amber-400 font-mono">4.9★</span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#FFB800]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Header Action CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Instagram Quick Link */}
            <a
              href={COMPANY_DATA.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-white px-2.5 py-2 rounded-lg border border-white/10 hover:border-rose-500/40 transition-colors bg-[#0a0f1d]"
              title="Instagram @powercell_sbc"
              id="header-instagram-btn"
            >
              <Instagram className="w-3.5 h-3.5 text-rose-400" />
              <span className="hidden xl:inline">@powercell_sbc</span>
            </a>

            <a
              href={`tel:${COMPANY_DATA.phoneRaw}`}
              className="hidden xl:flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white px-2.5 py-2 rounded-lg border border-transparent hover:border-white/10 transition-colors"
              title="Ligar para a Powercell"
              id="header-phone-quick-call"
            >
              <Phone className="w-3.5 h-3.5 text-primary" />
              <span>{COMPANY_DATA.phoneDisplay}</span>
            </a>

            <a
              href={COMPANY_DATA.defaultWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-btn"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FFB800] text-black font-bold text-xs hover:bg-[#ffc220] transition-colors shadow-md shadow-amber-500/15"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-black" />
              <span>Solicitar Reparo</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-surface border border-white/10 text-foreground hover:text-[#FFB800] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Abrir menu de navegação"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu-drawer"
            id="mobile-menu-toggle-btn"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation (Sheet) */}
      <div
        id="mobile-menu-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de Navegação"
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop overlay */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        />

        {/* Slide-in drawer container */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-full max-w-xs bg-[#0b1222] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 transform ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-white/10">
              <PowercellLogo variant="header" />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 text-muted-foreground hover:text-foreground border border-white/10"
                aria-label="Fechar menu"
                id="mobile-menu-close-btn"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-2" aria-label="Links Mobile">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    id={`mobile-nav-${link.id}`}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-primary/15 text-primary border border-primary/30'
                        : 'text-foreground/80 hover:bg-white/5 hover:text-foreground'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50" />
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <div className="text-xs text-muted-foreground mb-1">
              <span className="block font-mono text-foreground font-semibold">Atendimento no Centro de SBC</span>
              <span className="block">{COMPANY_DATA.address.shortFormatted}</span>
            </div>

            <a
              href={COMPANY_DATA.defaultWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="mobile-menu-cta-btn"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-primary text-primary-foreground font-medium text-sm shadow-md shadow-primary/20 active:scale-[0.98] transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Entrar em contato</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
