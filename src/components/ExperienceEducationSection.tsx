import React from 'react';
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
  Trophy,
} from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface ExperienceEducationSectionProps {
  data: PortfolioData;
}

export const ExperienceEducationSection: React.FC<ExperienceEducationSectionProps> = ({
  data,
}) => {
  return (
    <section id="experience" className="py-16 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#7A846A] font-semibold block mb-2">
            Career Journey & Foundation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1D2217] tracking-tight">
            Experience &{' '}
            <span className="italic font-normal text-[#586545]">Education.</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#B08E55] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Work Experience (WEINTERN Internship) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-[#EBE4D5] border border-[#DDD3BF] flex items-center justify-center text-[#586545]">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1D2217]">
                Internship Experience
              </h3>
            </div>

            {data.experience.map((exp, idx) => (
              <div
                key={idx}
                className="p-7 sm:p-8 rounded-[32px] bg-[#F4EFEA] border border-[#DDD3BF] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#545E44] text-[#FAF7F2] text-[10px] font-mono uppercase tracking-wider font-semibold mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D6BA85] animate-pulse" />
                  <span>{exp.mode}</span>
                </div>

                <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#1D2217]">
                  {exp.role}
                </h4>
                <p className="text-sm font-semibold text-[#586545] mt-0.5">
                  {exp.company}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-[#7A846A] mt-2 mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#B08E55]" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#B08E55]" />
                    {exp.location}
                  </span>
                </div>

                <div className="space-y-2.5 mb-6">
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#586545] flex-shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-[#465037] leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#E5DEC9] flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-full bg-[#EBE4D5] text-[#465037] font-mono text-[10px] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Honors & Recognition */}
            <div className="p-6 rounded-[28px] bg-[#545E44] text-[#FAF7F2] shadow-md border border-[#6B7A54]">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-5 h-5 text-[#D6BA85]" />
                <h4 className="font-serif text-lg font-bold text-[#FAF7F2]">
                  Honors & Recognition
                </h4>
              </div>

              <div className="space-y-3.5">
                {data.achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="border-l-2 border-[#D6BA85] pl-3 py-0.5">
                    <h5 className="font-serif text-sm font-bold text-[#FAF7F2]">
                      {ach.title}
                    </h5>
                    <p className="text-xs text-[#CBD2BE] mt-0.5 leading-relaxed font-light">
                      {ach.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Education & Certifications */}
          <div id="education" className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-[#EBE4D5] border border-[#DDD3BF] flex items-center justify-center text-[#586545]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1D2217]">
                Education
              </h3>
            </div>

            <div className="space-y-4">
              {data.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-[28px] bg-[#F4EFEA] border border-[#DDD3BF] flex flex-col sm:flex-row sm:items-start justify-between gap-4"
                >
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#7A846A]">
                      {edu.period}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-[#1D2217] mt-0.5">
                      {edu.degree}
                    </h4>
                    <p className="text-xs sm:text-sm font-medium text-[#586545]">
                      {edu.institution}
                    </p>
                    {edu.university && (
                      <p className="text-xs text-[#7A846A] mt-0.5">{edu.university}</p>
                    )}
                    {edu.details && (
                      <p className="text-xs text-[#5A6350] mt-2 leading-relaxed font-light">
                        {edu.details}
                      </p>
                    )}
                  </div>

                  <div className="flex-shrink-0 self-start sm:self-auto bg-[#FAF7F2] border border-[#DDD3BF] px-4 py-2 rounded-2xl text-center shadow-xs">
                    <span className="font-serif text-lg font-bold text-[#1D2217] block leading-none">
                      {edu.score}
                    </span>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-[#586545] font-semibold">
                      {edu.scoreLabel}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-4 h-4 text-[#B08E55]" />
                <h4 className="font-serif text-base font-bold text-[#1D2217]">
                  Certifications & Technical Training
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.certifications.map((cert, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-4 rounded-2xl bg-[#EBE4D5]/70 border border-[#DDD3BF] flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[9px] font-mono font-semibold uppercase tracking-wider text-[#586545] block">
                        {cert.issuer}
                      </span>
                      <h5 className="font-serif text-sm font-bold text-[#1D2217] mt-0.5 leading-snug">
                        {cert.title}
                      </h5>
                      <p className="text-[11px] text-[#5A6350] mt-1 line-clamp-2">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
