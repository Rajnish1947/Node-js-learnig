const mongoose = require("mongoose");
const express = require("express");
// ye mongo db connection provide karta hai
require("./config");
//ye medels provide karta hai
const Users = require("./models/user");
const app = express();
//json data save karta hai esiliye likhana parta hai
app.use(express.json());
app.get("/search/:key", async (req, res) => {
    const key = req.params.key;
    console.log(key);
    const data = await Users.find({
        "$or": [{ "Name": { $regex:req.params.key} },{ age: { $regex:req.params.key} }] // case-insensitive search
    });
    console.log(data)
    res.status(201).json(data);
  });
  app.listen(5000);
//   http://localhost:5000/search/Rani kumari
