import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, RefreshCw, Copy, Check, Maximize2, Minimize2 } from 'lucide-react';
import { developerProfile, experienceData, projectsData, skillCategories } from '../data/portfolioData';

interface TerminalProps {
  onOpenResume: () => void;
  externalTriggerCmd?: string;
}

interface CommandOutput {
  command: string;
  output: React.ReactNode;
  time: string;
}

export const Terminal: React.FC<TerminalProps> = ({ onOpenResume, externalTriggerCmd }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'npm run introduce',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-cyan-300 font-semibold">
            Hello! I am {developerProfile.name} — {developerProfile.title}.
          </p>
          <p className="text-slate-400">
            Welcome to my developer workspace CLI. Type <span className="text-cyan-400 font-bold">help</span> to view available system commands or click the shortcut chips below.
          </p>
        </div>
      ),
      time: '05:00:00',
    },
  ]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandList, setCommandList] = useState<string[]>([]);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickCommands = [
    'help',
    'whoami',
    'stack',
    'projects',
    'experience',
    'contact',
    'sudo hire',
    'clear',
  ];

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    setCommandList((prev) => [...prev, cmdStr]);
    setHistoryIndex(-1);

    const now = new Date().toTimeString().split(' ')[0];

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let resultNode: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        resultNode = (
          <div className="space-y-1.5 text-slate-300">
            <div className="text-cyan-400 font-bold uppercase text-[11px] mb-1">
              Available CLI Commands:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-xs">
              <div><span className="text-cyan-300 font-bold">whoami</span> — Display developer profile & status</div>
              <div><span className="text-cyan-300 font-bold">stack</span> — List all frameworks & technologies</div>
              <div><span className="text-cyan-300 font-bold">projects</span> — List production project highlights</div>
              <div><span className="text-cyan-300 font-bold">experience</span> — View career timeline & roles</div>
              <div><span className="text-cyan-300 font-bold">contact</span> — Get email, WhatsApp & socials</div>
              <div><span className="text-cyan-300 font-bold">cat bio.md</span> — Read full engineering philosophy</div>
              <div><span className="text-cyan-300 font-bold">git log</span> — View latest commit activities</div>
              <div><span className="text-cyan-300 font-bold">download-cv</span> — Open verified CV document</div>
              <div><span className="text-cyan-300 font-bold">sudo hire</span> — Initiate priority interview protocol</div>
              <div><span className="text-cyan-300 font-bold">clear</span> — Wipe terminal viewport</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
        resultNode = (
          <div className="space-y-1 text-slate-300">
            <p><span className="text-slate-500">Name:</span> <strong className="text-white">{developerProfile.name}</strong></p>
            <p><span className="text-slate-500">Role:</span> {developerProfile.title}</p>
            <p><span className="text-slate-500">Experience:</span> 5+ Years (Laravel, React, Vue, Docker, FinTech APIs)</p>
            <p><span className="text-slate-500">Current Base:</span> Singapore & Japan (Remote) • Yangon</p>
            <p><span className="text-slate-500">Status:</span> <span className="text-emerald-400 font-semibold">ONLINE — OPEN FOR OPPORTUNITIES</span></p>
          </div>
        );
        break;

      case 'stack':
        resultNode = (
          <div className="space-y-2 text-slate-300">
            {skillCategories.map((cat) => (
              <div key={cat.id}>
                <div className="text-cyan-400 font-bold text-xs uppercase">{cat.title}:</div>
                <div className="text-slate-300 pl-3">
                  {cat.skills.map((s) => s.name).join(' • ')}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        resultNode = (
          <div className="space-y-2 text-slate-300">
            <div className="text-cyan-400 font-bold text-xs">Featured Enterprise Deliverables:</div>
            {projectsData.slice(0, 4).map((p) => (
              <div key={p.id} className="pl-3">
                <span className="text-white font-bold">[{p.number}] {p.title}</span>
                <span className="text-slate-500"> — {p.category}</span>
                <p className="text-xs text-slate-400">{p.tagline}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'experience':
        resultNode = (
          <div className="space-y-2 text-slate-300">
            <div className="text-cyan-400 font-bold text-xs">Career Changelog:</div>
            {experienceData.map((exp) => (
              <div key={exp.id} className="pl-3">
                <span className="text-emerald-400 font-semibold">{exp.period}</span> —{' '}
                <strong className="text-white">{exp.role}</strong> @ {exp.company} ({exp.location})
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        resultNode = (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyan-300 font-semibold">Direct Communication Channels:</p>
            <p>📧 Email: <a href={`mailto:${developerProfile.socials.email}`} className="text-cyan-400 underline">{developerProfile.socials.email}</a></p>
            <p>📱 WhatsApp: <span className="text-slate-200">{developerProfile.socials.phone}</span></p>
            <p>🐙 GitHub: <a href={developerProfile.socials.github} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{developerProfile.socials.github}</a></p>
            <p>💼 LinkedIn: <a href={developerProfile.socials.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{developerProfile.socials.linkedin}</a></p>
          </div>
        );
        break;

      case 'cat bio.md':
        resultNode = (
          <div className="space-y-2 text-slate-300 leading-relaxed text-xs">
            <p className="text-cyan-400 font-bold"># Engineering Bio — Kaung Chit San</p>
            <p>{developerProfile.bioParagraphs[0]}</p>
            <p>{developerProfile.bioParagraphs[1]}</p>
            <p>{developerProfile.bioParagraphs[2]}</p>
          </div>
        );
        break;

      case 'git log':
        resultNode = (
          <div className="space-y-1.5 font-mono text-xs text-slate-300">
            <div>
              <span className="text-amber-400">commit 8f9b2a1 (HEAD -&gt; main)</span>
              <p className="text-slate-400 pl-4">Author: Kaung Chit San &lt;airforceman.rr9@gmail.com&gt;</p>
              <p className="text-slate-200 pl-4">feat(accounting): implement idempotent ledger reconciliation queue</p>
            </div>
            <div>
              <span className="text-amber-400">commit 4c7d1e0</span>
              <p className="text-slate-400 pl-4">Author: Kaung Chit San &lt;airforceman.rr9@gmail.com&gt;</p>
              <p className="text-slate-200 pl-4">test(lms): achieve 99.8% test coverage with PHPUnit on grade evaluator</p>
            </div>
          </div>
        );
        break;

      case 'download-cv':
        onOpenResume();
        resultNode = (
          <div className="text-emerald-400">
            ✓ Verified CV viewer launched in modal overlay.
          </div>
        );
        break;

      case 'sudo hire':
      case 'sudo hire kaung':
        resultNode = (
          <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/40 space-y-1.5 text-slate-200">
            <div className="text-cyan-300 font-bold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>[PRIORITY HIRING PROTOCOL ACTIVATED]</span>
            </div>
            <p className="text-xs">
              Thank you for considering Kaung Chit San for your engineering team.
            </p>
            <p className="text-xs text-cyan-400">
              Direct line: <strong>{developerProfile.socials.phone}</strong> | Email: <strong>{developerProfile.socials.email}</strong>
            </p>
          </div>
        );
        break;

      default:
        resultNode = (
          <div className="text-rose-400">
            Command not recognized: "{cmdStr}". Type <span className="underline cursor-pointer font-bold" onClick={() => executeCommand('help')}>help</span> for available commands.
          </div>
        );
    }

    setHistory((prev) => [
      ...prev,
      {
        command: cmdStr,
        output: resultNode,
        time: now,
      },
    ]);
    setInputVal('');
  };

  useEffect(() => {
    if (externalTriggerCmd) {
      executeCommand(externalTriggerCmd);
    }
  }, [externalTriggerCmd]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandList.length > 0) {
        const nextIdx = historyIndex + 1 < commandList.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIdx);
        setInputVal(commandList[commandList.length - 1 - nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(commandList[commandList.length - 1 - nextIdx] || '');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  return (
    <section id="terminal-sandbox" className="py-24 relative bg-[#0D1015]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-cyan-400 font-mono text-sm tracking-wider font-semibold">
            06 — INTERACTIVE TERMINAL SANDBOX
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 via-white/10 to-transparent" />
        </div>

        <div className="max-w-3xl mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Developer CLI workspace.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            An authentic command-line environment to query bio, architecture stacks, git logs, and hiring protocols.
          </p>
        </div>

        {/* Terminal Container */}
        <div className="rounded-2xl bg-[#08090C] border border-white/15 overflow-hidden shadow-2xl relative">
          
          {/* Terminal Top Bar */}
          <div className="px-4 py-3 bg-[#11151C] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="text-xs font-mono text-slate-400 ml-2">
                kaung@mbp-dev:~ (zsh)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setHistory([])}
                className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/10 transition-colors text-xs font-mono flex items-center gap-1"
                title="Clear Terminal"
              >
                <RefreshCw className="w-3 h-3" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div
            className="p-6 font-mono text-xs md:text-sm min-h-[380px] max-h-[500px] overflow-y-auto space-y-4"
            onClick={() => inputRef.current?.focus()}
          >
            {/* Terminal History */}
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5 animate-in fade-in duration-100">
                <div className="flex items-center gap-2 text-cyan-400">
                  <span className="text-emerald-400 font-bold">➜</span>
                  <span className="text-slate-400">~</span>
                  <span className="text-white font-semibold">$ {item.command}</span>
                  <span className="text-[10px] text-slate-600 ml-auto font-mono">
                    {item.time}
                  </span>
                </div>
                <div className="pl-4 text-slate-300 leading-relaxed border-l border-white/5">
                  {item.output}
                </div>
              </div>
            ))}

            {/* Active Command Input Line */}
            <div className="flex items-center gap-2 text-cyan-400 pt-1">
              <span className="text-emerald-400 font-bold">➜</span>
              <span className="text-slate-400">~</span>
              <span className="text-white font-semibold">$</span>
              <input
                ref={inputRef}
                id="terminal-active-input"
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type command (e.g. 'help', 'stack', 'whoami')..."
                className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs md:text-sm placeholder:text-slate-600"
                autoComplete="off"
                spellCheck="false"
              />
              <span className="inline-block w-2 h-4 bg-cyan-400 animate-cursor" />
            </div>

            <div ref={terminalEndRef} />
          </div>

          {/* Quick Command Chips Toolbar */}
          <div className="px-4 py-3 bg-[#11151C] border-t border-white/10 flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-mono text-slate-500 mr-2">
              Quick Exec:
            </span>
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                id={`terminal-quick-btn-${cmd.replace(/\s+/g, '-')}`}
                onClick={() => executeCommand(cmd)}
                className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/40 text-[11px] font-mono text-slate-300 hover:text-cyan-300 transition-colors"
              >
                ${cmd}
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
