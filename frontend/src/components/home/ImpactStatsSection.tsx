import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, BarChart3 } from 'lucide-react';
import { IMPACT_STATISTICS } from '../../data';
import { BrandIcon } from '../BrandIcon';
import { AnimatedCounter } from './AnimatedCounter';

export function ImpactStatsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 40, filter: 'blur(10px)' },
    visible: { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative py-28 md:py-40 bg-slate-50/30 overflow-hidden border-t border-slate-100" id="section_impact_stats">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-brand-blue-vibrant/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-12 lg:col-start-1 lg:max-w-none xl:col-span-5 space-y-8 text-left"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-[11px] font-black rounded-full bg-white text-brand-green border border-slate-100 shadow-sm uppercase tracking-[0.2em] font-display">
              <BarChart3 size={14} className="text-brand-green" />
              Regional Performance Metrics
            </span>
            <h2 className="text-4xl sm:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
              Our Concrete <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-deep to-brand-green">
                Footprint & Progress.
              </span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
              We believe social empowerment is calculated through numerical realities, not abstract conceptual theories. Every workshop delivers written assessments; every enterprise integration measures processing delays dynamically.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-[11px] font-bold text-slate-700 uppercase tracking-widest font-mono bg-white p-4 rounded-2xl border border-slate-100 shadow-sm w-max">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-brand-blue-vibrant" /> Total Audited
              </div>
              <div className="w-px h-4 bg-slate-200 hidden sm:block" />
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-brand-blue-vibrant" /> Verified Metrics
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-12 xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 text-left" 
            id="impact_stats_grid"
          >
            {IMPACT_STATISTICS.map((stat, idx) => (
              <motion.div 
                variants={cardVariants}
                key={stat.label}
                id={`stat_card_${idx}`}
                className="glass-card p-8 sm:p-10 rounded-3xl premium-shadow-hover transition-all duration-500 space-y-6 relative overflow-hidden group h-full flex flex-col justify-center"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue-deep/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                
                <div className="flex items-start justify-between relative z-10">
                  <div className="p-4 w-14 h-14 rounded-2xl bg-white text-brand-blue-vibrant group-hover:bg-gradient-to-br group-hover:from-brand-blue-deep group-hover:to-brand-blue-vibrant group-hover:text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 flex items-center justify-center border border-slate-100 shadow-sm">
                    <BrandIcon name={stat.iconName} size={24} />
                  </div>
                  <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-slate-300 opacity-50 group-hover:opacity-100 group-hover:bg-slate-50 transition-all duration-300">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                    </motion.div>
                  </div>
                </div>
                
                <div className="space-y-2 relative z-10">
                  <h3 className="font-display font-black text-5xl sm:text-6xl text-slate-900 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-blue-deep group-hover:to-brand-blue-vibrant transition-all drop-shadow-sm">
                    <AnimatedCounter value={stat.value} />
                  </h3>
                  <h4 className="font-display font-extrabold text-base text-slate-800 tracking-wide uppercase">
                    {stat.label}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium pt-2 border-t border-slate-100 mt-4">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
