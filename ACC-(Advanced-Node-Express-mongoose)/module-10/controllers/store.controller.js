const {
  getStoresService,
  createStoreService,
  getStoreByIdService,
} = require('../services/store.service');

exports.getStores = async (req, res) => {
  try {
    const stores = await getStoresService();
    res.status(200).json({
      status: 'success',
      data: stores,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: "can't get the stores",
      error: error.message,
    });
  }
};

exports.createStore = async (req, res) => {
  try {
    const result = await createStoreService(req.body);
    req.status(201).json({
      status: 'success',
      message: 'Store created successfully!',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: "could't create the store",
      error: error.message,
    });
  }
};

exports.getStoreById = async (req, res) => {
  const { id } = req.params;
  try {
    const store = await getStoreByIdService(id);
    req.status(200).json({
      status: 'success',
      data: store,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: "Can't get the store",
      error: error.message,
    });
  }
};
