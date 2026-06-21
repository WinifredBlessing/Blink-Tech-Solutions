import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Laptop, Cpu, Library, Zap, ArrowRight, ArrowUpRight } from 'lucide-react';
import { AnimatedCounter } from './home/AnimatedCounter';

/* ==========================================
   1. BUSINESS SOLUTIONS COMPONENT
   ========================================== */
export function BusinessPage() {
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquiryName, setInquiryName] = useState('');

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
    }, 4500);
  };

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
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <div className="relative overflow-hidden bg-white py-24 md:py-32" id="business_page_container">
      {/* Decorative background glows */}
      <div className="absolute top-1/10 left-1/10 w-96 h-96 bg-brand-blue-deep/5 rounded-full blur-3xl animate-ambient-glow pointer-events-none" />
      <div className="absolute bottom-1/5 right-1/10 w-96 h-96 bg-brand-green/3 rounded-full blur-3xl animate-ambient-glow pointer-events-none" style={{ animationDelay: '-3s' }} />

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-left space-y-5 max-w-3xl border-b border-slate-100 pb-12 mb-20"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold rounded-full bg-brand-blue-deep/5 text-brand-blue-deep border border-brand-blue-deep/10 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-vibrant animate-pulse" />
            <span className="tracking-wide uppercase font-mono">Enterprise Division</span>
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-slate-900 tracking-tight leading-tight pt-2">
            Businesses Powered.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-deep via-brand-blue-vibrant to-brand-green">
              Operations Digitised.
            </span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
            We collaborate with startups and mature enterprises to configure robust cloud frameworks, audit technology stacks, and update team workflows for maximum market velocity.
          </p>
        </motion.div>

        {/* Core Sections Grid */}
        <div className="space-y-24" id="business_page_sections">
          
          {/* SECTION 1: Digital Transformation & Tech Consulting */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 text-left space-y-6"
            >
              <span className="inline-flex items-center gap-1.5 text-brand-green font-extrabold text-xs uppercase tracking-widest bg-brand-green/10 text-brand-dark px-3 py-1 rounded-full">
                Active Execution
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
                Digital Transformation & Technology Consulting
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Transform paper ledgers and fragmented WhatsApp workflows into centralized commercial operations. We consult on, scope, and engineer custom web portals, localized database systems, and secure inventory pipelines.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="glass-card p-6 rounded-2xl space-y-3 shadow-2xs hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-blue-deep to-brand-blue-vibrant opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="p-2.5 w-10 h-10 rounded-xl bg-slate-50 text-brand-blue-vibrant flex items-center justify-center border border-slate-100 group-hover:bg-brand-blue-deep group-hover:text-white transition-all duration-300">
                    <Laptop size={18} />
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 group-hover:text-brand-blue-deep transition-colors">
                    Infrastructure Migration
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-normal">Migrate localized sheets to secure cloud databases, shrinking customer coordination delays by up to <AnimatedCounter value="50%" />.</p>
                </div>
                <div className="glass-card p-6 rounded-2xl space-y-3 shadow-2xs hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-blue-vibrant to-brand-green opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="p-2.5 w-10 h-10 rounded-xl bg-slate-50 text-brand-blue-vibrant flex items-center justify-center border border-slate-100 group-hover:bg-brand-blue-deep group-hover:text-white transition-all duration-300">
                    <Cpu size={18} />
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 group-hover:text-brand-blue-deep transition-colors">
                    Tech Stack Auditing
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-normal">Analyze your software billings to eliminate ghost configurations and protect intellectual boundaries.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.96, x: 30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 bg-slate-50/50 rounded-3xl p-6 sm:p-8 border border-slate-100/80 shadow-md relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue-deep/5 rounded-full blur-xl" />
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6 font-mono">Sample Client Transformation Journey</p>
              <div className="space-y-4 font-mono text-xs text-slate-600 text-left relative z-10">
                <div className="p-4 bg-white rounded-xl border border-slate-100 transition-all hover:border-brand-blue-vibrant/25 hover:shadow-sm">
                  <span className="text-brand-blue-vibrant font-extrabold text-[10px] tracking-wider uppercase block mb-1">Step 1: Diagnostics</span>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-sans">Audit file spreadsheets and calculate staff timing bottlenecks.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-100 transition-all hover:border-brand-blue-vibrant/25 hover:shadow-sm">
                  <span className="text-brand-blue-vibrant font-extrabold text-[10px] tracking-wider uppercase block mb-1">Step 2: Prototyping</span>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-sans">Build clean Figma designs and custom local database boundaries.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-100 transition-all hover:border-brand-blue-vibrant/25 hover:shadow-sm">
                  <span className="text-brand-blue-vibrant font-extrabold text-[10px] tracking-wider uppercase block mb-1">Step 3: Integration</span>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-sans">Deploy securely behind standard Cloud run protocols with full documentation.</p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* SECTION 2: Business Advisory & Corporate Development */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-12 border-t border-slate-100 text-left">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="order-2 lg:order-1 bg-white p-7 sm:p-10 rounded-3xl border border-slate-150 shadow-md space-y-6"
            >
              <h3 className="font-display font-extrabold text-lg text-slate-900 border-b border-slate-50 pb-3">Commercial Advisory Focus Area</h3>
              <ul className="space-y-4 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-brand-green shrink-0 mt-0.5" />
                  <span className="leading-relaxed"><strong className="text-slate-900 font-semibold">Unit Economics Formulations:</strong> Accurately calculate acquisition costs (CAC) against customer lifetime valuation metrics.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-brand-green shrink-0 mt-0.5" />
                  <span className="leading-relaxed"><strong className="text-slate-900 font-semibold">Global Compliance Frameworks:</strong> Configure payment merchant systems appropriate for regional and global trade structures.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-brand-green shrink-0 mt-0.5" />
                  <span className="leading-relaxed"><strong className="text-slate-900 font-semibold">Strategic Market Entry:</strong> Formulate target campaigns supported by clear SEO and algorithmic keyword indices.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="order-1 lg:order-2 space-y-6 lg:pl-6"
            >
              <span className="inline-flex items-center gap-1.5 text-brand-blue-vibrant font-extrabold text-xs uppercase tracking-widest bg-brand-blue-deep/5 px-3 py-1 rounded-full">
                Asset Optimization
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
                Business Advisory & Growth
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Many businesses fail not because their products are poor, but because their transactional economics are uncalibrated. We counsel entrepreneurs on strategic modeling, and structure investor-ready pitch blueprints supported by physical numbers.
              </p>
            </motion.div>
          </section>

          {/* SECTION 3: Workforce Development & Corporate Training */}
          <section className="py-12 border-t border-slate-100 text-left grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 space-y-6"
            >
              <span className="inline-flex items-center gap-1.5 text-brand-green font-extrabold text-xs uppercase tracking-widest bg-brand-green/10 text-brand-dark px-3 py-1 rounded-full">
                Enterprise Fitness
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
                Workforce Development & Corporate Training
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                The most expensive operational leak inside standard companies is human latency—staff taking hours on activities that simple automation scripts can resolve inside seconds. We design corporate retreat workshops to update your team’s digital tools capabilities, spreadsheets fluency, and communication efficiency.
              </p>
              
              <div className="flex gap-8 pt-2">
                <div className="space-y-1">
                  <h4 className="text-4xl font-black font-display text-brand-blue-deep tracking-tight"><AnimatedCounter value="40%" /></h4>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest font-mono">Time Salvaged</p>
                </div>
                <div className="border-l border-slate-250 pl-8 space-y-1">
                  <h4 className="text-4xl font-black font-display text-brand-blue-deep tracking-tight"><AnimatedCounter value="100%" /></h4>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest font-mono">Workforce Aligned</p>
                </div>
              </div>
            </motion.div>

            {/* Simulated Consultation Request Booking Form */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-xl self-start relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue-deep/5 rounded-full blur-2xl pointer-events-none" />
              <h3 className="font-display font-extrabold text-xl text-slate-900 mb-2 relative z-10">Book Corporate Diagnostic</h3>
              <p className="text-xs text-slate-500 mb-8 leading-relaxed relative z-10">Receive an initial technical checklist and diagnostic overview of your company profile from our systems architects.</p>

              {inquirySubmitted ? (
                <div className="bg-brand-green/10 text-brand-dark p-6 sm:p-8 rounded-2xl text-center space-y-3 border border-brand-green/20 relative z-10">
                  <Zap className="mx-auto text-brand-green animate-bounce" size={28} />
                  <h4 className="font-black text-sm text-slate-900">Diagnostic Scheduled!</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">Thanks {inquiryName}, our lead architect is already reviewing your site profile and will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-5 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wide">Executive Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Samuel Cole" 
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        className="w-full border border-slate-200 bg-white rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-brand-blue-deep focus:ring-4 focus:ring-brand-blue-deep/5 text-slate-900 font-medium transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wide">Corporate Email</label>
                      <input 
                        type="email" 
                        required
                        placeholder="e.g. sam@company.org" 
                        className="w-full border border-slate-200 bg-white rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-brand-blue-deep focus:ring-4 focus:ring-brand-blue-deep/5 text-slate-900 font-medium transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wide">Staff Count</label>
                      <select className="w-full border border-slate-200 bg-white rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-brand-blue-deep focus:ring-4 focus:ring-brand-blue-deep/5 text-slate-900 font-medium transition-all cursor-pointer">
                        <option>1 - 10 employees</option>
                        <option>11 - 50 employees</option>
                        <option>51 - 200 employees</option>
                        <option>200+ employees</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wide">Operational Focus</label>
                      <select className="w-full border border-slate-200 bg-white rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-brand-blue-deep focus:ring-4 focus:ring-brand-blue-deep/5 text-slate-900 font-medium transition-all cursor-pointer">
                        <option>Cloud Infrastructure Migration</option>
                        <option>Workforce Digital training</option>
                        <option>Custom Web portal development</option>
                        <option>Business advisory scaling</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-blue-deep hover:bg-brand-blue-vibrant text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-md hover:shadow-lg mt-2 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    Request Diagnostic Consultation
                  </button>
                </form>
              )}
            </motion.div>

          </section>

        </div>

      </div>
    </div>
  );
}

