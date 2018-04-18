'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tastingNoteSchema = Schema({
  timestamp: {type: String, default: new Date()},
  wineName: {type: String, required: true},
  eventHost: {type: String},
  eventName: {type: String},
  primaryGrape: {type: String},
  country: {type: String},
  countryMapSrc: {type: String},
  primaryAppellation: {type: String},
  primaryAppellationMapSrc: {type: String},
  secondaryAppellation: {type: String},
  secondaryAppellationMapSrc: {type: String},
  rating: {type: String},
  pricing1Desc: {type: String},
  pricing1Price: {type: String},
  pricing2Desc: {type: String},
  pricing2Price: {type: String},
  pricing3Desc: {type: String},
  pricing3Price: {type: String},
  pricing4Desc: {type: String},
  pricing4Price: {type: String},
  tastingNotes: {type: String},
  eventId: {
    type: Schema.Types.ObjectId,
    ref: 'tasting_events'
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
});

tastingNoteSchema.methods.serialize = function() {

  return {
    id: this._id,
    timestamp: this.timestamp,
    wineName: this.wineName,
  };
};

const TastingNote = mongoose.model('tasting_note', tastingNoteSchema);

module.exports = {TastingNote};