const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to serve static files
app.use(express.static('public'));

// Middleware to check login
const authenticate = (req, res, next) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'admin123') {
        next(); // Proceed to the next middleware or route handler
    } else {
        res.status(401).send('user is not defined');
    }
};

// Login route
app.post('/login', authenticate, (req, res) => {
    res.send('Login successful!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
