const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
require('./database');
const { DEFAULT_SERVER_PORT } = require('./utils/constants.js');
const userRouters = require('./routes/user.router');
const courseRouters = require('./routes/course.router');
const courseTypeRouters = require('./routes/courseType.router');
const errorLoggRouters = require('./routes/errorLogg.router');
const userCoursesTrackerRouters = require('./routes/userCoursesTracker.router');
const swaggerDocument = require('./swagger.json');

const app = express();

app.set('Port', DEFAULT_SERVER_PORT);

app.get('/', (request, response) => {
  response.send('Hello World');
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use(cors());

userRouters.routersConfig(app);

courseRouters.routersConfig(app);

courseTypeRouters.routersConfig(app);

errorLoggRouters.routersConfig(app);

userCoursesTrackerRouters.routersConfig(app);

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, { explorer: true }),
);

app.listen(app.get('Port'), () => {
  console.log(`Server started on port ${app.get('Port')}`);
});
