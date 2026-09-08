import React from 'react';
import { Check, Database } from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface AboutSectionProps {
  data: PortfolioData;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
  return (
    <section id="about" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Olive Container */}
        <div className="relative bg-[#545E44] text-[#FAF7F2] rounded-[36px] sm:rounded-[48px] p-6 sm:p-10 lg:p-16 shadow-xl overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#636E51] rounded-full blur-3xl opacity-50 pointer-events-none" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#B08E55]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Portrait with Rotating Seal */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[340px]">
                <div className="overflow-hidden rounded-3xl border-2 border-[#7A846A]/60 shadow-lg bg-[#465037]">
                  <img
                    src={data.aboutPortrait}
                    alt={data.creatorName}
                    className="w-full h-[380px] sm:h-[420px] object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                {/* Rotating Circular Seal */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#1D2217] border-2 border-[#B08E55] shadow-xl flex items-center justify-center">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <svg
                      className="absolute inset-0 w-full h-full animate-spin-slow"
                      viewBox="0 0 100 100"
                    >
                      <path
                        id="aboutCirclePath"
                        d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                        fill="transparent"
                      />
                      <text className="text-[6.5px] tracking-[0.2em] fill-[#D6BA85] uppercase font-mono">
                        <textPath href="#aboutCirclePath">
                          DATA • ANALYTICS • INSIGHTS • ML •
                        </textPath>
                      </text>
                    </svg>

                    <div className="w-8 h-8 rounded-full bg-[#545E44] flex items-center justify-center text-[#D6BA85]">
                      <Database className="w-4 h-4 text-[#E6E9DF]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Bio & Capabilities */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#D6BA85] font-semibold block mb-2">
                  {data.aboutSubtitle}
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#FAF7F2] leading-tight mb-6">
                  {data.aboutTitle}
                </h2>

                <div className="space-y-4 text-sm sm:text-base text-[#CBD2BE] leading-relaxed font-light mb-8 max-w-xl">
                  {data.aboutBio.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
                  {data.aboutPoints.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#6B7A54] border border-[#8A9773] flex items-center justify-center flex-shrink-0 text-[#FAF7F2]">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span className="text-xs sm:text-sm text-[#FAF7F2] font-medium tracking-wide">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Quote Card */}
              <div className="relative bg-[#FAF7F2] text-[#1D2217] p-6 rounded-2xl shadow-md border border-[#E8E1D3] flex items-center justify-between gap-4">
                <div className="relative pr-6">
                  <span className="text-3xl font-serif text-[#B08E55] leading-none block -mb-2">“</span>
                  <p className="font-serif text-base sm:text-lg italic text-[#2A3022] leading-snug">
                    {data.aboutMissionQuote}
                  </p>
                </div>

                <div className="flex-shrink-0 text-[#6B7A54] opacity-80">
                  <svg
                    className="w-10 h-10 sm:w-12 sm:h-12 transform -rotate-12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
