// server/routes/blogRoutes.js
const express = require('express');
const {
  createBlog,
  getAllBlogs,
  getBlogBySlug,
  updateBlog,
  deleteBlog
} = require('../controllers/blogController');

const router = express.Router();

router.post('/blogs', createBlog);
router.get('/blogs', getAllBlogs);
router.get('/blogs/:slug', getBlogBySlug);
router.put('/blogs/:id', updateBlog);
router.delete('/blogs/:id', deleteBlog);

module.exports = router;