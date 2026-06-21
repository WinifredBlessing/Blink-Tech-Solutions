import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Sparkles } from 'lucide-react';
import { CHOOSE_US_POINTS } from '../../data';
import { BrandIcon } from '../BrandIcon';

export function WhyChooseUsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30, filter: 'blur(5px)' },
    visible: { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative py-28 md:py-40 bg-white overflow-hidden" id="section_why_choose">
      {/* Decorative ambient background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue-deep/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8 text-left"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-[11px] font-black rounded-full bg-slate-50 text-brand-blue-vibrant border border-slate-100 shadow-sm uppercase tracking-[0.2em] font-display">
              <Sparkles size={14} className="text-brand-blue-vibrant animate-pulse" />
              Operational Frameworks
            </span>
            <h2 className="text-4xl sm:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
              Crafted for <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-deep to-brand-green">
                Measurable Outcomes.
              </span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
              We bridge high academic excellence with industrial technical speed. Our frameworks don't just instruct; they validate, configure, and sustain long-term digital growth.
            </p>
            
            <div className="relative p-6 rounded-3xl bg-slate-50 border border-slate-100 shadow-lg group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 space-y-3">
                <div className="flex items-center gap-3 text-brand-dark font-display font-extrabold text-lg">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-green group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <TrendingUp size={20} />
                  </div>
                  <span>Double Action Efficiency</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Every lesson is immediately paired with a physical tool, code block, or strategy outline.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 text-left" 
            id="choose_us_grid"
          >
            {CHOOSE_US_POINTS.map((pt, idx) => (
              <motion.div 
                variants={itemVariants}
                key={pt.title}
                id={`choose_card_${idx}`}
                className="glass-card p-8 rounded-3xl premium-shadow-hover group text-left relative overflow-hidden flex flex-col h-full"
              >
                <div className="card-top-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute top-0 left-0 right-0" />
                
                <div className="p-4 w-14 h-14 rounded-2xl bg-slate-50 text-brand-blue-deep group-hover:bg-gradient-to-br group-hover:from-brand-blue-deep group-hover:to-brand-blue-vibrant group-hover:text-white group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 flex items-center justify-center border border-slate-100 shadow-sm mb-6 relative z-10">
                  <BrandIcon name={pt.iconName} size={24} className="relative z-10" />
                </div>
                
                <div className="space-y-3 relative z-10">
                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight group-hover:text-brand-blue-deep transition-colors duration-300">
                    {pt.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {pt.description}
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
