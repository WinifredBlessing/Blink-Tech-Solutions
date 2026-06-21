import React from 'react';
import { motion } from 'motion/react';
import { PageId } from '../../types';

interface CtaSectionProps {
  setCurrentPage: (page: PageId) => void;
}

export function CtaSection({ setCurrentPage }: CtaSectionProps) {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden bg-slate-950 text-white text-left" id="section_cta">
      {/* Premium deep gradient background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-brand-blue-deep/90 to-brand-green/20" />
      
      {/* Animated glowing orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-green/30 rounded-full blur-[150px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-brand-blue-vibrant/30 rounded-full blur-[150px] pointer-events-none" 
      />

      {/* Pattern backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] mask-image:radial-gradient(circle_at_center,black,transparent) opacity-10" />
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 px-4 mx-auto max-w-5xl sm:px-6 lg:px-8 text-center space-y-10"
      >
        
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="text-white font-mono font-black text-xs uppercase tracking-[0.2em] bg-white/10 px-4 py-2 rounded-full inline-block border border-white/20 backdrop-blur-md shadow-lg">
            Empowerment Pathway
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black font-display tracking-tight text-white leading-tight drop-shadow-xl">
            Ready to Build <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-green/80">
              Skills for the Future?
            </span>
          </h2>
          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed font-medium max-w-2xl mx-auto">
            Step into high-performance operations. Partner with our technology architects to build customized systems for your school or configure business transformations for your enterprise.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-xl mx-auto pt-4">
          <button
            onClick={() => {
              setCurrentPage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            id="cta_primary_contact"
            className="group w-full sm:w-auto px-10 py-5 bg-brand-green text-brand-dark hover:bg-white font-black rounded-2xl shadow-[0_0_40px_rgba(34,197,94,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] cursor-pointer"
          >
            Get Free Consultation
          </button>
          <button
            onClick={() => {
              setCurrentPage('academy');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            id="cta_secondary_academy"
            className="w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white font-bold rounded-2xl transition-all border border-white/20 hover:border-white/40 hover:-translate-y-1 active:scale-[0.98] cursor-pointer shadow-lg"
          >
            Browse Course Catalog
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 pt-12 text-[11px] text-slate-300 font-bold uppercase tracking-[0.15em] font-mono">
          <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green" /> No Obligations
          </span>
          <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-sky" /> Bespoke Solutions
          </span>
          <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-vibrant" /> West Africa Catalyst
          </span>
        </div>

      </motion.div>
    </section>
  );
}
