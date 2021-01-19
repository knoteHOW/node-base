const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const helmet = require('helmet');
require('dotenv').config();

const app = express();

const rootRoutes = require('./routes');

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

app.use('/', rootRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});

module.exports = app;