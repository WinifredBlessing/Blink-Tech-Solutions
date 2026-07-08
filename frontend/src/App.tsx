import React, { useState } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { BusinessPage, EducationPage } from './components/ServicesPages';
import { 
  DebatePage, 
  AcademyPage, 
  ProjectsPage, 
  BlogPage, 
  ContactPage 
} from './components/SpecialPages';
import { CourseDetails } from './components/CourseDetails';
import { AdminLogin } from './components/AdminLogin';
import { AdminDashboard } from './components/AdminDashboard';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [currentCourseId, setCurrentCourseId] = useState<string | null>(null);

  // Page switcher mapping which component should render under which PageId
  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage setCurrentPage={setCurrentPage} />;
      case 'business':
        return <BusinessPage />;
      case 'education':
        return <EducationPage />;
      case 'debate':
        return <DebatePage />;
      case 'academy':
        return <AcademyPage setCurrentPage={setCurrentPage} setCurrentCourseId={setCurrentCourseId} />;
      case 'academy-course':
        return <CourseDetails courseId={currentCourseId} setCurrentPage={setCurrentPage} />;
      case 'admin-login':
        return <AdminLogin setCurrentPage={setCurrentPage} />;
      case 'admin-dashboard':
        return <AdminDashboard setCurrentPage={setCurrentPage} />;
      case 'projects':
        return <ProjectsPage setCurrentPage={setCurrentPage} />;
      case 'blog':
        return <BlogPage setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen mesh-bg text-slate-900 selection:bg-brand-vibrant/30 text-center relative" id="main_app_wrapper">
      
      {/* Background ambient lighting effects */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-blue-deep/10 rounded-full blur-[120px] pointer-events-none animate-ambient-glow" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-green/10 rounded-full blur-[120px] pointer-events-none animate-ambient-glow" style={{ animationDelay: '6s' }} />

      {/* Premium Sticky Navigation Header */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Content Stage with high-quality route transitions */}
      <main className="flex-grow relative z-10" id="app_main_content">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20, scale: 0.98, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, scale: 0.98, filter: 'blur(10px)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full"
          >
            {renderActivePage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Premium Structured Info Footer */}
      <Footer setCurrentPage={setCurrentPage} />

    </div>
  );
}
