const express = require('express');
const fs = require("fs");
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory database (for simplicity)
 //http://localhost:3000/api/products
// http://localhost:3000/api/search?id=1
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// esko datajson se product nikale
const products=data.products;
//

// GET all products
// api root ,base url,google.com/api/v2/
// ye read karte hai api ko
app.get('/products', (req, res) => {
    res.json(products);
});
// ak product ko read karta hai

app.get('/', (req, res) => {
    res.end('find your product')
});

// GET a product by ID
app.get('/products/:id', (req, res) => {
    // ye o id hai jo hame crome se prapat ho raha hai
    const id=+req.params.id
    // ye direct line use kar sakte hai
    // const product = products.find(
    // ye product vali data json ki id hai p => p.id === parseInt(  //ye vahi jise ham variable id bna kar pass kar rahe ese use kar or uper jo bna rahe use kar le   req.params.id));
    // http://localhost:3000/products/2
    //const product = products.find(p => p.id === parseInt(req.params.id)); we can use only this line insteat of 38,32
    const product=products.find(p=> p.id===id)
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

// POST a new data  create karta hai 
//post man jakar new data crete karenge body slelect kar raw and jason type  data ke sample create kar karte hai
app.post('/products', (req, res) => {
console.log(req.body);
    //jo data create kiye use push kar diye 
    products.push(req.body);
    res.status(201).json(req.body);
});

// PUT (update) a product by ID it use for update

//     // splice methode is use to update the dat
//     // esko id is id and req.body se data send kar rah hai 
//     // id name search kar post man jakar new data crete karenge body slelect kar raw and jason type  data ke sample create kar karte hai ne with new tytle name jo chahe o chaNGE KARE
// //   post me update kar again get method me use kare  //{
// //         "id": 1,
// //         "title": "rajnish raj",
// //         "description": "ham description change kar rahe formula.",
// //         "category": "beauty",
// //         "price": 468,
// //         "discountPercentage": 7.17,
// //         "rating": 5.94,
// //         "stock": 5
       
// // }


app.put('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === id);

    // Check if the product exists
    if (productIndex === -1) return res.status(404).send('Product not found');

    // Update the product
    const updatedProduct = { ...products[productIndex], ...req.body, id: id }
    // If the product exists, we create a new object updatedProduct. We spread the existing product's data (products[productIndex]) and merge it with the new data provided in req.body (the updated values). We also ensure that the id remains unchanged.;
    products[productIndex] = updatedProduct;
//Here, we replace the old product in the products array with the newly updated product
    // Send the updated product back in the response
    res.json(updatedProduct);
    //res.json(updatedProduct). This allows the client to see the result of their update request.
});
// PATCH (update certain fields of a product by ID) jise update kiye rahte hai use jise nahi kiye rahte hai o bhi out put karta hai jab put only updatehi show karta but kuch method ka use kar shoe kra skate hai 
app.patch('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === id);

    // Check if the product exists
    if (productIndex === -1) return res.status(404).send('Product not found');

    // Update the product with only the fields provided in req.body
    const updatedProduct = { ...products[productIndex], ...req.body };
    products[productIndex] = updatedProduct;

    // Send the updated product back in the response
    res.json(updatedProduct);
});

// DELETE a product by ID
app.delete('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === id);

    // Check if the product exists
    if (productIndex === -1) return res.status(404).send('Product not found');

    // Remove the product from the array
    const deletedProduct = products.splice(productIndex, 1);

    // Send the deleted product back in the response
    res.json(deletedProduct[0]);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

