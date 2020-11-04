const express = require('express');

const userRouter = express.Router();
const { userModel } = require('../models/modelsIndex');

userRouter.get('/api/users', (request, response) => {
  userModel.find({}, (error, result) => {
    if (error) {
      response.status(400).send({
        success: false,
        error: error.message,
      });
    }
    response.status(200).send({
      success: true,
      data: result,
    });
  });
});

userRouter.get('/api/users/:user_id', (request, response) => {
  userModel.findById(request.params.user_id, (error, result) => {
    if (error) {
      response.status(400).send({
        success: false,
        error: error.message,
      });
    }
    response.status(200).send({
      success: true,
      data: result,
    });
  });
});

userRouter.post('/api/users', (request, response) => {
  const newUser = {
    name: request.body.name,
    email: request.body.email,
    password: request.body.password,
  };
  userModel.create(newUser, (error, result) => {
    if (error) {
      response.status(400).send({
        success: false,
        error: error.message,
      });
    }
    response.status(200).send({
      success: true,
      data: result,
      message: 'User created succesfully',
    });
  });
});

userRouter.patch('/api/users/:user_id', (request, response) => {
  const fieldsToUpdate = request.body;
  userModel.findByIdAndUpdate(
    request.params.user_id,
    { $set: fieldsToUpdate },
    { new: true },
    (error, result) => {
      if (error) {
        response.status(400).send({
          success: false,
          error: error.message,
        });
      }
      response.status(200).send({
        success: true,
        data: result,
        message: 'User updated succesfully',
      });
    },
  );
});

userRouter.delete('/api/users/:user_id', (request, response) => {
  userModel.findByIdAndDelete(request.params.user_id, (error, result) => {
    if (error) {
      response.status(400).send({
        success: false,
        error: error.message,
      });
    }
    response.status(200).send({
      success: true,
      data: result,
      message: 'User delated succesfully',
    });
  });
});
