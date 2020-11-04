const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.set('toJSON', { virtuals: true });

const User = mongoose.model('Users', userSchema);

exports.find = () => User.find();

exports.save = (newUser) => {
  const user = new User(newUser);
  return user.save();
};
