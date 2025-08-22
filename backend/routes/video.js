const express = require("express");
const { addVideo, getVideos } = require("../controllers/videoController");

const router = express.Router();

// POST -> Add YouTube link
router.post("/add", addVideo);

// GET -> Fetch all videos
router.get("/", getVideos);

module.exports = router;
