const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

router
  .route('/')
  .get(productController.getProducts)
  .post(productController.createProduct);

router.route('/bulk-update').patch(productController.balkUpdateProduct);

router.route('/:id').patch(productController.updateProducts);

module.exports = router;
