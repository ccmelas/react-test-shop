const express = require('express');
const logger = require('morgan');
const apiRoutes = require('./routes');
const ErrorHandler = require('./handlers/ErrorHandler');

const app = express();

// Set up logging
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Register API routes
app.use('/api/', apiRoutes);

// Registers handler for when routes are not found
app.use(ErrorHandler.notFound);

// Registers handler for all errors
app.use(ErrorHandler.handler);

module.exports = app;