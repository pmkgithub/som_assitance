'use strict';
// CONTENT SERVER ROUTES

const router = require('express').Router();

// for now, EVENTS list is the LANDING PAGE - this will be refacted later.
// Ultimately, LANDING PAGE will contain a signup/signin form.
router.get('/', (req, res) => {
  res.sendFile('landing.html', {"root": "./app_server/views"}); // yes
});

// events
router.get('/events', (req, res) => {
  res.sendFile('tasting_events_list.html', {"root": "./app_server/views"});
});
router.get('/events/new', (req, res) => {
  res.sendFile('tasting_event_form.html', {"root": "./app_server/views"});
});
router.get('/events/edit', (req, res) => {
  res.sendFile('tasting_event_form_edit.html', {"root": "./app_server/views"});
});

// tastings
router.get('/tastings/new', (req, res) => {
  res.sendFile('tasting_note_form.html', {"root": "./app_server/views"});
});
router.get('/tastings/edit', (req, res) => {
  res.sendFile('tasting_note_form_edit.html', {"root": "./app_server/views"});
});


// search results
router.get('/searchresults', (req, res) => {
  res.sendFile('search_results.html', {"root": "./app_server/views"});
});


module.exports = router;
