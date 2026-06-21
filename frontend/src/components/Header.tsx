import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { NAVIGATION_ITEMS } from '../data';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
}

export function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId: PageId) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-500 ease-out ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        <motion.div 
          layout
          className={`flex items-center justify-between transition-all duration-500 ease-out mx-auto ${
            scrolled 
              ? 'glass-card rounded-full px-6 py-2.5 max-w-5xl shadow-[0_8px_30px_rgba(0,0,0,0.06)]' 
              : 'bg-transparent px-0 py-2 max-w-full'
          }`}
        >
          
          {/* Logo Brand Anchor */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="cursor-pointer flex-shrink-0 transition-transform hover:scale-[1.02] active:scale-[0.98] duration-200"
            id="brand_logo_anchor"
          >
            <Logo className={`transition-all duration-500 ${scrolled ? 'h-8' : 'h-10 md:h-12'}`} />
          </div>

          {/* Desktop Navigation Hierarchy */}
          <nav className={`hidden lg:flex items-center gap-1.5 transition-all duration-500 ${
            scrolled ? '' : 'bg-slate-50/60 backdrop-blur-md p-1.5 rounded-2xl border border-slate-200/50'
          }`} id="desktop_nav_bar">
            {NAVIGATION_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`nav_btn_${item.id}`}
                  className={`relative px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300 rounded-xl select-none flex items-center gap-1.5 focus:outline-none overflow-hidden ${
                    isActive 
                      ? 'text-brand-blue-deep' 
                      : 'text-slate-600 hover:text-brand-blue-vibrant'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.div 
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-white rounded-xl shadow-[0_2px_12px_rgba(0,58,148,0.08)] border border-slate-100 z-0"
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    />
                  )}
                  {isActive && (
                    <motion.span 
                      layoutId="activeNavBullet"
                      className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand-vibrant z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Call To Action Header Actions */}
          <div className="hidden lg:flex items-center gap-3" id="header_cta_section">
            <button
              onClick={() => handleNavClick('academy')}
              id="header_cta_academy"
              className="group relative flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 rounded-full bg-gradient-to-r from-brand-blue-deep via-brand-blue-vibrant to-brand-blue-sky premium-shadow-md hover:shadow-brand-blue-vibrant/30 hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
              <GraduationCap size={16} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">BlinkTech Academy</span>
              <ArrowUpRight size={14} className="relative z-10 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Navigation Trigger Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2.5 rounded-full text-slate-600 hover:text-brand-blue-deep hover:bg-slate-100 focus:outline-none transition-colors ${
                scrolled ? 'bg-slate-100/50' : 'bg-white/50 backdrop-blur-md shadow-sm border border-slate-200/50'
              }`}
              aria-expanded="false"
              id="mobile_hamburger_toggle"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </motion.div>
      </div>

      {/* Slide-out Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden absolute top-[110%] left-4 right-4 glass-card rounded-2xl overflow-hidden premium-shadow-lg p-2"
            id="mobile_navigation_drawer"
          >
            <div className="px-2 py-3 space-y-1.5">
              {NAVIGATION_ITEMS.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    id={`mobile_nav_btn_${item.id}`}
                    className={`flex items-center justify-between w-full px-5 py-3.5 text-base font-bold rounded-xl transition-all focus:outline-none ${
                      isActive 
                        ? 'text-white bg-gradient-to-r from-brand-blue-deep to-brand-blue-vibrant shadow-md' 
                        : 'text-slate-700 hover:text-brand-blue-vibrant hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className={`text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full ${
                      isActive ? 'bg-white/20 text-white font-semibold' : 'bg-slate-100 text-slate-500 font-medium'
                    }`}>
                      {item.id === 'debate' ? 'Highlight' : item.id === 'academy' ? 'Courses' : 'Section'}
                    </span>
                  </button>
                );
              })}
              
              <div className="pt-4 mt-4 border-t border-slate-200/50">
                <button
                  onClick={() => handleNavClick('contact')}
                  id="mobile_cta_contact"
                  className="group flex items-center justify-center w-full gap-2 px-5 py-4 text-base font-bold text-center text-white transition-all rounded-xl bg-brand-green hover:bg-brand-green/90 premium-shadow-sm hover:shadow-brand-green/30"
                >
                  Get Free Consultation
                  <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
