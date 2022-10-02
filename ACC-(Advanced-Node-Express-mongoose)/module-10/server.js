const mongoose = require('mongoose');
const colors = require('colors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

const app = require('./app');

// Load env vars
dotenv.config({ path: './config/config.env' });

// database connection
connectDB();

// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});
