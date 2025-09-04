import React, { useState, useEffect } from 'react';
import { backendUrl } from '../../config/config';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch images from API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`${backendUrl}/api/images`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
        setError("Failed to load images. Please try again later.");
        
        // Fallback to sample images if API fails
        const sampleImages = [
          {
            id: 1,
            url: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            title: "Abstract Art",
            artist: "Maria Rodriguez"
          },
          {
            id: 2,
            url: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            title: "Colorful Patterns",
            artist: "James Wilson"
          },
          {
            id: 3,
            url: "https://images.unsplash.com/photo-1543857778-c4a1a569eafe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            title: "Modern Painting",
            artist: "Sarah Johnson"
          },
          {
            id: 4,
            url: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            title: "Nature's Beauty",
            artist: "David Zhang"
          },
          {
            id: 5,
            url: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            title: "Urban Landscape",
            artist: "Lisa Thompson"
          },
          {
            id: 6,
            url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            title: "Mountain View",
            artist: "Michael Brown"
          },
          {
            id: 7,
            url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            title: "Winter Magic",
            artist: "Emma Davis"
          },
          {
            id: 8,
            url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            title: "Mountain Peaks",
            artist: "Robert Miller"
          }
        ];
        setImages(sampleImages);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <>
    <Helmet>
              <title>Gallery | Dr. Pushkar Anand Singh’s Surgical Practice & Events</title>
              <meta name="description" content="View the gallery of Dr. Pushkar Anand Singh showcasing patient care, surgical practice, achievements, and events. Explore moments reflecting his expertise and compassionate medical journey." />
              <meta name="keywords" content="laparoscopic surgeon, laser surgery, gallbladder stone, hernia treatment, piles treatment, fissure surgery, best surgeon in Noida, Dr. Pushkar Anand Singh" />
              
              {/* Open Graph / Facebook */}
              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://www.drpushkaranandsingh.com/gallery" />
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
              <link rel="canonical" href="https://www.drpushkaranandsingh.com/gallery" />
            </Helmet>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 h-[90vh] min-h-[600px] max-h-[800px] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1625134673337-519d4d10b313?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Surgical Background"
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
              Meet{" "}
              <span className="text-[#6CCF5F]">Dr. Pushkar Anand Singh</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Explore Our Surgical Gallery – Showcasing Successful Treatments & Patient Care.
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

        {/* Scrolling Indicator */}
        <motion.div
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
          onClick={() => {
            const nextSection = document.getElementById("gallery-content");
            nextSection?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 10L12 15L17 10"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <div id="gallery-content" className="container px-4 py-12 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Surgical Gallery</h2>
          <p className="mt-2 text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing the expertise and successful treatments by Dr. Pushkar Anand Singh
          </p>
        </motion.div>

        {error && (
          <div className="flex justify-center mt-8">
            <div className="px-4 py-3 text-red-700 bg-red-100 rounded-lg max-w-md">
              {error}
            </div>
          </div>
        )}

        {loading ? (
          <div className="flex flex-col items-center justify-center mt-12">
            <div className="w-16 h-16 border-4 border-t-4 border-gray-200 rounded-full border-t-[#6CCF5F] animate-spin mb-4"></div>
            <p className="text-gray-600">Loading gallery images...</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {images.map((image, index) => (
                <motion.div 
                  key={image.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="overflow-hidden transition-all duration-300 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="relative h-64 overflow-hidden group">
                    <img 
                      src={image.url} 
                      alt={image.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-white">
                        <h3 className="font-semibold text-lg">{image.title}</h3>
                        <p className="text-sm text-gray-200">{image.artist}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 truncate">{image.title}</h3>
                    <p className="text-sm text-gray-600 truncate">{image.artist}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Load More Button */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center mt-16"
            >
              <button className="px-8 py-3 font-semibold text-white bg-[#6CCF5F] rounded-lg hover:bg-[#5cbf50] transition-colors duration-300 flex items-center shadow-md hover:shadow-lg">
                <span>View More Cases</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </motion.div>
          </>
        )}
      </div>

     
      
    </div>
    </>
  );
};

export default Gallery;