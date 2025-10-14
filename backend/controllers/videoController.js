const Video = require("../models/Video");

// Add a new video
const addVideo = async (req, res) => {
  try {
    const { title, url } = req.body;

    if (!title || !url) {
      return res.status(400).json({ message: "Title and video link are required" });
    }

    const newVideo = new Video({ title, url });
    await newVideo.save();

    res.status(201).json({
      message: "Video added successfully",
      video: newVideo,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get all videos
const getVideos = async (req, res) => {
  try {
    const videos = await Video.find().sort({ createdAt: -1 });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ✅ Delete a video by ID
const deleteVideo = async (req, res) => {
  try {
    const { id } = req.params;

    const video = await Video.findById(id);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    await video.deleteOne();

    res.json({ message: "Video deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

module.exports = { addVideo, getVideos, deleteVideo };
