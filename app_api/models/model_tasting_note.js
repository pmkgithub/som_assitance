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
  // pricing1Price: {type: String},
  pricing1Price: {type: Number},

  pricing2Desc: {type: String},
  // pricing2Price: {type: String},
  pricing2Price: {type: Number},

  pricing3Desc: {type: String},
  // pricing3Price: {type: String},
  pricing3Price: {type: Number},

  pricing4Desc: {type: String},
  // pricing4Price: {type: String},
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

// // setters - Convert entered price into cents.
// tastingNoteSchema.path('pricing1Price').set(function(entry) {
//   // return Number(entry).toFixed(2).split(".").join(""); //old
//
//   const entryAsNum = Number(entry).toFixed(2).split(".").join("");
//   return Number(entryAsNum);
//
// });
// tastingNoteSchema.path('pricing2Price').set(function(entry) {
//   // return Number(entry).toFixed(2).split(".").join(""); // old
//
//   const entryAsNum = Number(entry).toFixed(2).split(".").join("");
//   return Number(entryAsNum);
//
// });
// tastingNoteSchema.path('pricing3Price').set(function(entry) {
//   // return Number(entry).toFixed(2).split(".").join(""); // old
//
//   const entryAsNum = Number(entry).toFixed(2).split(".").join("");
//   return Number(entryAsNum);
//
// });
// tastingNoteSchema.path('pricing4Price').set(function(entry) {
//   // return Number(entry).toFixed(2).split(".").join(""); // old
//
//   const entryAsNum = Number(entry).toFixed(2).split(".").join("");
//   return Number(entryAsNum);
//
// });

// // getters - convert "000" to "No Price Entered".
// tastingNoteSchema.path('pricing1Price').get(function(cents) {
//   // function convertCentsToDollars(cents) {
//   //   return `$${ (cents/100).toFixed(2) }`
//   // }
//   // // if ( price === "000") {
//   // //   return price = "No Price Entered";
//   // // } else {
//   // //
//   // // }
//   console.log('cents1 = ', cents);
//   return cents === "000" ? "No Price Entered" : `$${ (cents/100).toFixed(2) }`;
// });
// tastingNoteSchema.path('pricing2Price').get(function(cents) {
//   console.log('cents2 = ', cents);
//   return cents === "000" ? "No Price Entered" : `$${ (cents/100).toFixed(2) }`;
// });
// tastingNoteSchema.path('pricing3Price').get(function(cents) {
//   console.log('cents3 = ', cents);
//   return cents === "000" ? "No Price Entered" : `$${ (cents/100).toFixed(2) }`;
// });
// tastingNoteSchema.path('pricing4Price').get(function(cents) {
//   console.log('cents4 = ', cents);
//   return cents === "000" ? "No Price Entered" : `$${ (cents/100).toFixed(2) }`;
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