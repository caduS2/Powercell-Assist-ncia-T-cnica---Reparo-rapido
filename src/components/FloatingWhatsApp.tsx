import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_DATA } from '../data/powercellData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      {/* Tooltip */}
      <div
        id="floating-whatsapp-tooltip"
        role="tooltip"
        className={`hidden sm:block px-3 py-1.5 rounded-lg bg-[#0b1222]/95 border border-white/15 text-xs text-foreground font-medium shadow-xl backdrop-blur-sm transition-all duration-200 pointer-events-none ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span>Falar com a Powercell</span>
      </div>

      {/* Floating CTA Button */}
      <a
        href={COMPANY_DATA.defaultWhatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        aria-label="Falar com a Powercell pelo WhatsApp"
        aria-describedby="floating-whatsapp-tooltip"
        id="floating-whatsapp-btn"
        className="relative group flex items-center justify-center w-14 h-14 min-w-[44px] min-h-[44px] rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50"
      >
        {/* Subtle Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 relative z-10 fill-current" />
      </a>
    </div>
  );
};
