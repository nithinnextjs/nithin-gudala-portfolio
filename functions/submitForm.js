const { MongoClient } = require('mongodb');

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  const body = JSON.parse(event.body);
  const { name, email, message } = body;

  const uri = process.env.MONGODB_URI;  // Store your MongoDB URI in Netlify's environment variables
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db('portfolio');
    const collection = database.collection('messages');

    const result = await collection.insertOne({ name, email, message });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully!', data: result }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error', error }),
    };
  } finally {
    await client.close();
  }
};
