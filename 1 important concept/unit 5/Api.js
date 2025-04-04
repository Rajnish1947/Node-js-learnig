// call back function ka use kar ke code ko more readable banayenge
const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;
app.use(express.json()); //http://localhost:3000/api/products // http://localhost:3000/api/search?id=1
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;
//sbka function bna lete hai
const get = (req, res) => {
  res.json(products);
};
const productid = (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  if (!product) return res.status(404).send("Product not found");
  res.json(product);
};
const post = (req, res) => {
  console.log(req.body);
  //jo data create kiye use push kar diye
  products.push(req.body);
  res.status(201).json(req.body);
};
const put = (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex((p) => p.id === id);

  // Check if the product exists
  if (productIndex === -1) return res.status(404).send("Product not found");

  // Update the product
  const updatedProduct = { ...products[productIndex], ...req.body, id: id };
  // If the product exists, we create a new object updatedProduct. We spread the existing product's data (products[productIndex]) and merge it with the new data provided in req.body (the updated values). We also ensure that the id remains unchanged.;
  products[productIndex] = updatedProduct;
  //Here, we replace the old product in the products array with the newly updated product
  // Send the updated product back in the response
  res.json(updatedProduct);
  //res.json(updatedProduct). This allows the client to see the result of their update request.
};
const deletedProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex((p) => p.id === id);

  // Check if the product exists
  if (productIndex === -1) return res.status(404).send("Product not found");

  // Remove the product from the array
  const deletedProduct = products.splice(productIndex, 1);

  // Send the deleted product back in the response
  res.json(deletedProduct[0]);
};
//yaha sab me call back function call kar liya hai
app.get("/products", get);

app.get("/products/:id", productid);

app.post("/products", post);

app.put("/products/:id", put);

app.patch("/products/:id", put);

app.delete("/products/:id", deletedProduct);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
