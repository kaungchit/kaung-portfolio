import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { ExternalLink, Github, ArrowUpRight, X, CheckCircle2, Layers, Cpu, ShieldCheck } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Full-Stack', 'FinTech & Accounting', 'Enterprise / Backend', 'Frontend / UI'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-[#0B0E14] border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-cyan-400 font-semibold text-xs uppercase tracking-widest">
              Selected Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-1">
              Featured Projects & Systems
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Production-grade applications built for scale, reliability, and business impact.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`project-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-lg group"
            >
              <div className="space-y-4">
                
                {/* Card Top row */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {project.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    #{project.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Metrics / Highlights */}
                <div className="grid grid-cols-3 gap-2 pt-2">
                  {project.previewDetails.stats.map((st, i) => (
                    <div key={i} className="p-2 rounded-xl bg-slate-800/60 border border-slate-800 text-center">
                      <div className="text-sm font-bold text-white">{st.value}</div>
                      <div className="text-[10px] text-slate-400 truncate">{st.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-xs bg-slate-800/80 text-slate-300 border border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-2">
                <button
                  id={`project-deepdive-btn-${project.id}`}
                  onClick={() => setActiveModalProject(project)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Case Study & Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                </button>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-slate-800 hover:bg-cyan-500/20 hover:text-cyan-300 text-slate-400 transition-colors"
                    title="External Link"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-150">
          <div className="relative w-full max-w-3xl bg-[#0F131B] border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden my-auto">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#141A24]">
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  Case Study // {activeModalProject.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 text-sm text-slate-300 max-h-[80vh] overflow-y-auto">
              
              {/* Problem / Challenge */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  The Problem & Challenge:
                </h4>
                <p className="text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  {activeModalProject.challenge}
                </p>
              </div>

              {/* Solution & Architecture */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  Engineering Solution:
                </h4>
                <p className="text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  {activeModalProject.solution}
                </p>
              </div>

              {/* Key Deliverables & Outcomes */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  Verified Production Outcomes:
                </h4>
                <ul className="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  {activeModalProject.impactMetrics.map((out, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architecture Stack */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  System Stack:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.technologies.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md text-xs bg-slate-800 text-slate-200 border border-slate-700/60 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-slate-800 bg-[#141A24] flex justify-end">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
