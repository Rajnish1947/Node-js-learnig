// const express = require('express');
// const app = express();
// const port = 3000;



// app.get('/', (req, res) => {
//     console.log("hey its html ");
//     res.sendFile('hello word ');
// });




// app.get('/index', (req, res) => {
//     console.log("hey its html ");
//     res.sendFile('./Tampalates/index.html', { root: __dirname });
// });

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
// });

//ejs tamplates egine hai
const express = require('express');
const path = require('path'); // Import path module
const app = express();
const port = 3000;

// Route for the root path
app.get('/', (req, res) => {
    console.log("hey it's HTML");
    res.send('Hello World'); // Simple response
});

// Route for the /index path
app.get('/index', (req, res) => {
    console.log("Serving index.html");
    res.sendFile('./Tampalates/index.html', { root: __dirname });
    //res.sendFile(path.join(__dirname, 'Tampalates', 'index.html')); // Use path.join for the absolute path
});

// Start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


