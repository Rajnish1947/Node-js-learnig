import express from 'express';
import userRoutes from './router.js';

const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies

// Use the user routes
app.use('/api', userRoutes); // All routes in userRoutes will be prefixed with '/api'

// Start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
