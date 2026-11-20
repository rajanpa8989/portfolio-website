'use client';

import React, { useState } from 'react';
import { ExternalLink, Github, Layers, CheckCircle2, ShieldCheck, Hotel, Calendar, Users, Eye } from 'lucide-react';

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'tech'>('overview');
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <section
      id="projects"
      className="relative py-24 px-6 sm:px-8 border-t border-[#48E7A8]/10 bg-[#050A09]/70"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#48E7A8] mb-2">
            <span>03</span>
            <span className="text-[#48E7A8]/40">//</span>
            <span>SYSTEM IMPLEMENTATIONS</span>
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#F2F5F3] tracking-tight">
            SELECTED PROJECTS
          </h2>
          <div className="mt-2 w-16 h-[2px] bg-[#48E7A8]/40" />
          <p className="mt-3 font-mono text-xs text-[#71877C]">
            // FEATURED ARCHITECTURAL WORK AND PRODUCTION APPLICATIONS
          </p>
        </div>

        {/* Featured Project: ELITE HOTEL LUCKNOW */}
        <div className="relative rounded-2xl bg-[#08120F]/95 border border-[#48E7A8]/20 overflow-hidden shadow-2xl blueprint-corner blueprint-corner-tl blueprint-corner-br">
          {/* Top Bar / Project Identification */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-6 sm:px-8 py-4 border-b border-[#48E7A8]/15 bg-[#050A09]/80 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#48E7A8]" />
              <span className="text-[#48E7A8] font-semibold tracking-wider">
                FEATURED ARCHITECTURE // 01
              </span>
            </div>
            <div className="flex items-center gap-3 text-[#71877C]">
              <span>CATEGORY: FULL-STACK WEB</span>
              <span>•</span>
              <span>STATUS: PRODUCTION READY</span>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10 space-y-8">
            {/* Project Title and Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#48E7A8]/10">
              <div>
                <h3 className="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl text-[#F2F5F3] tracking-tight mb-2">
                  ELITE HOTEL LUCKNOW
                </h3>
                <p className="font-sans text-sm sm:text-base text-[#B8C7C0] max-w-2xl">
                  A modern, responsive hospitality web application providing seamless room reservations, amenity exploration, and guest inquiry management for guests and visitors in Lucknow.
                </p>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-3 self-start md:self-center shrink-0">
                <a
                  href="https://github.com/rajanpa8989"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#050A09] border border-[#48E7A8]/30 text-xs font-mono text-[#F2F5F3] hover:text-[#48E7A8] hover:border-[#48E7A8] transition-all"
                >
                  <Github size={15} />
                  <span>Repository</span>
                </a>
                <button
                  onClick={() => setPreviewOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#48E7A8] text-[#050A09] text-xs font-mono font-semibold hover:bg-[#63F0B9] transition-all shadow-[0_0_15px_rgba(72,231,168,0.25)]"
                >
                  <Eye size={15} />
                  <span>Preview UI</span>
                </button>
              </div>
            </div>

            {/* Interactive Architecture & Showcase Window */}
            <div className="relative rounded-xl border border-[#48E7A8]/20 bg-[#050A09] overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#08120F] border-b border-[#48E7A8]/15 font-mono text-[11px] text-[#71877C]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#15966C]/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#48E7A8]/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#63F0B9]/30" />
                  <span className="ml-2 text-[#B8C7C0]">elite-hotel-lucknow // interface-spec</span>
                </div>
                <div className="hidden sm:flex items-center gap-3">
                  <span className="text-[#48E7A8]">HTTPS // SECURE</span>
                  <span>RESPONSIVE: DESKTOP &amp; MOBILE</span>
                </div>
              </div>

              {/* Interactive Showcase Graphic */}
              <div className="p-6 sm:p-8 bg-gradient-to-b from-[#08120F]/60 to-[#050A09] grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Visual Card 1: Booking Flow */}
                <div className="p-4 rounded-lg bg-[#08120F] border border-[#48E7A8]/15 space-y-3">
                  <div className="flex items-center justify-between text-[#48E7A8]">
                    <Hotel size={18} />
                    <span className="font-mono text-[10px] text-[#71877C]">MODULE // 01</span>
                  </div>
                  <h4 className="font-sans font-semibold text-sm text-[#F2F5F3]">
                    Room Catalog &amp; Selection
                  </h4>
                  <p className="font-sans text-xs text-[#B8C7C0] leading-relaxed">
                    Interactive accommodation browser categorized by room tier, real-time availability status, and rate calculation.
                  </p>
                  <div className="font-mono text-[10px] text-[#48E7A8]/80">
                    STATUS: INTEGRATED
                  </div>
                </div>

                {/* Visual Card 2: Hospitality Details */}
                <div className="p-4 rounded-lg bg-[#08120F] border border-[#48E7A8]/15 space-y-3">
                  <div className="flex items-center justify-between text-[#48E7A8]">
                    <Calendar size={18} />
                    <span className="font-mono text-[10px] text-[#71877C]">MODULE // 02</span>
                  </div>
                  <h4 className="font-sans font-semibold text-sm text-[#F2F5F3]">
                    Reservation Engine
                  </h4>
                  <p className="font-sans text-xs text-[#B8C7C0] leading-relaxed">
                    Structured guest booking workflow collecting stay dates, guest count, contact details, and special service requests.
                  </p>
                  <div className="font-mono text-[10px] text-[#48E7A8]/80">
                    STATUS: VERIFIED
                  </div>
                </div>

                {/* Visual Card 3: Guest Communication */}
                <div className="p-4 rounded-lg bg-[#08120F] border border-[#48E7A8]/15 space-y-3">
                  <div className="flex items-center justify-between text-[#48E7A8]">
                    <Users size={18} />
                    <span className="font-mono text-[10px] text-[#71877C]">MODULE // 03</span>
                  </div>
                  <h4 className="font-sans font-semibold text-sm text-[#F2F5F3]">
                    Inquiry &amp; Support System
                  </h4>
                  <p className="font-sans text-xs text-[#B8C7C0] leading-relaxed">
                    Direct communications pipeline for corporate inquiries, event hall bookings, and local hospitality queries.
                  </p>
                  <div className="font-mono text-[10px] text-[#48E7A8]/80">
                    STATUS: ACTIVE
                  </div>
                </div>
              </div>
            </div>

            {/* Structured Editorial Specifications */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {/* Problem Addressed */}
              <div className="space-y-2">
                <span className="font-mono text-xs text-[#48E7A8] uppercase tracking-wider">
                  01 / Problem Addressed
                </span>
                <p className="font-sans text-sm text-[#B8C7C0] leading-relaxed">
                  Local hospitality operations often struggle with fragmented communication and cumbersome booking procedures for visitors arriving in Lucknow.
                </p>
              </div>

              {/* Technical Implementation */}
              <div className="space-y-2">
                <span className="font-mono text-xs text-[#48E7A8] uppercase tracking-wider">
                  02 / Implementation
                </span>
                <p className="font-sans text-sm text-[#B8C7C0] leading-relaxed">
                  Developed with clean modular architecture, state management for booking transitions, semantic accessibility, and mobile-first responsive layout.
                </p>
              </div>

              {/* Verified Tech Stack */}
              <div className="space-y-2">
                <span className="font-mono text-xs text-[#48E7A8] uppercase tracking-wider">
                  03 / Tech Stack
                </span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['React', 'JavaScript', 'Node.js', 'HTML5', 'CSS3', 'Git'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-[#050A09] border border-[#48E7A8]/20 font-mono text-[11px] text-[#F2F5F3]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Implemented Features List */}
            <div className="pt-6 border-t border-[#48E7A8]/10">
              <h4 className="font-mono text-xs text-[#71877C] uppercase tracking-wider mb-4">
                // IMPLEMENTED SYSTEM FEATURES
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  'Room Inventory Browsing',
                  'Interactive Booking Pipeline',
                  'Amenity & Facility Showcase',
                  'Location & Local Hospitality Guide',
                  'Direct Guest Inquiry Form',
                  'Mobile Responsive Layout',
                  'Form Input Validation',
                  'Clean Architectural Separation',
                ].map((feat) => (
                  <div
                    key={feat}
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-[#050A09]/70 border border-[#48E7A8]/10 text-xs font-sans text-[#F2F5F3]"
                  >
                    <CheckCircle2 size={14} className="text-[#48E7A8] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Preview Modal */}
      {previewOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
        >
          <div className="relative w-full max-w-3xl rounded-xl bg-[#08120F] border border-[#48E7A8]/30 shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#48E7A8]/20">
              <div className="flex items-center gap-3">
                <Hotel className="text-[#48E7A8]" size={22} />
                <div>
                  <h4 className="font-sans font-bold text-lg text-[#F2F5F3]">
                    Elite Hotel Lucknow — UI Inspection
                  </h4>
                  <span className="font-mono text-xs text-[#71877C]">
                    ARCHITECTURAL BLUEPRINT PREVIEW
                  </span>
                </div>
              </div>
              <button
                onClick={() => setPreviewOpen(false)}
                className="px-3 py-1 rounded bg-[#050A09] border border-[#48E7A8]/20 text-xs font-mono text-[#B8C7C0] hover:text-[#48E7A8]"
              >
                Close [ESC]
              </button>
            </div>

            <div className="space-y-4 text-sm text-[#B8C7C0] leading-relaxed">
              <p>
                <strong className="text-[#F2F5F3]">Project Scope:</strong> Elite Hotel Lucknow is built to streamline the visitor experience for travelers visiting the historic city of Lucknow, Uttar Pradesh.
              </p>
              <div className="p-4 rounded-lg bg-[#050A09] border border-[#48E7A8]/15 font-mono text-xs space-y-2">
                <div className="text-[#48E7A8]">// SYSTEM CHECK</div>
                <div>PROJECT: Elite Hotel Lucknow</div>
                <div>AUTHOR: Rajan Patel</div>
                <div>AFFILIATION: AIMT Computer Science &amp; Engineering</div>
                <div>STACK: HTML5, CSS3, JavaScript, Node.js</div>
                <div>STATUS: Verified Architecture</div>
              </div>
              <p className="text-xs text-[#71877C]">
                Source code and project assets are maintained in Rajan Patel&apos;s GitHub repository.
              </p>
            </div>

            <div className="pt-4 border-t border-[#48E7A8]/15 flex items-center justify-end gap-3">
              <a
                href="https://github.com/rajanpa8989"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#48E7A8] text-[#050A09] text-xs font-mono font-semibold hover:bg-[#63F0B9]"
              >
                <Github size={14} />
                <span>Visit GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
