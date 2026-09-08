import React from 'react';
import { X, ArrowUpRight, CheckCircle2, TrendingUp } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-[#FAF7F2] w-full max-w-2xl rounded-[32px] overflow-hidden shadow-2xl z-10 border border-[#DDD3BF] my-8 animate-in fade-in zoom-in-95 duration-200">
        <div className="relative h-64 sm:h-72 w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141612] via-transparent to-black/30" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#1D2217]/80 text-[#FAF7F2] hover:bg-[#1D2217] flex items-center justify-center transition-colors"
            aria-label="Close project"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div>
              <span className="text-xs font-mono tracking-wider uppercase text-[#D6BA85] font-semibold">
                {project.category}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                {project.title}
              </h3>
            </div>
            <div className="bg-[#FAF7F2]/95 backdrop-blur-md px-4 py-2 rounded-2xl text-right shadow-md">
              <span className="font-serif text-2xl font-bold text-[#1D2217] block leading-none">
                {project.metric}
              </span>
              <span className="text-[10px] text-[#586545] font-semibold uppercase tracking-wider">
                {project.metricLabel}
              </span>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6 text-[#2A3022]">
          <div>
            <h4 className="text-xs font-mono tracking-widest uppercase text-[#7A846A] mb-1 font-semibold">
              Project Overview & Context
            </h4>
            <p className="text-sm sm:text-base text-[#465037] leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.challenge && (
              <div className="p-4 rounded-2xl bg-[#F4EFEA] border border-[#DDD3BF]">
                <h5 className="font-serif text-base font-semibold text-[#1D2217] mb-1.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B08E55]" />
                  The Problem / Challenge
                </h5>
                <p className="text-xs sm:text-sm text-[#586545] leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            )}

            {project.solution && (
              <div className="p-4 rounded-2xl bg-[#F4EFEA] border border-[#DDD3BF]">
                <h5 className="font-serif text-base font-semibold text-[#1D2217] mb-1.5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#586545]" />
                  The Methodology & ML Solution
                </h5>
                <p className="text-xs sm:text-sm text-[#586545] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}
          </div>

          {project.outcome && (
            <div className="p-4 rounded-2xl bg-[#545E44] text-[#FAF7F2] flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-[#D6BA85] mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-xs font-mono tracking-wider uppercase text-[#D6BA85] font-bold block mb-0.5">
                  Analytical Results & Impact
                </span>
                <p className="text-xs sm:text-sm text-[#E6E9DF] leading-relaxed font-light">
                  {project.outcome}
                </p>
              </div>
            </div>
          )}

          <div className="pt-1 flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-[#EBE4D5] text-[#465037] text-xs font-medium font-mono"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E5DEC9] flex items-center justify-between">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EFE9DD] hover:bg-[#E4DAC7] text-[#1D2217] text-xs font-medium border border-[#DCD2C0] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View on GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#586545]" />
              </a>
            )}

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#1D2217] text-[#FAF7F2] text-xs font-medium hover:bg-[#383F2C] transition-colors ml-auto"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
