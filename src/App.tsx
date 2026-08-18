import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { ArchitecturePlayground } from './components/ArchitecturePlayground';
import { Terminal } from './components/Terminal';
import { ActivityGrid } from './components/ActivityGrid';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CommandPalette } from './components/CommandPalette';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [terminalTriggerCmd, setTerminalTriggerCmd] = useState<string>('');
  const [activeSection, setActiveSection] = useState<string>('about');

  // Handle Ctrl+K / Cmd+K global hotkey
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Track active section for navbar
  useEffect(() => {
    const sections = [
      'hero',
      'about',
      'tech-stack',
      'projects',
      'experience',
      'architecture-flow',
      'terminal-sandbox',
      'services',
      'contact',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleTriggerTerminalCommand = (cmd: string) => {
    setTerminalTriggerCmd(cmd);
  };

  return (
    <div className="relative min-h-screen bg-[#08090C] text-[#F5F7FA] overflow-x-hidden">
      {/* Custom Desktop Follow Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Flow */}
      <main>
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        />
        <About onOpenResume={() => setIsResumeOpen(true)} />
        <TechStack />
        <Projects />
        <Experience />
        <ArchitecturePlayground />
        <Terminal
          onOpenResume={() => setIsResumeOpen(true)}
          externalTriggerCmd={terminalTriggerCmd}
        />
        <ActivityGrid />
        <Services />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
        onTriggerTerminalCommand={handleTriggerTerminalCommand}
      />
    </div>
  );
}
