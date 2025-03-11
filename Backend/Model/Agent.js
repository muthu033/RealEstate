const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema({
  // user_id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User', // Reference to the User collection
  //   required: true
  // },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  bio: {
    type: String,
    default: ''
  },
  // agency_name: {
  //   type: String,
  //   required: true
  // },
  profile_picture:[String],
  properties_managed: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Property' // Reference to the Property collection
  }]
}, { timestamps: true });

module.exports = mongoose.model('Agent', agentSchema);
