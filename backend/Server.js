require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;
const imageRoutes = require("./routes/imageRoutes");


const app = express();

// Allowed origins
const allowedOrigins = [
  "https://pushkar-plum.vercel.app",
  "https://www.drpushkaranandsingh.com",
  "http://localhost:5173"
];

// CORS middleware
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps / curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware for parsing JSON requests
app.use(express.json());
app.use(express.json({ limit: "10mb" })); // base64 ke liye

// Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


// Routes import
const articleRoutes = require("./routes/articles");
const videoRoutes = require("./routes/videos");
const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");

app.use("/api", articleRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/images", imageRoutes);
app.use('/api', blogRoutes);

// Connect db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => {
    console.error("❌ Error connecting to MongoDB:", err);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
