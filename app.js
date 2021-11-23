const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const patchRoute = require('./api/routes/patches');
const userRoute = require('./api/routes/auth');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/patches', patchRoute);
app.use('/api/users', userRoute);

app.use((req, res, next) => {
  const error = new Error('NOT FOUND');
  error.status = 404;
  next(error); // parsing execution forward to avoid hanging
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
  next();
});

module.exports = app;
