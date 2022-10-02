const {
  createSupplierService,
  getSupplierService,
  getSupplierByIdService,
  updateSupplierService,
} = require('../services/supplier.services');

exports.createSupplier = async (req, res, next) => {
  try {
    const result = await createSupplierService(req.body);
    res.status(201).json({
      status: 'success',
      message: 'Successfully created the supplier',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error: "Couldn't create the supplier",
    });
  }
};

exports.getSuppliers = async (req, res, next) => {
  try {
    const suppliers = await getSupplierService(req.body);
    res.status(201).json({
      status: 'success',
      data: suppliers,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error: "Couldn't get the suppliers",
    });
  }
};

exports.getSupplierById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const supplier = await getSupplierByIdService();
    if (!supplier) {
      return res.status(400).json({
        status: 'fail',
        error: "Couldn't find a Supplier with this id",
      });
    }
    res.status(201).json({
      status: 'success',
      data: supplier,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error: "Couldn't get the Supplier",
    });
  }
};

exports.updateSupplier = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await updateSupplierService(id, req.body);

    console.log(result);

    if (!result.nModified) {
      return res.status(400).json({
        status: 'fail',
        error: "Couldn't update the Supplier with this id",
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Successfully updated the Supplier',
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: 'fail',
      error: "Couldn't update the Supplier",
    });
  }
};
