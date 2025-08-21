import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function VideoGrid() {
  const [isMuted, setIsMuted] = useState(true);
  const [activeVideo, setActiveVideo] = useState(null);
  const scrollContainerRef = useRef(null);

  // Array of YouTube video IDs with titles
  const youtubeVideos = [
    { id: "0W0zEJ9uR2U", title: "Laparoscopic Surgery" },
    { id: "ZP9Zheo7CGY", title: "Advanced Laser Procedure" },
    { id: "qMyX1RxWPEk", title: "Minimally Invasive Technique" },
    { id: "GyXtEkaFrc0", title: "Surgical Innovation" },
    { id: "eEVDuo_TH3I", title: "Precision Surgery" },
    { id: "h7oIoKll7Y", title: "Recovery Process" },
    { id: "jNQXAC9IVRw", title: "Patient Testimonial" },
    { id: "YQHsXMglC9A", title: "Medical Breakthrough" },
  ];

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

  return (
    <section className="relative w-full py-12 bg-[#1A1F1C]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-[#6CCF5F]">Procedures</span>
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Watch our collection of advanced surgical procedures performed by our expert team
          </p>
        </motion.div>

        {/* Video Grid Container */}
        <div className="relative">
          {/* Left Scroll Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute cursor-pointer left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-60 backdrop-blur-sm p-3 rounded-full hover:bg-opacity-80 transition -ml-4"
            aria-label="Scroll left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Video Grid */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide space-x-6 py-4 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {youtubeVideos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-80 h-60 rounded-2xl overflow-hidden shadow-lg relative group cursor-pointer"
                onClick={() => playVideo(video.id)}
              >
                {/* Video thumbnail with play button */}
                <div className="w-full h-full bg-gray-800 relative">
                  <img 
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
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
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute cursor-pointer right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-60 backdrop-blur-sm p-3 rounded-full hover:bg-opacity-80 transition -mr-4"
            aria-label="Scroll right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Sound Toggle Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="bg-black cursor-pointer opacity-80 backdrop-blur-sm p-3 rounded-full hover:bg-opacity-30 transition flex items-center space-x-2"
            aria-label={isMuted ? "Unmute videos" : "Mute videos"}
          >
            {isMuted ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-6 h-6"
                >
                  <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
                  <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
                </svg>
                <span className="text-white">Sound Off</span>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-6 h-6"
                >
                  <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z" />
                </svg>
                <span className="text-white">Sound On</span>
              </>
            )}
          </button>
        </div>
      </div>

    {/* Video Modal */}
{activeVideo && (
  <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
    <div className="relative w-full max-w-4xl">
      {/* Close Button */}
      <button
        onClick={closeVideo}
        className="absolute top-2 cursor-pointer -right-30 text-white text-lg flex items-center space-x-2"
      >
        <span>Close</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 
            111.06 1.06L13.06 12l5.47 5.47a.75.75 0 
            11-1.06 1.06L12 13.06l-5.47 
            5.47a.75.75 0 01-1.06-1.06L10.94 
            12 5.47 6.53a.75.75 0 010-1.06z"
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