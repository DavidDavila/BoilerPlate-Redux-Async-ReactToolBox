import mongoose, { Schema } from 'mongoose';
 
var userSchema = new Schema({  
  name : String,
  surname : String,
  phone : String,
  position : String,
  email : String,
  password : String
});
 
module.exports = mongoose.model('USER', userSchema);  

