const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  captain: { type: String },
  ship: { type: String },
  stardate: { type: Number },
  entry: { type: String }
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;
