'use strict';
// CONTENT SERVER ROUTES

const router = require('express').Router();

// splash
router.get('/', (req, res) => {
  res.sendFile('index.html', {"root": "./app_server/views"});
});
// signin
router.get('/signin', (req, res) => {
  res.sendFile('signin.html', {"root": "./app_server/views"});
});
// signup
router.get('/signup', (req, res) => {
  res.sendFile('signup.html', {"root": "./app_server/views"});
});


// events
router.get('/events', (req, res) => {
  res.sendFile('tasting_events_list.html', {"root": "./app_server/views"});
});
router.get('/events/new', (req, res) => {
  res.sendFile('tasting_event_form_new.html', {"root": "./app_server/views"});
});
router.get('/events/edit', (req, res) => {
  res.sendFile('tasting_event_form_edit.html', {"root": "./app_server/views"});
});


// tastings
router.get('/tastings/new', (req, res) => {
  res.sendFile('tasting_note_form_new.html', {"root": "./app_server/views"});
});
router.get('/tastings/edit', (req, res) => {
  res.sendFile('tasting_note_form_edit.html', {"root": "./app_server/views"});
});


// search results
router.get('/searchresults', (req, res) => {
  res.sendFile('search_results.html', {"root": "./app_server/views"});
});


module.exports = router;
