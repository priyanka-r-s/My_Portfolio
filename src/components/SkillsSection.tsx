import React from 'react';
import { ArrowRight, Check, BarChart3, Brain, Terminal, Zap } from 'lucide-react';
import { PortfolioData, SkillCategory } from '../types/portfolio';

interface SkillsSectionProps {
  data: PortfolioData;
  onSelectSkill?: (skillCategory: SkillCategory) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  data,
  onSelectSkill,
}) => {
  const getCategoryIcon = (iconType: string) => {
    switch (iconType) {
      case 'analytics':
        return <BarChart3 className="w-5 h-5 text-[#B08E55]" />;
      case 'ml':
        return <Brain className="w-5 h-5 text-[#B08E55]" />;
      case 'engineering':
      default:
        return <Terminal className="w-5 h-5 text-[#B08E55]" />;
    }
  };

  const handleDiscuss = (cat: SkillCategory) => {
    if (onSelectSkill) {
      onSelectSkill(cat);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#7A846A] font-semibold block mb-2">
            Technical Expertise
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1D2217] tracking-tight">
            Core Domains,{' '}
            <span className="italic font-normal text-[#586545]">Proven Skills.</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#B08E55] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {data.skillCategories.map((cat, idx) => {
            const isFeatured = idx === 1;
            return (
              <div
                key={cat.title}
                className={`relative flex flex-col justify-between rounded-[32px] p-8 sm:p-9 transition-all duration-300 ${
                  isFeatured
                    ? 'bg-[#FAF7F2] border-2 border-[#586545] shadow-xl md:-translate-y-3'
                    : 'bg-[#F4EFEA] border border-[#DDD3BF] shadow-sm hover:shadow-md hover:border-[#CBD2BE]'
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#1D2217] text-[#D6BA85] px-4 py-1 rounded-full text-[11px] font-mono tracking-widest uppercase font-semibold shadow-md flex items-center gap-1.5 border border-[#B08E55]/30">
                    <Zap className="w-3 h-3 fill-current" />
                    <span>Core Focus</span>
                  </div>
                )}

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#EBE4D5] border border-[#DDD3BF] flex items-center justify-center mb-6 shadow-inner">
                    {getCategoryIcon(cat.iconType)}
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-[#1D2217] mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#7A846A] font-medium mb-5">
                    {cat.description}
                  </p>

                  <div className="w-full h-px bg-[#E2D8C5] mb-6" />

                  <ul className="space-y-3 mb-6">
                    {cat.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-[#CBD2BE]/50 text-[#586545] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="text-xs sm:text-sm text-[#465037] leading-tight">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cat.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md bg-[#EBE4D5] text-[#586545] font-mono text-[10px] font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-[#E2D8C5] flex items-center justify-between">
                  <span className="text-[11px] font-mono tracking-wide text-[#7A846A]">
                    {cat.badge}
                  </span>

                  <button
                    onClick={() => handleDiscuss(cat)}
                    className={`inline-flex items-center justify-center gap-2 pl-4 pr-3 py-2.5 rounded-full text-xs font-medium transition-all group ${
                      isFeatured
                        ? 'bg-[#1D2217] text-[#FAF7F2] hover:bg-[#383F2C]'
                        : 'bg-[#E4D9C7] text-[#2A3022] hover:bg-[#1D2217] hover:text-[#FAF7F2]'
                    }`}
                  >
                    <span>Discuss Work</span>
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
