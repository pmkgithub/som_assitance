'use strict';

const config = require('./config');
const express = require('express');
const app = express();
const jsonParser = require('body-parser').json({ type: 'application/json' });
// const path = require('path');
const morgan = require('morgan');

// db connection vars.
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const { DATABASE_URL, PORT } = require('./config');

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

// // Start server without testing code in place - BEGIN
// app.listen(config.PORT, () => {
//   console.log('App is running on PORT', config.PORT);
// });
//
// module.exports = app;
// // Start server without testing code in place - END


// Start/Stop server WITH testing code in place - BEGIN
// Code has BOTH start/close server logic.
// both runServer and closeServer need to access the same
// server object, so we declare `server` here, and then when
// runServer runs, it assigns a value.
let server;

// this function starts our server and returns a Promise.
// In our test code, we need a way of asynchronously starting
// our server, since we'll be dealing with promises there.
function runServer(databaseUrl, port = PORT) {
  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, err => {
      if (err) {
        return reject(err);
      }
      server = app.listen(port, () => {
        console.log(`Your app is listening on port ${port}`);
        resolve();
      })
      .on('error', err => {
        mongoose.disconnect();
        reject(err);
      });
    });
  });
}

// like `runServer`, this function also needs to return a promise.
// `server.close` does not return a promise on its own, so we manually
// create one.
function closeServer() {
  return new Promise((resolve, reject) => {
    console.log('Closing server');
    server.close(err => {
      if (err) {
        reject(err);
        // so we don't also call `resolve()`
        return;
      }
      resolve();
    });
  });
}

// If server.js is called directly (aka, with `node server.js`), this block runs,
// But we also export the runServer command so other code (for instance, test code)
// can start the server as needed.
if (require.main === module) {
  runServer(DATABASE_URL).catch(err => console.error(err));
}

module.exports = {app, runServer, closeServer};
// Start/Stop server WITH testing code in place - END
