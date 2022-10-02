const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplier.controller');

router
  .route('/')
  .get(supplierController.getSuppliers)
  .post(supplierController.createSupplier);

router
  .route('/:id')
  .get(supplierController.getSupplierById)
  .patch(supplierController.updateSupplier);

module.exports = router;
