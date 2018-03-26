'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tastingSchema = Schema({
  timestamp: {type: String, default: Date.now},
  eventName: {type: String, required: true},
  eventHost: {type: String},
  tastingNotes: [{
    type: Schema.Types.ObjectId,
    ref: 'tasting_event'
  }]
});


const Tasting = mongoose.model('tasting_note', eventSchema);

module.exports = {Tasting};