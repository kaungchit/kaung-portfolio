import React, { useState } from 'react';
import { activityMockData } from '../data/portfolioData';
import { GitCommit, GitPullRequest, GitFork, Star, Flame, Code, Sparkles, ExternalLink } from 'lucide-react';

export const ActivityGrid: React.FC = () => {
  const [hoveredCell, setHoveredCell] = useState<{ day: number; count: number; date: string } | null>(null);

  // Generate 52 weeks x 7 days grid with weighted realistic commit distribution
  const weeks = Array.from({ length: 48 }, (_, weekIdx) => {
    return Array.from({ length: 7 }, (_, dayIdx) => {
      const pseudoRandom = Math.sin(weekIdx * 7 + dayIdx * 13) * 10000;
      const normalized = Math.abs(pseudoRandom - Math.floor(pseudoRandom));
      let level = 0;
      let count = 0;
      if (normalized > 0.8) {
        level = 4;
        count = Math.floor(normalized * 12) + 6;
      } else if (normalized > 0.55) {
        level = 3;
        count = Math.floor(normalized * 8) + 3;
      } else if (normalized > 0.3) {
        level = 2;
        count = Math.floor(normalized * 4) + 1;
      } else if (normalized > 0.15) {
        level = 1;
        count = 1;
      }
      return {
        level,
        count,
        date: `2025-W${weekIdx + 1}-D${dayIdx + 1}`,
      };
    });
  });

  const getCellColor = (level: number) => {
    switch (level) {
      case 4:
        return 'bg-cyan-400 shadow-sm shadow-cyan-400/50';
      case 3:
        return 'bg-cyan-500/80';
      case 2:
        return 'bg-cyan-700/60';
      case 1:
        return 'bg-cyan-950/60 border border-cyan-900/40';
      default:
        return 'bg-white/[0.03] border border-white/[0.03]';
    }
  };

  return (
    <section id="activity" className="py-24 relative bg-[#08090C] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-cyan-400 font-mono text-sm tracking-wider font-semibold">
            CODE IN MOTION // GITHUB REPOSITORIES
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 via-white/10 to-transparent" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Continuous code delivery & commit discipline.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Consistent engineering cadence across microservices, testing suites, and production codebases.
            </p>
          </div>

          <a
            href="https://github.com/kaungchitsan"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-200 hover:text-cyan-300 flex items-center gap-1.5 transition-colors self-start md:self-auto shrink-0"
          >
            <span>github.com/kaungchitsan</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Top Summary Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          <div className="p-4 rounded-xl bg-[#0D1015] border border-white/10">
            <div className="text-2xl font-bold font-mono text-cyan-400">
              {activityMockData.totalCommitsYear.toLocaleString()}
            </div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">Commits in Last 12 Mo</div>
          </div>
          <div className="p-4 rounded-xl bg-[#0D1015] border border-white/10">
            <div className="text-2xl font-bold font-mono text-emerald-400 flex items-center gap-1">
              <span>{activityMockData.currentStreak}</span>
              <Flame className="w-4 h-4 fill-emerald-400" />
            </div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">Day Active Streak</div>
          </div>
          <div className="p-4 rounded-xl bg-[#0D1015] border border-white/10">
            <div className="text-2xl font-bold font-mono text-blue-400">
              {activityMockData.pullRequestsMerged}
            </div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">PRs Reviewed & Merged</div>
          </div>
          <div className="p-4 rounded-xl bg-[#0D1015] border border-white/10">
            <div className="text-2xl font-bold font-mono text-purple-400">
              {activityMockData.activeBranches}
            </div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">Active Feature Pipelines</div>
          </div>
        </div>

        {/* Contribution Matrix Container */}
        <div className="p-6 rounded-2xl bg-[#0D1015] border border-white/10 mb-10 overflow-hidden shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2 text-cyan-300 font-semibold">
              <GitCommit className="w-4 h-4 text-cyan-400" />
              <span>COMMIT_CONTRIBUTION_MATRIX // 2025 - 2026</span>
            </span>
            <div className="flex items-center gap-2 text-[11px]">
              <span>Less</span>
              <div className="flex items-center gap-1">
                <div className="w-2.5 h-2.5 rounded-sm bg-white/5 border border-white/5" />
                <div className="w-2.5 h-2.5 rounded-sm bg-cyan-950/60" />
                <div className="w-2.5 h-2.5 rounded-sm bg-cyan-700/60" />
                <div className="w-2.5 h-2.5 rounded-sm bg-cyan-500/80" />
                <div className="w-2.5 h-2.5 rounded-sm bg-cyan-400" />
              </div>
              <span>More</span>
            </div>
          </div>

          {/* Matrix Grid */}
          <div className="overflow-x-auto pb-2">
            <div className="inline-flex gap-1">
              {weeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1">
                  {week.map((day, dIdx) => (
                    <div
                      key={dIdx}
                      onMouseEnter={() => setHoveredCell({ day: dIdx, count: day.count, date: day.date })}
                      onMouseLeave={() => setHoveredCell(null)}
                      className={`w-3 h-3 rounded-xs transition-all cursor-pointer hover:scale-125 ${getCellColor(
                        day.level
                      )}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
            <span>
              {hoveredCell ? (
                <span className="text-cyan-300 font-medium">
                  {hoveredCell.count} commits on {hoveredCell.date}
                </span>
              ) : (
                'Hover over contribution blocks to view daily commit volume'
              )}
            </span>
            <span>Refreshed daily via Git automation</span>
          </div>
        </div>

        {/* Repositories & Current Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Recent Repos */}
          <div className="lg:col-span-8 space-y-4">
            <h3 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
              // Selected Public & Open Architectures
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activityMockData.recentRepos.map((repo) => (
                <div
                  key={repo.name}
                  className="p-5 rounded-2xl bg-[#0D1015] border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-mono text-sm font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                        {repo.name}
                      </h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                        Public
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                      {repo.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] font-mono text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: repo.languageColor }}
                      />
                      <span>{repo.language}</span>
                    </div>

                    <div className="flex items-center gap-3 text-slate-500">
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-amber-400" />
                        <span>{repo.stars}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3 h-3" />
                        <span>{repo.forks}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Current Engineering Focus */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-[#0D1015] border border-white/10 space-y-5">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <h3 className="text-xs font-mono font-bold uppercase text-white tracking-wider">
                Current Engineering Focus
              </h3>
            </div>

            <div className="space-y-4">
              {activityMockData.currentFocus.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-300 truncate">{item.label}</span>
                    <span className="text-cyan-400 font-bold">{item.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 text-[11px] font-mono text-slate-500 leading-relaxed border-t border-white/5">
              Continuously integrating latest PHP 8.3 & React 19 standards into enterprise production codebases.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
