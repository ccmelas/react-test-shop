const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const path = require('path');
const apiRoutes = require('./routes');
const ErrorHandler = require('./handlers/ErrorHandler');

const app = express();

app.use(cors());

// Set up logging
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

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