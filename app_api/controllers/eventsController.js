'use strict';


const config = require('../../config');
const mongoose = require('mongoose');
const {Event} = require('../models/model_tasting_event');
const {TastingNote} = require('../models/model_tasting_note');
// const {EVENTS_DATA, TASTINGS_DATA, TASTING_DETAIL_DATA} = require('../../testData/test_data'); // static test data.
mongoose.connect(config.localdb);


// ************************************************************************* //
// TASTINGS EVENTS - BEGIN
// ************************************************************************* //
module.exports.getTastingEvents = (req, res) => {
  // res.json(EVENTS_DATA); // for TESTING
  Event
    .find()
    .then((events) => {
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
      res.status(200).json(event.serialize())
    })
    .catch(err => {
      // console.error(err);
      res.status(500).json({ message: 'Internal server error', err: err });
    });

};
module.exports.deleteEvent = (req, res) => {
  console.log('module.exports.deleteEvent ran');
  const eventId = req.params.eventId;
  console.log('eventId = ', eventId);

  // This looks good
  Event
    .findByIdAndRemove(eventId)
    .then(event => res.status(204).end())
    .catch(err => res.status(500).json({ message: 'Internal server error' }));

  // Tasting
  //   .find({eventId: eventId})
  //   .then((tastings) => {
  //     console.log('deleteEvent tastings', tastings);
  //   })
  //   .catch(err => res.status(500).json({ message: 'Internal server error' }));

  // // not working
  // TastingNote
  //   .find({eventId: eventId})
  //   .then((tastings) => {
  //     console.log('deleteEvent tastings', tastings);
  //     tastings.remove();
  //   })
  //   .catch(err => res.status(500).json({ message: 'Internal server error' }));

  // working
  TastingNote
    .remove({eventId: eventId})
    .then((tasting) => {
      console.log('deleteEvent tastings', tasting);
    })
    .catch(err => res.status(500).json({ message: 'Internal server error' }));
};
// ************************************************************************* //
// TASTINGS EVENTS - END
// ************************************************************************* //

