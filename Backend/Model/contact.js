const mongoose = require('mongoose');


const contactSchema = new mongoose.Schema({
name: {
    type: String,
     required: true
    },
 email: { 
   type: String,
    required: true,
     
   },
   phone:{ 
    type: String,
    required: true,
    },

   subject:{
     type:String
   },
   saySomething:{
      type:String
   }},{timestamps:true});


   module.exports = mongoose.model('contact', contactSchema);
   