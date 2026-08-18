import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { ExternalLink, Github, Code2, Layers, CheckCircle2, ArrowUpRight, Terminal, Sparkles, X, Activity, ShieldAlert, Cpu } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Full-Stack', 'FinTech & Accounting', 'Enterprise / Backend', 'Frontend / UI'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative bg-[#08090C] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-cyan-400 font-mono text-sm tracking-wider font-semibold">
            03 — SELECTED WORK & CASE STUDIES
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 via-white/10 to-transparent" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured engineering projects & scalable systems.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Each project represents real production code addressing complex business constraints, performance tuning, and high availability.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#0D1015] p-1.5 rounded-xl border border-white/10 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`project-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Project Showcases (Alternating Layout) */}
        <div className="space-y-20">
          {filteredProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={project.id}
                id={`project-showcase-${project.id}`}
                className="group relative rounded-3xl bg-[#0D1015] border border-white/10 hover:border-cyan-500/40 p-6 sm:p-8 lg:p-10 transition-all duration-300 shadow-xl hover:shadow-cyan-950/30"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}>
                  
                  {/* Visual Preview / Browser Window Mockup */}
                  <div className={`lg:col-span-6 ${isEven ? '' : 'lg:col-start-7'}`}>
                    <div className="relative rounded-2xl bg-[#11151C] border border-white/15 overflow-hidden shadow-2xl group-hover:scale-[1.01] transition-transform duration-300">
                      
                      {/* Browser Window Header */}
                      <div className="px-4 py-3 bg-[#08090C] border-b border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        </div>
                        <div className="px-3 py-0.5 rounded-md bg-white/5 border border-white/5 text-[11px] font-mono text-slate-400 truncate max-w-[220px]">
                          app.internal/{project.id}
                        </div>
                        <span className="text-[10px] font-mono text-cyan-400">PROD_ENV</span>
                      </div>

                      {/* Mockup Canvas */}
                      <div className="p-5 sm:p-6 bg-gradient-to-br from-[#0D1015] to-[#11151C] space-y-4 min-h-[260px] flex flex-col justify-between">
                        
                        {/* Mockup Top Banner */}
                        <div className="flex items-center justify-between pb-3 border-b border-white/5">
                          <div>
                            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                              {project.previewDetails.mockupType}
                            </span>
                            <h4 className="text-white font-semibold text-sm sm:text-base mt-0.5">
                              {project.title}
                            </h4>
                          </div>
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                            {project.category}
                          </span>
                        </div>

                        {/* Interactive Stats Grid on Mockup */}
                        <div className="grid grid-cols-3 gap-2">
                          {project.previewDetails.stats.map((st, i) => (
                            <div key={i} className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-center">
                              <div className="text-sm sm:text-base font-bold font-mono text-white">
                                {st.value}
                              </div>
                              <div className="text-[10px] font-mono text-slate-400 truncate">
                                {st.label}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Code Highlight if present */}
                        {project.previewDetails.codeHighlight ? (
                          <div className="p-3 rounded-lg bg-[#08090C] border border-white/10 font-mono text-[11px] text-slate-300 overflow-x-auto leading-relaxed">
                            <pre>
                              <code>{project.previewDetails.codeHighlight}</code>
                            </pre>
                          </div>
                        ) : (
                          <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-400 flex items-center justify-between">
                            <span className="font-mono text-[11px] text-slate-300">
                              Architecture: {project.architecture.join(' • ')}
                            </span>
                          </div>
                        )}

                        {/* Action CTA within mockup */}
                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="w-full py-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/40 text-xs font-mono text-slate-300 hover:text-cyan-300 flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <span>Inspect Technical Architecture & Deep Dive</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                    </div>
                  </div>

                  {/* Project Information Details */}
                  <div className={`lg:col-span-6 space-y-5 ${isEven ? '' : 'lg:col-start-1'}`}>
                    
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-3xl sm:text-4xl font-bold text-cyan-400/60">
                        {project.number}
                      </span>
                      <span className="text-slate-500">/</span>
                      <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm font-mono text-cyan-400/90 mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Impact Metrics */}
                    <div className="space-y-2 bg-[#11151C]/70 p-4 rounded-2xl border border-white/5">
                      <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                        // Key Engineering Outcomes:
                      </div>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                        {project.impactMetrics.map((metric, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{metric}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technology Stack Tags */}
                    <div className="space-y-2">
                      <div className="text-[11px] font-mono uppercase text-slate-500 tracking-wider">
                        Technologies Deployed:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        id={`project-casestudy-btn-${project.id}`}
                        onClick={() => setActiveModalProject(project)}
                        className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-bold flex items-center gap-1.5 transition-all shadow-md shadow-cyan-500/20"
                      >
                        <Layers className="w-3.5 h-3.5" />
                        <span>Case Study & Architecture</span>
                      </button>

                      {project.liveUrl && (
                        <a
                          id={`project-live-btn-${project.id}`}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 hover:text-white font-mono text-xs font-medium flex items-center gap-1.5 transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Live Site</span>
                        </a>
                      )}

                      <a
                        id={`project-github-btn-${project.id}`}
                        href="https://github.com/kaungchitsan"
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-mono text-xs flex items-center gap-1.5 transition-all"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub Code</span>
                      </a>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Deep-Dive Case Study Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-[#0D1015] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="px-6 py-4 bg-[#11151C] border-b border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                  CASE_STUDY // PROJECT #{activeModalProject.number}
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 space-y-6 overflow-y-auto">
              
              {/* The Challenge */}
              <div className="space-y-2 p-4 rounded-xl bg-rose-500/5 border border-rose-500/20">
                <h4 className="text-xs font-mono font-bold uppercase text-rose-400 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4" />
                  <span>The Architectural Challenge</span>
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeModalProject.challenge}
                </p>
              </div>

              {/* The Solution */}
              <div className="space-y-2 p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                <h4 className="text-xs font-mono font-bold uppercase text-cyan-400 flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  <span>The Technical Solution</span>
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeModalProject.solution}
                </p>
              </div>

              {/* Architecture & Flow */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider">
                  // Architectural Components
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalProject.architecture.map((item, i) => (
                    <div key={i} className="p-3 rounded-lg bg-[#11151C] border border-white/5 text-xs font-mono text-slate-300 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-cyan-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider">
                  // Verified Production Metrics
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeModalProject.impactMetrics.map((m, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-200">
                      <div className="font-semibold text-cyan-300 mb-1">Outcome #{i + 1}</div>
                      <div>{m}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider">
                  // Deployed Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.technologies.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded bg-[#11151C] border border-white/10 text-xs font-mono text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-[#11151C] border-t border-white/10 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Authored by Kaung Chit San</span>
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400"
              >
                Done
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
