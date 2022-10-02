const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

// middleware
app.use(express.json());
app.use(cors());

// routes file
const productRoute = require('./routes/product.route');
const brandRoute = require('./routes/brand.route');
const categoryRoute = require('./routes/category.route');
const storeRoute = require('./routes/store.route');
const supplierRoute = require('./routes/supplier.route');

app.get('/', (req, res) => {
  res.send('Route is Working! YaY!');
});

app.use('/api/v1/product', productRoute);
app.use('/api/v1/brand', brandRoute);
app.use('/api/v1/category', categoryRoute);
app.use('/api/v1/store', storeRoute);
app.use('/api/v1/supplier', supplierRoute);

module.exports = app;
