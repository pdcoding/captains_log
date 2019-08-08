const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  captain: { type: String },
  ship: { type: String },
  stardate: { type: String },
  entry: { type: String }
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;
