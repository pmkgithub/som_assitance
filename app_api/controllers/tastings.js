'use strict';
// This API routes controller is responsible for fetching:
// 1) TASTING EVENTS list data
// 2) TASTING NOTES list data
// 3) TASTING NOTES DETAIL data.

const config = require('../../config');
const mongoose = require('mongoose');
const {Event} = require('../models/model_tasting_event'); // mongo(ose) data.
const {EVENTS_DATA, TASTINGS_DATA, TASTING_DETAIL_DATA} = require('../../testData/test_data'); // static test data.
mongoose.connect(config.localdb);


// ************************************************************************* //
// TASTINGS EVENTS - BEGIN
// ************************************************************************* //
module.exports.getTastingEventsData = (req, res) => {
  res.json(EVENTS_DATA);
};

module.exports.postTastingEventsData = (req, res) => {
  console.log('req.body = ', req.body);

  // make sure client didn't send unexpected fields.
  const requiredFields = ['eventName', 'eventHost'];
  for( let i=0; i< requiredFields.length; i++) {
    const field = requiredFields[i];

    if ( !(field in req.body) ) {
      const message = `Missing \`${field}\` in request body`;
      console.error(message);
      return res.status(400).send(message);
    }
  }

  Event
    .create({
      eventName: req.body.eventName,
      eventHost: req.body.eventHost
    })
    .then(event => res.status(201).json(event.serialize()))
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error', err: err });
    });

};
// ************************************************************************* //
// TASTINGS EVENTS - END
// ************************************************************************* //

// ************************************************************************* //
// TASTINGS NOTES - BEGIN
// ************************************************************************* //
module.exports.getTastingNotesList = (req, res) => {
  console.log('API controller getTastingNotesList ran');
  console.log('req.params eventId', req.params);
  res.json(TASTINGS_DATA);
};

// ************************************************************************* //
// TASTINGS NOTES - END
// ************************************************************************* //


// ************************************************************************* //
// TASTINGS DEATILS - BEGIN
// ************************************************************************* //
module.exports.getTastingNoteDeatil = (req, res) => {
  console.log('API controller getTastingNoteDeatil ran');
  console.log('req.params', req.params);
  res.json(TASTING_DETAIL_DATA);
};

// ************************************************************************* //
// TASTINGS DEATILS - END
// ************************************************************************* //