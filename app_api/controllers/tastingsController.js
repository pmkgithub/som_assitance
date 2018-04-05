'use strict';

const config = require('../../config');
const mongoose = require('mongoose');
const {Event} = require('../models/model_tasting_event');
const {TastingNote} = require('../models/model_tasting_note');

mongoose.connect(config.localdb);

// ************************************************************************* //
// TASTINGS NOTES - BEGIN
// ************************************************************************* //
module.exports.getTastingNotes = (req, res) => {
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

      TastingNote
        .create({
          timestamp: new Date(),
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
  TastingNote
      .findByIdAndRemove(req.params.tastingId)
      .then(tasting => {
        console.log('tasting = ', tasting);
        res.status(204).end()
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' })
      });
};
// ************************************************************************* //
// TASTINGS NOTES - END
// ************************************************************************* //
