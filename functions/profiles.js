const mongoose = require('mongoose');
const Profiles = require('../model/profile'); // Adjust this path if necessary

mongoose.connect('mongodb+srv://nithingudala22:NithinProfile2024@cluster0.fdhsg3l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('DB Connected...'))
  .catch(err => console.log('MongoDB connection error: ', err));

// POST handler to create a new profile
exports.handler = async (event, context) => {
  if (event.httpMethod === 'POST') {
    const { firstname, lastname, companyname, contacttype, reasonforcontact, Email, Phonenumber } = JSON.parse(event.body);

    try {
      const newData = new Profiles({ firstname, lastname, companyname, contacttype, reasonforcontact, Email, Phonenumber });
      await newData.save();
      const allProfiles = await Profiles.find();
      return {
        statusCode: 200,
        body: JSON.stringify(allProfiles),
      };
    } catch (err) {
      console.log('Error in POST /profiles:', err.message);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Error saving profile', error: err.message }),
      };
    }
  }

  if (event.httpMethod === 'GET') {
    try {
      const allProfiles = await Profiles.find();
      return {
        statusCode: 200,
        body: JSON.stringify(allProfiles),
      };
    } catch (err) {
      console.log('Error in GET /profiles:', err.message);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Error fetching profiles', error: err.message }),
      };
    }
  }
};
