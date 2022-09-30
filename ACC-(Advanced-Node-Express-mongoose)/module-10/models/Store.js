const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const storeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Please provide a store name'],
      lowercase: true,
      enum: {
        values: [
          'Dhaka',
          'Chattogram',
          'Rajshahi',
          'Barishal',
          'Khulna',
          'Rangpur',
          'Mymensingh',
          'Sylhet',
        ],
        message: '{VALUE} is not a valid name',
      },
    },
    description: String,
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
    },
    manager: {
      name: String,
      contactNumber: String,
      id: {
        type: ObjectId,
        ref: 'User',
      },
    },
  },
  {
    timestamps: true,
  }
);

const Store = mongoose.model('Store', storeSchema);
module.exports = Store;
