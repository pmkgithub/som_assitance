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
  pricing1Price: {type: Number},
  pricing2Desc: {type: String},
  pricing2Price: {type: Number},
  pricing3Desc: {type: String},
  pricing3Price: {type: Number},
  pricing4Desc: {type: String},
  pricing4Price: {type: Number},
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
// TODO - fix search "Barbera" and "Bordeaux Blend model"
tastingNoteSchema.index({primaryGrape: 'text'});
// // setters - stub
// tastingNoteSchema.path('pricing1Price').set(function(num) {
//   // do stuff with num
// });
//
// // getters - stub
// tastingNoteSchema.path('pricing1Price').get(function(num) {
//   // do stuff with num
// });



tastingNoteSchema.methods.serialize = function() {

  return {
    id: this._id,
    timestamp: this.timestamp,
    wineName: this.wineName,
  };
};

const TastingNote = mongoose.model('tasting_note', tastingNoteSchema);

module.exports = {TastingNote};