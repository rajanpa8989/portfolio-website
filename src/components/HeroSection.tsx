import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center pt-24 pb-16 px-6 sm:px-8 overflow-hidden"
    >
      {/* Blueprint Hero Frame Annotations */}
      <div className="absolute top-28 left-8 hidden lg:flex flex-col gap-1 font-mono text-[10px] text-[#71877C] tracking-widest uppercase">
        <span className="text-[#48E7A8]/60">// ARCHITECTURE: SEC.00</span>
        <span>SYS.IDENT: DEV.ENGINE</span>
      </div>

      <div className="absolute top-28 right-8 hidden lg:flex flex-col gap-1 items-end font-mono text-[10px] text-[#71877C] tracking-widest uppercase">
        <span className="text-[#48E7A8]/60">COORD: 26.8467° N, 80.9462° E</span>
        <span>NODE: AIMT.LKO // 2028</span>
      </div>

      {/* Main Centered Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Availability / Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#08120F]/90 border border-[#48E7A8]/20 mb-8 backdrop-blur-sm transition-all hover:border-[#48E7A8]/40">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#48E7A8] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#48E7A8]" />
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-[#B8C7C0] font-medium">
            CURRENTLY LEARNING &amp; BUILDING
          </span>
        </div>

        {/* Dominant Main Heading: RAJAN PATEL */}
        <h1 className="font-sans font-bold uppercase tracking-tight text-[#48E7A8] text-5xl sm:text-7xl md:text-8xl lg:text-[96px] leading-[0.95] mb-5 select-none drop-shadow-[0_2px_24px_rgba(72,231,168,0.22)]">
          RAJAN PATEL
        </h1>

        {/* Professional Role */}
        <p className="font-sans font-medium text-[#F2F5F3] text-xl sm:text-2xl md:text-3xl lg:text-[32px] tracking-tight mb-4">
          B.Tech CSE Student &amp; Software Developer
        </p>

        {/* Monospace Specialization Line */}
        <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-[#B8C7C0] text-sm sm:text-base md:text-[17px] mb-10 max-w-2xl">
          <span className="hover:text-[#48E7A8] transition-colors">DSA &amp; Problem Solving</span>
          <span className="text-[#48E7A8]/40">•</span>
          <span className="hover:text-[#48E7A8] transition-colors">Software Development</span>
          <span className="text-[#48E7A8]/40">•</span>
          <span className="hover:text-[#48E7A8] transition-colors">Full-Stack Development</span>
        </div>

        {/* Dual CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Primary Action: View Projects */}
          <a
            href="#projects"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#48E7A8] text-[#050A09] font-sans font-semibold text-base tracking-tight transition-all duration-200 hover:bg-[#63F0B9] hover:shadow-[0_0_24px_rgba(72,231,168,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#48E7A8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050A09]"
          >
            <span>View Projects</span>
            <ArrowRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>

          {/* Secondary Action: Contact Me */}
          <a
            href="#contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-transparent border border-[#48E7A8]/40 text-[#48E7A8] font-sans font-semibold text-base tracking-tight transition-all duration-200 hover:bg-[#15966C]/10 hover:border-[#48E7A8] hover:text-[#63F0B9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#48E7A8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050A09]"
          >
            <span>Contact Me</span>
            <ArrowRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1 text-[#48E7A8]/80 group-hover:text-[#63F0B9]"
            />
          </a>
        </div>

        {/* Blueprint Bottom Hash Marks */}
        <div className="mt-14 flex items-center gap-3 opacity-30 font-mono text-[10px] text-[#71877C]">
          <span>[SYSTEM: ACTIVE]</span>
          <span className="w-8 h-[1px] bg-[#48E7A8]" />
          <span>[INPUT: READY]</span>
        </div>
      </div>
    </section>
  );
}
