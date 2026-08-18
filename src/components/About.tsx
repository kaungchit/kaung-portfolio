import React from 'react';
import { developerProfile } from '../data/portfolioData';
import { Download, GraduationCap, Globe, CheckCircle2, ShieldCheck, Cpu, Terminal, ArrowUpRight } from 'lucide-react';
import { downloadResumePdf } from '../utils/resumeDownload';

interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="py-20 bg-[#0B0E14] border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-cyan-400 font-semibold text-xs uppercase tracking-widest">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-1">
            Engineering robust systems with precision & craft.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Bio & Core Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a <strong>Senior Full Stack Developer</strong> with over 5 years of practical experience building, modernizing, and scaling enterprise web applications. My core expertise centers on <strong>Laravel, PHP 8+, React, Vue.js, MySQL, Redis, and Docker</strong>.
              </p>
              <p>
                Throughout my career, I have collaborated seamlessly with international cross-functional teams in <strong>Singapore</strong> and <strong>Japan</strong>, delivering mission-critical applications spanning accounting automation (Xero, QuickBooks, Stripe), enterprise learning management systems (LMS), and high-volume retail POS engines.
              </p>
              <p>
                I place high priority on <strong>Domain-Driven Design (DDD)</strong>, <strong>Test-Driven Development (TDD)</strong>, idempotent transaction safety, and clean software architecture that empowers development teams to move fast without compromising stability.
              </p>
            </div>

            {/* Core Competency Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Enterprise Laravel & Modular DDD Architecture',
                'Single Page Applications (React & Vue 3)',
                'FinTech & Multi-Ledger API Integrations',
                'Dockerized CI/CD & Production Workflows',
                'Relational Database Indexing & Query Tuning',
                'Cross-Border Remote Team Leadership',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-3">
              <button
                id="about-download-resume-btn"
                onClick={downloadResumePdf}
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Full CV (PDF)</span>
              </button>

              <button
                id="about-view-cv-btn"
                onClick={onOpenResume}
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs text-slate-300 font-medium transition-colors"
              >
                View Online Resume
              </button>
            </div>
          </div>

          {/* Right Column: Education & Languages */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>Education & Certifications</span>
              </div>

              <div className="space-y-4">
                {developerProfile.education.map((edu, idx) => (
                  <div key={idx} className="space-y-1 pb-3 border-b border-slate-800/80 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs sm:text-sm font-semibold text-white">
                        {edu.degree}
                      </h4>
                      <span className="text-[11px] font-medium text-slate-400">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-xs text-cyan-400 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>Language Proficiency</span>
              </div>

              <div className="space-y-3">
                {developerProfile.languages.map((lang) => (
                  <div key={lang.name} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-white">{lang.name}</span>
                      <span className="text-slate-400">{lang.level}</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-cyan-400"
                        style={{ width: `${lang.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
