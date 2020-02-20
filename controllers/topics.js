const Topic = require('../models/Topic');

exports.getTopics = async (req, res, next) => {
  try {
    const topics = await Topic.find();
    res.status(200).json({ success: true, data: topics });
  } catch (err) {
    res.status(400).json({ success: false });
    next(err);
  }
};

exports.createTopic = async (req, res, next) => {
  try {
    const topic = await Topic.create(req.body);
    res.status(201).json({ success: true, data: topic });
  } catch (err) {
    res.status(400).json({ success: false });
    next(err);
  }
};

exports.updateTopic = async (req, res, next) => {
  try {
    const topic = await Topic.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!topic) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: topic });
  } catch (err) {
    res.status(400).json({ success: false });
    next(err);
  }
};

exports.getTopic = async (req, res, next) => {
  try {
    const topic = await Topic.findById(req.params.id);
    //If topic is not found in the database:
    if (!topic) {
      res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: topic });
  } catch (err) {
    res.status(400).json({ success: false });
    next(err);
  }
};

exports.deleteTopic = async (req, res, next) => {
  try {
    const topic = await Topic.findByIdAndDelete(req.params.id);
    if (!topic) {
      res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false });
    next(err);
  }
};
