const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  name: {
     type: String,
      required: true
     },
  email: { 
    type: String,
     required: true,
      unique: true 
    },
  password: {
     type: String,
      required: true 
    },
  otp:{
    type:String
  },
  newpassword:{
    type:String
  },
    role: {
      type: String,
      enum: ['Agent', 'User'],
      required: true
    }
},{timestamps:true});


module.exports = mongoose.model('User', userSchema);
