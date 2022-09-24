const {
  createBrandService,
  getBrandService,
  getBrandByIdService,
  updateBrandService,
} = require('../services/brand.services');

exports.createBrand = async (req, res, next) => {
  try {
    const result = await createBrandService(req.body);
    res.status(201).json({
      status: 'success',
      message: 'Successfully created the brand',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error: "Couldn't create the brand",
    });
  }
};

exports.getBrands = async (req, res, next) => {
  try {
    const brands = await getBrandService(req.body);
    res.status(201).json({
      status: 'success',
      data: brands,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error: "Couldn't get the brands",
    });
  }
};

exports.getBrandById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const brand = await getBrandByIdService();
    if (!brand) {
      return res.status(400).json({
        status: 'fail',
        error: "Couldn't find a brand with this id",
      });
    }
    res.status(201).json({
      status: 'success',
      data: brand,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error: "Couldn't get the brands",
    });
  }
};

exports.updateBrand = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await updateBrandService(id, req.body);

    console.log(result);

    if (!result.nModified) {
      return res.status(400).json({
        status: 'fail',
        error: "Couldn't update the brand with this id",
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Successfully updated the brand',
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: 'fail',
      error: "Couldn't update the brand",
    });
  }
};
