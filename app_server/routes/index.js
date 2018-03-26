'use strict';
// CONTENT SERVER ROUTES

const router = require('express').Router();

// for now, EVENTS list is the LANDING PAGE - this will be refacted later.
// Ultimately, LANDING PAGE will contain a signup/signin form.
router.get('/', (req, res) => {
  res.sendFile('index.html', {"root": "./app_server/views"}); // yes
});

// events
router.get('/events', (req, res) => {
  res.sendFile('tasting_events_list.html', {"root": "./app_server/views"}); // works
});
router.get('/events/new', (req, res) => {
  console.log('content router tasting-events/new ran');
  res.sendFile('tasting_event_form.html', {"root": "./app_server/views"}); // works
});


// tastings
router.get('/events/:eventId/tastings/new', (req, res) => {
  res.sendFile('tasting_note_form.html', {"root": "./app_server/views"}); // works
});

// TODO
router.get('/events/:eventId/tastings/:tastingId/edit', (req, res) => {
  res.sendFile(__dirname + '/views/tasting_note_form.html');
});


// search
// TODO WIP - search will have its own form if I decide to go with MODAL.
// TODO WIP - or search will be part of the EVENTS LISTINGS page (preferred).
router.get('/search/:tastingId', (req, res) => {
  res.sendFile(__dirname + '/views/tasting_detail.html');
});


module.exports = router;
