import React from 'react';
import { testimonialsData } from '../data/portfolioData';
import { Star, Building2, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-[#0B0E14] border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-cyan-400 font-semibold text-xs uppercase tracking-widest">
            Endorsements
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-1">
            Feedback from Teams & Clients
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Testimonials from engineering leaders and project stakeholders in Singapore and Japan.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-6 shadow-md"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Quote className="w-7 h-7 text-cyan-400/40" />
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-0.5">
                <h4 className="font-bold text-white text-sm">{item.author}</h4>
                <p className="text-xs text-cyan-400 font-medium">{item.role}</p>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                  <Building2 className="w-3.5 h-3.5 text-slate-600" />
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
