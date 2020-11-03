const express = require('express');

const { DEFAULT_SERVER_PORT } = require('./utils/constants.js');

const app = express();

app.set('Port', DEFAULT_SERVER_PORT);

app.listen(app.get('Port'), () => {
  console.log(`Escuchando en el puerto ${app.get('Port')}`);
});
