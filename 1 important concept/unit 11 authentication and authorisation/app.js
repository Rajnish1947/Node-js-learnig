const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.cookie("name","rajnish")
    res.send('done')
})
app.get('/new',(req,res)=>{
  
    res.send('without cookies')
})
app.listen(4000,()=>{
    console.log('server is running')
})