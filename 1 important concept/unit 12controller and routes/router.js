import express from 'express';
import { getAllUsers, createUser } from './controller.js';

const router = express.Router();

// Define routes and link them to controller functions
router.get('/users', getAllUsers); // GET request to fetch all users
router.post('/users', createUser); // POST request to create a new user

export default router;
