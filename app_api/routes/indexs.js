const router = require('express').Router();
const jsonParser = require('body-parser').json({ type: 'application/json' });
const {EVENTS_DATA, TASTINGS_DATA, TASTING_DETAIL_DATA} = require('../../testData/test_data');
const config = require('../../config');
const mongoose = require('mongoose');
const {Event} = require('../models/model_tasting_event');
mongoose.connect(config.localdb);


router.get('/tasting-events', (req, res) => {
  res.json(EVENTS_DATA);
});

router.post('/tasting-events/new', jsonParser, (req, res) => {
  console.log('req.body = ', req.body);

  // make sure client didn't send unexpected fields.
  const requiredFields = ['eventName', 'eventHost'];
  for( let i=0; i< requiredFields.length; i++) {
    const field = requiredFields[i];

    if ( !(field in req.body) ) {
      const message = `Missing \`${field}\` in request body`;
      console.error(message);
      return res.status(400).send(message);
    }
  }

  Event
    .create({
      eventName: req.body.eventName,
      eventHost: req.body.eventHost
    })
    .then(event => res.status(201).json(event.serialize()))
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error', err: err });
    });

});

module.exports = router;