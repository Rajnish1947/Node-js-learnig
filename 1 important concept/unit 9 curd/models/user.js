const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    Name: String,
    email: String,
    mob: String,
    addres: String,
    age: Number,
    regno: Number,
    
  });
  module.exports=mongoose.model("users", userSchema); 