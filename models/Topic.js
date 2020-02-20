const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    unique: true,
    trim: true
  },
  description: {
    type: String,
    maxlength: [500, 'Description cannot be more than 500 characters long']
  },
  startdate: {
    type: Date,
    default: Date.now,
    required: true
  }
});

module.exports = mongoose.model('Topic', TopicSchema);
