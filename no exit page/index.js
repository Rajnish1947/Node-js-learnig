//jab ham kisi ko page ko serch kiye aur page nahi hot kaise banayege

//esake liye sendfile function ka use karte hai

//esake liye sendfile function ka use karte hai

//esake liye sendfile function ka use karte hai

//this page show any url type

//esake liye sendfile function ka use karte hai

// usame satatic nahi use hota hai

const express = require("express");
const path = require("path");
const app = express();
const publicPath = path.join(__dirname, 'public');

// Serve index.html at the root URL
app.get('/', (req, res) => {
    res.sendFile(`${publicPath}/index.html`);
});

// Serve about.html at /about
app.get('/about', (req, res) => {
    res.sendFile(`${publicPath}/about.html`);
});

// Serve home.html at /home
app.get('/home', (req, res) => {
    res.sendFile(`${publicPath}/home.html`);
});

// Serve help.html for any other URL
app.get('*', (req, res) => {
    res.sendFile(`${publicPath}/help.html`);
});
app.listen(5000);
// const express=require('express');
// const path = require("path");
// const app = express();
// const publicPath = path.join(__dirname, 'public');

// // Serve index.html at the root URL
// app.get('/', (_, res) => {
//     res.sendFile(`${publicPath}/index.html`, (err) => {
//         if (err) {
//             console.error('Error sending index.html:', err);
//             res.status(500).send('Server Error');
//         }
//     });
// });

// // Serve about.html at /about
// app.get('/about', (_, res) => {
//     res.sendFile(`${publicPath}/about.html`, (err) => {
//         if (err) {
//             console.error('Error sending about.html:', err);
//             res.status(500).send('Server Error');
//         }
//     });
// });

// // Serve home.html at /home
// app.get('/home', (_, res) => {
//     res.sendFile(`${publicPath}/home.html`, (err) => {
//         if (err) {
//             console.error('Error sending home.html:', err);
//             res.status(500).send('Server Error');
//         }
//     });
// });

// // Serve help.html for any other URL
// app.get('*', (_, res) => {
//     res.sendFile(`${publicPath}/help.html`, (err) => {
//         if (err) {
//             console.error('Error sending help.html:', err);
//             res.status(500).send('Server Error');
//         }
//     });
// });

// // Start the server on port 5000
// app.listen(5000, () => {
//     console.log("Server is running on port 5000");
// });



