const supabase = require('../config/supabase');

// @desc    Get lessons for a specific course
// @route   GET /api/courses/:courseId/lessons
// @access  Public
const getLessonsByCourseId = async (req, res) => {
  try {
    const { courseId } = req.params;

    // First check if the course exists and is published
    const { data: course, error: courseError } = await supabase
      .from('courses')
      .select('status')
      .eq('id', courseId)
      .single();

    if (courseError || !course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    if (course.status !== 'published') {
      return res.status(403).json({ message: 'Cannot access lessons for unpublished course' });
    }

    const { data, error } = await supabase
      .from('lessons')
      .select('*')
      .eq('course_id', courseId)
      .order('created_at', { ascending: true });

    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a lesson
// @route   POST /api/lessons
// @access  Private/Admin
const createLesson = async (req, res) => {
  try {
    const { course_id, title, description, video_url, resource_url } = req.body;

    if (!course_id || !title) {
      return res.status(400).json({ message: 'Course ID and Title are required' });
    }

    const { data, error } = await supabase
      .from('lessons')
      .insert([
        { course_id, title, description, video_url, resource_url }
      ])
      .select()
      .single();

    if (error) throw error;
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a lesson
// @route   DELETE /api/lessons/:id
// @access  Private/Admin
const deleteLesson = async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from('lessons')
      .delete()
      .eq('id', id);

    if (error) throw error;
    res.status(200).json({ message: 'Lesson deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getLessonsByCourseId,
  createLesson,
  deleteLesson
};
