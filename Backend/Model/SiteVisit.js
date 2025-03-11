const mongoose = require('mongoose');

const siteVisitSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User collection
    required: true
  },
  property_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Property' // Reference to the Property collection
  },
  visit_date: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['scheduled', 'completed', 'cancelled'],
    default: 'scheduled'
  },
  feedback: {
    type: String,
    default: ''
  }
}, { timestamps: true });

module.exports = mongoose.model('SiteVisit', siteVisitSchema);
