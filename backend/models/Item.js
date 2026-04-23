const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  itemName: {
    type: String,
    required: [true, 'Please provide an item name'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description'],
  },
  type: {
    type: String,
    enum: ['Lost', 'Found'],
    required: [true, 'Please specify if item is Lost or Found'],
  },
  location: {
    type: String,
    required: [true, 'Please provide a location'],
  },
  date: {
    type: Date,
    required: [true, 'Please provide a date'],
  },
  contactInfo: {
    type: String,
    required: [true, 'Please provide contact information'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Item', itemSchema);
