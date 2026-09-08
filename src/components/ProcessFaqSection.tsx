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
    <section id="process" className="py-16 sm:py-24 bg-[#F4EFEA]/50 border-t border-[#EBE4D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Methodology */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#7A846A] font-semibold block mb-2">
                Analytical Framework
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1D2217] tracking-tight leading-tight mb-4">
                A Structured Approach to{' '}
                <span className="italic font-normal text-[#586545]">
                  Data Intelligence.
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-[#5A6350] leading-relaxed mb-8 max-w-lg">
                Extracting reliable business value from raw data requires a methodical,
                reproducible analytical workflow from ingestion to deployment.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative">
              {processSteps.map((step, idx) => (
                <div
                  key={step.number}
                  className="flex flex-col items-center text-center p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5DEC9] shadow-xs hover:border-[#B08E55] transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#EBE4D5] flex items-center justify-center mb-3 shadow-inner">
                    {getStepIcon(idx)}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#B08E55] tracking-widest uppercase">
                    {step.number}
                  </span>
                  <h4 className="font-serif text-sm font-bold text-[#1D2217] mt-0.5 mb-1 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-[10px] text-[#7A846A] font-medium leading-tight">
                    {step.subtitle}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-[#EBE4D5]/60 border border-[#DDD3BF] flex items-center justify-between">
              <span className="text-xs text-[#465037] font-medium">
                Interested in reviewing a project methodology?
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D2217] hover:text-[#586545] transition-colors"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: FAQ */}
          <div id="faq" className="lg:col-span-6">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#7A846A] font-semibold block mb-2">
              Common Inquiries
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1D2217] tracking-tight leading-tight mb-6">
              Frequently Asked{' '}
              <span className="italic font-normal text-[#586545]">Questions.</span>
            </h2>

            <div className="space-y-3">
              {data.faqs.map((faq) => {
                const isOpen = openFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? 'bg-[#FAF7F2] border-[#586545] shadow-sm'
                        : 'bg-[#FAF7F2]/70 border-[#E2D8C5] hover:border-[#CBD2BE]'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="font-serif text-sm sm:text-base font-semibold text-[#1D2217]">
                        {faq.question}
                      </span>
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                          isOpen
                            ? 'bg-[#1D2217] text-[#FAF7F2]'
                            : 'bg-[#EBE4D5] text-[#586545]'
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="w-3 h-3" />
                        ) : (
                          <Plus className="w-3 h-3" />
                        )}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#5A6350] leading-relaxed border-t border-[#F0EAE0] animate-in fade-in duration-200">
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
