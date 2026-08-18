import React, { useRef } from 'react';
import { X, Download, Printer, Mail, Phone, MapPin, Globe, ExternalLink, Briefcase, GraduationCap, Code2, Terminal, CheckCircle2 } from 'lucide-react';
import { developerProfile, experienceData, skillCategories } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const printRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0D1015] border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#11151C]/90 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
            <div>
              <h3 className="font-mono text-sm font-semibold text-white tracking-wide">
                CV_VIEWER // {developerProfile.name.toUpperCase().replace(/\s+/g, '_')}.PDF
              </h3>
              <p className="text-xs text-slate-400">Verified Professional CV • Last updated 2026</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="resume-modal-print-btn"
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg border border-white/15 hover:border-cyan-400/40 bg-white/5 hover:bg-cyan-500/10 text-xs font-mono text-slate-300 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <a
              id="resume-modal-mailto-btn"
              href={`mailto:${developerProfile.socials.email}?subject=Opportunity%20for%20Kaung%20Chit%20San`}
              className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Directly</span>
            </a>
            <button
              id="resume-modal-close-btn"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Resume Preview */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8 bg-[#0D1015]" ref={printRef}>
          {/* Header Banner */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                {developerProfile.name}
              </h1>
              <p className="text-cyan-400 font-mono text-sm md:text-base mt-1 font-medium">
                {developerProfile.title}
              </p>
              <p className="text-slate-400 text-xs mt-1 max-w-xl">
                5+ Years of experience delivering scalable web applications using Laravel, Vue.js, React, and Docker.
              </p>
            </div>

            <div className="space-y-1.5 text-xs font-mono text-slate-300 bg-[#11151C] p-3 rounded-xl border border-white/5">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <a href={`mailto:${developerProfile.socials.email}`} className="hover:text-cyan-300 underline underline-offset-2">
                  {developerProfile.socials.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>{developerProfile.socials.phone} (WhatsApp)</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <a href={developerProfile.socials.github} target="_blank" rel="noreferrer" className="hover:text-cyan-300">
                  github.com/kaungchitsan
                </a>
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                <a href={developerProfile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-300">
                  linkedin.com/in/kaung-chit-san
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span>// Professional Summary</span>
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed bg-[#11151C]/60 p-4 rounded-xl border border-white/5">
              Senior Full Stack Developer with over 5 years of experience delivering scalable web applications using Laravel, Vue.js, and Docker. Proven ability to lead teams, integrate third-party platforms (Xero, QuickBooks, Stripe, KPay), and collaborate cross-functionally with international remote teams in Japan and Singapore. Strong focus on clean, maintainable code, Domain-Driven Design (DDD), and agile development in both remote and onsite environments.
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>// Professional Experience</span>
            </h2>

            <div className="space-y-6">
              {experienceData.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-[#11151C]/70 border border-white/5 space-y-2.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h4 className="font-semibold text-white text-base">
                        {exp.role} <span className="text-cyan-400 font-mono text-sm font-normal">@ {exp.company}</span>
                      </h4>
                      <p className="text-xs text-slate-400 font-mono">
                        {exp.location} {exp.isRemote ? '(Remote)' : ''}
                      </p>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 self-start sm:self-auto">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="leading-relaxed">
                        {resp}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.technologies.map((t) => (
                      <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Breakdown */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              <span>// Technical Skills & Competencies</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="p-4 rounded-xl bg-[#11151C]/60 border border-white/5 space-y-2">
                  <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider text-cyan-300">
                    {cat.title}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s) => (
                      <span
                        key={s.name}
                        className="text-xs px-2 py-1 rounded-md bg-white/5 text-slate-200 border border-white/10 font-mono"
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>// Education & Continuous Training</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {developerProfile.education.map((edu, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#11151C]/60 border border-white/5 space-y-1">
                  <h4 className="text-xs font-semibold text-white">{edu.degree}</h4>
                  <p className="text-xs text-cyan-400 font-mono">{edu.institution}</p>
                  <p className="text-[11px] text-slate-400 font-mono">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-white/10 bg-[#11151C]/90 flex items-center justify-between text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Ready for Immediate Onboarding</span>
          </div>
          <span>Ref: CV-KCS-2026</span>
        </div>
      </div>
    </div>
  );
};
