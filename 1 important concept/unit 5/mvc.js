const express = require("express");
const morgan = require("morgan");
const path = require("path"); // Only needed if serving static files
const controller = require('./controller/controleer');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(morgan('combined')); // Specify combined format for logging

// Static file serving (if you have static files)
app.use(express.static(path.join(__dirname, 'public'))); // Ensure this directory exists

// Routes
app.get("/products", controller.get);
app.get("/products/:id", controller.productid);
app.post("/products", controller.post);
app.put("/products/:id", controller.put);
app.patch("/products/:id", controller.patch); // Change this if needed
app.delete("/products/:id", controller.deletedProduct);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

