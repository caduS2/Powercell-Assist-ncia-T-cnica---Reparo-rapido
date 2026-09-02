import React, { useState } from 'react';
import { Sparkles, ShieldCheck, Zap, Wrench, ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react';
import { COMPANY_DATA } from '../data/powercellData';
import heroLabImage from '../assets/images/hero_repair_lab_1788353762086.jpg';

export const RepairShowcase: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section className="py-20 bg-[#070b16] relative overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Padrão de Qualidade em Bancada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground tracking-tight">
            Precisão que devolve a vida ao seu <span className="text-[#FFB800]">aparelho</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mt-3">
            Trabalhamos com insumos de alta pureza, alinhamento micrométrico de tela e testes instrumentais completos antes de qualquer entrega.
          </p>
        </div>

        {/* Interactive Comparison & Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Interactive Before/After Visual (7 cols) */}
          <div className="lg:col-span-7 bg-[#0d1424] border border-white/10 rounded-3xl p-4 sm:p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4 px-2">
              <span className="text-xs font-mono text-zinc-400">
                Arraste para comparar: <strong className="text-white">Dano vs Restaurado</strong>
              </span>
              <span className="text-xs font-mono text-[#FFB800] bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/20">
                iPhone & Android
              </span>
            </div>

            {/* Comparison Container */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/10] rounded-2xl overflow-hidden select-none bg-[#0a0f1d] border border-white/10 shadow-inner">
              {/* Background Workbench Lab Image (Local Asset - 100% Reliable) */}
              <img
                src={heroLabImage}
                alt="Bancada de reparo técnico especializado da Powercell"
                className="absolute inset-0 w-full h-full object-cover opacity-40 blur-[2px] scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070c18] via-transparent to-[#070c18]/80" />

              {/* Central Smartphone Frame on Bench */}
              <div className="absolute inset-4 sm:inset-6 flex items-center justify-center">
                <div className="relative w-full max-w-[420px] aspect-[16/9] sm:aspect-[18/9] rounded-2xl sm:rounded-3xl border-4 sm:border-[6px] border-zinc-700 bg-zinc-950 shadow-2xl overflow-hidden">
                  
                  {/* Camera Punch-Hole */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-black border border-white/20 z-30 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-sky-950/80" />
                  </div>

                  {/* RESTORED SCREEN (Full Right/Base View) */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky-900 via-indigo-950 to-slate-900 flex flex-col justify-between p-4 text-white">
                    {/* Status Bar */}
                    <div className="flex items-center justify-between text-[10px] font-mono text-white/80 pt-1">
                      <span>14:29</span>
                      <div className="flex items-center gap-1.5">
                        <span>5G</span>
                        <span className="w-4 h-2 border border-white/70 rounded-sm p-0.5 flex items-center">
                          <span className="w-full h-full bg-emerald-400 rounded-2xs" />
                        </span>
                      </div>
                    </div>

                    {/* Restored Screen Centerpiece */}
                    <div className="flex flex-col items-center justify-center my-auto text-center space-y-1">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-1">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-white tracking-wide">
                        Display Calibrado 100%
                      </div>
                      <div className="text-[10px] sm:text-xs text-emerald-300 font-mono">
                        Cores Vivas • Touch Preciso • Sem Riscos
                      </div>
                    </div>

                    {/* Restored Badge */}
                    <div className="self-end">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500 text-black shadow-md">
                        Powercell 100% OK
                      </span>
                    </div>
                  </div>

                  {/* DAMAGED SCREEN (Clipped by sliderPosition) */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-white/70 flex flex-col justify-between p-4">
                      {/* Glitched Status Bar */}
                      <div className="flex items-center justify-between text-[10px] font-mono text-rose-400/80 pt-1">
                        <span className="line-through">--:--</span>
                        <span className="text-rose-400 font-bold">SEM SINAL</span>
                      </div>

                      {/* Damaged Center Content */}
                      <div className="flex flex-col items-center justify-center my-auto text-center space-y-1 opacity-75">
                        <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 mb-1">
                          <AlertTriangle className="w-6 h-6" />
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-rose-300">
                          Vidro Estilhaçado
                        </div>
                        <div className="text-[10px] sm:text-xs text-zinc-400 font-mono">
                          Touch Inoperante • Linhas no Painel
                        </div>
                      </div>

                      {/* Damaged Badge */}
                      <div className="self-start">
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full bg-rose-600 text-white shadow-md">
                          Dano Inicial
                        </span>
                      </div>

                      {/* Vertical Glitch Scanlines (Typical of damaged AMOLED) */}
                      <div className="absolute inset-0 pointer-events-none opacity-40">
                        <div className="absolute top-0 bottom-0 left-[35%] w-[3px] bg-emerald-400" />
                        <div className="absolute top-0 bottom-0 left-[55%] w-[2px] bg-purple-500" />
                        <div className="absolute top-0 bottom-0 left-[62%] w-[1px] bg-white" />
                      </div>

                      {/* SVG Spiderweb Glass Crack Effect */}
                      <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        viewBox="0 0 400 240"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Impact point */}
                        <circle cx="120" cy="110" r="14" fill="white" fillOpacity="0.3" filter="blur(2px)" />
                        <circle cx="120" cy="110" r="4" fill="white" fillOpacity="0.8" />
                        
                        {/* Radiating fracture lines */}
                        <path d="M120 110 L20 20 M120 110 L15 140 M120 110 L60 220 M120 110 L190 20 M120 110 L240 90 M120 110 L210 200 M120 110 L140 230" stroke="white" strokeWidth="1.6" strokeOpacity="0.75" />
                        <path d="M70 65 L40 90 M90 40 L130 50 M160 50 L190 70 M80 150 L50 180 M150 170 L180 160 M170 140 L210 130" stroke="white" strokeWidth="1" strokeOpacity="0.6" />
                        <path d="M120 110 L30 80 M120 110 L90 190 M120 110 L170 120" stroke="#a5f3fc" strokeWidth="0.8" strokeOpacity="0.8" />
                      </svg>
                    </div>
                  </div>

                  {/* Slider Divider Line */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_20px_rgba(255,255,255,0.9)] pointer-events-none z-20"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#FFB800] text-black flex items-center justify-center shadow-2xl font-bold text-xs border-2 border-white">
                      ↔
                    </div>
                  </div>

                  {/* Invisible Range Slider */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPosition}
                    onChange={handleSliderChange}
                    aria-label="Controle de comparação de antes e depois do reparo"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mt-3 px-2">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                Estado com defeito
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Display montado e calibrado
              </span>
            </div>
          </div>

          {/* Value Props & Guarantees (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#0d1424] border border-white/10 rounded-2xl p-5 hover:border-amber-400/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0 text-[#FFB800]">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">
                    Reparos no Mesmo Dia (Same-Day)
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Trocas de tela e conector realizadas com agilidade média de 40 minutos para você não ficar incomunicável.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#0d1424] border border-white/10 rounded-2xl p-5 hover:border-sky-400/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center shrink-0 text-sky-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">
                    Garantia Real e Transparência
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Orçamento informado previamente, sem taxas surpresa. Peças de alta durabilidade e suporte pós-reparo.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#0d1424] border border-white/10 rounded-2xl p-5 hover:border-emerald-400/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center shrink-0 text-emerald-400">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">
                    Laboratório no Centro de SBC
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Bancada equipada na Galeria Lauro Gomes para análise imediata em celulares, notebooks e computadores.
                  </p>
                </div>
              </div>
            </div>

            <a
              href={COMPANY_DATA.defaultWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 p-3.5 rounded-xl bg-[#FFB800] text-black font-bold text-sm hover:bg-[#ffc220] transition-colors shadow-lg shadow-amber-500/15"
            >
              <span>Consultar viabilidade de reparo agora</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

