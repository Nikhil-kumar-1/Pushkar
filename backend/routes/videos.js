const express = require("express");
const { addVideo, getVideos, deleteVideo } = require("../controllers/videoController");

const router = express.Router();

// POST -> Add new video link
router.post("/add", addVideo);

// GET -> Fetch all videos
router.get("/", getVideos);

// DELETE -> Delete a video by ID
router.delete("/:id", deleteVideo);

module.exports = router;