/* ==========================================
   2. EDUCATION & TRAINING COMPONENT
   ========================================== */
export function EducationPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <div className="relative overflow-hidden bg-white py-24 md:py-32" id="education_page_container">
      {/* Decorative background glows */}
      <div className="absolute top-1/10 right-1/10 w-96 h-96 bg-brand-blue-deep/5 rounded-full blur-3xl animate-ambient-glow pointer-events-none" />
      <div className="absolute bottom-1/5 left-1/10 w-96 h-96 bg-brand-green/3 rounded-full blur-3xl animate-ambient-glow pointer-events-none" style={{ animationDelay: '-5s' }} />

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-left space-y-5 max-w-3xl border-b border-slate-100 pb-12 mb-20"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold rounded-full bg-brand-blue-deep/5 text-brand-blue-deep border border-brand-blue-deep/10 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
            <span className="tracking-wide uppercase font-mono">Academic Programs</span>
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-slate-900 tracking-tight leading-tight pt-2">
            Skills Built.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-deep via-brand-blue-vibrant to-brand-green">
              Careers Accelerated.
            </span>
          </h1>
          <p className="text-slate-650 text-sm sm:text-base md:text-lg leading-relaxed">
            Delivering bespoke educational curricula, local computational labs setup, and career readiness structures designed to transform raw desire into elite industrial competencies.
          </p>
        </motion.div>

        {/* Content sections grouped logically */}
        <div className="space-y-24" id="education_page_sections">
          
          {/* SECTION 1: Training Overview */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-square w-full rounded-3xl overflow-hidden bg-slate-50 border border-slate-200/40 shadow-2xl relative group">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop" 
                  alt="Students building tech skills" 
                  referrerPolicy="no-referrer"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 text-left space-y-6"
            >
              <span className="inline-flex items-center gap-1.5 text-brand-green font-extrabold text-xs uppercase tracking-widest bg-brand-green/10 text-brand-dark px-3 py-1 rounded-full">
                Our Educational Methods
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
                Education & Training Framework Overview
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Passive memory recall prevents true technical growth. Our training philosophy is explicitly oriented around <strong className="text-slate-900 font-semibold">"Action-First Milestones."</strong> Instead of simply reviewing documentation, our students construct operational files, configure local web layouts, present debate parameters under timed sessions, and write functional database code.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex gap-3 items-start">
                  <span className="w-6 h-6 rounded-lg bg-brand-green/20 text-brand-dark flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-brand-green/10">✓</span>
                  <p className="text-xs sm:text-sm text-slate-650 leading-relaxed"><strong className="text-slate-900 font-semibold">Hands-on Labs:</strong> 100% of our classes occur inside practical terminal sandboxes with real code assets.</p>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="w-6 h-6 rounded-lg bg-brand-green/20 text-brand-dark flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-brand-green/10">✓</span>
                  <p className="text-xs sm:text-sm text-slate-650 leading-relaxed"><strong className="text-slate-900 font-semibold">Expert Mentorship:</strong> Direct line channels linking graduates to practitioners executing active systems development.</p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* SECTION 2: Digital Skills and Technology Education */}
          <section className="py-12 border-t border-slate-100 grid grid-cols-1 lg:grid-cols-2 gap-16 text-left">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <span className="inline-flex items-center gap-1.5 text-brand-blue-vibrant font-extrabold text-xs uppercase tracking-widest bg-brand-blue-deep/5 px-3 py-1 rounded-full inline-block">
                Technical Competencies
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
                Digital Skills & Technology Education
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Equipping school children, teachers, and university leavers with relevant, modern fluencies. We design our technological tracks to prepare operators for the challenges of next-generation workspaces.
              </p>

              {/* Grid highlighting skills */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2"
              >
                <motion.div variants={cardVariants} className="glass-card p-5 rounded-2xl shadow-2xs space-y-2 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-blue-vibrant opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="font-extrabold text-[10px] text-brand-blue-vibrant font-mono tracking-wider">01 / DIGITAL FOUNDATIONS</p>
                  <p className="text-slate-500 text-xs leading-relaxed">Spreadsheets operations, data security routines, and client communication workflows.</p>
                </motion.div>
                <motion.div variants={cardVariants} className="glass-card p-5 rounded-2xl shadow-2xs space-y-2 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-blue-vibrant opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="font-extrabold text-[10px] text-brand-blue-vibrant font-mono tracking-wider">02 / WEB INFRASTRUCTURE</p>
                  <p className="text-slate-550 text-xs leading-relaxed">Figma design frameworks, Tailwind configurations, React dynamics, and Github pipelines.</p>
                </motion.div>
                <motion.div variants={cardVariants} className="glass-card p-5 rounded-2xl shadow-2xs space-y-2 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-blue-vibrant opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="font-extrabold text-[10px] text-brand-blue-vibrant font-mono tracking-wider">03 / COMPUTATIONAL SYSTEMS</p>
                  <p className="text-slate-550 text-xs leading-relaxed">Algorithm planning, logic structures, and structured code formulation.</p>
                </motion.div>
                <motion.div variants={cardVariants} className="glass-card p-5 rounded-2xl shadow-2xs space-y-2 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-blue-vibrant opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="font-extrabold text-[10px] text-brand-blue-vibrant font-mono tracking-wider">04 / CREATIVE PROMPTINGS</p>
                  <p className="text-slate-550 text-xs leading-relaxed">Leveraging generative intelligence tools safely to accelerate business calculations.</p>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-white flex flex-col justify-between border border-slate-800 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-8 -translate-y-8 blur-2xs" />
              <div className="space-y-5 relative">
                <div className="p-3 w-12 h-12 rounded-2xl bg-white/10 text-brand-green flex items-center justify-center shrink-0 border border-white/10 shadow-sm">
                  <Library size={24} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display tracking-tight text-white">Academic Curriculum Support</h3>
                <p className="text-slate-300 text-sm leading-relaxed font-normal">
                  We partner directly with school boards and ministry officials to configure computational science curriculums. We train administrative teachers, help construct physical computer labs within regional resource constraints, and coordinate annual competitive tournament programs inside national districts.
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-white/10 flex flex-wrap gap-5 text-xs font-mono text-slate-450 font-semibold relative">
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-brand-green" /> Deployed in <AnimatedCounter value="30+" /> schools</span>
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-brand-green" /> Teacher-Certified Syllabus</span>
              </div>
            </motion.div>
          </section>

          {/* SECTION 3: Professional Development & Career Readiness */}
          <section className="py-12 border-t border-slate-100 text-left grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-md space-y-5 self-start"
            >
              <h4 className="font-extrabold font-display text-base text-slate-900 pb-2 border-b border-slate-50">Career Acceleration Checklist:</h4>
              <p className="text-slate-500 text-xs leading-relaxed">To transition technical builders into executive managers, we train heavily in communication frameworks:</p>
              <ul className="space-y-3 pt-2 text-xs text-slate-705">
                <li className="flex items-center gap-3 font-semibold text-slate-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0" /> Timed presentation pitching
                </li>
                <li className="flex items-center gap-3 font-semibold text-slate-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0" /> CV diagnostics & brand portfolios
                </li>
                <li className="flex items-center gap-3 font-semibold text-slate-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0" /> Technical problem solving interviews
                </li>
                <li className="flex items-center gap-3 font-semibold text-slate-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0" /> Professional corporate writing
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="lg:col-span-7 space-y-6"
            >
              <span className="inline-flex items-center gap-1.5 text-brand-blue-vibrant font-extrabold text-xs uppercase tracking-widest bg-brand-blue-deep/5 px-3 py-1 rounded-full inline-block">
                Human Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
                Professional Development & Career Readiness
              </h2>
              <div className="text-slate-600 text-sm leading-relaxed space-y-4">
                <p>
                  Knowing how to write code blocks is useless if an individual cannot communicate their system’s capabilities or project economic developments to a corporate division director. At BlinkTech, we enforce verbal eloquence. Our academic cohorts build presentation habits that make them standout candidates for global remote work vacancies.
                </p>
                <p>
                  Through our integrated mock recruitment boards, graduates receive direct feedback on their vocal speed, argument construction, and posture, guaranteeing they command corporate rooms.
                </p>
              </div>
            </motion.div>
          </section>

        </div>

      </div>
    </div>
  );
}
