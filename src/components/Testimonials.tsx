import React from 'react';
import { testimonialsData } from '../data/portfolioData';
import { Quote, Star, MapPin, Building2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative bg-[#08090C] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-cyan-400 font-mono text-sm tracking-wider font-semibold">
            RECOMMENDATIONS & PEER ENDORSEMENTS
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 via-white/10 to-transparent" />
        </div>

        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Trusted by distributed teams & clients.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Feedback on code quality, cross-border remote collaboration, and timely deliverables.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-3xl bg-[#0D1015] border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between space-y-6 shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Quote className="w-8 h-8 text-cyan-400/30" />
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex flex-col gap-0.5">
                <h4 className="font-semibold text-white text-sm">{item.author}</h4>
                <p className="text-xs text-cyan-400 font-mono">{item.role}</p>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-mono mt-1">
                  <Building2 className="w-3 h-3 text-slate-600" />
                  <span>{item.company}</span>
                  <span>•</span>
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
