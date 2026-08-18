import React, { useState } from 'react';
import { experienceData } from '../data/portfolioData';
import { GitCommit, Calendar, MapPin, Building, Globe, CheckCircle2, ChevronDown, ChevronUp, Terminal, ExternalLink } from 'lucide-react';

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>(experienceData[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section id="experience" className="py-24 relative bg-[#0D1015]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-cyan-400 font-mono text-sm tracking-wider font-semibold">
            04 — EXPERIENCE & CAREER CHANGELOG
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 via-white/10 to-transparent" />
        </div>

        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            5+ years building with high-velocity international teams.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Demonstrated engineering reliability across distributed remote environments in Singapore, Japan, and Myanmar.
          </p>
        </div>

        {/* Timeline Changelog Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-12 ml-2 sm:ml-4">
          
          {experienceData.map((exp, idx) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div
                key={exp.id}
                id={`experience-item-${exp.id}`}
                className="relative group"
              >
                {/* Timeline node icon */}
                <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                  exp.isCurrent
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-500/50'
                    : 'bg-[#11151C] text-slate-400 border-white/20 group-hover:border-cyan-400'
                }`}>
                  <GitCommit className="w-3.5 h-3.5" />
                </div>

                {/* Card */}
                <div className="rounded-2xl bg-[#11151C] border border-white/10 hover:border-cyan-500/30 transition-all p-6 sm:p-7 shadow-xl">
                  
                  {/* Card Top Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/5">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                          {exp.role}
                        </h3>
                        <span className="text-cyan-400 font-mono text-sm font-semibold">
                          @ {exp.company}
                        </span>
                        {exp.isCurrent && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                            CURRENT ROLE
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mt-1.5">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          <span>{exp.location} {exp.isRemote ? '(Remote)' : '(Onsite)'}</span>
                        </span>
                        <span className="flex items-center gap-1 text-cyan-300">
                          <Globe className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{exp.teamRegion} Engineering Hub</span>
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-start sm:self-auto">
                      <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 font-mono text-xs text-slate-300">
                        {exp.period}
                      </span>
                      <button
                        onClick={() => toggleExpand(exp.id)}
                        className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                        aria-label="Toggle details"
                      >
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-slate-300 text-sm leading-relaxed mt-4">
                    {exp.summary}
                  </p>

                  {/* Expanded Responsibilities & Achievements */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-white/5 space-y-3 animate-in fade-in duration-200">
                      <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                        // Key Contributions & Responsibilities:
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2.5">
                            <span className="text-cyan-400 font-mono text-xs mt-0.5">❯</span>
                            <span className="leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mt-5 pt-3 border-t border-white/5">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-[#08090C] border border-white/5 font-mono text-[11px] text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
