'use strict';

const express = require('express');
const app = express();
// const path = require('path');
const morgan = require('morgan');
// const mongoose = require('mongoose');
// mongoose.connect(config.localdb);
// const {Event} = require('./app_api/models/model_tasting_event');
// mongoose.Promise = global.Promise;  // for mocha tests testing CRUD operations to MongoDB.
// const config = require('./config');
const {EVENTS_DATA, TASTINGS_DATA, TASTING_DETAIL_DATA} = require('./testData/test_data'); // static test data.
// const cors = require('cors');

// TODO - server.js - auth code
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json({ type: 'application/json' });


// const AuthController = require('./controllers/authentication');

const routesApi = require('./app_api/routes/index');
const routes = require('./app_server/routes/index');


// middlewares
app.use(morgan('common'));
// app.use(cors);
app.use(express.static('public')); // valid syntax
// app.use(express.static(path.join(__dirname, 'public'))); // this is valid syntax too.
app.use('/api', routesApi);
app.use('/', routes);

// TODO - server.js - middlewares for auth
// middleware for auth
app.use(bodyParser.json());

// start server
app.listen(process.env.PORT || 8080, () => {
  console.log('App is running on PORT', process.env.PORT || 8080);
});

module.exports = app;