import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, CheckCircle } from 'lucide-react';
import { PageId } from '../../types';

interface CompanyIntroSectionProps {
  setCurrentPage: (page: PageId) => void;
}

export function CompanyIntroSection({ setCurrentPage }: CompanyIntroSectionProps) {
  const [activeTab, setActiveTabTab] = useState<'mission' | 'history' | 'vision'>('mission');

  return (
    <section className="py-24 md:py-32 border-t border-slate-100" id="section_introduction">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            <span className="text-brand-blue-vibrant font-extrabold text-xs uppercase tracking-widest font-display bg-brand-blue-deep/5 px-3 py-1 rounded-full">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-extrabold font-display text-slate-900 tracking-tight leading-tight pt-1">
              Catalysts for Intellectual and Technological Capital.
            </h2>
            <p className="text-slate-600 leading-relaxed text-base">
              BlinkTech Solutions exists to create opportunities through technology, innovation, and skills development by helping businesses operate smarter while preparing individuals and institutions for the future.
            </p>
            
            <div className="pt-2">
              <button
                onClick={() => {
                  setCurrentPage('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                id="intro_about_more_btn"
                className="group inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue-deep hover:text-brand-blue-vibrant transition-all cursor-pointer"
              >
                Read Our Full Story{" "}
                <ChevronRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7" 
            id="intro_narrables"
          >
            <div className="bg-slate-50/80 rounded-3xl p-6 md:p-8 border border-slate-100/80 text-left space-y-6 shadow-sm">
              
              {/* Tab switchers */}
              <div className="flex gap-1.5 bg-slate-100 p-1 rounded-xl">
                {(['mission', 'vision', 'history'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTabTab(tab)}
                    id={`intro_tab_${tab}`}
                    className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider transition-all rounded-lg text-center cursor-pointer ${
                      activeTab === tab 
                        ? 'bg-white text-brand-blue-deep shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-slate-100' 
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    {tab === 'mission' ? 'Our Mission' : tab === 'vision' ? 'Our Vision' : 'Why We Exist'}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {activeTab === 'mission' && (
                  <motion.div
                    key="mission"
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="space-y-4"
                    id="intro_tab_content_mission"
                  >
                    <h3 className="text-lg font-bold text-slate-900 font-display">Empowering Growth & Transformation</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      To bridge the gap between technology, education, and opportunity by delivering innovative solutions that empower growth, develop talent, and inspire transformation.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-slate-600 pt-2">
                      <li className="flex items-center gap-2"><CheckCircle size={15} className="text-brand-green" /> Innovative Solutions</li>
                      <li className="flex items-center gap-2"><CheckCircle size={15} className="text-brand-green" /> Talent Development</li>
                      <li className="flex items-center gap-2"><CheckCircle size={15} className="text-brand-green" /> Educational Bridging</li>
                      <li className="flex items-center gap-2"><CheckCircle size={15} className="text-brand-green" /> Inspiring Transformation</li>
                    </ul>
                  </motion.div>
                )}

                {activeTab === 'vision' && (
                  <motion.div
                    key="vision"
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="space-y-4"
                    id="intro_tab_content_vision"
                  >
                    <h3 className="text-lg font-bold text-slate-900 font-display">A Future of Limitless Opportunities</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      To shape a future where technology, education, and innovation create limitless opportunities for businesses and future leaders.
                    </p>
                    <div className="p-4 bg-brand-blue-deep/5 rounded-xl border border-brand-blue-deep/10 text-xs text-brand-blue-deep leading-relaxed font-medium">
                      <strong className="text-brand-blue-vibrant">The Vision Target:</strong> We aim to lead the digital empowerment of institutions, creating interconnected ecosystems where tech innovation thrives.
                    </div>
                  </motion.div>
                )}

                {activeTab === 'history' && (
                  <motion.div
                    key="history"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                    id="intro_tab_content_history"
                  >
                    <h3 className="text-lg font-bold text-slate-900 font-display">Bridging the Corporate-Education Mismatch</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Historically, schools teach static technologies with theoretical software, while companies require real-time integrations, prompt structures, and functional data analysis. BlinkTech exists explicitly to step in and fill this vacuum with custom curriculum configurations and agile advisory teams.
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-center pt-2">
                      <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-xs">
                        <p className="text-xl font-black text-brand-blue-deep font-display">2024</p>
                        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Founded</p>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-xs">
                        <p className="text-xl font-black text-brand-blue-deep font-display">2500+</p>
                        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Graduates</p>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-xs">
                        <p className="text-xl font-black text-brand-blue-deep font-display">80+</p>
                        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">SMEs Assisted</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
