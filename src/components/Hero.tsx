import React, { useState, useEffect } from 'react';
import { ArrowDown, Code2, Terminal, ExternalLink, Sparkles, CheckCircle2, GitBranch, Server, Cpu, Database, Play, Copy, Check } from 'lucide-react';
import { developerProfile } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenCommandPalette: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenCommandPalette }) => {
  const [activeSnippetTab, setActiveSnippetTab] = useState<'profile' | 'service' | 'docker'>('profile');
  const [copied, setCopied] = useState(false);
  const [typingIndex, setTypingIndex] = useState(0);

  const terminalCommands = [
    { prompt: '$ whoami', output: 'Kaung Chit San // Senior Full Stack Developer (5+ yrs)' },
    { prompt: '$ current-stack', output: 'Laravel 11 • React 19 • Docker • Redis • PostgreSQL' },
    { prompt: '$ location-status', output: 'Singapore & Japan (Remote) • Available for Hire' },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developerProfile.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center bg-radial-gradient">
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      {/* Decorative gradient glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column: Intro & Directives */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Status Beacon */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#11151C] border border-cyan-500/30 shadow-inner text-xs font-mono">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-semibold tracking-wide uppercase text-[11px]">
                AVAILABLE FOR OPPORTUNITIES
              </span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-400 text-[11px]">Singapore • Japan • Global Remote</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-slate-400 font-mono text-sm tracking-wide">
                Hi, I'm <span className="text-white font-semibold">{developerProfile.name}</span>
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Senior Full-Stack <br />
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                  Software Developer
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-medium text-slate-300 tracking-tight pt-1">
                Building digital products that actually work.
              </h2>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              I design and build scalable web applications with clean architecture, robust APIs, and modern technologies. Specializing in <strong className="text-slate-200">Laravel</strong>, <strong className="text-slate-200">React</strong>, <strong className="text-slate-200">Vue.js</strong>, and <strong className="text-slate-200">Docker</strong> with deep expertise in automated accounting & payment integrations.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                id="hero-view-work-btn"
                onClick={() => scrollTo('projects')}
                className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-sm font-bold flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <span className="text-slate-900 font-bold">→</span>
              </button>

              <button
                id="hero-connect-btn"
                onClick={() => scrollTo('contact')}
                className="px-6 py-3 rounded-xl bg-[#11151C] hover:bg-[#181e28] border border-white/15 hover:border-cyan-400/50 text-white font-mono text-sm font-medium flex items-center gap-2 transition-all shadow-sm"
              >
                <span>Let's Connect</span>
                <span className="text-cyan-400">⚡</span>
              </button>

              <button
                id="hero-view-resume-btn"
                onClick={onOpenResume}
                className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-mono text-xs font-medium flex items-center gap-1.5 transition-all"
              >
                <span>View CV (PDF)</span>
              </button>
            </div>

            {/* Micro Terminal Display */}
            <div className="p-4 rounded-xl bg-[#0D1015] border border-white/10 font-mono text-xs text-slate-300 space-y-2 max-w-xl shadow-xl">
              <div className="flex items-center justify-between text-slate-500 text-[11px] pb-1 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>bash — session_active</span>
                </div>
                <span className="text-slate-500">v5.4.2-release</span>
              </div>
              
              <div className="space-y-1.5">
                <div className="text-slate-400">
                  <span className="text-cyan-400 font-semibold">$ whoami</span>
                  <p className="text-slate-200 pl-3">developer // Senior Full-Stack Engineer (5+ yrs)</p>
                </div>
                <div className="text-slate-400">
                  <span className="text-cyan-400 font-semibold">$ stack</span>
                  <p className="text-slate-200 pl-3">Laravel • React • PHP • Vue.js • Docker • Redis • MySQL</p>
                </div>
                <div className="text-slate-400">
                  <span className="text-cyan-400 font-semibold">$ status</span>
                  <p className="text-emerald-400 pl-3 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    Ready for international enterprise roles & freelance contracts
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Column: Sophisticated Developer Window */}
          <div className="lg:col-span-5">
            <div className="relative group">
              
              {/* Subtle backplate glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500" />

              {/* IDE / Profile Floating Terminal Window */}
              <div className="relative rounded-2xl bg-[#0D1015] border border-white/15 overflow-hidden shadow-2xl backdrop-blur-xl">
                
                {/* Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#11151C] border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]" />
                  </div>

                  {/* Window Tabs */}
                  <div className="flex items-center gap-1 bg-[#08090C] p-0.5 rounded-lg border border-white/5">
                    <button
                      id="hero-tab-profile"
                      onClick={() => setActiveSnippetTab('profile')}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                        activeSnippetTab === 'profile'
                          ? 'bg-white/10 text-cyan-300 font-semibold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      profile.json
                    </button>
                    <button
                      id="hero-tab-service"
                      onClick={() => setActiveSnippetTab('service')}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                        activeSnippetTab === 'service'
                          ? 'bg-white/10 text-cyan-300 font-semibold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      SyncService.php
                    </button>
                    <button
                      id="hero-tab-docker"
                      onClick={() => setActiveSnippetTab('docker')}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                        activeSnippetTab === 'docker'
                          ? 'bg-white/10 text-cyan-300 font-semibold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Dockerfile
                    </button>
                  </div>

                  <div className="text-[11px] font-mono text-slate-500">
                    UTF-8
                  </div>
                </div>

                {/* Window Code Content */}
                <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto min-h-[320px] bg-[#08090C]/90 text-slate-300">
                  
                  {activeSnippetTab === 'profile' && (
                    <div className="space-y-1">
                      <div className="text-slate-500">// DEV_PROFILE // SYSTEM_STATUS: ONLINE</div>
                      <div>
                        <span className="text-purple-400">const</span>{' '}
                        <span className="text-blue-300">developer</span> = {'{'}
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">name</span>:{' '}
                        <span className="text-amber-300">"{developerProfile.name}"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">role</span>:{' '}
                        <span className="text-amber-300">"Senior Full-Stack Developer"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">experience</span>:{' '}
                        <span className="text-emerald-300">"5+ years"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">teams</span>:{' '}
                        <span className="text-slate-300">[</span>
                        <span className="text-amber-300">"Leap Tech (Singapore)"</span>,{' '}
                        <span className="text-amber-300">"Mysol (Japan)"</span>
                        <span className="text-slate-300">]</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">coreStack</span>: [
                        <span className="text-amber-300">"Laravel"</span>,{' '}
                        <span className="text-amber-300">"React"</span>,{' '}
                        <span className="text-amber-300">"Vue.js"</span>,{' '}
                        <span className="text-amber-300">"Docker"</span>,{' '}
                        <span className="text-amber-300">"TDD/DDD"</span>],
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">integrations</span>: [
                        <span className="text-amber-300">"Xero"</span>,{' '}
                        <span className="text-amber-300">"QuickBooks"</span>,{' '}
                        <span className="text-amber-300">"Stripe"</span>,{' '}
                        <span className="text-amber-300">"KPay"</span>],
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">status</span>:{' '}
                        <span className="text-emerald-400">"AVAILABLE_FOR_HIRE"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">email</span>:{' '}
                        <span className="text-amber-300">"{developerProfile.socials.email}"</span>
                      </div>
                      <div>{'}'};</div>
                      <div className="pt-2 text-slate-500 flex items-center gap-1.5">
                        <span className="text-cyan-400">➜</span>
                        <span>export default developer;</span>
                        <span className="inline-block w-2 h-4 bg-cyan-400 animate-cursor" />
                      </div>
                    </div>
                  )}

                  {activeSnippetTab === 'service' && (
                    <div className="space-y-1">
                      <div className="text-slate-500">// Real-world Xero & QuickBooks idempotent synchronizer</div>
                      <div className="text-purple-400">namespace <span className="text-blue-300">App\Services\Accounting</span>;</div>
                      <div className="pt-1">
                        <span className="text-purple-400">class</span> <span className="text-amber-300">InvoiceSyncEngine</span> {'{'}
                      </div>
                      <div className="pl-4">
                        <span className="text-purple-400">public function</span> <span className="text-blue-300">syncToLedgers</span>(<span className="text-emerald-300">Invoice</span> $invoice): <span className="text-emerald-300">SyncResult</span> {'{'}
                      </div>
                      <div className="pl-8 text-slate-400">
                        // Idempotent reconciliation with distributed lock
                      </div>
                      <div className="pl-8">
                        <span className="text-cyan-300">$lock</span> = Cache::lock(<span className="text-amber-300">{"\"sync:{$invoice->id}\""}</span>, 15);
                      </div>
                      <div className="pl-8">
                        <span className="text-purple-400">return</span> {'$lock->get(fn() => {'}
                      </div>
                      <div className="pl-12">
                        {'$this->xeroClient->postInvoice($invoice);'}
                      </div>
                      <div className="pl-8">{'});'}</div>
                      <div className="pl-4">{'}'}</div>
                      <div>{'}'}</div>
                    </div>
                  )}

                  {activeSnippetTab === 'docker' && (
                    <div className="space-y-1">
                      <div className="text-slate-500">// Multi-stage production container setup</div>
                      <div><span className="text-purple-400">FROM</span> php:8.3-fpm-alpine <span className="text-purple-400">AS</span> production</div>
                      <div className="text-slate-400"># Install high-performance extensions & composer</div>
                      <div><span className="text-purple-400">RUN</span> apk add --no-cache nginx libpng-dev libzip-dev redis</div>
                      <div><span className="text-purple-400">RUN</span> docker-php-ext-install pdo_mysql opcache bcmath</div>
                      <div className="pt-1"><span className="text-purple-400">WORKDIR</span> /var/www/html</div>
                      <div><span className="text-purple-400">COPY</span> --chown=www-data:www-data . .</div>
                      <div><span className="text-purple-400">EXPOSE</span> 80 9000</div>
                      <div className="text-emerald-400">CMD ["php-fpm", "-D", "&&", "nginx", "-g", "daemon off;"]</div>
                    </div>
                  )}

                </div>

                {/* Window Bottom System Status */}
                <div className="px-4 py-2.5 bg-[#11151C] border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-cyan-400">
                      <GitBranch className="w-3.5 h-3.5" />
                      <span>main*</span>
                    </span>
                    <span className="text-slate-500">|</span>
                    <span className="text-slate-300">5+ yrs exp</span>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1 text-slate-400 hover:text-cyan-300 transition-colors"
                    title="Copy Email"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex flex-col items-center justify-center">
          <button
            onClick={() => scrollTo('about')}
            className="flex flex-col items-center gap-1.5 text-slate-500 hover:text-cyan-400 transition-colors group font-mono text-[11px]"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-cyan-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
