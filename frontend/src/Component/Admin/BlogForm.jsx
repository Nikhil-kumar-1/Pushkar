// client/src/components/BlogForm.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { backendUrl } from '../../config/config';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import { motion } from 'framer-motion';

// Toolbar component for the editor
const EditorToolbar = ({ editor }) => {
  if (!editor) return null;

  const addColor = (color) => {
    editor.chain().focus().setColor(color).run();
  };

  const highlightText = (color) => {
    editor.chain().focus().setHighlight({ color }).run();
  };

  return (
    <div className="flex flex-wrap gap-1 p-3 border-b border-gray-300 bg-gray-50 rounded-t-md">
      {/* Text formatting */}
      <button
        type="button" // ✅ Add type="button" to prevent form submission
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-2 rounded ${editor.isActive('bold') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
        title="Bold"
      >
        <strong>B</strong>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-2 rounded ${editor.isActive('italic') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
        title="Italic"
      >
        <em>I</em>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`p-2 rounded ${editor.isActive('underline') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
        title="Underline"
      >
        <u>U</u>
      </button>
      
      <div className="w-px h-6 bg-gray-300 mx-1"></div>
      
      {/* Headings */}
      <button
        type="button"
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`p-2 rounded ${editor.isActive('paragraph') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
        title="Paragraph"
      >
        ¶
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`p-2 rounded ${editor.isActive('heading', { level: 1 }) ? 'bg-blue-100 text-blue-600 font-bold' : 'hover:bg-gray-100'}`}
        title="Heading 1"
      >
        H1
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`p-2 rounded ${editor.isActive('heading', { level: 2 }) ? 'bg-blue-100 text-blue-600 font-bold' : 'hover:bg-gray-100'}`}
        title="Heading 2"
      >
        H2
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`p-2 rounded ${editor.isActive('heading', { level: 3 }) ? 'bg-blue-100 text-blue-600 font-bold' : 'hover:bg-gray-100'}`}
        title="Heading 3"
      >
        H3
      </button>
      
      <div className="w-px h-6 bg-gray-300 mx-1"></div>
      
      {/* Lists */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-2 rounded ${editor.isActive('bulletList') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
        title="Bullet List"
      >
        <span>• List</span>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-2 rounded ${editor.isActive('orderedList') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
        title="Numbered List"
      >
        <span>1. List</span>
      </button>
      
      <div className="w-px h-6 bg-gray-300 mx-1"></div>
      
      {/* Text Alignment */}
      <button
        type="button"
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        className={`p-2 rounded ${editor.isActive({ textAlign: 'left' }) ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
        title="Align Left"
      >
        ≡
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        className={`p-2 rounded ${editor.isActive({ textAlign: 'center' }) ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
        title="Align Center"
      >
        ≡
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        className={`p-2 rounded ${editor.isActive({ textAlign: 'right' }) ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
        title="Align Right"
      >
        ≡
      </button>
      
      <div className="w-px h-6 bg-gray-300 mx-1"></div>
      
      {/* Text Colors */}
      <div className="relative group">
        <button type="button" className="p-2 rounded hover:bg-gray-100" title="Text Color">
          A
        </button>
        <div className="absolute hidden group-hover:block z-10 bg-white shadow-lg rounded-md p-2 mt-1">
          <div className="grid grid-cols-4 gap-1">
            {['#000000', '#dc2626', '#2563eb', '#059669', '#ea580c', '#7c3aed', '#db2777'].map(color => (
              <button
                type="button"
                key={color}
                onClick={() => addColor(color)}
                className="w-6 h-6 rounded"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Highlight Colors */}
      <div className="relative group">
        <button type="button" className="p-2 rounded hover:bg-gray-100" title="Highlight">
          <span className="bg-yellow-300 px-1">H</span>
        </button>
        <div className="absolute hidden group-hover:block z-10 bg-white shadow-lg rounded-md p-2 mt-1">
          <div className="grid grid-cols-4 gap-1">
            {['#fef08a', '#bbf7d0', '#bfdbfe', '#fecaca', '#ddd6fe', '#fbcfe8', '#fed7aa'].map(color => (
              <button
                type="button"
                key={color}
                onClick={() => highlightText(color)}
                className="w-6 h-6 rounded"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="w-px h-6 bg-gray-300 mx-1"></div>
      
      {/* Other controls */}
      <button
        type="button"
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className="p-2 rounded hover:bg-gray-100"
        title="Line Break"
      >
        ↵
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().undo().run()}
        className="p-2 rounded hover:bg-gray-100"
        title="Undo"
      >
        ↶
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().redo().run()}
        className="p-2 rounded hover:bg-gray-100"
        title="Redo"
      >
        ↷
      </button>
    </div>
  );
};

// Enhanced CSS for proper spacing and formatting
const editorStyles = `
  .ProseMirror {
    padding: 1.5rem;
    min-height: 400px;
    outline: none;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 16px;
    line-height: 1.7;
    color: #374151;
    white-space: pre-wrap !important; /* ✅ Changed to pre-wrap for better spacing */
    word-spacing: normal !important;
    letter-spacing: normal !important;
    word-break: break-word !important;
  }

  /* Reset all margins and use proper spacing */
  .ProseMirror > * {
    margin: 0;
    white-space: pre-wrap !important; /* ✅ Important fix for spacing */
    word-spacing: normal !important;
    letter-spacing: normal !important;
  }

  /* Proper spacing between ALL blocks */
  .ProseMirror > * + * {
    margin-top: 1em !important;
    margin-bottom: 0 !important;
  }

  /* Headings with proper spacing */
  .ProseMirror h1 {
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 1.2;
    color: #111827;
    margin-top: 2rem !important;
    margin-bottom: 1rem !important;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #e5e7eb;
    white-space: pre-wrap !important;
  }

  .ProseMirror h2 {
    font-size: 1.875rem;
    font-weight: 600;
    line-height: 1.3;
    color: #111827;
    margin-top: 1.75rem !important;
    margin-bottom: 0.875rem !important;
    white-space: pre-wrap !important;
  }

  .ProseMirror h3 {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.4;
    color: #111827;
    margin-top: 1.5rem !important;
    margin-bottom: 0.75rem !important;
    white-space: pre-wrap !important;
  }

  /* Paragraphs with proper line height and spacing */
  .ProseMirror p {
    margin-bottom: 1.25em !important;
    line-height: 1.7 !important;
    text-align: left;
    word-spacing: normal !important;
    letter-spacing: normal !important;
    white-space: pre-wrap !important; /* ✅ Key fix for paragraph spacing */
    font-size: 16px;
    word-break: break-word !important;
  }

  /* Ensure proper text rendering for all text elements */
  .ProseMirror p, 
  .ProseMirror li, 
  .ProseMirror span,
  .ProseMirror div {
    word-spacing: normal !important;
    letter-spacing: normal !important;
    white-space: pre-wrap !important; /* ✅ Important for all text elements */
    line-height: 1.7 !important;
    word-break: break-word !important;
  }

  /* Lists with proper indentation and spacing */
  .ProseMirror ul, 
  .ProseMirror ol {
    margin: 1.25em 0 !important;
    padding-left: 1.625rem;
    white-space: normal;
  }

  .ProseMirror ul {
    list-style-type: disc;
  }

  .ProseMirror ol {
    list-style-type: decimal;
  }

  .ProseMirror li {
    margin: 0.5em 0 !important;
    line-height: 1.6;
    word-spacing: normal;
    letter-spacing: normal;
    white-space: pre-wrap !important;
    word-break: break-word !important;
  }

  .ProseMirror li p {
    margin: 0.5em 0 !important;
  }

  /* Blockquotes */
  .ProseMirror blockquote {
    border-left: 4px solid #3b82f6;
    padding: 1.25rem 1.5rem;
    margin: 1.5rem 0 !important;
    background-color: #f8fafc;
    border-radius: 0 0.5rem 0.5rem 0;
    font-style: italic;
    color: #4b5563;
    white-space: pre-wrap !important;
  }

  .ProseMirror blockquote p {
    margin: 0 !important;
    line-height: 1.6 !important;
    white-space: pre-wrap !important;
  }

  /* Code blocks */
  .ProseMirror code {
    background-color: #f3f4f6;
    padding: 0.2em 0.4em;
    border-radius: 0.25rem;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 0.875em;
    color: #dc2626;
    white-space: pre-wrap !important;
    word-break: break-word !important;
  }

  .ProseMirror pre {
    background-color: #1f2937;
    color: #f9fafb;
    padding: 1.25rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    margin: 1.5rem 0 !important;
    line-height: 1.5;
    white-space: pre-wrap !important;
    word-break: break-word !important;
  }

  .ProseMirror pre code {
    background-color: transparent;
    padding: 0;
    border-radius: 0;
    color: inherit;
    font-size: inherit;
    white-space: pre-wrap !important;
  }

  /* Images */
  .ProseMirror img {
    max-width: 100%;
    height: auto;
    border-radius: 0.75rem;
    margin: 2rem auto !important;
    display: block;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  /* Links */
  .ProseMirror a {
    color: #2563eb;
    text-decoration: underline;
    text-underline-offset: 2px;
    word-spacing: normal;
    white-space: pre-wrap !important;
  }

  .ProseMirror a:hover {
    color: #1d4ed8;
  }

  /* Highlight */
  .ProseMirror mark {
    background-color: #fef08a;
    padding: 0.1em 0.2em;
    border-radius: 0.25rem;
    word-spacing: normal;
    white-space: pre-wrap !important;
  }

  /* Text alignment */
  .ProseMirror .text-left {
    text-align: left;
  }

  .ProseMirror .text-center {
    text-align: center;
  }

  .ProseMirror .text-right {
    text-align: right;
  }

  /* Placeholder styling */
  .ProseMirror .is-editor-empty:first-child::before {
    content: "Start writing your medical article here...";
    color: #9ca3af;
    float: left;
    height: 0;
    pointer-events: none;
    white-space: normal;
  }

  /* Focus state */
  .ProseMirror:focus {
    background-color: #fafafa;
  }

  /* Selection styling */
  .ProseMirror *::selection {
    background-color: #dbeafe;
  }

  /* Horizontal rule */
  .ProseMirror hr {
    border: none;
    border-top: 2px solid #e5e7eb;
    margin: 2rem 0 !important;
  }

  /* Table styling */
  .ProseMirror table {
    border-collapse: collapse;
    margin: 1rem 0 !important;
    width: 100%;
    white-space: normal;
  }

  .ProseMirror table td,
  .ProseMirror table th {
    border: 1px solid #e5e7eb;
    padding: 0.75rem;
    text-align: left;
    word-spacing: normal;
    white-space: pre-wrap !important;
  }

  .ProseMirror table th {
    background-color: #f9fafb;
    font-weight: 600;
  }

  /* Specific paragraph styling for better spacing */
  .editor-paragraph {
    margin-bottom: 1.25em !important;
    line-height: 1.7 !important;
    word-spacing: normal !important;
    letter-spacing: normal !important;
    white-space: pre-wrap !important; /* ✅ Important fix */
    word-break: break-word !important;
  }

  /* Force normal spacing for all text */
  .ProseMirror * {
    white-space: pre-wrap !important; /* ✅ Changed to pre-wrap */
    word-spacing: normal !important;
    letter-spacing: normal !important;
    word-break: break-word !important;
  }

  /* Fix for empty paragraphs and spacing */
  .ProseMirror p:empty::before {
    content: "\\00a0"; /* Non-breaking space */
    color: transparent;
  }
`;

const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    featuredImage: '',
    metaTitle: '',
    metaDescription: '',
    keywords: '',
    tags: '',
    author: ''
  });

  const [editingId, setEditingId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  // Enhanced TipTap editor configuration with better paste handling
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
        paragraph: {
          HTMLAttributes: {
            class: 'editor-paragraph',
          },
        },
      }),
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
        alignments: ['left', 'center', 'right'],
      }),
    ],
    content: formData.content,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setFormData(prev => ({ ...prev, content: html }));
    },
    editorProps: {
      attributes: {
        class: 'prose prose-lg max-w-none focus:outline-none min-h-64',
        style: 'min-height: 400px;',
        spellcheck: 'false',
      },
      handleDOMEvents: {
        // ✅ Remove keydown handler that was causing issues
        paste: (view, event) => {
          // Let TipTap handle paste naturally
          return false;
        },
      },
      transformPastedHTML(html) {
        // ✅ Better HTML cleaning that preserves spaces
        return html
          .replace(/<p><br><\/p>/gi, '') // Remove empty paragraphs
          .replace(/&nbsp;/gi, ' ') // Convert non-breaking spaces to normal spaces
          .replace(/\s+/g, ' ') // Normalize multiple spaces
          .replace(/style="[^"]*"/gi, '') // Remove inline styles
          .replace(/class="[^"]*"/gi, '') // Remove classes
          .trim();
      },
    },
    immediatelyRender: false,
  });

  // Update editor content when formData.content changes (for editing)
  useEffect(() => {
    if (editor && formData.content && formData.content !== editor.getHTML()) {
      editor.commands.setContent(formData.content);
    }
  }, [formData.content, editor]);

  // Fetch existing blogs
  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`${backendUrl}/api/blogs`);
      setBlogs(res.data.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Ensure content is properly formatted
      let finalContent = formData.content;
      if (editor) {
        finalContent = editor.getHTML();
        
        // Clean up the HTML content but preserve meaningful spaces
        finalContent = finalContent
          .replace(/style="[^"]*"/gi, '')
          .replace(/class="[^"]*"/gi, '')
          .replace(/&nbsp;/g, ' ') // Keep single spaces
          .replace(/\s+/g, ' ') // Normalize multiple spaces to single space
          .trim();
      }

      const payload = {
        ...formData,
        content: finalContent,
        keywords: formData.keywords.split(',').map(k => k.trim()).filter(k => k),
        tags: formData.tags.split(',').map(t => t.trim()).filter(t => t),
        isPublished: true
      };

      if (editingId) {
        await axios.put(`${backendUrl}/api/blogs/${editingId}`, payload);
        setMessage({ text: 'Medical article updated successfully!', type: 'success' });
      } else {
        await axios.post(`${backendUrl}/api/blogs`, payload);
        setMessage({ text: 'Medical article published successfully!', type: 'success' });
      }

      // Reset form
      setFormData({
        title: '',
        excerpt: '',
        content: '',
        featuredImage: '',
        metaTitle: '',
        metaDescription: '',
        keywords: '',
        tags: '',
        author: ''
      });
      
      setEditingId(null);
      if (editor) {
        editor.commands.clearContent(true);
      }
      fetchBlogs();

      setTimeout(() => {
        setMessage({ text: '', type: '' });
      }, 3000);

    } catch (error) {
      setMessage({ 
        text: `Error ${editingId ? 'updating' : 'creating'} medical article: ${error.response?.data?.message || error.message}`, 
        type: 'error' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this medical article?')) return;

    try {
      await axios.delete(`${backendUrl}/api/blogs/${id}`);
      setBlogs(blogs.filter(blog => blog._id !== id));
      setMessage({ text: 'Medical article deleted successfully!', type: 'success' });
      
      setTimeout(() => {
        setMessage({ text: '', type: '' });
      }, 3000);
    } catch (error) {
      setMessage({ text: 'Error deleting medical article: ' + error.message, type: 'error' });
    }
  };

  const handleEdit = (blog) => {
    setFormData({
      title: blog.title || '',
      excerpt: blog.excerpt || '',
      content: blog.content || '',
      featuredImage: blog.featuredImage || '',
      metaTitle: blog.metaTitle || '',
      metaDescription: blog.metaDescription || '',
      keywords: blog.keywords?.join(', ') || '',
      tags: blog.tags?.join(', ') || '',
      author: blog.author || ''
    });
    setEditingId(blog._id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEdit = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      featuredImage: '',
      metaTitle: '',
      metaDescription: '',
      keywords: '',
      tags: '',
      author: ''
    });
    setEditingId(null);
    if (editor) {
      editor.commands.clearContent(true);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <style>{editorStyles}</style>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-gray-200"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-2 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
          {editingId ? 'Edit Medical Article' : 'Create Medical Article'}
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          {editingId ? 'Update your medical article content' : 'Write a new medical article for your blog'}
        </p>

        {message.text && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-6 p-4 rounded-lg ${message.type === 'success' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-100 text-red-700 border border-red-200'}`}
          >
            {message.text}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-3">Article Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                autoComplete="off"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-lg"
                placeholder="Enter article title"
              />
            </div>

            {/* Author */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Author *</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                required
                autoComplete="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Author name"
              />
            </div>

            {/* Featured Image */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Featured Image URL *</label>
              <input
                type="url"
                name="featuredImage"
                value={formData.featuredImage}
                onChange={handleChange}
                required
                autoComplete="off"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Meta Title */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Meta Title *</label>
              <input
                type="text"
                name="metaTitle"
                value={formData.metaTitle}
                onChange={handleChange}
                required
                autoComplete="off"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="SEO meta title"
              />
            </div>

            {/* Keywords */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Keywords (comma separated)</label>
              <input
                type="text"
                name="keywords"
                value={formData.keywords}
                onChange={handleChange}
                autoComplete="off"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="keyword1, keyword2, keyword3"
              />
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Medical Topics (comma separated)</label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                autoComplete="off"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="cardiology, diabetes, surgery"
              />
            </div>

            {/* Excerpt */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-3">Excerpt *</label>
              <textarea
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                required
                rows="4"
                autoComplete="off"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Brief summary of the article"
              />
            </div>

            {/* Meta Description */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-3">Meta Description *</label>
              <textarea
                name="metaDescription"
                value={formData.metaDescription}
                onChange={handleChange}
                required
                rows="4"
                autoComplete="off"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="SEO meta description"
              />
            </div>
          </div>

          {/* Content Editor */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Medical Content *</label>
            <div className="border-2 border-gray-300 rounded-lg mb-4 overflow-hidden shadow-sm hover:border-teal-400 transition-colors">
              <EditorToolbar editor={editor} />
              <div className="min-h-64 overflow-auto bg-white border-t-0">
                {editor && <EditorContent editor={editor} />}
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Use the toolbar to format your content. Proper spacing, headings, and formatting will be preserved.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-6 border-t border-gray-200">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-teal-600 to-blue-600 text-white py-4 px-8 rounded-lg hover:from-teal-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-teal-500 disabled:opacity-50 transition-all duration-200 shadow-lg text-lg font-semibold"
            >
              {isSubmitting 
                ? (editingId ? 'Updating...' : 'Publishing...') 
                : (editingId ? 'Update Medical Article' : 'Publish Medical Article')
              }
            </button>
            
            {editingId && (
              <button
                type="button" // ✅ Important: type="button" to prevent form submission
                onClick={cancelEdit}
                className="bg-gray-500 text-white py-4 px-8 rounded-lg hover:bg-gray-600 transition-colors duration-200 shadow-lg text-lg font-semibold"
              >
                Cancel Edit
              </button>
            )}
          </div>
        </form>
      </motion.div>

      {/* Blog List */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">Existing Medical Articles</h2>
        {blogs.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-xl">
            <p className="text-gray-500 text-lg">No medical articles yet.</p>
            <p className="text-gray-400 mt-2">Create your first article using the form above.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {blogs.map(blog => (
              <div key={blog._id} className="p-6 border-2 border-gray-200 rounded-xl flex justify-between items-center bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:border-teal-300">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-teal-800 mb-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-3">By {blog.author}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {blog.tags && blog.tags.slice(0, 4).map((tag, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm">
                    Published: {new Date(blog.createdAt).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
                <div className="flex gap-3 ml-4">
                  <button
                    type="button" // ✅ Important: type="button"
                    onClick={() => handleEdit(blog)}
                    className="bg-teal-500 text-white px-5 py-2.5 rounded-lg hover:bg-teal-600 transition-colors shadow-md font-medium"
                  >
                    Edit
                  </button>
                  <button
                    type="button" // ✅ Important: type="button"
                    onClick={() => handleDelete(blog._id)}
                    className="bg-red-500 text-white px-5 py-2.5 rounded-lg hover:bg-red-600 transition-colors shadow-md font-medium"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default BlogForm;