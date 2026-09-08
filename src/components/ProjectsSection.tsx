import React, { useState } from 'react';
import { ArrowUpRight, Code2 } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { PortfolioData, Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

interface ProjectsSectionProps {
  data: PortfolioData;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ data }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'all' | 'flagship' | 'python_app'>('flagship');

  const filteredProjects =
    filter === 'all'
      ? data.projects
      : data.projects.filter((p) => p.type === filter);

  return (
    <section id="projects" className="pt-16 pb-6 sm:pt-20 sm:pb-8 lg:pt-20 lg:pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#141517] text-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 lg:p-10 xl:p-11 shadow-2xl border border-gray-800 overflow-hidden relative">
        {/* Subtle yellow glow behind card */}
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#F4B41A]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 relative z-10">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#F4B41A]" />
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#F4B41A] font-bold block">
                Featured Work & Repositories
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
              PROJECTS{' '}
              <span className="text-[#F4B41A]">SECTION</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-2 font-normal leading-relaxed">
              Applied machine learning, statistical exploratory analysis, and automated Python applications.
            </p>
          </div>

          <div className="flex items-center gap-1.5 bg-[#23262D] p-1.5 rounded-full border border-gray-800">
            <button
              onClick={() => setFilter('flagship')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                filter === 'flagship'
                  ? 'bg-[#F4B41A] text-[#141517] shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Flagship ML
            </button>
            <button
              onClick={() => setFilter('python_app')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                filter === 'python_app'
                  ? 'bg-[#F4B41A] text-[#141517] shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Python Tools
            </button>
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                filter === 'all'
                  ? 'bg-[#F4B41A] text-[#141517] shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              All
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8 relative z-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-[#1C1F26] border border-gray-800 hover:border-[#F4B41A] transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex flex-col h-[310px] sm:h-[340px]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-65 group-hover:opacity-85"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-[#121316]/55 to-transparent/30" />

              <div className="relative z-10 p-5 flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-[#F4B41A] text-[#141517] font-black shadow-xs">
                  {project.category}
                </span>
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-[#F4B41A] group-hover:text-[#141517] transition-colors shadow-sm">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="relative z-10 mt-auto p-5">
                <span className="font-display font-black text-2xl sm:text-3xl text-[#F4B41A] block tracking-tight group-hover:scale-105 transition-transform origin-left">
                  {project.metric}
                </span>
                <p className="text-[11px] text-gray-300 font-bold uppercase tracking-wider mt-0.5">
                  {project.metricLabel}
                </p>
                <h4 className="font-display font-bold text-sm sm:text-base text-white mt-1.5 leading-snug line-clamp-2">
                  {project.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 relative z-10">
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <Code2 className="w-4 h-4 text-[#F4B41A]" />
            <span>
              Looking for all 19+ repositories, Jupyter notebooks, and apps?
            </span>
          </div>

          <a
            href={data.socials.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#F4B41A] text-[#141517] text-xs font-black uppercase tracking-wider hover:bg-yellow-400 transition-all duration-300 shadow-md group"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Explore GitHub Repositories</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
