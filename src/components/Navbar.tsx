import React, { useState, useEffect } from 'react';
import { FileText, Download, Menu, X, Mail, Phone, ExternalLink, ArrowUpRight } from 'lucide-react';
import { developerProfile } from '../data/portfolioData';
import { downloadResumePdf } from '../utils/resumeDownload';

interface NavbarProps {
  onOpenResume: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#0B0E14]/90 backdrop-blur-md border-b border-slate-800/80 py-3.5 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group"
          >
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-sm group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
              KC
            </div>
            <div>
              <div className="font-bold text-white text-base tracking-tight group-hover:text-cyan-300 transition-colors">
                {developerProfile.name}
              </div>
              <div className="text-[11px] text-slate-400 font-medium">
                Senior Full Stack Developer
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1 rounded-full border border-slate-800">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300 font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Direct Resume Download & View buttons */}
            <div className="flex items-center rounded-lg border border-slate-700 bg-slate-900/80 p-0.5">
              <button
                id="nav-download-resume-btn"
                onClick={downloadResumePdf}
                className="px-3 py-1.5 rounded-md text-xs font-semibold text-cyan-300 hover:bg-cyan-500/20 flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Download / Save Resume as PDF"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume (PDF)</span>
              </button>
              <button
                id="nav-view-cv-btn"
                onClick={onOpenResume}
                className="px-2 py-1.5 text-xs text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
                title="View Resume Document"
              >
                View
              </button>
            </div>

            <a
              id="nav-contact-cta"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-3.5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-colors shadow-sm flex items-center gap-1"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white md:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#0B0E14] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                downloadResumePdf();
              }}
              className="w-full py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 text-xs font-medium flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>View Online CV</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
