'use strict';

const config = require('../../config');
const mongoose = require('mongoose');
const {Event} = require('../models/model_tasting_event');
const {TastingNote} = require('../models/model_tasting_note');

mongoose.connect(config.DATABASE_URL);

// ************************************************************************* //
// TASTINGS NOTES - BEGIN
// ************************************************************************* //
module.exports.getTastingNotes = (req, res) => {
  const eventId = req.params.eventId;
  TastingNote
    .find({eventId: eventId})
    .then(tastings => { res.status(200).json(tastings); })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error', err: err });
    });
};
module.exports.getOneTastingNote = (req, res) => {
  const tastingId = req.params.tastingId;
  TastingNote
    .findById(tastingId)
    .then((event) => {
      // res.json(event.serialize()).status(200);
      res.json(event).status(200);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error', err: err });
    });
};
module.exports.postTastingNoteData = (req, res) => {
  const eventId = req.params.eventId;

  // Make sure client didn't send unexpected fields in the req.body.
  // NOTE: "eventId" is is in req.params, and not in req.body.
  const requiredFields = [
    'eventHost',
    'eventName',
    'wineName',
    'primaryGrape',
    'country',
    'countryMapSrc',
    'primaryAppellation',
    'primaryAppellationMapSrc',
    'secondaryAppellation',
    'secondaryAppellationMapSrc',
    'rating',
    'pricing1Desc',
    'pricing1Price',
    'pricing2Desc',
    'pricing2Price',
    'pricing3Desc',
    'pricing3Price',
    'pricing4Desc',
    'pricing4Price',
    'pricing4Price',
    'tastingNotes'
  ];
  for( let i=0; i< requiredFields.length; i++) {
    const field = requiredFields[i];

    if ( !(field in req.body) ) {
      const message = `Missing \`${field}\` in request body`;
      console.error(message);
      return res.status(400).send(message);
    }
  }

  Event
    .findById({"_id": eventId})
    .then(event => {
      const _eventId = event._id;

      TastingNote
        .create({
          timestamp: new Date(),
          eventHost: req.body.eventHost,
          eventName: req.body.eventName,
          wineName: req.body.wineName,
          primaryGrape: req.body.primaryGrape,
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

module.exports.putTastingNoteData = (req, res) => {
  // NOTE: Don't need to find the Associated Event b/c an edited Tasting Note
  //       in the DB already has the "eventId" property populated.
  const tastingId = req.params.tastingId;
  const toUpdate = {};
  const updatableFields = [
    'wineName',
    'country',
    'countryMapSrc',
    'primaryAppellation',
    'primaryAppellationMapSrc',
    'secondaryAppellation',
    'secondaryAppellationMapSrc',
    'primaryGrape',
    'tastingNotes',
    'rating',
    'pricing1Desc',
    'pricing1Price',
    'pricing2Desc',
    'pricing2Price',
    'pricing3Desc',
    'pricing3Price',
    'pricing4Desc',
    'pricing4Price',
    'tastingNotes'
  ];

  updatableFields.forEach(field => {
    if (field in req.body) {
      toUpdate[field] = req.body[field];
    }
  });

  TastingNote
  // all key/value pairs in toUpdate will be updated -- that's what `$set` does
    .findByIdAndUpdate(tastingId, { $set: toUpdate })
    .then(restaurant => res.status(204).end())
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' })
    });
};
module.exports.deleteTastingNote = (req, res) => {
  TastingNote
      .findByIdAndRemove(req.params.tastingId)
      .then(tasting => { res.status(204).end() })
      .catch(err => {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' })
      });
};
// ************************************************************************* //
// TASTINGS NOTES - END
// ************************************************************************* //
