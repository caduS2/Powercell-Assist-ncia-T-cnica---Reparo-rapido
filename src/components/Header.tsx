import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageSquare, Phone } from 'lucide-react';
import { COMPANY_DATA } from '../data/powercellData';

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
            ? 'bg-[#070c18]/90 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/20 py-3.5'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1"
            aria-label="Powercell Assistência Técnica - Página inicial"
            id="header-logo-link"
          >
            {/* Tech Icon Mark */}
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-surface border border-white/10 group-hover:border-primary/50 transition-colors">
              <span className="font-display font-bold text-lg text-primary tracking-tighter">P</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] absolute top-2 right-2 ring-2 ring-[#070c18]"></span>
            </div>

            <div className="flex flex-col">
              <span className="font-display text-xl font-bold tracking-tight text-foreground flex items-center gap-1">
                POWERCELL
                <span className="inline-block w-1 h-1 rounded-full bg-primary"></span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase -mt-1">
                Assistência Técnica
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-surface/60 border border-white/[0.06] rounded-full px-3 py-1.5 backdrop-blur-sm" aria-label="Navegação Principal">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  id={`nav-link-${link.id}`}
                  className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-foreground bg-white/[0.08]'
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/[0.04]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Header Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_DATA.phoneRaw}`}
              className="hidden lg:flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg border border-transparent hover:border-white/10 transition-colors"
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
              id="header-cta-button"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-sm shadow-primary/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary whitespace-nowrap active:scale-[0.98]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Entrar em contato</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-surface border border-white/10 text-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
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
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
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
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <span className="font-display text-lg font-bold tracking-tight text-foreground">
                  POWERCELL
                </span>
                <span className="text-[9px] font-mono uppercase bg-primary/10 text-primary border border-primary/20 px-1.5 py-0.5 rounded">
                  SBC
                </span>
              </div>
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
