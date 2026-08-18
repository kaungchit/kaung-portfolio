import React, { useRef } from 'react';
import { X, Download, Printer, Mail, Phone, MapPin, Globe, ExternalLink, Briefcase, GraduationCap, Code2, Check, FileText } from 'lucide-react';
import { developerProfile, experienceData, skillCategories } from '../data/portfolioData';
import { downloadResumePdf, downloadResumePlainText } from '../utils/resumeDownload';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developerProfile.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-150">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0F131B] border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden my-auto">
        
        {/* Modal Action Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-[#141A24] sticky top-0 z-10">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
            <span className="font-semibold text-sm text-white">
              {developerProfile.name} — Curriculum Vitae
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="resume-modal-download-pdf-btn"
              onClick={downloadResumePdf}
              className="px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
              title="Download / Print PDF Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Save as PDF</span>
            </button>

            <button
              id="resume-modal-download-txt-btn"
              onClick={downloadResumePlainText}
              className="hidden sm:flex px-3 py-1.5 rounded-lg border border-slate-700 hover:border-slate-600 bg-slate-800/80 hover:bg-slate-800 text-xs text-slate-300 flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Download Plain Text Resume"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Text Format</span>
            </button>

            <button
              id="resume-modal-copy-email-btn"
              onClick={handleCopyEmail}
              className="px-3 py-1.5 rounded-lg border border-slate-700 hover:border-slate-600 bg-slate-800/80 hover:bg-slate-800 text-xs text-slate-300 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Mail className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Email'}</span>
            </button>

            <button
              id="resume-modal-close-btn"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1 cursor-pointer"
              aria-label="Close CV preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Resume Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#0B0E14] text-slate-200 text-sm">
          
          {/* Header Info */}
          <div className="flex flex-col md:flex-row md:items-start justify-between pb-6 border-b border-slate-800 gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {developerProfile.name}
              </h1>
              <p className="text-cyan-400 font-medium text-base mt-1">
                {developerProfile.title}
              </p>
              <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
                5+ years experience architecting and delivering high-performance web applications using Laravel, React, Vue.js, and Docker.
              </p>
            </div>

            <div className="space-y-1.5 text-xs text-slate-300 bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 shrink-0">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <a href={`mailto:${developerProfile.socials.email}`} className="hover:text-cyan-300 underline">
                  {developerProfile.socials.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>{developerProfile.socials.phone} (WhatsApp)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{developerProfile.location}</span>
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
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Professional Summary
            </h2>
            <p className="text-slate-300 leading-relaxed bg-slate-900/50 p-4 rounded-xl border border-slate-800/80">
              {developerProfile.bioParagraphs.join(' ')}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Technical Expertise
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80">
                  <div className="font-semibold text-white text-xs mb-1.5">{cat.title}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s) => (
                      <span key={s.name} className="px-2 py-0.5 rounded text-xs bg-slate-800 text-slate-300 border border-slate-700/50">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Work Experience
            </h2>

            <div className="space-y-4">
              {experienceData.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <span className="font-bold text-white text-sm">{exp.role}</span>
                      <span className="text-cyan-400 font-medium"> @ {exp.company}</span>
                      <span className="text-xs text-slate-400 ml-2">({exp.location})</span>
                    </div>
                    <span className="text-xs font-medium text-slate-400 sm:text-right">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 italic">{exp.summary}</p>

                  <ul className="space-y-1 text-xs text-slate-300 list-disc list-inside">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i} className="leading-relaxed">{r}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1 pt-1.5">
                    {exp.technologies.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[11px] bg-slate-800/80 text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Education & Certifications
            </h2>
            <div className="space-y-2">
              {developerProfile.education.map((edu, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <div className="font-semibold text-white text-xs">{edu.degree}</div>
                    <div className="text-xs text-slate-400">{edu.institution} — {edu.details}</div>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-2 pb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Languages
            </h2>
            <div className="flex flex-wrap gap-4 text-xs text-slate-300">
              {developerProfile.languages.map((l) => (
                <div key={l.name} className="px-3 py-1.5 rounded-lg bg-slate-900/50 border border-slate-800">
                  <span className="font-semibold text-white">{l.name}:</span> {l.level}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
