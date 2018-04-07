'use strict';

const config = require('../../config');
const mongoose = require('mongoose');
const {TastingNote} = require('../models/model_tasting_note');
mongoose.connect(config.localdb);

module.exports.postTastingNotesSearcData = (req, res) => {
  // put search criteria in req.body, not in the URL / req.params.

  // const primaryGrape = req.body.primaryGrape; // equal to.
  // const rating = req.body.rating;             // gte rating
  // const price1Price = req.body.price1Price;   // lte  price
  // const price2Price = req.body.price1Price;
  // const price3Price = req.body.price1Price;
  // const price4Price = req.body.price1Price;


  // let options = {
  //   primaryGrape = req.body.primaryGrape;
  //   options.rating = req.body.rating;
  //   options.price1Price = req.body.price;
  //   options.price2Price = req.body.price;
  //   options.price3Price = req.body.price;
  //   options.price4Price = req.body.price;
  // };




  // // sample find POST query
  // // mongo syntax. don't use mongo syntax
  // sample.find(
  //   {primaryGrape: 'Chardonnay' },
  //   {rating: {$gte: 3},
  //   {price1Price: {$lte: 20}},
  //   {price2Price: {$lte: 20}},
  //   {price3Price: {$lte: 20}},
  //   {price4Price: {$lte: 20}},
  //
  // })
  // .then((tastingNotes) => {//do stuff})
  // .catch();

  //
  //   // TODO - build POST query.
  // // this looks good.
  // TastingNote
  //   .find( {$or:[
  //     // {'primaryGrape': primaryGrape},
  //     // {'rating': rating},
  //     {'pricing1Price': price},
  //     {'pricing2Price': price},
  //     {'pricing3Price': price},
  //     {'pricing4Price': price}],
  //     'primaryGrape': primaryGrape,
  //     'rating': rating} )
  //   .then(() => { // do stuff })
};