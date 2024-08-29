const express = require('express');
const path = require('path');
const horaMiddleware = require('./middlewares/horaMiddleware');
const validarHora = require('./middlewares/validarHora');
const Router1 = require('./routes/index');
const endRouter = require('./routes/endroute');

const app = express();
const port = 3000;
app.use(horaMiddleware)