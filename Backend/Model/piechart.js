const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  propertyCategory: {
    type: String,
    required: true,
    enum: ["Apartment", "plot", "villa"],
  },
  propertyName: String,
  location: String,
  price: Number,
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
