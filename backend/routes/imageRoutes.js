const express = require("express");
const cloudinary = require("cloudinary").v2;
const Image = require("../models/Image");

const router = express.Router();

// Configure Cloudinary (make sure this is set up in your app)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Generate Cloudinary signature for direct upload
router.get("/signature", (req, res) => {
  try {
    const timestamp = Math.round(new Date().getTime() / 1000);
    const signature = cloudinary.utils.api_sign_request(
      {
        timestamp: timestamp,
        folder: "myUploads"
      },
      process.env.CLOUDINARY_API_SECRET
    );

    res.json({
      signature,
      timestamp,
      apiKey: process.env.CLOUDINARY_API_KEY,
      cloudName: process.env.CLOUDINARY_CLOUD_NAME
    });
  } catch (err) {
    console.error("Signature error:", err);
    res.status(500).json({ error: "Failed to generate signature" });
  }
});

// Save image details to database after successful upload
router.post("/save", async (req, res) => {
  try {
    const { url, publicId } = req.body;

    if (!url || !publicId) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newImage = new Image({
      url,
      publicId,
    });
    
    await newImage.save();
    res.json(newImage);
  } catch (err) {
    console.error("Save error:", err);
    res.status(500).json({ error: "Failed to save image details" });
  }
});

// Get all images
router.get("/", async (req, res) => {
  try {
    const images = await Image.find().sort({ createdAt: -1 });
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

// Delete image
router.delete("/:id", async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ error: "Image not found" });
    }

    // Delete from Cloudinary
    await cloudinary.uploader.destroy(image.publicId);

    // Delete from MongoDB
    await Image.findByIdAndDelete(req.params.id);

    res.json({ message: "Image deleted successfully" });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ error: "Delete failed", details: err.message });
  }
});

module.exports = router;