'use strict';

const express = require('express');
const app = express();
// const path = require('path');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json({ type: 'application/json' });
const morgan = require('morgan');
// const mongoose = require('mongoose');
// mongoose.connect(config.localdb);
// const {Event} = require('./app_api/models/model_tasting_event');
// mongoose.Promise = global.Promise;  // for mocha tests testing CRUD operations to MongoDB.
// const config = require('./config');
const {EVENTS_DATA, TASTINGS_DATA, TASTING_DETAIL_DATA} = require('./testData/test_data'); // static test data.
// const cors = require('cors');

// const AuthController = require('./controllers/authentication');


const routesApi = require('./app_api/routes/index');
const routes = require('./app_server/routes/index');


// middlewares
app.use(morgan('common'));
// app.use(bodyParser.json());
// app.use(cors);
app.use(express.static('public')); // valid syntax
// app.use(express.static(path.join(__dirname, 'public'))); // this is valid syntax too.
app.use('/api', routesApi);
app.use('/', routes);

// ************************************************************************* //
// TASTING NOTES - BEGIN
// ************************************************************************* //
// api routes
// moved to API router
// app.get('/api/tasting-note-detail/:tastingId', (req, res) => {
//   console.log('server.js app.get(/api/tasting-note-detail/:tastingId ran');
//   console.log('req.params', req.params);
//   res.json(TASTING_DETAIL_DATA)
// });
// app.post('/events/:eventsId/tastings', (req, res) => {
//   res.send('new tasting note posted');
// });
// app.put('/events/:eventsId/tastings/:tastingId', (req, res) => {
//   res.send('tasting note updated');
// });
// app.delete('/events/:eventsId/tastings/:tastingId', (req, res) => {
//   res.send('tasting note deleted');
// });

// tastings content server routes
// moved to CONTER SERVER router
// // FORM for new TASTING NOTE
// app.get('/tasting-events/:eventId/tastings/new', (req, res) => {
//   res.sendFile(__dirname + '/views/tasting_note_form.html');
// });
// FORM for editing an existing TASTING NOTE
app.get('/events/:eventId/tastings/:tastingId/edit', (req, res) => {
  res.sendFile(__dirname + '/views/tasting_note_form.html');
});

// ************************************************************************* //
// TASTING NOTES - END
// ************************************************************************* //



// start server
app.listen(process.env.PORT || 8080, () => {
  console.log('App is running on PORT', process.env.PORT || 8080);
});

module.exports = app;