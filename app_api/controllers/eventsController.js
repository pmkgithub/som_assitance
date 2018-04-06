'use strict';

const config = require('../../config');
const mongoose = require('mongoose');
const {Event} = require('../models/model_tasting_event');
const {TastingNote} = require('../models/model_tasting_note');
mongoose.connect(config.localdb);


// ************************************************************************* //
// TASTINGS EVENTS - BEGIN
// ************************************************************************* //
module.exports.getAllTastingEvents = (req, res) => {

  Event
    .find()
    .then((events) => { res.json(events).status(200); })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error', err: err });
    });

};

module.exports.getOneTastingEvent = (req, res) => {
  const eventId  = req.params.eventId;

  Event
    .findById(eventId)
    .then((event) => { res.json(event.serialize()).status(200); })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error', err: err });
    });
};

module.exports.postTastingEventData = (req, res) => {

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
      timestamp: new Date(),
      eventName: req.body.eventName,
      eventHost: req.body.eventHost
    })
    .then(event => {
      res.status(200).json(event.serialize())
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error', err: err });
    });

};

module.exports.putTastingEventData = (req, res) => {
  const eventId = req.params.eventId;
  const toUpdate = {};
  const updatableFields = ['eventName', 'eventHost'];

  updatableFields.forEach(field => {
    if (field in req.body) {
      toUpdate[field] = req.body[field];
    }
  });

  Event
  // all key/value pairs in toUpdate will be updated -- that's what `$set` does
    .findByIdAndUpdate(eventId, { $set: toUpdate })
    .then(event => res.status(204).end())
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' })
    });
};

module.exports.deleteEvent = (req, res) => {
  const eventId = req.params.eventId;

  Event
    .findByIdAndRemove(eventId)
    .then(event => res.status(204).end())
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    });

  TastingNote
    .remove({eventId: eventId})
    .then((tasting) => res.status(204).end() )
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    });
};
// ************************************************************************* //
// TASTINGS EVENTS - END
// ************************************************************************* //

