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
    <section id="projects" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#181A15] text-[#FAF7F2] rounded-[36px] sm:rounded-[48px] p-6 sm:p-10 lg:p-14 shadow-2xl border border-[#2A2E24] overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="max-w-xl">
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#D6BA85] font-semibold block mb-2">
                Featured Work & Repositories
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#FAF7F2] tracking-tight leading-tight">
                Real Projects,{' '}
                <span className="italic font-normal text-[#CBD2BE]">Measurable Results.</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#AAB597] mt-3 font-light leading-relaxed">
                Applied machine learning, statistical exploratory analysis, and automated Python applications.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-[#232620] p-1.5 rounded-full border border-[#383F2C]">
              <button
                onClick={() => setFilter('flagship')}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  filter === 'flagship'
                    ? 'bg-[#545E44] text-[#FAF7F2] shadow-sm'
                    : 'text-[#AAB597] hover:text-[#FAF7F2]'
                }`}
              >
                Flagship ML & Analytics
              </button>
              <button
                onClick={() => setFilter('python_app')}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  filter === 'python_app'
                    ? 'bg-[#545E44] text-[#FAF7F2] shadow-sm'
                    : 'text-[#AAB597] hover:text-[#FAF7F2]'
                }`}
              >
                Python & Tools
              </button>
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  filter === 'all'
                    ? 'bg-[#545E44] text-[#FAF7F2] shadow-sm'
                    : 'text-[#AAB597] hover:text-[#FAF7F2]'
                }`}
              >
                All
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-3xl overflow-hidden cursor-pointer bg-[#232620] border border-[#383F2C] hover:border-[#6B7A54] transition-all duration-300 transform hover:-translate-y-1.5 shadow-lg flex flex-col h-[360px]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-50 group-hover:opacity-65"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#141612] via-[#141612]/70 to-transparent" />

                <div className="relative z-10 p-5 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#181A15]/80 backdrop-blur-md text-[#D6BA85] border border-white/10">
                    {project.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#FAF7F2]/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#FAF7F2] group-hover:bg-[#FAF7F2] group-hover:text-[#1D2217] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="relative z-10 mt-auto p-5">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-[#FAF7F2] block tracking-tight group-hover:text-[#D6BA85] transition-colors">
                    {project.metric}
                  </span>
                  <p className="text-xs text-[#E6E9DF] font-medium tracking-wide mt-1">
                    {project.metricLabel}
                  </p>
                  <h4 className="font-serif text-base font-bold text-white mt-2 leading-snug line-clamp-2">
                    {project.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-[#2A2E24] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs text-[#AAB597]">
              <Code2 className="w-4 h-4 text-[#D6BA85]" />
              <span>
                Looking for all 19+ repositories, Jupyter notebooks, and games?
              </span>
            </div>

            <a
              href={data.socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FAF7F2] text-[#1D2217] text-xs font-semibold hover:bg-[#EFE9DD] transition-all duration-300 shadow-md group"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Explore GitHub Repositories</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
