const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true // Ensure role names are unique
  },
  description: {
    type: String,
    default: ''
  },
  permissions: {
    type: [String], // Array of permissions associated with this role
    default: []
  }
}, { timestamps: true });

module.exports = mongoose.model('Role', roleSchema);
