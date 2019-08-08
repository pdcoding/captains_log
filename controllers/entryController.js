const express = require('express');
const entryRouter = express.Router();
const entryModel = require('../models/entryModel');
// const seedData = require('../models/seed');

// Seed route
// entryRouter.get('/seed', (req, res) => {
//   entryModel.create(seedData, () => {
//     res.redirect('/entries');
//   });
// });

entryRouter.get('/new', (req, res) => {
  res.render('new.ejs');
});

//Archive
entryRouter.get('/', (req, res) => {
  entryModel.find({}, (err, everything) => {
    if (err) console.log(err);
    res.render('archive.ejs', {
      entryData: everything
    });
  });
});

//New
entryRouter.post('/', (req, res) => {
  entryModel.create(req.body, (err, newEntry) => {
    if (err) {
      console.log('DB Error', err);
    }

    console.log('Successfully Created', newEntry);
    entryModel.find({}, (err, everything) => {
      if (err) console.log(err);
      res.render('archive.ejs', {
        entryData: everything
      });
    });
  });
});

entryRouter.get('/:id/edit', (req, res) => {
  entryModel.findById(req.params.id, (err, currentEntry) => {
    if (err) console.log('err');
    res.render('edit.ejs', {
      thisEntry: currentEntry,
      entryId: req.params.id
    });
  });
});

//Entry
entryRouter.get('/:id', (req, res) => {
  // console.log('req.params.id: ', req.params.id);
  entryModel.findById(req.params.id, (err, currentEntry) => {
    res.render('show.ejs', {
      thisEntry: currentEntry,
      entryId: req.params.id
    });
  });
});

// UPDATE
entryRouter.put('/:id', (req, res) => {
  //   entryModel.findByIdAndUpdate(
  //     req.params.id,
  //     req.body,
  //     { new: true },
  //     (err, updatedEntryModel) => {
  //       if (err) {
  //         console.log(err);
  //       }
  //       res.redirect(`/entries/${req.params.id}`);
  //     }
  //   );
  entryModel.findById(req.params.id, (err, thisEntry) => {
    if (err) console.log(err);
    console.log('thisEntry', thisEntry);
    thisEntry.update(req.body, (err, updatedEntry) => {
      if (err) console.log(err);
      console.log(updatedEntry);
      res.redirect(`/entries/${req.params.id}`);
    });
  });
});

//Delete
entryRouter.delete('/:id', (req, res) => {
  entryModel.findByIdAndRemove(req.params.id, (err, deletedEntry) => {
    if (err) {
      console.log(err);
    } else {
      console.log('delete successful', deletedEntry);
      res.redirect('/entries');
    }
  });
});

module.exports = entryRouter;
