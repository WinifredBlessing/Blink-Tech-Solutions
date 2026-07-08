import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';
import { PageId, ProjectItem } from '../../types';
import { GALLERY_ITEMS } from '../../data';

interface GalleryPreviewSectionProps {
  setCurrentPage: (page: PageId) => void;
}

export function GalleryPreviewSection({ setCurrentPage }: GalleryPreviewSectionProps) {
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'event' | 'workshop' | 'project' | 'community'>('all');

  const filteredGallery = galleryFilter === 'all' 
    ? GALLERY_ITEMS.slice(0, 3) 
    : GALLERY_ITEMS.filter((item: ProjectItem) => item.category === galleryFilter).slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="py-24 md:py-32" id="section_gallery_preview">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16 text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <span className="text-brand-blue-vibrant font-extrabold text-xs uppercase tracking-widest font-display bg-brand-blue-deep/5 px-3 py-1 rounded-full">
              Social Records
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight leading-none pt-1">
              Projects and Engagement Records
            </h2>
            <p className="text-slate-500 text-sm max-w-xl font-normal leading-relaxed">
              Witness our team inside classroom settings, corporate boardrooms, and academic competitive tournaments.
            </p>
          </motion.div>

          {/* In-place Filter buttons */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-2" 
            id="gallery_filters"
          >
            {(['all', 'event', 'workshop', 'project', 'community'] as const).map(filter => (
              <button
                key={filter}
                onClick={() => setGalleryFilter(filter)}
                id={`gallery_filter_${filter}`}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl border transition-all duration-300 cursor-pointer ${
                  galleryFilter === filter 
                    ? 'bg-brand-blue-deep text-white border-brand-blue-deep shadow-md' 
                    : 'bg-white text-slate-500 border-slate-100 hover:border-slate-300'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          key={galleryFilter} // Re-animate on filter change
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
          id="homepage_gallery_grid"
        >
          {filteredGallery.map((item, idx) => (
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5 }}
              key={item.title}
              id={`gallery_item_${idx}`}
              className="bg-white rounded-3xl border border-slate-100/80 overflow-hidden relative group shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    referrerPolicy="no-referrer"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <span className="absolute top-3 left-3 bg-slate-900/85 text-white text-[9px] font-extrabold uppercase px-3 py-1 rounded-full backdrop-blur-md border border-white/10 tracking-wider">
                    {item.category}
                  </span>
                  <span className="absolute bottom-3 right-3 bg-brand-green text-brand-dark text-[10px] font-bold py-1 px-2.5 rounded-lg font-mono">
                    {item.tag}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono font-medium">
                    <Calendar size={13} className="text-slate-400" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 tracking-tight group-hover:text-brand-blue-deep transition-all leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-4 border-t border-slate-50 mt-auto">
                <button
                  onClick={() => {
                    setCurrentPage('projects');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex items-center gap-1.5 text-xs font-bold text-brand-blue-deep hover:text-brand-green select-none transition-colors cursor-pointer"
                >
                  Examine Project Records <ArrowRight size={13} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-12 text-center"
        >
          <button
            onClick={() => {
              setCurrentPage('projects');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            id="view_full_gallery_btn"
            className="px-6 py-3.5 border border-slate-200 text-slate-600 hover:text-slate-950 hover:border-slate-400 font-bold text-xs sm:text-sm rounded-xl transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
          >
            View Full Gallery & Project Catalog
          </button>
        </motion.div>

      </div>
    </section>
  );
}
