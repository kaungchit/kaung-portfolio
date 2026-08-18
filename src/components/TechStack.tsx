import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { Server, Layout, Sparkles, Database, CheckCircle2 } from 'lucide-react';

export const TechStack: React.FC = () => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'backend':
        return Server;
      case 'frontend':
        return Layout;
      case 'fintech':
        return Sparkles;
      default:
        return Database;
    }
  };

  return (
    <section id="skills" className="py-20 bg-[#0E121A] border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-cyan-400 font-semibold text-xs uppercase tracking-widest">
            Skills & Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-1">
            Technical Expertise
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            A battle-tested stack refined across 5+ years of production engineering, high-throughput APIs, and clean UI systems.
          </p>
        </div>

        {/* 4 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => {
            const Icon = getCategoryIcon(category.id);
            return (
              <div
                key={category.id}
                className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all space-y-5"
              >
                {/* Header */}
                <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills list */}
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-white">{skill.name}</span>
                          <span className="text-[11px] text-slate-500">• {skill.experienceYears}</span>
                        </div>
                        <span className="text-[11px] font-medium text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
