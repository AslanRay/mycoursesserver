const mongoose = require('mongoose');
const { URI_MONGO } = require('./utils/constants');

mongoose
  .connect(URI_MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => console.log('database connected'))
  .catch((error) => console.log(error));

module.exports = mongoose;
