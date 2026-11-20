import React from 'react';
import { GraduationCap, BookOpen, Cpu, Terminal } from 'lucide-react';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 sm:px-8 border-t border-[#48E7A8]/10 bg-[#050A09]/60 backdrop-blur-sm"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#48E7A8] mb-2">
            <span>01</span>
            <span className="text-[#48E7A8]/40">//</span>
            <span>PROFILE &amp; BACKGROUND</span>
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#F2F5F3] tracking-tight">
            ABOUT ME
          </h2>
          <div className="mt-2 w-16 h-[2px] bg-[#48E7A8]/40" />
        </div>

        {/* Editorial Content & Education Spec Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Editorial Summary */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative p-6 sm:p-8 rounded-xl bg-[#08120F]/90 border border-[#48E7A8]/15 blueprint-corner blueprint-corner-tl blueprint-corner-br">
              <p className="font-sans text-base sm:text-lg leading-relaxed text-[#B8C7C0]">
                I&apos;m <span className="text-[#F2F5F3] font-medium">Rajan Patel</span>, a B.Tech Computer Science student at{' '}
                <span className="text-[#48E7A8]">Ambalika Institute of Management and Technology</span>. I&apos;m focused on strengthening my understanding of data structures, algorithms, problem solving, and software development through consistent learning and practical projects.
              </p>

              {/* Technical Blueprint Annotations */}
              <div className="mt-6 pt-5 border-t border-[#48E7A8]/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#71877C]">
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-[#48E7A8]" />
                  <span>CORE_FOCUS: ALGORITHMS &amp; SYSTEMS</span>
                </div>
                <div>
                  <span>STATUS: ACTIVE_LEARNER</span>
                </div>
              </div>
            </div>

            {/* Quick Principles Banner */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-[#08120F]/60 border border-[#48E7A8]/10">
                <div className="font-mono text-xs text-[#48E7A8] mb-1">FOUNDATION</div>
                <div className="text-sm text-[#F2F5F3] font-medium">Data Structures &amp; Algorithmic Thinking</div>
              </div>
              <div className="p-4 rounded-lg bg-[#08120F]/60 border border-[#48E7A8]/10">
                <div className="font-mono text-xs text-[#48E7A8] mb-1">ENGINEERING</div>
                <div className="text-sm text-[#F2F5F3] font-medium">Clean Code &amp; Practical Problem Solving</div>
              </div>
            </div>
          </div>

          {/* Right Column: Minimal Education Timeline */}
          <div className="lg:col-span-5">
            <div className="relative p-6 sm:p-8 rounded-xl bg-[#08120F]/90 border border-[#48E7A8]/15 blueprint-corner blueprint-corner-tr blueprint-corner-bl">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#48E7A8] mb-6">
                <GraduationCap size={16} />
                <span>EDUCATION TIMELINE</span>
              </div>

              {/* Timeline item */}
              <div className="relative pl-6 border-l border-[#48E7A8]/20">
                {/* Node indicator */}
                <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-[#050A09] border-2 border-[#48E7A8]" />
                
                <div className="space-y-1.5">
                  <span className="inline-block px-2 py-0.5 rounded text-[11px] font-mono font-medium text-[#48E7A8] bg-[#15966C]/15 border border-[#48E7A8]/20">
                    Expected Graduation: 2028
                  </span>

                  <h3 className="font-sans font-semibold text-lg text-[#F2F5F3] tracking-tight">
                    B.Tech Computer Science &amp; Engineering
                  </h3>

                  <p className="font-sans text-sm text-[#B8C7C0]">
                    Ambalika Institute of Management and Technology
                  </p>

                  <div className="pt-3 font-mono text-[11px] text-[#71877C]">
                    // DEGREE_PROGRAM: UNDERGRADUATE // CSE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
