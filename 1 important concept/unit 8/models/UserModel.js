const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    Name:String,
    email:String,
    mob:Number,
    addres:String,
    age:Number,
    regno:Number,
    
});
module.exports=mongoose.model('user',userSchema);