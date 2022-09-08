const { ObjectId } = require('mongodb');
const { getDb } = require('../utils/dbConnect');

let tools = [
  { id: 1, name: 'Hammer' },
  { id: 2, name: 'Hammer2' },
  { id: 3, name: 'Hammer3' },
];

module.exports.getAllTools = async (req, res, next) => {
  try {
    const { limit, page } = req.query;
    const db = getDb();
    // cursor => toArray(), forEach()
    const tool = await db
      .collection('tools')
      .find({})
      .project({ _id: 0 })
      .skip(+page * limit)
      .limit(+limit)
      .toArray();

    res.status(200).json({ success: true, data: tool });
  } catch (error) {
    next(error);
  }
};

module.exports.saveATool = async (req, res, next) => {
  try {
    const db = getDb();
    const tool = req.body;

    const result = await db.collection('tools').insertOne(tool);
    console.log(result);

    if (!result.insertedId) {
      return res
        .status(400)
        .send({ status: false, error: 'Something went wrong!' });
    }
    res.send({
      success: true,
      message: `Tool added with id: ${result.insertedId}`,
    });
  } catch (error) {
    next(error);
  }
};

module.exports.getToolDetail = async (req, res, next) => {
  try {
    const db = getDb();
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ success: false, error: 'Not a valid tool id.' });
    }
    const tool = await db.collection('tools').findOne({ _id: ObjectId(id) });

    res.status(200).json({ success: true, data: tool });
  } catch (error) {
    next(error);
  }
};

module.exports.updateTool = (req, res) => {
  // const newData = req.body;
  const { id } = req.params;
  const filter = { _id: id };
  const newData = tools.find((tool) => tool.id === Number(id));

  newData.id = id;
  newData.name = req.body.name;
  res.send(newData);
};

module.exports.deleteTool = (req, res) => {
  const { id } = req.params;
  const filter = { _id: id };

  tools = tools.filter((tool) => tool.id !== Number(id));

  res.send(tools);
};
