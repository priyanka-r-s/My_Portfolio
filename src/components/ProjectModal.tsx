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

      <div className="relative bg-white w-full max-w-2xl rounded-[32px] overflow-hidden shadow-2xl z-10 border border-gray-200 my-8 animate-in fade-in zoom-in-95 duration-200">
        <div className="relative h-64 sm:h-72 w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141517] via-[#141517]/50 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#141517]/80 text-white hover:bg-[#F4B41A] hover:text-[#141517] flex items-center justify-center transition-colors"
            aria-label="Close project"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div>
              <span className="text-xs font-mono tracking-wider uppercase text-[#F4B41A] font-bold">
                {project.category}
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                {project.title}
              </h3>
            </div>
            <div className="bg-[#141517] border border-gray-700 px-4 py-2 rounded-2xl text-right shadow-md">
              <span className="font-display font-black text-2xl text-[#F4B41A] block leading-none">
                {project.metric}
              </span>
              <span className="text-[10px] text-gray-300 font-bold uppercase tracking-wider">
                {project.metricLabel}
              </span>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6 text-[#141517]">
          <div>
            <h4 className="text-xs font-mono tracking-widest uppercase text-[#F4B41A] mb-1 font-bold">
              Project Overview & Context
            </h4>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.challenge && (
              <div className="p-4 rounded-2xl bg-[#F3F4F6] border border-gray-200">
                <h5 className="font-display text-sm font-bold text-[#141517] mb-1.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F4B41A]" />
                  The Problem / Challenge
                </h5>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            )}

            {project.solution && (
              <div className="p-4 rounded-2xl bg-[#F3F4F6] border border-gray-200">
                <h5 className="font-display text-sm font-bold text-[#141517] mb-1.5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F4B41A]" />
                  The Methodology & ML Solution
                </h5>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}
          </div>

          {project.outcome && (
            <div className="p-4 rounded-2xl bg-[#141517] text-white border border-gray-800 flex items-start gap-3 shadow-md">
              <TrendingUp className="w-5 h-5 text-[#F4B41A] mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-xs font-mono tracking-wider uppercase text-[#F4B41A] font-bold block mb-0.5">
                  Analytical Results & Impact
                </span>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                  {project.outcome}
                </p>
              </div>
            </div>
          )}

          <div className="pt-1 flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-[#F3F4F6] text-gray-800 text-xs font-bold font-mono border border-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="pt-3 border-t border-gray-200 flex items-center justify-between">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F3F4F6] hover:bg-[#F4B41A] hover:text-[#141517] text-gray-800 text-xs font-bold border border-gray-300 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View on GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#141517] text-white text-xs font-black uppercase tracking-wider hover:bg-[#F4B41A] hover:text-[#141517] transition-colors ml-auto"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
