const express = require('express');
const router = express.Router();
const {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse
} = require('../controllers/courseController');
const { getLessonsByCourseId } = require('../controllers/lessonController');
const { protectAdmin } = require('../middleware/authMiddleware');

// Public routes
router.get('/', getCourses);
router.get('/:id', getCourseById);
router.get('/:courseId/lessons', getLessonsByCourseId);

// Admin protected routes
router.post('/', protectAdmin, createCourse);
router.put('/:id', protectAdmin, updateCourse);
router.delete('/:id', protectAdmin, deleteCourse);

module.exports = router;
