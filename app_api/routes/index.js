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

// TODO = discuss route naming best practices wtih RS
// // NOT REAL CODE - discuss best practices for routes with RS.
// router.get('/events/:eventId', ctrlTastings.getTastingNotesList);
// router.get('/tastings/:tastingId', ctrlTastings.getTastingNoteDeatil);
// // NOT REAL CODE - discuss best practices for routes with RS.

// TODO = routes need to be built / coded.
router.post('/events/:eventsId/tastings', (req, res) => {
  res.send('new tasting note posted');
});
router.put('/events/:eventsId/tastings/:tastingId', (req, res) => {
  res.send('tasting note updated');
});
router.delete('/events/:eventsId/tastings/:tastingId', (req, res) => {
  res.send('tasting note deleted');
});

// search
router.post('/search', (req, res) => {
  res.send('search form posted - search results list provided');
});


module.exports = router;