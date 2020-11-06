const mongoose = require('mongoose');

const errorLoggSchema = new mongoose.Schema({
  where: {
    type: String,
    required: true,
  },
  errorMessage: {
    type: String,
    required: true,
  },
  loggedAt: {
    type: Date,
    required: true,
  },
});

errorLoggSchema.set('toJSON', { virtuals: true });

const ErrorLogg = mongoose.model('ErrorLoggs', errorLoggSchema);

exports.find = () => ErrorLogg.find();

exports.save = (newErrorLogg) => {
  const errorLogg = new ErrorLogg(newErrorLogg);
  return errorLogg.save();
};
