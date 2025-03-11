const mongoose = require('mongoose');


const villaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['available', 'sold', 'rented'],
    default: 'available'
  },
  agent_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Agent',  // Reference to the Agents collection
    required: true
  },
  location: {
    city: String,
    state: String,
    country: String,
    zip_code: String,
    coordinates: {
      latitude: Number,
      longitude: Number
    }
  },
  features: {
    bedrooms: {
      type: Number,
      required: true
    },
    bathrooms: {
      type: Number,
      required: true
    },
    floors: {
      type: Number,
      required: true
    },
    area_sqft: {
      type: Number,
      required: true
    },
    parking_spaces: {
      type: Number,
      default: 1
    }
  },
  amenities: [String],  // e.g., ["Garden", "Private Pool", "Gym", "Security"]
  has_garden: {
    type: Boolean,
    default: false
  },
  has_pool: {
    type: Boolean,
    default: false
  },
  // List of important landmarks near the villa
  has_pool: {
    type: [String]
  },
  // Array of URLs for villa images
  images: {
    type: [String]
  },
  property: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Property',  // Link to the Property schema
    required: true 
  } 
}, { timestamps: true });  // Automatically adds createdAt and updatedAt fields

module.exports = mongoose.model('Villa', villaSchema);
