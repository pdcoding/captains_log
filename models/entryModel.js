const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  captain: { type: String },
  stardate: { type: Number },
  ship: { type: String },
  entry: { type: String }
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;
