// const express = require('express');
// const app = express();
// const PORT = 3000;

// // Middleware function to log requests
// // esko use kar ham login bna sakte hai
// const Middleware = (req, res, next) => {
//   console.log(`${req.method} ${req.url} ${req.hostname} ${req.method} ${new Date()}`);
// //   it will show the user get
//   console.log(req.get('User-Agent'))
//   next(); // Pass control to the next middleware function
// };
// const authenticate = (req, res, next) => {
//     console.log(req.query)
//     // jo localhost se ? ke baad bhejate hai use query kahte 
//     // exple http://localhost:3000/?Raj@123 output in console { 'Raj@123': '' }
// // if(req.query.Password){
//     // esko check karne ke liye http://localhost:3000/?password='123' likhe then out put in console automatic { password: '"123"' }
//     if(req.query.Password==='Raj@123'){
//         // ab ye tabhi next process karega tab tak esko password same nahi milega otherwise ye authorise show karega 
//     next()
// }else{
// res.sendStatus(401);
// }
//     // Pass control to the next middleware function
//   };
// // Apply the logger middleware
// app.use(authenticate);
// app.use(Middleware);

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware function to log requests
const logRequestMiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.url} ${req.hostname} ${new Date()}`);
    console.log(req.get('User-Agent'));
    next();
};

// Authentication middleware
const authenticate = (req, res, next) => {
    if (req.query.Password === 'Raj@123') {
        next(); // Allow the request to proceed
    } else {
        res.status(401).send('Invalid Password'); // Unauthorized
    }
};

// Apply the middleware
app.use(logRequestMiddleware);

// Define the root route
app.get('/', (req, res) => {
    if (req.query.Password === 'Raj@123') {
      // http://localhost:3000/?Password=Raj@123 by check on local server

        res.send('Password is logged in successfully');
    } else {
        res.send('Hello ji');
    }
});

//ye bhi ak tarika ha 
// Product route
//http://localhost:3000/product/123?Password=Raj@123 
app.get('/product/:id', authenticate, (req, res) => {
  console.log(req.params); // Log the product ID
  const productId = req.params.id; // Get the product ID
  // You can fetch the product from a database here based on productId
  res.json({ type: 'Get', productId }); // Respond with the product ID
});

// Other method routes with authentication as needed
app.put('/', authenticate, (req, res) => {
    res.send({ type: 'method name put' });
});

app.post('/', (req, res) => {
    res.send({ type: 'method name post' });
});

app.delete('/', authenticate, (req, res) => {
    res.send({ type: 'method name delete' });
});

app.patch('/', (req, res) => {
    res.send({ type: 'method name patch' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

