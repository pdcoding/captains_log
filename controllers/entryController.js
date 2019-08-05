const express = require('express');
const entryRouter = express.Router();
const entryModel = require('../models/entryModel');

entryRouter.get('/', (req, res) => {
  entryModel.find({}, (err, everything) => {
    if (err) console.log(err);
    res.render('index.ejs', {
      entryData: everything
    });
  });
});

module.exports = entryRouter;
