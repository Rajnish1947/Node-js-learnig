const NewdbConnect = require('./NewOther.js');
const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// GET route to fetch data
app.get('/', async (req, res) => {
    try {
        let data = await NewdbConnect();
        data = await data.find().toArray();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
});

// POST route to receive data
app.post('/post', (req, res) => {
    console.log('Received data:', req.body); // Log the request body to check if data is received
    res.json({name:"rajnish"});
});

// Start the server
app.listen(4000);
