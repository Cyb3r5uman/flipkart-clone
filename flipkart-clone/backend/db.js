const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://patrasuman44:jayhind@clusterforflipkatbacken.rilorms.mongodb.net/?retryWrites=true&w=majority&appName=ClusterForFlipkatBackend";

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected successfully"))
.catch((err) => console.error("❌ MongoDB connection error:", err));
