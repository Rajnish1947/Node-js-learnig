const express = require("express");
const app = express();

// Set the view engine to EJS
app.set("view engine", "ejs");

// Define routes
app.get("/", (req, res) => {
  const data = { title: "My EJS Page", message: "Hello, EJS!" };
  res.render("index", data);
});

app.get("/profile", (req, res) => {
  const data1 = {
    name: 'Rajnish Kumar',
    email: 'kumarraj@gmail.com',
    age: 12,
    address: 'Rampur Bindalal'
  };
  res.render("profile", { data1 });
});

app.listen(3000);

