const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('./database');

const { DEFAULT_SERVER_PORT } = require('./utils/constants.js');

const app = express();

app.set('Port', DEFAULT_SERVER_PORT);

app.listen(app.get('Port'), () => {
  console.log(`En el puerto ${app.get('Port')}`);
});
