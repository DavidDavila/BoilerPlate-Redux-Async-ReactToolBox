import mongoose, { Schema } from 'mongoose';
 
var contactSchema = new Schema({  
  token : String,
  email : String,
  phone : String,
  street : String,
  twitter : String,
  facebook : String,
  map : String
});
 
module.exports = mongoose.model('CONTACT', contactSchema);  

