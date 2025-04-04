const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

app.use((req,res)=>{
  req
})


// Api end point
app.get("/", (req, res) => {
  console.log("You are on the / route");

  res.json(data);
});
app.put('/',(req,res)=>{
  res.send({type:'method name put '})
});
app.post('/',(req,res)=>{
  res.send({type:'method name post'})
});
app.delete('/',(req,res)=>{
  res.send({type:'method name delete'})
});
app.patch('/',(req,res)=>{
  res.send({type:'method name patch'})
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
