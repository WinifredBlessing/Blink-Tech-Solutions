import React, { useEffect, useState } from 'react';
import { PageId, Course, Lesson } from '../types';
import { fetchCourseById } from '../api';
import { motion } from 'motion/react';
import { ArrowLeft, PlayCircle, Clock, FileText, CheckCircle2 } from 'lucide-react';

export function CourseDetails({ 
  courseId, 
  setCurrentPage 
}: { 
  courseId: string | null; 
  setCurrentPage: (page: PageId) => void 
}) {
  const [course, setCourse] = useState<(Course & { lessons: Lesson[] }) | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);

  useEffect(() => {
    if (!courseId) {
      setCurrentPage('academy');
      return;
    }

    fetchCourseById(courseId)
      .then(data => {
        setCourse(data);
        if (data.lessons && data.lessons.length > 0) {
          setActiveLesson(data.lessons[0]);
        }
      })
      .catch(err => {
        console.error("Failed to load course details", err);
      })
      .finally(() => setLoading(false));
  }, [courseId, setCurrentPage]);

  if (loading) {
    return (
      <div className="min-h-screen mesh-bg flex items-center justify-center pt-24">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-brand-blue-deep/20 border-t-brand-blue-vibrant rounded-full animate-spin mx-auto" />
          <p className="text-slate-500 font-mono text-sm uppercase tracking-widest animate-pulse">Loading Course Data...</p>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen mesh-bg flex flex-col items-center justify-center pt-24 space-y-6">
        <h2 className="text-2xl font-display font-black text-slate-900">Course Not Found</h2>
        <button 
          onClick={() => setCurrentPage('academy')}
          className="bg-brand-blue-deep text-white px-6 py-3 rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-brand-blue-vibrant transition-colors"
        >
          Return to Academy
        </button>
      </div>
    );
  }

  // Extract YouTube ID if it's a youtube link to embed
  const getEmbedUrl = (url: string) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}`;
    }
    // Handle Vimeo or others later, fallback to link if not youtube
    return url;
  };

  const embedUrl = activeLesson ? getEmbedUrl(activeLesson.video_url) : null;
  const isYoutube = embedUrl?.includes('youtube.com/embed');

  return (
    <div className="relative overflow-hidden mesh-bg pt-24 pb-32 text-left min-h-screen" id="course_details_container">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Breadcrumb */}
        <button 
          onClick={() => setCurrentPage('academy')}
          className="group flex items-center gap-2 text-slate-500 hover:text-brand-blue-deep transition-colors mb-8 text-sm font-semibold"
        >
          <div className="p-1.5 rounded-full bg-white border border-slate-200 group-hover:border-brand-blue-deep/30 transition-colors">
            <ArrowLeft size={16} />
          </div>
          Back to Course Library
        </button>

        {/* Course Header Info */}
        <div className="mb-10 space-y-4 max-w-4xl">
          <span className="text-[10px] font-extrabold text-brand-green uppercase tracking-widest font-mono bg-brand-green/10 text-brand-dark px-2.5 py-1 rounded-full inline-block">
            {course.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
            {course.title}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
            {course.description}
          </p>
        </div>

        {/* Main Interface Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Video Player & Details */}
          <div className="lg:col-span-8 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 aspect-video relative group"
            >
              {activeLesson && activeLesson.video_url ? (
                isYoutube ? (
                  <iframe 
                    src={embedUrl} 
                    title={activeLesson.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 space-y-4">
                    <PlayCircle size={48} className="opacity-50" />
                    <p className="font-mono text-sm">External Video Source</p>
                    <a href={activeLesson.video_url} target="_blank" rel="noopener noreferrer" className="text-brand-blue-vibrant hover:underline text-sm font-bold">
                      Open Video in New Tab
                    </a>
                  </div>
                )
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 bg-slate-800/50 space-y-4">
                  {course.thumbnail ? (
                     <img src={course.thumbnail} className="absolute inset-0 w-full h-full object-cover opacity-30" alt="Thumbnail" />
                  ) : null}
                  <div className="relative z-10 flex flex-col items-center">
                    <PlayCircle size={48} className="mb-4 opacity-50" />
                    <p className="font-display font-bold text-lg text-white">Select a lesson to begin</p>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Active Lesson Info */}
            {activeLesson && (
              <motion.div 
                key={activeLesson.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4"
              >
                <h2 className="text-xl sm:text-2xl font-black font-display text-slate-900">{activeLesson.title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed">{activeLesson.description}</p>
                
                {activeLesson.resource_url && (
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-4">
                    <a 
                      href={activeLesson.resource_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 hover:text-brand-blue-deep hover:border-brand-blue-deep/30 px-4 py-2.5 rounded-xl text-xs font-bold transition-colors"
                    >
                      <FileText size={16} />
                      Download Materials
                    </a>
                  </div>
                )}
              </motion.div>
            )}
          </div>

          {/* Right Column: Syllabus/Lessons List */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col h-full max-h-[800px]">
              <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                <h3 className="font-display font-extrabold text-slate-900 text-lg">Course Syllabus</h3>
                <p className="text-xs text-slate-500 font-medium mt-1">{course.lessons.length} Modules Available</p>
              </div>
              
              <div className="overflow-y-auto flex-1 p-2">
                {course.lessons.length === 0 ? (
                  <div className="p-8 text-center text-slate-400 text-sm font-medium">
                    Content is currently being prepared. Check back soon.
                  </div>
                ) : (
                  <div className="space-y-1">
                    {course.lessons.map((lesson, index) => (
                      <button
                        key={lesson.id}
                        onClick={() => setActiveLesson(lesson)}
                        className={`w-full text-left p-4 rounded-2xl flex gap-4 transition-all ${
                          activeLesson?.id === lesson.id 
                            ? 'bg-brand-blue-deep/5 border-brand-blue-deep/20 border text-brand-blue-deep shadow-2xs' 
                            : 'hover:bg-slate-50 border border-transparent text-slate-600'
                        }`}
                      >
                        <div className={`mt-0.5 shrink-0 ${activeLesson?.id === lesson.id ? 'text-brand-blue-vibrant' : 'text-slate-300'}`}>
                          {activeLesson?.id === lesson.id ? <PlayCircle size={20} className="animate-pulse" /> : <CheckCircle2 size={20} />}
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider mb-1 opacity-70">Lesson {index + 1}</p>
                          <h4 className={`text-sm font-bold leading-snug ${activeLesson?.id === lesson.id ? 'text-brand-blue-deep' : 'text-slate-700'}`}>
                            {lesson.title}
                          </h4>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
