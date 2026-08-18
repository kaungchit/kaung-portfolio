import React from 'react';
import { servicesData } from '../data/portfolioData';
import { Layers, Cpu, Terminal, Workflow, CheckCircle2, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return Layers;
      case 'Cpu':
        return Cpu;
      case 'Terminal':
        return Terminal;
      default:
        return Workflow;
    }
  };

  return (
    <section id="services" className="py-24 relative bg-[#0D1015] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-cyan-400 font-mono text-sm tracking-wider font-semibold">
            07 — WHAT I BUILD & ARCHITECT
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 via-white/10 to-transparent" />
        </div>

        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            End-to-end software craftsmanship.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Translating complex enterprise requirements into robust, clean, and high-performance production systems.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((svc) => {
            const Icon = getIcon(svc.icon);
            return (
              <div
                key={svc.id}
                id={`service-card-${svc.id}`}
                className="group relative p-8 rounded-3xl bg-[#11151C] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-xl hover:shadow-cyan-950/20 flex flex-col justify-between space-y-6"
              >
                {/* Card Top */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-bold font-mono text-white/20 group-hover:text-cyan-400/40 transition-colors">
                      {svc.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {svc.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                {/* Key Deliverables */}
                <div className="space-y-2 bg-[#08090C]/60 p-4 rounded-2xl border border-white/5">
                  <div className="text-[11px] font-mono uppercase text-slate-500 tracking-wider">
                    Core Technical Deliverables:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {svc.keyDeliverables.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="pt-2 border-t border-white/5 flex flex-wrap gap-1.5">
                  {svc.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-xs font-mono text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
