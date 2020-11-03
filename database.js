const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const mongooseOptions = {
  autoIndex: false,
  bufferMaxEntries: 0,
  poolSize: 10,
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const {
  MONGO_HOSTNAME,
  MONGO_DB,
  MONGO_PORT,
} = process.env;

const dbConnectionURL = {
  LOCALURL: `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`,
};

mongoose
  .connect(dbConnectionURL.LOCALURL, mongooseOptions)
  .then(() => console.log('database connected wth env'))
  .catch((error) => console.log(error));

module.exports = mongoose;
