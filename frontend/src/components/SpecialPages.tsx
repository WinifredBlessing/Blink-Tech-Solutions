import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from '../types';
import { AnimatedCounter } from './home/AnimatedCounter';
import { FeaturedProgrammesSection } from './home/FeaturedProgrammesSection';
import { GalleryPreviewSection } from './home/GalleryPreviewSection';
import { BlogPreviewSection } from './home/BlogPreviewSection';
import { 
  ACADEMY_COURSES, 
  GALLERY_ITEMS, 
  BLOG_POSTS, 
  CONTRACT_FAQS 
} from '../data';
import { BrandIcon } from './BrandIcon';
import { 
  MessageSquare, 
  CheckCircle, 
  ChevronDown, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Award, 
  BookOpen, 
  Users2, 
  Zap,
  ArrowRight,
  Filter,
  Calendar,
  User,
  Clock,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

// Common Framer Motion transition definitions for premium experience
const customEase = [0.16, 1, 0.3, 1];

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: customEase },
  },
};

/* ==========================================
   1. DEBATE & QUIZ PROGRAMMES PAGE
   ========================================== */
export function DebatePage() {
  const [interestSubmitted, setInterestSubmitted] = useState(false);
  const [inquiryName, setInquiryName] = useState('');

  const handleInterestRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setInterestSubmitted(true);
    setTimeout(() => {
      setInterestSubmitted(false);
    }, 4500);
  };

  return (
    <div className="relative overflow-hidden mesh-bg py-24 md:py-32 text-left" id="debate_page_container">
      {/* Decorative background glows */}
      <div className="absolute top-1/12 left-1/12 w-[500px] h-[500px] bg-brand-blue-deep/5 rounded-full blur-3xl animate-ambient-glow pointer-events-none" />
      <div className="absolute bottom-1/10 right-1/12 w-[400px] h-[400px] bg-brand-green/3 rounded-full blur-3xl animate-ambient-glow pointer-events-none" style={{ animationDelay: '-4s' }} />

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
        
        {/* Header section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: customEase }}
          className="text-left space-y-5 max-w-3xl border-b border-slate-100 pb-12 mb-20"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold rounded-full bg-brand-blue-deep/5 text-brand-blue-deep border border-brand-blue-deep/10 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-vibrant animate-pulse" />
            <span className="tracking-wide uppercase font-mono">Elite Logical Training</span>
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-slate-900 tracking-tight leading-none pt-2">
            QUIZ Masterclass &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-deep via-brand-blue-vibrant to-brand-green">
              Debate Programmes
            </span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            QUIZ (Questions, Understanding, Insight, Coherence) is our premier training framework engineered to sharpen critical deconstruction of arguments and oral speech speed inside schools and corporate offices.
          </p>
        </motion.div>

        {/* Sections Mapped */}
        <div className="space-y-24">
          
          {/* Programme Overview & Objectives */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: customEase }}
              className="lg:col-span-7 space-y-6"
            >
              <span className="inline-flex items-center gap-1.5 text-brand-green font-extrabold text-xs uppercase tracking-widest bg-brand-green/10 text-brand-dark px-3 py-1 rounded-full">
                The Logic Stack
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
                Objectives & Framework Outline
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Modern academic and corporate models teach people to absorb notes, but they rarely teach how to structure a defensive argument under intense verbal fire, or isolate logical fallacies inside customer negotiations. 
              </p>
              <p className="text-slate-850 text-sm sm:text-base leading-relaxed font-bold">
                The core target parameters inside QUIZ:
              </p>

              <div className="space-y-4 font-display text-sm">
                <div className="flex gap-4 p-5 bg-slate-50/50 hover:bg-white rounded-2xl border border-slate-100 shadow-2xs hover:shadow-md transition-all duration-300 group">
                  <span className="w-10 h-10 rounded-xl bg-brand-blue-deep/5 text-brand-blue-vibrant text-sm font-black flex items-center justify-center shrink-0 mt-0.5 border border-brand-blue-deep/10 font-mono transition-colors group-hover:bg-brand-blue-deep group-hover:text-white">Q</span>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm">Questions</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans mt-0.5">Learn to ask incisive diagnostics that deconstruct a rival’s entire premise instantly.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-5 bg-slate-50/50 hover:bg-white rounded-2xl border border-slate-100 shadow-2xs hover:shadow-md transition-all duration-300 group">
                  <span className="w-10 h-10 rounded-xl bg-brand-blue-deep/5 text-brand-blue-vibrant text-sm font-black flex items-center justify-center shrink-0 mt-0.5 border border-brand-blue-deep/10 font-mono transition-colors group-hover:bg-brand-blue-deep group-hover:text-white">U</span>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm">Understanding</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans mt-0.5">Read intricate economic statistics and capture regional policy realities fast.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-5 bg-slate-50/50 hover:bg-white rounded-2xl border border-slate-100 shadow-2xs hover:shadow-md transition-all duration-300 group">
                  <span className="w-10 h-10 rounded-xl bg-brand-blue-deep/5 text-brand-blue-vibrant text-sm font-black flex items-center justify-center shrink-0 mt-0.5 border border-brand-blue-deep/10 font-mono transition-colors group-hover:bg-brand-blue-deep group-hover:text-white">I</span>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm">Insight</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans mt-0.5">Synthesize raw text files on global subjects into localized strategic resolutions.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-5 bg-slate-50/50 hover:bg-white rounded-2xl border border-slate-100 shadow-2xs hover:shadow-md transition-all duration-300 group">
                  <span className="w-10 h-10 rounded-xl bg-brand-blue-deep/5 text-brand-blue-vibrant text-sm font-black flex items-center justify-center shrink-0 mt-0.5 border border-brand-blue-deep/10 font-mono transition-colors group-hover:bg-brand-blue-deep group-hover:text-white">C</span>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm">Coherence</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans mt-0.5">Speak clearly and with perfect posture under strict timelines.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: customEase }}
              className="lg:col-span-5 bg-slate-50/50 border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-inner space-y-6"
            >
              <h3 className="font-display font-extrabold text-slate-900 text-base border-b border-slate-150 pb-2">Key Benefits For Audiences</h3>
              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="p-4 bg-white rounded-2xl border border-slate-100 flex items-start gap-3.5 transition-all hover:border-brand-blue-vibrant/25 hover:shadow-md shadow-2xs">
                  <CheckCircle className="text-brand-green shrink-0 mt-0.5" size={18} />
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs">High School Teams</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">Qualify for elite international eloquence cups and build rigorous essay metrics.</p>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-slate-100 flex items-start gap-3.5 transition-all hover:border-brand-blue-vibrant/25 hover:shadow-md shadow-2xs">
                  <CheckCircle className="text-brand-green shrink-0 mt-0.5" size={18} />
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs">University Graduates</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">Master job assessment boards, mock presentation loops, and pitch interviews.</p>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-slate-100 flex items-start gap-3.5 transition-all hover:border-brand-blue-vibrant/25 hover:shadow-md shadow-2xs">
                  <CheckCircle className="text-brand-green shrink-0 mt-0.5" size={18} />
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs">Corporate Associates</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">Excel in complex contract negotiations and eliminate communication latency.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Registration Info & Interactive Signup Form */}
          <section className="py-12 border-t border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: customEase }}
              className="lg:col-span-6 space-y-6"
            >
              <span className="inline-flex items-center gap-1.5 text-brand-blue-vibrant font-extrabold text-xs uppercase tracking-widest bg-brand-blue-deep/5 px-3 py-1 rounded-full inline-block">
                Availability
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
                Registration & Consultation Details
              </h2>
              <p className="text-slate-655 text-sm sm:text-base leading-relaxed">
                QUIZ cohorts run seasonally for schools and private companies. We customize the debate subjects to suit your business vertical (real estate compliance, tech software ethics, civil service regulations).
              </p>
              
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-slate-600 text-xs sm:text-sm leading-relaxed space-y-3.5 shadow-2xs">
                <p className="flex items-center gap-2.5"><strong className="text-slate-800 font-semibold">🕒 Length:</strong> <span><AnimatedCounter value="6" /> weeks (physical workshops or hybrid video channels)</span></p>
                <p className="flex items-center gap-2.5"><strong className="text-slate-800 font-semibold">👥 Size limit:</strong> <span>Maximum <AnimatedCounter value="25" /> delegates per group for optimized vocal coaching feedback.</span></p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: customEase }}
              className="lg:col-span-6 bg-slate-50/50 border border-slate-100 shadow-xl rounded-3xl p-6 sm:p-10 self-start relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue-deep/5 rounded-full blur-2xl pointer-events-none" />
              <h3 className="font-display font-extrabold text-slate-900 text-lg mb-1 relative z-10">Inquire for QUIZ Cohorts</h3>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed relative z-10">Register your institutional scope below to download program structures.</p>

              {interestSubmitted ? (
                <div className="bg-brand-green/10 text-brand-dark p-6 rounded-2xl text-center space-y-3 border border-brand-green/20 relative z-10">
                  <Zap className="mx-auto text-brand-green animate-bounce" size={28} />
                  <h4 className="font-black text-sm text-slate-900">Request Logged!</h4>
                  <p className="text-xs text-slate-605 leading-relaxed">The standard syllabus curriculum and download link have been dispatched to your email profile successfully.</p>
                </div>
              ) : (
                <form onSubmit={handleInterestRegister} className="space-y-4 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-bold uppercase text-slate-400">Representative Name</label>
                      <input 
                        type="text" 
                        required
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        placeholder="e.g. Isaac Taylor" 
                        className="bg-white border text-xs border-slate-200 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-brand-blue-deep focus:ring-4 focus:ring-brand-blue-deep/5 text-slate-900 font-medium transition-all" 
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-bold uppercase text-slate-400">Official Email</label>
                      <input 
                        type="email" 
                        required
                        placeholder="e.g. isaac@school.edu" 
                        className="bg-white border text-xs border-slate-200 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-brand-blue-deep focus:ring-4 focus:ring-brand-blue-deep/5 text-slate-900 font-medium transition-all" 
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-bold uppercase text-slate-400">Institutional Vertical</label>
                    <select className="bg-white border text-xs border-slate-200 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-brand-blue-deep focus:ring-4 focus:ring-brand-blue-deep/5 text-slate-900 font-medium transition-all cursor-pointer">
                      <option>High School debate council</option>
                      <option>Corporate communication desk</option>
                      <option>Individual graduate study</option>
                    </select>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-brand-blue-deep hover:bg-brand-blue-vibrant text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl transition-all cursor-pointer shadow-md hover:shadow-lg mt-2 font-display hover:scale-[1.01] active:scale-[0.99]"
                  >
                    Download QUIZ Syllabus Brochure
                  </button>
                </form>
              )}
            </motion.div>
          </section>

          {/* Testimonial callout */}
          <motion.section 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: customEase }}
            className="p-8 sm:p-12 rounded-3xl text-left space-y-6 relative overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl"
          >
            <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-tr from-brand-blue-deep/30 to-brand-green/5 pointer-events-none" />
            <div className="absolute top-0 right-0 w-44 h-44 bg-white/5 rounded-full translate-x-12 -translate-y-12 blur-xs" />
            <MessageSquare className="text-brand-green relative z-10" size={32} />
            <blockquote className="italic font-display text-base sm:text-lg md:text-xl max-w-4xl text-slate-105 leading-relaxed font-medium relative z-10">
              "Integrating the QUIZ debating module inside our sales division resulted in immediate improvements. Our account leads now present ideas with twice the confidence and address customer criticisms without losing posture."
            </blockquote>
            <p className="text-xs uppercase tracking-widest text-brand-green font-extrabold font-mono relative z-10">
              - Deborah Mensah, Head of Human Capital at West-Logistics Corporation
            </p>
          </motion.section>

        </div>
      </div>
    </div>
  );
}

