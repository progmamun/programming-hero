const express = require('express');
const mongoose = require('mongoose');
const colors = require('colors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const app = express();

// route files
const productRoute = require('./routes/product.route');
const brandRoute = require('./routes/brand.route');

// Load env vars
dotenv.config({ path: './config/config.env' });

// database connection
connectDB();

// Body Parser
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Route is working! YaY!');
});

// mount routes
app.use('/api/v1/product', productRoute);
app.use('/api/v1/brand', brandRoute);

// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});
