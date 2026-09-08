import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { PortfolioData } from '../types/portfolio';

interface HeroSectionProps {
  data: PortfolioData;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  return (
    <section id="home" className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      {/* Ambient warm gradient glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#EBE4D5]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#EFE9DD] border border-[#DDD3BF] text-xs font-medium text-[#586545] tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-[#6B7A54] animate-pulse" />
              <span className="font-semibold">{data.roleTagline}</span>
              <span className="text-[#AAB597]">|</span>
              <span className="text-[#6B7A54]">{data.availabilityTag}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-[#1D2217] leading-[1.08] mb-6">
              {data.heroHeadingLine1}{' '}
              <span className="italic font-normal font-serif text-[#586545] block sm:inline">
                {data.heroHeadingItalic}
              </span>
            </h1>

            {/* Subtitle / Bio */}
            <p className="text-base sm:text-lg text-[#5A6350] leading-relaxed max-w-xl mb-8 font-light">
              {data.heroSubheading}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#projects"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#1D2217] text-[#FAF7F2] text-sm font-medium hover:bg-[#383F2C] transition-all duration-300 shadow-md hover:shadow-lg group"
              >
                <span>Explore Featured Projects</span>
                <span className="w-5 h-5 rounded-full bg-[#FAF7F2]/20 flex items-center justify-center group-hover:translate-y-0.5 transition-transform">
                  <ArrowDown className="w-3.5 h-3.5 text-[#FAF7F2]" />
                </span>
              </a>

              <a
                href={data.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#FAF7F2] border border-[#D5C8AF] text-[#2A3022] text-sm font-medium hover:bg-[#EFE9DD] hover:border-[#CBD2BE] transition-all duration-300 group"
              >
                <GithubIcon className="w-4 h-4 text-[#586545]" />
                <span>GitHub Repositories (19+)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#7A846A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-[#DDD3BF]/70">
              {data.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1D2217]">
                    {stat.value}
                  </span>
                  <span className="text-xs text-[#7A846A] tracking-wide mt-0.5 font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Visual Frame & Floating Badge */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px]">
              {/* Arch Rounded Frame Container */}
              <div className="relative overflow-hidden rounded-[40px] border-4 border-[#F0E9DD] shadow-2xl bg-[#EBE4D5]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A3022]/40 via-transparent to-transparent z-10 pointer-events-none" />

                <img
                  src={data.heroPortrait}
                  alt={data.creatorName}
                  className="w-full h-[480px] sm:h-[540px] object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />
              </div>

              {/* Floating Dark Badge Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 z-20 max-w-[260px] bg-[#1D2217]/95 backdrop-blur-md text-[#FAF7F2] p-4 sm:p-5 rounded-2xl shadow-floating border border-[#383F2C] transform hover:-translate-y-1 transition-transform">
                <div className="flex items-start gap-2.5">
                  <div className="p-1.5 rounded-full bg-[#B08E55]/20 text-[#D6BA85] mt-0.5 flex-shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-serif text-sm font-medium leading-snug text-[#FAF7F2]">
                      {data.heroBadgeQuote}
                    </p>
                    <p className="text-[10px] text-[#AAB597] mt-1 tracking-wider uppercase font-mono">
                      Data Science & Analytics
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Star */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#D5C8AF] flex items-center justify-center text-[#B08E55] shadow-sm">
                <span className="text-xl">✦</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
