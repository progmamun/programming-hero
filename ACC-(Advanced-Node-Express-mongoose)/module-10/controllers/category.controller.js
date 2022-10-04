const {
  getCategoriesService,
  createCategoryService,
} = require('../services/category.service');

exports.getCategories = async (req, res) => {
  try {
    const categories = await getCategoriesService();

    res.status(200).json({
      status: 'success',
      data: categories,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: "can't get the categories",
      error: error.message,
    });
  }
};

exports.createCategory = async (req, res) => {
  try {
    // save or create

    const result = await createCategoryService(req.body);

    res.status(200).json({
      status: 'success',
      messgae: 'Category created successfully!',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: ' Data is not inserted ',
      error: error.message,
    });
  }
};
