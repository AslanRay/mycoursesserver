const mongoose = require('mongoose');

const userCoursesTrackerSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  courseName: {
    type: String,
    required: true,
  },
  courseType: {
    type: String,
    required: true,
  },
  loggedTime: {
    type: String,
    required: true,
  },
});

userCoursesTrackerSchema.set('toJSON', { virtuals: true });

const UserCoursesTracker = mongoose.model('UserCoursesTracker', userCoursesTrackerSchema);

exports.find = () => UserCoursesTracker.find();

exports.findById = (id) => UserCoursesTracker.findById(id);

exports.save = (newUserCoursesTracker) => {
  const userCoursesTracker = new UserCoursesTracker(newUserCoursesTracker);
  return userCoursesTracker.save();
};

exports.update = (id, newFields) => UserCoursesTracker.findByIdAndUpdate(
  id,
  { $set: newFields },
  { new: true },
);

exports.delete = (id) => UserCoursesTracker.findByIdAndDelete(id);
