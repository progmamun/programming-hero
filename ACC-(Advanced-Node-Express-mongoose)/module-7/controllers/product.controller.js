const {
  getProductsService,
  updateProductService,
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
    const products = await getProductsService();

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

exports.updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await updateProductService(id, req.body);

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
