import mongoose, { Schema } from 'mongoose';
 
var clientSchema = new Schema({  
  email : String,
  password : String
});
 
module.exports = mongoose.model('LOGIN', clientSchema);  

