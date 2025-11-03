import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { backendUrl } from '../../config/config';
import { Helmet } from 'react-helmet';

// Blog content display के लिए CSS
const blogContentStyles = `
  .blog-content-container {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.8;
    color: #374151;
    font-size: 18px;
  }

  /* Reset and base styles */
  .blog-content-container * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    white-space: normal !important;
    word-spacing: normal !important;
    letter-spacing: normal !important;
  }

  /* Proper spacing between ALL elements */
  .blog-content-container > * + * {
    margin-top: 1.5em !important;
    margin-bottom: 0 !important;
  }

  /* Headings with proper spacing */
  .blog-content-container h1 {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
    color: #111827;
    margin-top: 2.5rem !important;
    margin-bottom: 1.5rem !important;
    padding-bottom: 0.75rem;
    border-bottom: 3px solid #0d9488;
  }

  .blog-content-container h2 {
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.3;
    color: #111827;
    margin-top: 2rem !important;
    margin-bottom: 1.25rem !important;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #e5e7eb;
  }

  .blog-content-container h3 {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.4;
    color: #111827;
    margin-top: 1.75rem !important;
    margin-bottom: 1rem !important;
  }

  /* Paragraphs with proper spacing */
  .blog-content-container p {
    margin-bottom: 1.5em !important;
    line-height: 1.8 !important;
    font-size: 1.125rem;
    text-align: justify;
    word-break: break-word;
  }

  /* Lists with proper indentation */
  .blog-content-container ul,
  .blog-content-container ol {
    margin: 1.5em 0 !important;
    padding-left: 2rem;
  }

  .blog-content-container ul {
    list-style-type: disc;
  }

  .blog-content-container ol {
    list-style-type: decimal;
  }

  .blog-content-container li {
    margin: 0.75em 0 !important;
    line-height: 1.7;
    font-size: 1.125rem;
  }

  .blog-content-container li p {
    margin: 0.5em 0 !important;
  }

  /* Blockquotes */
  .blog-content-container blockquote {
    border-left: 4px solid #0d9488;
    padding: 1.5rem 2rem;
    margin: 2rem 0 !important;
    background: linear-gradient(135deg, #f0fdfa 0%, #ecfdf5 100%);
    border-radius: 0 12px 12px 0;
    font-style: italic;
    color: #065f46;
    font-size: 1.25rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  .blog-content-container blockquote p {
    margin: 0 !important;
    font-size: inherit;
    color: inherit;
  }

  /* Code blocks */
  .blog-content-container code {
    background-color: #f3f4f6;
    padding: 0.25em 0.5em;
    border-radius: 6px;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 0.9em;
    color: #dc2626;
    border: 1px solid #e5e7eb;
  }

  .blog-content-container pre {
    background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
    color: #f9fafb;
    padding: 1.5rem;
    border-radius: 12px;
    overflow-x: auto;
    margin: 2rem 0 !important;
    line-height: 1.5;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  .blog-content-container pre code {
    background-color: transparent;
    padding: 0;
    border: none;
    color: inherit;
    font-size: 0.95em;
  }

  /* Images */
  .blog-content-container img {
    max-width: 100%;
    height: auto;
    border-radius: 16px;
    margin: 2.5rem auto !important;
    display: block;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border: 1px solid #e5e7eb;
  }

  /* Links */
  .blog-content-container a {
    color: #0d9488;
    text-decoration: none;
    font-weight: 500;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;
  }

  .blog-content-container a:hover {
    color: #0f766e;
    border-bottom-color: #0d9488;
  }

  /* Text formatting */
  .blog-content-container strong {
    font-weight: 700;
    color: #111827;
  }

  .blog-content-container em {
    font-style: italic;
    color: #4b5563;
  }

  .blog-content-container u {
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  /* Highlight */
  .blog-content-container mark {
    background: linear-gradient(120deg, #fef08a 0%, #fef08a 100%);
    padding: 0.1em 0.3em;
    border-radius: 4px;
    color: #854d0e;
  }

  /* Text alignment */
  .blog-content-container .text-left {
    text-align: left;
  }

  .blog-content-container .text-center {
    text-align: center;
  }

  .blog-content-container .text-right {
    text-align: right;
  }

  /* Tables */
  .blog-content-container table {
    border-collapse: collapse;
    margin: 2rem 0 !important;
    width: 100%;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    overflow: hidden;
  }

  .blog-content-container table th,
  .blog-content-container table td {
    border: 1px solid #e5e7eb;
    padding: 1rem;
    text-align: left;
  }

  .blog-content-container table th {
    background: linear-gradient(135deg, #0d9488 0%, #0f766e 100%);
    color: white;
    font-weight: 600;
    font-size: 1rem;
  }

  .blog-content-container table tr:nth-child(even) {
    background-color: #f9fafb;
  }

  .blog-content-container table tr:hover {
    background-color: #f0fdfa;
  }

  /* Horizontal rule */
  .blog-content-container hr {
    border: none;
    height: 2px;
    background: linear-gradient(90deg, transparent 0%, #0d9488 50%, transparent 100%);
    margin: 3rem 0 !important;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .blog-content-container {
      font-size: 16px;
      line-height: 1.7;
    }

    .blog-content-container h1 {
      font-size: 2rem;
      margin-top: 2rem !important;
    }

    .blog-content-container h2 {
      font-size: 1.75rem;
    }

    .blog-content-container h3 {
      font-size: 1.25rem;
    }

    .blog-content-container p {
      font-size: 1rem;
    }

    .blog-content-container blockquote {
      padding: 1rem 1.5rem;
      font-size: 1.1rem;
    }
  }
`;

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${backendUrl}/api/blogs/${slug}`);
        setBlog(response.data.data);
        
        // Fetch related blogs
        const blogsResponse = await axios.get(`${backendUrl}/api/blogs`);
        const otherBlogs = blogsResponse.data.data
          .filter(b => b.slug !== slug)
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);
        setRelatedBlogs(otherBlogs);
      } catch (error) {
        setError('Error fetching blog details: ' + error.message);
        console.error('Error fetching blog details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [slug]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageHoverVariants = {
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Function to clean and format HTML content
  const formatBlogContent = (htmlContent) => {
    if (!htmlContent) return '';
    
    return htmlContent
      .replace(/<p><br><\/p>/gi, '') // Remove empty paragraphs
      .replace(/<p>\s*<\/p>/gi, '') // Remove empty paragraphs with spaces
      .replace(/&nbsp;/gi, ' ') // Convert non-breaking spaces to normal spaces
      .replace(/\s+/g, ' ') // Normalize multiple spaces
      .trim();
  };

  if (loading) {
    return (
      <div className=" bg-gray-50">
        <div className="w-full mx-auto py-8 px-4">
          <div className="flex justify-center items-center h-64">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="rounded-full h-12 w-full border-t-2 border-b-2 border-teal-500"
            ></motion.div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="w-full mx-auto py-8 px-4">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-100 text-red-700 p-4 rounded-md"
          >
            {error}
          </motion.div>
          <Link 
            to="/" 
            className="inline-block mt-4 bg-teal-600 text-white py-2 px-6 rounded-md hover:bg-teal-700 transition-colors duration-300"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto py-8 px-4">
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Medical article not found.</p>
            <Link 
              to="/" 
              className="inline-block mt-4 bg-teal-600 text-white py-2 px-6 rounded-md hover:bg-teal-700 transition-colors duration-300"
            >
              Back to Medical Insights
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{blogContentStyles}</style>
      <Helmet>
        <title>{blog.metaTitle || blog.title} | Medical Insights</title>
        <meta name="description" content={blog.metaDescription || blog.excerpt} />
        {blog.keywords && <meta name="keywords" content={blog.keywords.join(', ')} />}
      </Helmet>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-teal-800 to-blue-900 text-white"
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {blog.title}
            </h1>
            <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
              {blog.excerpt}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-lg">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold mr-3 text-lg">
                  {blog.author ? blog.author.charAt(0).toUpperCase() : 'D'}
                </div>
                <span>By Dr. {blog.author || 'Medical Team'}</span>
              </div>
              <span className="hidden sm:block">•</span>
              <span>{new Date(blog.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Blog Content */}
      <article className="max-w-full mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12"
        >
          {/* Featured Image */}
          {blog.featuredImage && (
            <motion.div 
              className="h-96 overflow-hidden"
              variants={imageHoverVariants}
              whileHover="hover"
            >
              <img 
                src={blog.featuredImage} 
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
          
          {/* Blog Content */}
          <div className="p-8 md:p-12">
            <div className="blog-content-container">
              {blog.content ? (
                <div 
                  dangerouslySetInnerHTML={{ 
                    __html: formatBlogContent(blog.content) 
                  }}
                />
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    Content will be available soon. Our medical team is preparing this article.
                  </p>
                </div>
              )}
            </div>
            
            {/* Tags Section */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-teal-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                  Medical Topics Covered:
                </h3>
                <div className="flex flex-wrap gap-3">
                  {blog.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-gradient-to-r from-teal-100 to-blue-100 text-teal-800 text-sm font-medium px-4 py-2 rounded-full border border-teal-200 hover:shadow-md transition-shadow duration-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Related Blogs */}
        {relatedBlogs.length > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Related Medical Articles
            </h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {relatedBlogs.map(relatedBlog => (
                <motion.div 
                  key={relatedBlog._id} 
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
                  whileHover={{ y: -8 }}
                >
                  {relatedBlog.featuredImage && (
                    <motion.div 
                      className="h-48 overflow-hidden"
                      variants={imageHoverVariants}
                      whileHover="hover"
                    >
                      <img 
                        src={relatedBlog.featuredImage} 
                        alt={relatedBlog.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  )}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 leading-tight">
                      <Link 
                        to={`/blog/${relatedBlog.slug}`} 
                        className="hover:text-teal-600 transition-colors duration-300"
                      >
                        {relatedBlog.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {relatedBlog.excerpt}
                    </p>
                    <Link 
                      to={`/blog/${relatedBlog.slug}`} 
                      className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-800 transition-colors duration-300 group"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Back to Blogs Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <Link 
            to="/blogs" 
            className="inline-flex items-center bg-gradient-to-r from-teal-600 to-blue-600 text-white py-3 px-8 rounded-lg hover:from-teal-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to All Medical Articles
          </Link>
        </motion.div>
      </article>
    </div>
  );
};

export default BlogDetails;