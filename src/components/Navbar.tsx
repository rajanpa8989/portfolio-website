'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050A09]/85 backdrop-blur-md border-b border-[#48E7A8]/10 py-3.5 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Monogram Brand */}
        <a
          href="#home"
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#48E7A8]"
          aria-label="Rajan Patel Home"
        >
          {/* Custom Geometric RP Monogram */}
          <div className="relative w-8 h-8 rounded-lg bg-[#08120F] border border-[#48E7A8]/30 flex items-center justify-center transition-all duration-300 group-hover:border-[#48E7A8] group-hover:shadow-[0_0_12px_rgba(72,231,168,0.25)]">
            <span className="font-mono text-xs font-bold text-[#48E7A8] tracking-wider">
              RP
            </span>
            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-[#48E7A8] rounded-full opacity-80" />
          </div>

          <div className="flex flex-col">
            <span className="font-sans font-semibold text-sm tracking-tight text-[#F2F5F3] group-hover:text-[#48E7A8] transition-colors">
              Rajan Patel
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-[#71877C] hidden sm:block">
              ENGINEERING // DEV
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative py-1 text-xs font-mono tracking-wider uppercase transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#48E7A8] ${
                  isActive
                    ? 'text-[#48E7A8]'
                    : 'text-[#B8C7C0] hover:text-[#F2F5F3]'
                }`}
              >
                <span>{item.name}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#48E7A8] shadow-[0_0_8px_#48E7A8]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Status indicator on desktop */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[#08120F] border border-[#48E7A8]/15 text-[11px] font-mono text-[#B8C7C0]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#48E7A8] animate-pulse" />
          <span className="text-[#71877C]">STATUS:</span>
          <span className="text-[#48E7A8]">AVAILABLE</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md border border-[#48E7A8]/20 text-[#B8C7C0] hover:text-[#48E7A8] hover:border-[#48E7A8]/40 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#48E7A8]"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#48E7A8]/20 bg-[#08120F]/95 backdrop-blur-xl px-6 py-6 transition-all duration-300">
          <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2 text-sm font-mono tracking-wider uppercase border-b border-white/[0.05] transition-colors ${
                    isActive
                      ? 'text-[#48E7A8] font-medium'
                      : 'text-[#B8C7C0] hover:text-[#F2F5F3]'
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#48E7A8]" />
                  )}
                </a>
              );
            })}
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#71877C]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#48E7A8] animate-pulse" />
              <span>CURRENTLY LEARNING & BUILDING</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
