import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { PageId } from '../../types';
import { FEATURED_PROGRAMMES } from '../../data';
import { BrandIcon } from '../BrandIcon';

interface FeaturedProgrammesSectionProps {
  setCurrentPage: (page: PageId) => void;
}

export function FeaturedProgrammesSection({ setCurrentPage }: FeaturedProgrammesSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="py-24 md:py-32 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900" id="section_featured_programmes">
      {/* Neon light curves mirroring deep corporate technology vectors */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-brand-blue-deep/20 rounded-full blur-3xl opacity-35 pointer-events-none" />
      <div className="absolute left-1/4 bottom-0 w-80 h-80 bg-brand-green/10 rounded-full blur-3xl opacity-20 pointer-events-none" />
      
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16 text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <span className="text-brand-green font-mono font-bold text-xs uppercase tracking-widest bg-brand-green/15 px-3 py-1 rounded-full border border-brand-green/10">
              Interactive Accelerators
            </span>
            <h2 className="text-3xl sm:text-4.5xl font-extrabold font-display tracking-tight text-white leading-none pt-1">
              Featured Flagship Curricula
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl font-normal leading-relaxed">
              Our marquee systems engineered to boost logical coherence and configure state-of-the-art office workspaces.
            </p>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={() => {
              setCurrentPage('debate');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            id="featured_debate_cta"
            className="group px-5 py-3 text-xs sm:text-sm font-bold bg-brand-green hover:bg-brand-green/90 text-brand-dark rounded-xl flex items-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            Learn about QUIZ Debate
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" 
          id="flagship_programs_grid"
        >
          {FEATURED_PROGRAMMES.map((pr, idx) => (
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5 }}
              key={pr.title}
              id={`featured_pr_${idx}`}
              className="bg-white/5 backdrop-blur-md p-6 sm:p-7 rounded-2xl border border-white/10 flex flex-col justify-between text-left hover:bg-white/15 hover:border-brand-green/30 hover:shadow-2xl hover:shadow-brand-green/5 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="bg-brand-green/15 text-brand-green text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full border border-brand-green/10">
                    {pr.tag}
                  </span>
                  <div className="text-slate-400 group-hover:text-brand-green group-hover:scale-110 transition-all duration-300">
                    <BrandIcon name={pr.iconName} size={18} />
                  </div>
                </div>
                
                <h3 className="font-display font-bold text-base sm:text-lg text-white leading-snug">
                  {pr.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
                  {pr.description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 mt-5">
                <button
                  onClick={() => {
                    if (pr.title.includes('Debate')) {
                      setCurrentPage('debate');
                    } else {
                      setCurrentPage('academy');
                    }
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex items-center gap-1 text-xs text-brand-green hover:text-white font-bold transition-colors cursor-pointer"
                >
                  Review Curriculum Details <ChevronRight size={13} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
