import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Clock, User } from 'lucide-react';
import { PageId } from '../../types';
import { BLOG_POSTS } from '../../data';

interface BlogPreviewSectionProps {
  setCurrentPage: (page: PageId) => void;
}

export function BlogPreviewSection({ setCurrentPage }: BlogPreviewSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const articleVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="py-24 md:py-32 bg-slate-50/50 border-t border-slate-100" id="section_blog_preview">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16 text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <span className="text-brand-blue-vibrant font-extrabold text-xs uppercase tracking-widest font-display bg-brand-blue-deep/5 px-3 py-1 rounded-full">
              Corporate Insights
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight leading-none pt-1">
              Latest Technology & Growth Insights
            </h2>
            <p className="text-slate-500 text-sm max-w-xl font-normal leading-relaxed">
              Actionable digital intelligence and corporate strategies composed directly by our field instructors.
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={() => {
              setCurrentPage('blog');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            id="view_all_insights_btn"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue-deep hover:text-brand-green transition-colors cursor-pointer"
          >
            View All Blog Articles <ArrowRight size={16} />
          </motion.button>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8" 
          id="homepage_blog_grid"
        >
          {BLOG_POSTS.map((post, idx) => (
            <motion.article 
              variants={articleVariants}
              whileHover={{ y: -5 }}
              key={post.title}
              id={`blog_article_${idx}`}
              className="bg-white rounded-3xl border border-slate-100/80 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group text-left"
            >
              <div>
                <div className="aspect-video w-full overflow-hidden bg-slate-100 relative">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    referrerPolicy="no-referrer"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <span className="absolute top-3 left-3 bg-brand-green text-brand-dark text-[10px] font-bold uppercase px-3 py-1 rounded-full font-mono">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 sm:p-7 space-y-3">
                  <div className="flex items-center gap-3 text-slate-400 text-xs font-mono font-medium">
                    <div className="flex items-center gap-1">
                      <Clock size={13} className="text-slate-400" />
                      <span>{post.readTime}</span>
                    </div>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 leading-snug group-hover:text-brand-blue-deep transition-all">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-4 border-t border-slate-50 flex items-center justify-between text-xs font-bold">
                <div className="flex items-center gap-1.5 text-slate-500">
                  <User size={13} className="text-slate-400" />
                  <span>By {post.author.split(',')[0]}</span>
                </div>

                <button
                  onClick={() => {
                    setCurrentPage('blog');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-brand-blue-deep hover:text-brand-green transition-colors cursor-pointer"
                >
                  Read Article &rarr;
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
