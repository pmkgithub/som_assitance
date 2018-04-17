'use strict';
// API SERVER ROUTES


const router = require('express').Router();
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

// TODO - .get('/events/:userId', vs .get('/events', requireAuth
// router.get('/events', ctrlEvents.getAllTastingEvents); // without auth, without User Id
// router.get('/events/:userId', ctrlEvents.getAllTastingEvents); // without auth, with userId pass in req.params
router.get('/events', requireAuth, ctrlEvents.getAllTastingEvents); // with auth - via passport AND without userId param.


// TODO - .post('/events/:userId', vs .post('/events', requireAuth
// router.post('/events', ctrlEvents.postTastingEventData); // OLD - without userId in url
router.post('/events/:userId', ctrlEvents.postTastingEventData); // NEW - with userId in url
router.post('/events/', requireAuth, ctrlEvents.postTastingEventData); // NEW - with userId in url


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