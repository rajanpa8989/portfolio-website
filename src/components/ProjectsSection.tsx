'use client';

import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Hotel,
  Calendar,
  Users,
  Eye,
  Cpu,
  Binary,
  Layers,
  Terminal,
  Clock,
  HardDrive,
  GitBranch,
} from 'lucide-react';

interface ProjectModalData {
  title: string;
  category: string;
  scope: string;
  repoUrl: string;
  tech: string[];
  specs: { label: string; value: string }[];
}

export default function ProjectsSection() {
  const [modalProject, setModalProject] = useState<ProjectModalData | null>(null);

  const osPlaygroundData: ProjectModalData = {
    title: 'Operating System Playground',
    category: 'ALGORITHMIC SIMULATION & SYSTEMS LAB',
    scope:
      'An interactive laboratory and deterministic simulation platform enabling students and engineers to understand core operating system internals — from preemptive CPU scheduling and memory translation to Banker’s deadlock safety.',
    repoUrl: 'https://github.com/rajanpa8989/Operating-system-playground.git',
    tech: ['Next.js 14', 'TypeScript', 'React 18', 'Tailwind CSS', 'Vitest', 'Zod', 'SVG Engines'],
    specs: [
      { label: 'SIMULATION MODEL', value: 'Deterministic, pure TypeScript client-side engines' },
      { label: 'TEST COVERAGE', value: '35 Vitest unit tests covering preemption & deadlock safety' },
      { label: 'CPU SCHEDULERS', value: 'FCFS, SJF, SRTF, Round Robin (Quantum), Priority' },
      { label: 'MEMORY LAB', value: 'First/Best/Worst Fit, Paging MMU, FIFO/LRU/Optimal, Segmentation' },
      { label: 'DEADLOCK ENGINE', value: "Banker's Algorithm, Safe Sequences, RAG DFS Cycle Detection" },
      { label: 'REPOSITORY', value: 'github.com/rajanpa8989/Operating-system-playground' },
    ],
  };

  const eliteHotelData: ProjectModalData = {
    title: 'Elite Hotel Lucknow',
    category: 'FULL-STACK HOSPITALITY WEB APPLICATION',
    scope:
      'A modern hospitality platform built to streamline room reservations, amenity exploration, and local inquiry management for visitors arriving in the historic city of Lucknow.',
    repoUrl: 'https://github.com/rajanpa8989',
    tech: ['React', 'JavaScript', 'Node.js', 'HTML5', 'CSS3', 'Git'],
    specs: [
      { label: 'ARCHITECTURE', value: 'Modular full-stack web application' },
      { label: 'BOOKING ENGINE', value: 'Dynamic room catalog & stay date selection' },
      { label: 'COMMUNICATION', value: 'Direct hospitality inquiry pipeline' },
      { label: 'RESPONSIVENESS', value: 'Mobile-first fluid UI with accessible forms' },
      { label: 'STATUS', value: 'Verified architecture and production ready' },
      { label: 'AUTHOR', value: 'Rajan Patel (AIMT Lucknow)' },
    ],
  };

  return (
    <section
      id="projects"
      className="relative py-24 px-6 sm:px-8 border-t border-[#48E7A8]/10 bg-[#050A09]/70"
    >
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Section Header */}
        <div>
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
            // FEATURED ARCHITECTURAL WORK, SIMULATION ENGINES &amp; PRODUCTION APPLICATIONS
          </p>
        </div>

        {/* ========================================================================= */}
        {/* PROJECT 1: ELITE HOTEL LUCKNOW                                            */}
        {/* ========================================================================= */}
        <div className="relative rounded-2xl bg-[#08120F]/95 border border-[#48E7A8]/20 overflow-hidden shadow-2xl blueprint-corner blueprint-corner-tl blueprint-corner-br">
          {/* Top Bar */}
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
            {/* Project Header */}
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
                  onClick={() => setModalProject(eliteHotelData)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#48E7A8] text-[#050A09] text-xs font-mono font-semibold hover:bg-[#63F0B9] transition-all shadow-[0_0_15px_rgba(72,231,168,0.25)]"
                >
                  <Eye size={15} />
                  <span>Inspect Spec</span>
                </button>
              </div>
            </div>

            {/* Architecture Graphic */}
            <div className="relative rounded-xl border border-[#48E7A8]/20 bg-[#050A09] overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#08120F] border-b border-[#48E7A8]/15 font-mono text-[11px] text-[#71877C]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#15966C]/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#48E7A8]/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#63F0B9]/30" />
                  <span className="ml-2 text-[#B8C7C0]">elite-hotel-lucknow // system-spec</span>
                </div>
                <div className="hidden sm:flex items-center gap-3">
                  <span className="text-[#48E7A8]">HTTPS // SECURE</span>
                  <span>RESPONSIVE: DESKTOP &amp; MOBILE</span>
                </div>
              </div>

              <div className="p-6 sm:p-8 bg-gradient-to-b from-[#08120F]/60 to-[#050A09] grid grid-cols-1 md:grid-cols-3 gap-4">
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

            {/* Specifications */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="space-y-2">
                <span className="font-mono text-xs text-[#48E7A8] uppercase tracking-wider">
                  01 / Problem Addressed
                </span>
                <p className="font-sans text-sm text-[#B8C7C0] leading-relaxed">
                  Local hospitality operations often struggle with fragmented communication and cumbersome booking procedures for visitors arriving in Lucknow.
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-xs text-[#48E7A8] uppercase tracking-wider">
                  02 / Implementation
                </span>
                <p className="font-sans text-sm text-[#B8C7C0] leading-relaxed">
                  Developed with clean modular architecture, state management for booking transitions, semantic accessibility, and mobile-first responsive layout.
                </p>
              </div>

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

            {/* Features */}
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

        {/* ========================================================================= */}
        {/* PROJECT 2: OPERATING SYSTEM PLAYGROUND                                   */}
        {/* ========================================================================= */}
        <div className="relative rounded-2xl bg-[#08120F]/95 border border-[#48E7A8]/20 overflow-hidden shadow-2xl blueprint-corner blueprint-corner-tl blueprint-corner-br">
          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-6 sm:px-8 py-4 border-b border-[#48E7A8]/15 bg-[#050A09]/80 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#63F0B9]" />
              <span className="text-[#63F0B9] font-semibold tracking-wider">
                FEATURED ARCHITECTURE // 02
              </span>
            </div>
            <div className="flex items-center gap-3 text-[#71877C]">
              <span>CATEGORY: SYSTEMS &amp; SIMULATION</span>
              <span>•</span>
              <span className="text-[#48E7A8]">35 VITEST TESTS PASSING</span>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10 space-y-8">
            {/* Project Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#48E7A8]/10">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-[10px] font-mono text-[#48E7A8] bg-[#15966C]/15 border border-[#48E7A8]/25 mb-2">
                  <Terminal size={12} />
                  <span>INTERACTIVE OS LABORATORY &amp; ALGORITHM SIMULATOR</span>
                </div>
                <h3 className="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl text-[#F2F5F3] tracking-tight mb-2">
                  OPERATING SYSTEM PLAYGROUND
                </h3>
                <p className="font-sans text-sm sm:text-base text-[#B8C7C0] max-w-2xl">
                  A high-craft, laboratory-grade interactive platform enabling students and developers to experiment with core OS algorithms: preemptive CPU scheduling, memory management, and deadlock resolution through real-time visualizations.
                </p>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-3 self-start md:self-center shrink-0">
                <a
                  href="https://github.com/rajanpa8989/Operating-system-playground.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#050A09] border border-[#48E7A8]/30 text-xs font-mono text-[#F2F5F3] hover:text-[#48E7A8] hover:border-[#48E7A8] transition-all"
                >
                  <Github size={15} />
                  <span>GitHub Repository</span>
                </a>
                <button
                  onClick={() => setModalProject(osPlaygroundData)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#48E7A8] text-[#050A09] text-xs font-mono font-semibold hover:bg-[#63F0B9] transition-all shadow-[0_0_15px_rgba(72,231,168,0.25)]"
                >
                  <Eye size={15} />
                  <span>Inspect Spec</span>
                </button>
              </div>
            </div>

            {/* Architecture Graphic / Interactive Modules Grid */}
            <div className="relative rounded-xl border border-[#48E7A8]/20 bg-[#050A09] overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#08120F] border-b border-[#48E7A8]/15 font-mono text-[11px] text-[#71877C]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#15966C]/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#48E7A8]/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#63F0B9]/30" />
                  <span className="ml-2 text-[#B8C7C0]">os-playground // kernel-modules</span>
                </div>
                <div className="hidden sm:flex items-center gap-3">
                  <span className="text-[#48E7A8]">CLIENT-SIDE DETERMINISTIC</span>
                  <span>ZERO LATENCY</span>
                </div>
              </div>

              <div className="p-6 sm:p-8 bg-gradient-to-b from-[#08120F]/60 to-[#050A09] grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Module 1: CPU Scheduling */}
                <div className="p-4 rounded-lg bg-[#08120F] border border-[#48E7A8]/15 space-y-3">
                  <div className="flex items-center justify-between text-[#48E7A8]">
                    <Clock size={18} />
                    <span className="font-mono text-[10px] text-[#71877C]">MODULE // 01</span>
                  </div>
                  <h4 className="font-sans font-semibold text-sm text-[#F2F5F3]">
                    CPU Scheduling Simulator
                  </h4>
                  <p className="font-sans text-xs text-[#B8C7C0] leading-relaxed">
                    Interactive SVG Gantt timeline with scrubber, preemption points, live ready queue, and full metrics (AT, BT, CT, TAT, WT, RT) for FCFS, SJF, SRTF, Round Robin &amp; Priority.
                  </p>
                  <div className="font-mono text-[10px] text-[#48E7A8]/80">
                    ALGORITHMS: 5 IMPLEMENTED
                  </div>
                </div>

                {/* Module 2: Memory Management */}
                <div className="p-4 rounded-lg bg-[#08120F] border border-[#48E7A8]/15 space-y-3">
                  <div className="flex items-center justify-between text-[#48E7A8]">
                    <HardDrive size={18} />
                    <span className="font-mono text-[10px] text-[#71877C]">MODULE // 02</span>
                  </div>
                  <h4 className="font-sans font-semibold text-sm text-[#F2F5F3]">
                    Memory Management Lab
                  </h4>
                  <p className="font-sans text-xs text-[#B8C7C0] leading-relaxed">
                    Contiguous allocation (First/Best/Worst Fit), MMU logical-to-physical address translation, Page Replacement (FIFO, LRU, Optimal), and Belady&apos;s anomaly interactive proof.
                  </p>
                  <div className="font-mono text-[10px] text-[#48E7A8]/80">
                    PAGING &amp; SEGMENTATION: VERIFIED
                  </div>
                </div>

                {/* Module 3: Deadlock & Processes */}
                <div className="p-4 rounded-lg bg-[#08120F] border border-[#48E7A8]/15 space-y-3">
                  <div className="flex items-center justify-between text-[#48E7A8]">
                    <GitBranch size={18} />
                    <span className="font-mono text-[10px] text-[#71877C]">MODULE // 03</span>
                  </div>
                  <h4 className="font-sans font-semibold text-sm text-[#F2F5F3]">
                    Deadlock &amp; Process Lifecycle
                  </h4>
                  <p className="font-sans text-xs text-[#B8C7C0] leading-relaxed">
                    Banker&apos;s Safety &amp; Request Algorithm with safe sequence derivation, Resource Allocation Graph (RAG) DFS cycle detection, and 5-state process machine with PCB register context switching.
                  </p>
                  <div className="font-mono text-[10px] text-[#48E7A8]/80">
                    BANKER&apos;S &amp; RAG: ENGINE ACTIVE
                  </div>
                </div>
              </div>
            </div>

            {/* Structured Specifications */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="space-y-2">
                <span className="font-mono text-xs text-[#48E7A8] uppercase tracking-wider">
                  01 / Problem Addressed
                </span>
                <p className="font-sans text-sm text-[#B8C7C0] leading-relaxed">
                  Operating system concepts like scheduling starvation, external fragmentation, and deadlock safety are hard to grasp through abstract equations without hands-on visual feedback.
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-xs text-[#48E7A8] uppercase tracking-wider">
                  02 / Implementation
                </span>
                <p className="font-sans text-sm text-[#B8C7C0] leading-relaxed">
                  Engineered with pure, deterministic TypeScript simulation cores, custom SVG timeline generators, step-by-step playback scrubbers, and strict Zod workload validation.
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-xs text-[#48E7A8] uppercase tracking-wider">
                  03 / Tech Stack
                </span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['Next.js 14', 'TypeScript', 'React 18', 'Tailwind CSS', 'Vitest', 'Zod', 'SVG'].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-[#050A09] border border-[#48E7A8]/20 font-mono text-[11px] text-[#F2F5F3]"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Implemented Features */}
            <div className="pt-6 border-t border-[#48E7A8]/10">
              <h4 className="font-mono text-xs text-[#71877C] uppercase tracking-wider mb-4">
                // VERIFIED LABORATORY CAPABILITIES
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  'Dynamic SVG Gantt Timeline Scrubber',
                  'FCFS, SJF, SRTF, RR & Priority',
                  'Contiguous Hole Splitting & Coalescing',
                  'MMU Paging Address Translation',
                  'Page Replacement (FIFO, LRU, Optimal)',
                  'Belady’s Anomaly Interactive Case',
                  'Banker’s Safety Algorithm & Sequences',
                  'RAG Depth-First Cycle Detection',
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

      {/* Interactive Blueprint Inspection Modal */}
      {modalProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
        >
          <div className="relative w-full max-w-3xl rounded-xl bg-[#08120F] border border-[#48E7A8]/30 shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#48E7A8]/20">
              <div>
                <h4 className="font-sans font-bold text-xl text-[#F2F5F3]">
                  {modalProject.title}
                </h4>
                <span className="font-mono text-xs text-[#48E7A8]">
                  {modalProject.category}
                </span>
              </div>
              <button
                onClick={() => setModalProject(null)}
                className="px-3 py-1 rounded bg-[#050A09] border border-[#48E7A8]/20 text-xs font-mono text-[#B8C7C0] hover:text-[#48E7A8]"
              >
                Close [ESC]
              </button>
            </div>

            <div className="space-y-4 text-sm text-[#B8C7C0] leading-relaxed">
              <p>{modalProject.scope}</p>

              {/* Technical Specifications Sheet */}
              <div className="p-4 rounded-lg bg-[#050A09] border border-[#48E7A8]/15 font-mono text-xs space-y-2.5">
                <div className="text-[#48E7A8] font-semibold">// ARCHITECTURAL SPECIFICATION</div>
                {modalProject.specs.map((item) => (
                  <div key={item.label} className="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-white/[0.04] pb-1.5 last:border-none">
                    <span className="text-[#71877C]">{item.label}:</span>
                    <span className="text-[#F2F5F3] sm:text-right">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Verified Stack Chips */}
              <div>
                <span className="font-mono text-xs text-[#71877C] uppercase block mb-2">
                  TECHNOLOGY STACK:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {modalProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-[#050A09] border border-[#48E7A8]/25 font-mono text-xs text-[#48E7A8]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#48E7A8]/15 flex items-center justify-end gap-3">
              <a
                href={modalProject.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#48E7A8] text-[#050A09] text-xs font-mono font-semibold hover:bg-[#63F0B9] transition-all"
              >
                <Github size={14} />
                <span>Visit GitHub Repository</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
