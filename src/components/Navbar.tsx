import React, { useState, useEffect } from 'react';
import { Terminal, FileText, Search, Menu, X, Code2, Sparkles, Send, Github, Linkedin } from 'lucide-react';
import { developerProfile } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenCommandPalette: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResume,
  onOpenCommandPalette,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: '01. About' },
    { id: 'tech-stack', label: '02. Stack' },
    { id: 'projects', label: '03. Work' },
    { id: 'experience', label: '04. Experience' },
    { id: 'architecture-flow', label: '05. Architecture' },
    { id: 'terminal-sandbox', label: '06. Terminal' },
    { id: 'services', label: '07. Services' },
    { id: 'contact', label: '08. Contact' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#08090C]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Initials */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-2.5 font-mono text-sm tracking-tight text-white hover:text-cyan-400 transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-500/50 flex items-center justify-center text-cyan-400 text-xs font-bold transition-all shadow-inner group-hover:shadow-cyan-500/20">
              KC
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-wider text-xs md:text-sm text-slate-100 group-hover:text-cyan-300">
                KAUNG CHIT SAN
              </span>
              <span className="text-[10px] text-slate-400 tracking-widest uppercase">
                SR_FULLSTACK.DEV
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#11151C]/80 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3 py-1 text-xs font-mono rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20 font-medium'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Tools */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Command Palette Trigger */}
            <button
              id="navbar-cmd-trigger"
              onClick={onOpenCommandPalette}
              className="px-2.5 py-1.5 rounded-lg bg-[#11151C] hover:bg-[#161c26] border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 flex items-center gap-2 text-xs font-mono transition-all group"
              title="Open Command Palette"
            >
              <Search className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="text-slate-400 text-[11px]">Search</span>
              <kbd className="text-[10px] px-1.5 py-0.5 bg-white/10 rounded border border-white/10 text-slate-300">
                ⌘K
              </kbd>
            </button>

            {/* Resume Button */}
            <button
              id="navbar-cv-btn"
              onClick={onOpenResume}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-cyan-500/10 border border-white/15 hover:border-cyan-400/50 text-slate-200 hover:text-cyan-300 text-xs font-mono font-medium flex items-center gap-1.5 transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume</span>
            </button>

            {/* Direct Connect CTA */}
            <button
              id="navbar-connect-btn"
              onClick={() => scrollTo('contact')}
              className="px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-bold flex items-center gap-1.5 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="navbar-mobile-cmd"
              onClick={onOpenCommandPalette}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-cyan-400"
              aria-label="Command Palette"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              id="navbar-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 sm:hidden bg-black/90 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col justify-between animate-in slide-in-from-top-6 duration-200">
          <div className="space-y-3">
            <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest mb-4">
              // Navigation Index
            </div>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="w-full text-left py-2.5 px-4 rounded-xl text-base font-mono font-medium text-slate-200 hover:text-cyan-300 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-xs text-slate-500">→</span>
              </button>
            ))}
          </div>

          <div className="space-y-3 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-3 rounded-xl bg-white/10 border border-white/20 text-white font-mono text-sm flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>View Full CV (PDF)</span>
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="w-full py-3 rounded-xl bg-cyan-500 text-slate-950 font-mono font-bold text-sm flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Let's Connect</span>
            </button>

            <div className="flex items-center justify-center gap-4 pt-2 text-slate-400">
              <a href={developerProfile.socials.github} target="_blank" rel="noreferrer" className="p-2 hover:text-cyan-400">
                <Github className="w-5 h-5" />
              </a>
              <a href={developerProfile.socials.linkedin} target="_blank" rel="noreferrer" className="p-2 hover:text-cyan-400">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
