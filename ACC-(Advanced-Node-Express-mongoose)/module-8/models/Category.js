const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Please provide a category name'],
      lowercase: true,
      unique: true,
    },
    description: String,
    imageUrl: {
      type: String,
      validator: [validator.isURL, 'Please provide a valid URL'],
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
