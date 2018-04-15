'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = Schema({
  // Don't create data here. causes problems with moment.js.
  // Create date when document is created.
  // timestamp: {type: String, default: new Date()},
  timestamp: {type: String},
  eventName: {type: String, required: true},
  eventHost: {type: String},
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
});

// eventSchema.virtual('addressString').get(function() {
//   return `${this.address.building} ${this.address.street}`.trim();});
//
// // this virtual grabs the most recent grade for a restaurant.
// eventSchema.virtual('grade').get(function() {
//   const gradeObj = this.grades.sort((a, b) => {return b.date - a.date;})[0] || {};
//   return gradeObj.grade;
// });

eventSchema.methods.serialize = function() {

  return {
    id: this._id,
    timestamp: this.timestamp,
    eventName: this.eventName,
    eventHost: this.eventHost,
  };
};


const Event = mongoose.model('tasting_event', eventSchema);

module.exports = {Event};
