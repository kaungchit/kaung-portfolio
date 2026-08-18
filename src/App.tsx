import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { AvatarProvider } from './context/AvatarContext';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Track active section for navbar
  useEffect(() => {
    const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'testimonials', 'contact'];

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

  return (
    <AvatarProvider>
      <div className="min-h-screen bg-[#0B0E14] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
        
        {/* Navigation */}
        <Navbar
          onOpenResume={() => setIsResumeOpen(true)}
          activeSection={activeSection}
        />

        {/* Main Content Flow */}
        <main>
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <About onOpenResume={() => setIsResumeOpen(true)} />
          <Experience />
          <Projects />
          <TechStack />
          <Testimonials />
          <Contact />
        </main>

        {/* Footer */}
        <Footer onOpenResume={() => setIsResumeOpen(true)} />

        {/* Resume Document Viewer Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </AvatarProvider>
  );
}
