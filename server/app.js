const express = require('express');
const logger = require('morgan');
const path = require('path');
const apiRoutes = require('./routes');
const ErrorHandler = require('./handlers/ErrorHandler');

const app = express();

// Set up logging
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../build')))

// Register API routes
app.use('/api/', apiRoutes);

// Serve the react application
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/../build/index.html'));
});

// Registers handler for when routes are not found
app.use(ErrorHandler.notFound);

// Registers handler for all errors
app.use(ErrorHandler.handler);

module.exports = app;