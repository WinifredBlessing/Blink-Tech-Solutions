import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PageId } from '../../types';
import { SERVICE_PILLARS } from '../../data';
import { BrandIcon } from '../BrandIcon';

interface ServicePillarsSectionProps {
  setCurrentPage: (page: PageId) => void;
}

export function ServicePillarsSection({ setCurrentPage }: ServicePillarsSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative py-28 md:py-40 bg-slate-50/30 overflow-hidden" id="section_pillars">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-100/50 to-transparent z-0" />
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-blue-deep/5 rounded-full blur-[100px] z-0" />

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-5 max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block text-brand-blue-vibrant font-black text-[11px] uppercase tracking-[0.2em] font-display bg-white px-4 py-1.5 rounded-full shadow-sm border border-slate-100">
            Strategic Assets
          </span>
          <h2 className="text-4xl sm:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
            Double-Action Core Solutions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            Whether you are an institution training tomorrow’s workforce or a business hungry for modern automation, we orchestrate the appropriate operational workflows.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {SERVICE_PILLARS.map((p, idx) => (
            <motion.div 
              variants={cardVariants}
              key={p.title}
              className="glass-card p-8 rounded-3xl premium-shadow-hover group text-left relative overflow-hidden flex flex-col justify-between h-full"
            >
              <div className="card-top-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute top-0 left-0 right-0" />
              
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-slate-100 text-brand-blue-deep group-hover:bg-gradient-to-br group-hover:from-brand-blue-deep group-hover:to-brand-blue-vibrant group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex items-center justify-center relative overflow-hidden z-10">
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <BrandIcon name={p.iconName} size={24} className="relative z-10" />
                </div>
                
                <div>
                  <h3 className="font-display font-extrabold text-xl text-slate-900 tracking-tight mb-3 group-hover:text-brand-blue-deep transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {p.description}
                  </p>
                </div>
              </div>
              
              <div className="pt-8 mt-6 border-t border-slate-200/50 relative z-10">
                <button
                  onClick={() => {
                    if (p.title.includes('Technology') || p.title.includes('Business')) {
                      setCurrentPage('business');
                    } else if (p.title.includes('Education')) {
                      setCurrentPage('education');
                    } else {
                      setCurrentPage('debate');
                    }
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group/btn flex items-center justify-between w-full text-sm font-bold text-slate-700 hover:text-brand-blue-vibrant transition-colors cursor-pointer"
                >
                  <span>Examine Service</span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover/btn:bg-brand-blue-vibrant group-hover/btn:text-white transition-all duration-300 group-hover/btn:scale-110">
                    <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
