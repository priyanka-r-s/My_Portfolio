import React from 'react';
import {
  Home,
  User,
  Briefcase,
  FolderGit2,
  Award,
  Send,
  BarChart3,
  Brain,
  Code2,
  ArrowUp,
  ArrowDown,
} from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface AboutSectionProps {
  data: PortfolioData;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
  const funFacts = [
    { value: '9.10', label: 'B.Tech CGPA' },
    { value: '19+', label: 'Projects & Repos' },
    { value: '500+', label: 'Stocks Modeled' },
    { value: '6 Mo', label: 'WEINTERN Intern' },
    { value: '90.8%', label: '12th Class Rank' },
    { value: '100%', label: 'Dedicated Delivery' },
  ];

  const whatIDo = [
    {
      title: 'DATA ANALYTICS & BI',
      desc: 'Interactive Power BI dashboards, SQL querying, KPI tracking, and automated reporting.',
      icon: BarChart3,
    },
    {
      title: 'MACHINE LEARNING & AI',
      desc: 'Predictive time series (ARIMA, LSTM, XGBoost), feature engineering, and statistical models.',
      icon: Brain,
    },
    {
      title: 'PYTHON & AUTOMATION',
      desc: 'Robust ETL pipelines, data wrangling with Pandas/NumPy, security tools, and apps.',
      icon: Code2,
    },
  ];

  const navRailItems = [
    { label: 'HOME', href: '#home', icon: ArrowUp },
    { label: 'ABOUT ME', href: '#about', active: true },
    { label: 'RESUME', href: '#experience' },
    { label: 'PORTFOLIO', href: '#projects' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'CONTACT', href: '#contact', icon: ArrowDown },
  ];

  const rightTrackNodes = [
    { icon: Home, href: '#home', label: 'Home' },
    { icon: User, href: '#about', label: 'About', active: true },
    { icon: Briefcase, href: '#experience', label: 'Resume' },
    { icon: FolderGit2, href: '#projects', label: 'Portfolio' },
    { icon: Award, href: '#skills', label: 'Skills' },
    { icon: Send, href: '#contact', label: 'Contact' },
  ];

  return (
    <section id="about" className="pt-16 pb-6 sm:pt-20 sm:pb-8 lg:pt-20 lg:pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Master Presentation Deck Card */}
      <div className="bg-white rounded-[32px] sm:rounded-[40px] shadow-2xl border border-gray-200/90 overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative">
        {/* Left Column: Dark Photo Box on Top + Golden Yellow Rail Below */}
        <div className="lg:col-span-3 flex flex-col border-b lg:border-b-0 lg:border-r border-gray-200">
          {/* Top Dark Slate Box with Framed Circular Portrait */}
          <div className="bg-[#2D333B] p-6 sm:p-7 flex flex-col items-center justify-center text-center">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-100 mb-3">
              <img
                src={data.aboutPortrait || data.heroPortrait}
                alt={data.creatorName}
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <h3 className="text-white font-bold text-sm sm:text-base tracking-wide">
              {data.creatorName}
            </h3>
            <span className="text-[#F4B41A] text-xs font-semibold mt-0.5">
              {data.brandSub}
            </span>
          </div>

          {/* Bottom Golden-Yellow Vertical Navigation Rail */}
          <div className="bg-[#F4B41A] p-5 sm:p-6 flex flex-col justify-center gap-3 flex-grow">
            {navRailItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className={`flex items-center justify-between text-xs sm:text-[13px] font-black tracking-wider uppercase py-1.5 transition-all duration-200 ${
                  item.active
                    ? 'text-[#141517] translate-x-1 font-black drop-shadow-sm'
                    : 'text-[#141517]/80 hover:text-[#141517] hover:translate-x-0.5'
                }`}
              >
                <span>{item.label}</span>
                {item.icon && <item.icon className="w-3.5 h-3.5 stroke-[3]" />}
              </a>
            ))}
          </div>
        </div>

        {/* Center Showcase Area */}
        <div className="lg:col-span-8 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
          <div>
            {/* Header: "— ABOUT ME" */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-1.5 bg-[#141517] rounded-full" />
              <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#141517] tracking-tight uppercase">
                ABOUT ME
              </h2>
            </div>

            {/* Subheading */}
            <p className="text-sm sm:text-base text-gray-800 font-medium mb-3">
              I'm <strong className="font-bold text-[#141517]">{data.creatorName}</strong>,{' '}
              <span className="text-gray-600">{data.roleTagline}</span>
            </p>

            {/* Overview paragraphs */}
            <div className="text-xs sm:text-sm text-gray-600 leading-relaxed space-y-2 mb-6 max-w-2xl font-normal">
              {data.aboutBio.slice(0, 2).map((para, pIdx) => (
                <p key={pIdx}>{para}</p>
              ))}
            </div>

            {/* Dual Sections: "What I Do?" and "Fun Facts" */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pt-5 border-t border-gray-200/80">
              {/* Left Column: What I Do? */}
              <div>
                <div className="inline-block px-4 py-1.5 rounded-full bg-[#F4B41A] text-[#141517] font-black text-xs uppercase tracking-wider mb-4 shadow-xs">
                  What I Do?
                </div>

                <div className="space-y-3.5">
                  {whatIDo.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex items-start gap-3 group">
                        {/* Circular Yellow Outline/Filled Icon Badge */}
                        <div className="w-10 h-10 rounded-full bg-[#F4B41A] text-[#141517] flex items-center justify-center flex-shrink-0 shadow-xs border border-yellow-300 group-hover:scale-105 transition-transform">
                          <Icon className="w-5 h-5 stroke-[2.2]" />
                        </div>

                        <div>
                          <h4 className="font-display font-black text-xs sm:text-sm text-[#141517] tracking-wider uppercase mb-0.5">
                            {item.title}
                          </h4>
                          <p className="text-xs text-gray-600 leading-relaxed font-normal">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Fun Facts / Key Metrics */}
              <div>
                <div className="inline-block px-4 py-1.5 rounded-full bg-[#F4B41A] text-[#141517] font-black text-xs uppercase tracking-wider mb-4 shadow-xs">
                  Fun Facts & Metrics
                </div>

                {/* 6 Circular Black Stat Badges */}
                <div className="grid grid-cols-3 gap-2.5">
                  {funFacts.map((fact, fIdx) => (
                    <div
                      key={fIdx}
                      className="w-full aspect-square max-w-[84px] sm:max-w-[92px] rounded-full bg-[#141517] text-white flex flex-col items-center justify-center p-2 text-center shadow-md hover:bg-[#23262D] hover:scale-105 transition-all duration-300 group mx-auto"
                    >
                      <span className="font-display font-black text-sm sm:text-base text-[#F4B41A] group-hover:scale-110 transition-transform">
                        {fact.value}
                      </span>
                      <span className="text-[8px] sm:text-[9px] font-bold text-gray-300 uppercase tracking-tighter leading-tight mt-0.5">
                        {fact.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Far Right Edge: Vertical Navigation Line with Circular Icon Nodes */}
        <div className="lg:col-span-1 hidden lg:flex flex-col items-center justify-center py-6 relative border-l border-gray-100">
          {/* Vertical connecting line */}
          <div className="absolute top-10 bottom-10 w-0.5 bg-gray-300 pointer-events-none" />

          {/* Node buttons */}
          <div className="relative z-10 flex flex-col gap-4">
            {rightTrackNodes.map((node, nIdx) => {
              const Icon = node.icon;
              return (
                <a
                  key={nIdx}
                  href={node.href}
                  title={node.label}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
                    node.active
                      ? 'bg-[#F4B41A] text-[#141517] scale-105 border-2 border-white'
                      : 'bg-[#141517] text-white hover:bg-[#F4B41A] hover:text-[#141517] hover:scale-105 border-2 border-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
