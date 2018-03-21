'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const morgan = require('morgan');
const cors = require('cors');
const app = express();
// const AuthController = require('./controllers/authentication');
const {EVENTS_DATA, TASTINGS_DATA, TASTING_DETAIL_DATA} = require('./testData/test_data');

// middlewares
app.use(morgan('common'));
// app.use(cors);
app.use(express.static('public'));

// ************************************************************************* //
// SIGNUP / SIGNIN - BEGIN
// ************************************************************************* //
// signin, signup.
app.get('/signup', (req, res) => {
  res.sendFile(__dirname + '/views/signup_form.html');
});
app.post('/signup', (req, res) => {
  res.json({
    "username": "joe@gmail.com",
    "firstName": "Joe",
    "lastName": "Dirt"
  });
});
app.get('/signin', (req, res) => {
  res.sendFile(__dirname + '/views/signin_form.html');
});
app.post('/signin', (req, res) => {
  res.json({
    "username": "joe@gmail.com",
    "firstName": "Joe",
    "lastName": "Dirt"
  });
});
// ************************************************************************* //
// SIGNUP / SIGNIN - BEGIN
// ************************************************************************* //


// ************************************************************************* //
// TASTINGS EVENTS - BEGIN
// ************************************************************************* //
// api routes
app.get('/api/events', (req, res) => {
  // res.sendFile(__dirname + '/views/events_index.html');
  res.json(EVENTS_DATA);
});
app.get('/api/events/:eventId', (req, res) => {
  res.json(TASTINGS_DATA);
});
// tasting events routes
app.get('/events', (req, res) => {
  res.sendFile(__dirname + '/public/views/events_index.html');
});

app.get('/events/new', (req, res) => {
  res.sendFile(__dirname + '/public/views/event_form.html');
});

app.get('/events/:eventId/edit', (req, res) => {
  res.sendFile(__dirname + 'public/views/event_form.html');
});
app.post('/events/new', jsonParser, (req, res) => {
  console.log('req.body = ', req.body);
  // console.log('req.params = ', req.params);
  res.send('new event posted').status(201);
  // res.json({
  //   "message": "Event saved"
  //   // "date": "1-1-18",
  //   // "eventName": "Tuesday Tasting",
  // }).status(201);
});
app.put('/events/:eventId', (req, res) => {
  res.send('event updated');
});
app.delete('/events/:eventId', (req, res) => {
  res.send('event deleted');
});
// ************************************************************************* //
// TASTINGS EVENTS - END
// ************************************************************************* //

// ************************************************************************* //
// TASTINGS - BEGIN
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
// TASTINGS - END
// ************************************************************************* //
// search
app.get('/search/:tastingId', (req, res) => {
  res.sendFile(__dirname + '/views/tasting_detail.html');
});
app.post('/search', (req, res) => {
  res.send('search form posted - search results list provided');
});
// WAY 1 - all HTML files in /views/xxx.html - END

// // WAY 2 - all HTML files in /public - BEGIN
// const path = require('path');
// app.use(express.static(path.join(__dirname, 'public')));
//
// // routes
// app.get('/signup', (req, res, next) => {
//   res.sendFile('signup_form.html');
// });
// app.get('/signin', (req, res, next) => {
//   res.sendFile('signin_form.html');
// });
// // WAY 2 - all HTML files in /public - END

// start server
app.listen(process.env.PORT || 8080, () => {
  console.log('App is running on PORT', process.env.PORT || 8080);
});

module.exports = app;