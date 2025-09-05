// client/src/components/BlogList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { backendUrl } from '../../config/config';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [featuredPost, setFeaturedPost] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/blogs`);
        const blogData = response.data.data;
        setBlogs(blogData);

        if (blogData.length > 0) {
          setFeaturedPost(blogData[0]);
        }
      } catch (err) {
        setError('Error fetching blogs: ' + err.message);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const imageHoverVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="flex justify-center items-center h-64">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"
          ></motion.div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto py-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-100 text-red-700 p-4 rounded-md"
        >
          {error}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-12xl mx-auto  py-8 px-4 mt-20">
      {/* Featured Post */}
      {featuredPost && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16 relative rounded-xl overflow-hidden shadow-xl"
        >
          <div className="relative h-96 overflow-hidden">
            <motion.img
              src={featuredPost.featuredImage}
              alt={featuredPost.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                  Featured
                </span>
                <h1 className="text-4xl font-bold mb-4">{featuredPost.title}</h1>
                <p
                  className="text-lg mb-6 max-w-2xl"
                  dangerouslySetInnerHTML={{ __html: featuredPost.excerpt }}
                />
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-gray-300">By {featuredPost.author}</span>
                    <span className="mx-2">•</span>
                    <span className="text-gray-300">
                      {new Date(featuredPost.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="bg-white text-gray-900 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition-colors duration-300"
                  >
                    Read Article
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Latest Blog Posts */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Latest Blog Posts</h1>

      {blogs.length === 0 ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
          <p className="text-gray-500 text-lg">No blog posts yet.</p>
          <Link
            to="/login"
            className="inline-block mt-4 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Create Your First Post
          </Link>
        </motion.div>
      ) : (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {blogs.map((blog) => (
            <motion.div
              key={blog._id}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <motion.div className="h-48 overflow-hidden" variants={imageHoverVariants} whileHover="hover">
                <img src={blog.featuredImage} alt={blog.title} className="w-full h-full object-cover" />
              </motion.div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                  <Link to={`/blog/${blog.slug}`} className="hover:text-blue-600 transition-colors duration-300">
                    {blog.title}
                  </Link>
                </h2>
                <p
                  className="text-gray-600 mb-4 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: blog.excerpt }}
                />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">By {blog.author}</span>
                  <span className="text-sm text-gray-500">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <Link
                  to={`/blog/${blog.slug}`}
                  className="block mt-4 text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default BlogList;
