const mongoose = require('mongoose');

const courseTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const CourseType = mongoose.model('User', courseTypeSchema);

module.exports = CourseType;
