import React, { useState } from 'react';
import { PageId } from '../types';
import { adminLogin } from '../api';
import { motion } from 'motion/react';
import { Lock, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

export function AdminLogin({ setCurrentPage }: { setCurrentPage: (page: PageId) => void }) {
  const [email, setEmail] = useState(import.meta.env.VITE_ADMIN_EMAIL || '');
  const [password, setPassword] = useState(import.meta.env.VITE_ADMIN_PASSWORD || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await adminLogin(email, password);
      // Success, move to dashboard
      setCurrentPage('admin-dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to authenticate. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mesh-bg flex flex-col items-center justify-center p-4 relative overflow-hidden" id="admin_login_container">
      {/* Decorative ambient background */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-blue-deep/10 rounded-full blur-[100px] animate-ambient-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-green/5 rounded-full blur-[100px] animate-ambient-glow pointer-events-none" style={{ animationDelay: '2s' }} />

      <motion.button 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => setCurrentPage('academy')}
        className="absolute top-8 left-8 text-slate-500 hover:text-slate-800 text-xs font-bold uppercase tracking-widest font-mono"
      >
        &larr; Return to Public Site
      </motion.button>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 sm:p-10 relative z-10"
      >
        <div className="text-center space-y-4 mb-10">
          <div className="mx-auto w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6">
            <ShieldCheck size={32} className="text-brand-green transform rotate-6" />
          </div>
          <div>
            <h1 className="text-2xl font-black font-display text-slate-900">Admin Portal</h1>
            <p className="text-sm text-slate-500 mt-1">BlinkTech Academy Management</p>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium border border-red-100 mb-6 text-center animate-shake">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="space-y-1.5 text-left">
            <label className="block text-[10px] font-bold uppercase text-slate-400 tracking-wider pl-1">Admin Email</label>
            <div className="relative">
              <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="email" 
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 outline-none focus:bg-white focus:border-brand-blue-deep focus:ring-4 focus:ring-brand-blue-deep/10 transition-all"
                placeholder="admin@blinktech.com"
              />
            </div>
          </div>
          
          <div className="space-y-1.5 text-left">
            <label className="block text-[10px] font-bold uppercase text-slate-400 tracking-wider pl-1">Secure Password</label>
            <div className="relative">
              <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="password" 
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 outline-none focus:bg-white focus:border-brand-blue-deep focus:ring-4 focus:ring-brand-blue-deep/10 transition-all"
                placeholder="••••••••••••"
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-4 mt-4 bg-slate-900 hover:bg-black text-white rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-70 disabled:active:scale-100"
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            ) : (
              <>Authenticate <ArrowRight size={16} /></>
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
