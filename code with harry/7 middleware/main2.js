// Middleware in web development, particularly in Node.js with frameworks like Express, refers to functions that process requests and responses in a web application. These functions can perform a variety of tasks, such as logging, authentication, data parsing, and more. Middleware can be categorized into several types:

// Types of Middleware
// Application-Level Middleware: Middleware that is bound to an instance of the Express app. It can be used for all routes or specific routes.

// Router-Level Middleware: Middleware that is bound to a specific router instance. Useful for grouping middleware that applies to a set of routes.

// Built-in Middleware: Middleware provided by Express, such as body parsing.

// Error-Handling Middleware: Middleware specifically designed to catch errors and send error responses.

// Third-Party Middleware: Middleware created by the community, which can be installed via npm (e.g., morgan, cors, helmet).
const express = require('express');
const morgan = require('morgan'); // Third-party middleware for logging
const cors = require('cors'); // Third-party middleware for CORS

const app = express();

// Built-in middleware
app.use(express.json()); // Parse JSON request bodies

// Third-party middleware
app.use(morgan('dev')); // Log HTTP requests
app.use(cors()); // Enable CORS for all routes

// Application-level middleware
app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next(); // Pass control to the next middleware
});

// Define a router-level middleware
const router = express.Router();
router.use((req, res, next) => {
  console.log('Router middleware triggered');
  next();
});

// Example route using router-level middleware
router.get('/data', (req, res) => {
  res.json({ message: 'Hello from the data route!' });
});

// Use the router
app.use('/api', router);

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error('An error occurred:', err);
  res.status(500).send('Internal Server Error');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
