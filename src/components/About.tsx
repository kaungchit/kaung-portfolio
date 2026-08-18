import React from 'react';
import { developerProfile } from '../data/portfolioData';
import { ShieldCheck, Code, Globe2, Sparkles, CheckCircle2, Award, Zap, Terminal } from 'lucide-react';

interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  const stats = [
    { value: '5+', label: 'Years Experience', detail: 'Hands-on full stack & API systems' },
    { value: '25+', label: 'Projects Shipped', detail: 'From LMS to enterprise FinTech' },
    { value: '3', label: 'International Teams', detail: 'Singapore, Japan & Myanmar' },
    { value: '100%', label: 'Curiosity & Craft', detail: 'DDD, TDD & Clean Architecture' },
  ];

  const pillars = [
    {
      title: 'Architectural Resilience',
      desc: 'Building with Domain-Driven Design (DDD) principles so complex business rules remain testable, isolated, and easy to evolve.',
      icon: ShieldCheck,
    },
    {
      title: 'FinTech & API Automation',
      desc: 'Deep specialization in bi-directional accounting synchronization (Xero, QuickBooks) and payment gateways (Stripe, KPay).',
      icon: Zap,
    },
    {
      title: 'Distributed Team Agility',
      desc: 'Proven track record working asynchronously across remote international hubs in Singapore and Japan with cross-functional QA teams.',
      icon: Globe2,
    },
    {
      title: 'Test-Driven Velocity',
      desc: 'Automated test suites with PHPUnit & Pest that catch regressions before production deployments, ensuring 99.9%+ reliability.',
      icon: Code,
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-[#08090C] border-t border-white/5">
      {/* Decorative tech grid accent */}
      <div className="absolute inset-0 bg-tech-grid-dense opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-cyan-400 font-mono text-sm tracking-wider font-semibold">
            01 — ABOUT ME
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 via-white/10 to-transparent" />
        </div>

        {/* Main Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Large Editorial Statement */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              “I don't just write code. <br />
              <span className="text-slate-400 font-normal">
                I build systems, experiences, and resilient products.
              </span>”
            </h2>

            <div className="p-5 rounded-2xl bg-[#0D1015] border border-white/10 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-white/5 pb-2">
                <span className="text-cyan-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>core_philosophy.md</span>
                </span>
                <span>PHILOSOPHY</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                Software is never just about syntax; it's about translating complex real-world operational problems into rock-solid software architecture that businesses can rely on 24/7.
              </p>
              <div className="flex items-center gap-2 pt-1 text-xs font-mono text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero-downtime mindset & continuous learning</span>
              </div>
            </div>

            {/* Quick Education / Credential preview */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                // Education & Credentials
              </h4>
              <div className="space-y-2">
                {developerProfile.education.map((edu, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-white">{edu.degree}</div>
                      <div className="text-slate-400">{edu.institution}</div>
                    </div>
                    <span className="text-cyan-400 font-mono text-[11px] shrink-0 ml-2">{edu.period}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Detailed Biography & Pillars */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Biography paragraphs */}
            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p className="text-lg text-slate-200 font-medium">
                I am a <span className="text-cyan-300">Senior Full-Stack Developer</span> with over 5 years of experience delivering mission-critical web applications for organizations across Singapore, Japan, and Myanmar.
              </p>
              
              <p className="text-slate-400">
                Currently developing with <strong className="text-slate-200">Leap Technology (Singapore)</strong> and previously leading technical initiatives at <strong className="text-slate-200">Mysol (Japan)</strong>, I specialize in full-lifecycle product development: from relational database modeling (MySQL/PostgreSQL) and robust backend APIs (Laravel/PHP) to reactive frontend dashboards (React/Vue.js) and containerized deployments (Docker/Linux).
              </p>

              <p className="text-slate-400">
                My signature strength is building <em>integrations that never fail</em> — orchestrating automated ledger synchronization for platforms like Xero and QuickBooks, handling high-volume Stripe payments, and architecting POS table management suites that withstand peak customer rushes.
              </p>
            </div>

            {/* Engineering Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#11151C] border border-white/5 hover:border-cyan-500/30 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-semibold text-white text-sm mb-1">{pillar.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Stats Block */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#0D1015] border border-white/10 text-center space-y-1 hover:border-cyan-400/40 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-white">{stat.label}</div>
                  <div className="text-[10px] text-slate-500 font-mono">{stat.detail}</div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
