const Brand = require('../models/Brand');

exports.createBrandService = async (data) => {
  const result = await Brand.create(data);
  return result;
};

exports.getBrandService = async () => {
  const brands = await Brand.find({}).select('-products -suppliers');
  return brands;
};

exports.getBrandByIdService = async (id) => {
  const brand = await Brand.findOne({ _id: id });
  return brand;
};

exports.updateBrandService = async (id, data) => {
  const result = await Brand.find({ _id: id }, data, {
    runValidators: true,
  });
  return result;
};
