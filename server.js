'use strict';

const express = require('express');
const uncapitalize = require('./uncapitalize/uncapitalize');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/uncapitalize-me', function(request, response, next) {
  if (request.query.message) {
    let lowerMessage = uncapitalize(request.query.message);
    response.send(lowerMessage);
  } else {
    response.send('Please attach a message');
  }
});

module.exports = app;