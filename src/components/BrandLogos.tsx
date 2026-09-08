import React from 'react';
import { PortfolioData } from '../types/portfolio';

interface BrandLogosProps {
  data: PortfolioData;
}

export const BrandLogos: React.FC<BrandLogosProps> = ({ data }) => {
  const techStack = [
    { name: 'PYTHON', sub: 'DATA SCIENCE & ML' },
    { name: 'SQL', sub: 'QUERYING & AGGREGATIONS' },
    { name: 'POWER BI', sub: 'EXECUTIVE DASHBOARDS' },
    { name: 'PANDAS', sub: 'DATA WRANGLING' },
    { name: 'SCIKIT-LEARN', sub: 'PREDICTIVE MODELING' },
    { name: 'TENSORFLOW', sub: 'DEEP LEARNING / LSTM' },
  ];

  return (
    <section className="py-12 border-y border-[#EBE4D5]/80 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] sm:text-xs font-mono tracking-[0.25em] uppercase text-[#8A9773] font-semibold mb-8">
          Core Technologies & Tooling
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center opacity-85 hover:opacity-100 transition-opacity">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center text-center group cursor-default transition-transform hover:scale-105"
            >
              <span className="font-serif text-base sm:text-lg font-bold tracking-widest text-[#2A3022] group-hover:text-[#586545] transition-colors">
                {tech.name}
              </span>
              <span className="text-[9px] font-mono tracking-[0.2em] text-[#8A9773] uppercase -mt-0.5">
                {tech.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
