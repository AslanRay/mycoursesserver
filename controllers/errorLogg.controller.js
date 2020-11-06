const ErrorLoggModel = require('../models/errorLogg.model');

exports.findAll = async (request, response) => {
  const errorLogg = await ErrorLoggModel.find();

  response.status(200).send({
    data: errorLogg,
  });
};

exports.save = async (request, response) => {
  const { where, errorMessage, loggedAt } = request.body;

  await ErrorLoggModel.save({ where, errorMessage, loggedAt });

  response.status(201).send({});
};
