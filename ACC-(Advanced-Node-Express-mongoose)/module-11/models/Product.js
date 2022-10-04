const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;
const valid = require('validator');

// schema design
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name for this product.'],
      trim: true,
      unique: [true, 'Name must be unique'],
      lowercase: true,
      minLength: [3, 'Name must be at least 3 characters.'],
      maxLenght: [100, 'Name is too large'],
    },
    description: {
      type: String,
      required: true,
    },

    unit: {
      type: String,
      required: true,
      enum: {
        values: ['kg', 'litre', 'pcs', 'bag'],
        message: "unit value can't be {VALUE}, must be kg/litre/pcs/bag",
      },
    },

    imageURLs: [
      {
        type: String,
        required: true,
        validate: [valid.isURL, 'wrong url'],
      },
    ],

    category: {
      type: String,
      required: true,
    },

    brand: {
      name: {
        type: String,
        required: true,
      },
      id: {
        type: ObjectId,
        ref: 'Brand',
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

productSchema.pre('save', function (next) {
  //this ->
  console.log(' Before saving data');
  if (this.quantity == 0) {
    this.status = 'out-of-stock';
  }

  next();
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
