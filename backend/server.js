const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());

// MongoDB connection using your working URI
mongoose
  .connect('mongodb+srv://nithingudala22:NithinProfile2024@cluster0.fdhsg3l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Define the profile schema
const profileSchema = new mongoose.Schema({
  fristname: { type: String, required: true },
  lastname: { type: String, required: true },
  companyname: { type: String, required: true },
  contacttype: { type: String, required: true },
  reasonforcontact: { type: String, required: true },
  Email: { type: String, required: true },
  Phonenumber: { type: String, required: true },
});

// Define the Profile model
const Profiles = mongoose.model("Profiles", profileSchema);

// POST endpoint to add a new profile
app.post('/profiles', async (req, res) => {
  const { fristname, lastname, companyname, contacttype, reasonforcontact, Email, Phonenumber } = req.body;
  try {
    const newData = new Profiles({ fristname, lastname, companyname, contacttype, reasonforcontact, Email, Phonenumber });
    await newData.save();
    const allProfiles = await Profiles.find();
    return res.json(allProfiles); // Return updated profiles list
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ error: 'Error saving profile', details: err.message });
  }
});

// GET endpoint to fetch all profiles
app.get('/getprofiles', async (req, res) => {
  try {
    const allProfiles = await Profiles.find();
    return res.json(allProfiles);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ error: 'Error fetching profiles', details: err.message });
  }
});

// PUT endpoint to update profile by ID
app.put('/updateprofiles/:id', async (req, res) => {
  const { fristname, lastname, companyname, contacttype, reasonforcontact, Email, Phonenumber } = req.body;
  try {
    // Update the profile by ID
    const updatedProfile = await Profiles.findByIdAndUpdate(
      req.params.id,
      { fristname, lastname, companyname, contacttype, reasonforcontact, Email, Phonenumber },
      { new: true } // Return updated document
    );
    return res.json(updatedProfile); // Return the updated profile
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ error: 'Error updating profile', details: err.message });
  }
});

// GET endpoint to fetch profile by ID
app.get('/getprofiles/:id', async (req, res) => {
  try {
    const selectedProfile = await Profiles.findById(req.params.id);
    if (!selectedProfile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    return res.json(selectedProfile);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ error: 'Error fetching profile by ID', details: err.message });
  }
});

// DELETE endpoint to delete profile by ID
app.delete('/deleteprofiles/:id', async (req, res) => {
  try {
    const deletedProfile = await Profiles.findByIdAndDelete(req.params.id);
    if (!deletedProfile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    const remainingProfiles = await Profiles.find();
    return res.json(remainingProfiles); // Return remaining profiles after deletion
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ error: 'Error deleting profile', details: err.message });
  }
});

// Define a simple route
app.get("/", (req, res) => {
  res.send("Backend is running successfully");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
