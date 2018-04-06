'use strict';

const config = require('../../config');
const mongoose = require('mongoose');
const {TastingNote} = require('../models/model_tasting_note');
mongoose.connect(config.localdb);