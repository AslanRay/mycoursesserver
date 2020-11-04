const CourseTypeModel = require('../models/courseType.model');

exports.findAll = async (request, response) => {
  const courseType = await CourseTypeModel.find();

  response.status(200).send({
    data: courseType,
  });
};

exports.findById = async (request, response) => {
  const { id } = request.params;
  const courseType = await CourseTypeModel.findById(id);

  if (courseType) {
    response.status(200).send({
      data: courseType,
    });
  } else {
    response.status(404).send({
      data: null,
      message: `CourseType ${id} not found`,
    });
  }
};

exports.save = async (request, response) => {
  const { name } = request.body;

  await CourseTypeModel.save({ name });

  response.status(201).send({});
};

exports.update = async (request, response) => {
  const { id } = request.params;
  const { name } = request.body;

  await CourseTypeModel.update(id, { name });

  response.status(204).send();
};

exports.delete = async (request, response) => {
  const { id } = request.params;
  await CourseTypeModel.delete(id);
  response.status(204).send();
};
