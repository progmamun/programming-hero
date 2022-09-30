const {
  getCategoriesService,
  createCategoryService,
} = require('../services/category.service');

exports.getCategories = async (req, res) => {
  try {
    const categories = await getCategoriesService();
    req.status(200).json({
      status: 'success',
      data: categories,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: "can't get the stores",
      error: error.message,
    });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const result = await createCategoryService(req.body);
    req.status(201).json({
      status: 'success',
      message: 'Category created successfully!',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: "could't create the categories",
      error: error.message,
    });
  }
};
