import React from 'react';
import { developerProfile } from '../data/portfolioData';
import { Download, FileText, Github, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';
import { downloadResumePdf } from '../utils/resumeDownload';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080A0F] border-t border-slate-800 text-slate-400 text-xs py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Brand */}
          <div className="text-center md:text-left space-y-1">
            <div className="font-bold text-white text-base">
              {developerProfile.name}
            </div>
            <p className="text-slate-400 text-xs">
              Senior Full Stack Developer • Singapore, Japan & Global Remote
            </p>
          </div>

          {/* Quick links & Resume triggers */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <a href="#about" className="hover:text-cyan-300 transition-colors">About</a>
            <a href="#experience" className="hover:text-cyan-300 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-300 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-cyan-300 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
            
            <span className="text-slate-700 hidden sm:inline">•</span>

            <button
              id="footer-download-resume-btn"
              onClick={downloadResumePdf}
              className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume (PDF)</span>
            </button>

            <button
              id="footer-view-cv-btn"
              onClick={onOpenResume}
              className="text-slate-300 hover:text-white flex items-center gap-1 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View CV</span>
            </button>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={developerProfile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-300 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={developerProfile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${developerProfile.socials.email}`}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-300 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 transition-colors ml-2 cursor-pointer"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} {developerProfile.name}. All rights reserved.
          </div>
          <div>
            Crafted with React, TypeScript & Tailwind CSS • Built for performance & clean architecture
          </div>
        </div>

      </div>
    </footer>
  );
};
