// create web server
// npm install express
// npm install body-parser
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// create comments array
const comments = [
    {name: 'name1', message: 'message1'},
    {name: 'name2', message: 'message2'},
];
// show all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});
// add new comment
app.post('/comments', (req, res) => {
    const {name, message} = req.body;
    comments.push({name, message});
    res.json({status: 'success', message: 'comment added'});
});
// start web server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});