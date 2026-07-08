import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, GraduationCap, CheckCircle2 } from 'lucide-react';
import { ACADEMY_COURSES } from '../../data';

export function AcademyPreviewSection() {
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<string | null>(null);
  const [interestEmail, setInterestEmail] = useState('');
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  const [waitlistError, setWaitlistError] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  const openWaitlistModal = (courseTitle: string) => {
    setSelectedCourseForModal(courseTitle);
    setWaitlistSubmitted(false);
    setWaitlistError('');
  };

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!interestEmail || !interestEmail.includes('@')) {
      setWaitlistError('Please provide a valid company or personal email Address.');
      return;
    }
    setWaitlistError('');
    setWaitlistSubmitted(true);
    setTimeout(() => {
      setWaitlistSubmitted(false);
      setInterestEmail('');
      setSelectedCourseForModal(null);
    }, 4000);
  };

  return (
    <section className="py-24 md:py-32 border-b border-slate-100" id="section_academy_preview">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 max-w-2.5xl mx-auto mb-16"
        >
          <span className="text-brand-blue-vibrant font-extrabold text-xs uppercase tracking-widest font-display bg-brand-blue-deep/5 px-3 py-1 rounded-full">
            COMING SOON
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-black font-display text-slate-900 tracking-tight leading-none mt-1">
            Learn. Grow. Lead.
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            BlinkTech Academy prepares graduates and tech founders with self-regulated technical courses. Register on our waitlist to capture initial syllabus schedules.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
          id="academy_preview_grid"
        >
          {ACADEMY_COURSES.map((course, idx) => (
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5 }}
              key={course.title}
              id={`academy_course_preview_${idx}`}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 p-7 sm:p-8 flex flex-col justify-between text-left relative overflow-hidden border-l-4 border-l-brand-blue-deep group"
            >
              {/* Coming Soon Indicator */}
              <div className="absolute top-4 right-4 bg-slate-50 text-slate-500 text-[9px] font-bold uppercase py-1 px-2.5 rounded-full border border-slate-100">
                Coming Soon
              </div>

              <div className="space-y-4">
                <span className="text-[10px] font-extrabold text-brand-blue-deep font-display uppercase tracking-widest block">
                  {course.category}
                </span>
                
                <h3 className="font-display font-bold text-lg text-slate-900 tracking-tight leading-snug group-hover:text-brand-blue-deep transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-slate-500 text-xs sm:text-sm italic font-medium">
                  "{course.tagline}"
                </p>
                
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {course.description}
                </p>

                <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400 py-1">
                  <span className="bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-lg">Duration: {course.duration}</span>
                  <span className="bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-lg">Level: {course.level}</span>
                </div>

                <div className="space-y-2 pt-3 border-t border-slate-50 text-left">
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Syllabus Highlights:</p>
                  {course.features.map(f => (
                    <div key={f} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle size={13} className="text-brand-green flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => openWaitlistModal(course.title)}
                  className="w-full text-center py-3 rounded-xl text-xs font-extrabold bg-brand-blue-deep/5 hover:bg-brand-blue-deep hover:text-white text-brand-blue-deep transition-all duration-300 select-none border border-brand-blue-deep/10 hover:border-transparent cursor-pointer"
                >
                  Join Course Waitlist
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Waitlist Modal backdrop simulation */}
        <AnimatePresence>
          {selectedCourseForModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 text-left shadow-2xl relative border border-slate-100"
                id="waitlist_registration_modal"
              >
                <button 
                  onClick={() => setSelectedCourseForModal(null)}
                  className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 transition-colors cursor-pointer"
                >
                  ✕
                </button>
                
                <div className="space-y-5">
                  <div className="p-3 w-12 h-12 bg-brand-blue-deep/5 text-brand-blue-deep rounded-2xl flex items-center justify-center border border-brand-blue-deep/5 shadow-xs">
                    <GraduationCap size={24} />
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-[9px] bg-brand-green/20 text-brand-dark px-2.5 py-1 rounded-full font-mono font-bold uppercase tracking-wider">Coming Soon Program</span>
                    <h3 className="text-xl font-bold font-display text-slate-900 mt-2">Waitlist Application</h3>
                    <p className="text-xs text-slate-500">
                      Selected Program: <strong>{selectedCourseForModal}</strong>
                    </p>
                  </div>

                  {waitlistSubmitted ? (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                      className="p-5 bg-brand-green/10 text-brand-dark rounded-2xl border border-brand-green/20 space-y-2 text-center py-8"
                    >
                      <CheckCircle2 className="mx-auto text-brand-green" size={36} />
                      <h4 className="font-bold text-sm">Successfully Registered!</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        We logged your contact profile. You will receive initial syllabus files once schedules deploy.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Register your commercial or academic email address to guarantee receipt of early-bird coupons and direct mentorship slots once this class activates.
                      </p>
                      
                      <div className="space-y-1.5">
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wide">Your Email Address</label>
                        <input 
                          type="email" 
                          required
                          placeholder="graduate@university.org" 
                          value={interestEmail}
                          onChange={(e) => setInterestEmail(e.target.value)}
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue-deep focus:ring-4 focus:ring-brand-blue-deep/5 text-slate-900 placeholder:text-slate-400 transition-all font-medium"
                        />
                      </div>

                      {waitlistError && (
                        <p className="text-xs text-rose-500 font-bold">{waitlistError}</p>
                      )}

                      <div className="flex gap-2 justify-end pt-2">
                        <button 
                          type="button" 
                          onClick={() => setSelectedCourseForModal(null)}
                          className="px-4 py-2.5 text-xs font-bold text-slate-500 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                        >
                          Cancel
                        </button>
                        <button 
                          type="submit" 
                          className="px-5 py-2.5 text-xs font-bold bg-brand-blue-vibrant text-white rounded-lg hover:bg-brand-blue-deep transition-all duration-200 shadow-sm cursor-pointer"
                        >
                          Lock Waitlist Slot
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
