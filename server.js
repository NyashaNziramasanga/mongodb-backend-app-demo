const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Students Model
const Students = require('./models/Students');

// Load env variables
dotenv.config({ path: './config/config.env' });

// Connect to MongoDB
connectDB();

const app = express();

app.get('/students/get', (req, res) => {
  Students.find({ name: 'nash' }).then((student) => {
    res.send({
      success: true,
      student: student,
    });
  });
});

// app.post('/students/create', (req, res, next) => {
//   // if (req.body === undefined) {
//   //   console.log(undefined);
//   // }
//   console.log(object);
//   Students.create(req.body).then((student) => {
//     res.status(201).json({
//       success: true,
//       data: student,
//     });
//   });
// });

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () =>
  console.log(` 🔥Server running on port ${PORT}🔥 `)
);

// Handle unhandled promises
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server
  server.close(() => process.exit);
});
