'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tastingNoteSchema = Schema({
  timestamp: {type: String, default: Date.now},
  wineName: {type: String, required: true},
  eventHost: {type: String},
  grapePrimary: {type: String, required: true},
  country: {type: String, required: true},
  primaryAppellation: {type: String},
  secondaryAppellation: {type: String},
  rating: {type: Number},
  pricing1: {
    desc: {type: String},
    price: {type: String}
  },
  pricing2: {
    desc: {type: String},
    price: {type: String}
  },
  pricing3: {
    desc: {type: String},
    price: {type: String}
  },
  pricing4: {
    desc: {type: String},
    price: {type: String}
  },
  tastingNotes: {type: String},
  eventId: {
    type: Schema.Types.ObjectId,
    // type: {type: String},
    ref: 'tasting_events'
  },
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