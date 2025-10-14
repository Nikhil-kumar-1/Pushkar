import React, { useState, useEffect } from "react";
import { backendUrl } from "../../config/config";

function VideoUpload() {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [videos, setVideos] = useState([]);

  // ✅ Detect platform and generate embed URL
  const getEmbedUrl = (url) => {
    if (url.includes("youtube.com/watch?v="))
      return url.replace("watch?v=", "embed/");
    if (url.includes("youtu.be"))
      return url.replace("youtu.be/", "www.youtube.com/embed/");
    if (url.includes("facebook.com"))
      return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
        url
      )}&show_text=false&width=500`;
    if (url.includes("instagram.com"))
      return `https://www.instagram.com/p/${url.split("/p/")[1]?.split("/")[0]}/embed/`;
    if (url.includes("twitter.com") || url.includes("x.com"))
      return `https://twitframe.com/show?url=${encodeURIComponent(url)}`;
    if (url.includes("vimeo.com"))
      return url.replace("vimeo.com/", "player.vimeo.com/video/");
    if (url.includes("dailymotion.com"))
      return url.replace("dailymotion.com/video/", "dailymotion.com/embed/video/");
    if (url.includes("tiktok.com"))
      return `https://www.tiktok.com/embed/v2/${url.split("/video/")[1]?.split("?")[0]}`;
    return null;
  };

  const videoRegex =
    /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be|facebook\.com|fb\.watch|instagram\.com|twitter\.com|x\.com|vimeo\.com|dailymotion\.com|tiktok\.com)\/.+$/;

  // ✅ Fetch all videos from backend
  const fetchVideos = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/videos`);
      const data = await response.json();
      setVideos(data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  // ✅ Handle Add Video
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSuccess(false);
    setMessage("");

    if (!title.trim()) {
      setMessage("❌ Please enter a video title");
      setIsLoading(false);
      return;
    }
    if (!url.trim()) {
      setMessage("❌ Please enter a video URL");
      setIsLoading(false);
      return;
    }
    if (!videoRegex.test(url)) {
      setMessage("❌ Please enter a valid video URL");
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
        fetchVideos();
      } else {
        setMessage(`❌ Error: ${data.message}`);
      }
    } catch (error) {
      setMessage("⚠️ Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ Handle Delete Video
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this video?")) return;

    try {
      const response = await fetch(`${backendUrl}/api/videos/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (response.ok) {
        setMessage("🗑️ Video deleted successfully!");
        fetchVideos();
      } else {
        setMessage(`❌ Error: ${data.message}`);
      }
    } catch (error) {
      setMessage("⚠️ Something went wrong while deleting!");
    }
  };

  const embedUrl = getEmbedUrl(url);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in-up">
        <div className="p-8 border-b border-gray-200 text-center bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Add Video</h2>
          <p className="text-gray-600">
            Add a title and video link (YouTube, Facebook, etc.)
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Video Title
              </label>
              <input
                type="text"
                placeholder="Enter video title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Video Link
              </label>
              <input
                type="text"
                placeholder="https://www.youtube.com/watch?v=..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          {embedUrl && (
            <div className="mt-6">
              <iframe
                src={embedUrl}
                width="100%"
                height="250"
                className="rounded-lg border border-gray-200"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                title="Video preview"
              ></iframe>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`mt-6 w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-300 ${
              isLoading
                ? "bg-blue-400 cursor-not-allowed"
                : isSuccess
                ? "bg-green-500"
                : "bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200"
            }`}
          >
            {isLoading ? "Adding..." : "Add Video"}
          </button>

          {message && (
            <div
              className={`mt-4 p-3 rounded-lg text-center ${
                isSuccess
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {message}
            </div>
          )}
        </form>

        {/* ✅ Video List Section */}
        <div className="p-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Uploaded Videos
          </h3>

          {videos.length === 0 ? (
            <p className="text-gray-500 text-center">No videos uploaded yet.</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {videos.map((video) => (
                <div
                  key={video._id}
                  className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <iframe
                    src={getEmbedUrl(video.url)}
                    width="100%"
                    height="200"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    title={video.title}
                  ></iframe>
                  <div className="p-4 flex justify-between items-center">
                    <h4 className="font-medium text-gray-800">{video.title}</h4>
                    <button
                      onClick={() => handleDelete(video._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
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
