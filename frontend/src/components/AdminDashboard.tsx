import React, { useEffect, useState } from 'react';
import { PageId, Course, Lesson } from '../types';
import { 
  fetchCourses, 
  createCourse, 
  deleteCourse, 
  clearAuthToken,
  createLesson,
  fetchCourseById
} from '../api';
import { motion } from 'motion/react';
import { 
  LogOut, 
  LayoutDashboard, 
  BookOpen, 
  PlusCircle, 
  Trash2, 
  ExternalLink,
  ChevronRight,
  Video
} from 'lucide-react';

export function AdminDashboard({ setCurrentPage }: { setCurrentPage: (page: PageId) => void }) {
  const [courses, setCourses] = useState<Course[]>([]);
  const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'add-course' | 'manage-lessons'>('overview');
  const [loading, setLoading] = useState(true);
  
  // Forms state
  const [newCourse, setNewCourse] = useState({ title: '', description: '', category: '', thumbnail: '', status: 'draft' as 'draft' | 'published' });
  const [selectedCourseForLessons, setSelectedCourseForLessons] = useState<string>('');
  const [newLesson, setNewLesson] = useState({ title: '', description: '', video_url: '', resource_url: '' });

  const loadCourses = async () => {
    setLoading(true);
    try {
      const data = await fetchCourses();
      setCourses(data);
    } catch (err) {
      console.error(err);
      // Might be unauthorized
      if (err instanceof Error && err.message.includes('authorized')) {
        handleLogout();
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCourses();
  }, []);

  const handleLogout = () => {
    clearAuthToken();
    setCurrentPage('admin-login');
  };

  const handleCreateCourse = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createCourse(newCourse);
      alert('Course created successfully!');
      setNewCourse({ title: '', description: '', category: '', thumbnail: '', status: 'draft' });
      loadCourses();
      setActiveTab('courses');
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleDeleteCourse = async (id: string) => {
    if (!confirm('Are you sure you want to delete this course?')) return;
    try {
      await deleteCourse(id);
      loadCourses();
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleCreateLesson = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCourseForLessons) {
      alert('Please select a course first');
      return;
    }
    try {
      await createLesson({ course_id: selectedCourseForLessons, ...newLesson });
      alert('Lesson added successfully!');
      setNewLesson({ title: '', description: '', video_url: '', resource_url: '' });
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-left flex flex-col md:flex-row" id="admin_dashboard_container">
      
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-slate-900 text-slate-300 p-6 flex flex-col shrink-0">
        <div className="mb-10">
          <h2 className="text-xl font-black font-display text-white">Academy CMS</h2>
          <span className="text-[10px] uppercase tracking-widest font-mono text-brand-green">Admin Console</span>
        </div>

        <nav className="space-y-2 flex-1">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'overview' ? 'bg-brand-blue-deep text-white' : 'hover:bg-slate-800 hover:text-white'}`}
          >
            <LayoutDashboard size={18} /> Overview
          </button>
          <button 
            onClick={() => setActiveTab('courses')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'courses' ? 'bg-brand-blue-deep text-white' : 'hover:bg-slate-800 hover:text-white'}`}
          >
            <BookOpen size={18} /> Manage Courses
          </button>
          <button 
            onClick={() => setActiveTab('add-course')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'add-course' ? 'bg-brand-blue-deep text-white' : 'hover:bg-slate-800 hover:text-white'}`}
          >
            <PlusCircle size={18} /> Create Course
          </button>
          <button 
            onClick={() => setActiveTab('manage-lessons')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'manage-lessons' ? 'bg-brand-blue-deep text-white' : 'hover:bg-slate-800 hover:text-white'}`}
          >
            <Video size={18} /> Add Lessons
          </button>
        </nav>

        <div className="pt-8 border-t border-slate-800 mt-auto space-y-2">
          <button 
            onClick={() => setCurrentPage('academy')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium hover:bg-slate-800 hover:text-white transition-all text-slate-400"
          >
            <ExternalLink size={18} /> Public Site
          </button>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium hover:bg-red-500/10 hover:text-red-400 text-slate-400 transition-all"
          >
            <LogOut size={18} /> Terminate Session
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 md:p-10 lg:p-12 overflow-y-auto max-h-screen">
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-5xl mx-auto space-y-8"
        >
          {/* TAB: Overview */}
          {activeTab === 'overview' && (
            <>
              <h1 className="text-3xl font-black font-display text-slate-900">Dashboard Overview</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Total Published</p>
                  <p className="text-4xl font-black text-slate-900">{courses.filter(c => c.status === 'published').length}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Total Drafts</p>
                  <p className="text-4xl font-black text-slate-900">{courses.filter(c => c.status === 'draft').length}</p>
                </div>
              </div>
            </>
          )}

          {/* TAB: Manage Courses */}
          {activeTab === 'courses' && (
            <>
              <div className="flex justify-between items-center">
                <h1 className="text-3xl font-black font-display text-slate-900">Manage Courses</h1>
                <button onClick={() => setActiveTab('add-course')} className="text-xs font-bold uppercase bg-brand-blue-deep text-white px-4 py-2 rounded-lg hover:bg-brand-blue-vibrant">
                  + New Course
                </button>
              </div>

              {loading ? (
                <p>Loading...</p>
              ) : (
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50 text-xs uppercase font-bold text-slate-500 border-b border-slate-200">
                      <tr>
                        <th className="px-6 py-4">Course Info</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {courses.map(course => (
                        <tr key={course.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-6 py-4">
                            <p className="font-bold text-slate-900">{course.title}</p>
                            <p className="text-xs text-slate-500">{course.category}</p>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${course.status === 'published' ? 'bg-brand-green/10 text-brand-dark' : 'bg-slate-200 text-slate-600'}`}>
                              {course.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <button onClick={() => handleDeleteCourse(course.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                              <Trash2 size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}

          {/* TAB: Add Course */}
          {activeTab === 'add-course' && (
            <>
              <h1 className="text-3xl font-black font-display text-slate-900">Create New Course</h1>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm max-w-2xl">
                <form onSubmit={handleCreateCourse} className="space-y-6">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-slate-500">Title</label>
                    <input required type="text" value={newCourse.title} onChange={e => setNewCourse({...newCourse, title: e.target.value})} className="w-full p-3 border border-slate-200 rounded-xl outline-none focus:border-brand-blue-deep" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-slate-500">Description</label>
                    <textarea required value={newCourse.description} onChange={e => setNewCourse({...newCourse, description: e.target.value})} rows={3} className="w-full p-3 border border-slate-200 rounded-xl outline-none focus:border-brand-blue-deep" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase text-slate-500">Category</label>
                      <input type="text" value={newCourse.category} onChange={e => setNewCourse({...newCourse, category: e.target.value})} className="w-full p-3 border border-slate-200 rounded-xl outline-none focus:border-brand-blue-deep" placeholder="e.g. Digital Skills" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase text-slate-500">Status</label>
                      <select value={newCourse.status} onChange={e => setNewCourse({...newCourse, status: e.target.value as any})} className="w-full p-3 border border-slate-200 rounded-xl outline-none focus:border-brand-blue-deep">
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-slate-500">Thumbnail URL</label>
                    <input type="url" value={newCourse.thumbnail} onChange={e => setNewCourse({...newCourse, thumbnail: e.target.value})} className="w-full p-3 border border-slate-200 rounded-xl outline-none focus:border-brand-blue-deep" placeholder="https://..." />
                  </div>
                  <button type="submit" className="bg-brand-blue-deep text-white px-6 py-3 rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-brand-blue-vibrant w-full">
                    Save Course Data
                  </button>
                </form>
              </div>
            </>
          )}

          {/* TAB: Add Lessons */}
          {activeTab === 'manage-lessons' && (
            <>
              <h1 className="text-3xl font-black font-display text-slate-900">Upload Course Lesson</h1>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm max-w-2xl">
                <form onSubmit={handleCreateLesson} className="space-y-6">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-slate-500">Target Course</label>
                    <select required value={selectedCourseForLessons} onChange={e => setSelectedCourseForLessons(e.target.value)} className="w-full p-3 border border-slate-200 rounded-xl outline-none focus:border-brand-blue-deep">
                      <option value="">Select a course...</option>
                      {courses.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-slate-500">Lesson Title</label>
                    <input required type="text" value={newLesson.title} onChange={e => setNewLesson({...newLesson, title: e.target.value})} className="w-full p-3 border border-slate-200 rounded-xl outline-none focus:border-brand-blue-deep" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-slate-500">Video URL (YouTube/Vimeo/etc)</label>
                    <input required type="url" value={newLesson.video_url} onChange={e => setNewLesson({...newLesson, video_url: e.target.value})} className="w-full p-3 border border-slate-200 rounded-xl outline-none focus:border-brand-blue-deep" placeholder="https://youtube.com/watch?v=..." />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-slate-500">Lesson Description</label>
                    <textarea value={newLesson.description} onChange={e => setNewLesson({...newLesson, description: e.target.value})} rows={2} className="w-full p-3 border border-slate-200 rounded-xl outline-none focus:border-brand-blue-deep" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-slate-500">Resource URL (Optional)</label>
                    <input type="url" value={newLesson.resource_url} onChange={e => setNewLesson({...newLesson, resource_url: e.target.value})} className="w-full p-3 border border-slate-200 rounded-xl outline-none focus:border-brand-blue-deep" placeholder="Google Drive / PDF link" />
                  </div>
                  <button type="submit" className="bg-brand-green text-brand-dark px-6 py-3 rounded-xl font-black uppercase tracking-wider text-xs hover:bg-green-400 w-full transition-colors">
                    Publish Lesson Module
                  </button>
                </form>
              </div>
            </>
          )}

        </motion.div>
      </div>
    </div>
  );
}
