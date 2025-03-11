const mongoose = require('mongoose');
const Property = require('./property'); 

const PlotSchema = new mongoose.Schema({
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
    enum: ['available', 'sold', 'reserved'],
    default: 'available'
  },
  agent_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Agent',  // Reference to the Agents collection
    // required: true
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
  area_acres: {
    type: Number
  },
  zoning_type: {
    type: String
  }, 
  // e.g., Residential, Commercial, Agricultural
  nearby_landmarks: {
    type:[String]
   } ,
  images: {
   type: [String]
   },
   property: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Property',  // Link to the Property schema
    required: true 
  } 
}, 
// `timestamps: true` automatically adds `createdAt` and `updatedAt` fields
{ timestamps: true });



module.exports = mongoose.model('PlotDetails', PlotSchema);
