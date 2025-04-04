const express = require("express");
const app = express();

// HTML data served by routes
app.get('', (req, res) => {
    res.send("<h1>This is our HTML Tag</h1>");
});

app.get('/home', (req, res) => {
    res.send(`<h1>This is our heading of our page</h1>
        <input type='text' placeholder='Enter your name'/>
        <button>Click me</button>
    `);
});

app.get('/about', (req, res) => {
    res.send("<h1>This is our about page</h1>");
});
//json data
app.get('/json', (req, res) => {
    res.send({
        name:"rajnish kumar",
        age:45,
        Address:"rampur bindalal",

    });

});
app.get('/json1', (req, res) => {
    res.send([
        {
            name: "rajnish kumar",
            age: 45,
            Address: "rampur bindalal"
        },
        {
            name: "rajnish kumar",
            age: 45,
            Address: "rampur bindalal"
        }
    ]);
});
//link
app.get('/link', (req, res) => {
    res.send(`<h1>That is our link one page with another page</h1>
        <a href='/about'>go to on about page</a>
       
    `);
});

app.listen(4000);
