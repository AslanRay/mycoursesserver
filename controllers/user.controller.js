const dotenv = require('dotenv');
const UserModel = require('../models/user.model');
const { createHashedPassword } = require('../utils/createHashedPassword');
const { compareHashedPassword } = require('../utils/compareHashedPassword');
const { generateJWT } = require('../utils/generateJWT');

dotenv.config();

const {
  JWT_KEY,
  TOKEN_EXPIRATION,
} = process.env;

exports.findAll = async (request, response) => {
  console.log('findAll');
  const users = await UserModel.find();

  response.status(200).send({
    data: users,
  });
};

exports.findById = async (request, response) => {
  const { id } = request.params;
  const user = await UserModel.findById(id);

  if (user) {
    response.status(200).send({
      data: user,
    });
  } else {
    response.status(404).send({
      data: null,
      message: `User ${id} not found`,
    });
  }
};

exports.save = async (request, response) => {
  const { name, email, password } = request.body;
  const hashedPassword = await createHashedPassword(password);

  await UserModel.save({ name, email, password: hashedPassword });

  response.status(201).send({});
};

exports.update = async (request, response) => {
  const { id } = request.params;
  const {
    name, email, password,
  } = request.body;

  await UserModel.update(id, { name, email, password });

  response.status(204).send();
};

exports.delete = async (request, response) => {
  try {
    const { id } = request.params;
    await UserModel.delete(id);
    response.status(204).send();
  } catch (error) {
    console.log(error.message);
    response.status(500).send({});
  }
};

exports.login = async (request, response) => {
  const { email, password } = request.body;
  const user = await UserModel.findByEmail(email);

  if (user) {
    const isPaswordValid = await compareHashedPassword(password, user.password);
    const token = generateJWT(user);
    if (isPaswordValid) {
      response.status(200).send({ data: { user, token } });
    } else {
      response.status(404).send({
        data: null,
        message: 'Wrong email or password',
      });
    }
  } else {
    response.status(404).send({
      data: null,
      message: 'Wrong email or password',
    });
  }
};
