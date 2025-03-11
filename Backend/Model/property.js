// models/Property.js
const mongoose = require('mongoose');


const propertySchema = new mongoose.Schema({
  propertyCategory: {
    type: String,
    enum: ['Apartment', 'Plot', 'Villa'],
    required: true,
  },
  title: { type: String },
  description: { type: String },
  price: { type: Number },
  agent_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Agent'},
  city: { type: String },
  district: { type: String },
  state: { type: String },
  country: { type: String },
  building_name: { type: String },
  street: { type: String },
  zip_code: { type: String },
  bedrooms: { type: Number },
  bathrooms: { type: Number },
  area_sqft: { type: Number },
  images: [{ type: String }], // Array to store image paths
  videos: [{ type: String }], // Array to store video paths
  // Specific fields for categories
  floor: { type: Number }, // Apartment specific
  unit_number: { type: String },
  area_acres: { type: Number }, // Plot specific
  zoning_type: { type: String },
  floors: { type: Number }, // Villa specific
  parking_spaces: { type: Number },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Property', propertySchema);
