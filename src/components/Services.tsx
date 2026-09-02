import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Smartphone,
  BatteryCharging,
  PlugZap,
  Camera,
  Cpu,
  Droplets,
  Laptop,
  Sparkles,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { SERVICES_LIST, ServiceItem, COMPANY_DATA } from '../data/powercellData';

// Map icon strings to Lucide components
const iconMap: Record<string, React.ElementType> = {
  Smartphone,
  BatteryCharging,
  PlugZap,
  Camera,
  Cpu,
  Droplets,
  Laptop,
  Sparkles,
};

export const Services: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.06,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="servicos"
      className="py-20 lg:py-28 relative bg-[#070c18] border-t border-white/[0.06]"
      aria-labelledby="services-section-title"
    >
      {/* Background Subtle Tech Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 ambient-glow-blue opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 h-80 ambient-glow-gold opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface border border-white/10 mb-4">
            <span className="font-mono text-xs text-primary font-semibold tracking-wider uppercase">
              Serviços Especializados
            </span>
          </div>

          <h2
            id="services-section-title"
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight leading-[1.15] mb-5"
          >
            Precisão técnica para o aparelho que você usa todos os dias.
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Da falha mais comum ao reparo que exige análise detalhada, cada atendimento começa entendendo o problema antes de indicar o próximo passo.
          </p>
        </div>

        {/* 8 Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES_LIST.map((service: ServiceItem) => {
            const IconComponent = iconMap[service.iconName] || Smartphone;
            const whatsappUrl = `https://wa.me/${COMPANY_DATA.phoneRaw}?text=${encodeURIComponent(service.whatsappMessage)}`;

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                id={`service-card-${service.id}`}
                className="group relative flex flex-col justify-between rounded-xl bg-[#0b1222] border border-white/[0.08] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 focus-within:ring-2 focus-within:ring-primary focus-within:border-primary"
              >
                {/* Top: Category Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-semibold tracking-wider text-[#D4AF37]/90 px-2 py-0.5 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                      {service.number}
                    </span>

                    <div className="w-10 h-10 rounded-lg bg-surface border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:text-sky-300 transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2.5 tracking-tight group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Bottom CTA Link */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`service-consult-btn-${service.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/90 group-hover:text-primary transition-colors focus:outline-none"
                    aria-label={`Consultar atendimento para ${service.title} via WhatsApp`}
                  >
                    <span>Consultar atendimento</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-primary/20 flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors"
                    aria-label={`Enviar mensagem para ${service.title}`}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Informative Note Box */}
        <div className="mt-12 p-4 sm:p-5 rounded-xl bg-surface/50 border border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-muted-foreground">
            <span className="font-semibold text-foreground mr-1.5">Nota técnica:</span>
            A viabilidade de cada reparo é determinada após análise física em bancada para conferência do circuito e integridade das peças.
          </div>
          <a
            href={COMPANY_DATA.defaultWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono font-medium text-primary hover:underline whitespace-nowrap shrink-0"
          >
            Tirar dúvida técnica →
          </a>
        </div>
      </div>
    </section>
  );
};
