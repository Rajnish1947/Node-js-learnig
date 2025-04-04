const mongoose=require('mongoose');
const Newshema=require('./models/dbs')
const express=require('express')
mongoose.connect('mongodb+srv://kumarrajnish28443:Raj%403454@cluster0.qecwf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
const app=express();
app.get('/',(req,res)=>
   
    {
    res.send('hello');

})
app.listen(4000);

