const {
  createSupplierService,
  getSuppliersService,
  getSupplierByIdService,
  updateSupplierService,
} = require('../services/supplier.service');

exports.createSupplier = async (req, res) => {
  try {
    const result = await createSupplierService(req.body);

    res.status(200).json({
      status: 'success',
      message: 'Successfully created the supplier',
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: 'fail',
      error: "Couldn't create the supplier",
    });
  }
};

exports.getSuppliers = async (req, res, next) => {
  try {
    const suppliers = await getSuppliersService(req.body);

    res.status(200).json({
      status: 'success',
      data: suppliers,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: 'fail',
      error: "Couldn't get the suppliers",
    });
  }
};

exports.getSupplierById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const supplier = await getSupplierByIdService(id);

    if (!supplier) {
      return res.status(400).json({
        status: 'fail',
        error: "Couldn't find a supplier with this id",
      });
    }

    res.status(200).json({
      status: 'success',
      data: supplier,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: 'fail',
      error: "Couldn't get the brands",
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
        error: "Couldn't update the supplier with this id",
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Successfully updated the supplier',
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: 'fail',
      error: "Couldn't update the brand",
    });
  }
};
