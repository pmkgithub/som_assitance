'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const AuthController = require('./controllers/authentication');
const {EVENTS_DATA, TASTINGS_DATA, TASTING_DETAIL_DATA} = require('./testData/test_data');

// middlewares
app.use(morgan('common'));
// app.use(cors);

// WAY 1 - all HTML files in /views/xxx.html - BEGIN
app.use(express.static('public'));

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
// events
// TESTING CODE - BEGIN
app.get('/', (req, res) => {
  // res.sendFile(__dirname + '/views/events_index.html');
  res.json({
    "events": [
      {
        "id": "1",
        "timestamp": 1470016976601,
        "date": "1-1-18",
        "eventDesc": "Tuesday Tasting"
      },
      {
        "id": "2",
        "timestamp": 1470016976602,
        "date": "1-1-18",
        "eventDesc": "Wednesday Tasting"
      },
      {
        "id": "3",
        "timestamp": 1470016976603,
        "date": "1-1-18",
        "eventDesc": "Tuesday Tasting"
      },
      {
        "id": "4",
        "timestamp": 1470016976604,
        "date": "1-1-18",
        "eventHost": "Avant Partir",
        "eventDesc": "RHN Tasting"
      },
    ]
  });

});
// TESTING CODE - END
// app.get('/events', (req, res) => {
//   // res.sendFile(__dirname + '/views/events_index.html');
//   res.json({
//     "events": [
//       {
//         "id": "1",
//         "timestamp": 1470016976601,
//         "date": "1-1-18",
//         "eventDesc": "Tuesday Tasting"
//       },
//       {
//         "id": "2",
//         "timestamp": 1470016976602,
//         "date": "1-1-18",
//         "eventDesc": "Wednesday Tasting"
//       },
//       {
//         "id": "3",
//         "timestamp": 1470016976603,
//         "date": "1-1-18",
//         "eventDesc": "Tuesday Tasting"
//       },
//       {
//         "id": "4",
//         "timestamp": 1470016976604,
//         "date": "1-1-18",
//         "eventHost": "Avant Partir",
//         "eventDesc": "RHN Tasting"
//       },
//     ]
//   });
// });
app.get('/events', (req, res) => {
  // res.sendFile(__dirname + '/views/events_index.html');
  res.json(EVENTS_DATA);
});
app.get('/events/new', (req, res) => {
  res.sendFile(__dirname + '/views/event_form.html');
});
app.get('/events/:eventId', (req, res) => {
  res.sendFile(__dirname + '/views/events_expanded.html');
});
app.get('/events/:eventId/edit', (req, res) => {
  res.sendFile(__dirname + '/views/event_form.html');
});
app.post('/events', (req, res) => {
  // res.send('new event posted');
  res.json({
    "date": "1-1-18",
    "eventName": "Tuesday Tasting",
  });
});
app.put('/events/:eventId', (req, res) => {
  res.send('event updated');
});
app.delete('/events/:eventId', (req, res) => {
  res.send('event deleted');
});

// tastings
app.get('/events/:eventId/tastings/new', (req, res) => {
  res.sendFile(__dirname + '/views/tasting_form.html');
});
app.get('/events/:eventId/tastings/:tastingId', (req, res) => {
  res.sendFile(__dirname + '/views/tasting_detail.html');
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