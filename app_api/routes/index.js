'use strict';
// API SERVER ROUTES

// static test data - for WIP.
const {EVENTS_DATA, TASTINGS_DATA, TASTING_DETAIL_DATA} = require('../../testData/test_data');

const router = require('express').Router();
const jsonParser = require('body-parser').json({ type: 'application/json' });
const ctrlTastings = require('../controllers/tastings');

// events
router.get('/events', ctrlTastings.getTastingEventsData);
router.post('/events', jsonParser, ctrlTastings.postTastingEventsData);
// router.post('/events', jsonParser, ctrlTastings.postTastingEventsData); // recommended by RS
router.delete('/events/:eventId', function() {});
router.put('/events/:eventId', jsonParser, function() {});

// tastings
router.get('/events/:eventId', ctrlTastings.getTastingNotesList);
// router.get('/tasting-note-detail/:tastingId', ctrlTastings.getTastingNoteDeatil); // old
// TODO  - do I need getTastingNoteDeatil???
router.get('/events/:eventsId/tastings/:tastingId', ctrlTastings.getTastingNoteDeatil); // recommended by RS


// TODO - POST live Tasting Form data - routes/index.js.
router.post('/events/:eventId/tastings', jsonParser, ctrlTastings.postTastingNoteData);

router.put('/events/:eventsId/tastings/:tastingId', jsonParser, (req, res) => {
  res.send({"msg": "tasting note updated"});
});
router.delete('/events/:eventsId/tastings/:tastingId', (req, res) => {
  res.send({"msg": "tasting note deleted"});
});

// search
router.post('/search', (req, res) => {
  res.send('search form posted - search results list provided');
});


module.exports = router;