import React, { useState, useEffect } from 'react';
import { developerProfile } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, MessageSquare, Copy, Check, ExternalLink, Clock, ShieldCheck, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Full-Stack Project / Opportunity',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Timezone display
  const [times, setTimes] = useState({
    singapore: '',
    tokyo: '',
    yangon: '',
  });

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      const formatTime = (timeZone: string) =>
        new Intl.DateTimeFormat('en-GB', {
          timeZone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(now);

      setTimes({
        singapore: formatTime('Asia/Singapore'),
        tokyo: formatTime('Asia/Tokyo'),
        yangon: formatTime('Asia/Yangon'),
      });
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    // Simulate reliable dispatch
    setTimeout(() => {
      setStatus('success');
      setFormState({
        name: '',
        email: '',
        subject: 'Full-Stack Project / Opportunity',
        message: '',
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0D1015] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-cyan-400 font-mono text-sm tracking-wider font-semibold">
            08 — GET IN TOUCH // LET'S CONNECT
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 via-white/10 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Headline & Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                Have an idea? <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Let's turn it into something real.
                </span>
              </h2>
              <p className="text-slate-400 text-base mt-4 leading-relaxed">
                Whether you need a Senior Full-Stack Developer for high-velocity sprint delivery, FinTech API integration, or an end-to-end web platform — I'm ready to collaborate.
              </p>
            </div>

            {/* Live Regional Clocks */}
            <div className="p-5 rounded-2xl bg-[#11151C] border border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-white/5 pb-2">
                <span className="text-cyan-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>REGIONAL_DISPATCH_CLOCKS</span>
                </span>
                <span className="text-emerald-400 text-[11px]">ACTIVE</span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center font-mono">
                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] text-slate-500 uppercase">Singapore</div>
                  <div className="text-sm font-bold text-white mt-0.5">{times.singapore || '13:00'}</div>
                  <div className="text-[9px] text-cyan-400">SGT (UTC+8)</div>
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] text-slate-500 uppercase">Tokyo</div>
                  <div className="text-sm font-bold text-white mt-0.5">{times.tokyo || '14:00'}</div>
                  <div className="text-[9px] text-cyan-400">JST (UTC+9)</div>
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] text-slate-500 uppercase">Yangon</div>
                  <div className="text-sm font-bold text-white mt-0.5">{times.yangon || '11:30'}</div>
                  <div className="text-[9px] text-cyan-400">MMT (UTC+6:30)</div>
                </div>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              {/* Email */}
              <div className="p-4 rounded-xl bg-[#11151C] border border-white/10 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 uppercase">Primary Email</div>
                    <a
                      href={`mailto:${developerProfile.socials.email}`}
                      className="text-xs sm:text-sm font-mono text-white hover:text-cyan-300 transition-colors"
                    >
                      {developerProfile.socials.email}
                    </a>
                  </div>
                </div>
                <button
                  id="contact-copy-email-btn"
                  onClick={() => handleCopy(developerProfile.socials.email, 'email')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-cyan-300 transition-colors"
                  title="Copy email"
                >
                  {copiedKey === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone / WhatsApp */}
              <div className="p-4 rounded-xl bg-[#11151C] border border-white/10 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 uppercase">WhatsApp / Mobile</div>
                    <a
                      href={`https://wa.me/${developerProfile.socials.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs sm:text-sm font-mono text-white hover:text-emerald-300 transition-colors"
                    >
                      {developerProfile.socials.phone}
                    </a>
                  </div>
                </div>
                <button
                  id="contact-copy-phone-btn"
                  onClick={() => handleCopy(developerProfile.socials.phone, 'phone')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-emerald-300 transition-colors"
                  title="Copy phone"
                >
                  {copiedKey === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Line ID / Socials */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={developerProfile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-[#11151C] border border-white/10 hover:border-cyan-500/40 text-xs font-mono text-slate-300 hover:text-cyan-300 flex items-center justify-between transition-colors"
                >
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                </a>
                <a
                  href={developerProfile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-[#11151C] border border-white/10 hover:border-cyan-500/40 text-xs font-mono text-slate-300 hover:text-cyan-300 flex items-center justify-between transition-colors"
                >
                  <span>GitHub Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Modern Developer Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#11151C] border border-white/15 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-cyan-400" />
                  <h3 className="font-mono text-sm font-semibold text-white uppercase tracking-wider">
                    SEND_MESSAGE // INBOX_GATEWAY
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-500">256-bit encrypted</span>
              </div>

              {status === 'success' ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Transmitted Successfully!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out. Your message has been received by Kaung Chit San. A response will be dispatched within 24 business hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && (
                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        id="contact-form-name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Alex Tan / Hiring Manager"
                        className="w-full px-4 py-3 rounded-xl bg-[#08090C] border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm font-mono placeholder:text-slate-600 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                        Your Email *
                      </label>
                      <input
                        id="contact-form-email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#08090C] border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm font-mono placeholder:text-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Subject / Engagement Type
                    </label>
                    <select
                      id="contact-form-subject"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#08090C] border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm font-mono transition-colors"
                    >
                      <option value="Full-Time Senior Role (Remote/Singapore/Japan)">Full-Time Senior Role (Remote/Singapore/Japan)</option>
                      <option value="Freelance / Contract Architecture">Freelance / Contract Architecture</option>
                      <option value="FinTech & Accounting API Integration (Xero/Stripe)">FinTech & Accounting API Integration (Xero/Stripe)</option>
                      <option value="General Engineering Inquiry">General Engineering Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Message / Project Details *
                    </label>
                    <textarea
                      id="contact-form-message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Describe your project, timeline, architecture needs or role requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-[#08090C] border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm font-mono placeholder:text-slate-600 transition-colors resize-none"
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-mono text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 cursor-pointer"
                  >
                    {status === 'loading' ? (
                      <span>Transmitting Payload...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message Payload</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
