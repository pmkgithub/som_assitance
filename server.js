'use strict';

const config = require('./config');
const express = require('express');
const app = express();
const jsonParser = require('body-parser').json({ type: 'application/json' });
// const path = require('path');
const morgan = require('morgan');

// routes
const routesApi = require('./app_api/routes/index');
const routes = require('./app_server/routes/index');

// middlewares
app.use(jsonParser);
app.use(morgan('common'));
// app.use(cors);
app.use(express.static('public')); // valid syntax
app.use('/api', routesApi);
app.use('/', routes);

// start server
app.listen(config.PORT, () => {
  console.log('App is running on PORT', config.PORT);
});

module.exports = app;