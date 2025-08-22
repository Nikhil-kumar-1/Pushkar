import React, { useState } from "react";
import { backendUrl } from "../../config/config";

function VideoUpload() {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSuccess(false);
    setMessage("");

    // Basic validation
    if (!title.trim()) {
      setMessage("❌ Please enter a video title");
      setIsLoading(false);
      return;
    }

    if (!url.trim()) {
      setMessage("❌ Please enter a YouTube link");
      setIsLoading(false);
      return;
    }

    // Validate YouTube URL format
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
    if (!youtubeRegex.test(url)) {
      setMessage("❌ Please enter a valid YouTube URL");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`${backendUrl}/api/videos/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, title }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("✅ Video added successfully!");
        setIsSuccess(true);
        setUrl("");
        setTitle("");
      } else {
        setMessage(`❌ Error: ${data.message}`);
        setIsSuccess(false);
      }
    } catch (error) {
      setMessage("⚠️ Something went wrong!");
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 p-6">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-md animate-fade-in-up">
        <div className="p-8 bg-gray-50 border-b border-gray-200 text-center">
          <div className="w-16 h-16 text-red-600 mx-auto mb-4 animate-pulse">
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="currentColor" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Add YouTube Video</h2>
          <p className="text-gray-600">Add a title and YouTube link to your collection</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8">
          {/* Title Input Field */}
          <div className="relative mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Video Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Enter video title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
              required
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-blue-500 w-0 transition-all duration-300 group-focus-within:w-full"></div>
          </div>

          {/* YouTube Link Input Field */}
          <div className="relative mb-6">
            <label htmlFor="link" className="block text-sm font-medium text-gray-700 mb-1">
              YouTube Link
            </label>
            <input
              id="link"
              type="text"
              placeholder="https://www.youtube.com/watch?v=..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
              required
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-blue-500 w-0 transition-all duration-300 group-focus-within:w-full"></div>
          </div>
          
          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-300 flex items-center justify-center
              ${isLoading 
                ? "bg-blue-400 cursor-not-allowed" 
                : isSuccess 
                  ? "bg-green-500" 
                  : "bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200"}`}
          >
            {isLoading ? (
              <div className="w-5 h-5 border-t-2 border-r-2 border-white rounded-full animate-spin"></div>
            ) : isSuccess ? (
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24">
                <path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
              </svg>
            ) : (
              "Add Video"
            )}
          </button>

          {/* Message Display */}
          {message && (
            <div className={`mt-4 p-3 rounded-lg text-center transition-all duration-300 ${isSuccess ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
              {message}
            </div>
          )}
        </form>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}

export default VideoUpload;