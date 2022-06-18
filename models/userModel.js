var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create an schema
var userSchema =  new Schema({
            name: String,
            email: String
        });
 
var userModel = mongoose.model("users",userSchema);

 
module.exports = userModel;