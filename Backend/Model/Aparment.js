const mongoose = require('mongoose');
 

const apartmentSchema = new mongoose.Schema({
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
    building_name: String,
    street: String,
    city: String,
    state: String,
    country: String,
    zip_code: String,
    floor: Number,
    unit_number: String
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
    area_sqft: {
      type: Number,
      required: true
    },
    // e.g., ["Gym", "Swimming Pool", "24/7 Security"]
    amenities:{
        type:[String]
    } 
  },
    // List of important landmarks near the apartment
    nearby_landmarks:{
    type:[String]
    } ,
  // Array of URLs for apartment images  
   images:{
    type:[String]
   }  ,
   property: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Property',  // Link to the Property schema
    required: true 
  } 
}, { timestamps: true });  // Automatically adds createdAt and updatedAt fields

module.exports = mongoose.model('Apartment', apartmentSchema);
