const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const uploader = require('../middleware/uploader');

router.post(
  '/file-upload',
  uploader.single('image'),
  productController.fileUpload
);

// router.post(
//   '/file-upload',
//   uploader.array('image'),
//   productController.fileUpload
// ); multiple img or file

router.route('/bulk-update').patch(productController.balkUpdateProduct);
router.route('/bulk-delete').delete(productController.bulkDeleteProduct);

router
  .route('/')
  .get(productController.getProducts)
  .post(productController.createProduct);

router
  .route('/:id')
  .patch(productController.updateProductById)
  .delete(productController.deleteProductById);

module.exports = router;
