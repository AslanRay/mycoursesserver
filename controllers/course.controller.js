const CourseModel = require('../models/course.model');

exports.findAll = async (request, response) => {
  const users = await CourseModel.find();

  response.status(200).send({
    data: users,
  });
};

exports.findById = async (request, response) => {
  const { id } = request.params;
  const course = await CourseModel.findById(id);

  if (course) {
    response.status(200).send({
      data: course,
    });
  } else {
    response.status(404).send({
      data: null,
      message: `Course ${id} not found`,
    });
  }
};

exports.save = async (request, response) => {
  const { name, link, description } = request.body;

  await CourseModel.save({ name, link, description });

  response.status(201).send({});
};

exports.update = async (request, response) => {
  const { id } = request.params;
  const {
    name, link, description,
  } = request.body;

  await CourseModel.update(id, { name, link, description });

  response.status(204).send();
};

exports.delete = async (request, response) => {
  const { id } = request.params;
  await CourseModel.delete(id);
  response.status(204).send();
};
