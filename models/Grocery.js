const mongoose = require('mongoose');

const grocerySchema = new mongoose.Schema({
  itemName: String,
  Quantity: Number,
  ExpiryDate: String
});

module.exports = mongoose.model('Grocery', grocerySchema);
