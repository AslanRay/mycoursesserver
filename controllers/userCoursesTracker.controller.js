const UserCoursesTrackerModel = require('../models/userCoursesTracker.model');

const ErrorLoggModel = require('../models/errorLogg.model');

exports.findAll = async (request, response) => {
  try {
    const courses = await UserCoursesTrackerModel.find();

    response.status(200).send({
      data: courses,
    });
  } catch (error) {
    ErrorLoggModel.save({ where: 'UserCoursesTracker find all', errorMessage: error.message, loggedAt: new Date() });
    response.status(500).send({});
  }
};

exports.findById = async (request, response) => {
  try {
    const { id } = request.params;
    const course = await UserCoursesTrackerModel.findById(id);

    if (course) {
      response.status(200).send({
        data: course,
      });
    } else {
      response.status(404).send({
        data: null,
        message: `UserCoursesTracker ${id} not found`,
      });
    }
  } catch (error) {
    ErrorLoggModel.save({ where: 'UserCoursesTracker find by id', errorMessage: error.message, loggedAt: new Date() });
    response.status(500).send({});
  }
};

exports.save = async (request, response) => {
  try {
    const {
      userName, courseName, courseType, loggedTime,
    } = request.body;

    await UserCoursesTrackerModel.save({
      userName, courseName, courseType, loggedTime,
    });

    response.status(201).send({});
  } catch (error) {
    ErrorLoggModel.save({ where: 'UserCoursesTracker save', errorMessage: error.message, loggedAt: new Date() });
    response.status(500).send({});
  }
};

exports.update = async (request, response) => {
  try {
    const { id } = request.params;
    const {
      userName, courseName, courseType, loggedTime,
    } = request.body;

    await UserCoursesTrackerModel.update(id, {
      userName, courseName, courseType, loggedTime,
    });

    response.status(204).send();
  } catch (error) {
    ErrorLoggModel.save({ where: 'UserCoursesTracker update', errorMessage: error.message, loggedAt: new Date() });
    response.status(500).send({});
  }
};

exports.delete = async (request, response) => {
  try {
    const { id } = request.params;
    await UserCoursesTrackerModel.delete(id);
    response.status(204).send();
  } catch (error) {
    ErrorLoggModel.save({ where: 'UserCoursesTracker delete', errorMessage: error.message, loggedAt: new Date() });
    response.status(500).send({});
  }
};
