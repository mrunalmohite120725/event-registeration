const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const registerRoute = require('./routes/registerRoute');

const app = express();
const PORT = 5001;
const MONGO_URI = 'mongodb://127.0.0.1:27017/eventDB';

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/register', registerRoute);

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'Event Registration API is running.' });
});

// Connect to MongoDB and start server (Bypassed for local development)
console.log('✅ Bypassed MongoDB connection (using in-memory store)');
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
