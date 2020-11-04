const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

courseSchema.set('toJSON', { virtuals: true });

const Course = mongoose.model('Courses', courseSchema);

exports.find = () => Course.find();

exports.findById = (id) => Course.findById(id);

exports.save = (newCourse) => {
  const course = new Course(newCourse);
  return course.save();
};

exports.update = (id, newFields) => Course.findByIdAndUpdate(
  id,
  { $set: newFields },
  { new: true },
);

exports.delete = (id) => Course.findByIdAndDelete(id);
