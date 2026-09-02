import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Navigation,
  CheckCircle,
  AlertCircle,
  Smartphone,
  Copy,
  Check,
  ExternalLink,
  Compass,
} from 'lucide-react';
import { COMPANY_DATA, DEVICE_TYPES, PROBLEM_TYPES } from '../data/powercellData';
import { formatPhoneMask, cleanPhoneDigits, generateContactFormWhatsappUrl } from '../utils/whatsapp';

interface FormErrors {
  name?: string;
  phone?: string;
  deviceType?: string;
  problemType?: string;
  description?: string;
  consent?: string;
}

export const Contact: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    deviceType: '',
    problemType: '',
    description: '',
    consent: true,
    website_hp: '', // Honeypot field for spam prevention
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccessfully, setSubmittedSuccessfully] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(COMPANY_DATA.address.fullFormatted).then(() => {
        setCopiedAddress(true);
        setTimeout(() => setCopiedAddress(false), 2500);
      });
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const masked = formatPhoneMask(rawValue);
    setFormData((prev) => ({ ...prev, phone: masked }));
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: undefined }));
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Check Honeypot: if filled, silently reject as spam
    if (formData.website_hp) {
      return false;
    }

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Por favor, informe seu nome completo.';
    }

    const digits = cleanPhoneDigits(formData.phone);
    if (!digits || digits.length < 10) {
      newErrors.phone = 'Informe um WhatsApp válido com DDD (ex: 11 99999-9999).';
    }

    if (!formData.deviceType) {
      newErrors.deviceType = 'Selecione o tipo de aparelho.';
    }

    if (!formData.problemType) {
      newErrors.problemType = 'Selecione o tipo de problema ou serviço.';
    }

    if (!formData.description.trim() || formData.description.trim().length < 5) {
      newErrors.description = 'Descreva resumidamente o que está acontecendo com o aparelho.';
    }

    if (!formData.consent) {
      newErrors.consent = 'É necessário concordar com o envio dos dados via WhatsApp.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Prepare WhatsApp URL
    const deviceLabel =
      DEVICE_TYPES.find((d) => d.value === formData.deviceType)?.label || formData.deviceType;
    const problemLabel =
      PROBLEM_TYPES.find((p) => p.value === formData.problemType)?.label || formData.problemType;

    const whatsappUrl = generateContactFormWhatsappUrl({
      name: formData.name,
      phone: formData.phone,
      deviceType: deviceLabel,
      problemType: problemLabel,
      description: formData.description,
    });

    // Provide immediate user feedback and open WhatsApp
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccessfully(true);
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  return (
    <section
      id="contato"
      className="py-20 lg:py-28 relative bg-[#070c18] border-t border-white/[0.06]"
      aria-labelledby="contact-section-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface border border-white/10 mb-4">
            <span className="font-mono text-xs text-primary font-semibold tracking-wider uppercase">
              Contato & Localização
            </span>
          </div>

          <h2
            id="contact-section-title"
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight leading-[1.15] mb-5"
          >
            Descreva o problema. A Powercell orienta o próximo passo.
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Envie os detalhes do seu aparelho pelo formulário ou fale diretamente pelo WhatsApp.
          </p>
        </div>

        {/* 2-Column Split: Contact & Address Card vs. Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column (5 cols): Direct Info, Address, Google Maps */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0b1222] border border-white/[0.08] shadow-xl">
              <h3 className="font-display font-semibold text-xl text-foreground mb-6 flex items-center gap-2">
                <span>Atendimento no Centro</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              </h3>

              <div className="space-y-6">
                {/* Telefone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-surface border border-white/10 flex items-center justify-center shrink-0 text-primary mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block mb-1">
                      Telefone / WhatsApp
                    </span>
                    <a
                      href={`tel:${COMPANY_DATA.phoneRaw}`}
                      className="font-display font-bold text-lg sm:text-xl text-foreground hover:text-primary transition-colors block"
                      id="contact-panel-phone-link"
                    >
                      {COMPANY_DATA.phoneDisplay}
                    </a>
                    <div className="flex flex-wrap items-center gap-3 mt-1.5">
                      <a
                        href={COMPANY_DATA.defaultWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary font-medium hover:underline inline-flex items-center gap-1"
                      >
                        <MessageSquare className="w-3 h-3" />
                        WhatsApp Direto
                      </a>
                      <span className="text-zinc-600 text-xs">|</span>
                      <a
                        href={COMPANY_DATA.instagram.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-rose-400 font-medium hover:underline inline-flex items-center gap-1"
                      >
                        <span>Direct @powercell_sbc</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Endereço Completo */}
                <div className="flex items-start gap-4 pt-6 border-t border-white/[0.06]">
                  <div className="w-10 h-10 rounded-lg bg-surface border border-white/10 flex items-center justify-center shrink-0 text-[#D4AF37] mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block">
                        Endereço Oficial
                      </span>
                      <button
                        type="button"
                        onClick={handleCopyAddress}
                        className="inline-flex items-center gap-1 text-[11px] text-primary hover:text-sky-300 font-mono transition-colors focus:outline-none"
                        title="Copiar endereço completo"
                        id="copy-address-btn"
                      >
                        {copiedAddress ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copiar</span>
                          </>
                        )}
                      </button>
                    </div>
                    <p className="text-sm font-semibold text-foreground leading-snug">
                      {COMPANY_DATA.address.gallery}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {COMPANY_DATA.address.street} — {COMPANY_DATA.address.neighborhood}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {COMPANY_DATA.address.city}–{COMPANY_DATA.address.state}, CEP {COMPANY_DATA.address.cep}
                    </p>

                    <div className="flex flex-wrap items-center gap-2 mt-3">
                      <a
                        href={COMPANY_DATA.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        id="contact-panel-maps-btn"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-white/10 text-xs font-medium text-foreground hover:bg-surface-elevated hover:text-primary transition-colors"
                      >
                        <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>Google Maps</span>
                        <ExternalLink className="w-2.5 h-2.5 opacity-60 ml-0.5" />
                      </a>

                      <a
                        href={COMPANY_DATA.wazeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        id="contact-panel-waze-btn"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-white/10 text-xs font-medium text-foreground hover:bg-surface-elevated hover:text-sky-400 transition-colors"
                      >
                        <Compass className="w-3.5 h-3.5 text-sky-400" />
                        <span>Waze</span>
                        <ExternalLink className="w-2.5 h-2.5 opacity-60 ml-0.5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Horário */}
                <div className="flex items-start gap-4 pt-6 border-t border-white/[0.06]">
                  <div className="w-10 h-10 rounded-lg bg-surface border border-white/10 flex items-center justify-center shrink-0 text-emerald-400 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block">
                        Horário de Funcionamento
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        Aberto hoje
                      </span>
                    </div>

                    {/* Schedule List */}
                    <div className="bg-[#070c17] rounded-xl border border-white/[0.06] p-3 text-xs space-y-1.5">
                      {COMPANY_DATA.schedule.days.map((item, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center justify-between py-1 px-1.5 rounded ${
                            item.day === 'Domingo'
                              ? 'text-amber-300/90 font-medium'
                              : 'text-zinc-300'
                          }`}
                        >
                          <span className="font-mono">{item.day}</span>
                          <span className="font-semibold text-white font-mono">{item.hours}</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-[11px] text-zinc-400 mt-2 font-mono flex items-center gap-1">
                      <span className="text-amber-400 font-bold">ℹ</span>
                      <span>Feriados (como Independência do Brasil): 07:00–20:00 (podem variar).</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden bg-[#0b1222] border border-white/[0.08] shadow-xl p-3 flex flex-col gap-2">
              <div className="flex items-center justify-between px-2 py-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs font-mono text-foreground font-semibold">Localização no Mapa</span>
                </div>
                <span className="text-[11px] font-mono text-muted-foreground">Galeria Lauro Gomes</span>
              </div>

              <div className="w-full h-64 sm:h-72 rounded-xl overflow-hidden border border-white/10 relative bg-[#070c18]">
                <iframe
                  title="Localização da Powercell na Galeria Lauro Gomes em São Bernardo do Campo"
                  src={COMPANY_DATA.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(1.05) brightness(0.92)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="flex items-center justify-between px-2 pt-1 text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#D4AF37]" />
                  Av. Brg. Faria Lima, 1257 — Centro
                </span>
                <a
                  href={COMPANY_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-mono"
                >
                  Ampliar mapa ↗
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Fully Functional Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#0b1222] border border-white/[0.08] shadow-2xl">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground">
                    Solicitar Atendimento Técnico
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    Preencha os campos abaixo. Ao clicar em enviar, uma mensagem estruturada será aberta no seu WhatsApp.
                  </p>
                </div>
              </div>

              {submittedSuccessfully && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-start gap-3 text-sm text-emerald-200">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold text-emerald-300">Mensagem pronta!</strong>
                    <span>O WhatsApp da Powercell foi aberto com os dados preenchidos. Caso a janela não tenha aberto automaticamente, você pode usar o botão abaixo.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5" id="powercell-contact-form">
                {/* Honeypot hidden input */}
                <input
                  type="text"
                  name="website_hp"
                  value={formData.website_hp}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Nome */}
                  <div>
                    <label
                      htmlFor="form-input-name"
                      className="block text-xs font-mono uppercase tracking-wider text-foreground/90 font-medium mb-1.5"
                    >
                      Seu Nome *
                    </label>
                    <input
                      id="form-input-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ex: Carlos Silva"
                      autoComplete="name"
                      className={`w-full px-4 py-3 rounded-lg bg-surface border text-foreground placeholder:text-muted-foreground/60 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.name ? 'border-red-500/60 bg-red-950/10' : 'border-white/10 hover:border-white/20'
                      }`}
                      aria-invalid={errors.name ? 'true' : 'false'}
                      aria-describedby={errors.name ? 'error-name' : undefined}
                    />
                    {errors.name && (
                      <p id="error-name" className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label
                      htmlFor="form-input-phone"
                      className="block text-xs font-mono uppercase tracking-wider text-foreground/90 font-medium mb-1.5"
                    >
                      Seu WhatsApp *
                    </label>
                    <input
                      id="form-input-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      placeholder="(11) 99999-9999"
                      autoComplete="tel"
                      className={`w-full px-4 py-3 rounded-lg bg-surface border text-foreground placeholder:text-muted-foreground/60 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.phone ? 'border-red-500/60 bg-red-950/10' : 'border-white/10 hover:border-white/20'
                      }`}
                      aria-invalid={errors.phone ? 'true' : 'false'}
                      aria-describedby={errors.phone ? 'error-phone' : undefined}
                    />
                    {errors.phone && (
                      <p id="error-phone" className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Tipo de Aparelho */}
                  <div>
                    <label
                      htmlFor="form-select-device"
                      className="block text-xs font-mono uppercase tracking-wider text-foreground/90 font-medium mb-1.5"
                    >
                      Tipo de Aparelho *
                    </label>
                    <select
                      id="form-select-device"
                      name="deviceType"
                      value={formData.deviceType}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-surface border text-foreground text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.deviceType ? 'border-red-500/60' : 'border-white/10 hover:border-white/20'
                      }`}
                      aria-invalid={errors.deviceType ? 'true' : 'false'}
                      aria-describedby={errors.deviceType ? 'error-device' : undefined}
                    >
                      <option value="" disabled>
                        Selecione o aparelho...
                      </option>
                      {DEVICE_TYPES.map((d) => (
                        <option key={d.value} value={d.value} className="bg-[#0b1222] text-foreground">
                          {d.label}
                        </option>
                      ))}
                    </select>
                    {errors.deviceType && (
                      <p id="error-device" className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {errors.deviceType}
                      </p>
                    )}
                  </div>

                  {/* Assunto / Problema */}
                  <div>
                    <label
                      htmlFor="form-select-problem"
                      className="block text-xs font-mono uppercase tracking-wider text-foreground/90 font-medium mb-1.5"
                    >
                      Serviço ou Problema *
                    </label>
                    <select
                      id="form-select-problem"
                      name="problemType"
                      value={formData.problemType}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-surface border text-foreground text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.problemType ? 'border-red-500/60' : 'border-white/10 hover:border-white/20'
                      }`}
                      aria-invalid={errors.problemType ? 'true' : 'false'}
                      aria-describedby={errors.problemType ? 'error-problem' : undefined}
                    >
                      <option value="" disabled>
                        Selecione o problema...
                      </option>
                      {PROBLEM_TYPES.map((p) => (
                        <option key={p.value} value={p.value} className="bg-[#0b1222] text-foreground">
                          {p.label}
                        </option>
                      ))}
                    </select>
                    {errors.problemType && (
                      <p id="error-problem" className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {errors.problemType}
                      </p>
                    )}
                  </div>
                </div>

                {/* Descrição */}
                <div>
                  <label
                    htmlFor="form-textarea-desc"
                    className="block text-xs font-mono uppercase tracking-wider text-foreground/90 font-medium mb-1.5"
                  >
                    Descrição do Defeito *
                  </label>
                  <textarea
                    id="form-textarea-desc"
                    name="description"
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Ex: Caiu no chão e a tela apagou, mas ainda vibra ao carregar..."
                    className={`w-full px-4 py-3 rounded-lg bg-surface border text-foreground placeholder:text-muted-foreground/60 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary resize-none ${
                      errors.description ? 'border-red-500/60 bg-red-950/10' : 'border-white/10 hover:border-white/20'
                    }`}
                    aria-invalid={errors.description ? 'true' : 'false'}
                    aria-describedby={errors.description ? 'error-description' : undefined}
                  />
                  {errors.description && (
                    <p id="error-description" className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      {errors.description}
                    </p>
                  )}
                </div>

                {/* Checkbox de Consentimento */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      name="consent"
                      id="form-checkbox-consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 rounded bg-surface border-white/20 text-primary focus:ring-primary focus:ring-offset-0"
                    />
                    <span className="text-xs text-muted-foreground leading-relaxed">
                      Concordo em enviar as informações preenchidas para o WhatsApp da Powercell Assistência Técnica para receber orientação sobre o reparo.
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      {errors.consent}
                    </p>
                  )}
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="form-submit-btn"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wider hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20 active:scale-[0.98] disabled:opacity-70 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Formatando mensagem...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar e falar no WhatsApp</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
