const mongoose = require("mongoose");
const express = require("express");
// ye mongo db connection provide karta hai
require("./config");
//ye medels provide karta hai
const Users = require("./models/user");
const app = express();
//json data save karta hai esiliye likhana parta hai
app.use(express.json());
// create kar rahe
app.post("/create", async (req, res) => {
  let data = new Users(req.body);
  let result = await data.save();
  console.log(result);
  res.status(201).json(result);
});
app.get("/read", async (req, res) => {
  let result = await Users.find();
  console.log(result);
  res.status(201).json(result);
});
app.delete("/delete", async (req, res) => {
  let result = await Users.deleteOne({"Name": "ankita Kumari"}
  );
  console.log(result);
  res.status(201).json(result);
});
app.put("/update", async (req, res) => {
    
        // {}conditin
        // { $set}
        let result = await Users.updateMany(
            { Name: "shilpi Kumari" }, // Condition to find documents
            { $set: { Name: "arti Kumari" } } // Update operation
        );
    console.log(result);
    res.status(201).json(result);
  });
app.listen(5000);
