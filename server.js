'use strict';

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json({ type: 'application/json' });
const morgan = require('morgan');
// const mongoose = require('mongoose');
// mongoose.connect(config.localdb);
// const {Event} = require('./app_api/models/model_tasting_event');
// mongoose.Promise = global.Promise;  // for mocha tests testing CRUD operations to MongoDB.
// const config = require('./config');
// const {EVENTS_DATA, TASTINGS_DATA, TASTING_DETAIL_DATA} = require('./testData/test_data');
// const cors = require('cors');

// const AuthController = require('./controllers/authentication');


const routesApi = require('./app_api/routes/indexs');
const routes = require('./app_server/routes/index');


// middlewares
app.use(morgan('common'));
// app.use(bodyParser.json());
// app.use(cors);
app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', routesApi);
app.use('/', routes);


// ************************************************************************* //
// SIGNUP / SIGNIN - BEGIN
// ************************************************************************* //
// // signin, signup.
// app.get('/signup', (req, res) => {
//   res.sendFile(__dirname + '/views/signup_form.html');
// });
// app.post('/signup', (req, res) => {
//   res.json({
//     "username": "joe@gmail.com",
//     "firstName": "Joe",
//     "lastName": "Dirt"
//   });
// });
// app.get('/signin', (req, res) => {
//   res.sendFile(__dirname + '/views/signin_form.html');
// });
// app.post('/signin', (req, res) => {
//   res.json({
//     "username": "joe@gmail.com",
//     "firstName": "Joe",
//     "lastName": "Dirt"
//   });
// });
// ************************************************************************* //
// SIGNUP / SIGNIN - BEGIN
// ************************************************************************* //


// ************************************************************************* //
// TASTINGS EVENTS - BEGIN
// ************************************************************************* //

// ********************************** //
// API ROUTES - TASTING EVENTS
// ********************************** //
// app.get('/api/tasting-events', (req, res) => {
//   res.json(EVENTS_DATA);
// });
// app.post('/api/tasting-events/new', jsonParser, (req, res) => {
//   console.log('req.body = ', req.body);
//
//   // make sure client didn't send unexpected fields.
//   const requiredFields = ['eventName', 'eventHost'];
//   for( let i=0; i< requiredFields.length; i++) {
//     const field = requiredFields[i];
//
//     if ( !(field in req.body) ) {
//       const message = `Missing \`${field}\` in request body`;
//       console.error(message);
//       return res.status(400).send(message);
//     }
//   }
//
//   Event
//     .create({
//       eventName: req.body.eventName,
//       eventHost: req.body.eventHost
//     })
//     .then(event => res.status(201).json(event.serialize()))
//     .catch(err => {
//       console.error(err);
//       res.status(500).json({ message: 'Internal server error', err: err });
//     });
//
// });
// app.put('/events/:eventId', (req, res) => {
//   res.send('event updated');
// });
// app.delete('/events/:eventId', (req, res) => {
//   res.send('event deleted');
// });
// app.get('/api/events/:eventId', (req, res) => {
//   res.json(TASTINGS_DATA);
// });

// ********************************** //
// ROUTES - TASTING EVENTS
// ********************************** //
// app.get('/tasting-events', (req, res) => {
//   res.sendFile(__dirname + '/public/views/tasting_events_list.html');
// });
//
// app.get('/tasting-events/new', (req, res) => {
//   res.sendFile(__dirname + '/public/views/tasting_event_form.html');
// });
//
// app.get('/tasting-events/:eventId/edit', (req, res) => {
//   res.sendFile(__dirname + 'public/views/event_form.html');
// });

// ************************************************************************* //
// TASTINGS EVENTS - END
// ************************************************************************* //

// ************************************************************************* //
// TASTING NOTES - BEGIN
// ************************************************************************* //
// api routes
app.get('/api/tastings/:tastingId', (req, res) => {
  console.log('app.get(/api/tastings/:tastingId ran');
  res.json(TASTING_DETAIL_DATA)
});

// tastings routes
app.get('/events/:eventId/tastings/new', (req, res) => {
  res.sendFile(__dirname + '/views/tasting_form.html');
});
app.get('/events/:eventId/tastings/:tastingId/edit', (req, res) => {
  res.sendFile(__dirname + '/views/tasting_form.html');
});
app.post('/events/:eventsId/tastings', (req, res) => {
  res.send('new tasting note posted');
});
app.put('/events/:eventsId/tastings/:tastingId', (req, res) => {
  res.send('tasting note updated');
});
app.delete('/events/:eventsId/tastings/:tastingId', (req, res) => {
  res.send('tasting note deleted');
});
// ************************************************************************* //
// TASTING NOTES - END
// ************************************************************************* //

// ************************************************************************* //
// SEARCH - BEGIN
// ************************************************************************* //
// search
app.get('/search/:tastingId', (req, res) => {
  res.sendFile(__dirname + '/views/tasting_detail.html');
});
app.post('/search', (req, res) => {
  res.send('search form posted - search results list provided');
});

// ************************************************************************* //
// SEARCH - END
// ************************************************************************* //


// start server
app.listen(process.env.PORT || 8080, () => {
  console.log('App is running on PORT', process.env.PORT || 8080);
});

module.exports = app;