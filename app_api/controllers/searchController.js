'use strict';

const config = require('../../config');
const mongoose = require('mongoose');
const { TastingNote } = require('../models/model_tasting_note');

mongoose.connect(config.DATABASE_URL);

module.exports.postTastingNotesSearchData = (req, res) => {

  // passport placed "user" on the request in jwtStrategy.
  const userId = req.user._id;
  const searchGrape = req.body.searchGrape;
  const searchRating = req.body.searchRating;
  let searchPrice = req.body.searchPrice;
  console.log('searchGrape = ', searchGrape);

  searchPrice = Number(searchPrice).toFixed(2).split(".").join(""); // convert searchPrice to Cents.
  searchPrice = parseInt(searchPrice);                              // convert searchPrice to Integer.
// TODO - fix search "Barbera" and "Bordeaux Blend searchController"
  TastingNote
    .find({
      'userId': userId,
      // 'primaryGrape': searchGrape, // non-indexed search.
      $text: {$search: searchGrape},  // indexed search.
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