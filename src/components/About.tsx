import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { CheckCircle2, MapPin, Shield, Layers, HelpCircle, MessageSquare } from 'lucide-react';
import { PROCESS_STEPS, FACTUAL_STATS, COMPANY_DATA } from '../data/powercellData';
import { useCountUp } from '../hooks/useCountUp';
import aboutLabImage from '../assets/images/about_tech_lab_1788353774077.jpg';

const StatCard: React.FC<{ stat: (typeof FACTUAL_STATS)[0] }> = ({ stat }) => {
  const count = useCountUp(stat.value, 1000);

  return (
    <div className="p-5 rounded-xl bg-surface border border-white/[0.08] flex flex-col justify-between">
      <div className="flex items-baseline gap-1 mb-2">
        <span className="font-display font-bold text-3xl sm:text-4xl text-foreground">
          {count}
        </span>
        {stat.suffix && (
          <span className="font-mono text-sm text-[#D4AF37] font-semibold">{stat.suffix}</span>
        )}
      </div>
      <div>
        <h4 className="font-display font-semibold text-sm text-foreground mb-1">{stat.label}</h4>
        <p className="text-xs text-muted-foreground leading-normal">{stat.detail}</p>
      </div>
    </div>
  );
};

export const About: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="sobre"
      className="py-20 lg:py-28 relative bg-[#060a14] border-t border-white/[0.06]"
      aria-labelledby="about-section-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Split: Narrative & Photographic Proof */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Left: Narrative and Direct Approach (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface border border-white/10 mb-4">
              <span className="font-mono text-xs text-primary font-semibold tracking-wider uppercase">
                Sobre a Powercell
              </span>
            </div>

            <h2
              id="about-section-title"
              className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight leading-[1.15] mb-6"
            >
              Reparo técnico sem conversa complicada.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              <p>
                A <strong className="text-foreground font-semibold">Powercell</strong> atende celulares, computadores e notebooks no Centro de São Bernardo do Campo.
              </p>
              <p>
                O processo parte de uma análise clara do aparelho, comunicação direta e orientação objetiva sobre o serviço necessário. Você entende o problema e consegue falar com a assistência antes de se deslocar.
              </p>
            </div>

            {/* Core Verification Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/[0.08]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="text-sm">
                  <strong className="text-foreground block font-medium">Comunicação Transparente</strong>
                  <span className="text-muted-foreground text-xs">Sem termos confusos ou trocas desnecessárias.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="text-sm">
                  <strong className="text-foreground block font-medium">Ponto Físico Estabelecido</strong>
                  <span className="text-muted-foreground text-xs">Galeria Lauro Gomes, Centro de SBC.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Technical Photo & Factual Cards (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="relative rounded-2xl overflow-hidden bg-surface border border-white/10 shadow-2xl">
              <div className="aspect-[16/10] overflow-hidden bg-black/40">
                <img
                  src={aboutLabImage}
                  alt="Técnico realizando inspeção e análise de hardware em bancada"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  width="800"
                  height="500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1222] via-transparent to-transparent" />
              </div>

              <div className="p-5 bg-[#0b1222]">
                <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span className="text-foreground font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    Atendimento Especializado
                  </span>
                  <span>São Bernardo do Campo — SP</span>
                </div>
              </div>
            </div>

            {/* Factual Counters Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {FACTUAL_STATS.map((stat, idx) => (
                <StatCard key={idx} stat={stat} />
              ))}
            </div>
          </div>
        </div>

        {/* 4-Step Process Sequence */}
        <div className="mt-16 pt-16 border-t border-white/[0.08]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-foreground tracking-tight mb-3">
              Como funciona o atendimento
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Passo a passo simplificado para você ter a solução técnica certa sem surpresas.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative"
          >
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="relative rounded-xl bg-surface border border-white/[0.08] p-6 flex flex-col justify-between hover:border-primary/30 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display font-bold text-2xl text-primary/80">
                      {step.number}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground px-2 py-0.5 rounded bg-white/5">
                      Etapa
                    </span>
                  </div>

                  <h4 className="font-display font-semibold text-base text-foreground mb-2">
                    {step.title}
                  </h4>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-[1px] bg-white/20 z-20 pointer-events-none" />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Direct WhatsApp Callout */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <span className="text-sm text-muted-foreground">
              Quer tirar dúvidas antes de ir até a loja?
            </span>
            <a
              href={COMPANY_DATA.defaultWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="about-bottom-cta"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary hover:text-sky-300 underline underline-offset-4"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chame no WhatsApp {COMPANY_DATA.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
