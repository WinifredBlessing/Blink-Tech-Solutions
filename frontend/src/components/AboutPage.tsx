import React from 'react';
import { CORE_VALUES, TEAM_MEMBERS, IMPACT_STATISTICS } from '../data';
import { BrandIcon } from './BrandIcon';
import { CheckCircle, Linkedin, Target, Shield, Rocket, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import { AnimatedCounter } from './home/AnimatedCounter';
import { CompanyIntroSection } from './home/CompanyIntroSection';

interface AboutPageProps {
  setCurrentPage: (page: PageId) => void;
}

export function AboutPage({ setCurrentPage }: AboutPageProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1], // Custom premium ease-out
      },
    },
  };

  return (
    <div className="relative overflow-hidden bg-white py-24 md:py-32" id="about_page_container">
      {/* Decorative background glows */}
      <div className="absolute top-1/10 right-1/10 w-96 h-96 bg-brand-blue-deep/5 rounded-full blur-3xl animate-ambient-glow pointer-events-none" />
      <div className="absolute bottom-1/5 left-1/10 w-96 h-96 bg-brand-green/3 rounded-full blur-3xl animate-ambient-glow pointer-events-none" style={{ animationDelay: '-4s' }} />

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header Introduction Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-left space-y-5 max-w-3xl border-b border-slate-100 pb-12 mb-20"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-bold rounded-full bg-brand-blue-deep/5 text-brand-blue-deep border border-brand-blue-deep/10 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
            <span className="tracking-wide uppercase font-mono">A Corporate Profile</span>
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-slate-900 tracking-tight leading-tight pt-2">
            Connecting Digital Skill Training with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-deep via-brand-blue-vibrant to-brand-green">
              Enterprise Operations
            </span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            Learn more about the history, executive team, philosophy, and prospective community achievements backing our professional strategy.
          </p>
        </motion.div>

        {/* SECTION 1: Company Intro */}
        <CompanyIntroSection setCurrentPage={setCurrentPage} />
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-28" id="about_story_section">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 text-left space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
              Our Roots & Social Commitment
            </h2>
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                BlinkTech Solutions emerged inside West Africa from a simple observation: universities graduate thousands of eager minds with theoretical computer science degrees, yet local retail, agricultural, and transport businesses still operate manually because they lack the practical implementation staff.
              </p>
              <p>
                To close this structural loop, our system architects launched BlinkTech. We configured custom training frameworks that don't just teach code syntax—they configure CRM software, automate invoice lines, build operational websites, and train communication logic. We act as both specialized educators and executive digital advisors.
              </p>
            </div>
            <div className="p-5 sm:p-6 bg-slate-50/50 rounded-2xl border border-slate-100/80 italic text-slate-600 text-xs sm:text-sm shadow-2xs font-medium relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-green" />
              "We measure progress not by courses purchased, but by the percentage improvement experienced by local retail merchants using our integrations."
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.96, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="aspect-video w-full rounded-3xl overflow-hidden bg-slate-50 shadow-2xl border border-slate-200/40 group relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
                alt="BlinkTech workspace environment" 
                referrerPolicy="no-referrer"
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-blue-deep p-6 sm:p-7 rounded-2xl text-white shadow-2xl text-left hidden sm:block border border-white/10">
              <span className="text-3xl font-black font-display block text-brand-green leading-none"><AnimatedCounter value="100%" /></span>
              <span className="text-xs uppercase tracking-wider font-semibold mt-1 block">Practical Accountability</span>
            </div>
          </motion.div>
        </section>

        {/* SECTION 2: Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-28 text-left" id="about_mission_vision_section">
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.95, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-10 bg-brand-blue-deep text-white rounded-3xl relative overflow-hidden group border border-white/5 shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            {/* Soft decorative background circles */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full translate-x-12 -translate-y-12 transition-transform duration-700 group-hover:scale-150" />
            <div className="space-y-5 relative z-10">
              <div className="p-3.5 bg-white/10 w-14 h-14 rounded-2xl text-brand-green flex items-center justify-center border border-white/10 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-brand-green/20">
                <Target size={28} />
              </div>
              <h3 className="text-3xl font-extrabold font-display tracking-tight">Our Mission</h3>
              <p className="text-slate-200 text-base leading-relaxed font-medium">
                To bridge the gap between technology, education, and opportunity by delivering innovative solutions that empower growth, develop talent, and inspire transformation.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.95, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="p-8 sm:p-10 bg-slate-900 text-white rounded-3xl relative overflow-hidden group border border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-brand-blue-vibrant/30"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-vibrant/5 rounded-full translate-x-12 -translate-y-12 transition-transform duration-700 group-hover:scale-150" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-green/5 rounded-full -translate-x-12 translate-y-12 transition-transform duration-700 group-hover:scale-150" />
            <div className="space-y-5 relative z-10">
              <div className="p-3.5 bg-white/10 w-14 h-14 rounded-2xl text-brand-vibrant flex items-center justify-center border border-white/10 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-brand-vibrant/20">
                <Rocket size={28} />
              </div>
              <h3 className="text-3xl font-extrabold font-display tracking-tight">Our Vision</h3>
              <p className="text-slate-200 text-base leading-relaxed font-medium">
                To shape a future where technology, education, and innovation create limitless opportunities for businesses and future leaders.
              </p>
            </div>
          </motion.div>
        </section>

        {/* SECTION 3: Core Values */}
        <section className="mb-28 text-left" id="about_values_section">
          <div className="space-y-3 mb-12">
            <span className="inline-flex items-center gap-1.5 text-brand-blue-vibrant font-extrabold text-xs uppercase tracking-widest font-display bg-brand-blue-deep/5 px-3 py-1 rounded-full">
              Ethical Axioms
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-slate-900 tracking-tight pt-2">
              Our Core Philosophical Values
            </h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {CORE_VALUES.map((val) => (
              <motion.div 
                key={val.title}
                variants={cardVariants}
                className="glass-card p-6 sm:p-7 rounded-2xl shadow-sm premium-shadow-hover hover:border-brand-blue-vibrant/20 transition-all duration-300 space-y-4 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-brand-blue-deep via-brand-blue-vibrant to-brand-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="p-3 w-11 h-11 rounded-xl bg-slate-50 text-brand-blue-deep flex items-center justify-center group-hover:bg-brand-blue-deep group-hover:text-white transition-all duration-300 border border-slate-100">
                  <BrandIcon name={val.iconName} size={18} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-brand-blue-deep transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* SECTION 4: Leadership Team */}
        <section className="mb-28 text-left" id="about_team_section">
          <div className="space-y-3 mb-14">
            <span className="inline-flex items-center gap-1.5 text-brand-blue-vibrant font-extrabold text-xs uppercase tracking-widest font-display bg-brand-blue-deep/5 px-3 py-1 rounded-full">
              The Crew
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-slate-900 tracking-tight pt-2">
              Professional Advisors & Lecturers
            </h2>
            <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
              Our mentors and advisory officers are direct practitioners currently conducting system upgrades inside national markets.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {TEAM_MEMBERS.map((m) => (
              <motion.div 
                key={m.name} 
                variants={cardVariants}
                className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-blue-vibrant/20 transition-all duration-300 group"
              >
                <div className="aspect-square bg-slate-50 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img 
                    src={m.imageUrl} 
                    alt={m.name} 
                    referrerPolicy="no-referrer"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />
                </div>
                
                <div className="p-6 space-y-2">
                  <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 leading-snug">
                    {m.name}
                  </h3>
                  <p className="text-brand-blue-vibrant text-xs font-bold font-mono">
                    {m.role}
                  </p>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {m.bio}
                  </p>
                  
                  <div className="pt-4 border-t border-slate-50 flex justify-end">
                    <a href="#" className="text-slate-400 hover:text-brand-blue-deep transition-all p-1.5 rounded-lg hover:bg-slate-50" aria-label={`LinkedIn profile for ${m.name}`}>
                      <Linkedin size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* SECTION 5 & 6: Impact & Future Goals */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left" id="about_impact_future_section">
          
          {/* Current Impact Overview */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-150 space-y-6 shadow-sm"
          >
            <h3 className="text-xl font-bold font-display text-slate-900 border-b border-slate-50 pb-3">Our Social Impact Summary</h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              We leverage an audited percentage model: <AnimatedCounter value="15%" /> of all commercial digital consultancy receipts are deposited directly to our "Youth In Tech Pro-Bono camp" treasury. Through this self-sustaining financial framework, we actively support computer accessibility across municipal regional libraries.
            </p>

            <div className="space-y-4">
              {IMPACT_STATISTICS.slice(0, 3).map((st) => (
                <div key={st.label} className="flex items-center gap-4 p-4 bg-slate-50/50 rounded-2xl border border-slate-100 shadow-2xs group relative overflow-hidden hover:border-brand-green/20 hover:bg-white transition-all duration-300">
                  <div className="absolute top-0 bottom-0 left-0 w-1 bg-brand-blue-vibrant" />
                  <span className="text-2xl sm:text-3xl font-black text-brand-blue-vibrant font-display shrink-0 tracking-tight"><AnimatedCounter value={st.value} /></span>
                  <div>
                    <h4 className="font-bold text-xs text-slate-800">{st.label}</h4>
                    <p className="text-[11px] text-slate-400 font-medium leading-relaxed">{st.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Future Strategic Goals */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 lg:pl-4 pt-1"
          >
            <h3 className="text-xl font-bold font-display text-slate-900 border-b border-slate-55 pb-3">Future Milestones (2026 - 2028 Planning)</h3>
            <p className="text-slate-500 text-xs sm:text-sm">
              We commit to rigorous timeline standards regarding regional updates:
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-green/10 text-brand-dark flex items-center justify-center font-bold text-sm shrink-0 border border-brand-green/20">1</div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-slate-900 leading-tight">Establish Regional Offline Campus centers</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Building physical, solar-powered computational logic access pods with <AnimatedCounter value="200+" /> terminal capabilities.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-blue-deep/5 text-brand-blue-deep flex items-center justify-center font-bold text-sm shrink-0 border border-brand-blue-deep/10">2</div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-slate-900 leading-tight">Deploy Open Source Invoicing & CRM toolkits for micro-SMEs</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Publishing full localization guides so non-technical retail merchants can manage sales on smartphones without monthly fees.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-blue-deep/5 text-brand-blue-deep flex items-center justify-center font-bold text-sm shrink-0 border border-brand-blue-deep/10">3</div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-slate-900 leading-tight">Host National Academic Debate & Speech championships</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Escalating the QUIZ debate modules directly inside state departments to prepare civil developers for clear communication.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </section>

      </div>
    </div>
  );
}

export default AboutPage;
