const express = require('express');
const router = express.Router();
const {
  createLesson,
  deleteLesson
} = require('../controllers/lessonController');
const { protectAdmin } = require('../middleware/authMiddleware');

// Admin protected routes for lessons
router.post('/', protectAdmin, createLesson);
router.delete('/:id', protectAdmin, deleteLesson);

module.exports = router;
