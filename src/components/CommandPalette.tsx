import React, { useState, useEffect, useRef } from 'react';
import { Search, Terminal, FolderGit2, Sparkles, User, Briefcase, FileText, Mail, Moon, Sun, Monitor, Code2, ArrowRight, ExternalLink } from 'lucide-react';
import { developerProfile, projectsData } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onTriggerTerminalCommand: (cmd: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onTriggerTerminalCommand,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const actions = [
    {
      id: 'nav-about',
      title: 'Navigate to About Me',
      subtitle: '01 — Bio, philosophy, and specializations',
      category: 'Navigation',
      icon: User,
      action: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'nav-skills',
      title: 'Navigate to Tech Stack',
      subtitle: '02 — Laravel, React, Docker, PHP, MySQL',
      category: 'Navigation',
      icon: Code2,
      action: () => {
        document.getElementById('tech-stack')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'nav-projects',
      title: 'Navigate to Selected Work',
      subtitle: '03 — Enterprise LMS, FinTech Sync, POS & Education',
      category: 'Navigation',
      icon: FolderGit2,
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'nav-architecture',
      title: 'View System Architecture Visualizer',
      subtitle: 'Interactive live flow of Laravel + React + Redis + APIs',
      category: 'Interactive',
      icon: Monitor,
      action: () => {
        document.getElementById('architecture-flow')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'nav-experience',
      title: 'Navigate to Experience Changelog',
      subtitle: '04 — Leap Technology, Mysol Japan, Call2Clean, Htut',
      category: 'Navigation',
      icon: Briefcase,
      action: () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'nav-terminal',
      title: 'Open Interactive Terminal Sandbox',
      subtitle: '05 — Run bash commands & explore CLI profile',
      category: 'Developer Tools',
      icon: Terminal,
      action: () => {
        document.getElementById('terminal-sandbox')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'nav-contact',
      title: 'Contact Kaung Chit San',
      subtitle: '07 — Send message, WhatsApp or direct email',
      category: 'Actions',
      icon: Mail,
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'view-cv',
      title: 'Download / View Verified CV (PDF)',
      subtitle: 'Full resume with 5+ years experience & contact numbers',
      category: 'Actions',
      icon: FileText,
      action: () => {
        onClose();
        onOpenResume();
      },
    },
    {
      id: 'cmd-whoami',
      title: 'Run "$ whoami" in Terminal',
      subtitle: 'Display developer profile overview in CLI',
      category: 'Terminal',
      icon: Terminal,
      action: () => {
        document.getElementById('terminal-sandbox')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
        onTriggerTerminalCommand('whoami');
      },
    },
    {
      id: 'cmd-stack',
      title: 'Run "$ stack" in Terminal',
      subtitle: 'Inspect full architectural capability matrix',
      category: 'Terminal',
      icon: Terminal,
      action: () => {
        document.getElementById('terminal-sandbox')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
        onTriggerTerminalCommand('stack');
      },
    },
    {
      id: 'cmd-sudo-hire',
      title: 'Run "$ sudo hire kaung"',
      subtitle: 'Initiate VIP hiring sequence protocol',
      category: 'Terminal',
      icon: Sparkles,
      action: () => {
        document.getElementById('terminal-sandbox')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
        onTriggerTerminalCommand('sudo hire');
      },
    },
    {
      id: 'open-github',
      title: 'Open GitHub Profile',
      subtitle: 'github.com/kaungchitsan',
      category: 'Social',
      icon: ExternalLink,
      action: () => {
        window.open(developerProfile.socials.github, '_blank');
        onClose();
      },
    },
    {
      id: 'open-linkedin',
      title: 'Open LinkedIn Profile',
      subtitle: 'linkedin.com/in/kaung-chit-san',
      category: 'Social',
      icon: ExternalLink,
      action: () => {
        window.open(developerProfile.socials.linkedin, '_blank');
        onClose();
      },
    },
  ];

  const filtered = actions.filter((act) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      act.title.toLowerCase().includes(q) ||
      act.subtitle.toLowerCase().includes(q) ||
      act.category.toLowerCase().includes(q)
    );
  });

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          filtered[selectedIndex].action();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-[#0D1015] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden shadow-cyan-950/50">
        {/* Search Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 bg-[#11151C]/90">
          <Search className="w-5 h-5 text-cyan-400 mr-3 shrink-0" />
          <input
            ref={inputRef}
            id="command-palette-input"
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command, section, or keyword... (e.g. 'laravel', 'projects', 'cv')"
            className="w-full bg-transparent border-none outline-none text-white placeholder:text-slate-500 text-sm font-mono"
          />
          <div className="flex items-center gap-1.5 shrink-0 pl-2">
            <kbd className="px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-white/5 border border-white/10 rounded">
              ESC
            </kbd>
          </div>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 divide-y divide-white/5">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-slate-500 text-sm font-mono">
              <p>No matching commands found for "{query}"</p>
              <p className="text-xs text-slate-600 mt-1">Try searching for 'about', 'skills', 'cv', or 'terminal'</p>
            </div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.id}
                  id={`cmd-palette-item-${item.id}`}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl flex items-center justify-between transition-all ${
                    isSelected
                      ? 'bg-cyan-500/15 border border-cyan-500/30 text-white'
                      : 'hover:bg-white/5 text-slate-300 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`p-2 rounded-lg ${
                        isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-white/5 text-slate-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-xs md:text-sm font-medium flex items-center gap-2">
                        <span>{item.title}</span>
                        <span className="text-[10px] font-mono uppercase px-1.5 py-0.2 rounded bg-white/5 text-slate-400 border border-white/5">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 truncate">{item.subtitle}</p>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-opacity ${
                      isSelected ? 'opacity-100 text-cyan-400' : 'opacity-0'
                    }`}
                  />
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 border-t border-white/10 bg-[#11151C]/90 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span className="text-cyan-400/80">Kaung Chit San • Portfolio CLI</span>
        </div>
      </div>
    </div>
  );
};
