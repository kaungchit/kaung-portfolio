import React, { useState } from 'react';
import { Server, Database, Smartphone, Globe, Cpu, Layers, Sparkles, CheckCircle2, Play, RefreshCw, Zap, ArrowRight, ShieldCheck, Activity } from 'lucide-react';

export const ArchitecturePlayground: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>('laravel');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationLog, setSimulationLog] = useState<string[]>([]);
  const [simulationStep, setSimulationStep] = useState<number>(0);

  const nodes = [
    {
      id: 'client',
      name: 'React 19 / Vue 3 Client',
      type: 'Frontend Tier',
      icon: Globe,
      desc: 'Single Page Application with optimistic state updates, token caching, and responsive dashboard telemetry.',
      tech: ['React 19', 'Tailwind', 'Vite', 'Pinia/Zustand'],
      throughput: 'Sub-50ms render',
    },
    {
      id: 'gateway',
      name: 'Nginx / Docker Gateway',
      type: 'Ingress & Proxy',
      icon: ShieldCheck,
      desc: 'SSL termination, HTTP/2 multiplexing, rate-limiting, and reverse proxy routing to PHP-FPM sockets.',
      tech: ['Nginx', 'Docker Compose', 'Certbot', 'Rate Limiter'],
      throughput: '5,000 req/sec',
    },
    {
      id: 'laravel',
      name: 'Laravel DDD Core Engine',
      type: 'Application Kernel',
      icon: Server,
      desc: 'Modular Domain-Driven Design service layer with strict typing, Eloquent optimization, and event dispatchers.',
      tech: ['Laravel 11', 'PHP 8.3', 'DDD Services', 'PHPUnit (TDD)'],
      throughput: 'REST / GraphQL APIs',
    },
    {
      id: 'redis',
      name: 'Redis Queue & Cache',
      type: 'Asynchronous Layer',
      icon: Zap,
      desc: 'In-memory caching for hot queries and decoupled job queues for invoice generation, email, and webhooks.',
      tech: ['Redis 7', 'Laravel Horizon', 'Pub/Sub', 'Mutex Locks'],
      throughput: '0.8ms query latency',
    },
    {
      id: 'mysql',
      name: 'MySQL 8 / PostgreSQL',
      type: 'Persistent Store',
      icon: Database,
      desc: 'Relational ACID schema with composite indices, pessimistic locking for inventory/POS, and audit ledgers.',
      tech: ['MySQL 8', 'InnoDB', 'Foreign Constraints', 'Query Profiling'],
      throughput: 'High-Concurrency ACID',
    },
    {
      id: 'fintech',
      name: 'Xero / QuickBooks / Stripe',
      type: 'FinTech Integrations',
      icon: Sparkles,
      desc: 'Idempotent webhook synchronizers with exponential backoff, token refreshing, and automatic dispute handling.',
      tech: ['Xero OAuth2', 'QuickBooks API', 'Stripe Webhooks', 'KPay'],
      throughput: '100% Reconciliation Accuracy',
    },
  ];

  const selectedNodeData = nodes.find((n) => n.id === activeNode) || nodes[2];

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimulationStep(1);
    setSimulationLog(['[00:00:01] INCOMING_REQ: POST /api/v1/invoices/sync-to-ledgers']);

    setTimeout(() => {
      setSimulationStep(2);
      setSimulationLog((prev) => [
        ...prev,
        '[00:00:02] INGRESS: Nginx validated TLS 1.3 & routed to PHP-FPM worker',
      ]);
    }, 600);

    setTimeout(() => {
      setSimulationStep(3);
      setSimulationLog((prev) => [
        ...prev,
        '[00:00:03] KERNEL: Laravel resolved SyncService via Service Container (DDD)',
      ]);
    }, 1200);

    setTimeout(() => {
      setSimulationStep(4);
      setSimulationLog((prev) => [
        ...prev,
        '[00:00:04] DB: MySQL acquired lock for ledger invoice #INV-9284',
        '[00:00:05] QUEUE: Dispatched SyncInvoiceToXeroJob onto Redis Horizon queue',
      ]);
    }, 1800);

    setTimeout(() => {
      setSimulationStep(5);
      setSimulationLog((prev) => [
        ...prev,
        '[00:00:06] EXTERNAL: Authenticated Xero API OAuth2 token renewed & invoice pushed',
        '[00:00:07] SUCCESS: 200 OK — Ledger Reconciled with zero manual overhead',
      ]);
      setIsSimulating(false);
    }, 2500);
  };

  return (
    <section id="architecture-flow" className="py-24 relative bg-[#08090C] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-cyan-400 font-mono text-sm tracking-wider font-semibold">
            05 — SYSTEM ARCHITECTURE PLAYGROUND
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 via-white/10 to-transparent" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Interactive Full-Stack Architecture Pipeline.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Explore how I decouple frontend clients, containerized gateways, Laravel domain logic, Redis queues, and FinTech APIs for maximum fault-tolerance.
            </p>
          </div>

          <button
            id="arch-simulate-btn"
            onClick={runSimulation}
            disabled={isSimulating}
            className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-mono text-xs font-bold flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/20 self-start md:self-auto shrink-0"
          >
            {isSimulating ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Simulating Transaction...</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>Simulate Live Webhook Sync</span>
              </>
            )}
          </button>
        </div>

        {/* Architecture Node Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {nodes.map((node, index) => {
            const Icon = node.icon;
            const isSelected = activeNode === node.id;
            const isHighlightedInSim = isSimulating && simulationStep >= index + 1;

            return (
              <button
                key={node.id}
                id={`arch-node-${node.id}`}
                onClick={() => setActiveNode(node.id)}
                className={`text-left p-5 rounded-2xl transition-all relative overflow-hidden border ${
                  isSelected
                    ? 'bg-[#11151C] border-cyan-400 shadow-xl shadow-cyan-950/40'
                    : 'bg-[#0D1015] border-white/10 hover:border-white/20'
                } ${isHighlightedInSim ? 'ring-2 ring-cyan-400/80 bg-cyan-950/20' : ''}`}
              >
                {/* Node Step Marker */}
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-xl ${
                    isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-white/5 text-slate-400'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">
                    STAGE 0{index + 1}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-1">
                  {node.type}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {node.name}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-3">
                  {node.desc}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] font-mono text-slate-500">
                  <span>{node.throughput}</span>
                  <span className="text-cyan-400 text-[10px]">Select Node →</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive & Telemetry Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Selected Node Technical Specs */}
          <div className="lg:col-span-6 p-6 rounded-2xl bg-[#0D1015] border border-white/10 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  NODE_SPECIFICATION // {selectedNodeData.id.toUpperCase()}
                </span>
                <h4 className="text-lg font-bold text-white mt-0.5">
                  {selectedNodeData.name}
                </h4>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                {selectedNodeData.type}
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedNodeData.desc}
            </p>

            <div>
              <h5 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Deployed Tooling & Frameworks:
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {selectedNodeData.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Real-time Telemetry Terminal Logs */}
          <div className="lg:col-span-6 p-6 rounded-2xl bg-[#0D1015] border border-white/10 font-mono text-xs text-slate-300 flex flex-col justify-between shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-slate-400">
              <span className="flex items-center gap-2 text-cyan-400">
                <Activity className="w-4 h-4 animate-pulse" />
                <span>TELEMETRY_LOGS // SIMULATOR</span>
              </span>
              <span className="text-[11px] text-slate-500">
                {isSimulating ? 'TRANSMITTING' : 'IDLE'}
              </span>
            </div>

            <div className="py-4 space-y-2 min-h-[140px] overflow-y-auto">
              {simulationLog.length === 0 ? (
                <div className="text-slate-600 italic py-6 text-center">
                  Press "Simulate Live Webhook Sync" above to stream an end-to-end multi-tier transaction log...
                </div>
              ) : (
                simulationLog.map((log, i) => (
                  <div key={i} className="text-[11px] leading-relaxed flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">❯</span>
                    <span className="text-slate-200">{log}</span>
                  </div>
                ))
              )}
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
              <span>Security: TLS 1.3 / OAuth2 HMAC</span>
              <span className="text-emerald-400 font-semibold">Status: 200 OK</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
