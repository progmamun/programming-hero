const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const supplierSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      trim: true,
      lowercase: true,
      minLength: [3, 'Name must be at least 3 characters.'],
      maxLength: [100, 'Name is too large'],
    },
    email: {
      type: String,
      validator: [validator.isEmail, 'Provide a valid Email'],
      trim: true,
      lowercase: true,
      unique: true,
    },
    brand: {
      name: {
        type: String,
        trim: true,
        required: true,
      },
      id: {
        type: ObjectId,
        required: true,
        ref: 'Brand',
      },
    },
    contactNumber: [
      {
        type: String,
        required: [true, 'Please provide a contact number'],
        validate: {
          validator: (value) => {
            return validator.isMobilePhone(value);
          },
        },
      },
    ],
    emergencyContactNumber: {
      type: String,
      required: [true, 'Please provide a emergency contact number'],
      validate: {
        validator: (value) => {
          return validator.isMobilePhone(value);
        },
        message: 'Please provide a valid phone number',
      },
    },
    tradeLicenseNumber: {
      type: Number,
      required: [true, 'Please provide your trade license number'],
    },
    presentAddress: {
      type: String,
      required: [true, 'Please provide your present address'],
    },
    location: {
      type: String,
      required: true,
      lowercase: true,
      enum: {
        values: [
          'Dhaka',
          'Rajshahi',
          'Chattogram',
          'Sylhet',
          'Khulna',
          'Barishal',
          'Rangpur',
          'Mymensingh',
        ],
        message: '{VALUE} is not correct division',
      },
    },
    imageURL: {
      type: String,
      validate: [validator.isURL, 'Please provide a valid url'],
    },
    nationalIdImageURL: {
      type: String,
      required: true,
      validate: [validator.isURL, 'Please provide a valid url'],
    },
    status: {
      type: String,
      default: 'active',
      enum: ['active', 'inactive'],
    },
    // createdAt: {
    //   type: String,
    //   default: Date.now(),
    //   select: 0,
    // },
    // updatedAt: {
    //   type: String,
    //   default: Date.now(),
    //   select: 0,
    // },
  },
  {
    timestamps: true,
  }
);

const Supplier = mongoose.model('Supplier', supplierSchema);

module.exports = Supplier;
