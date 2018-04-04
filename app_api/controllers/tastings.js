'use strict';
// This API routes controller is responsible for fetching:
// 1) TASTING EVENTS list data
// 2) TASTING NOTES list data
// 3) TASTING NOTES DETAIL data.

const config = require('../../config');
const mongoose = require('mongoose');
const {Event} = require('../models/model_tasting_event');
const {TastingNote} = require('../models/model_tasting_note');
// const {EVENTS_DATA, TASTINGS_DATA, TASTING_DETAIL_DATA} = require('../../testData/test_data'); // static test data.
mongoose.connect(config.localdb);


// ************************************************************************* //
// TASTINGS EVENTS - BEGIN
// ************************************************************************* //
module.exports.getTastingEventsData = (req, res) => {
  // res.json(EVENTS_DATA); // for TESTING
  Event
    .find()
    .then((events) => {
      console.log('events =', events);
      res.json(events).status(200);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error', err: err });
    });

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
  const eventId = req.params.eventId;
  TastingNote
    .find({eventId: eventId})
    .then(tastings => {
      res.status(200).json(tastings);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error', err: err });
    });
};
module.exports.postTastingNoteData = (req, res) => {
  const eventId = req.params.eventId;
  Event
    // .findById({"_id": req.body.eventId})
    .findById({"_id": eventId})
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
          countryMapSrc: req.body.countryMapSrc,
          primaryAppellation: req.body.primaryAppellation,
          primaryAppellationMapSrc: req.body.primaryAppellationMapSrc,
          secondaryAppellation: req.body.secondaryAppellation,
          secondaryAppellationMapSrc: req.body.secondaryAppellationMapSrc,
          rating: req.body.rating,
          pricing1Desc: req.body.pricing1Desc,
          pricing1Price: req.body.pricing1Price,
          pricing2Desc: req.body.pricing2Desc,
          pricing2Price: req.body.pricing2Price,
          pricing3Desc: req.body.pricing3Desc,
          pricing3Price: req.body.pricing3Price,
          pricing4Desc: req.body.pricing4Desc,
          pricing4Price: req.body.pricing4Price,
          tastingNotes: req.body.tastingNotes,
          eventId: _eventId
        })
        .then(tasting => res.status(200).json(tasting.serialize()))
        .catch(err => {
          console.error(err);
          res.status(500).json({ message: 'Internal server error', err: err });
        });

    });
};
module.exports.deleteTastingNote = (req, res) => {
  console.log('module.exports.deleteTastingNote ran');
  console.log('req.body', req.body);
  console.log('req.params', req.params);
  console.log('req.params.tastingId', req.params.tastingId);

  TastingNote
      .findByIdAndRemove(req.params.tastingId)
      .then(tasting => res.status(204).end())
      .catch(err => res.status(500).json({ message: 'Internal server error' }));
};
// ************************************************************************* //
// TASTINGS NOTES - END
// ************************************************************************* //


// // ************************************************************************* //
// // TASTINGS DEATILS - BEGIN
// // ************************************************************************* //
// module.exports.getTastingNoteDeatil = (req, res) => {
//   console.log('API controller getTastingNoteDeatil ran');
//   console.log('req.params', req.params);
//   res.json(TASTING_DETAIL_DATA);
// };
//
// // ************************************************************************* //
// // TASTINGS DEATILS - END
// // ************************************************************************* //