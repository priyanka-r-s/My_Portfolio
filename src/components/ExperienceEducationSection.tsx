import React from 'react';
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
  Trophy,
  FileDown,
  ArrowUpRight,
} from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface ExperienceEducationSectionProps {
  data: PortfolioData;
}

export const ExperienceEducationSection: React.FC<ExperienceEducationSectionProps> = ({
  data,
}) => {
  return (
    <section id="experience" className="pt-16 pb-6 sm:pt-20 sm:pb-8 lg:pt-20 lg:pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
        <div className="flex items-center justify-center gap-2 mb-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F4B41A]" />
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#F4B41A] font-bold block">
            Career Journey & Foundation
          </span>
        </div>
        <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#141517] tracking-tight uppercase">
          RESUME & <span className="text-[#F4B41A]">EXPERIENCE</span>
        </h2>
        <div className="w-12 h-1 bg-[#F4B41A] mx-auto mt-2 rounded-full" />
        {data.resumeUrl && (
          <div className="mt-4">
            <a
              href={data.resumeUrl}
              download="Priyanka_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#141517] text-white hover:bg-[#F4B41A] hover:text-[#141517] text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              <FileDown className="w-4 h-4 text-[#F4B41A] group-hover:text-[#141517] group-hover:translate-y-0.5 transition-all" />
              <span>Download Official Resume (PDF)</span>
            </a>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Left Column: Work Experience (WEINTERN Internship) */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-9 h-9 rounded-full bg-[#F4B41A] text-[#141517] flex items-center justify-center shadow-xs border border-yellow-300">
              <Briefcase className="w-4 h-4 stroke-[2.2]" />
            </div>
            <h3 className="font-display font-black text-lg sm:text-xl text-[#141517] uppercase tracking-wide">
              Internship Experience
            </h3>
          </div>

          {data.experience.map((exp, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-[24px] bg-white border border-gray-200/90 shadow-md hover:shadow-lg transition-shadow relative overflow-hidden"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#F4B41A] text-[#141517] text-[9px] font-mono uppercase tracking-wider font-black mb-2 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#141517] animate-pulse" />
                <span>{exp.mode}</span>
              </div>

              <h4 className="font-display font-black text-lg text-[#141517]">
                {exp.role}
              </h4>
              <p className="text-xs font-bold text-gray-700 mt-0.5">
                {exp.company}
              </p>

              <div className="flex flex-wrap items-center gap-3 text-[11px] text-gray-500 mt-1 mb-3.5 font-medium">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[#F4B41A]" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#F4B41A]" />
                  {exp.location}
                </span>
              </div>

              <div className="space-y-1.5 mb-3.5">
                {exp.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F4B41A] flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-600 leading-relaxed font-normal">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-gray-100 flex flex-wrap gap-1">
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded-full bg-[#F3F4F6] text-[#141517] font-mono text-[9px] font-bold border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Honors & Recognition */}
          <div className="p-5 rounded-[24px] bg-[#141517] text-white shadow-lg border border-gray-800">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#F4B41A] text-[#141517] flex items-center justify-center">
                <Trophy className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <h4 className="font-display font-black text-sm sm:text-base text-white uppercase tracking-wider">
                Honors & Recognition
              </h4>
            </div>

            <div className="space-y-2.5">
              {data.achievements.map((ach, achIdx) => (
                <div key={achIdx} className="border-l-2 border-[#F4B41A] pl-3 py-0.5">
                  <h5 className="font-display font-bold text-xs text-white">
                    {ach.title}
                  </h5>
                  <p className="text-[11px] text-gray-400 mt-0.5 leading-tight">
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Education & Certifications */}
        <div id="education" className="lg:col-span-6 space-y-4">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-9 h-9 rounded-full bg-[#F4B41A] text-[#141517] flex items-center justify-center shadow-xs border border-yellow-300">
              <GraduationCap className="w-4 h-4 stroke-[2.2]" />
            </div>
            <h3 className="font-display font-black text-lg sm:text-xl text-[#141517] uppercase tracking-wide">
              Education
            </h3>
          </div>

          <div className="space-y-3">
            {data.education.map((edu, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-[24px] bg-white border border-gray-200/90 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex-1">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-[#F4B41A] font-bold">
                    {edu.period}
                  </span>
                  <h4 className="font-display font-black text-base text-[#141517] mt-0.5">
                    {edu.degree}
                  </h4>
                  <p className="text-xs font-bold text-gray-700">
                    {edu.institution}
                  </p>
                  {edu.university && (
                    <p className="text-[11px] text-gray-500 mt-0.5">{edu.university}</p>
                  )}
                  {edu.details && (
                    <p className="text-[11px] text-gray-600 mt-1 leading-snug font-normal">
                      {edu.details}
                    </p>
                  )}
                </div>

                <div className="flex-shrink-0 self-start sm:self-center px-3.5 py-1.5 rounded-xl bg-amber-50/90 border border-amber-200/90 text-left sm:text-right">
                  <span className="font-display font-black text-sm text-[#141517] block leading-tight">
                    {edu.score}
                  </span>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#B45309] block mt-0.5">
                    {edu.scoreLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-[#F4B41A]" />
              <h4 className="font-display font-black text-base uppercase tracking-wider text-[#141517]">
                Certifications & Training
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {data.certifications.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className="p-4 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-[#F4B41A] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#F4B41A] block">
                        {cert.issuer}
                      </span>
                      {cert.year && (
                        <span className="text-[9px] font-mono font-bold text-gray-400">
                          {cert.year}
                        </span>
                      )}
                    </div>
                    <h5 className="font-display font-bold text-sm text-[#141517] mt-0.5 leading-snug">
                      {cert.title}
                    </h5>
                    <p className="text-[11px] text-gray-600 mt-1 line-clamp-2">
                      {cert.description}
                    </p>
                  </div>

                  {cert.credentialUrl && (
                    <div className="pt-2 mt-2 border-t border-gray-100">
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider text-[#141517] hover:text-[#F4B41A] transition-colors"
                      >
                        <span>View Certificate</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
