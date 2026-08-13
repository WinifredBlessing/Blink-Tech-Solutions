import React from 'react';
import { PageId } from '../types';
import { Logo } from './Logo';
import { Mail, Phone, MapPin, ArrowRight, Linkedin, Github, Globe, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
}

export function Footer({ setCurrentPage }: FooterProps) {
  const handlePageClick = (pageId: PageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 text-white pt-24 pb-12 overflow-hidden border-t border-slate-900 mt-20" id="main_professional_footer">
      {/* Decorative ambient background */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-brand-blue-deep/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-brand-green/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Top Border Gradient Accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-blue-vibrant/50 to-transparent" />

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 md:gap-8 pb-16 border-b border-white/5">
          
          {/* Brand Intro Column */}
          <div className="lg:col-span-4 space-y-8">
            <div onClick={() => handlePageClick('home')} className="cursor-pointer inline-block group">
              <Logo className="h-10 md:h-12 group-hover:scale-105 transition-transform duration-300" light={true} />
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-medium">
              BlinkTech Solutions is a premium technology consulting, advisory, and education provider dedicated to accelerating enterprise growth and bridging digital knowledge gaps.
            </p>
 
            <div className="inline-flex items-center gap-2.5 px-4 py-2 text-xs font-bold rounded-xl bg-white/5 border border-white/10 text-slate-300">
              <Sparkles size={14} className="text-brand-green" />
              <span>Skills Built. Businesses Powered.</span>
            </div>
 
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-brand-blue-deep/50 hover:shadow-[0_0_15px_rgba(0,58,148,0.5)] transition-all duration-300 border border-white/5 hover:scale-110">
                <Linkedin size={18} />
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-brand-blue-sky/50 hover:shadow-[0_0_15px_rgba(14,165,233,0.5)] transition-all duration-300 border border-white/5 hover:scale-110">
                <Globe size={18} />
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/20 transition-all duration-300 border border-white/5 hover:scale-110">
                <Github size={18} />
              </a>
            </div>
          </div>
 
          {/* Quick Links Nav Matrix */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-white font-bold text-xs tracking-[0.15em] uppercase font-display border-b border-white/10 pb-4 inline-block">
              Our Agency
            </h4>
            <ul className="space-y-4 text-sm">
              {['Home Office', 'About Our Crew', 'Case Gallery', 'SME Blog & News'].map((item, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => handlePageClick(['home', 'about', 'projects', 'blog'][idx] as PageId)} 
                    className="text-slate-400 hover:text-white transition-all duration-300 focus:outline-none cursor-pointer font-medium flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-brand-blue-sky transition-colors" />
                    <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
 
          {/* Solutions Column */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-white font-bold text-xs tracking-[0.15em] uppercase font-display border-b border-white/10 pb-4 inline-block">
              Solutions & Pillars
            </h4>
            <ul className="space-y-4 text-sm">
              {['Digital Transformation', 'Educational Systems', 'Debate & QUIZ Training', 'Academy Knowledge Hub'].map((item, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => handlePageClick(['business', 'education', 'debate', 'academy'][idx] as PageId)} 
                    className="text-slate-400 hover:text-white transition-all duration-300 focus:outline-none cursor-pointer font-medium flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-brand-green transition-colors" />
                    <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
 
          {/* Location & Direct Communication Contact Shortcode Column */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-white font-bold text-xs tracking-[0.15em] uppercase font-display border-b border-white/10 pb-4 inline-block">
              Representative Office
            </h4>
            <ul className="space-y-5 text-sm text-slate-400">
              <li className="flex items-start gap-3.5 leading-relaxed group cursor-default">
                <div className="p-2 rounded-lg bg-white/5 text-brand-green group-hover:bg-brand-green/20 group-hover:text-brand-green transition-colors">
                  <MapPin size={16} />
                </div>
                <span className="font-medium pt-1">
                  BlinkTech Solutions Head Office,<br />
                  Satellite Town Innovation & Commerce Plaza,<br />
                  West Africa & Global Operations
                </span>
              </li>
              <li className="flex items-center gap-3.5 group">
                <div className="p-2 rounded-lg bg-white/5 text-brand-blue-sky group-hover:bg-brand-blue-sky/20 transition-colors">
                  <Mail size={16} />
                </div>
                <a href="mailto:info@blinktechsolutions.co.uk" className="hover:text-white transition-colors font-medium">info@blinktechsolutions.co.uk</a>
              </li>
              <li className="flex items-center gap-3.5 group">
                <div className="p-2 rounded-lg bg-white/5 text-brand-blue-vibrant group-hover:bg-brand-blue-vibrant/20 transition-colors">
                  <Phone size={16} />
                </div>
                <a href="tel:0764270096" className="hover:text-white transition-colors font-medium">0764270096</a>
              </li>
            </ul>
 
            {/* Newsletter Mock */}
            <div className="pt-4">
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center relative group">
                <input 
                  type="email" 
                  placeholder="Your Corporate Email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-brand-blue-vibrant/50 focus:ring-2 focus:ring-brand-blue-vibrant/20 text-white placeholder:text-slate-500 transition-all font-medium shadow-inner" 
                />
                <button 
                  type="submit" 
                  className="absolute right-1.5 top-1.5 bottom-1.5 bg-brand-blue-vibrant hover:bg-brand-blue-sky text-white w-9 rounded-lg transition-all cursor-pointer flex items-center justify-center shadow-lg"
                  aria-label="Submit Newsletter email"
                >
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>
            </div>
          </div>
 
        </div>
 
        {/* Footer Meta Details */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-6">
          <div className="flex items-center gap-4">
            <span className="font-semibold tracking-wide">&copy; {currentYear} BlinkTech Solutions. All Rights Reserved.</span>
          </div>
          
          <div className="flex items-center gap-6 font-semibold tracking-wide">
            <a href="#" className="hover:text-white hover:underline transition-all">Terms of Service</a>
            <a href="#" className="hover:text-white hover:underline transition-all">Privacy Guideline</a>
            <a href="#" className="hover:text-white hover:underline transition-all">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
