import React from 'react';
import {
  Home,
  User,
  Briefcase,
  FolderGit2,
  Award,
  Send,
  ArrowDown,
  ArrowUpRight,
  FileDown,
} from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { PortfolioData } from '../types/portfolio';

interface HeroSectionProps {
  data: PortfolioData;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  // Navigation nodes mapped mathematically along the 225px radius golden arc (viewBox 0 0 540 540)
  // Arc center: (235, 270), R = 225, with θ from -62.5° to +62.5° in 25° increments
  const orbitalNodes = [
    { icon: Home, label: 'Home', href: '#home', left: '62.8%', top: '13.0%' },
    { icon: User, label: 'About Me', href: '#about', left: '76.6%', top: '24.6%' },
    { icon: Briefcase, label: 'Resume', href: '#experience', left: '84.2%', top: '41.0%' },
    { icon: FolderGit2, label: 'Portfolio', href: '#projects', left: '84.2%', top: '59.0%' },
    { icon: Award, label: 'Skills & Honors', href: '#skills', left: '76.6%', top: '75.4%' },
    { icon: Send, label: 'Contact', href: '#contact', left: '62.8%', top: '87.0%' },
  ];

  // First name for "I'M PRIYANKA"
  const firstName = data.creatorName.split(' ')[0].toUpperCase();

  return (
    <section id="home" className="pt-24 pb-6 sm:pt-26 sm:pb-8 lg:pt-24 lg:pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Master Presentation Card */}
      <div className="relative bg-white rounded-[32px] sm:rounded-[40px] shadow-2xl border border-gray-200/90 p-7 sm:p-9 lg:p-11 xl:p-12 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column: Greeting, Headline, Pills, and CTA */}
          <div className="lg:col-span-6 flex flex-col items-start z-10 sm:pl-2">
            {/* "I'M PRIYANKA" Heading */}
            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#141517] tracking-tight leading-none mb-3.5">
              I'M{' '}
              <span className="text-[#F4B41A] drop-shadow-sm">
                {firstName}
              </span>
            </h1>

            {/* Role & Availability Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <div className="px-4 py-1.5 rounded-full bg-[#F4B41A] text-[#141517] font-black text-xs sm:text-sm tracking-wider uppercase shadow-xs">
                {data.roleTagline.toUpperCase()}
              </div>

              <div className="px-3.5 py-1.5 rounded-full bg-[#141517] text-white font-bold text-[10px] sm:text-xs tracking-wider uppercase shadow-xs flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4B41A] animate-pulse" />
                <span>Open for Opportunities</span>
              </div>
            </div>

            {/* Narrative Overview */}
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-lg mb-4 font-normal">
              {data.heroSubheading}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <a
                href="#about"
                className="px-5 py-2.5 sm:py-3 rounded-full bg-[#141517] text-white text-xs sm:text-sm font-black uppercase tracking-wider hover:bg-[#F4B41A] hover:text-[#141517] transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 group"
              >
                <span>MORE ABOUT ME</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              {data.resumeUrl && (
                <a
                  href={data.resumeUrl}
                  download="Priyanka_Resume.pdf"
                  className="px-5 py-2.5 sm:py-3 rounded-full bg-[#F4B41A] text-[#141517] text-xs sm:text-sm font-black uppercase tracking-wider hover:bg-yellow-400 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 group"
                  title="Download Resume (PDF)"
                >
                  <FileDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                  <span>RESUME</span>
                </a>
              )}

              <a
                href={data.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 sm:py-3 rounded-full bg-[#F3F4F6] text-[#141517] text-xs sm:text-sm font-bold hover:bg-[#0077B5] hover:text-white transition-all duration-300 border border-gray-300/80 flex items-center gap-1.5 group"
                title="LinkedIn Profile"
              >
                <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={data.socials.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 sm:py-3 rounded-full bg-[#F3F4F6] text-[#141517] text-xs sm:text-sm font-bold hover:bg-[#F4B41A] hover:text-[#141517] transition-all duration-300 border border-gray-300/80 flex items-center gap-1.5 group"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Quick Stats Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3.5 border-t border-gray-200/90 w-full max-w-lg">
              {data.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-display font-black text-xl sm:text-2xl text-[#141517]">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-gray-500 uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Portrait within the Open Caliper Bracket from Reference */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full max-w-[300px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[440px] xl:max-w-[470px] aspect-square mx-auto flex items-center justify-center">
              {/* Golden Yellow Open Caliper Bracket SVG (matches theme reference slide) */}
              <svg
                viewBox="0 0 540 540"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
              >
                {/* Arc path: top horizontal line -> smooth right semicircle -> bottom horizontal line */}
                <path
                  d="M 175 45 L 235 45 A 225 225 0 0 1 235 495 L 205 495"
                  stroke="#F4B41A"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Terminal Dots on Top and Bottom Tails */}
                <circle cx="175" cy="45" r="5.5" fill="#F4B41A" />
                <circle cx="205" cy="495" r="5.5" fill="#F4B41A" />
              </svg>

              {/* Large Central Circular Portrait */}
              <div
                style={{
                  left: '7.41%',
                  top: '13.89%',
                  width: '72.22%',
                  height: '72.22%',
                }}
                className="absolute z-10 rounded-full overflow-hidden border-[5px] sm:border-[6px] border-white shadow-2xl bg-gray-100 group"
              >
                <img
                  src={data.heroPortrait}
                  alt={data.creatorName}
                  className="w-full h-full object-cover object-[center_12%] group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />
              </div>

              {/* Interactive Orbital Node Buttons along the Golden Arc */}
              {orbitalNodes.map((node, idx) => {
                const IconComponent = node.icon;
                return (
                  <a
                    key={idx}
                    href={node.href}
                    title={node.label}
                    style={{ left: node.left, top: node.top }}
                    className="absolute z-20 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full bg-[#141517] border-2 border-white text-[#F4B41A] hover:bg-[#F4B41A] hover:text-[#141517] hover:scale-115 active:scale-95 shadow-xl flex items-center justify-center transition-all duration-300 group"
                  >
                    <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-4.5 lg:h-4.5 transition-transform group-hover:scale-110" />
                    {/* Hover Label Tooltip */}
                    <span className="absolute right-11 lg:right-13 px-2 py-0.5 bg-[#141517] text-white text-[10px] font-bold rounded shadow-md opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity">
                      {node.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

