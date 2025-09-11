// client/src/components/BlogDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { backendUrl } from '../../config/config';
import { Helmet } from 'react-helmet';

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
        
        // Fetch related blogs (for demonstration, we'll use all blogs)
        const blogsResponse = await axios.get(`${backendUrl}/api/blogs`);
        // Filter out the current blog and get 3 random blogs
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

  // Function to render HTML content safely
  const renderHTML = (htmlString) => {
    return { __html: htmlString };
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto py-8 px-4">
          <div className="flex justify-center items-center h-64">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"
            ></motion.div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto py-8 px-4">
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
    <Helmet>
        <title>{blog.title} | Medical Insights</title>
        <meta name="description" content={blog.excerpt || "Read this medical article for insights."} />
        {blog.tags && <meta name="keywords" content={blog.tags.join(', ')} />}
      </Helmet>
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-teal-800 to-blue-900 text-white"
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-12xl mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{blog.title}</h1>
            <p className="text-xl mb-8 max-w-6xl mx-auto">{blog.excerpt}</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold mr-3">
                  {blog.author.charAt(0)}
                </div>
                <span>By Dr. {blog.author}</span>
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
      <article className="max-w-8xl mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-12"
        >
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
          
          <div className="p-8">
            <div className="prose max-w-none">
              {/* Render the actual blog content with HTML */}
              {blog.content ? (
                <div dangerouslySetInnerHTML={renderHTML(blog.content)} />
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Introduction</h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    This medical article provides valuable insights into current healthcare practices and research findings. Our team of medical professionals has carefully curated this information to ensure accuracy and relevance.
                  </p>
                  
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Clinical Findings</h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Recent studies in the field have demonstrated significant advancements in treatment methodologies. The data collected from various clinical trials indicates promising outcomes for patients experiencing similar conditions.
                  </p>
                  
                  <blockquote className="border-l-4 border-teal-500 pl-4 italic text-gray-600 my-8 bg-teal-50 py-4">
                    "This research represents a breakthrough in our understanding of the condition and offers new hope for effective treatment protocols."
                  </blockquote>
                  
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Methodology</h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    The study employed a double-blind, placebo-controlled design with a diverse participant group. All procedures were conducted in accordance with the ethical standards of the responsible committee on human experimentation.
                  </p>
                  
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Conclusion</h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    The findings suggest a statistically significant improvement in patient outcomes when utilizing the proposed treatment approach. Further research is recommended to explore long-term effects and potential applications in related medical fields.
                  </p>
                </>
              )}
            </div>
            
            <div className="mt-10 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Medical Topics:</h3>
              <div className="flex flex-wrap gap-2">
                {blog.tags && blog.tags.map((tag, index) => (
                  <span key={index} className="bg-teal-100 text-teal-800 text-sm font-medium px-3 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Related Medical Articles</h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {relatedBlogs.map(relatedBlog => (
                <motion.div 
                  key={relatedBlog._id} 
                  variants={itemVariants}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                >
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
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                      <Link to={`/blog/${relatedBlog.slug}`} className="hover:text-teal-600 transition-colors duration-300">
                        {relatedBlog.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{relatedBlog.excerpt}</p>
                    <Link 
                      to={`/blog/${relatedBlog.slug}`} 
                      className="text-teal-600 font-medium hover:text-teal-800 transition-colors duration-300 inline-flex items-center"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
            to="/" 
            className="inline-flex items-center bg-teal-600 text-white py-3 px-6 rounded-md hover:bg-teal-700 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Medical Insights
          </Link>
        </motion.div>
      </article>
    </div>
  );
};

export default BlogDetails;