'use strict';
// This API routes controller is responsible for fetching:
// 1) TASTING EVENTS list data
// 2) TASTING NOTES list data
// 3) TASTING NOTES DETAIL data.

const config = require('../../config');
const mongoose = require('mongoose');
const {Event} = require('../models/model_tasting_event');
const {TastingNote} = require('../models/model_tasting_note');
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
    .then(event => {
      console.log('Event ID = ', event._id);
      res.status(200).json(event.serialize())
    })
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
  const eventId = req.params.eventId;
  res.json(TASTINGS_DATA);
  TastingNote
    .find({eventId: eventId})
    .then(tastings => {
      res.status(200).json(tastings);
    })
    .catch();
};
module.exports.postTastingNoteData = (req, res) => {
  console.log('req.body = ', req.body);
  // const eventId = req.params.eventId; // for PRODUCTION
  Event
    .findById({"_id": "5abe1f15b6440d32545ea073"}) // works
    // .findById({"_id": "5abe1f15b6440d32545ea073"})
    .then(event => {
      const _eventId = event._id;
      console.log("Event found when saving a Tasting Note: ");
      console.log(event._id);
      console.log(event.eventName);
      console.log(event.eventHost);
      TastingNote
        .create({
          eventHost: req.body.eventHost,
          wineName: req.body.wineName,
          grapePrimary: req.body.primaryGrape,
          country: req.body.country,
          primaryAppellation: req.body.primaryAppellation,
          secondaryAppellation: req.body.secondaryAppellation,
          rating: req.body.rating,
          pricing1: {
            desc: req.body.pricing1.desc,
            price: req.body.pricing1.price
          },
          pricing2: {
            desc: req.body.pricing2.desc,
            price: req.body.pricing2.price
          },
          pricing3: {
            desc: req.body.pricing3.desc,
            price: req.body.pricing3.price
          },
          pricing4: {
            desc: req.body.pricing4.desc,
            price: req.body.pricing4.price
          },
          tastingNotes: req.body.tastingNotes,
          // eventId: req.body.eventId, // for PRODUCTION
          eventId: _eventId, // for TESTING - test 1 - find Event by ID, then save TN with the found Event's ID.
          // eventId: ObjectId(_eventId), // for TESTING - test 2 fails.
        })
        .then(tasting => res.status(200).json(tasting.serialize()))
        .catch(err => {
          console.error(err);
          res.status(500).json({ message: 'Internal server error', err: err });
        });

    });
  // TastingNote
  //   .create({
  //     eventHost: req.body.eventHost,
  //     wineName: req.body.wineName,
  //     grapePrimary: req.body.primaryGrape,
  //     country: req.body.country,
  //     primaryAppellation: req.body.primaryAppellation,
  //     secondaryAppellation: req.body.secondaryAppellation,
  //     rating: req.body.rating,
  //     pricing1: {
  //       desc: req.body.pricing1.desc,
  //       price: req.body.pricing1.price
  //     },
  //     pricing2: {
  //       desc: req.body.pricing2.desc,
  //       price: req.body.pricing2.price
  //     },
  //     pricing3: {
  //       desc: req.body.pricing3.desc,
  //       price: req.body.pricing3.price
  //     },
  //     pricing4: {
  //       desc: req.body.pricing4.desc,
  //       price: req.body.pricing4.price
  //     },
  //     tastingNotes: req.body.tastingNotes,
  //     // eventId: req.body.eventId,
  //   })
  //   .then(tasting => res.status(200).json(tasting.serialize()))
  //   .catch(err => {
  //     console.error(err);
  //     res.status(500).json({ message: 'Internal server error', err: err });
  //   });
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