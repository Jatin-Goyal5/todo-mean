const mongoose = require("mongoose");
const uniqueValidator= require("mongoose-unique-validator");
var validator = require("email-validator");
const userSchema = mongoose.Schema({
  email:{
    type:String,
    validate:function(){
        return validator.validate(this.email);
    },
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true
  },

});
userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User',userSchema);
