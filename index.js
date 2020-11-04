const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
require('./database');
const { DEFAULT_SERVER_PORT } = require('./utils/constants.js');
// const { userRouter } = require('./routes/routerIndex');
const userRouters = require('./routes/user.router');

const app = express();

app.set('Port', DEFAULT_SERVER_PORT);

app.get('/', (request, response) => {
  response.send('Hello World');
});

app.use(bodyParser.json());
userRouters.routersConfig(app);

app.listen(app.get('Port'), () => {
  console.log(`Server started on port ${app.get('Port')}`);
});
