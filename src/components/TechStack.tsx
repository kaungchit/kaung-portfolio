import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { SkillItem } from '../types';
import { Code2, Server, Layout, Database, Wrench, Sparkles, Check, ChevronRight, Terminal, Layers } from 'lucide-react';

export const TechStack: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('backend');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(skillCategories[0].skills[0]);

  const activeCategory = skillCategories.find((c) => c.id === activeCategoryId) || skillCategories[0];

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'backend':
        return Server;
      case 'frontend':
        return Layout;
      case 'integrations':
        return Sparkles;
      case 'devops':
        return Database;
      default:
        return Wrench;
    }
  };

  return (
    <section id="tech-stack" className="py-24 relative bg-[#0D1015]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-cyan-400 font-mono text-sm tracking-wider font-semibold">
            02 — TECH STACK & CAPABILITIES
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 via-white/10 to-transparent" />
        </div>

        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Architected for performance, stability & scale.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Click on any category or technology to inspect architecture implementation details, proficiency depth, and production code patterns.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-white/10 pb-4">
          {skillCategories.map((cat) => {
            const Icon = getCategoryIcon(cat.id);
            const isActive = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                id={`tech-cat-btn-${cat.id}`}
                onClick={() => {
                  setActiveCategoryId(cat.id);
                  setSelectedSkill(cat.skills[0]);
                }}
                className={`px-4 py-2.5 rounded-xl font-mono text-xs font-medium flex items-center gap-2 transition-all ${
                  isActive
                    ? 'bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 shadow-md shadow-cyan-500/10'
                    : 'bg-[#11151C] text-slate-400 hover:text-white border border-white/5 hover:border-white/15'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                <span>{cat.title}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-white/5 text-slate-400">
                  {cat.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Grid: Skills List & Deep Dive Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Skill Chips Grid */}
          <div className="lg:col-span-6 space-y-3">
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              // {activeCategory.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeCategory.skills.map((skill) => {
                const isSelected = selectedSkill.name === skill.name;
                return (
                  <button
                    key={skill.name}
                    id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    onClick={() => setSelectedSkill(skill)}
                    className={`text-left p-4 rounded-xl transition-all border ${
                      isSelected
                        ? 'bg-[#11151C] border-cyan-500/50 shadow-lg shadow-cyan-950/40'
                        : 'bg-[#11151C]/60 hover:bg-[#11151C] border-white/5 hover:border-white/15'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-white text-sm tracking-tight">
                        {skill.name}
                      </h4>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                          skill.level === 'Expert'
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 font-semibold'
                            : 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-3">
                      {skill.description}
                    </p>

                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-2 border-t border-white/5">
                      <span>Exp: {skill.experienceYears}</span>
                      <span className="text-cyan-400 flex items-center gap-0.5 text-[10px]">
                        Inspect <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Selected Skill Deep-Dive Inspector */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-[#11151C] border border-white/15 overflow-hidden shadow-2xl">
              
              {/* Header */}
              <div className="px-5 py-4 bg-[#08090C] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <h3 className="font-mono text-xs font-semibold text-white uppercase tracking-wider">
                    SPEC_INSPECTOR // {selectedSkill.name.toUpperCase()}
                  </h3>
                </div>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
                  {selectedSkill.experienceYears} production usage
                </span>
              </div>

              {/* Body */}
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-1.5 flex items-center gap-2">
                    <span>{selectedSkill.name}</span>
                    <span className="text-xs font-mono font-normal text-slate-400">
                      ({selectedSkill.level} Tier)
                    </span>
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {selectedSkill.description}
                  </p>
                </div>

                {/* Tags */}
                <div>
                  <h5 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Key Competencies & Patterns
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedSkill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Code Snippet if available */}
                {selectedSkill.codeSnippet ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                      <span className="text-cyan-400 flex items-center gap-1.5">
                        <Code2 className="w-3.5 h-3.5" />
                        <span>{selectedSkill.codeSnippet.filename}</span>
                      </span>
                      <span className="text-[11px] text-slate-500">{selectedSkill.codeSnippet.language}</span>
                    </div>
                    <div className="p-4 rounded-xl bg-[#08090C] border border-white/10 font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed">
                      <pre className="text-slate-200">
                        <code>{selectedSkill.codeSnippet.code}</code>
                      </pre>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs font-mono text-slate-400 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Applied across high-volume production projects in Leap Tech & Mysol repositories.</span>
                  </div>
                )}
              </div>

              {/* Bottom footer note */}
              <div className="px-5 py-3 bg-[#08090C]/60 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Domain-Driven Architecture</span>
                <span className="text-slate-400">Verified by Git Commits</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
