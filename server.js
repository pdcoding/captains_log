//Dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const entryController = require('./controllers/entryController');
const Entry = require('./models/entryModel');

//Allow Heroku
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use('/entries', entryController);

//Routes
// app.get('/', (req, res) => {
//   res.render(logs);
// });

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/records/:id', (req, res) => {
  // console.log('req.params.id: ', req.params.id);
  Entry.findById(req.params.id, (err, currentEntry) => {
    res.render('show.ejs', {
      thisEntry: currentEntry
    });
  });
});

//Database
//Connect to db either via heroku or locally
const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/captainsdb';

//Connect to Mongo
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, () =>
  console.log('connected to db')
);

//Listener
app.listen(PORT, () => console.log('Listening on port:', PORT));
