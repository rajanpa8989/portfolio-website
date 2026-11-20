import React from 'react';
import { ArrowUp, Github, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#48E7A8]/15 bg-[#050A09] py-12 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Author / Identity Branding */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#48E7A8]" />
            <span className="font-sans font-bold text-base text-[#F2F5F3] tracking-tight">
              Rajan Patel
            </span>
          </div>
          <span className="font-mono text-xs text-[#71877C] mt-1">
            B.Tech CSE Student &amp; Software Developer
          </span>
        </div>

        {/* Quick Links & Back to Top */}
        <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-[#B8C7C0]">
          <a
            href="https://github.com/rajanpa8989"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#48E7A8] transition-colors"
          >
            <Github size={14} />
            <span>GitHub</span>
          </a>
          <a
            href="mailto:rajanpa8989@gmail.com"
            className="flex items-center gap-1.5 hover:text-[#48E7A8] transition-colors"
          >
            <Mail size={14} />
            <span>Email</span>
          </a>
          <a
            href="#home"
            className="flex items-center gap-1 text-[#48E7A8] hover:text-[#63F0B9] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </a>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-[#48E7A8]/10 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] text-[#71877C]">
        <div>© {currentYear} Rajan Patel. All rights reserved.</div>
        <div className="text-[#48E7A8]/60">SYS.ENG // EMERALD ARCHITECTURE</div>
      </div>
    </footer>
  );
}
