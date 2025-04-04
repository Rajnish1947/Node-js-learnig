const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

exports.get = (req, res) => {
    res.json(products);
};

exports.productid = (req, res) => {
    const id = +req.params.id;
    const product = products.find((p) => p.id === id);
    if (!product) return res.status(404).send("Product not found");
    res.json(product);
};

exports.post = (req, res) => {
    console.log(req.body);
    products.push(req.body);
    res.status(201).json(req.body);
};

exports.put = (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex((p) => p.id === id);
  
    if (productIndex === -1) return res.status(404).send("Product not found");
  
    const updatedProduct = { ...products[productIndex], ...req.body, id: id };
    products[productIndex] = updatedProduct;
    res.json(updatedProduct);
};

exports.deletedProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex((p) => p.id === id);
  
    if (productIndex === -1) return res.status(404).send("Product not found");
  
    const deletedProduct = products.splice(productIndex, 1);
    res.json(deletedProduct[0]);
};