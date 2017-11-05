var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var favicon = require('serve-favicon');

const PORT = process.env.PORT || 3000;

// connect database
require('./db');

// Setup server
var app = express();

app.use(favicon(path.join(__dirname, '..', 'client', 'favicon.ico')));

// use middlewares
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// serve static files
app.use(express.static(path.join(__dirname, '..', 'client')));

// define our API
app.use('/api/memos', require('./memos'));

app.use('/moduli', express.static(path.join(__dirname, '..', 'node_modules')));

// serve always index.html
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

// Start server
app.listen(PORT, function () {
  console.log('Express server listening on %d', PORT);
});