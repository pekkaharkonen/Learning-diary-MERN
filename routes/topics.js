const express = require('express')
const router = express.Router();

router.route('/').get(getTopics).post(createTopic)

router.route('/:id').get(getTopic).put(updateTopic).delete(deleteTopic)


module.exports = router;