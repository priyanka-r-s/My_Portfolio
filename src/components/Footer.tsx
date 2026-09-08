import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { PortfolioData } from '../types/portfolio';

interface FooterProps {
  data: PortfolioData;
}

export const Footer: React.FC<FooterProps> = ({ data }) => {
  return (
    <footer className="bg-[#141517] text-white pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-gray-800">
          {/* Col 1: Brand & Socials */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="inline-block">
              <span className="font-display text-2xl font-black tracking-wider text-white flex items-center gap-1">
                {data.brandName}
                <span className="text-xs text-[#F4B41A]">✦</span>
              </span>
              <span className="text-[9px] tracking-[0.3em] text-[#F4B41A] uppercase font-mono font-bold block -mt-0.5">
                {data.brandSub}
              </span>
            </a>

            <p className="text-xs text-gray-400 max-w-sm leading-relaxed font-normal">
              Transforming raw data into meaningful insights and predictive solutions
              using Python, SQL, Machine Learning, and Power BI.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={data.socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#1C1F26] border border-gray-800 flex items-center justify-center text-gray-300 hover:bg-[#F4B41A] hover:text-[#141517] transition-all shadow-sm"
                aria-label="GitHub"
                title="GitHub (19+ Repos)"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={data.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#1C1F26] border border-gray-800 flex items-center justify-center text-gray-300 hover:bg-[#F4B41A] hover:text-[#141517] transition-all shadow-sm"
                aria-label="LinkedIn"
                title="LinkedIn Profile"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href={`mailto:${data.email}`}
                className="w-10 h-10 rounded-full bg-[#1C1F26] border border-gray-800 flex items-center justify-center text-gray-300 hover:bg-[#F4B41A] hover:text-[#141517] transition-all shadow-sm"
                aria-label="Email"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-mono tracking-widest uppercase text-[#F4B41A] font-black mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <a href="#about" className="hover:text-[#F4B41A] transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#F4B41A] transition-colors">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#F4B41A] transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#F4B41A] transition-colors">
                  Work Experience
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-[#F4B41A] transition-colors">
                  Education & Certs
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Domains */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-mono tracking-widest uppercase text-[#F4B41A] font-black mb-4">
              Core Competencies
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>Exploratory Data Analysis (EDA)</li>
              <li>Machine Learning & Predictive Modeling</li>
              <li>Time-Series Forecasting (ARIMA/LSTM)</li>
              <li>Power BI & Visual Dashboarding</li>
              <li>Complex SQL Querying & ETL</li>
            </ul>
          </div>

          {/* Col 4: Contact & Rotating Seal */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#F4B41A] shadow-md flex-shrink-0 bg-gray-800">
                  <img
                    src={data.contactPortrait || data.aboutPortrait || data.heroPortrait}
                    alt={data.creatorName}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="text-[11px] font-mono tracking-widest uppercase text-[#F4B41A] font-black">
                    Direct Contact
                  </h4>
                  <p className="text-xs text-white font-bold">{data.creatorName}</p>
                </div>
              </div>
              <p className="text-xs text-white font-medium">{data.email}</p>
              <p className="text-xs text-gray-400 mt-0.5">{data.phone}</p>
              <p className="text-xs text-gray-500 mt-1 font-mono uppercase">
                {data.location}
              </p>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full border border-[#F4B41A]/50 flex items-center justify-center bg-[#1C1F26]">
                <svg
                  className="absolute inset-0 w-full h-full animate-spin-slow"
                  viewBox="0 0 100 100"
                >
                  <path
                    id="footerCircle"
                    d="M 50, 50 m -32, 0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0"
                    fill="transparent"
                  />
                  <text className="text-[7.5px] tracking-[0.22em] fill-[#F4B41A] uppercase font-mono font-bold">
                    <textPath href="#footerCircle">
                      DATA • ANALYTICS • INSIGHTS • ML •
                    </textPath>
                  </text>
                </svg>
                <span className="text-xs text-[#F4B41A]">✦</span>
              </div>
              <span className="text-[10px] text-gray-400 font-display font-bold uppercase tracking-wider">
                {data.creatorName}
              </span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {data.creatorName}. All rights reserved.</p>
          <p className="text-[11px] font-mono tracking-wide text-gray-400">
            Data Analyst | Data Science • Pune, India
          </p>
        </div>
      </div>
    </footer>
  );
};
