'use strict';

const config = require('../../config');
const mongoose = require('mongoose');
const {TastingNote} = require('../models/model_tasting_note');
mongoose.connect(config.localdb);

module.exports.postTastingNotesSearchData = (req, res) => {

  const searchGrape = req.body.searchGrape;
  const searchRating = req.body.searchRating;
  const searchPrice = req.body.searchPrice;

  TastingNote
    .find( {$or:[
      {'pricing1Price': { $lte: searchPrice}},
      {'pricing2Price': { $lte: searchPrice}},
      {'pricing3Price': { $lte: searchPrice}},
      {'pricing4Price': { $lte: searchPrice}}],
      'primaryGrape': searchGrape,
      'rating': {$gte: searchRating}} )
    .sort({'wineName': 1})
    .then((results) => {
      res.json(results)
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error', err: err });
    });

};