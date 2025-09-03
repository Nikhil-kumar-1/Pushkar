import React, { useState, useEffect } from 'react';
import { backendUrl } from '../../config/config';
import { motion } from 'framer-motion';
const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
            url: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
            title: "Abstract Art",
            artist: "Maria Rodriguez"
          },
          {
            id: 2,
            url: "https://images.unsplash.com/photo-1541961017774-22349e4a1262",
            title: "Colorful Patterns",
            artist: "James Wilson"
          },
          {
            id: 3,
            url: "https://images.unsplash.com/photo-1543857778-c4a1a569eafe",
            title: "Modern Painting",
            artist: "Sarah Johnson"
          },
          {
            id: 4,
            url: "https://images.unsplash.com/photo-1515405295579-ba7b45403062",
            title: "Nature's Beauty",
            artist: "David Zhang"
          },
          {
            id: 5,
            url: "https://images.unsplash.com/photo-1513364776144-60967b0f800f",
            title: "Urban Landscape",
            artist: "Lisa Thompson"
          },
          {
            id: 6,
            url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
            title: "Mountain View",
            artist: "Michael Brown"
          },
          {
            id: 7,
            url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
            title: "Winter Magic",
            artist: "Emma Davis"
          },
          {
            id: 8,
            url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
     {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 h-[90vh] min-h-[600px] max-h-[800px] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 ">
          <img
            src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D"
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
            const nextSection = document.getElementById("about-content");
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
      <div className="container px-4 py-12 mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Featured Artworks</h2>
          <p className="mt-2 text-gray-600">Curated selection of this month's best pieces</p>
        </div>

        {error && (
          <div className="flex justify-center mt-8">
            <div className="px-4 py-3 text-red-700 bg-red-100 rounded-lg max-w-md">
              {error}
            </div>
          </div>
        )}

        {loading ? (
          <div className="flex flex-col items-center justify-center mt-12">
            <div className="w-16 h-16 border-4 border-t-4 border-gray-200 rounded-full border-t-indigo-600 animate-spin mb-4"></div>
            <p className="text-gray-600">Loading beautiful artworks...</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {images.map((image) => (
                <div key={image.id} className="overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2">
                  <div className="relative h-56 overflow-hidden group">
                    <img 
                      src={image.url} 
                      alt={image.title}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black via-black opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                      <div className="text-white">
                        <h3 className="font-semibold">{image.title}</h3>
                        <p className="text-sm text-purple-200">{image.artist}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 truncate">{image.title}</h3>
                    <p className="text-sm text-gray-600 truncate">{image.artist}</p>
                    <div className="flex items-center mt-3">
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 text-sm text-gray-500">(24)</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Load More Button */}
            <div className="flex justify-center mt-12">
              <button className="px-6 py-3 font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center">
                <span>View More</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </>
        )}
      </div>

      {/* Call to Action */}
      <div className="py-12 bg-gradient-to-r from-indigo-500 to-purple-600">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white">Join Our Community</h2>
            <p className="mt-4 text-indigo-100">
              Subscribe to our newsletter to receive updates on new artworks, exhibitions, and events.
            </p>
            <div className="mt-8">
              <div className="flex flex-col max-w-md mx-auto space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />
                <button className="px-6 py-3 font-semibold text-indigo-600 bg-white rounded-lg hover:bg-gray-100 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
              <p className="mt-4 text-sm text-indigo-200">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;