/* ==========================================
   2. BLINKTECH ACADEMY PAGE
   ========================================== */
export function AcademyPage({ setCurrentPage }: { setCurrentPage: (page: PageId) => void }) {
  const [modalCourse, setModalCourse] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setModalCourse(null);
    }, 4000);
  };

  return (
    <div className="relative overflow-hidden mesh-bg py-24 md:py-32 text-left" id="academy_page_container">
      {/* Background element */}
      <div className="absolute top-1/10 right-1/12 w-[500px] h-[500px] bg-brand-blue-deep/5 rounded-full blur-3xl animate-ambient-glow pointer-events-none" />
      <div className="absolute bottom-1/12 left-1/12 w-[400px] h-[400px] bg-brand-green/3 rounded-full blur-3xl animate-ambient-glow pointer-events-none" style={{ animationDelay: '-6s' }} />

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
        
        {/* Headline & Subheading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: customEase }}
          className="text-left space-y-5 max-w-3xl border-b border-slate-100 pb-12 mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold rounded-full bg-brand-blue-deep/5 text-brand-blue-deep border border-brand-blue-deep/10 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
            <span className="tracking-wide uppercase font-mono">Self-Regulated Careers Lab</span>
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-slate-900 tracking-tight leading-none pt-2">
            Learn. Grow.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-deep via-brand-blue-vibrant to-brand-green">
              Lead.
            </span>
          </h1>
          <p className="text-slate-655 text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Access practical technology and professional development courses designed for students, graduates, entrepreneurs, and professionals looking to command modern digital operations.
          </p>
        </motion.div>

        {/* Course Categories display */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-8">
          <span className="text-slate-900 font-extrabold text-xs uppercase tracking-widest font-mono">
            Core Course Syllabus (Coming Soon)
          </span>
          <span className="text-[10px] font-bold text-brand-blue-vibrant bg-brand-blue-deep/5 px-2.5 py-0.5 rounded-full font-mono uppercase">
            Phase <AnimatedCounter value="1" />
          </span>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
          id="academy_courses_page_grid"
        >
          {ACADEMY_COURSES.map((course) => (
            <motion.div 
              key={course.title}
              variants={cardVariants}
              className="bg-white border border-slate-100 hover:border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 h-1 w-16 bg-gradient-to-r from-brand-blue-deep to-brand-green rounded-tl-2xl rounded-br-2xl transition-all duration-300 group-hover:w-full" />
              <div className="space-y-4 pt-2">
                <span className="text-[10px] font-extrabold text-brand-green uppercase tracking-widest font-mono bg-brand-green/10 text-brand-dark px-2.5 py-1 rounded-full">{course.category}</span>
                <h3 className="font-display font-black text-slate-900 text-lg leading-tight pt-1">{course.title}</h3>
                <p className="text-slate-400 text-xs italic font-normal">"{course.tagline}"</p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{course.description}</p>
                
                <div className="flex justify-between items-center text-xs text-slate-400 pt-2 font-semibold">
                  <span className="flex items-center gap-1.5"><Clock size={12} /> {course.duration}</span>
                  <span className="flex items-center gap-1.5">&#9650; {course.level}</span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-50/85 flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider font-mono">Capacity limited</span>
                <button
                  onClick={() => setModalCourse(course.title)}
                  className="bg-brand-blue-deep text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-brand-blue-vibrant select-none cursor-pointer transition-colors shadow-2xs hover:shadow-xs active:scale-95 text-center inline-flex items-center gap-1.5"
                >
                  Join Waiting List <ChevronRight size={12} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* SECTION Learning Features, Certification, etc. */}
        <div className="mt-24 space-y-16" id="academy_features_sections">
          
          <motion.section 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-16 border-t border-slate-100 text-left"
          >
            <motion.div variants={cardVariants} className="space-y-4 p-6 bg-white rounded-2xl border border-slate-100 transition-all hover:shadow-lg group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-blue-vibrant opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-3 w-12 h-12 rounded-xl bg-slate-50 text-brand-blue-vibrant flex items-center justify-center border border-slate-100 group-hover:bg-brand-blue-deep group-hover:text-white transition-all duration-300">
                <Award size={20} />
              </div>
              <h4 className="font-display font-extrabold text-slate-900 group-hover:text-brand-blue-deep transition-colors">Professional Certification</h4>
              <p className="text-slate-550 text-xs sm:text-sm leading-relaxed text-left">
                Complete all design and code deployment assignments inside your terminal profile to receive verified credential bookmarks to embed inside your personal resume sheets.
              </p>
            </motion.div>

            <motion.div variants={cardVariants} className="space-y-4 p-6 bg-white rounded-2xl border border-slate-100 transition-all hover:shadow-lg group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-blue-vibrant opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-3 w-12 h-12 rounded-xl bg-slate-50 text-brand-blue-vibrant flex items-center justify-center border border-slate-100 group-hover:bg-brand-blue-deep group-hover:text-white transition-all duration-300">
                <BookOpen size={20} />
              </div>
              <h4 className="font-display font-extrabold text-slate-900 group-hover:text-brand-blue-deep transition-colors">Direct School Access</h4>
              <p className="text-slate-550 text-xs sm:text-sm leading-relaxed text-left">
                Custom dashboard frameworks linked directly to primary school registers so academic administrators can track and grade pupil homework files automatically.
              </p>
            </motion.div>

            <motion.div variants={cardVariants} className="space-y-4 p-6 bg-white rounded-2xl border border-slate-100 transition-all hover:shadow-lg group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-blue-vibrant opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-3 w-12 h-12 rounded-xl bg-slate-50 text-brand-blue-vibrant flex items-center justify-center border border-slate-100 group-hover:bg-brand-blue-deep group-hover:text-white transition-all duration-300">
                <Users2 size={20} />
              </div>
              <h4 className="font-display font-extrabold text-slate-900 group-hover:text-brand-blue-deep transition-colors">Corporate Training Hub</h4>
              <p className="text-slate-555 text-xs sm:text-sm leading-relaxed text-left">
                Managers receive specialized weekly feedback metrics indicating which business staff are excelling in prompt calculations, and which require structural tutoring.
              </p>
            </motion.div>
          </motion.section>

          {/* Future Vision section */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: customEase }}
            className="p-10 bg-slate-900 text-white rounded-3xl relative overflow-hidden border border-slate-800 shadow-2xl" 
            id="academy_future_vision"
          >
            <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-tr from-brand-blue-deep/30 to-brand-green/5 pointer-events-none" />
            <div className="absolute top-0 right-0 w-44 h-44 bg-white/5 rounded-full translate-x-12 -translate-y-12 blur-xs" />
            <div className="relative z-10 max-w-2xl space-y-4 text-left">
              <span className="text-brand-green font-mono text-xs uppercase tracking-widest font-extrabold bg-white/5 border border-white/5 px-2.5 py-0.5 rounded-full">Future Vision</span>
              <h3 className="text-2xl sm:text-3xl font-black font-display tracking-tight leading-tight pt-1">A Borderless, Accredited Digital University</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                By 2028, BlinkTech Academy will become a key training authority. We plan to integrate physical micro-testing hubs directly within standard community centers, enabling students to secure global-grade technological validation credentials on a tight budget.
              </p>
            </div>
          </motion.section>

        </div>

        {/* Featured Programmes Section Embedded */}
        <div className="mt-20">
          <FeaturedProgrammesSection setCurrentPage={setCurrentPage} />
        </div>

        {/* Academy Registration interest modal backdrop */}
        <AnimatePresence>
          {modalCourse && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
            >
              <motion.div 
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ duration: 0.4, ease: customEase }}
                className="bg-white rounded-3xl p-8 max-w-md w-full relative space-y-6 text-left shadow-2xl border border-slate-100"
              >
                <button 
                  onClick={() => setModalCourse(null)} 
                  className="absolute top-5 right-5 text-slate-450 hover:text-slate-800 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center transition-colors border border-slate-105 cursor-pointer"
                >
                  ✕
                </button>
                <div className="p-3 w-12 h-12 bg-brand-blue-deep/5 text-brand-blue-vibrant rounded-2xl flex items-center justify-center border border-brand-blue-deep/10">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-black font-display text-slate-900">Waitlist Sign-up</h3>
                  <p className="text-slate-500 text-xs mt-1">Syllabus category: <strong className="text-brand-blue-vibrant font-bold">{modalCourse}</strong></p>
                </div>

                {success ? (
                  <div className="bg-brand-green/10 text-brand-dark p-6 sm:p-8 rounded-2xl text-center space-y-3 border border-brand-green/20">
                    <CheckCircle className="mx-auto text-brand-green animate-bounce" size={32} />
                    <h4 className="font-extrabold text-sm text-slate-900">Registered Securely</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">We will notify your profile once deployment launches. Early syllabus files have been queued.</p>
                  </div>
                ) : (
                  <form onSubmit={handleApply} className="space-y-4">
                    <p className="text-xs text-slate-500 leading-relaxed">Submit your work parameters, and you will receive early syllabus files when deployment launches.</p>
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-bold uppercase text-slate-400">Your Full Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Adebayo C." 
                        className="w-full text-xs border border-slate-200 focus:ring-4 focus:ring-brand-blue-deep/5 focus:border-brand-blue-deep bg-white rounded-xl px-4 py-3 outline-none text-slate-900 font-medium transition-all" 
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-bold uppercase text-slate-400">Corporate or Personal Email</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="e.g. ade@gmail.com" 
                        className="w-full text-xs border border-slate-200 focus:ring-4 focus:ring-brand-blue-deep/5 focus:border-brand-blue-deep bg-white rounded-xl px-4 py-3 outline-none text-slate-900 font-medium transition-all" 
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="w-full py-4 text-xs font-bold uppercase tracking-wider bg-brand-blue-deep hover:bg-brand-blue-vibrant text-white rounded-xl transition-all cursor-pointer shadow-md mt-2 font-display"
                    >
                      Activate Waitlist Receipt
                    </button>
                  </form>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

/* ==========================================
   3. PROJECTS & GALLERY PAGE
   ========================================== */
export function ProjectsPage({ setCurrentPage }: { setCurrentPage: (page: PageId) => void }) {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<'all' | 'event' | 'workshop' | 'project' | 'community'>('all');

  const filteredProjectsMatrix = activeCategoryFilter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter((item) => item.category === activeCategoryFilter);

  return (
    <div className="relative overflow-hidden mesh-bg py-24 md:py-32 text-left" id="projects_page_container">
      {/* Decorative background glows */}
      <div className="absolute top-1/10 left-1/10 w-96 h-96 bg-brand-blue-deep/5 rounded-full blur-3xl animate-ambient-glow pointer-events-none" />
      <div className="absolute bottom-1/10 right-1/10 w-96 h-96 bg-brand-green/3 rounded-full blur-3xl animate-ambient-glow pointer-events-none" style={{ animationDelay: '-3s' }} />

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: customEase }}
          className="text-left space-y-5 max-w-3xl border-b border-slate-100 pb-12 mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold rounded-full bg-brand-blue-deep/5 text-brand-blue-deep border border-brand-blue-deep/10 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-vibrant animate-pulse" />
            <span className="tracking-wide uppercase font-mono">Our Historical Achievements</span>
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-slate-900 tracking-tight leading-none pt-2">
            Projects &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-deep via-brand-blue-vibrant to-brand-green">
              Engagement Gallery
            </span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            Witness our team inside classroom settings, corporate boardrooms, and national academic debate championships preparing youth models and upscaling functional SMEs.
          </p>
        </motion.div>

        {/* Gallery Preview Embedded */}
        <div className="mb-20">
          <GalleryPreviewSection setCurrentPage={setCurrentPage} />
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap items-center gap-2 mb-10 overflow-x-auto pb-2" id="projects_filter_toolbar">
          <span className="text-slate-400 mr-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider font-mono"><Filter size={14} /> Filter:</span>
          {(['all', 'event', 'workshop', 'project', 'community'] as const).map(f => (
            <button
              key={f}
              onClick={() => setActiveCategoryFilter(f)}
              className={`px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider rounded-xl border transition-all cursor-pointer ${
                activeCategoryFilter === f 
                  ? 'bg-brand-blue-deep text-white border-brand-blue-deep shadow-md' 
                  : 'bg-slate-50 text-slate-500 border-slate-100 hover:border-slate-300 hover:bg-white hover:text-slate-800'
              }`}
            >
              {f} Catalog
            </button>
          ))}
        </div>

        {/* Main Grid mapping items */}
        <motion.div 
          layout
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
          id="projects_master_grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjectsMatrix.map((proj) => (
              <motion.div 
                layout
                key={proj.title} 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: customEase }}
                className="bg-white border border-slate-100 hover:border-slate-200/80 transition-all duration-300 rounded-2xl overflow-hidden shadow-2xs hover:shadow-lg flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-video relative overflow-hidden bg-slate-50 border-b border-slate-50">
                    <img 
                      src={proj.imageUrl} 
                      alt={proj.title} 
                      referrerPolicy="no-referrer"
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" 
                    />
                    <span className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-xs text-white text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md">
                      {proj.category}
                    </span>
                    <span className="absolute bottom-3 right-3 bg-brand-green text-brand-dark text-[9px] font-extrabold tracking-widest px-2.5 py-1 rounded-md font-mono">
                      {proj.tag}
                    </span>
                  </div>

                  <div className="p-6 sm:p-8 space-y-3">
                    <span className="text-[10px] text-slate-400 font-extrabold uppercase font-mono tracking-wider flex items-center gap-1.5"><Calendar size={11} /> {proj.date}</span>
                    <h3 className="font-display font-black text-slate-900 text-lg leading-snug group-hover:text-brand-blue-deep transition-colors">{proj.title}</h3>
                    <p className="text-slate-650 text-xs sm:text-sm leading-relaxed">{proj.description}</p>
                  </div>
                </div>

                <div className="p-6 pt-4 border-t border-slate-50 mt-auto bg-slate-50/10 flex items-center justify-between text-xs font-semibold">
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest font-mono">Verified impact record</span>
                  <span className="text-brand-blue-deep group-hover:text-brand-blue-vibrant transition-colors flex items-center gap-1 font-bold">Diagnostics complete &rarr;</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}

/* ==========================================
   4. BLOG PAGE
   ========================================== */
export function BlogPage({ setCurrentPage }: { setCurrentPage: (page: PageId) => void }) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'Business' | 'Education' | 'Innovation'>('all');

  const filteredBlogPosts = selectedCategory === 'all' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === selectedCategory);

  return (
    <div className="relative overflow-hidden mesh-bg py-24 md:py-32 text-left" id="blog_page_container">
      {/* Decorative background glows */}
      <div className="absolute top-1/10 left-1/10 w-96 h-96 bg-brand-blue-deep/5 rounded-full blur-3xl animate-ambient-glow pointer-events-none" />
      <div className="absolute bottom-1/10 right-1/12 w-96 h-96 bg-brand-green/3 rounded-full blur-3xl animate-ambient-glow pointer-events-none" style={{ animationDelay: '-5s' }} />

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: customEase }}
          className="text-left space-y-5 max-w-3xl border-b border-slate-100 pb-12 mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold rounded-full bg-brand-blue-deep/5 text-brand-blue-deep border border-brand-blue-deep/10 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-vibrant animate-pulse" />
            <span className="tracking-wide uppercase font-mono">Corporate Publication</span>
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-slate-900 tracking-tight leading-none pt-2">
            The BlinkTech{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-deep via-brand-blue-vibrant to-brand-green">
              SME & Education Blog
            </span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            Insightful analyses, prompt engineering models, computational advice, and strategy papers composed by our direct consultants in the field.
          </p>
        </motion.div>

        {/* Blog Preview Embedded */}
        <div className="mb-20">
          <BlogPreviewSection setCurrentPage={setCurrentPage} />
        </div>

        {/* Featured blog layout */}
        <motion.section 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05, ease: customEase }}
          className="bg-white rounded-3xl border border-slate-100 p-6 md:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 shadow-2xs hover:shadow-lg transition-all duration-300 group" 
          id="blog_featured_post_hero"
        >
          <div className="lg:col-span-6 overflow-hidden rounded-2xl aspect-video relative bg-slate-50 border border-slate-100">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop" 
              alt="AI tools on SME workplaces" 
              referrerPolicy="no-referrer"
              className="object-cover w-full h-full group-hover:scale-102 transition-transform duration-550 ease-[cubic-bezier(0.16,1,0.3,1)]" 
            />
            <span className="absolute top-4 left-4 bg-slate-900/95 backdrop-blur-xs text-white text-[9px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-md font-mono border border-white/5">
              Featured Corporate Strategy
            </span>
          </div>

          <div className="lg:col-span-6 text-left space-y-4">
            <span className="text-xs text-brand-green font-extrabold uppercase tracking-wider bg-brand-green/10 text-brand-dark px-3 py-1 rounded-full inline-block font-mono">SME Tech Upgrades</span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black font-display text-slate-900 leading-tight group-hover:text-brand-blue-deep transition-colors">
              The AI Shift: How SMEs can use free tools to save <AnimatedCounter value="20" /> hours weekly
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Many business founders perceive artificial intelligence as an expensive, complex infrastructure project. The reality is far simpler: easily accessible, free tools can automate your email drafting, organize messy sales excels, and research standard customer questions. Learn the direct steps...
            </p>
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 font-mono pt-1">
              <span className="flex items-center gap-1"><User size={12} /> Adebayo Johnson</span>
              <span className="text-slate-250">•</span>
              <span className="flex items-center gap-1"><Clock size={12} /> <AnimatedCounter value="6" /> min read</span>
            </div>
          </div>
        </motion.section>

        {/* Category filtering matrix */}
        <div className="flex items-center gap-1.5 mb-8 overflow-x-auto pb-2" id="blog_categories_toolbar">
          <span className="text-slate-400 mr-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider font-mono"><Filter size={14} /> Filter:</span>
          {(['all', 'Business', 'Education', 'Innovation'] as const).map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer shrink-0 ${
                selectedCategory === cat 
                  ? 'bg-brand-green text-brand-dark shadow-md' 
                  : 'bg-slate-50 border border-slate-100 hover:bg-white text-slate-500 hover:text-slate-805 hover:border-slate-300'
              }`}
            >
              {cat} Insights
            </button>
          ))}
        </div>

        {/* Main Grid mappings */}
        <motion.div 
          layout
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
          id="blog_articles_grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredBlogPosts.map((post) => (
              <motion.article 
                layout
                key={post.title} 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: customEase }}
                className="bg-white border border-slate-150 hover:border-slate-200/80 transition-all duration-300 rounded-2xl overflow-hidden flex flex-col justify-between group shadow-2xs hover:shadow-lg"
              >
                <div>
                  <div className="aspect-video relative overflow-hidden bg-slate-550/20 border-b border-slate-100">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      referrerPolicy="no-referrer"
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" 
                    />
                    <span className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-xs text-white text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md font-mono">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 sm:p-8 space-y-3">
                    <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider font-mono flex items-center gap-1.5"><Calendar size={11} /> {post.date}</span>
                    <h3 className="font-display font-black text-slate-900 text-base md:text-lg group-hover:text-brand-blue-deep transition-all leading-snug">{post.title}</h3>
                    <p className="text-slate-655 text-xs sm:text-sm leading-relaxed">{post.summary}</p>
                  </div>
                </div>

                <div className="p-6 pt-4 border-t border-slate-100 mt-auto flex items-center justify-between text-xs text-slate-400 font-semibold bg-slate-50/10">
                  <span className="font-mono text-[11px] text-slate-400">By {post.author.split(',')[0]}</span>
                  <span className="text-brand-blue-deep group-hover:text-brand-blue-vibrant font-extrabold text-[11px] leading-none transition-colors">Read Full Insight &rarr;</span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}

/* ==========================================
   5. CONTACT PAGE
   ========================================== */
export function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenFAQIndex(openFAQIndex === idx ? null : idx);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4500);
  };

  return (
    <div className="relative overflow-hidden mesh-bg py-24 md:py-32 text-left" id="contact_page_container">
      {/* Decorative background glows */}
      <div className="absolute top-1/12 left-1/12 w-[500px] h-[500px] bg-brand-blue-deep/5 rounded-full blur-3xl animate-ambient-glow pointer-events-none" />
      <div className="absolute bottom-1/12 right-1/12 w-[400px] h-[400px] bg-brand-green/3 rounded-full blur-3xl animate-ambient-glow pointer-events-none" style={{ animationDelay: '-4s' }} />

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: customEase }}
          className="text-left space-y-5 max-w-3xl border-b border-slate-100 pb-12 mb-20"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold rounded-full bg-brand-blue-deep/5 text-brand-blue-deep border border-brand-blue-deep/10 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-vibrant animate-pulse" />
            <span className="tracking-wide uppercase font-mono">Direct Communications Desk</span>
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-slate-900 tracking-tight leading-none pt-2">
            Schedule a Diagnostic{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-deep via-brand-blue-vibrant to-brand-green">
              with our Consultants
            </span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            Have questions regarding physical curriculum deployments, company database migrations, or registration dates for the BlinkTech Academy? Contact our dispatch office directly.
          </p>
        </motion.div>

        {/* Content Layout: Form vs Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24" id="contact_main_layout">
          
          {/* Active Contact Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: customEase }}
            className="lg:col-span-7 bg-slate-50/50 border border-slate-100 shadow-xl rounded-3xl p-6 sm:p-10 relative overflow-hidden" id="contact_form_panel"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue-deep/5 rounded-full blur-2xl pointer-events-none" />
            <h2 className="text-2xl font-extrabold font-display text-slate-900 mb-1.5 relative z-10">Send Dispatch Ticket</h2>
            <p className="text-xs text-slate-500 mb-8 leading-relaxed relative z-10">Our coordinating administrators review all inbound inquiries within one operational business day.</p>

            {formSubmitted ? (
               <div className="bg-brand-green/10 text-brand-dark p-8 rounded-2xl border border-brand-green/20 text-center space-y-3 animate-fade-in relative z-10">
                <CheckCircle className="mx-auto text-brand-green animate-bounce" size={32} />
                <h4 className="font-extrabold text-sm text-slate-900">Inquiry Dispatched!</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Your consultation reference number is <strong className="font-mono text-xs text-brand-blue-deep">BT-9041s</strong>. A digital planner has been assigned to contact your phone channel.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-bold uppercase text-slate-400">Company / Individual Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Adebayo C." 
                      className="w-full text-xs border border-slate-200 rounded-xl px-4 py-3 bg-white text-slate-900 focus:outline-none focus:ring-4 focus:ring-brand-blue-deep/5 focus:border-brand-blue-deep font-medium transition-all" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-bold uppercase text-slate-400">Inquiry Email Channel</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="e.g. corp@university.org" 
                      className="w-full text-xs border border-slate-200 rounded-xl px-4 py-3 bg-white text-slate-900 focus:outline-none focus:ring-4 focus:ring-brand-blue-deep/5 focus:border-brand-blue-deep font-medium transition-all" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-bold uppercase text-slate-400">Operational Phone Number</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="e.g. +234 80 123 4567" 
                      className="w-full text-xs border border-slate-200 rounded-xl px-4 py-3 bg-white text-slate-900 focus:outline-none focus:ring-4 focus:ring-brand-blue-deep/5 focus:border-brand-blue-deep font-medium transition-all" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-bold uppercase text-slate-400">Inquiry Focus Module</label>
                    <select className="w-full text-xs border border-slate-200 rounded-xl px-4 py-3 bg-white text-slate-950 focus:outline-none focus:ring-4 focus:ring-brand-blue-deep/5 focus:border-brand-blue-deep font-medium cursor-pointer transition-all">
                      <option>SME Technology Consulting</option>
                      <option>School Computational Curriculum support</option>
                      <option>QUIZ debate program for companies</option>
                      <option>BlinkTech Academy course inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[10px] font-bold uppercase text-slate-400">Detailed Inquiry Message</label>
                  <textarea 
                    rows={4} 
                    required 
                    placeholder="Specify your company size, technological limits, or target student counts so our diagnostic director provides adequate insights." 
                    className="w-full text-xs border border-slate-200 rounded-xl p-4 bg-white text-slate-900 focus:outline-none focus:ring-4 focus:ring-brand-blue-deep/5 focus:border-brand-blue-deep font-medium transition-all" 
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 text-xs font-bold uppercase tracking-wider bg-brand-blue-deep hover:bg-brand-blue-vibrant text-white rounded-xl transition-all cursor-pointer shadow-md mt-2 font-display hover:scale-[1.01] active:scale-[0.99]"
                >
                  Lock Diagnostic Slot
                </button>
              </form>
            )}
          </motion.div>

          {/* Details Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: customEase }}
            className="lg:col-span-5 space-y-8 text-left lg:pl-6" 
            id="contact_details_panel"
          >
            
            <div className="space-y-3">
              <h3 className="font-display font-extrabold text-xl text-slate-900">Communication Addresses</h3>
              <p className="text-slate-550 text-xs sm:text-sm leading-relaxed">Feel free to access our representative operations channels for immediate clarifications.</p>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-slate-650">
              <div className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-2xs hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 bottom-0 left-0 w-[4px] bg-brand-green" />
                <MapPin className="text-brand-green flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-extrabold text-slate-900">Operational Head Office</h4>
                  <p className="text-slate-500 mt-1.5 leading-relaxed text-xs">
                    BlinkTech Solutions Head Office,<br />
                    Suite 40s, Innovation & Commerce Plaza,<br />
                    West Africa & Global Operations
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-2xs hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 bottom-0 left-0 w-[4px] bg-brand-green" />
                <Mail className="text-brand-green flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-extrabold text-slate-900">Email Correspondence</h4>
                  <p className="text-slate-500 mt-1.5 leading-relaxed text-xs hover:text-brand-blue-deep transition-colors">
                    <a href="mailto:info@blinktechsolutions.com" className="font-semibold underline decoration-brand-green/30 hover:decoration-brand-blue-deep">info@blinktechsolutions.com</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-2xs hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 bottom-0 left-0 w-[4px] bg-brand-green" />
                <Phone className="text-brand-green flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-extrabold text-slate-900">Corporate Phone Channel</h4>
                  <p className="text-slate-500 mt-1.5 leading-relaxed text-xs hover:text-brand-blue-deep transition-colors">
                    <a href="tel:+2348030000000" className="font-semibold">+234 (0) 803 000 0000</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Map Coordinates block */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 shadow-2xs">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-brand-green animate-pulse" />
                <span className="font-extrabold text-slate-800 font-display">Map Coordinates Verified</span>
              </div>
              <span className="text-slate-400 font-mono text-[10px] tracking-wide bg-white px-2 py-0.5 rounded border border-slate-150">6.5244° N, 3.3792° E</span>
            </div>

          </motion.div>

        </div>

        {/* SECTION: Frequently Asked Questions (Interactive Accordion) */}
        <section className="border-t border-slate-105 pt-20" id="contact_faq_section">
          <div className="text-center space-y-3 mb-16 text-left md:text-center">
            <span className="inline-flex items-center gap-1.5 text-brand-blue-vibrant font-extrabold text-xs uppercase tracking-widest font-display bg-brand-blue-deep/5 px-3 py-1 rounded-full inline-block">
              Support Answers
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-slate-900 tracking-tight pt-2">
              Frequently Asked Questions (FAQ)
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Get rapid explanations regarding our digital transformation diagnostic steps and academic debate courses.
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4" id="faqs_accordion">
            {CONTRACT_FAQS.map((faq, idx) => {
              const isOpen = openFAQIndex === idx;
              return (
                <div 
                  key={idx}
                  id={`faq_accordion_item_${idx}`}
                  className="bg-white rounded-2xl border border-slate-150 overflow-hidden shadow-2xs hover:border-slate-250 hover:shadow-xs transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full text-left px-6 py-5 font-display font-extrabold text-slate-900 hover:text-brand-blue-vibrant flex items-center justify-between transition-colors focus:outline-none cursor-pointer"
                  >
                    <span className="text-sm sm:text-base tracking-tight pr-4">{faq.question}</span>
                    <ChevronDown 
                      size={16} 
                      className={`text-slate-450 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-blue-vibrant' : ''}`} 
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-100">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}
