import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { backendUrl } from "../../config/config";

export default function VideoGrid() {
  const [isMuted, setIsMuted] = useState(true);
  const [activeVideo, setActiveVideo] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollContainerRef = useRef(null);
  const router = useNavigate();

  // Function to extract YouTube ID from various URL formats
  const getYouTubeId = (url) => {
    if (!url) return null;
    
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : null;
  };

  // Fetch videos from API
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${backendUrl}/api/videos`);
        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }
        const data = await response.json();
        
        // Add youtubeId to each video object
        const videosWithIds = data.map(video => ({
          ...video,
          youtubeId: getYouTubeId(video.url)
        }));
        
        setVideos(videosWithIds);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  // Handle scroll
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      if (direction === "left") {
        scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  // Handle video play
  const playVideo = (videoId) => {
    setActiveVideo(videoId);
  };

  // Handle video close
  const closeVideo = () => {
    setActiveVideo(null);
  };

  // Display only first 4 videos
  const displayedVideos = videos.slice(0, 4);

  if (loading) {
    return (
      <section className="relative w-full py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-800">
          <p>Loading videos...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative w-full py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center text-red-500">
          <p>Error: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-800 text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Video <span className="text-[#6CCF5F]">Library</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch our collection of advanced surgical procedures performed by our expert team
          </p>
        </motion.div>

        {/* Video Grid Container */}
        <div className="relative">
          {/* Left Scroll Button - Only show if there are videos to scroll */}
          {displayedVideos.length > 0 && (
            <button
              onClick={() => scroll("left")}
              className="absolute cursor-pointer left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg border border-gray-200 p-3 rounded-full hover:bg-gray-50 transition -ml-4"
              aria-label="Scroll left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#1A1F1C"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}

          {/* Video Grid */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide space-x-6 py-4 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {displayedVideos.length > 0 ? (
              displayedVideos.map((video, index) => (
                <motion.div
                  key={video._id || index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-80 h-60 rounded-2xl overflow-hidden shadow-lg relative group cursor-pointer border border-gray-200"
                  onClick={() => playVideo(video.youtubeId)}
                >
                  {/* Video thumbnail with play button */}
                  <div className="w-full h-full bg-gray-100 relative">
                    {video.youtubeId ? (
                      <img 
                        src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`} 
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                        <span className="text-gray-500">No thumbnail available</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black opacity-40 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-[#6CCF5F] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill="white" 
                          className="w-8 h-8 ml-1"
                        >
                          <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Video title */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-white font-medium">{video.title}</h3>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="w-full text-center text-gray-600 py-10">
                <p>No videos available</p>
              </div>
            )}
          </div>

          {/* Right Scroll Button - Only show if there are videos to scroll */}
          {displayedVideos.length > 0 && (
            <button
              onClick={() => scroll("right")}
              className="absolute cursor-pointer right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg border border-gray-200 p-3 rounded-full hover:bg-gray-50 transition -mr-4"
              aria-label="Scroll right"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#1A1F1C"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Show More Button */}
        {videos.length > 4 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => router("/all-videos")}
              className="bg-[#6CCF5F] cursor-pointer hover:bg-[#5bb54f] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center space-x-2"
            >
              <span>Show All Videos</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl">
            {/* Close Button - More prominent and positioned inside the video container */}
            <button
              onClick={closeVideo}
              className="absolute -top-10 right-0 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg flex items-center space-x-2 cursor-pointer transition-colors duration-300 z-10"
            >
              <span>Cancel</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Video */}
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&mute=${isMuted ? 1 : 0}&rel=0`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Playing video"
              ></iframe>
            </div>
            
            {/* Additional close button at the bottom for better UX */}
            <div className="flex justify-center mt-4">
              <button
                onClick={closeVideo}
                className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-6 mb-10 rounded-lg flex items-center space-x-2 cursor-pointer transition-colors duration-300"
              >
                <span>Close Video</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}