import React from 'react';

export default function BackgroundEngine() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* LAYER 1: Deep Near-Black Base is on body (#050A09) */}

      {/* LAYER 2: Subtle Engineering Grid */}
      <div className="absolute inset-0 engineering-grid opacity-80" />

      {/* LAYER 3: Cinematic Emerald Ambient Lighting (Originating Upper-Left) */}
      <div className="absolute -top-[10%] -left-[10%] w-[85vw] max-w-[1200px] h-[85vh] max-h-[1000px] hero-emerald-glow rounded-full filter blur-[70px] animate-pulse-subtle" />
      <div className="absolute top-[5%] left-[5%] w-[45vw] max-w-[700px] h-[50vh] hero-emerald-glow-subtle rounded-full filter blur-[50px]" />
      {/* Secondary very faint ambient depth in bottom-right */}
      <div className="absolute -bottom-[20%] -right-[15%] w-[55vw] h-[55vh] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(11,30,24,0.18)_0%,_transparent_70%)] filter blur-[90px]" />

      {/* LAYER 4: Technical Horizontal Circuit Lines & Endpoint Dots */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lineGradLeft" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#48E7A8" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#15966C" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#15966C" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGradRight" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#48E7A8" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#15966C" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#15966C" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* --- Left edge technical traces --- */}
        {/* Line 1 - Top Left Trace with vertical drop & node */}
        <g className="animate-circuit-pulse opacity-60">
          <path
            d="M 0 140 L 220 140 L 250 170 L 380 170"
            fill="none"
            stroke="url(#lineGradLeft)"
            strokeWidth="1"
          />
          <circle cx="380" cy="170" r="2.5" fill="#48E7A8" />
          <circle cx="220" cy="140" r="1.5" fill="#48E7A8" opacity="0.8" />
        </g>

        {/* Line 2 - Mid-Upper Left Hairline with dotted segment */}
        <g className="opacity-45">
          <path
            d="M 0 280 L 160 280"
            fill="none"
            stroke="#15966C"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <path
            d="M 160 280 L 310 280"
            fill="none"
            stroke="url(#lineGradLeft)"
            strokeWidth="1"
          />
          <circle cx="310" cy="280" r="2" fill="#63F0B9" />
        </g>

        {/* Line 3 - Hero Middle Left circuit */}
        <g className="opacity-50">
          <path
            d="M 0 490 L 140 490 L 165 515 L 290 515"
            fill="none"
            stroke="url(#lineGradLeft)"
            strokeWidth="1"
          />
          <circle cx="290" cy="515" r="2" fill="#48E7A8" />
          <line
            x1="140"
            y1="490"
            x2="140"
            y2="475"
            stroke="#48E7A8"
            strokeWidth="1"
            opacity="0.4"
          />
          <circle cx="140" cy="475" r="1.5" fill="#48E7A8" />
        </g>

        {/* Line 4 - Lower Left blueprint trace */}
        <g className="opacity-40">
          <path
            d="M 0 720 L 200 720 L 240 680 L 340 680"
            fill="none"
            stroke="url(#lineGradLeft)"
            strokeWidth="1"
          />
          <circle cx="340" cy="680" r="2" fill="#48E7A8" />
        </g>

        {/* --- Right edge technical traces --- */}
        {/* Line 5 - Upper Right Trace */}
        <g className="opacity-50">
          <path
            d="M 100% 210 L calc(100% - 240px) 210 L calc(100% - 270px) 240 L calc(100% - 390px) 240"
            fill="none"
            stroke="url(#lineGradRight)"
            strokeWidth="1"
          />
          {/* Note: SVG calc can be handled with coordinate positions */}
        </g>
      </svg>

      {/* Responsive Left/Right Technical Traces using pure CSS/SVG positioning */}
      <div className="absolute top-[210px] right-0 w-[420px] h-[70px] hidden md:block opacity-50">
        <svg viewBox="0 0 420 70" className="w-full h-full fill-none">
          <path
            d="M 420 20 L 180 20 L 150 50 L 30 50"
            stroke="#15966C"
            strokeWidth="1"
            strokeOpacity="0.45"
          />
          <line
            x1="180"
            y1="20"
            x2="180"
            y2="8"
            stroke="#48E7A8"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
          <circle cx="180" cy="8" r="1.5" fill="#48E7A8" />
          <circle cx="30" cy="50" r="2.5" fill="#48E7A8" className="animate-dot-pulse" />
          <line
            x1="280"
            y1="20"
            x2="340"
            y2="20"
            stroke="#63F0B9"
            strokeWidth="1.5"
            strokeDasharray="2 3"
            strokeOpacity="0.7"
          />
        </svg>
      </div>

      <div className="absolute top-[560px] right-0 w-[360px] h-[60px] hidden lg:block opacity-40">
        <svg viewBox="0 0 360 60" className="w-full h-full fill-none">
          <path
            d="M 360 30 L 190 30 L 160 5 L 40 5"
            stroke="#15966C"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
          <circle cx="40" cy="5" r="2" fill="#48E7A8" />
        </svg>
      </div>

      {/* LAYER 5: Asymmetrical Technical Illustrations (Subtle Opacity, No Text Overlap) */}
      
      {/* 5A. Code Symbol </> (Upper Left, near trace) */}
      <div className="absolute top-[120px] left-[5%] opacity-15 hidden md:block">
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#48E7A8" strokeWidth="1.2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      </div>

      {/* 5B. Gear Outline (Upper Right, technical aesthetic) */}
      <div className="absolute top-[90px] right-[7%] opacity-12 hidden md:block">
        <svg width="68" height="68" viewBox="0 0 24 24" fill="none" stroke="#15966C" strokeWidth="1">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* 5C. Small Circuit / Node Network (Mid Left) */}
      <div className="absolute top-[380px] left-[3%] opacity-15 hidden lg:block">
        <svg width="84" height="84" viewBox="0 0 100 100" fill="none" stroke="#48E7A8" strokeWidth="1">
          <circle cx="20" cy="20" r="4" fill="#15966C" fillOpacity="0.4" />
          <circle cx="70" cy="30" r="3" fill="#48E7A8" fillOpacity="0.6" />
          <circle cx="45" cy="75" r="4" fill="#15966C" fillOpacity="0.4" />
          <path d="M 20 20 L 70 30 L 45 75 Z" strokeDasharray="3 3" />
          <line x1="20" y1="20" x2="10" y2="50" />
          <line x1="70" y1="30" x2="95" y2="30" />
          <circle cx="95" cy="30" r="1.5" fill="#48E7A8" />
        </svg>
      </div>

      {/* 5D. Minimal Engineering Crosshair & Coordinates (Lower Right) */}
      <div className="absolute top-[640px] right-[4%] opacity-20 hidden md:block font-mono text-[10px] text-[#71877C] tracking-widest">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" stroke="#48E7A8" strokeWidth="0.8">
          <circle cx="25" cy="25" r="18" strokeDasharray="2 3" />
          <line x1="25" y1="2" x2="25" y2="48" />
          <line x1="2" y1="25" x2="48" y2="25" />
          <circle cx="25" cy="25" r="2" fill="#48E7A8" />
        </svg>
        <span className="block mt-1 text-[#48E7A8]/60">GRID.LOC // 26.84N</span>
      </div>

      {/* 5E. Subtle Terminal Marking (Bottom Left) */}
      <div className="absolute bottom-[40px] left-[4%] opacity-20 font-mono text-[11px] text-[#71877C] hidden sm:block">
        <div className="flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#48E7A8]/70" />
          <span>SYS.SPEC: ENG-PORTFOLIO // READY</span>
        </div>
      </div>
    </div>
  );
}
