import React, { useState } from 'react';
import { developerProfile } from '../data/portfolioData';
import { Download, FileText, ArrowRight, Mail, Phone, Github, Linkedin, Check, Copy, Sparkles, MapPin, Briefcase, Code2, Globe } from 'lucide-react';
import { downloadResumePdf } from '../utils/resumeDownload';
import { ProfileAvatar } from './ProfileAvatar';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developerProfile.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-40" />
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Available for Senior / Remote Roles • Singapore, Japan & Global</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Direct Actions */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Senior Full Stack <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Developer & Architect
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              5+ years crafting robust web applications, high-throughput APIs, and mission-critical financial automation with <strong className="text-white">Laravel</strong>, <strong className="text-white">React</strong>, <strong className="text-white">Vue.js</strong>, and <strong className="text-white">Docker</strong>.
            </p>

            {/* Key Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-download-resume-btn"
                onClick={downloadResumePdf}
                className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 cursor-pointer"
                title="Download / Print PDF Resume"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </button>

              <button
                id="hero-view-cv-modal-btn"
                onClick={onOpenResume}
                className="px-4 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-slate-200 font-semibold text-sm flex items-center gap-2 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Online CV</span>
              </button>

              <a
                id="hero-view-projects-btn"
                href="#projects"
                className="px-4 py-3 rounded-xl bg-slate-900/50 hover:bg-slate-800 border border-slate-800 text-slate-300 font-medium text-sm flex items-center gap-1.5 transition-colors"
              >
                <span>Featured Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Contact & Social Channels */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${developerProfile.socials.email}`}
                  className="text-slate-300 hover:text-cyan-300 underline font-mono"
                >
                  {developerProfile.socials.email}
                </a>
                <button
                  id="hero-copy-email-btn"
                  onClick={handleCopyEmail}
                  className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <span className="text-slate-600">•</span>

              <a
                href={`https://wa.me/${developerProfile.socials.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{developerProfile.socials.phone}</span>
              </a>

              <span className="text-slate-600">•</span>

              <div className="flex items-center gap-3">
                <a
                  href={developerProfile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-cyan-300 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={developerProfile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-cyan-300 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Profile Highlights Card with Photo */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-gradient-to-b from-[#121722] to-[#0D1017] border border-slate-700/70 p-6 sm:p-7 shadow-2xl space-y-6">
              
              {/* Profile Card Header with Photo */}
              <div className="flex items-center gap-4 pb-5 border-b border-slate-800">
                <ProfileAvatar size="lg" showStatus={true} allowUpload={true} />
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white">
                      {developerProfile.name}
                    </h3>
                  </div>
                  <p className="text-xs text-cyan-400 font-semibold">
                    {developerProfile.title}
                  </p>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400 pt-0.5">
                    <MapPin className="w-3 h-3 text-slate-500 shrink-0" />
                    <span className="truncate max-w-[200px]">{developerProfile.location}</span>
                  </div>
                </div>
              </div>

              {/* Core Strengths */}
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5 text-slate-300">
                  <div className="w-5 h-5 rounded-md bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Code2 className="w-3 h-3" />
                  </div>
                  <div>
                    <strong className="text-white">Full-Stack Core:</strong> Laravel, PHP 8+, React, Vue.js, TypeScript, Tailwind CSS.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-slate-300">
                  <div className="w-5 h-5 rounded-md bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Briefcase className="w-3 h-3" />
                  </div>
                  <div>
                    <strong className="text-white">FinTech & APIs:</strong> Xero, QuickBooks, Stripe, KPay, Idempotent Webhooks.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-slate-300">
                  <div className="w-5 h-5 rounded-md bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Globe className="w-3 h-3" />
                  </div>
                  <div>
                    <strong className="text-white">International Teams:</strong> Track record collaborating remotely with teams in Singapore & Japan.
                  </div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800 text-center">
                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-lg font-bold text-cyan-400">5+</div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Years Exp</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-lg font-bold text-white">25+</div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Projects</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-lg font-bold text-emerald-400">100%</div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Delivery</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
