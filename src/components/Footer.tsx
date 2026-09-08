import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { PortfolioData } from '../types/portfolio';

interface FooterProps {
  data: PortfolioData;
}

export const Footer: React.FC<FooterProps> = ({ data }) => {
  return (
    <footer className="bg-[#141612] text-[#FAF7F2] pt-16 pb-12 border-t border-[#232620]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#232620]">
          {/* Col 1: Brand & Socials */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="inline-block">
              <span className="font-serif text-2xl font-bold tracking-widest text-[#FAF7F2] flex items-center gap-1">
                {data.brandName}
                <span className="text-xs text-[#D6BA85]">✦</span>
              </span>
              <span className="text-[9px] tracking-[0.3em] text-[#7A846A] uppercase font-mono block -mt-1">
                {data.brandSub}
              </span>
            </a>

            <p className="text-xs text-[#CBD2BE] max-w-sm leading-relaxed font-light">
              Transforming raw data into meaningful insights and predictive solutions
              using Python, SQL, Machine Learning, and Power BI.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={data.socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#232620] border border-[#383F2C] flex items-center justify-center text-[#E6E9DF] hover:bg-[#586545] hover:text-[#FAF7F2] transition-colors"
                aria-label="GitHub"
                title="GitHub (19+ Repos)"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={data.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#232620] border border-[#383F2C] flex items-center justify-center text-[#E6E9DF] hover:bg-[#586545] hover:text-[#FAF7F2] transition-colors"
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
                className="w-9 h-9 rounded-full bg-[#232620] border border-[#383F2C] flex items-center justify-center text-[#E6E9DF] hover:bg-[#586545] hover:text-[#FAF7F2] transition-colors"
                aria-label="Email"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-mono tracking-widest uppercase text-[#D6BA85] font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#AAB597]">
              <li>
                <a href="#about" className="hover:text-[#FAF7F2] transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#FAF7F2] transition-colors">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#FAF7F2] transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#FAF7F2] transition-colors">
                  Work Experience
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-[#FAF7F2] transition-colors">
                  Education & Certs
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Domains */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-mono tracking-widest uppercase text-[#D6BA85] font-semibold mb-4">
              Core Competencies
            </h4>
            <ul className="space-y-2.5 text-xs text-[#AAB597]">
              <li>Exploratory Data Analysis (EDA)</li>
              <li>Machine Learning & Modeling</li>
              <li>Time-Series Forecasting (ARIMA/LSTM)</li>
              <li>Power BI & Visual Dashboarding</li>
              <li>Complex SQL Querying & ETL</li>
            </ul>
          </div>

          {/* Col 4: Contact & Rotating Seal */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-[11px] font-mono tracking-widest uppercase text-[#D6BA85] font-semibold mb-4">
                Direct Contact
              </h4>
              <p className="text-xs text-[#FAF7F2] font-medium">{data.email}</p>
              <p className="text-xs text-[#AAB597] mt-1">{data.phone}</p>
              <p className="text-xs text-[#7A846A] mt-2 font-mono uppercase">
                {data.location}
              </p>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full border border-[#B08E55]/60 flex items-center justify-center">
                <svg
                  className="absolute inset-0 w-full h-full animate-spin-slow"
                  viewBox="0 0 100 100"
                >
                  <path
                    id="footerCircle"
                    d="M 50, 50 m -32, 0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0"
                    fill="transparent"
                  />
                  <text className="text-[7.5px] tracking-[0.22em] fill-[#D6BA85] uppercase font-mono">
                    <textPath href="#footerCircle">
                      DATA • ANALYTICS • INSIGHTS • ML •
                    </textPath>
                  </text>
                </svg>
                <span className="text-xs text-[#D6BA85]">✦</span>
              </div>
              <span className="text-[10px] text-[#AAB597] font-serif italic">
                Priyanka Rani Sahu
              </span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A846A]">
          <p>© {new Date().getFullYear()} Priyanka Rani Sahu. All rights reserved.</p>
          <p className="text-[11px] font-mono tracking-wide">
            Data Analyst | Data Science • Pune, India
          </p>
        </div>
      </div>
    </footer>
  );
};
