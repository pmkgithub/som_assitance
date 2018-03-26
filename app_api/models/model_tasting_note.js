'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tastingSchema = Schema({
  timestamp: {type: String, default: Date.now},
  wineName: {type: String, required: true},
  eventHost: {type: String},
  grapePrimary: {type: String, required: true},
  country: {type: String, required: true},
  appellationPriamry: {type: String, required: true},
  appellationSecondary: {type: String, required: true},
  rating: {type: Number},
  pricing1: {type: Number},
  pricing2: {type: Number},
  pricing3: {type: Number},
  pricing4: {type: Number},
  notes: {type: String},

  tastingNotes: [{
    type: Schema.Types.ObjectId,
    ref: 'tasting_event'
  }]
});


const Tasting = mongoose.model('tasting_note', eventSchema);

module.exports = {Tasting};