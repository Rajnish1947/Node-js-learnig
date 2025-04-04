const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// In-memory data store
let posts = [
    { id: 1, title: 'Hello World' },
    { id: 2, title: 'Hello Node' },
    { id: 3, title: 'Hello Express' },
    // ... other posts
];

// GET request - Retrieve all posts
app.get('/posts', (req, res) => {
    res.json(posts);
});

// POST request - Create a new post
app.post('/posts', (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    };
    posts.push(newPost);
    res.status(201).json(newPost);
});

// PUT request - Update an existing post
app.put('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).send('Post not found.');

    post.title = req.body.title;
    res.json(post);
});

// DELETE request - Delete a post
app.delete('/posts/:id', (req, res) => {
    posts = posts.filter(p => p.id !== parseInt(req.params.id));
    res.status(204).send();
});

// Start the server
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
