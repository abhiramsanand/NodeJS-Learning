require('dotenv').config();
const express = require('express');
const cors = require('cors');  // Import cors
const authRoutes = require('./routes/authRoutes');

const app = express();

// Enable CORS for all origins
app.use(cors());  // This allows all origins to make requests to your API

// Middleware to parse incoming JSON requests
app.use(express.json());

// Use the auth routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
