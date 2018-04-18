'use strict';

const config = require('../../config');
const mongoose = require('mongoose');
// const { User } = require('../models/model_user');
const { TastingNote } = require('../models/model_tasting_note');

mongoose.connect(config.DATABASE_URL);

module.exports.postTastingNotesSearchData = (req, res) => {

  // passport placed "user" on the request in jwtStrategy.
  const userId = req.user._id;
  const searchGrape = req.body.searchGrape;
  const searchRating = req.body.searchRating;
  // const searchPrice = req.body.searchPrice; // old
  const searchPrice = parseInt(req.body.searchPrice); // new


  // const searchPrice = Number(req.body.searchPrice).toFixed(2); // NOTE: .toFixed() returns a string decimal
  // searchPrice = Number(searchPrice); // convert string decimal number with decimals
  console.log('searchController postTastingNotesSearchData searchPrice = ', searchPrice);
  console.log('line 20 searchController.js typeof searchPrice = ', typeof searchPrice);

  TastingNote
    .find({
      'userId': userId,
      'primaryGrape': searchGrape,
      'rating': {$gte: searchRating},
      $or:[
            {'pricing1Price': { $lte: searchPrice, $gt: 0 }},
            {'pricing2Price': { $lte: searchPrice, $gt: 0 }},
            {'pricing3Price': { $lte: searchPrice, $gt: 0 }},
            {'pricing4Price': { $lte: searchPrice, $gt: 0 }}
          ]
    })
    .sort({'wineName': 1})
    .then((results) => {
      res.json(results).status(200)
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error', err: err });
    });

};