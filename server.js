const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load env variables
dotenv.config({ path: './config/config.env' });

// Connect to MongoDB
connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send({
    success: true,
    name: 'nash',
  });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`🔥Server running on port ${PORT}🔥`));
