const router = require('express').Router();

//
router.get('/tasting-events', (req, res) => {
  console.log('/tasting-events route hit');
  console.log('__dirname', __dirname);
  // res.send({"foo":"bar"});
  // res.sendFile(__dirname + '/public/views/tasting_events_list.html'); // working - old
  // res.sendFile('/public/views/tasting_events_list.html', {"root": "../../"});
  // res.sendFile('tasting_events_list.html', {"root": "../public/views"}); // nope
  // res.sendFile('tasting_events_list.html', {"root": __dirname + "../public/views"}); // nope
  res.sendFile('tasting_events_list.html', {"root": "./app_server/views"}); // yes
});
//
// router.get('tasting-events/new', (req, res) => {
//   res.sendFile(__dirname + '/public/views/tasting_event_form.html');
// });


module.exports = router;
