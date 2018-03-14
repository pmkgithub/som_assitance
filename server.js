const express = require('express');
const morgan = require('morgan');
const app = express();

// middlewares
app.use(morgan('common'));
app.use(express.static('public'));

// start server
app.listen(process.env.PORT || 8080, () => {
  console.log('App is running on PORT', process.env.PORT || 8080);
});