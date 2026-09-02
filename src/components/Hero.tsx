import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowDown, MessageSquare, ShieldCheck, MapPin, Wrench, PhoneCall, Cpu } from 'lucide-react';
import { COMPANY_DATA } from '../data/powercellData';
import heroLabImage from '../assets/images/hero_repair_lab_1788353762086.jpg';

export const Hero: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const handleScrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('servicos');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:py-24 overflow-hidden bg-grid-pattern"
      aria-label="Início e Apresentação"
    >
      {/* Precision Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 ambient-glow-blue pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 ambient-glow-gold pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column (7 Cols on Desktop): Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-white/10 shadow-sm mb-6">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-mono font-medium tracking-tight text-foreground/90 uppercase">
                Assistência técnica no Centro de São Bernardo
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-bold tracking-tight text-foreground leading-[1.08] mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ fontSize: 'clamp(2.5rem, 5.2vw + 0.5rem, 5.25rem)' }}
            >
              Seu aparelho de volta.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-sky-300 to-[#D4AF37]">
                Sua rotina também.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8"
            >
              Diagnóstico claro e reparo técnico para celulares, computadores e notebooks, com atendimento direto no Centro de São Bernardo do Campo.
            </motion.p>

            {/* CTAs Group */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
            >
              <a
                href={COMPANY_DATA.defaultWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-primary-cta"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm tracking-wide uppercase hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20 active:scale-[0.98] group"
              >
                <MessageSquare className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>Entrar em contato</span>
              </a>

              <a
                href="#servicos"
                onClick={handleScrollToServices}
                id="hero-secondary-cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-surface border border-white/10 text-foreground/90 hover:text-foreground hover:bg-surface-elevated hover:border-white/20 font-medium text-sm transition-all duration-200"
              >
                <span>Conhecer os serviços</span>
                <ArrowDown className="w-4 h-4 text-muted-foreground" />
              </a>
            </motion.div>

            {/* Trust Line & Key Pillars */}
            <motion.div
              variants={itemVariants}
              className="pt-8 border-t border-white/[0.08] w-full grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-surface border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div className="text-xs">
                  <span className="font-semibold text-foreground block">Galeria Lauro Gomes</span>
                  <span className="text-muted-foreground">Centro de SBC</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-surface border border-white/10 flex items-center justify-center shrink-0">
                  <Wrench className="w-4 h-4 text-primary" />
                </div>
                <div className="text-xs">
                  <span className="font-semibold text-foreground block">Hardware & Placa</span>
                  <span className="text-muted-foreground">Celulares e PCs</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-surface border border-white/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-xs">
                  <span className="font-semibold text-foreground block">Bancada Técnica</span>
                  <span className="text-muted-foreground">Avaliação sem rodeios</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column (5 Cols on Desktop): Editorial Lab Photography & Technical Floating Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 relative w-full flex justify-center"
          >
            <div className="relative w-full max-w-lg lg:max-w-none rounded-2xl overflow-hidden bg-surface border border-white/10 shadow-2xl group">
              {/* Technical Corner Markers */}
              <div className="absolute top-3 left-3 z-20 font-mono text-[9px] uppercase tracking-widest text-primary/80 bg-[#070c18]/80 backdrop-blur-sm px-2 py-0.5 rounded border border-primary/20 flex items-center gap-1.5">
                <Cpu className="w-3 h-3 text-primary" />
                <span>LAB_ID: SBC-01</span>
              </div>

              {/* Main Photo with gradient overlay */}
              <div className="aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] relative overflow-hidden bg-black/40">
                <img
                  src={heroLabImage}
                  alt="Bancada de assistência técnica profissional com ferramentas de precisão e circuito integrado"
                  className="w-full h-full object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  fetchPriority="high"
                  referrerPolicy="no-referrer"
                  width="900"
                  height="1125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070c18] via-transparent to-black/30" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#070c18]/40 via-transparent to-transparent" />
              </div>

              {/* Interactive Floating Card: Atendimento Direto */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 rounded-xl bg-[#0b1222]/95 backdrop-blur-md border border-white/15 shadow-xl flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                    <PhoneCall className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono tracking-wider uppercase text-muted-foreground block">
                      Atendimento direto
                    </span>
                    <a
                      href={`tel:${COMPANY_DATA.phoneRaw}`}
                      id="hero-floating-phone-link"
                      className="font-display font-semibold text-sm sm:text-base text-foreground hover:text-primary transition-colors"
                    >
                      {COMPANY_DATA.phoneDisplay}
                    </a>
                  </div>
                </div>

                <a
                  href={COMPANY_DATA.defaultWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors shrink-0"
                  id="hero-floating-talk-btn"
                >
                  Chamar
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Continuity Scroll Cue */}
        <div className="flex justify-center mt-12 lg:mt-16">
          <a
            href="#servicos"
            onClick={handleScrollToServices}
            aria-label="Rolar até os serviços"
            className="flex flex-col items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors text-xs font-mono uppercase tracking-widest group"
          >
            <span>Explorar Serviços</span>
            <ArrowDown className="w-3.5 h-3.5 text-primary animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
