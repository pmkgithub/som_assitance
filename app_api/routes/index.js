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
router.get('/events', requireAuth, ctrlEvents.getAllTastingEvents);
router.post('/events', requireAuth, ctrlEvents.postTastingEventData);
router.delete('/events/:eventId', requireAuth, ctrlEvents.deleteEvent);
router.get('/events/edit/:eventId', requireAuth, ctrlEvents.getOneTastingEvent); // for Edit Event Form.
router.put('/events/edit/:eventId', requireAuth, ctrlEvents.putTastingEventData); // for Edit Event Form.

// tastings
// TODO - current WIP - route being worked...
router.get('/tastings/:eventId', requireAuth, ctrlTastings.getTastingNotes);
router.post('/tastings/:eventId', requireAuth, ctrlTastings.postTastingNoteData);

router.delete('/tastings/:tastingId', ctrlTastings.deleteTastingNote);
router.get('/tastings/edit/:tastingId', ctrlTastings.getOneTastingNote); // for Edit Tasting Note Form.
router.put('/tastings/edit/:tastingId', ctrlTastings.putTastingNoteData); // for Edit Tasting Note Form.

// search
router.post('/search', ctrlSearch.postTastingNotesSearchData);

// authentication
router.post('/signup', ctrlAuth.signup);
router.post('/signin', requireSignin, ctrlAuth.signin);


module.exports = router;