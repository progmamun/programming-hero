const express = require('express');
const mongoose = require('mongoose');
const colors = require('colors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

// database connection
connectDB();

const app = express();

// Body Parser
app.use(express.json());

//schema design
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name for this product.'],
      trim: true,
      unique: [true, 'Name must be unique'],
      minLength: [3, 'Name must be at least 3 characters.'],
      maxLength: [100, 'Name is too large'],
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price can't be negative"],
    },
    unit: {
      type: String,
      required: true,
      enum: {
        value: ['kg', 'liter', 'pcs'],
        message: "Unit value can't be {VALUE}, must be kg/liter/pcs",
      },
    },
    quantity: {
      type: Number,
      require: true,
      min: [0, "quantity can't be negative"],
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);
          if (isInteger) {
            return true;
          } else {
            return false;
          }
        },
      },
      message: 'Quantity must be an integer',
    },
    status: {
      type: String,
      required: true,
      enum: {
        value: ['in-stock', 'out-of-stock', 'discontinued'],
        message: "Status can't be {VALUE}",
      },
    },
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Spplier',
    },
    categories: [
      {
        name: {
          type: String,
          required: true,
        },
        _id: mongoose.Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
  }
);

// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});
