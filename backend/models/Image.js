const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  url: { type: String, required: true },
  publicId: { type: String, required: true },   // 👈 match your router
  createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model("Image", imageSchema);

