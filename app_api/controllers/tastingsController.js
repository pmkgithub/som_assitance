'use strict';

const config = require('../../config');
const mongoose = require('mongoose');
const { User } = require('../models/model_user');
const { Event } = require('../models/model_tasting_event');
const { TastingNote } = require('../models/model_tasting_note');

mongoose.connect(config.DATABASE_URL);

// ************************************************************************* //
// TASTINGS NOTES - BEGIN
// ************************************************************************* //
module.exports.getTastingNotes = (req, res) => {

  // NOTE: Don't need to find User using req.user._id b/c user
  //       was already verified by jwtStrategy.
  //       The Tasting Note(s) can be found via the eventId.
  const eventId = req.params.eventId;

  // make sure eventId is in url.
  if ( !req.params.eventId ) {
    const message = `Missing eventId in request params`;
    console.error(message);
    return res.status(400).send(message);
  }

  TastingNote
    .find({eventId: eventId})
    .then(tastings => { res.status(200).json(tastings); })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error', err: err });
    });

};

module.exports.getOneTastingNote = (req, res) => {
  // Called when loading Edit Tasting Note Form loads.

  // NOTE: Don't need to find User using req.user._id b/c user
  //       was already verified by jwtStrategy.  The Event(s) can
  //       be found via the eventId.
  const tastingId = req.params.tastingId;

  // make sure tastingId is in url.
  if ( !req.params.tastingId ) {
    const message = `Missing tastingId in request params`;
    console.error(message);
    return res.status(400).send(message);
  }

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

  // passport placed "user" on the request in jwtStrategy.
  const userId = req.user._id;
  const eventId = req.params.eventId;

  // Make sure client didn't send unexpected fields in the req.body.
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

  // make sure eventId is in url.
  if ( !req.params.eventId ) {
    const message = `Missing eventId in request params`;
    console.error(message);
    return res.status(400).send(message);
  }

  // store pricing as a Number and in Cents format.
  // If User selectes "Not Applicable" or enters Number 0, save price as "null"
  const convertToCentsOrNullOrNull = (entry) => {

    // old
    // if (entry === "" || entry === "0") {
    //   console.log('convertToCentsOrNullOrNull if');
    //   console.log('entry = ', entry);
    //   return entry = null;
    // } else {
    //   entry = Number(entry).toFixed(2).split(".").join(""); // NOTE: .toFixed() returns a String.
    //   return parseInt(entry);
    // }

    // new - with RS.
    entry = Number(entry).toFixed(2).split(".").join(""); // NOTE: .toFixed() returns a String.
    return parseInt(entry);

  };

  User
    .findById({ "_id": userId })
    .then(user => {
      const _userId = user._id;

      Event
        .findById({"_id": eventId})
        .then(event => {
          const _eventId = event._id;

          TastingNote
            .create({
              timestamp: new Date(),
              userId: _userId,
              eventId: _eventId,
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
              // pricing1Price: req.body.pricing1Price,
              pricing1Price: convertToCentsOrNullOrNull(req.body.pricing1Price),
              pricing2Desc: req.body.pricing2Desc,
              // pricing2Price: req.body.pricing2Price,
              pricing2Price: convertToCentsOrNullOrNull(req.body.pricing2Price),
              pricing3Desc: req.body.pricing3Desc,
              // pricing3Price: req.body.pricing3Price,
              pricing3Price: convertToCentsOrNullOrNull(req.body.pricing3Price),
              pricing4Desc: req.body.pricing4Desc,
              // pricing4Price: req.body.pricing4Price,
              pricing4Price: convertToCentsOrNullOrNull(req.body.pricing4Price),
              tastingNotes: req.body.tastingNotes
            })
            .then(tasting => res.status(200).json(tasting.serialize()))
            // tasting note model error.
            .catch(err => {
              console.error(err);
              res.status(500).json({ message: 'Internal server error', err: err });
            });
        })
        // event model error.
        .catch(err => {
          console.error(err);
          res.status(500).json({ message: 'Internal server error', err: err });
        });
    })
    // user model error.
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error', err: err });
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

  // TODO - convert pricing to Cents or Null if price input is "Not Applicable" or 0.
  // store pricing as a Number and in Cents format.
  // If User selectes "Not Applicable" or enters Number 0, save price as "null"
  const convertToCentsOrNullOrNull = (entry) => {

    if (entry === "" || entry === "0") {
      console.log('convertToCentsOrNullOrNull if');
      console.log('entry = ', entry);
      return entry = null;
    } else {
      // convert to Cents and Number.
      entry = Number(entry).toFixed(2).split(".").join(""); // NOTE: .toFixed() returns a String.
      return parseInt(entry);


    }

  };

  updatableFields.forEach(field => {

    if (field in req.body) {
      toUpdate[field] = req.body[field];
    } else {
      const message = `Missing \`${field}\` in request body`;
      console.error(message);
      return res.status(400).send(message);
    }

  });

  // make sure tastingId is in url.
  if ( !req.params.tastingId ) {
    const message = `Missing tastingId in request params`;
    console.error(message);
    return res.status(400).send(message);
  }

  TastingNote
    .findByIdAndUpdate(tastingId, { $set: toUpdate })
    .then(restaurant => res.status(204).end())
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' })
    });

};

module.exports.deleteTastingNote = (req, res) => {

  // NOTE: Don't need to find User using req.user._id b/c user
  //       was already verified by jwtStrategy.
  //       The Tasting Note(s) can be found via the eventId.
  const tastingId = req.params.tastingId;

  // make sure tastingId is in url.
  if ( !req.params.tastingId ) {
    const message = `Missing tastingId in request params`;
    console.error(message);
    return res.status(400).send(message);
  }

  TastingNote
    .findByIdAndRemove(tastingId)
    .then(tasting => { res.status(204).end() })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' })
    });

};
// ************************************************************************* //
// TASTINGS NOTES - END
// ************************************************************************* //
