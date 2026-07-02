import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  GraduationCap, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight,
  Terminal,
  Cpu,
  TrendingUp
} from 'lucide-react';
import { PageId } from '../../types';

interface HeroSectionProps {
  setCurrentPage: (page: PageId) => void;
}

export function HeroSection({ setCurrentPage }: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative pt-24 pb-28 md:py-40 overflow-hidden" id="section_hero">
      {/* Dynamic Background */}
      <div className="absolute inset-0 mesh-bg z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#ffffff,transparent_80%)] z-0 opacity-80" />
      
      {/* Stunning Animated Ambient Glows */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-brand-blue-deep/20 rounded-full blur-[100px] animate-ambient-glow z-0" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-brand-vibrant/20 rounded-full blur-[120px] animate-ambient-glow z-0" style={{ animationDelay: '-5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-sky/10 rounded-full blur-[150px] z-0" />

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center">
          
          {/* Hero text metadata content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-10 text-left"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-2 text-xs font-bold rounded-full bg-white/80 backdrop-blur-md text-brand-blue-deep border border-brand-blue-deep/10 shadow-[0_4px_20px_rgba(0,58,148,0.08)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-vibrant opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-vibrant"></span>
              </span>
              <span className="tracking-wide uppercase text-[10px] sm:text-xs">Building Digital Confidence & SME Growth</span>
              <Sparkles size={14} className="text-brand-green ml-1" />
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl lg:text-[5.5rem] font-black font-display text-brand-dark tracking-tighter leading-[1.05]">
              Skills Built.<br />
              <span className="text-gradient inline-block pb-2">
                Businesses Powered.
              </span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl font-medium">
              BlinkTech Solutions exists to create opportunities through technology, innovation, and skills development by helping businesses operate smarter while preparing individuals and institutions for the future.
            </motion.p>
            
            {/* Core Hero CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 pt-4">
              <button
                onClick={() => {
                  setCurrentPage('academy');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group relative flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white rounded-2xl bg-gradient-to-r from-brand-blue-deep via-brand-blue-vibrant to-brand-blue-sky premium-shadow-hover overflow-hidden"
              >
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat transition-[background-position_0s_ease] group-hover:bg-[position:200%_0,0_0] group-hover:duration-[1.5s]" />
                <GraduationCap size={20} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">Explore Academy Courses</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  setCurrentPage('business');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-slate-800 bg-white/60 backdrop-blur-md rounded-2xl border border-slate-200/60 premium-shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <TrendingUp size={20} className="text-brand-blue-vibrant group-hover:scale-110 transition-transform" />
                Enterprise Advisory
                <ArrowUpRight size={18} className="text-slate-400 group-hover:text-brand-blue-deep group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </button>
            </motion.div>

            {/* Real-time Trust Overlays */}
            <motion.div variants={itemVariants} className="pt-10 border-t border-slate-200/50">
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-5">
                Strategic Competencies Delivered
              </p>
              <div className="flex flex-wrap items-center gap-x-10 gap-y-4 text-sm text-slate-700 font-bold">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-green/20 text-brand-green">
                    <CheckCircle2 size={14} />
                  </div>
                  <span>AI & Emerging Tech</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-blue-vibrant/10 text-brand-blue-vibrant">
                    <CheckCircle2 size={14} />
                  </div>
                  <span>Analytical Debate</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-blue-deep/10 text-brand-blue-deep">
                    <CheckCircle2 size={14} />
                  </div>
                  <span>Web Architecture</span>
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* Hero visual tech panel overlay mockup */}
          <div className="lg:col-span-5 relative perspective-1000 mt-10 lg:mt-0">
            <div className="relative mx-auto w-full max-w-[480px] aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
              {/* Decorative glowing gradient backdrops */}
              <div className="absolute -inset-10 rounded-[3rem] bg-gradient-to-tr from-brand-blue-deep via-brand-vibrant to-brand-green opacity-20 blur-3xl animate-pulse" />
              
              {/* The main professional card mock */}
              <motion.div 
                initial={{ y: 50, opacity: 0, rotateX: 10, rotateY: -10 }}
                animate={{ y: 0, opacity: 1, rotateX: 0, rotateY: 0 }}
                transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full glass-card-dark rounded-3xl p-6 text-left flex flex-col justify-between overflow-hidden shadow-2xl animate-float group"
              >
                {/* Refined Terminal Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 shadow-[0_0_10px_rgba(244,63,94,0.5)]" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5">
                    <Terminal size={12} className="text-slate-400" />
                    <span className="text-[10px] text-slate-400 font-mono font-medium tracking-wider">blink-engine.sh</span>
                  </div>
                </div>

                {/* Body visualization representing "Future Workplace Skills" */}
                <div className="my-auto py-6 space-y-5 font-mono text-[13px] text-slate-300">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <span className="text-brand-green font-bold">blinktech@node:~$</span> <span className="text-amber-400">run optimize-business</span>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="p-4 bg-slate-900/50 backdrop-blur-md rounded-2xl text-slate-400 space-y-2.5 border border-white/5 shadow-inner"
                  >
                    <p className="text-brand-blue-sky font-bold flex items-center gap-2">
                      <CheckCircle2 size={14} /> SME Digitization Diagnostics complete
                    </p>
                    <p className="flex items-center gap-2">
                      <Cpu size={14} className="text-slate-500" /> CRM & Invoicing automation pipeline configured
                    </p>
                    <p className="flex items-center gap-2">
                      <TrendingUp size={14} className="text-brand-green" /> Database efficiency: <span className="text-white font-bold bg-white/10 px-1.5 rounded">+140%</span> latency reduction
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2, duration: 0.5 }}
                    className="pt-2"
                  >
                    <span className="text-brand-green font-bold">blinktech@node:~$</span> <span className="text-amber-400">deploy blinktech-academy</span>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 0.5 }}
                    className="text-slate-400 space-y-2 text-xs font-medium pl-2"
                  >
                    <p className="group-hover:text-white transition-colors cursor-default">🎓 [1] Web Dev Foundations <span className="text-slate-600 mx-1">-&gt;</span> <span className="text-brand-green font-bold shadow-[0_0_10px_rgba(101,184,46,0.3)] bg-brand-green/10 px-1.5 py-0.5 rounded">ACTIVE</span></p>
                    <p className="group-hover:text-white transition-colors cursor-default delay-75">🎓 [2] AI Workplace Prompting <span className="text-slate-600 mx-1">-&gt;</span> <span className="text-brand-green font-bold shadow-[0_0_10px_rgba(101,184,46,0.3)] bg-brand-green/10 px-1.5 py-0.5 rounded">ACTIVE</span></p>
                    <p className="group-hover:text-white transition-colors cursor-default delay-150">🎓 [3] Computational Systems Logic <span className="text-slate-600 mx-1">-&gt;</span> <span className="text-brand-green font-bold shadow-[0_0_10px_rgba(101,184,46,0.3)] bg-brand-green/10 px-1.5 py-0.5 rounded">ACTIVE</span></p>
                  </motion.div>
                </div>

                {/* Float card overlay inside the mockup */}
                <motion.div 
                  initial={{ y: 20, opacity: 0, scale: 0.9 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.8, type: 'spring' }}
                  className="absolute -right-6 top-1/4 glass-panel p-4 rounded-2xl text-slate-900 space-y-1.5 border border-white shadow-2xl w-64 animate-float-delay z-20"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-brand-blue-deep font-extrabold">Upcoming Bootcamp</p>
                      <h4 className="font-display font-bold text-sm text-slate-900 mt-1 leading-tight">QUIZ Masterclass & Debate</h4>
                    </div>
                    <div className="bg-gradient-to-br from-brand-green to-emerald-500 text-white px-2 py-1 rounded-lg text-[10px] font-black shadow-md flex items-center gap-1">
                      <Sparkles size={10} /> 98% Match
                    </div>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5 mt-2">
                    <div className="bg-brand-blue-deep h-1.5 rounded-full w-4/5"></div>
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium text-right mt-1">Enrolling Now</p>
                </motion.div>

              </motion.div>
              
              {/* Visual badge hanging on bottom left */}
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, type: 'spring', stiffness: 200, damping: 15 }}
                className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-xl text-slate-900 p-5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 text-left z-30 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-blue-deep to-brand-vibrant flex items-center justify-center shadow-lg">
                  <TrendingUp size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Proven Impact</p>
                  <p className="text-xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-deep to-brand-green">100% Practical</p>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
