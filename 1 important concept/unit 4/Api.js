// const express = require('express');
// const fs = require("fs");
// const app = express();
// const PORT = 3000;

// // Middleware to parse JSON bodies
// app.use(express.json());

// // In-memory database (for simplicity)
// let products = [
//     { id: 1, name: 'Product 1', price: 100 },
//     { id: 2, name: 'Product 2', price: 200 }
// ];

// // GET all products
// //http://localhost:3000/api/products

// app.get('/api/products', (req, res) => {
//     res.json(products);
// });
// app.get('/', (req, res) => {
//     res.end('hello ji')
// });

// // GET a product by ID
// app.get('/api/products/:id', (req, res) => {
//     const product = products.find(p => p.id === parseInt(req.params.id));
//     if (!product) return res.status(404).send('Product not found');
//     res.json(product);
// });

// // POST a new product
// app.post('/api/products', (req, res) => {
//     const product = {
//         id: products.length + 1,
//         name: req.body.name,
//         price: req.body.price
//     };
//     products.push(product);
//     res.status(201).json(product);
// });

// // PUT (update) a product by ID
// app.put('/api/products/:id', (req, res) => {
//     const product = products.find(p => p.id === parseInt(req.params.id));
//     if (!product) return res.status(404).send('Product not found');

//     product.name = req.body.name;
//     product.price = req.body.price;
//     res.json(product);
// });

// // DELETE a product by ID
// app.delete('/api/products/:id', (req, res) => {
//     const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
//     if (productIndex === -1) return res.status(404).send('Product not found');

//     const deletedProduct = products.splice(productIndex, 1);
//     res.json(deletedProduct);
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory database (for simplicity)
 //http://localhost:3000/api/products
// http://localhost:3000/api/search?id=1
//
let products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 }
];

// GET all products

app.get('/api/products', (req, res) => {
    res.json(products);
});
app.get('/', (req, res) => {
    res.json(products);
});

// GET a product by ID
app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found');
    res.json(product);
});

// Search for a product by ID using a query parameter
app.get('/api/search', (req, res) => {
    const id = parseInt(req.query.id);
    if (!id) return res.status(400).send('Product ID is required');

    const product = products.find(p => p.id === id);
    if (!product) return res.status(404).send('Product not found');

    res.json(product);
});

// POST a new product
app.post('/api/products', (req, res) => {
    const product = {
        id: generateId(),
        name: req.body.name,
        price: req.body.price
    };
    products.push(product);
    res.status(201).json(product);
});

// PUT (update) a product by ID
app.put('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found');

    product.name = req.body.name;
    product.price = req.body.price;
    res.json(product);
});

// DELETE a product by ID
app.delete('/api/products/:id', (req, res) => {
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
    if (productIndex === -1) return res.status(404).send('Product not found');

    const deletedProduct = products.splice(productIndex, 1);
    res.json(deletedProduct);
});

// Utility function to generate a new ID
const generateId = () => {
    return products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
};

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
