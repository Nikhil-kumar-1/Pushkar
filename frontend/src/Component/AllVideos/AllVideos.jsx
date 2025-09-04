// src/pages/AllVideos.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { backendUrl } from "../../config/config";
import { Helmet } from "react-helmet";
const AllVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Function to extract YouTube ID from various URL formats
  const getYouTubeId = (url) => {
    if (!url) return null;
    
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : null;
  };

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${backendUrl}/api/videos`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setVideos(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching videos:", err);
        setError("Failed to load videos. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <>
    <Helmet>
              <title>Video Libaray | Dr. Pushkar Anand Singh’s Surgical Insights</title>
              <meta name="description" content="Watch videos of Dr. Pushkar Anand Singh explaining surgical procedures, patient care, and success stories. Explore educational insights into laparoscopic and laser treatments in Delhi NCR." />
              <meta name="keywords" content="laparoscopic surgeon, laser surgery, gallbladder stone, hernia treatment, piles treatment, fissure surgery, best surgeon in Noida, Dr. Pushkar Anand Singh" />
              
              {/* Open Graph / Facebook */}
              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://www.drpushkaranandsingh.com/all-videos" />
              <meta property="og:title" content="Dr. Pushkar Anand Singh | Best Laparoscopic Surgeon in Noida" />
              <meta property="og:description" content="Renowned laparoscopic and laser surgeon in Noida with 16+ years of experience. Specialized in gallbladder stones, hernia, piles, and fissure treatment." />
              <meta property="og:image" content="https://www.drpushkaranandsingh.com/images/og-image.jpg" />
              
              {/* Twitter */}
              <meta property="twitter:card" content="summary_large_image" />
              <meta property="twitter:url" content="https://www.drpushkaranandsingh.com/" />
              <meta property="twitter:title" content="Dr. Pushkar Anand Singh | Best Laparoscopic Surgeon in Noida" />
              <meta property="twitter:description" content="Renowned laparoscopic and laser surgeon in Noida with 16+ years of experience. Specialized in gallbladder stones, hernia, piles, and fissure treatment." />
              <meta property="twitter:image" content="https://www.drpushkaranandsingh.com/images/twitter-image.jpg" />
              
              {/* Canonical URL */}
              <link rel="canonical" href="https://www.drpushkaranandsingh.com/all-videos" />
            </Helmet>
    <div className="bg-gray-100 min-h-screen">
      {/* ✅ Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 h-[90vh] min-h-[600px] max-h-[800px] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1683842640591-210c38313e2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8eW91dHViZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Medical Background"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-[#1A1F1C]/70"></div>
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Meet <span className="text-[#6CCF5F]">All Videos</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Explore all uploaded YouTube videos in one place. Watch informative
              content on various medical topics, surgeries, and health tips.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                onClick={() => navigate("/contact")}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(108, 207, 95, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#6CCF5F] cursor-pointer text-white px-8 py-4 rounded-full text-lg font-semibold"
              >
                Book Consultation
              </motion.button>
              <motion.button
                onClick={() => navigate("/services")}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="border-2 cursor-pointer border-white text-white px-8 py-4 rounded-full text-lg font-semibold"
              >
                View Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ✅ Videos Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Latest Videos
        </h2>
        
        {loading && (
          <p className="text-center text-gray-500">Loading videos...</p>
        )}
        
        {error && (
          <div className="text-center text-red-500 mb-6">
            {error}
          </div>
        )}
        
        {!loading && videos.length === 0 ? (
          <p className="text-center text-gray-500">No videos available</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => {
              const videoId = getYouTubeId(video.url);
              
              if (!videoId) {
                return (
                  <div key={video._id} className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
                    <div className="h-44 bg-gray-200 flex items-center justify-center">
                      <p className="text-gray-500">Invalid video URL</p>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{video.title}</h3>
                      <p className="text-sm text-gray-500">
                        Uploaded on {new Date(video.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                );
              }
              
              const embedUrl = `https://www.youtube.com/embed/${videoId}`;
              
              return (
                <div
                  key={video._id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <iframe
                    width="100%"
                    height="220"
                    src={embedUrl}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{video.title}</h3>
                    <p className="text-sm text-gray-500">
                      Uploaded on {new Date(video.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
    </>
  );
};

export default AllVideos;