// create web server
const express = require('express');
const app = express();
const PORT = 3000;

// import comments data
const comments = require('./comments.json');

// set view engine
app.set('view engine', 'ejs');

// get comments
app.get('/comments', (req, res) => {
    res.render('comments', { comments: comments });
});

// get comment by id
app.get('/comments/:id', (req, res) => {
    const id = req.params.id;
    const comment = comments.find(comment => comment.id === Number(id));
    res.render('comment', { comment: comment });
});

// listen to PORT
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});