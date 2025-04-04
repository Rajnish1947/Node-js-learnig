// const express = require('express');
// const app = express();
// const port = 3000;
// //rout
// //post use karne ke liye hame ye use karna parta hai
// app.use(express.static('public')),
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.get('/about', (req, res) => {
//     res.send('this our about page');
//   });
  
// app.get('/home', (req, res) => {
//     console.log("this our get request")
//     res.send('this is our home page');
//   });
//   app.post('/', (req, res) => {
//     console.log("this our post request")
//     res.send('hellow word');
//   });
 

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // Serve static files from 'public' directory
app.use(express.json()); // Middleware to parse JSON bodies

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

