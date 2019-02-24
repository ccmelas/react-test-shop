const express = require('express');
const logger = require('morgan');
const apiRoutes = require('./routes');

const app = express();

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api/', apiRoutes);

module.exports = app;