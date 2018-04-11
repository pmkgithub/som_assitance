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
// router.get('/events', ctrlEvents.getAllTastingEvents); // old - without auth - working
router.get('/events', requireAuth, ctrlEvents.getAllTastingEvents); // new - with auth - working
// router.post('/events', jsonParser, ctrlEvents.postTastingEventData); // old - before jsonParser added to server.js
router.post('/events', ctrlEvents.postTastingEventData); // new - after jsonParser added to server.js
router.delete('/events/:eventId', ctrlEvents.deleteEvent);
router.get('/events/edit/:eventId', ctrlEvents.getOneTastingEvent);
// router.put('/events/edit/:eventId', jsonParser, ctrlEvents.putTastingEventData);  // old - before jsonParser added to server.js
router.put('/events/edit/:eventId', ctrlEvents.putTastingEventData);  // new - after jsonParser added to server.js
// router.put('/events/edit/:eventId', jsonParser, ctrlEvents.putTastingEventData);  // old - before jsonParser added to server.js
router.put('/events/edit/:eventId', ctrlEvents.putTastingEventData);  // new - after jsonParser added to server.js

// tastings
router.get('/tastings/:eventId', ctrlTastings.getTastingNotes);
// router.post('/tastings/:eventId', jsonParser, ctrlTastings.postTastingNoteData); // old - before jsonParser added to server.js
router.post('/tastings/:eventId', ctrlTastings.postTastingNoteData); // old - before jsonParser added to server.js
router.delete('/tastings/:tastingId', ctrlTastings.deleteTastingNote);
router.get('/tastings/edit/:tastingId', ctrlTastings.getOneTastingNote);
// router.put('/tastings/edit/:tastingId', jsonParser, ctrlTastings.putTastingNoteData); // old - before jsonParser added to server.js
router.put('/tastings/edit/:tastingId', ctrlTastings.putTastingNoteData); // new - after jsonParser added to server.js

// search
// router.post('/search', jsonParser, ctrlSearch.postTastingNotesSearchData); // old - before jsonParser added to server.js
router.post('/search', ctrlSearch.postTastingNotesSearchData); // new - after jsonParser added to server.js

// authentication
// router.post('/signin', ctrlAuth.signin);
// router.post('/signin', jsonParser, ctrlAuth.signin); // old - before jsonParser added to server.js
// router.post('/signin', ctrlAuth.signin); // new - after jsonParser added to server.js
router.post('/signin', requireSignin, ctrlAuth.signin); // TODO - WIP

// router.post('/signup', jsonParser, ctrlAuth.signup); // this route runs. // old - before jsonParser added to server.js
router.post('/signup', ctrlAuth.signup); // this route runs. // new - after jsonParser added to server.js

module.exports = router;