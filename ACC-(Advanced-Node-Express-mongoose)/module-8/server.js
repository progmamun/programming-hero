const express = require('express');
const mongoose = require('mongoose');
const colors = require('colors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const app = express();

// Load env vars
dotenv.config({ path: './config/config.env' });

// database connection
connectDB();

// Body Parser
app.use(express.json());

// routes
const productRoute = require('./routes/product.route');

app.get('/', (req, res) => {
  res.send('Route is working! YaY!');
});

// routes
app.use('/api/v1/product', productRoute);

// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});
