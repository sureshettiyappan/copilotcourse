// create web server
// import modules
// handle request
// handle response
// listen for requests
// create routes
// handle get request
// handle post request
// handle put request
// handle delete request

// import modules
const express = require('express');
const comments = require('./comments.json');
const fs = require('fs');

// create web server
const app = express();

// handle request
app.use(express.json());

// handle response
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
});

// listen for requests
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// create routes
// handle get request
app.get('/comments', (req, res) => {
    res.json(comments);
});

// handle post request
app.post('/comments', (req, res) => {
    const { id, body } = req.body;
    comments.push({ id, body });
    fs.writeFile('comments.json', JSON.stringify(comments, null, 2), err => {
        if (err) {
            res.status(500).json({ message: 'An error occurred' });
        } else {
            res.status(201).json({ message: 'Comment created successfully' });
        }
    });
});

// handle put request
app.put('/comments/:id', (req, res) => {
    const id = req.params.id;
    const { body } = req.body;
    const comment = comments.find(comment => comment.id === id);
    if (comment) {
        comment.body = body;
        fs.writeFile('comments.json', JSON.stringify(comments, null, 2), err => {
            if (err) {
                res.status(500).json({ message: 'An error occurred' });
            } else {
                res.status(200).json({ message: 'Comment updated successfully' });
            }
        });
    } else {
        res.status(404).json({ message: 'Comment not found' });
    }
});

// handle delete request
app.delete('/comments/:id', (req, res) => {
    const id = req.params.id;
    const index = comments.findIndex(comment => comment.id === id);
    if (index !== -1) {
        comments.splice(index, 1);
        fs.writeFile('comments.json', JSON.stringify(comments, null, 2), err => {
            if (err) {
                res