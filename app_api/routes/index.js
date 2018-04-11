'use strict';
// API SERVER ROUTES

// static test data - for WIP.
// const {EVENTS_DATA, TASTINGS_DATA, TASTING_DETAIL_DATA} = require('../../testData/test_data');

const router = require('express').Router();
const jsonParser = require('body-parser').json({ type: 'application/json' });  // old - before jsonParser added to server.js
const ctrlEvents = require('../controllers/eventsController');
const ctrlTastings = require('../controllers/tastingsController');
const ctrlSearch = require('../controllers/searchController');
const ctrlAuth = require('../controllers/authController');

// passport - BEGIN
const passportService = require('../services/passport');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false} );       // jwtStrategy
const requireSignin = passport.authenticate('local', { session: false } );  // localStrategyu
// passport - END

// events
// router.get('/events', ctrlEvents.getAllTastingEvents); // without auth
router.get('/events', requireAuth, ctrlEvents.getAllTastingEvents); // with auth - not working
router.post('/events', ctrlEvents.postTastingEventData);
router.delete('/events/:eventId', ctrlEvents.deleteEvent);
router.get('/events/edit/:eventId', ctrlEvents.getOneTastingEvent);
router.put('/events/edit/:eventId', ctrlEvents.putTastingEventData); // disregard Webstorm's error.

// tastings
router.get('/tastings/:eventId', ctrlTastings.getTastingNotes);
router.post('/tastings/:eventId', ctrlTastings.postTastingNoteData);
router.delete('/tastings/:tastingId', ctrlTastings.deleteTastingNote);
router.get('/tastings/edit/:tastingId', ctrlTastings.getOneTastingNote);
router.put('/tastings/edit/:tastingId', ctrlTastings.putTastingNoteData); // disregard Webstorm's error.

// search
router.post('/search', ctrlSearch.postTastingNotesSearchData);

// authentication
router.post('/signup', ctrlAuth.signup);
router.post('/signin', requireSignin, ctrlAuth.signin);


module.exports = router;