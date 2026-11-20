import React from 'react';
import { Code2, Binary, Globe, Wrench } from 'lucide-react';

interface SkillGroup {
  category: string;
  code: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Programming Languages',
    code: 'SPEC.01 // LANG',
    icon: <Code2 size={18} className="text-[#48E7A8]" />,
    skills: ['Java', 'C', 'Python'],
  },
  {
    category: 'DSA & Core Computer Science',
    code: 'SPEC.02 // CORE',
    icon: <Binary size={18} className="text-[#48E7A8]" />,
    skills: [
      'Data Structures & Algorithms',
      'OOP',
      'Problem Solving',
      'Operating Systems',
      'DBMS',
    ],
  },
  {
    category: 'Web Development',
    code: 'SPEC.03 // WEB',
    icon: <Globe size={18} className="text-[#48E7A8]" />,
    skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB', 'React'],
  },
  {
    category: 'Development Tools',
    code: 'SPEC.04 // TOOLS',
    icon: <Wrench size={18} className="text-[#48E7A8]" />,
    skills: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA'],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 sm:px-8 border-t border-[#48E7A8]/10 bg-[#08120F]/40"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#48E7A8] mb-2">
            <span>02</span>
            <span className="text-[#48E7A8]/40">//</span>
            <span>SYSTEM SPECIFICATION</span>
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#F2F5F3] tracking-tight">
            TECHNICAL SKILLS
          </h2>
          <div className="mt-2 w-16 h-[2px] bg-[#48E7A8]/40" />
          <p className="mt-3 font-mono text-xs text-[#71877C]">
            // VERIFIED COMPETENCIES AND APPLIED ENGINEERING KNOWLEDGE
          </p>
        </div>

        {/* Technical Specification Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="relative p-6 rounded-xl bg-[#08120F]/85 border border-[#48E7A8]/15 hover:border-[#48E7A8]/35 transition-all duration-300 blueprint-corner blueprint-corner-tl blueprint-corner-br flex flex-col justify-between"
            >
              {/* Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-md bg-[#050A09] border border-[#48E7A8]/20">
                      {group.icon}
                    </div>
                    <h3 className="font-sans font-semibold text-base sm:text-lg text-[#F2F5F3]">
                      {group.category}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-[#71877C] tracking-wider">
                    {group.code}
                  </span>
                </div>

                {/* Chips */}
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1.5 rounded-md font-mono text-xs text-[#F2F5F3] bg-[#050A09]/90 border border-[rgba(72,231,168,0.15)] hover:border-[#48E7A8]/50 hover:bg-[#15966C]/10 hover:text-[#48E7A8] transition-all duration-200 cursor-default"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#48E7A8]/50 mr-2" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technical footer line */}
              <div className="mt-6 pt-3 border-t border-[#48E7A8]/10 flex items-center justify-between font-mono text-[10px] text-[#71877C]">
                <span>COUNT: {group.skills.length} ITEMS</span>
                <span className="text-[#48E7A8]/70">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
