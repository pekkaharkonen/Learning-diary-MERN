const express = require('express');
const router = express.Router();
const {
  getTopic,
  getTopics,
  createTopic,
  updateTopic,
  deleteTopic
} = require('../controllers/topics');

router
  .route('/')
  .get(getTopics)
  .post(createTopic);

router
  .route('/:id')
  .get(getTopic)
  .put(updateTopic)
  .delete(deleteTopic);

module.exports = router;
