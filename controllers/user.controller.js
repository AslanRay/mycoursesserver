const { response } = require('express');
const UserModel = require('../models/user.model');

exports.findAll = async (request, response) => {
  const users = await UserModel.find();
  console.log('user', users);

  response.status(200).send({
    data: users,
  });
};

exports.save = async (request, response) => {
  const newUser = request.body;

  await UserModel.save(newUser);

  response.status(201).send({});
}