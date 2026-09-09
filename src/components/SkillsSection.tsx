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
        return <BarChart3 className="w-6 h-6 stroke-[2.2]" />;
      case 'ml':
        return <Brain className="w-6 h-6 stroke-[2.2]" />;
      case 'engineering':
      default:
        return <Terminal className="w-6 h-6 stroke-[2.2]" />;
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
    <section id="skills" className="pt-16 pb-6 sm:pt-20 sm:pb-8 lg:pt-20 lg:pb-8 relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
        <div className="flex items-center justify-center gap-2 mb-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F4B41A]" />
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#F4B41A] font-bold block">
            Technical Expertise
          </span>
        </div>
        <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#141517] tracking-tight uppercase">
          CORE DOMAINS & <span className="text-[#F4B41A]">SKILLS</span>
        </h2>
        <div className="w-12 h-1 bg-[#F4B41A] mx-auto mt-2 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {data.skillCategories.map((cat, idx) => {
          const isFeatured = idx === 1;
          return (
            <div
              key={cat.title}
              className={`relative flex flex-col justify-between rounded-[28px] p-5 sm:p-6 transition-all duration-300 ${
                isFeatured
                  ? 'bg-white border-2 border-[#F4B41A] shadow-xl md:-translate-y-1.5'
                  : 'bg-white border border-gray-200 shadow-md hover:shadow-lg hover:border-gray-300'
              }`}
            >
              {isFeatured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#141517] text-[#F4B41A] px-3.5 py-0.5 rounded-full text-[10px] font-mono tracking-widest uppercase font-bold shadow-md flex items-center gap-1 border border-[#F4B41A]/50">
                  <Zap className="w-2.5 h-2.5 fill-current" />
                  <span>Core Focus</span>
                </div>
              )}

              <div>
                {/* Yellow Circular Icon Badge matching the reference image */}
                <div className="w-10 h-10 rounded-full bg-[#F4B41A] text-[#141517] flex items-center justify-center mb-3 shadow-xs border border-yellow-300">
                  {getCategoryIcon(cat.iconType)}
                </div>

                <h3 className="font-display font-black text-base sm:text-lg text-[#141517] uppercase tracking-wide mb-0.5">
                  {cat.title}
                </h3>
                <p className="text-[11px] text-gray-500 font-medium mb-3 leading-snug">
                  {cat.description}
                </p>

                <div className="w-full h-px bg-gray-200 mb-3" />

                {cat.strongSkills ? (
                  <div className="space-y-3 mb-3.5">
                    <div>
                      <span className="text-[10px] font-mono tracking-wider uppercase font-black text-[#141517] flex items-center gap-1.5 mb-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F4B41A]" />
                        Strong / Core
                      </span>
                      <ul className="space-y-1.5">
                        {cat.strongSkills.map((skill, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2">
                            <div className="w-3.5 h-3.5 rounded-full bg-[#F4B41A] text-[#141517] flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-2 h-2 stroke-[3]" />
                            </div>
                            <span className="text-xs text-gray-800 font-semibold leading-tight">
                              {skill}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {cat.workingKnowledge && (
                      <div>
                        <span className="text-[10px] font-mono tracking-wider uppercase font-bold text-gray-500 flex items-center gap-1.5 mb-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                          Working Knowledge
                        </span>
                        <ul className="space-y-1.5">
                          {cat.workingKnowledge.map((skill, wIdx) => (
                            <li key={wIdx} className="flex items-start gap-2">
                              <div className="w-3.5 h-3.5 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-[9px] font-bold leading-none">·</span>
                              </div>
                              <span className="text-xs text-gray-600 font-normal leading-tight">
                                {skill}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <ul className="space-y-1.5 mb-3.5">
                    {cat.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2">
                        <div className="w-3.5 h-3.5 rounded-full bg-[#F4B41A] text-[#141517] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2 h-2 stroke-[3]" />
                        </div>
                        <span className="text-xs text-gray-700 font-medium leading-tight">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-1 mb-3.5">
                  {cat.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-[#F3F4F6] text-gray-800 font-mono text-[9px] font-bold border border-gray-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-gray-200 flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-wide text-[#F4B41A] font-bold">
                  {cat.badge}
                </span>

                <button
                  onClick={() => handleDiscuss(cat)}
                  className={`inline-flex items-center justify-center gap-1.5 pl-3.5 pr-2.5 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider transition-all group ${
                    isFeatured
                      ? 'bg-[#141517] text-white hover:bg-[#F4B41A] hover:text-[#141517]'
                      : 'bg-[#F3F4F6] text-[#141517] hover:bg-[#141517] hover:text-white border border-gray-300'
                  }`}
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
