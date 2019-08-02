//Dependencies
const express = require('express');
console.log(express);
const app = express();
const mongoose = require('mongoose');

//Allow Heroku
const PORT = process.env.PORT || 3000;

//Database
//Connect to db either via heroku or locally
const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost/captains_db';

//Routes
app.get('/', (req, res) => {
  res.send('app is running!');
});

//Connect to Mongo
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, () => {
  console.log('connected to mongo database');
});

//Listener
app.listen(PORT, () => console.log('Listening on port:', PORT));
