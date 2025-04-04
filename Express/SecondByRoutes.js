const express=require("express");
const App=express();
// we are definig the routes 
App.get('',(req,res)=>{
    res.send('hello,this firsst route for home');

});
App.get('/home',(req,res)=>{
    res.send('hello,this from  the home routes');

});
App.get('/about',(req,res)=>{
    res.send('hello,this  route for about');

});
App.get('/contact',(req,res)=>{
    res.send('this your contact number 6205115897');

});
App.listen(5000);