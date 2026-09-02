import React from 'react';

interface PowercellLogoProps {
  variant?: 'header' | 'badge' | 'footer' | 'icon-only' | 'hero';
  className?: string;
  showSubtitle?: boolean;
}

export const PowercellLogo: React.FC<PowercellLogoProps> = ({
  variant = 'header',
  className = '',
  showSubtitle = true,
}) => {
  if (variant === 'icon-only') {
    return (
      <div className={`relative flex items-center justify-center bg-black rounded-lg p-1.5 border border-white/10 ${className}`}>
        {/* Stylized Power Icon */}
        <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
          <circle cx="20" cy="20" r="18" fill="#05070d" />
          <path
            d="M14 12.5 A11 11 0 1 0 26 12.5"
            stroke="#FFFFFF"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <line
            x1="20"
            y1="6"
            x2="20"
            y2="18"
            stroke="#FFB800"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div
        className={`relative inline-flex flex-col items-center justify-center bg-black p-4 sm:p-5 rounded-2xl border border-white/15 shadow-2xl shadow-black/80 select-none ${className}`}
      >
        {/* Main Logo Text with Power Button */}
        <div className="flex items-center tracking-tight font-display font-black text-2xl sm:text-3xl">
          <span className="text-white">P</span>
          
          {/* O as Power Button */}
          <div className="relative inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 mx-0.5">
            <svg viewBox="0 0 32 32" className="w-full h-full" fill="none">
              <path
                d="M11 10.5 A9 9 0 1 0 21 10.5"
                stroke="#FFFFFF"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
              <line
                x1="16"
                y1="4.5"
                x2="16"
                y2="15"
                stroke="#FFFFFF"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <span className="text-white">WER</span>
          <span className="text-[#FFB800] ml-0.5 drop-shadow-[0_0_12px_rgba(255,184,0,0.4)]">CELL</span>
        </div>

        {/* Subtitle */}
        {showSubtitle && (
          <div className="mt-1.5 flex items-center gap-1.5 text-[11px] sm:text-xs text-white/90 font-serif tracking-[0.18em] italic">
            <span>—</span>
            <span className="font-normal uppercase tracking-wider not-italic text-[10px] text-white/80 font-sans">
              Assistência técnica
            </span>
            <span>—</span>
          </div>
        )}
      </div>
    );
  }

  // Header & Footer variants
  return (
    <div className={`flex flex-col select-none ${className}`}>
      <div className="flex items-center tracking-tight font-display font-black text-xl sm:text-2xl leading-none">
        <span className="text-white">P</span>
        
        {/* O as Power Button */}
        <div className="relative inline-flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 mx-0.5">
          <svg viewBox="0 0 32 32" className="w-full h-full" fill="none">
            <path
              d="M10.5 10 A9 9 0 1 0 21.5 10"
              stroke="#FFFFFF"
              strokeWidth="3.4"
              strokeLinecap="round"
            />
            <line
              x1="16"
              y1="4"
              x2="16"
              y2="14"
              stroke="#FFFFFF"
              strokeWidth="3.4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <span className="text-white">WER</span>
        <span className="text-[#FFB800] ml-0.5 drop-shadow-[0_0_8px_rgba(255,184,0,0.35)]">CELL</span>
      </div>

      {showSubtitle && (
        <div className="flex items-center gap-1 text-[9px] sm:text-[10px] text-zinc-300 font-serif tracking-widest mt-1">
          <span className="text-[#FFB800] font-sans text-xs leading-none">—</span>
          <span className="uppercase tracking-[0.16em] font-sans text-[8.5px] sm:text-[9.5px] font-medium text-zinc-300">
            Assistência técnica
          </span>
          <span className="text-[#FFB800] font-sans text-xs leading-none">—</span>
        </div>
      )}
    </div>
  );
};
