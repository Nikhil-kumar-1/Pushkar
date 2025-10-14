import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { backendUrl } from "../../config/config";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function VideoGrid() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  // Generate embed URL
  const getEmbedUrl = (url) => {
    if (!url) return null;
    if (url.includes("youtube.com/watch?v=")) return url.replace("watch?v=", "embed/");
    if (url.includes("youtu.be")) return url.replace("youtu.be/", "www.youtube.com/embed/");
    if (url.includes("facebook.com"))
      return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&width=500`;
    if (url.includes("instagram.com"))
      return `https://www.instagram.com/p/${url.split("/p/")[1]?.split("/")[0]}/embed/`;
    return null;
  };

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${backendUrl}/api/videos`);
        if (!res.ok) throw new Error("Failed to fetch videos");
        const data = await res.json();
        setVideos(data);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Failed to load videos. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };
  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  if (loading)
    return (
      <div className="flex justify-center items-center py-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-[#6CCF5F] border-t-transparent rounded-full"
        />
      </div>
    );

  if (error) return <p className="text-center py-12 text-red-500">{error}</p>;

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">
          <span className="text-[#6CCF5F]">Featured Videos</span>
        </h2>

        {/* Scroll Buttons */}
        {videos.length > 0 && (
          <>
            <button
              onClick={scrollLeft}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 z-10"
            >
              <ChevronLeft className="w-6 h-6 text-[#6CCF5F]" />
            </button>
            <button
              onClick={scrollRight}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 z-10"
            >
              <ChevronRight className="w-6 h-6 text-[#6CCF5F]" />
            </button>
          </>
        )}

        {/* Video Row */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide relative"
        >
          {videos.length === 0 && (
            <p className="text-center text-gray-500">No videos available</p>
          )}
          {videos.map((video) => {
            const embedUrl = getEmbedUrl(video.url);
            if (!embedUrl) return null;

            return (
              <div
                key={video._id}
                className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
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

        {/* View All Videos Button */}
        <div className="text-center mt-8">
          <motion.button
            onClick={() => navigate("/all-videos")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#6CCF5F] to-green-400 text-white px-8 py-3 rounded-full font-bold shadow-lg"
          >
            View All Videos
          </motion.button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
