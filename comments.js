// create web server
// create a route for /comments
// send back an array of comments

const express = require('express');
const app = express();
const port = 3000;

const comments = [
  { username: 'Tammy', comment: 'lololol' },
  { username: 'Bobby', comment: 'lmao' },
  { username: 'Lucy', comment: 'rofl' }
];

app.get('/comments', (req, res) => {
  res.send(comments);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// $ node comments.js
// Server is running on port 3000

// go to http://localhost:3000/comments
// [ { username: 'Tammy', comment: 'lololol' },
//   { username: 'Bobby', comment: 'lmao' },
//   { username: 'Lucy', comment: '