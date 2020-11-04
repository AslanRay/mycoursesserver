const mongoose = require('mongoose');

const courseTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

courseTypeSchema.set('toJSON', { virtuals: true });

const CourseType = mongoose.model('CourseTypes', courseTypeSchema);

exports.find = () => CourseType.find();

exports.findById = (id) => CourseType.findById(id);

exports.save = (newCourseType) => {
  const courseType = new CourseType(newCourseType);
  return courseType.save();
};

exports.update = (id, newFields) => CourseType.findByIdAndUpdate(
  id,
  { $set: newFields },
  { new: true },
);

exports.delete = (id) => CourseType.findByIdAndDelete(id);
