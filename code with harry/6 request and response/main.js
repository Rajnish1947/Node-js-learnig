const express = require('express');
const blog=require('./expressroutes/blog')
const shop=require('./expressroutes/shop')
const app = express();
const port = 3000;

app.use(express.static('public')); // Serve static files from 'public' directory
app.use('/blog',blog)
app.use('/shop',shop)

app.get('/', (req, res) => {
    console.log('hey this is your GET request');
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('This is our about page');
});

app.get('/home', (req, res) => {
    console.log("This is our GET request");
    res.send('This is our home page');
});

app.put('/', (req, res) => {
    console.log("This is our PUT request");
    res.send('Hello World PUT');
});

app.post('/post', (req, res) => {
    console.log("This is our POST request");
    res.send('Hello World POST');
});

app.delete('/', (req, res) => {
    console.log("This is our DELETE request");
    res.send('Hello World DELETE');
});

app.get('/index', (req, res) => {
    console.log("hey its html ");
    res.sendFile('./HTMLFILE/index.html', { root: __dirname });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
