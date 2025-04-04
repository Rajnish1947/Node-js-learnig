const express = require('express');
const app = express();
const PORT = 3000;

// Middleware function to log requests
// esko use kar ham login bna sakte hai
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
//   it will show the user get
  console.log(req.get('User-Agent'))
  next(); // Pass control to the next middleware function
};

// Apply the logger middleware
app.use(logger);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
