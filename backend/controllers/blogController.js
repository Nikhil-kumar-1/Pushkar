const Blog = require('../models/Blog');

// Slug generator
const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

// Create a new blog post
exports.createBlog = async (req, res) => {
  try {
    const { title, excerpt, content, featuredImage, metaTitle, metaDescription, keywords, tags, author, isPublished } = req.body;

    if (!title || !excerpt || !content || !featuredImage || !metaTitle || !metaDescription || !author) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    const blog = new Blog({
      title,
      slug: slugify(title),
      excerpt,
      content,
      featuredImage,
      metaTitle,
      metaDescription,
      keywords: Array.isArray(keywords) ? keywords : [],
      tags: Array.isArray(tags) ? tags : [],
      author,
      isPublished: isPublished || false
    });

    await blog.save();

    res.status(201).json({
      success: true,
      data: blog
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Get all published blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ isPublished: true }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: blogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get single blog by slug
exports.getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug, isPublished: true });
    if (!blog) return res.status(404).json({ success: false, message: 'Blog post not found' });

    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update blog by ID
exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!blog) return res.status(404).json({ success: false, message: 'Blog post not found' });

    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete blog by ID
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: 'Blog post not found' });

    res.status(200).json({ success: true, message: 'Blog post deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
