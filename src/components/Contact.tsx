import React, { useState, useEffect } from 'react';
import { developerProfile } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, Copy, Check, ExternalLink, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Project / Senior Role Opportunity',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Timezones
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

    setTimeout(() => {
      setStatus('success');
      setFormState({
        name: '',
        email: '',
        subject: 'Project / Senior Role Opportunity',
        message: '',
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-[#0E121A] border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-cyan-400 font-semibold text-xs uppercase tracking-widest">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-1">
            Let's Discuss Your Next Build
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Whether you are looking for a Senior Full Stack Developer, need technical guidance on FinTech API integrations, or want to discuss a new product — I look forward to connecting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Regional Clocks */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
                <span className="text-cyan-400 font-medium flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Time Zone Overlap</span>
                </span>
                <span className="text-emerald-400 text-[11px] font-semibold">Online & Available</span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase">Singapore</div>
                  <div className="text-sm font-bold text-white mt-0.5">{times.singapore || '13:00'}</div>
                  <div className="text-[10px] text-cyan-400">SGT (UTC+8)</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase">Tokyo</div>
                  <div className="text-sm font-bold text-white mt-0.5">{times.tokyo || '14:00'}</div>
                  <div className="text-[10px] text-cyan-400">JST (UTC+9)</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase">Yangon</div>
                  <div className="text-sm font-bold text-white mt-0.5">{times.yangon || '11:30'}</div>
                  <div className="text-[10px] text-cyan-400">MMT (UTC+6:30)</div>
                </div>
              </div>
            </div>

            {/* Direct Cards */}
            <div className="space-y-3">
              {/* Email */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase font-medium">Email Address</div>
                    <a
                      href={`mailto:${developerProfile.socials.email}`}
                      className="text-xs sm:text-sm font-medium text-white hover:text-cyan-300 transition-colors"
                    >
                      {developerProfile.socials.email}
                    </a>
                  </div>
                </div>
                <button
                  id="contact-copy-email-btn"
                  onClick={() => handleCopy(developerProfile.socials.email, 'email')}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copiedKey === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone / WhatsApp */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase font-medium">WhatsApp / Mobile</div>
                    <a
                      href={`https://wa.me/${developerProfile.socials.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs sm:text-sm font-medium text-white hover:text-emerald-400 transition-colors"
                    >
                      {developerProfile.socials.phone}
                    </a>
                  </div>
                </div>
                <button
                  id="contact-copy-phone-btn"
                  onClick={() => handleCopy(developerProfile.socials.phone, 'phone')}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy phone"
                >
                  {copiedKey === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Social Links */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={developerProfile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 hover:text-cyan-300 flex items-center justify-between transition-colors"
                >
                  <span className="font-medium">LinkedIn Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                </a>
                <a
                  href={developerProfile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 hover:text-cyan-300 flex items-center justify-between transition-colors"
                >
                  <span className="font-medium">GitHub Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-xl space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h3 className="text-base font-bold text-white">
                  Send a Direct Message
                </h3>
                <span className="text-xs text-slate-400">Response within 24h</span>
              </div>

              {status === 'success' ? (
                <div className="py-10 text-center space-y-3 animate-in fade-in duration-200">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Received!</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
                    Thank you for reaching out. Kaung Chit San will get back to you promptly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-400">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Alex Tan"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder:text-slate-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-400">
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder:text-slate-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-400">
                      Subject / Topic
                    </label>
                    <select
                      id="contact-subject"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 focus:border-cyan-400 focus:outline-none text-white text-sm transition-colors"
                    >
                      <option value="Full-Time Senior Role (Remote / Singapore / Japan)">Full-Time Senior Role (Remote / Singapore / Japan)</option>
                      <option value="Freelance / Contract Architecture">Freelance / Contract Architecture</option>
                      <option value="FinTech & Accounting API Integration">FinTech & Accounting API Integration</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-400">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell me about your project, timeline, or engineering role..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder:text-slate-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md shadow-cyan-500/20 cursor-pointer"
                  >
                    {status === 'loading' ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
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
