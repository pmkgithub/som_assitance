'use strict';
// API SERVER ROUTES

// static test data - for WIP.
const {EVENTS_DATA, TASTINGS_DATA, TASTING_DETAIL_DATA} = require('../../testData/test_data');

const router = require('express').Router();
const jsonParser = require('body-parser').json({ type: 'application/json' });
const ctrlTastings = require('../controllers/tastings');

// events
router.get('/events', ctrlTastings.getTastingEventsData);
router.post('/events/new', jsonParser, ctrlTastings.postTastingEventsData);

// tastings
router.get('/events/:eventId', ctrlTastings.getTastingNotesList);
router.get('/tasting-note-detail/:tastingId', ctrlTastings.getTastingNoteDeatil);

// NOT REAL CODE - discuss with RS.
router.get('/events/:eventId', ctrlTastings.getTastingNotesList);
router.get('/tastings/-:tastingId', ctrlTastings.getTastingNoteDeatil);

// search
router.post('/search', (req, res) => {
  res.send('search form posted - search results list provided');
});


module.exports = router;