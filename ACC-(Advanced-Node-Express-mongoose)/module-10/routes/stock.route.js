const express = require('express');
const router = express.Router();
const stockController = require('../controllers/product.controller');

// router.route('/bulk-update').patch(stockController.balkUpdateProduct);
// router.route('/bulk-delete').delete(stockController.bulkDeleteProduct);

router
  .route('/')
  .get(stockController.getStocks)
  .post(stockController.createStock);

router
  .route('/:id')
  .patch(stockController.updateStockById)
  .delete(stockController.deleteStockById);

module.exports = router;
