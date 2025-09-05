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
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-2 rounded ${editor.isActive('bold') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
        title="Bold"
      >
        <strong>B</strong>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-2 rounded ${editor.isActive('italic') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
        title="Italic"
      >
        <em>I</em>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`p-2 rounded ${editor.isActive('underline') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
        title="Underline"
      >
        <u>U</u>
      </button>
      
      <div className="w-px h-6 bg-gray-300 mx-1"></div>
      
      {/* Headings */}
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`p-2 rounded ${editor.isActive('paragraph') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
        title="Paragraph"
      >
        ¶
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`p-2 rounded ${editor.isActive('heading', { level: 1 }) ? 'bg-blue-100 text-blue-600 font-bold' : 'hover:bg-gray-100'}`}
        title="Heading 1"
      >
        H1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`p-2 rounded ${editor.isActive('heading', { level: 2 }) ? 'bg-blue-100 text-blue-600 font-bold' : 'hover:bg-gray-100'}`}
        title="Heading 2"
      >
        H2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`p-2 rounded ${editor.isActive('heading', { level: 3 }) ? 'bg-blue-100 text-blue-600 font-bold' : 'hover:bg-gray-100'}`}
        title="Heading 3"
      >
        H3
      </button>
      
      <div className="w-px h-6 bg-gray-300 mx-1"></div>
      
      {/* Lists */}
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-2 rounded ${editor.isActive('bulletList') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
        title="Bullet List"
      >
        <span>• List</span>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-2 rounded ${editor.isActive('orderedList') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
        title="Numbered List"
      >
        <span>1. List</span>
      </button>
      
      <div className="w-px h-6 bg-gray-300 mx-1"></div>
      
      {/* Text Alignment */}
      <button
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        className={`p-2 rounded ${editor.isActive({ textAlign: 'left' }) ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
        title="Align Left"
      >
        ≡
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        className={`p-2 rounded ${editor.isActive({ textAlign: 'center' }) ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
        title="Align Center"
      >
        ≡
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        className={`p-2 rounded ${editor.isActive({ textAlign: 'right' }) ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
        title="Align Right"
      >
        ≡
      </button>
      
      <div className="w-px h-6 bg-gray-300 mx-1"></div>
      
      {/* Text Colors */}
      <div className="relative group">
        <button className="p-2 rounded hover:bg-gray-100" title="Text Color">
          A
        </button>
        <div className="absolute hidden group-hover:block z-10 bg-white shadow-lg rounded-md p-2 mt-1">
          <div className="grid grid-cols-4 gap-1">
            {['#000000', '#dc2626', '#2563eb', '#059669', '#ea580c', '#7c3aed', '#db2777'].map(color => (
              <button
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
        <button className="p-2 rounded hover:bg-gray-100" title="Highlight">
          <span className="bg-yellow-300 px-1">H</span>
        </button>
        <div className="absolute hidden group-hover:block z-10 bg-white shadow-lg rounded-md p-2 mt-1">
          <div className="grid grid-cols-4 gap-1">
            {['#fef08a', '#bbf7d0', '#bfdbfe', '#fecaca', '#ddd6fe', '#fbcfe8', '#fed7aa'].map(color => (
              <button
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
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className="p-2 rounded hover:bg-gray-100"
        title="Line Break"
      >
        ↵
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        className="p-2 rounded hover:bg-gray-100"
        title="Undo"
      >
        ↶
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        className="p-2 rounded hover:bg-gray-100"
        title="Redo"
      >
        ↷
      </button>
    </div>
  );
};

// Custom CSS for the editor content with proper spacing
const editorStyles = `
  .ProseMirror {
    padding: 1rem;
    min-height: 300px;
    outline: none;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  .ProseMirror h1 {
    font-size: 2.25rem;
    font-weight: bold;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    color: #1f2937;
    line-height: 1.2;
  }

  .ProseMirror h2 {
    font-size: 1.875rem;
    font-weight: bold;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    color: #1f2937;
    line-height: 1.3;
  }

  .ProseMirror h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 1.25rem;
    margin-bottom: 0.75rem;
    color: #1f2937;
    line-height: 1.4;
  }

  .ProseMirror p {
    margin-bottom: 1rem;
    line-height: 1.7;
    white-space: pre-wrap;
  }

  .ProseMirror ul, .ProseMirror ol {
    padding-left: 1.625rem;
    margin-bottom: 1rem;
  }

  .ProseMirror ul {
    list-style-type: disc;
  }

  .ProseMirror ol {
    list-style-type: decimal;
  }

  .ProseMirror li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }

  .ProseMirror blockquote {
    border-left: 4px solid #3b82f6;
    padding-left: 1rem;
    margin: 1.5rem 0;
    font-style: italic;
    color: #4b5563;
    background-color: #f9fafb;
    padding: 1rem;
    border-radius: 0.375rem;
  }

  .ProseMirror code {
    background-color: #f3f4f6;
    padding: 0.125rem 0.375rem;
    border-radius: 0.25rem;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 0.875rem;
  }

  .ProseMirror pre {
    background-color: #1f2937;
    color: #f3f4f6;
    padding: 1rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    margin: 1.5rem 0;
    line-height: 1.5;
  }

  .ProseMirror pre code {
    background-color: transparent;
    padding: 0;
    border-radius: 0;
    color: inherit;
    font-size: inherit;
  }

  .ProseMirror img {
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
    margin: 1.5rem 0;
  }

  .ProseMirror a {
    color: #3b82f6;
    text-decoration: underline;
  }

  .ProseMirror mark {
    background-color: #fef08a;
    padding: 0.125rem 0.25rem;
    border-radius: 0.125rem;
  }

  /* Ensure proper spacing between elements */
  .ProseMirror > * + * {
    margin-top: 0.75rem;
  }

  .ProseMirror br {
    content: "";
    display: block;
    margin-top: 0.5rem;
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

  // TipTap editor with additional extensions
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        // Ensure proper paragraph handling
        paragraph: {
          HTMLAttributes: {
            class: 'my-paragraph',
          },
        },
      }),
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: formData.content,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setFormData({ ...formData, content: html });
    },
    editorProps: {
      attributes: {
        class: 'prose prose-lg max-w-none focus:outline-none',
        style: 'white-space: pre-wrap;', // Ensure spaces are preserved
      },
      handleKeyDown: (view, event) => {
        // Handle Enter key for proper spacing
        if (event.key === 'Enter') {
          // Preserve the current block type when pressing Enter
          const { state } = view;
          const { selection } = state;
          const { $from } = selection;
          
          // If we're at the end of a heading, create a paragraph below
          if ($from.parent.type.name === 'heading') {
            view.dispatch(
              state.tr.replaceSelectionWith(
                state.schema.nodes.paragraph.create()
              )
            );
            return true;
          }
        }
        return false;
      },
    },
  });

  // Update editor content when formData.content changes (for editing)
  useEffect(() => {
    if (editor && formData.content) {
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
      const payload = {
        ...formData,
        keywords: formData.keywords.split(',').map(k => k.trim()).filter(k => k),
        tags: formData.tags.split(',').map(t => t.trim()).filter(t => t),
        isPublished: true
      };

      if (editingId) {
        // Update existing blog
        await axios.put(`${backendUrl}/api/blogs/${editingId}`, payload);
        setMessage({ text: 'Medical article updated successfully!', type: 'success' });
      } else {
        // Create new blog
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
        editor.commands.setContent(''); // Clear editor
      }
      fetchBlogs(); // Refresh blog list

      // Clear message after 3 seconds
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
      
      // Clear message after 3 seconds
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
      editor.commands.setContent('');
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <style>{editorStyles}</style>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg p-6 mb-12 border border-gray-200"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-2 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text ">
          {editingId ? 'Edit Medical Article' : 'Create Medical Article'}
        </h2>
        <p className="text-gray-600 mb-6">
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

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Article Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                autoComplete="off"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Enter article title"
              />
            </div>

            {/* Author */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Author *</label>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Featured Image URL *</label>
              <input
                type="text"
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Meta Title *</label>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Keywords (comma separated)</label>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Medical Topics (comma separated)</label>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt *</label>
              <textarea
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                required
                rows="3"
                autoComplete="off"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Brief summary of the article"
              />
            </div>

            {/* Meta Description */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Meta Description *</label>
              <textarea
                name="metaDescription"
                value={formData.metaDescription}
                onChange={handleChange}
                required
                rows="3"
                autoComplete="off"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="SEO meta description"
              />
            </div>
          </div>

          {/* Content Editor */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Medical Content *</label>
            <div className="border border-gray-300 rounded-lg mb-4 overflow-hidden shadow-sm">
              <EditorToolbar editor={editor} />
              <div className="min-h-64 overflow-auto bg-white">
                {editor && <EditorContent editor={editor} />}
              </div>
            </div>
            <p className="text-sm text-gray-500">
              Use the toolbar to format your content. Headings, lists, colors, and other formatting will be preserved.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-teal-600 to-blue-600 text-white py-3 px-6 rounded-lg hover:from-teal-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-teal-500 disabled:opacity-50 transition-all duration-200 shadow-md"
            >
              {isSubmitting 
                ? (editingId ? 'Updating...' : 'Publishing...') 
                : (editingId ? 'Update Medical Article' : 'Publish Medical Article')
              }
            </button>
            
            {editingId && (
              <button
                type="button"
                onClick={cancelEdit}
                className="bg-gray-500 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors duration-200 shadow-md"
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
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">Existing Medical Articles</h2>
        {blogs.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-xl">
            <p className="text-gray-500 text-lg">No medical articles yet.</p>
            <p className="text-gray-400 mt-2">Create your first article using the form above.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {blogs.map(blog => (
              <div key={blog._id} className="p-5 border rounded-xl flex justify-between items-center bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-teal-800">{blog.title}</h3>
                  <p className="text-gray-600 text-sm">By {blog.author}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {blog.tags && blog.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-500 text-xs mt-2">
                    Published: {new Date(blog.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors shadow-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors shadow-sm"
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