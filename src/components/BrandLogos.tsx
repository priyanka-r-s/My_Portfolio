import React from 'react';
import { PortfolioData } from '../types/portfolio';

interface BrandLogosProps {
  data: PortfolioData;
}

export const BrandLogos: React.FC<BrandLogosProps> = ({ data: _data }) => {
  const tools = [
    {
      name: 'Python',
      sub: 'Core Analytics & ML',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path
            d="M11.87 2C6.44 2 6.78 4.36 6.78 4.36l.01 2.45h5.18v.74H4.56S2 7.26 2 12.69s2.24 5.23 2.24 5.23h1.34v-1.87s-.07-2.24 2.2-2.24h5.16s2.13.03 2.13-2.13V6.37S15.42 2 11.87 2zm-2.01 1.48c.45 0 .81.36.81.81s-.36.81-.81.81-.81-.36-.81-.81.36-.81.81-.81z"
            fill="#387EB8"
          />
          <path
            d="M12.13 22c5.43 0 5.09-2.36 5.09-2.36l-.01-2.45h-5.18v-.74h7.41S22 16.74 22 11.31s-2.24-5.23-2.24-5.23h-1.34v1.87s.07 2.24-2.2 2.24h-5.16s-2.13-.03-2.13 2.13v5.31s-.35 4.37 3.2 4.37zm2.01-1.48c-.45 0-.81-.36-.81-.81s.36-.81.81-.81.81.36.81.81-.36.81-.81.81z"
            fill="#FFE052"
          />
        </svg>
      ),
    },
    {
      name: 'SQL',
      sub: 'Complex Queries & Aggs',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="5" rx="9" ry="3" fill="#F4B41A" fillOpacity="0.3" stroke="#F4B41A" strokeWidth="2" />
          <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" stroke="#F4B41A" strokeWidth="2" />
          <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" stroke="#F4B41A" strokeWidth="2" />
          <path d="M3 17v2c0 1.66 4 3 9 3s9-1.34 9-3v-2" stroke="#F4B41A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      name: 'Power BI',
      sub: 'DAX & Visual Reports',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="13" width="4.5" height="8" rx="1" fill="#F2C811" />
          <rect x="9.75" y="8" width="4.5" height="13" rx="1" fill="#E8B007" />
          <rect x="16.5" y="3" width="4.5" height="18" rx="1" fill="#D29B00" />
        </svg>
      ),
    },
    {
      name: 'Pandas',
      sub: 'Data Wrangling',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M5 5h3v14H5z" fill="#150458" />
          <path d="M10.5 9h3v10h-3z" fill="#E70488" />
          <path d="M16 13h3v6h-3z" fill="#00A2E8" />
          <circle cx="6.5" cy="3" r="1.5" fill="#150458" />
          <circle cx="12" cy="7" r="1.5" fill="#E70488" />
          <circle cx="17.5" cy="11" r="1.5" fill="#00A2E8" />
        </svg>
      ),
    },
    {
      name: 'NumPy',
      sub: 'Numerical Arrays',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="#013243" stroke="#4DABF7" strokeWidth="1.5" />
          <path d="M12 2v20M3 7l9 5 9-5M3 17l9 5 9-5" stroke="#4DABF7" strokeWidth="1.2" />
        </svg>
      ),
    },
    {
      name: 'Scikit-Learn',
      sub: 'Machine Learning Models',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <circle cx="8" cy="8" r="5" fill="#F89939" fillOpacity="0.9" />
          <circle cx="16" cy="16" r="5" fill="#3499CD" fillOpacity="0.9" />
          <path d="M8 8L16 16" stroke="#141517" strokeWidth="2" strokeDasharray="2 2" />
        </svg>
      ),
    },
    {
      name: 'TensorFlow',
      sub: 'Deep Learning / LSTM',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l8 4.6v4.6l-8-4.6V2z" fill="#FF6F00" />
          <path d="M12 6.6l8 4.6v4.6l-8-4.6V6.6z" fill="#FFA800" />
          <path d="M4 6.6l8-4.6v4.6L4 11.2V6.6z" fill="#FF9100" />
          <path d="M4 11.2l8-4.6v4.6l-8 4.6v-4.6z" fill="#FFB300" />
          <path d="M12 11.2v10.8l-4-2.3v-6.2l4-2.3z" fill="#FF6F00" />
        </svg>
      ),
    },
    {
      name: 'Excel',
      sub: 'Financial & KPI Analysis',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="3" width="20" height="18" rx="3" fill="#107C41" />
          <path
            d="M7 7.5l3.5 4.5L7 16.5h2.2l2.3-3.1 2.3 3.1H16l-3.5-4.5L16 7.5h-2.2l-2.3 3.1-2.3-3.1H7z"
            fill="#FFFFFF"
          />
        </svg>
      ),
    },
    {
      name: 'Git & GitHub',
      sub: '19+ Repositories',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#181717" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 4C7.58 4 4 7.58 4 12c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0020 12c0-4.42-3.58-8-8-8z"
            fill="#FFFFFF"
          />
        </svg>
      ),
    },
    {
      name: 'Jupyter',
      sub: 'Exploratory Notebooks',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 4c-3.8 0-6.8 2-7.5 4.8 1.4-.8 3.5-1.3 5.9-1.3 3.6 0 6.6 1.1 7.4 2.6C16.9 6.5 14.6 4 12 4zm0 16c3.8 0 6.8-2 7.5-4.8-1.4.8-3.5 1.3-5.9 1.3-3.6 0-6.6-1.1-7.4-2.6.9 3.6 3.2 6.1 5.8 6.1z"
            fill="#F37626"
          />
          <circle cx="5" cy="5.5" r="1.5" fill="#767677" />
          <circle cx="19" cy="18.5" r="1.5" fill="#767677" />
          <circle cx="20" cy="5.5" r="1" fill="#767677" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-12 sm:py-16 border-y border-gray-200/90 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-[#F4B41A]" />
          <p className="text-center text-xs font-mono tracking-[0.25em] uppercase text-[#F4B41A] font-bold">
            Core Technologies & Tooling
          </p>
        </div>
        <h3 className="text-center font-display font-black text-xl sm:text-2xl text-[#141517] tracking-tight uppercase mb-8">
          TOOLS I WORK WITH DAILY
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 items-center">
          {tools.map((tech, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl bg-[#F9FAFB] border border-gray-200/80 hover:border-[#F4B41A] hover:bg-white hover:shadow-lg transition-all duration-300 group cursor-default text-center transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-gray-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <span className="font-display text-sm sm:text-base font-black tracking-wide text-[#141517] group-hover:text-[#F4B41A] transition-colors">
                {tech.name}
              </span>
              <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase mt-0.5 font-bold">
                {tech.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

