const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
app.use(express.json());

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://nithingudala22:NithinProfile2024@cluster0.fdhsg3l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err.message));

// Define the profile schema
const profileSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  companyname: { type: String, required: true },
  contacttype: { type: String, required: true },
  reasonforcontact: { type: String, required: true },
  email: { type: String, required: true },
  phonenumber: { type: String, required: true },
});

// Define the Profile model
const Profile = mongoose.model("Profile", profileSchema);

// POST endpoint to add a new profile
app.post("/profiles", async (req, res) => {
  try {
    const profile = new Profile(req.body);
    await profile.save();
    const allProfiles = await Profile.find();
    res.json(allProfiles); // Return updated profiles list
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Error saving profile", details: err.message });
  }
});

// GET endpoint to fetch all profiles
app.get("/profiles", async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Error fetching profiles", details: err.message });
  }
});

// GET endpoint to fetch a profile by ID
app.get("/profiles/:id", async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    if (!profile) return res.status(404).json({ error: "Profile not found" });
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Error fetching profile by ID", details: err.message });
  }
});

// PUT endpoint to update a profile by ID
app.put("/profiles/:id", async (req, res) => {
  try {
    const updatedProfile = await Profile.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProfile) return res.status(404).json({ error: "Profile not found" });
    res.json(updatedProfile);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Error updating profile", details: err.message });
  }
});

// DELETE endpoint to delete a profile by ID
app.delete("/profiles/:id", async (req, res) => {
  try {
    const deletedProfile = await Profile.findByIdAndDelete(req.params.id);
    if (!deletedProfile) return res.status(404).json({ error: "Profile not found" });
    const remainingProfiles = await Profile.find();
    res.json(remainingProfiles); // Return remaining profiles
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Error deleting profile", details: err.message });
  }
});

// Serve static files from the Vue.js frontend's dist folder
app.use(express.static(path.join(__dirname, "public")));

// Catch-all route to serve the Vue.js app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
