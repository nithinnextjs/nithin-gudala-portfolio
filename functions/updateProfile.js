const mongoose = require('mongoose');
const Profiles = require('../model/profile'); // Adjust path if necessary

mongoose.connect('mongodb+srv://nithingudala22:NithinProfile2024@cluster0.fdhsg3l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('DB Connected...'))
  .catch(err => console.log('MongoDB connection error: ', err));

exports.handler = async (event, context) => {
  if (event.httpMethod === 'PUT') {
    const { id } = event.pathParameters; // ID of the profile to update
    const { firstname, lastname, companyname, contacttype, reasonforcontact, Email, Phonenumber } = JSON.parse(event.body);

    try {
      const updatedProfile = await Profiles.findByIdAndUpdate(
        id,
        { firstname, lastname, companyname, contacttype, reasonforcontact, Email, Phonenumber },
        { new: true }
      );

      if (!updatedProfile) {
        return {
          statusCode: 404,
          body: JSON.stringify({ message: 'Profile not found' }),
        };
      }

      return {
        statusCode: 200,
        body: JSON.stringify(updatedProfile),
      };
    } catch (err) {
      console.log('Error in PUT /updateProfile:', err.message);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Error updating profile', error: err.message }),
      };
    }
  }
};
