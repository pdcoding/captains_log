//Dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Entry = require('./models/entryModel');
// console.log(express);

//Allow Heroku
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

//Database
//Connect to db either via heroku or locally
const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/captainsdb';

//Routes
app.get('/', (req, res) => {
  res.send(logs);
});

//Connect to Mongo
mongoose.connect(
  'mongodb://localhost:27017/captainsdb',
  { useNewUrlParser: true },
  () => console.log('connected to db')
);

//Listener
app.listen(PORT, () => console.log('Listening on port:', PORT));
