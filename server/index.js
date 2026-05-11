import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contact.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (Postman, curl, server-to-server)
      if (!origin) return callback(null, true);

      const allowedOrigins = [
        "http://localhost:5173",
        process.env.CLIENT_URL,
      ];

      // Allow exact matches
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      // Allow all Vercel deployments and preview URLs
      if (origin.endsWith(".vercel.app")) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
  })
);

// Parse JSON
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Portfolio API is running...");
});

// Contact route
app.use("/api/contact", contactRoutes);

// Health check route
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Chirin Portfolio API running",
  });
});

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });