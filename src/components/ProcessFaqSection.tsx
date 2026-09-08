import React, { useState } from 'react';
import {
  Plus,
  Minus,
  ArrowRight,
  Database,
  BarChart2,
  Cpu,
  LineChart,
} from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface ProcessFaqSectionProps {
  data: PortfolioData;
}

export const ProcessFaqSection: React.FC<ProcessFaqSectionProps> = ({ data }) => {
  const [openFaq, setOpenFaq] = useState<string | null>(data.faqs[0]?.id || null);

  const processSteps = [
    {
      number: '01',
      title: 'Data Auditing',
      subtitle: 'Cleaning & Preprocessing',
      description:
        'Handling missing values, outlier detection, data normalization, and schema validation.',
    },
    {
      number: '02',
      title: 'Exploratory Analysis',
      subtitle: 'EDA & Statistics',
      description:
        'Detecting hidden patterns, demographic segments, correlation matrices, and behavioral trends.',
    },
    {
      number: '03',
      title: 'ML Modeling',
      subtitle: 'Training & Evaluation',
      description:
        'Feature engineering, time-series forecasting, algorithmic training (XGBoost/LSTM), and benchmarking.',
    },
    {
      number: '04',
      title: 'Visualization',
      subtitle: 'Dashboards & Reports',
      description:
        'Crafting interactive Power BI reports, automated KPI trackers, and actionable executive insights.',
    },
  ];

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Database className="w-4 h-4 text-[#B08E55]" />;
      case 1:
        return <BarChart2 className="w-4 h-4 text-[#B08E55]" />;
      case 2:
        return <Cpu className="w-4 h-4 text-[#B08E55]" />;
      case 3:
      default:
        return <LineChart className="w-4 h-4 text-[#B08E55]" />;
    }
  };

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  return (
    <section id="process" className="py-16 sm:py-24 bg-[#F3F4F6] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Methodology */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#F4B41A]" />
                <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#F4B41A] font-bold block">
                  Analytical Framework
                </span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#141517] tracking-tight uppercase leading-tight mb-4">
                STRUCTURED <span className="text-[#F4B41A]">DATA WORKFLOW</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-8 max-w-lg">
                Extracting reliable business value from raw data requires a methodical,
                reproducible analytical workflow from ingestion to deployment.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative">
              {processSteps.map((step, idx) => (
                <div
                  key={step.number}
                  className="flex flex-col items-center text-center p-4 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-[#F4B41A] transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#F4B41A] text-[#141517] flex items-center justify-center mb-3 shadow-xs">
                    {getStepIcon(idx)}
                  </div>
                  <span className="text-[10px] font-mono font-black text-[#F4B41A] tracking-widest uppercase">
                    {step.number}
                  </span>
                  <h4 className="font-display font-black text-xs text-[#141517] mt-1 mb-0.5 leading-snug uppercase">
                    {step.title}
                  </h4>
                  <p className="text-[10px] text-gray-500 font-medium leading-tight">
                    {step.subtitle}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-white border border-gray-200 flex items-center justify-between shadow-sm">
              <span className="text-xs text-gray-700 font-bold">
                Interested in reviewing a project methodology?
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#141517] hover:text-[#F4B41A] transition-colors"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: FAQ */}
          <div id="faq" className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#F4B41A]" />
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#F4B41A] font-bold block">
                Common Inquiries
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#141517] tracking-tight uppercase leading-tight mb-6">
              FREQUENTLY ASKED <span className="text-[#F4B41A]">QUESTIONS</span>
            </h2>

            <div className="space-y-3">
              {data.faqs.map((faq) => {
                const isOpen = openFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? 'bg-white border-[#F4B41A] shadow-md'
                        : 'bg-white/80 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display font-bold text-sm sm:text-base text-[#141517]">
                        {faq.question}
                      </span>
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                          isOpen
                            ? 'bg-[#141517] text-[#F4B41A]'
                            : 'bg-[#F3F4F6] text-gray-700'
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="w-3.5 h-3.5" />
                        ) : (
                          <Plus className="w-3.5 h-3.5" />
                        )}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 animate-in fade-in duration-200">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
