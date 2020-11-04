const UserModel = require('../models/user.model');

exports.findAll = async (request, response) => {
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

  await UserModel.save({ name, email, password });

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
  const { id } = request.params;
  await UserModel.delete(id);
  response.status(204).send();
};
