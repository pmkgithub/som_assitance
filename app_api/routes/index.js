'use strict';
// API SERVER ROUTES

// static test data - for WIP.
const {EVENTS_DATA, TASTINGS_DATA, TASTING_DETAIL_DATA} = require('../../testData/test_data');

const router = require('express').Router();
const jsonParser = require('body-parser').json({ type: 'application/json' });
const ctrlEvents = require('../controllers/eventsController');
const ctrlTastings = require('../controllers/tastingsController');

// events
router.get('/events', ctrlEvents.getAllTastingEvents);
router.post('/events', jsonParser, ctrlEvents.postTastingEventData);
router.delete('/events/:eventId', ctrlEvents.deleteEvent);
router.get('/events/edit/:eventId', ctrlEvents.getOneTastingEvent);
router.put('/events/edit/:eventId', jsonParser, ctrlEvents.putTastingEventData);

// tastings
router.get('/tastings/:eventId', ctrlTastings.getTastingNotes);
router.post('/tastings/:eventId', jsonParser, ctrlTastings.postTastingNoteData);
router.delete('/tastings/:tastingId', ctrlTastings.deleteTastingNote);
router.get('/tastings/edit/:tastingId', ctrlTastings.getOneTastingNote); // not working
router.put('/tastings/edit/:tastingId', jsonParser, ctrlTastings.putTastingNoteData);
// TODO  - do I need getTastingNoteDeatil???
// router.get('/events/:eventsId/tastings/:tastingId', ctrlTastings.getTastingNoteDeatil); // recommended by RS



router.put('/events/:eventsId/tastings/:tastingId', jsonParser, (req, res) => {
  res.send({"msg": "tasting note updated"});
});


// search
router.post('/search', (req, res) => {
  res.send('search form posted - search results list provided');
});


module.exports = router;