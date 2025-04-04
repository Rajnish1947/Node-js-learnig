// userController.js
export const getAllUsers = (req, res) => {
    // Logic to fetch users from the database
    const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
    res.json(users); // Respond with JSON data
};

export const createUser = (req, res) => {
    // Logic to create a new user
    const newUser = req.body; // Assume user data is sent in the request body
    // Save newUser to the database here
    res.status(201).json(newUser); // Respond with the created user and status 201
};
