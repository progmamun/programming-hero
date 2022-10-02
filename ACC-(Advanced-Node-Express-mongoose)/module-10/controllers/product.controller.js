const {
  getProductsService,
  bulkUpdateProductService,
  createProductService,
  updateProductByIdService,
  deleteProductByIdService,
} = require('../services/product.services');

exports.getProducts = async (req, res, next) => {
  try {
    /* const products = await Product.where('name')
      .equals(/\w/)
      .where('quantity')
      .gt(100)
      .lt(600)
      .limit(2)
      .sort({ quantity: -1 }); */
    // const product = await Product.findById('698769191263896483');

    // {price: {$ gt: 50}}
    // {price: {gt: '50'}}
    // console.log(req.query);
    const filters = { ...req.query };

    // sort, page, limit -> exclude
    const excludeFields = ['sort', 'page', 'limit'];
    excludeFields.forEach((field) => delete filters[field]);

    // gt, lt, gte, lte
    let filtersString = JSON.stringify(filters);
    filtersString = filtersString.replace(
      /\b(gt|gte|lt|lte)\b/g,
      (match) => `$${match}`
    );
    filters = JSON.parse(filtersString);
    // console.log(JSON.parse(filtersString));

    const queries = {};

    if (req.query.sort) {
      // price, quantity -> 'price quantity'
      const sortBy = req.query.sort.split(',').join(' ');
      queries.sortBy = sortBy;
      console.log(sortBy);
    }

    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      queries.fields = fields;
      console.log(fields);
    }

    if (req.query.page) {
      const { page = 1, limit = 10 } = req.query;

      // 50 products
      // each page 10 product
      /* page 1 -> 1-10
      page 2 -> 11-20
      page 3 -> 21-30
      page 4 -> 31-40
      page 5 -> 41-50 */

      const skip = (page - 1) * limit;
      queries.skip = skip;
      queries.limit = parseInt(limit);
    }

    const products = await getProductsService(filters, queries);

    req.status(200).json({
      status: 'success',
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: "can't get the data",
      error: error.message,
    });
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    // save or create
    const result = await createProductService(req.body);
    result.logger();

    // const product = new Product(req.body)
    // instance creation -> Do something -> save()

    /* if(product.quantity === 0) {
      product.status = 'out-of-stock'
    }
    const result = await product.save() */

    res.status(200).json({
      status: 'success',
      message: 'Data inserted successfully!',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: 'Data is not inserted',
      error: error.message,
    });
  }
};

exports.updateProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await updateProductByIdService(id, req.body);

    res.status(200).json({
      status: 'Success',
      message: 'Successfully updated the product',
    });
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      message: "Couldn't update the product",
      error: error.message,
    });
  }
};

exports.balkUpdateProduct = async (req, res, next) => {
  try {
    console.log(req.body);
    const result = await bulkUpdateProductService(id, req.body);

    res.status(200).json({
      status: 'Success',
      message: 'Successfully updated the product',
    });
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      message: "Couldn't update the product",
      error: error.message,
    });
  }
};

exports.deleteProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteProductByIdService(id);

    if (!result.deletedCount) {
      return res
        .status(400)
        .json({ status: 'fail', error: "Couldn't delete the product" });
    }

    res.status(200).json({
      status: 'Success',
      message: 'Successfully deleted the product',
    });
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      message: "Couldn't delete the product",
      error: error.message,
    });
  }
};

exports.bulkDeleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteProductByIdService(id);

    res.status(200).json({
      status: 'Success',
      message: 'Successfully deleted the product',
    });
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      message: "Couldn't delete the product",
      error: error.message,
    });
  }
};

exports.fileUpload = async (req, res) => {
  try {
    res.status(200).json(req.file);
    // res.status(200).json(req.files) //multiple img er jono 's'
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      error: error.message,
    });
  }
};
