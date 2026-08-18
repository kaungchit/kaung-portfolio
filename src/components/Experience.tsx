import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, MapPin, Globe, CheckCircle2, Calendar } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-[#0E121A] border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-cyan-400 font-semibold text-xs uppercase tracking-widest">
            Career Timeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-1">
            Work Experience & Track Record
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            5+ years of delivering high-velocity engineering deliverables across international teams in Singapore, Japan, and Myanmar.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-6">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              id={`experience-card-${exp.id}`}
              className="p-6 sm:p-7 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all shadow-md space-y-4"
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <span className="text-cyan-400 font-semibold text-sm sm:text-base">
                      @ {exp.company}
                    </span>
                    {exp.isCurrent && (
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        Current Role
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.location} {exp.isRemote ? '(Remote)' : '(Onsite)'}</span>
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="flex items-center gap-1 text-cyan-300">
                      <Globe className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{exp.teamRegion} Hub</span>
                    </span>
                  </div>
                </div>

                <div className="self-start sm:self-auto">
                  <span className="px-3 py-1 rounded-lg bg-slate-800 text-xs font-semibold text-slate-300">
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-slate-300 leading-relaxed">
                {exp.summary}
              </p>

              {/* Responsibilities list */}
              <div className="space-y-1.5 pt-1">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Key Accomplishments:
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-bold mt-0.5">›</span>
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack tags */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800">
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-slate-800/80 text-xs text-slate-300 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
