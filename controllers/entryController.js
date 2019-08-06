const express = require('express');
const entryRouter = express.Router();
const entryModel = require('../models/entryModel');
const seedData = require('../models/seed');
const Entry = require('./entryController');

// Seed route
// entryRouter.get('/seed', (req, res) => {
//   entryModel.create(seedData, () => {
//     res.redirect('/entries');
//   });
// });

entryRouter.get('/', (req, res) => {
  entryModel.find({}, (err, everything) => {
    if (err) console.log(err);
    res.render('archive.ejs', {
      entryData: everything
    });
  });
});

module.exports = entryRouter;
