const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
  email: { type: String, required: true },
  optIn: { type: Boolean, default: false },
  event: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Email', emailSchema);