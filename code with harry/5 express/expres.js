//ye frame work hai
// // express ko call kiye hai 
// const express = require('express');
// // const app = express();
// const port = 3000;
// //rout
// // express().get('/', (req, res) => {
// //   res.send('Hello World!');
// // });

// app.get('/about', (req, res) => {
//     res.send('this our about page');
//   });
  
// app.get('/home', (req, res) => {
//     res.send('this is our home page');
//   });
//   app.get('/raj/new', (req, res) => {
//     res.send('this is our new page slas upon slash');
//   });
//   //jo url me dalenge vahi likh kar dikhayenge
//   app.get('/new/:fst/:last', (req, res) => {
//     console.log(`ye batayega ham kya enter kiye url me`,req.params)
//     res.send(`<h1>ye ham create kiye ${req.params.fst} and ${req.params.last} <h2>`);
// });

// express().listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
const express = require('express');
const port = 3000;

// Express ko seedha use karke route define karna
express()
  .get('/', (req, res) => {
    res.send('Hello World!');
  })
  .listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
