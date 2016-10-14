import mongoose, { Schema } from 'mongoose';
 
var clientSchema = new Schema({  
  name : String,
  img : String,
  url : String
});
 
module.exports = mongoose.model('CLIENT', clientSchema);  

